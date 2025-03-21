import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header'
// import Logo from './logo'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    {/* <Logo/> */}
  </StrictMode>,
)
