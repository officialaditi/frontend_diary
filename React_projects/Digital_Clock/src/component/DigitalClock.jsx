import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "",
  ];

  const today = days[time.getDay()];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // when component unmount clear the resources
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const meridem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minute)}:${padZero(second)} ${meridem}`;
  };

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };
  return (
    <div className="clock-container">
      <div className="clock">
        <h2>{today}</h2>
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};
export default DigitalClock;
