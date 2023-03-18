import React from "react";
import {
	Container,
	Form,
	FormButton,
	FormContent,
	FormH1,
	FormInput,
	FormLabel,
	FormWrapper,
	Icon,
	Text,
} from "./SignInElements";

const SignIn = () => {
	return (
		<>
			<Container>
				<FormWrapper>
					<Icon to="/">dolla | back to home</Icon>
					<FormContent>
						<Form action="#">
							<FormH1>Sign in to your account.</FormH1>
							<FormLabel htmlFor="for">Email</FormLabel>
							<FormInput type="email" required />
							<FormLabel htmlFor="for">Password</FormLabel>
							<FormInput type="password" required />
							<FormButton type="submit">Continue </FormButton>
							<Text>Forgot password</Text>
						</Form>
					</FormContent>
				</FormWrapper>
			</Container>
		</>
	);
};

export default SignIn;
