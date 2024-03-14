import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function calculateTimeRemaining() {
    const countDownDate = new Date('Apr 31, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
    //   clearInterval(intervalId);
      return { expired: true };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      expired: false,
    };
  }

  return (
    <div>
      {timeRemaining.expired ? (
        <h2 className='uppercase text-[1.6em] lg:text-[2.625em] text-center mb-4 text-red-500' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
            EXPIRED
        </h2>
      ) : (
        <h2 className='uppercase text-[1.6em] lg:text-[2.625em] text-center mb-4 text-greenprimary' style={{fontFamily: 'Oswald', fontWeight: 400, lineHeight: '1.143'}}>
          {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
        </h2>
      )}
    </div>
  );
};

export default CountdownTimer;
