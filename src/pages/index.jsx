import React, { useState } from "react";
import DropdownMenu from "../components/DropdownMenu";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
	homeObject1,
	homeObject2,
	homeObject3,
	homeObject4,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<DropdownMenu isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObject1} />
			<InfoSection {...homeObject2} />
			<Services />
			<InfoSection {...homeObject3} />
			<Footer />
		</>
	);
};

export default Home;
