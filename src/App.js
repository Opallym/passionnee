import Page from './components/pages/page';
import Navbarre from './components/pages/navbarre';
import Menu from './components/pages/menu';
import Chef from './components/pages/chef';
import Cuisine from './components/pages/cuisine';
import Reservation from './components/pages/reservation';
import Contact from './components/pages/contact';
import Carousel from './components/pages/carousel';
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
