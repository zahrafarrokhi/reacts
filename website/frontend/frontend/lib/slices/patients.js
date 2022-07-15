import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import moment from 'moment-jalaali';
import axios from '../axios';

export const IDLE = 'idle';
export const LOADING = 'loading';

export const loadPatients = createAsyncThunk(
  'patients/load',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/patients/patient/');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  },
);

export const addPatient = createAsyncThunk(
  'patients/add',
  async (_, thunkAPI) => {
    try {
      const { nationalId, birthDate } = _;
      console.log(_);
      const dateOfBirth = moment(birthDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
      console.log(dateOfBirth);
      const dateOfBirthJalali = moment(birthDate, 'YYYY-MM-DD').format('jYYYY-jMM-jDD');
      console.log(dateOfBirthJalali);
      const response = await axios.post('/api/patients/patient', {
        national_id: nationalId,
        date_of_birth: dateOfBirth,
        date_of_birth_jalali: dateOfBirthJalali,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  },
);

export const updatePatient = createAsyncThunk(
  'patients/update',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`/api/patients/patient/${_.patientID ?? _.id}`, { _ });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  },
);

const internalInitialState = {
  patients: null,
  patient: null,
  error: null,
  loading: IDLE,
};

export const patientSlice = createSlice({
  name: 'patient',
  initialState: internalInitialState,
  reducers: {
    reset: () => internalInitialState,
    loginAsPatient: (state, action) => {
      [state.patient] = state.patients.filter((p) => p.id === action.payload);
      // state.patient = state.patients.filter((p) => p.id === action.payload)[0];
    },
  },

  extraReducers: (builder) => {
    // load all patients
    builder.addCase(loadPatients.pending, (state, action) => {
      state.loading = LOADING;
    });
    builder.addCase(loadPatients.rejected, (state, action) => {
      state.loading = IDLE;
      state.error = action.payload.error;
    });
    builder.addCase(loadPatients.fulfilled, (state, action) => {
      state.loading = IDLE;
      state.patients = action.payload;
    });

    // add patient
    builder.addCase(addPatient.pending, (state, action) => {
      state.loading = LOADING;
    });
    builder.addCase(addPatient.rejected, (state, action) => {
      state.loading = IDLE;
      state.error = action.payload.error;
    });
    builder.addCase(addPatient.fulfilled, (state, action) => {
      state.loading = IDLE;
      state.patient = action.payload;
      state.patients.push(state.patient);
    });

    // update patient
    builder.addCase(updatePatient.pending, (state, action) => {
      state.loading = LOADING;
    });
    builder.addCase(updatePatient.rejected, (state, action) => {
      state.loading = IDLE;
      state.error = action.payload.error;
    });
    builder.addCase(updatePatient.fulfilled, (state, action) => {
      state.loading = IDLE;
      state.patient = action.payload; // put updated patient to state.patient
      state.patients = state.patients.filter((p) => p.id !== state.patient.id); // remove that patient from list
      state.patients.push(state.patient); // now put the updated patient to list
    });
  },
});

export const { reset, loginAsPatient } = patientSlice.actions;