/* eslint-disable no-unused-vars */
import React from 'react';
import { useJobs } from '../../context/JobsContext';
import './JobSearch.scss';
// eslint-disable-next-line react/prop-types
function JobSearch({ setSearchJobInput, setFilteredPriority, filteredPriority }) {

  const { priorities } = useJobs();


  const handleInputChange = (e) => {
    setSearchJobInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    setFilteredPriority(e.target.value);
  };
  return (
    <div className='jobSearchContainer'>
      <input type="text" placeholder='Search Job' onChange={(e) => handleInputChange(e)} />
      <select name="priority" value={filteredPriority} onChange={(e) => handleSelectChange(e)}>
        <option value='All' >Priority(All)</option>
        {
          priorities.map(p => <option key={p.id} value={p.name}>{p.name}</option>)
        }
      </select>
    </div>
  );
}

export default JobSearch;