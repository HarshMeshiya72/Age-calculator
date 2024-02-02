import { useState } from 'react';
import './App.css';

function App() {
  let [date, setdate] = useState("")
  let [date2, setdate2] = useState("")
  let [date3, setdate3] = useState(new Date())
  let [date4, setdate4] = useState(0)
  let [sec, setsec] = useState('')
  let [min, setmin] = useState("")
  let [hour, sethour] = useState("")
  let [day, setday] = useState("")
  let [week, setweek] = useState("")
  let [mon, setmon] = useState("")
  let [year1, setyear1] = useState("")
  let [year, setyear] = useState("")
  let [month1, setmonth1] = useState("")
  let [month, setmonth] = useState("")
  let [day1, setday1] = useState("")
  let [day2, setday2] = useState("")
  const get = () => {
    // console.log(date)
    setdate2(new Date(date));
    // console.log(date2);
    // console.log(date3)
    setdate4(date3 - date2)
    // console.log(date4);
    setsec(Math.floor(date4 / 1000));
    setmin(Math.floor(sec / 60));
    sethour(Math.floor(min / 60));
    setday(Math.floor(hour / 24));
    setweek(Math.floor(day / 7));
    setmon(Math.floor(day / 30));
    setyear1(Math.floor(mon / 12));

    setyear(Math.floor(date4 / (365 * 24 * 60 * 60 * 1000)));
    setmonth1(Math.floor(date4 % (365 * 24 * 60 * 60 * 1000)));
    setmonth(Math.floor(month1 / (30 * 24 * 60 * 60 * 1000)));
    setday1(Math.floor(month1 % (30 * 24 * 60 * 60 * 1000)));
    setday2(Math.floor(day1 / (24 * 60 * 60 * 1000)));
  }
  return (
    <div className="App">

      <div className="cal">
        <h2>Age Calculation</h2>
        <div className="filed">
          <label htmlFor="">Date of Birth: </label>
          <input type='date' onChange={(e) => setdate(e.target.value)} />
        </div>

        <input type='button' value={"Calculate Age"} onClick={get} />

        <div className="output">
          <div>
            <p>Years = {year}</p>
          </div>
          <div>
            <p>Months = {month}</p>
          </div>
          <div>
            <p>Days = {day2}</p>
          </div>
          <div>
            <p>week = {week}</p>
          </div>
          <div>
            <p>Hour = {hour}</p>
          </div>
          <div>
            <p>Minutes = {min}</p>
          </div>
          <div>
            <p>Seconds = {sec}</p>
          </div>
          <div>
            <p>Mili = {date4}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
