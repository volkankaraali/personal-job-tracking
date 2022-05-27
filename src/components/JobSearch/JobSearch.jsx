/* eslint-disable no-unused-vars */
import React from 'react';
import './JobSearch.scss';
// eslint-disable-next-line react/prop-types
function JobSearch({ setSearchJobInput, setFilteredPriority, filteredPriority }) {

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
        <option value="Urgent">Urgent</option>
        <option value="Regular">Regular</option>
        <option value="Trivial">Trivial</option>
      </select>
    </div>
  );
}

export default JobSearch;