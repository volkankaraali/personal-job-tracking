/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DeleteIcon from '../../constants/icons/DeleteIcon';
import DownArrowIcon from '../../constants/icons/DownArrowIcon';
import EditIcon from '../../constants/icons/EditIcon';
import UpArrowIcon from '../../constants/icons/UpArrowIcon';
import { useJobs } from '../../context/JobsContext';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import './JobListTable.scss';
function JobListTable({ filteredJobs, setFilteredJobs }) {

  const { setJobId } = useJobs();

  const [sortByName, setSortByName] = useState(false);
  const [sortByPriority, setSortByPriority] = useState(false);
  const [IsOpenEditModal, setIsOpenEditModal] = useState(false);
  const [IsOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const sortJobsByName = () => {
    setSortByPriority(false);
    if (sortByName) {
      let arr = [...filteredJobs.sort((a, b) => {
        return b.jobName.localeCompare(a.jobName);
      })];
      setFilteredJobs(arr);
      setSortByName(false);
    }
    else {
      let arr = [...filteredJobs.sort((a, b) => {
        return a.jobName.localeCompare(b.jobName);
      })];
      setFilteredJobs(arr);
      setSortByName(true);
    }

  };

  const sortJobsByPriority = () => {
    setSortByPriority(true);
    const priorityOrder = ['Urgent', 'Regular', 'Trivial'];
    let arr = [...filteredJobs.sort((x, y) => priorityOrder.indexOf(x.priority) - priorityOrder.indexOf(y.priority))];
    setFilteredJobs(arr);
  };

  const handleEditModalOpen = (jobId) => {
    setJobId(jobId);
    setIsOpenEditModal(true);
  };

  const handleDeleteModalOpen = (jobId) => {
    setJobId(jobId);
    setIsOpenDeleteModal(true);
  };

  return (
    <div className='jobListTableContainer'>

      <table>
        <thead>
          <tr>
            <th className='jobNameTitle' >
              <div onClick={() => sortJobsByName()}>
                Job Name
                {
                  sortByName ? <DownArrowIcon size={15} /> : <UpArrowIcon size={15} />
                }
              </div>
            </th>
            <th className='priority' >
              <div onClick={() => sortJobsByPriority()}>
                Priority
                {
                  sortByPriority ? <DownArrowIcon size={15} /> : <UpArrowIcon size={15} />
                }
              </div>
            </th>
            <th >Actions</th>
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
                  <button className='edit' onClick={() => handleEditModalOpen(job.id)}><EditIcon /></button>
                  <button className='delete' onClick={() => handleDeleteModalOpen(job.id)} ><DeleteIcon /></button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <EditModal IsOpenEditModal={IsOpenEditModal} setIsOpenEditModal={setIsOpenEditModal} />
      <DeleteModal IsOpenDeleteModal={IsOpenDeleteModal} setIsOpenDeleteModal={setIsOpenDeleteModal} />
    </div>
  );
}

export default JobListTable;