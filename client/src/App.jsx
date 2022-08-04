import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing, Register, Error, ProtectedRoute } from '@pages'
import { Stats, Jobs, AddJob, Profile, DashboardLayout } from '@pages/dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/landing'>Landing</Link>
      </nav>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path='stats' element={<Stats />} />
          <Route path='jobs' element={<Jobs />} />
          <Route path='jobs/add' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
