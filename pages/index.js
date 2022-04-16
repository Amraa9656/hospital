import Head from 'next/head'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <Row >
    <Navbar />
    <Col>
      <h1>Hello world</h1>
    </Col>
  </Row>    
  )
}
