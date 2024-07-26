import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import logo from "./pic/logo.png";
import VK from "./pic/free-icon-social-13670425 (1).png"
import TG from "./pic/free-icon-telegram-2111644 (1).png"

import Forspecialists from '../../Pages/Forspecialists/Forspecialists';
import Home from "../../Pages/Home/Home"
import Schedule from "../../Pages/Schelude/Schelude"
import Specialists from "../../Pages/Specialists/Specialists"
import Personal from '../../Pages/Personal/Personal';
import Public from '../../Pages/Public/Public';
import { Dropdown } from 'react-bootstrap';

import './style.css';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
<>
	<Navbar fixed='top' expand="md" className="custom-navbar">
		<Container fluid className="nav-container">
			<Navbar.Brand href="/"> <img src={logo} className='logo' alt="Logo" /> </Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse className='collapse' id="responsive-navbar-nav">
				<Nav>
					<Nav.Link className='navlink' href="/schedule">Расписание</Nav.Link>
					<Nav.Link className='navlink' href="/specialists">Специалисты</Nav.Link>
					<Nav.Link className='navlink' href="/forspecialists">Психологам</Nav.Link>
					<Nav.Link className='socialVK' href="https://vk.com/andrey_shamro"> <img src={VK} alt="VK" height="41px" width="41px" /> </Nav.Link>
					<Nav.Link className='socialTG'> <img src={TG} alt="TG" height="31px" width="31px" /> </Nav.Link>
					<Dropdown className='dropdowna' onMouseEnter={(e)=> { setShowDropdown(true); }} onMouseLeave={(e) => { setShowDropdown(false); }} >
						<Dropdown.Toggle className={`dropdown ${showDropdown ? 'opened' : ''}`} />
						<Dropdown.Menu>
							<Dropdown.Item href='https://t.me/sreda_svoim ' className='dropdown_item'><img src={TG} alt="TG" height="20px" width="20px" className='dropdown_img' /> Канал для своих </Dropdown.Item>
							<Dropdown.Item href="https://t.me/prof_identity" className='dropdown_item_1'> <img src={TG} alt="TG" height="20px" width="20px" className='dropdown_img' /> Канал для психологов </Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
	<Router>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/schedule' element={<Schedule/>}/>
			<Route path='/specialists' element={<Specialists/>}/>
			<Route path='/personal' element={<Personal/>}/>
			<Route path='/public' element={<Public/>}/>
			<Route path='/forspecialists' element={<Forspecialists/>}/> </Routes>
	</Router>
	</>
  );
}