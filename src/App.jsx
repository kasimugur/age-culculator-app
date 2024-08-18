import { useEffect, useState } from "react";
import './style.scss'
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
    }
    if (!month) {
      errors.month = 'This field is required'
    }
    if (!year) {
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
        errors.year = 'Must be in the past';
      } else {
        if (!isValidDayForMonth(day, month, year)) {
          errors.date = 'Must be a valid date'
        }
      }
    }
    setErrors(errors)



    if (Object.keys(errors).length === 0) {

      calculateAge();
    }
  }

  const calculateAge = () => {
    const birthDate = new Date(year, month - 1, day)
    const now = today;
    let age = now.getFullYear() - birthDate.getFullYear()
    let months = now.getMonth() - birthDate.getMonth()
    let days = now.getDate() - birthDate.getDate()
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
  const isValidDayForMonth = (day, month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate()
    return day <= daysInMonth;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const iconArrow = <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg>


  return (
    <>
      {/* <AgeCalculator /> */}
      <div className="app">
        <div className="container-fluid ">
          <div className="header">
            <form className="form" onSubmit={handleSubmit}>
              <div className="today">
                <label htmlFor="day" style={{
                  color: errors.day || errors.date ? 'red' : ''
                }} >Day</label>
                <input type="number" name="day"
                  min={1} max={31} required
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder="DD"
                />
                {errors.day ? <span>{errors.day} </span> :
                  errors.date ? <span>{errors.date} </span> : ''}
              </div>
              <div className="today">
                <label htmlFor="month"
                  style={{
                    color: errors.month || errors.date ? 'red' : ''
                  }}>Month</label>
                <input type="number" name="month"
                  min={1} max={12} required
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  placeholder="MM"
                />
                {errors.month ? <span>{errors.month} </span> : ''}
              </div>
              <div className="today">
                <label htmlFor="year"
                  style={{
                    color: errors.year || errors.date ? 'red' : ''
                  }}>Year</label>
                <input
                  type="number" name="year"
                  min={1900} max={2099} required
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="YYYY"
                />
                {errors.year ? <span>{errors.year} </span> : ''}
              </div>
            </form>


          </div>
          <div className="line">
            <span></span>
            <button onClick={updatedToday} >{iconArrow}</button>
          </div>
          <div className="card">
            <div className="box">
              <h1>{age.years === '' ? '--' : age.years}  </h1><span>years </span>
            </div>
            <div className="box">
              <h1>{age.months === '' ? '--' : age.months} </h1><span>months </span>
            </div>
            <div className="box">
              <h1>{age.days === '' ? '--' : age.days} </h1><span>days</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
