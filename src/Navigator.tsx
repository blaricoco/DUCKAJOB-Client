import React from 'react';
import { BrowserRouter, Routes, Route, useNavigation } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import CreateJob from './pages/CreateJob';
import Job from './pages/Job';
import JobLists from './pages/JobLists';
import Landing from './pages/Landing';
import Registration from './pages/Registration';
import UserProfile from './pages/UserProfile';

const Navigator = () => {
  const path = '';
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${path}/jobs`} element={<JobLists />} />
        <Route path={`${path}/jobs/:id`} element={<Job />} />

        <Route path={`${path}/profile`} element={<UserProfile />} />
        <Route path={`${path}/create-job`} element={<CreateJob />} />
        <Route path={`${path}/register`} element={<Registration />} />

        <Route path={`${path}/`} element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
