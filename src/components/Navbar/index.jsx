// Navbar component
import { React, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	BurgerMenu,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else setScrollNav(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to="home">dolla</NavLogo>
					<BurgerMenu onClick={toggle}>
						<FaBars />
					</BurgerMenu>
					<NavMenu>
						<NavItem>
							<NavLinks to="about" spy={true} offset={-80}>
								About
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="discover" spy={true} offset={-80}>
								Discover
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="services" spy={true} offset={-80}>
								Services
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="sign-up" spy={true} offset={-80}>
								Sign Up
							</NavLinks>
						</NavItem>
						<NavBtn>
							<NavBtnLink to="/signin">Sign In</NavBtnLink>
						</NavBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
