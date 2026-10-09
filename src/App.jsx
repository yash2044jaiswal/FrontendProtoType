
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import PublicLayout from './layouts/publicLayouts.jsx';
import Home from './pages/CommmonPages/Home.jsx';
import Dashboard from './pages/CommmonPages/Dashboards.jsx';
import GlobalView from './pages/CommmonPages/GlobView.jsx';
import About from './pages/CommmonPages/About.jsx';
import Repository from './pages/CommmonPages/Repository.jsx';
import Contact from './pages/CommmonPages/Contact.jsx';
import AskPolaris from './pages/CommmonPages/AskPolaris.jsx';
import AuthPage from './pages/CommmonPages/AuthPage.jsx';
import Terms from './pages/CommmonPages/Term.jsx';
import ResetPassword from './pages/CommmonPages/ResetPassword.jsx';
import ResearchDetail from './pages/CommmonPages/ResearchDetail.jsx';
function App() {


  return (

    <Routes >
      <Route element={<PublicLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/globe" element={<GlobalView />} />
        <Route path="/about" element={<About />} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ask" element={<AskPolaris />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/research/:id" element={<ResearchDetail />} />
        import Dashboard from './pages/auth/Dashboard.jsx';
        <Route path="/account" element={<Dashboard />} />
        <Route path="/admin" element={<Dashboard />} />
      </Route>
    </Routes>

  )
}

export default App;
