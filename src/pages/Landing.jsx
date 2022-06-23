
import main from '@assets/images/main-alternative.svg'
import Wrapper from '@assets/wrappers/LandingPage'
import { Logo } from '@components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className='container page'>
      <div className='info'>
        <h1>job <span>tracking</span> app</h1>
        <p>
          I'm baby keytar pug praxis enamel pin PBR&B etsy you probably haven't heard of them activated charcoal tote bag vegan.
          Live-edge iPhone readymade man braid try-hard twee subway tile tumblr vape offal.
          Yuccie squid craft beer kinfolk vaporware intelligentsia bespoke bicycle rights.
        </p>
      </div>
      <img src={main} alt="job hunt" className='img main-img' />
      <Link to='/register' className='btn btn-hero'>login/register</Link>
    </div>
  </Wrapper>
}

export default Landing