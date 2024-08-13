import { useEffect, useState } from "react";
function App() {

  const [today, setToday] = useState(new Date())
  const [day, setDay] = useState('23')
  const [month, setMonth] = useState('3')
  const [year, setYear] = useState('2003')
  const [errors, setErrors] = useState({
    years: '',
    days: '',
    months: '',

  })
  const [age, setAge] = useState({
    years: '',
    days: '',
    months: ''
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 100000)
    return () => {
      clearInterval(timer);
    }
  }, [])

  const updatedToday = () => {
    const birtDate = new Date(year, month - 1, day)
    const now = today;
    let age = now.getFullYear() - birtDate.getFullYear()
    let months = now.getMonth() - birtDate.getMonth()
    let days = now.getDate() - birtDate.getDate()

    if (months < 0 || (months === 0 && days < 0)) {
      age--;
      months += 12
    }

    if (days < 0) {
      let updatedMonth = new Date(year, month, 0).getDate();
      days += updatedMonth
      months--;
    }

    return setAge({ years: age, months: months, days: days })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  return (
    <>
      <div className="app">
        <div className="container-fluid ">
          <div className="col-sm p-3">
            <form onSubmit={handleSubmit}>
              <label htmlFor="day">Day:</label>
              <input type="number" name="day"
                min={1} max={31} required
                value={day}
                onChange={(e) => setDay(e.target.value)}
                placeholder="DD"
              />

              <label htmlFor="month">Month:</label>
              <input type="number" name="month"
                min={1} max={12} required
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="MM"
              />

              <label htmlFor="year">Year:</label>
              <input
                type="number" name="year"
                min={1900} max={2099} required
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="YY"
              />
            </form>


          </div>
          <span>-- <button onClick={updatedToday} >dönüştür</button></span>
          <div className="box">
            <h1>{age.years}  </h1><span>years </span>
            <h1>{age.months} </h1><span>months </span>
            <h1>{age.days} </h1><span>days</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
