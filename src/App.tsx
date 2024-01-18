import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Home from "./components/Home"
import Salary from "./components/Salary"
import WordScrumble from "./components/WordScrumble"
import CountDuration from "./components/CountDuration"
import CurrencyConvert from "./components/CurrencyConvert"


const App:React.FC = () => {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/salarycalculating" element={<Salary/>}/>
          <Route path="/wombscramb" element={<WordScrumble/>}/>
          <Route path="/countduration" element={<CountDuration/>}/>
          <Route path="/currencyconvert" element={<CurrencyConvert/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
