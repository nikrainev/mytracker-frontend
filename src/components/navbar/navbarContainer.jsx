import React from 'react';
import s from './navbar.module.scss';
import {NavLink} from "react-router-dom";
import Navbar from "./navbar";
import axios from 'axios'
import {connect} from "react-redux";

class NavbarContainer extends React.Component {
    componentDidMount() {
        axios.get('http://nikrainev.ru:3000/auth/me', {headers:{"Authorization": "Bearer "+this.props.token}})
                .then(response => {
                    console.log(response)
                })
    }

    render() {
        return <Navbar />
    }
}

let mapStateToProps = (state) =>{
    return{
        token: state.auth.token
    }
}


export default NavbarContainer = connect(mapStateToProps)(NavbarContainer)