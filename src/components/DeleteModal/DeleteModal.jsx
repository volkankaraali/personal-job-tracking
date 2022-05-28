/* eslint-disable no-unused-vars */
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useJobs } from '../../context/JobsContext';
import './DeleteModal.scss';
function DeleteModal({ IsOpenDeleteModal, setIsOpenDeleteModal }) {

  const { jobs, setJobs, jobId } = useJobs();
  const [jobDataById, setJobDataById] = useState([]);


  useEffect(() => {
    console.log(jobId);
    setJobDataById(jobs.find(job => job.id === jobId));
  }, [jobId]);

  const handleClose = () => {
    setIsOpenDeleteModal(false);
  };
  const deleteJob = () => {
    let newJobs = jobs.filter(job => job.id !== jobId);
    localStorage.setItem('jobs', JSON.stringify(newJobs));
    setJobs(newJobs);
    setIsOpenDeleteModal(false);
  };

  return (
    <Modal
      className='deleteModal'
      title='Deleting Job'
      visible={IsOpenDeleteModal}
      onOk={deleteJob}
      okText='Delete'
      onCancel={handleClose}
      okButtonProps={{ className: 'okButton' }}
      cancelButtonProps={{ className: 'cancelButton' }}
    >
      <div className='deletingText'><span>{jobDataById?.jobName}</span> is deleting. Are you sure?</div>
    </Modal>
  );
}

export default DeleteModal;