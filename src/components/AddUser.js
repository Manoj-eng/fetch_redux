import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/userAction';

class AddUser extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleTextChange = event => {
        const {target: {name, value}} = event;
        this.setState({ [name]: value });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: '',
            email: '',
            password: ''
        });
    }

    render(){
        return(
            <div className="form-container">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group"><b>Form</b></div>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={this.handleTextChange} value={this.state.name} type="text" name="name" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleTextChange} value={this.state.email} type="text" name="email" className="form-control" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input onChange={this.handleTextChange} value={this.state.password} type="text" name="password" className="form-control" placeholder="password" />
                    </div>
                    <div className="form-group">
                        <p><b>Please Select Your Gender</b></p>
                        <div>
                        <label>Male</label>
                        <input  
                        type="radio" 
                        id="male" 
                        name="Gender"
                        />
                        </div>
                        <div>
                        <label>Female</label>
                        <input 
                        type="radio"
                        name="Gender"
                        id="female"
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Add User</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addUser })(AddUser);