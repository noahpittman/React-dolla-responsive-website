import React, { useState } from "react";
import Video from "../../../public/videos/background.mp4";
import {
	HeroContainer,
	HeroBG,
	VideoBG,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
	const [hover, setHover] = useState(false);
	const onHover = () => {
		setHover(!hover);
	};
	return (
		<HeroContainer id="home">
			<HeroBG>
				<VideoBG autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBG>
			<HeroContent>
				<HeroH1>Virtual Banking Made Easy</HeroH1>
				<HeroP>
					Sign up today for a new account to receive $250 in credit towards your
					next payment.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to="sign-up"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="true"
						dark="true"
					>
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
