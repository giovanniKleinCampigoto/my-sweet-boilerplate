import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Table, Jumbotron } from 'reactstrap'

import './ListUsers.scss'

class ListUsers extends Component {
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
                    <td>{val.email}</td>
                    <td>{val.phone}</td>
                    <td>{val.website}</td>
                    <td>{val.company.name}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">
                        Meu querido boilerplate
                    </h1>
                </Jumbotron>
                <Container>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>Nome</th>
                                <th>Nome da empresa</th>
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

export default connect(mapStateToProps)(ListUsers)