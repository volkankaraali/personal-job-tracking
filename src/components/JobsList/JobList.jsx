/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useJobs } from '../../context/JobsContext';
import JobListTable from '../JobListTable';
import JobSearch from '../JobSearch/JobSearch';
import './JobList.scss';
function JobList() {
  const { jobs } = useJobs();

  const [searchJobInput, setSearchJobInput] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filteredPriority, setFilteredPriority] = useState('All');


  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  //filtered jobs by input text
  useEffect(() => {
    setFilteredPriority('All');
    if (searchJobInput === '') {
      setFilteredJobs(jobs);
    }
    else {
      let filtered = jobs.filter(job => job.jobName.includes(searchJobInput));
      setFilteredJobs(filtered);
    }
  }, [searchJobInput]);

  //filtered jobs by priority options
  useEffect(() => {
    setSearchJobInput('');
    if (filteredPriority === 'All') {
      setFilteredJobs(jobs);
    }
    else {
      let filtered = jobs.filter(job => job.priority === filteredPriority);
      setFilteredJobs(filtered);
    }
  }, [filteredPriority]);

  return (
    <div className='jobListContainer'>

      <JobSearch setSearchJobInput={setSearchJobInput} filteredPriority={filteredPriority} setFilteredPriority={setFilteredPriority} />

      <JobListTable filteredJobs={filteredJobs} />

    </div>
  );
}

export default JobList;