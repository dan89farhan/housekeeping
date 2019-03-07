import React, { Component } from "react";

import {
    Container,
    Header,
    Content,
    Left,
    Body,
    Title,
    Right,
    Drawer,
    Button,
    Icon
} from "native-base";

class MainHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => {
                            this.props.openDrawer();
                        }}
                    >
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        )

    }
}

export default MainHeader;