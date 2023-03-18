import React from "react";
import {
	DropdownMenuContainer,
	Icon,
	CloseIcon,
	DropdownMenuWrapper,
	DropdownList,
	DropdownLink,
	DropdownBtnContainer,
	DropdownRouter,
} from "./DropdownMenuElements";

const DropdownMenu = ({ isOpen, toggle }) => {
	return (
		<DropdownMenuContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon />
			</Icon>
			<DropdownMenuWrapper>
				<DropdownList>
					<DropdownLink to="about" onClick={toggle}>
						About
					</DropdownLink>
					<DropdownLink to="discover" onClick={toggle}>
						Discover
					</DropdownLink>
					<DropdownLink to="services" onClick={toggle}>
						Services
					</DropdownLink>
					<DropdownLink to="sign-up" onClick={toggle}>
						Sign Up
					</DropdownLink>
				</DropdownList>
				<DropdownBtnContainer>
					<DropdownRouter to="/signin">Sign In</DropdownRouter>
				</DropdownBtnContainer>
			</DropdownMenuWrapper>
		</DropdownMenuContainer>
	);
};

export default DropdownMenu;
