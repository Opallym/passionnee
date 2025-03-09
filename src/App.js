import React from "react";
import Page from './components/pages/page.js';
import Navbarre from './components/pages/navbarre.js';
import Menu from './components/pages/menu.js';
import Chef from './components/pages/chef.js';
import Cuisine from './components/pages/cuisine.js';
import Reservation from './components/pages/reservation.js';
import Contact from './components/pages/contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Page />
      <Navbarre />
      <Chef />
      <Cuisine />
      <Menu />
      <Reservation />
      <Contact />
    </div>
  );
}

export default App;
