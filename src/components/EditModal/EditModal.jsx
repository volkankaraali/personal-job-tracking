/* eslint-disable no-unused-vars */
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import './EditModal.scss';
import { useJobs } from '../../context/JobsContext';

function EditModal({ IsOpenEditModal, setIsOpenEditModal }) {
  const { jobs, setJobs, jobId } = useJobs();
  const [jobDataById, setJobDataById] = useState([]);
  const [newPriority, setNewPriority] = useState('');

  useEffect(() => {
    setJobDataById(jobs.find(job => job.id === jobId));
  }, [jobId]);


  const handleClose = () => {
    setIsOpenEditModal(false);
  };

  const editJob = () => {
    let newJobs = jobs.map(job => job.id === jobId ? { ...job, priority: newPriority } : job);
    localStorage.setItem('jobs', JSON.stringify(newJobs));
    setJobs(newJobs);
    setNewPriority('');
    setIsOpenEditModal(false);
  };
  return (
    <Modal
      className='modal'
      title="Edit Job"
      visible={IsOpenEditModal}
      onOk={editJob}
      okButtonProps={{ className: 'okButton' }}
      cancelButtonProps={{ className: 'cancelButton' }}
      onCancel={handleClose}
    >
      <div className='jobName'>Job Name: <span>{jobDataById?.jobName}</span></div>
      <div className='previusPriority'>Previous Priority Order : <span>{jobDataById?.priority}</span></div>
      <select
        name="priority"
        value={newPriority}
        onChange={(e) => setNewPriority(e.target.value)}
      >
        <option value="" disabled>Choose Priority</option>
        <option className='option' value="Urgent">Urgent</option>
        <option className='option' value="Regular">Regular</option>
        <option className='option' value="Trivial">Trivial</option>
      </select>
    </Modal>
  );
}

export default EditModal;