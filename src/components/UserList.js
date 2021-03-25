import React, { Component } from 'react';
import { getUsers, setUser } from '../actions/userAction';
import { connect } from 'react-redux';

class UserList extends Component {
    componentDidMount(){
        this.props.getUsers();
    }

    handleOnClick = userId => {
        this.props.setUser(userId);
    }

    render(){
        const users = this.props.users;
        let renderList = '';
        if (users) {
            renderList = users.map(user => {
                return (<a onClick={() => {this.handleOnClick(user.id)}} key={user.id} className="list-group-item">{user.name}</a>);
            });
        }
        const currentUser = this.props.currentUser;
        let userDetails = '';
        if (currentUser) {
            userDetails = `Hi, my name is ${currentUser.name}, email ${currentUser.email}, and password ${currentUser.password}`;
        }
        return(
            <div className="userlist-container">
                <div className="list-group">
                    {renderList}
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        {userDetails}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        currentUser: state.user.userId ? state.user.users.filter(user => user.id === state.user.userId)[0] : null
    }
}

export default connect(mapStateToProps, { getUsers, setUser })(UserList);