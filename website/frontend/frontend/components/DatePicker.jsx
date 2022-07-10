import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment-jalaali';
import {
  TextField, FormHelperText, Box, InputLabel,
} from '@mui/material';
import { persianToEnglishDigits, preventLettersTyping } from '../lib/utils';

function DatePicker(props) {
  const {
    value, onChange, editable, btnRef, containerClassName,
  } = props;

  // Values
  const [date, setDate] = useState({
    year: value ? moment(value, 'YYYY-MM-DD').format('jYYYY') : '',
    month: value ? moment(value, 'YYYY-MM-DD').format('jM') : '',
    day: value ? moment(value, 'YYYY-MM-DD').format('jD') : '',
  });
  const [errors, setErrors] = useState({
    year: null,
    month: null,
    day: null,
  });
  // Refs
  const dayRef = useRef(null);
  const monthRef = useRef(null);

  const validateAll = (name, val) => {
    if (name === 'year') return (val > 1299 && val < Number(moment().format('jYYYY')));
    if (name === 'month') return (val > 0 && val < 13);
    if (name === 'day') return (date.month < 7 ? (val > 0 && val < 32) : (val > 0 && val < 31));
  };

  console.log(errors);

  const handleAllChange = (e) => {
    const { name, value } = e.target;
    setDate({ ...date, [name]: preventLettersTyping(persianToEnglishDigits(value)) });
    if (validateAll(name, value)) {
      if (name === 'year' && value.length === 4) {
        console.log('year complete focus', monthRef.current);
        monthRef.current?.focus();
      } else if (name === 'month' && value.length === 2) {
        dayRef.current.focus();
      } else if (name === 'day' && value.length === 2) {
        btnRef?.current?.focus();
      }
      setErrors({ ...errors, [name]: false });
      onChange(moment(`${date.year}-${date.month}-${date.day}`, 'jYYYY-jMM-jDD').format('YYYY-MM-DD'));
    } else {
      setErrors({ ...errors, [name]: true });
      onChange('');
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 1,
        flex: '1 1 30%',
      }}
      >
        <TextField
          label="روز"
          dir="ltr"
          id="day"
          required
          inputRef={dayRef}
          name="day"
          className="w-full sm:w-auto"
          error={errors.day}
          variant="outlined"
          disabled={!editable}
          inputProps={{
            maxLength: 2,
            inputMode: 'numeric',
          }}
          placeholder="1-31"
          value={date.day}
          onChange={(e) => handleAllChange(e)}
        />
      </Box>
      <span>&#160; </span>
      {' '}
      /
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 1,
        flex: '1 1 30%',
        margin: '0 .3em',
      }}
      >
        <TextField
          label="ماه"
          dir="ltr"
          required
          id="month"
          inputRef={monthRef}
          name="month"
          className="w-full sm:w-auto"
          error={errors.month}
          variant="outlined"
          disabled={!editable}
          inputProps={{
            maxLength: 2,
            inputMode: 'numeric',
          }}
          placeholder="1-12"
          value={date.month}
          onChange={(e) => handleAllChange(e)}
        />
      </Box>
      /
      <span>&#160; </span>
      {' '}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 1,
        flex: '1 1 40%',
      }}
      >
        <TextField
          label="سال"
          dir="ltr"
          required
          id="year"
          name="year"
          className="w-full sm:w-auto"
          error={errors.year}
          variant="outlined"
          disabled={!editable}
          inputProps={{
            maxLength: 4,
            inputMode: 'numeric',
          }}
          placeholder={`1300-${moment().format('jYYYY')}`}
          value={date.year}
          onChange={(e) => handleAllChange(e)}
        />
      </Box>

    </Box>
  );
}

export default DatePicker;
