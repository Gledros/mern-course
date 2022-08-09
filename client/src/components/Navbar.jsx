import Wrapper from '@wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo.jsx'
import { useAppContext } from '@contexts/appContext'
import { useState } from 'react'

export default function Navbar() {
  const { user } = useAppContext()
  const [state, setState] = useState({ dropdown: false })

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
          <button
            type='button'
            className='btn'
            onClick={() => setState({ ...state, dropdown: !state.dropdown })}
          >
            <FaUserCircle />
            {user.name}
            <FaCaretDown />
          </button>
          <div className={`dropdown ${state.dropdown && 'show-dropdown'}`}>
            <button type='button' className='dropdown-btn'>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
