import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const DropdownMenuContainer = styled.aside`
    position: fixed;
    z-index:999;
    width: 100%;
    height 100%;
    background: #0d0d0d;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
        // opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
        top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
	color: white;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const DropdownMenuWrapper = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const DropdownList = styled.ul`
	display: grid;
	padding: 0;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`;

export const DropdownLink = styled(LinkScroll)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;

	&:hover {
		color: #01bf71;
		transition: 0.2s ease-in-out;
	}
`;

export const DropdownBtnContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const DropdownRouter = styled(LinkRouter)`
	border-radius: 50px;
	background: #01bf71;
	white-space: no-wrap;
	padding: 16px 64px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	text-decoration: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: white;
		color: #010606;
	}
`;
