import Wrapper from '@wrappers/RegisterPage'
import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '@components'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = e => {
    const newValues = { ...values, [e.target.name]: e.target.value }

    if (values.showAlert)
      newValues.showAlert = false

    setValues(newValues)
  }

  const onSubmit = e => {
    e.preventDefault()

    for (const key in values) {
      if (typeof (values[key]) === 'string') {
        if (values[key].length === 0) {
          setValues({ ...values, showAlert: true })
          break
        }
      }
    }

    console.log('yei!')
  }

  return <Wrapper className='full-page'>
    <form className='form' onSubmit={onSubmit}>
      <Logo />
      <h3>{values.isMember ? 'Login' : 'Register'}</h3>
      {values.showAlert && <Alert text='Missing values' />}
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