import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>,
)
