import Wrapper from '@wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo.jsx'
import { useAppContext } from '@contexts/appContext'

export default function Navbar() {
  const { user, showSidebar, toggleSidebar } = useAppContext()

  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='toggle-btn'
          onClick={() => console.log('toggle sidebar')}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button type='button' className='btn' onClick={toggleSidebar}>
            <FaUserCircle />
            {user.name}
            <FaCaretDown />
          </button>
          <div className={`dropdown ${showSidebar && 'show-dropdown'}`}>
            <button type='button' className='dropdown-btn'>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
