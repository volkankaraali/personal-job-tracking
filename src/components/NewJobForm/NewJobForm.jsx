import React from 'react';
import './NewJobForm.scss';
// eslint-disable-next-line no-unused-vars
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Formik } from 'formik';
import { NewJobSchema } from '../../constants/yupSchema';
import AddIcon from '@mui/icons-material/Add';
function NewJobForm() {

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
            <form onSubmit={handleSubmit}>
              <div className='jobNameContainer'>
                <input name='jobName' value={values.jobName} placeholder="Type a job." type="text" onChange={handleChange} />
                {errors.jobName && <div className='errorMessage'>*{errors.jobName}</div>}
              </div>

              <div className='priorityContainer' >
                <select name="priority" value={values.priority} onChange={handleChange}>
                  <option value="Urgent">Urgent</option>
                  <option value="Regular">Regular</option>
                  <option value="Trivial">Trivial</option>
                </select>

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