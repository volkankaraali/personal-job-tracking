import React from 'react';
import DeleteIcon from '../../constants/icons/DeleteIcon';
import EditIcon from '../../constants/icons/EditIcon';
import './JobListTable.scss';
function JobListTable({ filteredJobs }) {

  return (
    <div className='jobListTableContainer'>

      <table>
        <thead>
          <tr>
            <th className='jobNameTitle'>Job Name</th>
            <th className='title'>Priority</th>
            <th className='title'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredJobs.length === 0 && <tr className='noFilteredJob'><td>There is not a job.</td></tr>
          }
          {
            filteredJobs.map(job => (
              <tr key={job.id}>
                <td className='jobName'>{job.jobName}</td>
                <td className='row '>
                  <span className={`priority ${job.priority === 'Urgent' ? 'urgent' : job.priority === 'Regular' ? 'regular' : job.priority === 'Trivial' ? 'trivial' : ''}`}>
                    {job.priority}
                  </span>
                </td>
                <td className='row'>
                  <button className='edit'><EditIcon /></button>
                  <button className='delete'><DeleteIcon /></button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default JobListTable;