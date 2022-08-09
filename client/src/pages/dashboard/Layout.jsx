import { Outlet, Link } from 'react-router-dom'
import Wrapper from '@wrappers/SharedLayout'
import { Navbar, SmallSidebar, BigSidebar } from '@components'

export default function Layout() {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
      {/* <nav>
        <Link to='stats'>stats</Link>
        <Link to='jobs'>all jobs</Link>
        <Link to='jobs/add'>add jobs</Link>
        <Link to='profile'>profile</Link>
      </nav> */}
    </Wrapper>
  )
}
