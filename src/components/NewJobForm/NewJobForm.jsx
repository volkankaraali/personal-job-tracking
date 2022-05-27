/* eslint-disable no-unused-vars */
import React from 'react';
import './NewJobForm.scss';
import { Formik } from 'formik';
import { NewJobSchema } from '../../constants/yupSchema';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import { useJobs } from '../../context/JobsContext';
function NewJobForm() {
  const { setJobs, jobs } = useJobs();

  const addJob = (auth) => {
    //generete uniq id
    let id = uuidv4();

    let newJobsInStorage = JSON.parse(localStorage.getItem('jobs'));
    newJobsInStorage.push({ id, jobName: auth.jobName, priority: auth.priority });
    localStorage.setItem('jobs', JSON.stringify(newJobsInStorage));
    setJobs(newJobsInStorage);
  };
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
          addJob(auth);
          resetForm();
        }}
      >
        {
          ({ values, errors, handleChange, handleSubmit }) =>
            <form onSubmit={handleSubmit}>
              <div className='jobNameContainer'>
                <input name='jobName' value={values.jobName} placeholder="Type a job." type="text" onChange={handleChange} />
                {errors.jobName && <div className='errorMessage'>*{errors.jobName}</div>}
              </div>

              <div className='priorityContainer' >
                <select name="priority" value={values.priority} onChange={handleChange}>
                  <option value="" disabled>Choose Priority</option>
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