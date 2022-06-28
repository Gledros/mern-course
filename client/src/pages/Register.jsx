import Wrapper from '@wrappers/RegisterPage'
import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '@components'
import { useAppContext } from "@contexts/appContext"

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const { showAlert, displayAlert, clearAlert } = useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = e => {
    const newValues = { ...values, [e.target.name]: e.target.value }

    if (showAlert)
      clearAlert()

    setValues(newValues)
  }

  const onSubmit = e => {
    e.preventDefault()

    const { name, email, password, isMember } = values

    if ((!isMember && !name) || !email || !password) {
      displayAlert()
      return
    }

    clearAlert()
    console.log('yei!')
  }

  return <Wrapper className='full-page'>
    <form className='form' onSubmit={onSubmit}>
      <Logo />
      <h3>{values.isMember ? 'Login' : 'Register'}</h3>
      {showAlert && <Alert />}
      {!values.isMember &&
        <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />}
      <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
      <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />
      <button type='submit' className='btn btn-block'>{values.isMember ? 'Login' : 'Register'}</button>
      <p>
        {values.isMember ? 'Not a member yet?' : 'Already a member?'}

        <button type='button' onClick={toggleMember} className='member-btn'>
          {values.isMember ? 'Register' : 'Login'}
        </button>
      </p>

    </form>

  </Wrapper>
}

export default Register