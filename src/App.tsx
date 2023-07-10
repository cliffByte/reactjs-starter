import reactLogo from './assets/react.svg'
import cliffByteLogo from './assets/images/logo/logo.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </div>
      <div>
        <a href='https://cliffbyte.com' target='_blank'>
          <img src={cliffByteLogo} className='logo' alt='Vite logo' />
        </a>
      </div>

      <p className='read-the-docs'>
        NOTE : Please look at the <code className='branch'> graphql </code> branch and the{' '}
        <code className='branch'>rest-api</code> branch for the suitable usage.
      </p>
    </>
  )
}

export default App
