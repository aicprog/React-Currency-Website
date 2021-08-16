
import React from 'react'
import { Container, FormWrap, Icon, Form, FormContent, FormH1, FormLabel, FormInput, FormButton, Text } from './signInElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Currency One</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="Email"/>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormInput type="password"/>
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot Password?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignIn
