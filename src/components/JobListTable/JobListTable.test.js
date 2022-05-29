/* eslint-disable no-undef */
import React from 'react';
import {render,screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JobsProvider from '../../context/JobsContext';
import JobListTable from './JobListTable';
import JobList from '../JobsList/JobList';

test('edit modal click check',async ()=>{
  render(
    <JobsProvider>
      <JobListTable />
      <JobList/>
    </JobsProvider>
  ); 
  const editButton=screen.getByTestId('editButton-1');
  
  userEvent.click(editButton);
  await waitFor(()=>{
    const modal=screen.getByTestId('editmodal');
    expect(modal).toBeInTheDocument();
  });

});