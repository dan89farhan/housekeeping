import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import loginStyles from "../styles/login_style";

import t from "tcomb-form-native";


var Form = t.form.Form;


class LoginComp extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    componentWillMount() {
        this.salesman = t.struct({
            username: t.maybe(t.String),              // a required string
            password: t.maybe(t.String),
            rememberMe: t.Boolean        // a boolean
        });
        this.options = {
            fields: {
                username: {
                    error: 'Please enter a valid username'
                },
                password: {
                    password: true,
                    secureTextEntry: true,
                    error: 'Please enter a valid password'
                }
            }
        };
    }

    onPress() {
        // call getValue() to get the values of the form
        var value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
            // console.log(value); // value here is an instance of salesman
            this.props.navigation.replace('Dashboard');
        }
    }

    render() {
        return (
            <View style={loginStyles.container}>
                {/* display */}
                <Form
                    ref="form"
                    type={this.salesman}
                    options={this.options}
                />
                <TouchableHighlight style={loginStyles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                    <Text style={loginStyles.buttonText}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default LoginComp;

