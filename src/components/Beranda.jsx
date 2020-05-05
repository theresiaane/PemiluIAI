import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import pemilu from '../assets/pemilu.png';
import './Beranda.css'

export default class Beranda extends Component {
    render() {
        return (
           <Container className="home">
               <Jumbotron style={{ backgroundImage: `url(${pemilu})`, height: '10 cm' }}>
                   <h1>Selamat Datang di</h1>
                   <h1>Pemilu Online 2020</h1>
                   <p>Gunakan hak pilih Anda secara rahasia, jujur, dan adil</p>
               </Jumbotron>
               <h4>Belum memiliki akun?</h4>
               <p>Daftar sekarang, dengan klik tombol "Daftar" di bawah ini</p>
               <Link to="/pendaftaran">
                   <Button bsStyle="dark">Daftar</Button>
               </Link>
           </Container>

        )
    }
}
