import { useEffect, useState } from "react";
function App() {

  const [today, setToday] = useState(new Date())
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [errors, setErrors] = useState({
    year: '',
    day: '',
    month: '',
    date: ''
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
    let errors = {}
    const date = new Date(year, month - 1, day)

    if (!day) {
      errors.day = 'This field is required'
    } if (!month) {
      errors.month = 'This field is required'
    } if (!year) {
      errors.year = 'This field is required'
    }
    else {
      if (day < 1 || day > 31) {
        errors.day = 'Must be a valid day '
      }
      if (month < 1 || month > 12) {
        errors.month = 'Must be a valid month'
      }
      if (date > new Date()) {
        errors.year = 'Must be in the past'
      }
      if (date.toString() === 'Invalid date') {
        errors.date = 'Must be a valid date'
      } if (date) {
        errors.date = 'Must be a valid date'
      }
    }
    Date.prototype.isValid = function () {

      return this.getTime() === this.getTime();
    }
    console.log(date.isValid())
    setErrors(errors)

    console.log()

    if (Object.keys(errors).length === 0) {
      calculateAge();
    }
  }
  const calculateAge = () => {
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
  console.log(errors)

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
              <span>{errors || errors.date ? errors.day : errors.date}  </span>

              <label htmlFor="month">Month:</label>
              <input type="number" name="month"
                min={1} max={12} required
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="MM"
              />
              <span>{errors ? errors.month : ''} </span>
              <label htmlFor="year">Year:</label>
              <input
                type="number" name="year"
                min={1900} max={2099} required
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="YY"
              />
              <span>{errors ? errors.year : ''} </span>
            </form>


          </div>
          <span>-- <button onClick={updatedToday} >dönüştür</button></span>
          <div className="box">
            <h1>{age.years === '' ? '--' : age.years}  </h1><span>years </span>
            <h1>{age.months === '' ? '--' : age.months} </h1><span>months </span>
            <h1>{age.days === '' ? '--' : age.days} </h1><span>days</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
