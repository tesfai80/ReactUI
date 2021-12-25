import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements'
const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' >
			Home
		</NavLink>
	
		<NavLink to='/employee' >
			Employee
		</NavLink>
		<NavLink to='/new' >
			New Employee
		</NavLink>
		<NavLink to='/update' >
			Update Employee
		</NavLink>
		<NavLink to='/sign-up' >
			Sign Up
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
