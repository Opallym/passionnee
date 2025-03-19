import Page from './components/pages/page.js';
import Navbarre from './components/pages/navbarre.js';
import Menu from './components/pages/menu.js';
import Chef from './components/pages/chef.js';
import Cuisine from './components/pages/cuisine.js';
import Reservation from './components/pages/reservation.js';
import Contact from './components/pages/contact.js';
import Carousel from './components/pages/carousel.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbarre />
      <Page />
      <Carousel />
      <Chef />
      <Cuisine />
      <Menu />
      <Reservation />
      <Contact />
    </>
  );
}

export default App;
