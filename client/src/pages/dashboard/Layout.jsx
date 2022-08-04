import { Outlet, Link } from 'react-router-dom'
import Wrapper from '@wrappers/SharedLayout'

export default function Layout() {
  return (
    <Wrapper>
      <nav>
        <Link to='stats'>stats</Link>
        <Link to='jobs'>all jobs</Link>
        <Link to='jobs/add'>add jobs</Link>
        <Link to='profile'>profile</Link>
      </nav>
      <Outlet />
    </Wrapper>
  )
}
