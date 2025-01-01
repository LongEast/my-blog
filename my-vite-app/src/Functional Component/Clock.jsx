import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setCurrentTime(new Date());
    };

    const timerID = setInterval(tick, 1000); // 每秒更新一次时间

    // 清理定时器
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="clock">
      <h2>当前时间</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
