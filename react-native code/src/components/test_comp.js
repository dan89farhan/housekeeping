import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import t from "tcomb-form-native";


var Form = t.form.Form;


class Test extends Component {
    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }

    componentWillMount() {
        this.login = t.struct({
            username: t.String,              // a required string
            password: t.String,
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
            // console.log(value); // value here is an instance of Person
            alert(JSON.stringify(value));
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* display */}
                <Form
                    ref="form"
                    type={this.login}
                    options={this.options}
                />
                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>I m a test</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Test;

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});