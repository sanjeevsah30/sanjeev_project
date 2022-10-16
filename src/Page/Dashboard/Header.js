import React from 'react'
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react'
import { Card, Row, Col } from "react-bootstrap";
import { Button } from '@mui/material';




function Header({ setIsAdding }) {
     const [playerData, setPlayerData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://media-content.ccbp.in/website/react-assignment/resources.json')
            const nbaData = await response.json()
            setPlayerData(nbaData.slice(0, 20))
        }
        fetchData()
    }, [])
    return (
        <header>
          
    <Container>
            <Row>
                {playerData.map((playerData, k) => (
                    <Col key={k} xs={12} md={4} lg={3} style={{ marginBottom:'20px',}}>
                        <Card style={{ marginBottom:'20px', width:'100%',height:'100%'}}>
                           

                            <Card.Body  >
                                <Card.Img src={playerData.icon_url} width={200} height={200}  style={{ borderRadius:'50%'}} />
                                <Card.Title style={{  marginTop:'5%'}}>{playerData.title}</Card.Title>
                                <Card.Text style={{  fontSize:'12px',color:'rgb(128,128,128)',fontWeight:'500',}}>{playerData.description}</Card.Text>
                                <Button variant="outlined" onClick={() => setIsAdding(true)} className='round-button'>Add {playerData.title} user</Button>
           
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

        </header>


    )
}

export default Header