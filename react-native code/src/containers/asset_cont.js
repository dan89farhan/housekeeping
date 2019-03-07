
import React, { Component } from "react";
import { View, Text } from "react-native";

import {
    Container,
    Header,
    Content,
    Left,
    Body,
    Title,
    Right,
    Drawer,
} from "native-base";

import AssetComp from '../components/asset_comp';


// import components
import DashboardComp from '../components/dashboard_comp';
import MainHeader from '../components/layout/header_comp'


// import containers
import SideBar from '../containers/layout/sidebar_cont';
class Asset extends Component {
    constructor(props) {
        super(props);
    }





    closeDrawer() {
        this.drawer._root.close();
    }

    openDrawer = () => {
        this.drawer._root.open();
    };
    render() {
        return (

            <Drawer
                type="displace"
                ref={ref => {
                    this.drawer = ref;
                }}
                tapToClose={true}
                content={
                    <SideBar navigation={this.props.navigation} pagename={"dashboard"} routeName='Dashboard' />
                }
                onClose={() => this.closeDrawer()}
            >
                <Container>
                    <MainHeader
                        title={'Add Asset'}
                        openDrawer={() => this.openDrawer()}
                    ></MainHeader>
                    <Content padder>
                        <AssetComp></AssetComp>
                    </Content>
                </Container>
            </Drawer>

        )
    }
}

export default Asset;