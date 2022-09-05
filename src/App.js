import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './styles.css';

import Seconds from './components/Seconds';
import SingleHours from './components/SingleHours';
import FiveHours from './components/FiveHours';
import SingleMinutes from './components/SingleMinutes';
import FiveMinutes from './components/FiveMinutes';
import Clock from './components/Clock';
import TimePickerComponent from './components/TimePicker';

const BerlinClockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const App = () => {
  const [dateNow, setDateNow] = useState(new Date());
  const [singleFiveMinutesValue, setSingleFiveMinutesValue] = useState(null);

  useEffect(() => {
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setDateNow(new Date());
    }, 100000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [dateNow]);

  useEffect(() => {
    console.log("value : ", singleFiveMinutesValue)
  }, [singleFiveMinutesValue])
  
  return (
    <div className="App">
      <h1>Berlin Clock</h1>
      <BerlinClockWrapper>
        <Seconds time={dateNow} />
        <FiveHours time={dateNow} />
        <SingleHours time={dateNow} />
        <FiveMinutes time={dateNow} />
        <SingleMinutes time={dateNow} />
        <Clock time={dateNow} />
      </BerlinClockWrapper>
      <TimePickerComponent timeValue={(time) => setSingleFiveMinutesValue(time.$d)} />
    </div>
  );
};

export default App;
