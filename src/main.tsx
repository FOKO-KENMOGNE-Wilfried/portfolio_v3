import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DefaultLayout from './components/layouts/DefaultLayout'
import NotFound from './components/common/NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>

        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />}></Route>
        </Route>

        <Route path='*' element={<NotFound />} />

      </Routes>
    </Router>
  </StrictMode>,
)
