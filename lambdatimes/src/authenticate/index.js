import React from 'react'

const withAutheticate = ProtectedComponent => Login => {
  return class extends React.Component {
    constructor() {
      super()
      this.state = {
        isLoggedIn: false
      }
    }

    componentDidMount() {
      const authData = localStorage.getItem('auth') || '{}'
      const { isLoggedIn } = JSON.parse(authData)
      this.setState({
        isLoggedIn: isLoggedIn || false
      })
    }
    
    render() {
      return (
        this.state.isLoggedIn
          ? <ProtectedComponent />
          : <Login />
      )
    }
  }
}

export default withAutheticate
