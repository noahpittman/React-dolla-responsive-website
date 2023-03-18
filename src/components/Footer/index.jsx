import React from "react";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
} from "react-icons/fa";

import {
	FooterContainer,
	FooterLink,
	FooterWrap,
	FooterLinkItems,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkTitle,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcons,
	SocialIconLink,
	WebsiteRights,
} from "./FooterElements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/"> How it works</FooterLink>
							<FooterLink to="/"> Testimonials</FooterLink>
							<FooterLink to="/"> Careers</FooterLink>
							<FooterLink to="/"> Investors</FooterLink>
							<FooterLink to="/"> Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLink to="/"> Contact</FooterLink>
							<FooterLink to="/"> Support</FooterLink>
							<FooterLink to="/"> Destinations</FooterLink>
							<FooterLink to="/"> Sponsorships</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Videos</FooterLinkTitle>
							<FooterLink to="/"> Submit a video</FooterLink>
							<FooterLink to="/"> Ambassadors</FooterLink>
							<FooterLink to="/"> Agency</FooterLink>
							<FooterLink to="/"> Influencers</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Business</FooterLinkTitle>
							<FooterLink to="/"> Instagram</FooterLink>
							<FooterLink to="/"> Facebook</FooterLink>
							<FooterLink to="/"> Youtube</FooterLink>
							<FooterLink to="/"> Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="home">dolla</SocialLogo>
						<WebsiteRights>
							dolla ® {new Date().getFullYear()}. All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="//about:blank"
								target="_blank"
								aria-label="Facebook"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="//www.instagram.com/noahpittman.digital"
								target="_blank"
								aria-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="//about:blank"
								target="_blank"
								aria-label="Youtube"
							>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href="//www.twitter.com/noahpittman_di"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="//about:blank"
								target="_blank"
								aria-label="Linkedin"
							>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
