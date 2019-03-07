import React, { Component } from "react";

import { Container, Header, Content, Left, Body, Title, Right } from "native-base";
import LoginComp from '../components/login_comp'

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>

                <Content padder>
                    <LoginComp navigation={this.props.navigation}></LoginComp>
                </Content>
            </Container>
        )
    }
}

export default Login;