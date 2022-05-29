/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {render,screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewJobForm from './NewJobForm';
import JobsProvider from '../../context/JobsContext';


test('form field check', () => {
  render(
    <JobsProvider>
      <NewJobForm />
    </JobsProvider>
  ); 

  const textInput=screen.getByPlaceholderText('Type a job.');
  const selects=screen.getByText('Choose Priority');
  expect(textInput).toBeInTheDocument();
  expect(selects).toBeInTheDocument();

});

test('form empty validation check', async () =>  {
  render(
    <JobsProvider>
      <NewJobForm />
    </JobsProvider>
  ); 

  const createButton=screen.getByTestId('create');
  
  await userEvent.click(createButton);
  await waitFor(()=>
  {
    const errorMessInput=screen.getByTestId('errorMessInput');
    const errorMessSelect=screen.getByTestId('errorMessSelect');
    expect(errorMessInput).toBeInTheDocument();
    expect(errorMessSelect).toBeInTheDocument();
  }
  );

});
