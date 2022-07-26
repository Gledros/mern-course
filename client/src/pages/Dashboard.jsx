import Wrapper from '@wrappers/LandingPage'
import { useEffect } from 'react'

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1')
        const data = await response.json()
        console.log(data)

      } catch(error){
        console.log(error)
      }
  
    }

    fetchData()
  }, [])

  return <Wrapper>
    <h1>Dashboard</h1>
  </Wrapper>
}

export default Dashboard