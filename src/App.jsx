import { useEffect, useState } from "react";

function App() {

  const [inpYear, setInpYear] = useState('')
  const [inpMonth, setInpMonth] = useState('')
  const [inpDay, setInpDay] = useState('')
  const [age, setAge] = useState(null)
  const [today, setToday] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 100000)
    return () => {
      clearInterval(timer);
    }
  }, [])

  const inputDate = new Date(`${inpYear}-${inpMonth}-${inpDay}`)
  const dateMs = today.getTime() - inputDate.getTime()
  const getYear = dateMs / (1000 * 3600 * 24 * 365)
  const getDay = dateMs / (1000 * 3600 * 24)
  const getMonth = today.getMonth() - inputDate.getMonth()

  const calculate = () => {

    console.log(getMonth, "/", getYear, "/", getDay)
  }

  useEffect(() => {
    inpDay,
      inpMonth,
      inpYear
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <>

      <div className="app">
        <div className="container">
          {/* <h1>{calculate()} </h1> */}
          <div onSubmit={handleSubmit} className="container-input">
            <span>Day <input
              value={inpDay}
              type="number"
              onChange={(e) => setInpDay(e.target.value)}
            /></span>
            <span>Month<input
              value={inpMonth}
              type="number"
              onChange={(e) => setInpMonth(e.target.value)}
            /></span>
            <span>Year<input
              value={inpYear}
              type="number"
              onChange={(e) => setInpYear(e.target.value)}

            /></span>
          </div>
          <span>-- <button onClick={calculate}>dönüştür</button></span>
          <div className="box">
            <h1>{getYear.toFixed()} </h1><span>years</span>
            <h1>{getMonth.toFixed} </h1><span>months</span>
            <h1>26</h1><span>days</span>
          </div>
        </div>
      </div>

      {/* .attribution { font-size: 11px; text-align: center; }
  .attribution a { color: hsl(228, 45%, 44%); } */}
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">kasım</a>.
      </div>
    </>
  )
}

export default App
