import { useEffect, useState } from "react";

function App() {

  const [today, setToday] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 100000)
    return () => {
      clearInterval(timer);
    }
  }, [])
  return (
    <>
  

    </>
  )
}

export default App
