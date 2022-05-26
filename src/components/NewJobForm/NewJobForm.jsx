import React, { useState } from 'react';
import './NewJobForm.scss';
// eslint-disable-next-line no-unused-vars
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Formik } from 'formik';
import { NewJobSchema } from '../../constants/yupSchema';
import AddIcon from '@mui/icons-material/Add';
function NewJobForm() {
  // eslint-disable-next-line no-unused-vars
  const [priority, setPriority] = useState('');
  // eslint-disable-next-line no-unused-vars
  const handleChangeSelect = (event) => {
    setPriority(event.target.value);
  };


  // eslint-disable-next-line no-unused-vars

  return (
    <div className='container'>
      <h1>Create New Job</h1>
      <Formik
        initialValues={{
          jobName: '',
          priority: '',
        }}

        validationSchema={NewJobSchema}
        onSubmit={(auth, { resetForm }) => {
          console.log(auth);
          resetForm();
        }}
      >
        {
          // eslint-disable-next-line no-unused-vars
          ({ values, errors, handleChange, handleSubmit }) =>
            <form onSubmit={handleSubmit} className="registerForm">
              <div className='jobNameContainer'>
                <input name='jobName' value={values.jobName} placeholder="Type a job." type="text" onChange={handleChange} />
                {errors.jobName && <div className='errorMessage'>*{errors.jobName}</div>}
              </div>

              <div className='priorityContainer' >
                <FormControl fullWidth size='small' variant='standard' sx={{

                  '& .css-mgun0k-MuiFormLabel-root-MuiInputLabel-root': {
                    fontWeight: 'bold'
                  },
                  '& .css-a3l6o-MuiInputBase-root-MuiInput-root-MuiSelect-root:before': {
                    borderBottom: '1px solid #00ADB5',
                    fontWeight: 'bold'

                  },
                  '& .css-a3l6o-MuiInputBase-root-MuiInput-root-MuiSelect-root:after': {
                    borderBottom: '1px solid #00ADB5',
                    fontWeight: 'bold'

                  },
                  '& .css-mgun0k-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                    color: '#222831',
                  },
                  '& .css-62s8ko-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                    color: '#222831',
                  }
                }}>
                  <InputLabel id="demo-simple-select-label" sx={{ color: '#222831', fontWeight: 'bold' }}>Priority</InputLabel>
                  <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.priority}
                    name='priority'
                    label="Priority"
                    onChange={handleChange}
                  >
                    <MenuItem value={'Urgent'}>Urgent</MenuItem>
                    <MenuItem value={'Regular'}>Regular</MenuItem>
                    <MenuItem value={'Trivial'}>Trivial</MenuItem>
                  </Select>
                </FormControl>
                {errors.priority && <div className='errorMessage'>*{errors.priority}</div>}
              </div>

              <button className='submitBtn' type='submit' >
                <AddIcon /> <span>Create</span>
              </button>
            </form>
        }
      </Formik>
    </div >
  );
}

export default NewJobForm;