/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {

  const [jobs, setJobs] = useState([
    { id: 1, jobName: 'rise company task', priority: 'Urgent' },
    { id: 2, jobName: 'test job.', priority: 'Regular' }
  ]);

  const [jobId, setJobId] = useState(0);

  useEffect(() => {
    let jobsInLocaleStorage = JSON.parse(localStorage.getItem('jobs'));
    if (jobsInLocaleStorage == null) {
      localStorage.setItem('jobs', JSON.stringify(jobs));
    }
    else {
      setJobs(jobsInLocaleStorage);
    }
  }, []);

  const values = {
    jobs,
    setJobs,
    setJobId,
    jobId
  };
  return <JobsContext.Provider value={values}>{children}</JobsContext.Provider>;
};

export default JobsProvider;
export const useJobs = () => useContext(JobsContext);