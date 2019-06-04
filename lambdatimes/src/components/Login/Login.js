import React from 'react'
import styled from 'styled-components'

const LoginCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 0 0;
  padding: 20px 60px 40px;
  background: #FFFFFF;
  border: solid 1px #CCCCCC;
`

const LoginTitle = styled.h2`
  margin: 0;
  font-size: 1.75rem;
`

const LoginBody = styled.p``

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`

const FormLabel = styled.label`
  color: #444444;
`

const FormInput = styled.input`
  margin: 10px 0 15px;
  padding: 10px 5px;
  width: 100%;
  color: #444444;
  outline: 0;
  border: solid 2px #E5E5E5;
  border-radius: 5px;
`

const FormButton = styled.input`
  font-size: 100%;
  padding: 10px 5px;
  width: 100%;
  color: #FAFAFA;
  background: #333333;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #444444;
  }

  &:active,
  &:focus {
    background: #222222;
  }
`

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('auth', JSON.stringify({
      isLoggedIn: true,
      email: this.state.email,
    }))
    window.location.reload()
  }

  render() {
    return (
      <LoginCard>
        <LoginTitle>Log In</LoginTitle>
        <LoginBody>In order to view the Lambda Times content, you must first log in.</LoginBody>
        <LoginForm onSubmit={this.handleSubmit}>
          <FormLabel for="email">
            Email
          </FormLabel>
          <FormInput
            required
            name="email"
            type="email"
            placeholder="alice@example.com"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormLabel for="password">
            Password
          </FormLabel>
          <FormInput
            required
            minLength="6"
            name="password"
            type="password"
            placeholder="********"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <FormButton
            type="submit"
            value="Log In"
          />
        </LoginForm>
      </LoginCard>
    )
  }
}

export default Login
