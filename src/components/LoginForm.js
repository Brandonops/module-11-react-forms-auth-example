import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        this.props.handleSubmit(this.state.username, this.state.password)
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    <label htmlFor="username">Username:</label>
                    <br></br>
                    <input 
                        type="text" 
                        id="username"
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    </p>
                    <p>
                    <label htmlFor="password">Password:</label>
                    <br></br>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    </p>
                    <button type="submit">login</button>
                </form>
                
            </div>
        )
    }
}
