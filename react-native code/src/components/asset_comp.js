import React, { Component } from "react";
import { View, Text, ToastAndroid, TouchableHighlight } from "react-native";

import loginStyles from "../styles/login_style";

import t from "tcomb-form-native";

import { API_URL } from "../constant";


var Form = t.form.Form;


class AssetComp extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    componentWillMount() {
        this.asset = t.struct({
            assetname: t.String,              // a required string

        });
        this.options = {
            fields: {
                assetname: {
                    error: "you can't leave it empty"
                },

            }
        };
    }

    onPress() {
        // call getValue() to get the values of the form
        var value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
            // alert(JSON.stringify(value)); // value here is an instance of asset

            fetch(API_URL + "add-asset", {
                body: JSON.stringify({
                    name: value.assetname,

                }),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    // "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
                }
            })
                .then(response => response.json())
                .then(responseJson => {

                    if (responseJson.status == 200) {



                        alert('Successfully added asset');

                    } else {
                        ToastAndroid.show(
                            "Server Error \nPlease try after some" + JSON.stringify(responseJson),
                            ToastAndroid.LONG
                        );

                    }
                })
                .catch(error => {
                    ToastAndroid.show("Error " + error, ToastAndroid.LONG);

                });

        }
    }

    render() {
        return (
            <View style={loginStyles.container}>
                {/* display */}
                <Form
                    ref="form"
                    type={this.asset}
                    options={this.options}
                />
                <TouchableHighlight style={loginStyles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                    <Text style={loginStyles.buttonText}>SaveAsset</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default AssetComp;

