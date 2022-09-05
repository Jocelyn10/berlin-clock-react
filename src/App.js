import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './styles.css';

import TextField from '@mui/material/TextField/index';
import Box from '@mui/material/Box';

import Seconds from './components/Seconds';
import SingleHours from './components/SingleHours';
import FiveHours from './components/FiveHours';
import SingleMinutes from './components/SingleMinutes';
import FiveMinutes from './components/FiveMinutes';
import Clock from './components/Clock';
import TimePickerComponent from './components/TimePicker';

import {
  singleMinutes,
  fiveMinutes,
  singleHours,
  fiveHours,
  seconds,
  digitalClockBerlinClockConvert,
  berlinClockDigitalClockConvert,
} from './helpers/_functions';

const BerlinClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [dateNow, setDateNow] = useState(new Date());

  const [singleMinutesValue, setSingleMinutesValue] = useState(null);
  const [fiveMinutesValue, setFiveMinutesValue] = useState(null);
  const [singleHoursValue, setSingleHoursValue] = useState(null);
  const [fiveHoursValue, setFiveHoursValue] = useState(null);
  const [secondsValue, setSecondsValue] = useState(null);
  const [berlinClockValue, setBerlinClockValue] = useState(null);
  const [digitalClockValue, setDigitalClockValue] = useState('');

  const [singleMinutesText, setSingleMinutesText] = useState(null);
  const [fiveMinutesText, setFiveMinutesText] = useState(null);
  const [singleHoursText, setSingleHoursText] = useState(null);
  const [fiveHoursText, setFiveHoursText] = useState(null);
  const [secondsText, setSecondsText] = useState(null);
  const [berlinClockText, setBerlinClockText] = useState(null);
  const [digitalClockText, setDigitalClockText] = useState('');

  useEffect(() => {
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setDateNow(new Date());
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [dateNow]);

  useEffect(() => {
    setSingleMinutesText(singleMinutes(singleMinutesValue));
    setFiveMinutesText(fiveMinutes(fiveMinutesValue));
    setSingleHoursText(singleHours(singleHoursValue));
    setFiveHoursText(fiveHours(fiveHoursValue));
    setSecondsText(seconds(secondsValue));
    setBerlinClockText(digitalClockBerlinClockConvert(berlinClockValue));
    setDigitalClockText(berlinClockDigitalClockConvert(digitalClockValue));
  }, [
    singleMinutesValue,
    fiveMinutesValue,
    singleHoursValue,
    fiveHoursValue,
    secondsValue,
    berlinClockValue,
    digitalClockValue,
  ]);

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

      <h1>Features 1</h1>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
        <h4 className="features-title">Implement the Single Minutes Row :</h4>
        <TimePickerComponent
          timeValue={(time) => setSingleMinutesValue(time.$d)}
        />
        <TextField disabled value={singleMinutesText} />
      </Box>

      <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
        <h4 className="features-title">Implement the Five Minutes Row :</h4>
        <TimePickerComponent
          timeValue={(time) => setFiveMinutesValue(time.$d)}
        />
        <TextField disabled value={fiveMinutesText} />
      </Box>

      <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
        <h4 className="features-title">Implement the Single Hours Row :</h4>
        <TimePickerComponent
          timeValue={(time) => setSingleHoursValue(time.$d)}
        />
        <TextField disabled value={singleHoursText} />
      </Box>

      <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
        <h4 className="features-title">Implement the Five Hours Row :</h4>
        <TimePickerComponent timeValue={(time) => setFiveHoursValue(time.$d)} />
        <TextField disabled value={fiveHoursText} />
      </Box>

      <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
        <h4 className="features-title">Implement the Seconds Lamp : </h4>
        <TimePickerComponent timeValue={(time) => setSecondsValue(time.$d)} />
        <TextField disabled value={secondsText} />
      </Box>

      <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
        <h4 className="features-title">Integrate the Entire Berlin Clock :</h4>
        <TimePickerComponent
          timeValue={(time) => setBerlinClockValue(time.$d)}
        />
        <TextField disabled value={berlinClockText} sx={{ width: "400px"}} />
      </Box>

      <h1>Feature 2</h1>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
        <h4 className="features-title">Convert Berlin Time to Digital Time :</h4>
        <TextField
          sx={{ width: '400px' }}
          label="Berlin Clock Text"
          variant="outlined"
          value={digitalClockValue}
          onChange={(e) => setDigitalClockValue(e.target.value)}
        />
        <TextField disabled value={digitalClockText} />
      </Box>
    </div>
  );
};

export default App;
