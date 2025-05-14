import './index.css'
import "./utils/GlobalStyle.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DefaultLayout from './components/layouts/DefaultLayout'
import NotFound from './components/common/NotFound'
import AboutMe from './pages/AboutMe'
import AboutMeLayout from './components/layouts/AboutMeLayout'
import Projects from './pages/Projects'
import ProjectLayout from './components/layouts/ProjectLayout'
import ContactMeLayout from './components/layouts/ContactMeLayout'
import ContactMe from './pages/ContactMe'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Home />}></Route>
        </Route>

        <Route element={<AboutMeLayout />}>
          <Route path='/anout-me' element={<AboutMe />}></Route>
        </Route>

        <Route element={<ProjectLayout />}>
          <Route path='/my-project' element={<Projects />}></Route>
        </Route>

        <Route element={<ContactMeLayout />}>
          <Route path='/contact-me' element={<ContactMe />}></Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)
