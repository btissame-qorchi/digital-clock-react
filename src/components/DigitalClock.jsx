import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = () => {
    // Extract hours, minutes, and seconds from the current time
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    let year = time.getFullYear();

    const today = time.getDate();
 

    // Specifies that you want the full name of the day
    const optionsDay = { weekday: "long" };
    const dayName = time.toLocaleDateString("en-EN", optionsDay);

    // Specifies that you want the full name of the month
    const optionsMonth = { month: "long" };
    const monthName = time.toLocaleDateString("en-EN", optionsMonth);

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Pad minutes and seconds to ensure they are two digits
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");

    // Return formatted time string
    return (
      <>
        <span>{`${dayName}, ${monthName} ${today},${year}`}</span>
        <p>
          {`${hours}:${paddedMinutes}:${paddedSeconds}`}
          <span>{meridiem}</span>
        </p>
      </>
    );
  };

  return (
    <div className="digital-clock">
      <div className="inner">{formatTime()}</div>
    </div>
  );
};

export default DigitalClock;
