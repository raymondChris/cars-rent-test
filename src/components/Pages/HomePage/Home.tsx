import './Home.scss';

import React, {useState} from 'react';
import Card from '../../Cards/Card';
import Cars from '../../../cars.json';

import logo from '../../../assets/logo-2.svg';
import menu from '../../../assets/list-menu.svg';
import { Link } from 'react-router-dom';
import checkHoliday from '../../../utils/checkHoliday';

import SideBar from '../../SideBar/SideBar';

//function to get the car manufacturing year 
function getYear(year: any) {
  return new Date(year).getFullYear();
}

const  Home = ()=> {
const [isOpen,setIsOpen] =useState<null | boolean>(null);

const togleSideBarHandler: (value: boolean) => void = (value: boolean) => {
  setIsOpen(prevState => {
    if (prevState === null && !value ) {
      return null
    } else {
      return value
    }
  }
  )
  
}
  
  const holiday = checkHoliday()
  const message = holiday ? 
  <h2>{`Today is ${holiday.name}! We have special discount`}</h2>
  :
  <h2>Welcome!</h2>
  ;
  return (
    <div className="App">
      <nav className="navbar navbar-light">
        <img src={logo} width="125px" alt="logo"></img>
        <span className="nav-center">Autosuche</span>
        <div className="menu" onClick={() => togleSideBarHandler(true)}>
        <img src={menu} width="15px" alt="menu-icon" ></img>
        </div>
      </nav>
      <main onClick={() => togleSideBarHandler(false)}>
        <div>
          {message}
          <h4>Car List</h4>
        </div>

        {/*Display card component multiple times, for all cars that are rentable*/}
        <div className="card-group">
        {Cars.map((Car, i) => <Card key={Car.Name + i} name={Car.Name} accelaration={Car.Acceleration} power={Car.Horsepower} rentable={Car.Rentable} jahr={getYear(Car.Year)}></Card>
        )}
        </div>
      </main>
      <SideBar isOpen={isOpen} onClose={() => togleSideBarHandler(false)}/>
    </div>
  );
}

export default Home;
