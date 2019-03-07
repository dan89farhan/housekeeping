
import React, { Component } from "react";
import { View, Text } from "react-native";
import AssetComp from '../components/asset_comp';

class Asset extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AssetComp></AssetComp>
        )
    }
}

export default Asset;