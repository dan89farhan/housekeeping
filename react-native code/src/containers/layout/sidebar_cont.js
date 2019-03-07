import React, { Component } from "react";
import { ToastAndroid, AsyncStorage } from "react-native";
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text,
    Left,
    Right,
    Icon,
    View,
    Thumbnail,
    Body,
    Button,
    Title
} from "native-base";

import SideItem from '../../components/layout/side_item_comp';

//import user-actions


// import connect
import { connect } from "react-redux";

// import bindActionCreator
import { bindActionCreators } from "redux";

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        AsyncStorage.getItem("token").then(token => {
            // alert(token);
            if (token != null) this.props.onGetProfile(token);
        });
    }





    logout() {
        AsyncStorage.getItem("token").then(token => {
            // this.props.onClearUser(token, this.props.navigator);
        });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Khushi Creation</Title>
                    </Body>
                </Header>
                <View style={{ backgroundColor: "#fff", flex: 1 }}>
                    <Content>
                        <List>
                            <SideItem
                                myPageName='login'
                                leftIcon='gift'
                                rightIcon='arrow-forward'
                                pagename={this.props.pagename}
                                goToPage={() => this.goToPage()}
                                navigation={this.props.navigation}
                                routeName='Login'
                            ></SideItem>
                            <SideItem
                                myPageName='dashboard'
                                leftIcon='gift'
                                rightIcon='arrow-forward'
                                pagename={this.props.pagename}
                                goToPage={() => this.goToPage()}
                                navigation={this.props.navigation}
                                routeName='Dashboard'
                            ></SideItem>
                            <SideItem
                                myPageName='Asset'
                                leftIcon='gift'
                                rightIcon='arrow-forward'
                                pagename={this.props.pagename}
                                goToPage={() => this.goToPage()}
                                navigation={this.props.navigation}
                                routeName='Asset'
                            >
                            </SideItem>
                            <SideItem
                                myPageName='Task'
                                leftIcon='gift'
                                rightIcon='arrow-forward'
                                pagename={this.props.pagename}
                                goToPage={() => this.goToPage()}
                                navigation={this.props.navigation}
                                routeName='Task'
                            >
                            </SideItem>
                            <SideItem
                                myPageName='Worker'
                                leftIcon='gift'
                                rightIcon='arrow-forward'
                                pagename={this.props.pagename}
                                goToPage={() => this.goToPage()}
                                navigation={this.props.navigation}
                                routeName='Worker'
                            >
                            </SideItem>
                            <SideItem
                                myPageName='Assign Task'
                                leftIcon='gift'
                                rightIcon='arrow-forward'
                                pagename={this.props.pagename}
                                goToPage={() => this.goToPage()}
                                navigation={this.props.navigation}
                                routeName='AssignTask'
                            >
                            </SideItem>
                        </List>


                    </Content>
                </View>
            </Container>
        );
    }
}


export default SideBar;
