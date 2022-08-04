import Wrapper from '@wrappers/RegisterPage'
import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '@components'
import { useAppContext } from '@contexts/appContext'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { showAlert, displayAlert, clearAlert, user, setupUser } =
    useAppContext()

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = e => {
    const newValues = { ...values, [e.target.name]: e.target.value }

    if (showAlert) clearAlert()

    setValues(newValues)
  }

  const onSubmit = e => {
    e.preventDefault()

    const { name, email, password, isMember } = values

    if ((!isMember && !name) || !email || !password) {
      displayAlert()
      return
    }

    const currentUser = { name, email, password }

    if (isMember)
      setupUser({
        currentUser,
        endpoint: 'login',
        alertText: 'User logged in! Redirecting...'
      })
    else {
      setupUser({
        currentUser,
        endpoint: 'register',
        alertText: 'User registered! Redirecting...'
      })
    }

    displayAlert()
    clearAlert()
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          {values.isMember ? 'Login' : 'Register'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}

          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
