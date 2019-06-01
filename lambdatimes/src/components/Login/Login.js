import React from 'react'

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
      <div>
        <h2>Must be signed in to view this content</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email: {` `}
            <input
              required
              name="email"
              type="email"
              placeholder="alice@example.com"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password: {` `}
            <input
              required
              minLength="6"
              name="password"
              type="password"
              placeholder="********"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            value="Log In"
          />
        </form>
      </div>
    )
  }
}

export default Login
