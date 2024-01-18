import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const CountDuration:React.FC = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform any additional actions upon submitting the form
    console.log("Form submitted!");
  };

  const handleReset = () => {
    setSelectedDate("");
    setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  };

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const targetDate = new Date(selectedDate).getTime();
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        // The selected date has passed
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, [selectedDate]);
    return(
        <div>
            <Link to={'/'} className="flex justify-center items-center w-14 text-white my-5 mx-8 gap-2">
                <img src="/src/assets/img/Back.png" alt="back" className="w-4" />
                <b>Back</b>
            </Link>
            <div className="grid justify-items-center text-white my-10 border-solid border-2 mx-4">
                <h1 className="text-3xl my-2">
                <b>Count Duration</b>
                </h1>
                <p>Pilih Tanggal Untuk hitungan Mundur</p>
                <br />

                <div className="gap-10 border-1">
                    <form  >
                        <input type="datetime-local" onChange={handleDateChange} value={selectedDate} />

                        

                            
                        <button type="submit" className="bg-sky-900 my-5 rounded-md w-12 mx-2" onClick={handleSubmit}>
                            <b>
                            start
                            </b>
                        </button>
                            

                                
                        <button type="button" className="bg-sky-900 my-5 rounded-md w-12 mx-2" onClick={handleReset}>
                            <b>
                            reset
                            </b>
                        </button>
                       

                        <div className="my-3">
                            <p>Waktu Mundur:</p>
                            <p>{timeRemaining.days} hari, {timeRemaining.hours}  jam, {timeRemaining.minutes}  menit, {timeRemaining.seconds}  detik</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CountDuration;