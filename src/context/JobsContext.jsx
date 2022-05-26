import React, { createContext, useContext } from 'react';

const JobsContext = createContext();

// eslint-disable-next-line react/prop-types
export const JobsProvider = ({ children }) => {

  const jobs = [
    { id: 1, jobName: 'rise company task yap.', priority: 'Urgent' }
  ];

  const values = {
    jobs
  };
  return <JobsContext.Provider value={values}>{children}</JobsContext.Provider>;
};

export default JobsProvider;
export const useJobs = () => useContext(JobsContext);