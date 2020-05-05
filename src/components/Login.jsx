import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Form, Button, Image} from 'react-bootstrap';
import './Login.css'

export default class Pendaftaran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }
    render() {
        var {isLoaded, items} = this.state;
        // if(!isLoaded) {
        //     return <div>Loading...</div>;
        // }

        // else {
            return (
                <div>
                        <Image src="assets/header5.jpg" className="header-image"/>
                        <Container className="font">
                        <h1>FORM LOGIN</h1>
                        <Row>
                        <div className="col-md-8 center">
                        <Col xs={15} sm={7} className="main-section"></Col>
                        <div className="daftar">
                        <label>NIK :</label><br/>
                        <input type="text" value={this.state.no_ktp} name="no_ktp" style={{ width: "450px" }}
                        onChange={(data)=>{this.setState({no_ktp:data.target.value}) }} /> <br/> <br/>
                        <label>Nama : </label><br/>
                        <input type="text" value={this.state.name} name="name" style={{ width: "450px" }}
                        onChange={(data)=>{this.setState({name:data.target.value}) }} /> <br/> <br/>
                    {/* <Image src="assets/header5.jpg" className="header-image"/>
                    <Container className="font">
                    <h1>FORM LOGIN</h1>
                    <Row>
                        <div className="col-md-12 center">
                        <Col xs={12} sm={5} className="main-section">
                    <Form className="daftar">
                        <Form.Group controlId="formGroupNIK">
                            <Form.Label>NIK</Form.Label>
                            <Form.Control type="NIK" placeholder="Masukkan NIK Anda" />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                        </Col> */}
                        <button className="fetch-button" onClick={() =>{this.componentDidMount()}}>Submit</button>
                        </div>
                        </div>
                        </Row>
                    </Container>
                    <div className="App">
                    <ul>
                        {items.map(item => (
                            <li key={item.no_ktp}>
                               Name : {item.name}
                               Status : {item.marital_status} 
                            </li>
                        ))};
                    </ul>
                </div>
                </div>
                )
        }
        
    }

