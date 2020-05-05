import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/">Web Pemilu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="justify-content-end">
                <Nav.Link href="/">Beranda</Nav.Link>
                <Nav.Link href="/Pendaftaran">Pendaftaran</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/Vote">Vote</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
