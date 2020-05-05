import React, { Component } from 'react'
import './Pendaftaran.css';
import {Container, Col, Row, Image} from 'react-bootstrap';
// import axios from 'axios'

export default class Pendaftaran extends Component {
    constructor() {
        super();

        this.state = {
            no_ktp: "",
            name: "", 
            birth_place: "",
            birth_date: "",
            gender: "",
            address: "",
            religion: "",
            marital_status: "",
            job: "",
            nationality: ""
        }
    }


    submit() {
        let url="https://kyc-data-service.herokuapp.com/data";
        let data=this.state;
        fetch(url, {
            method : 'POST',
            mode : 'no-cors',
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{ 
                console.log(text ? JSON.parse(text):{})
                alert("Pendaftaran berhasil. Data berhasil disimpan")
            })
        })
    }

    render() {
        return (
            <div>
                <Image src="assets/header5.jpg" className="header-image"/>
                <Container className="font">
                <h1>FORM PENDAFTARAN</h1>
                <Row>
                <div className="col-md-8 position">
                <Col xs={15} sm={7} className="main-section"></Col>
                <div className="daftar">
                <label>NIK :</label><br/>
                <input type="text" value={this.state.no_ktp} name="no_ktp" style={{ width: "450px" }}
                onChange={(data)=>{this.setState({no_ktp:data.target.value}) }} /> <br/> <br/>
                <label>Nama : </label><br/>
                <input type="text" value={this.state.name} name="name" style={{ width: "450px" }}
                onChange={(data)=>{this.setState({name:data.target.value}) }} /> <br/> <br/>
                <label>Tempat Lahir : </label><br/>
                <input type="text" value={this.state.birth_place} name="birth_place" style={{ width: "450px" }}
                onChange={(data)=>{this.setState({birth_place:data.target.value}) }} /> <br/> <br/>
                <label>Tanggal Lahir : </label><br/>
                <input type="text" value={this.state.birth_date} name="birth_date" style={{ width: "450px" }}
                onChange={(data)=>{this.setState({birth_date:data.target.value}) }} /> <br/> <br/>
                <label>Jenis Kelamin : </label><br/>
                <input type="text" value={this.state.ngender} name="gender" style={{ width: "450px" }}
                onChange={(data)=>{this.setState({gender:data.target.value}) }} /> <br/> <br/>
                <label>Alamat : </label><br/>
                <input type="text" value={this.state.address} name="address" style={{ width: "450px" }}
                onChange={(data)=>{this.setState({address:data.target.value}) }} /> <br/> <br/>
                <label>Agama : </label><br/>
                <input type="text" value={this.state.religion} name="religion" style={{ width: "450px" }}
                onChange={(data)=>{this.setState({religion:data.target.value}) }} /> <br/> <br/>
                <label>Status : </label><br/>
                <input type="text" value={this.state.marital_status} name="marital_status" style={{ width: "450px" }}
                onChange={(data)=>{this.setState({marital_status:data.target.value}) }} /> <br/> <br/>
                <label>Kewarganegaraan : </label><br/>
                <input type="text" value={this.state.nationality} name="nationality" style={{ width: "450px" }}
                onChange={(data)=>{this.setState({nationality:data.target.value}) }} /> <br/> <br/>

            <button onClick={() =>{this.submit()}}>Submit</button>
            </div>
            </div>
            </Row>
            </Container>
            </div>
        )
    }
}
