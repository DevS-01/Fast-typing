import React  from "react"

function App() {
  const STARTING_TIME = 10
  const [text , setText] = React.useState("")

  const [time , setTime] = React.useState(STARTING_TIME)

  const [run , setRun] = React.useState(false)

  const [wrdCount , setCount] = React.useState(0)

  const inpRef = React.useRef(null)

  function change(e){
      const value = e.target.value
      setText(value)
  }

  function count(str){
      const ar = str.trim().split(" ")
      return ar.filter(word => word !== "").length
  }  
  
  function Start(){
      setRun(true)
      setTime(STARTING_TIME)
      setText("")
      inpRef.current.disabled = false
      inpRef.current.focus()
  }

  function endgame(){
      setRun(false)
      let len =count(text)
      setCount(len)
  }
  
  React.useEffect(() => {

      if(run && time > 0){

          setTimeout(() => {
              setTime(time => time-1)
          }, 1000)
      }

      else if(time === 0)
      {
          endgame()
      }

  } , [time , run])

  return(
      <div className="conatiner">
          <h1>How fast do you type?</h1>

          <textarea 
                  onChange={change}
                  value={text}
                  disabled={!run}
                  ref={inpRef}/>

          <h4>Time remaining: {time}</h4>

          <button onClick={Start}
                  disabled={run}
                  >Start</button>

          <h1>Word count: {wrdCount}</h1>
      </div>
  )
}

export default App
