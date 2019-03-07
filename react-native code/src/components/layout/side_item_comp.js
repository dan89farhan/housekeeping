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

//import user-actions


// import connect
import { connect } from "react-redux";

// import bindActionCreator
import { bindActionCreators } from "redux";

class SideItem extends Component {
    constructor(props) {
        super(props);

    }
    goToPage(routeName, myPageName) {

        this.props.navigation.replace(routeName);
    }

    render() {
        return (
            <ListItem
                onPress={() => this.goToPage(this.props.routeName, this.props.myPageName)}
                selected={this.props.pagename == this.props.myPageName}
            >
                <Left>
                    <Icon name={this.props.leftIcon} type="FontAwesome" />
                    <Text> {this.props.myPageName}</Text>
                </Left>
                <Right>
                    <Icon name={this.props.rightIcon} />
                </Right>
            </ListItem>
        );
    }
}


export default SideItem;
