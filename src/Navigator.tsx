import React from 'react';
import { BrowserRouter, Routes, Route, useNavigation } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Contract from './pages/Contract';
import CreateJob from './pages/CreateJob';
import Job from './pages/Job';
import JobLists from './pages/JobLists';
import Landing from './pages/Landing';
import MobileSignUp from './pages/MobileSignUp';
import Registration from './pages/Registration';
import UserProfile from './pages/UserProfile';

const Navigator = () => {
  const path = '';
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mobile-signup" element={<MobileSignUp />} />
        <Route path={`${path}/jobs`} element={<JobLists />} />
        <Route path={`${path}/jobs/:id`} element={<Job />} />

        <Route path={`${path}/contract/:id`} element={<Contract />} />

        <Route path={`${path}/user/:id`} element={<UserProfile />} />
        <Route path={`${path}/create-job`} element={<CreateJob />} />
        <Route path={`${path}/register`} element={<Registration />} />

        <Route path={`${path}/`} element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
