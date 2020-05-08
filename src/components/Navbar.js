import React from 'react';
import Homepage from './Homepage';
import Member from './Memberpage';
import Bottom from './Bottom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Navbar.css';

class Nav extends React.Component {
    state = {
        current: < Homepage / > ,
    };

    homePage = () => {
        console.log("click");
        this.setState({ current: < Homepage / > });
    };
    membersPage = () => {
        console.log("click");
        this.setState({ current: < Member / > });
    };
    render() {
        return ( <
            div className = "navbar" >
            <
            nav className = "navbar navbar-expand-xl navbar-dark bg-dark justify-content-center navbar-toggler fixed-top" >
            <
            a className = "navbar-brand"
            href = "#" > Project Hermez < /a> <
            div className = "collapse navbar-collapse"
            id = "navbarNav" >
            <
            ul className = "navbar-nav" >
            <
            li className = "nav-item" >
            <
            a className = "nav-link"
            onClick = { this.homePage } > Home < span className = "sr-only" > (current) < /span></a >
            <
            /li> <
            li className = "nav-item" >
            <
            a className = "nav-link"
            onClick = { this.membersPage } > members < /a> <
            /li> <
            /ul> <
            /div> <
            /nav> <
            div className = "page" > { this.state.current } <
            /div> <
            Bottom / >
            <
            /div>
        );
    }
}

export default Nav;