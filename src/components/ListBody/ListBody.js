import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

import { Container, Table, Jumbotron } from 'reactstrap'

import './ListBody.scss'

class ListBody extends Component {
    state = {}

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers = () => {
        const { dispatch } = this.props

        dispatch({
            type: 'FETCH_USERS_REQUEST',
            // payload: {} << here we can pass data to the saga (payload name is a convention)
        });
    }

    renderUsers = () => {
        const { users } = this.props;

        if (users.users.isLoading) {
            return <tr><td>Loading...</td></tr>
        }

        return users.users.items.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{val.name}</td>
                </tr>
            )
        });
    }

    render() {
        
        return (
            <div>
                <Container>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUsers()}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ListBody)