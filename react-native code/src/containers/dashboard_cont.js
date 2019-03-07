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
} from "native-base";

import { BackHandler } from "react-native";

// import components
import DashboardComp from '../components/dashboard_comp';
import MainHeader from '../components/layout/header_comp'


// import containers
import SideBar from '../containers/layout/sidebar_cont';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {


    }

    componentWillUnmount() {

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
                        title={'Dashboard'}
                        openDrawer={() => this.openDrawer()}
                    ></MainHeader>
                    <Content padder>
                        <DashboardComp navigation={this.props.navigation}></DashboardComp>
                    </Content>
                </Container>
            </Drawer>
        )
    }
}

export default Dashboard;