import React from 'react';
import JobList from './components/JobsList/JobList';
import NewJobForm from './components/NewJobForm';
import './styles/index.scss';
function App() {
  return (
    <div className="App">
      <NewJobForm/>
      <JobList/>
    </div>
  );
}

export default App;
