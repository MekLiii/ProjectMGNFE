import { memo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import { Layout } from './Layout/Layout'
import LoginPage from './pages/LoginPage/LoginPage'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUp from './pages/SignUpPage/SignUpPage'
import ProjectForm from './pages/ProjectForm/ProjectForm'
import Project from './pages/Project/Project'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route
            path='/main'
            index
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />
            <Route path='/project/:id' element={<ProtectedRoute>
                <Project />
            </ProtectedRoute>} />
            <Route path='/addProject/' element={<ProtectedRoute><ProjectForm state='ADD' /></ProtectedRoute>} />
            <Route path="/project/:id/settings" element={<ProtectedRoute>test</ProtectedRoute>} />
          <Route path='*' element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default memo(App)
