import React, { createContext, useContext, useEffect, useState } from 'react';
import { getPriorites } from '../services/priorityService';

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {

  const [jobs, setJobs] = useState([
    { id: 1, jobName: 'rise company task', priority: 'Urgent' },
  ]);

  //job id uses when edit job or delete job as parameter
  const [jobId, setJobId] = useState(0);

  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    let jobsInLocaleStorage = JSON.parse(localStorage.getItem('jobs'));
    if (jobsInLocaleStorage == null) {
      localStorage.setItem('jobs', JSON.stringify(jobs));
    }
    else {
      setJobs(jobsInLocaleStorage);
    }
  }, []);

  useEffect(() => {
    getPriority();
  }, []);

  //get priorities from api.
  const getPriority = async () => {
    let priorities = await getPriorites();
    setPriorities(priorities.data);
  };

  const values = {
    jobs,
    setJobs,
    setJobId,
    jobId,
    priorities
  };
  return <JobsContext.Provider value={values}>{children}</JobsContext.Provider>;
};

export default JobsProvider;
export const useJobs = () => useContext(JobsContext);