import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import PropTypes from 'prop-types';

/**
 * 
 * @param {*} timeValue 
 * @returns TimePicker Component
 */
const TimePickerComponent = ({ timeValue }) => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    timeValue(time)
  },[time, timeValue]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <TimePicker
          ampm={false}
          openTo="hours"
          views={['hours', 'minutes', 'seconds']}
          inputFormat="HH:mm:ss"
          mask="__:__:__"
          label=""
          value={time}
          onChange={(newTime) => {
            setTime(newTime);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

TimePickerComponent.protoTypes = {
  timeValue: PropTypes.object
};

export default TimePickerComponent