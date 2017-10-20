import React from 'react';
import './App.css';
import Person from './Person';
import Navbar from './Navbar';
import config from './config';

function App() {
  return (
    <div>
      <Navbar somProp={config.navbar} />

      <Person
        firstname={config.personne.firstname}
        age={config.personne.age}
        working={config.personne.working}
      />
    </div>
  );
}

export default App;
