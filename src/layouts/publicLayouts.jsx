import { Outlet } from 'react-router-dom';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

export default function PublicLayout() {
  return (
    <>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  );
}