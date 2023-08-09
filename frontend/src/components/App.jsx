import React from 'react';
import {
  Route,
  RouterProvider,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './pages/Header';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import SignUpPage from './pages/SignUpPage';
import { useAuth } from '../contexts';

const Root = () => {
  const { user } = useAuth();
  return user ? <ChatPage /> : <Navigate to='/login' />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />} errorElement={<ErrorPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignUpPage />} />
    </>,
  ),
);

const App = () => {
  return (
    <>
      <div className='d-flex flex-column h-100'>
        <Header />
        <RouterProvider router={router} />
      </div>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
};

export default App;
