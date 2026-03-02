import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function CreateMovie(){
    const [directors, setDirectors] = useState([])
    const [producers, setProducers] = useState([])
    const [stars, setStars] = useState([])

    useEffect(()=>{
        const getData = async () => {
            const directorResult = await axios.get('http://localhost:9999/directors')
            const producerResult = await axios.get('http://localhost:9999/producers')
            const starResult = await axios.get('http://localhost:9999/stars')
            setDirectors(directorResult.data)
            setProducers(producerResult.data)
            setStars(starResult.data)
        }

        getData()
    }, [])

    return (
        <Container>
            <Row>
                <Col><h1 style={{textAlign:"center"}}>Create new Movie</h1></Col>
            </Row>
            <Row>
                <Col md={{span:8, offset:2}}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Release</Form.Label>
                        <Form.Control type="datetime-local"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Genres</Form.Label>
                        <Form.Control placeholder="Separate by simicolon (;). Example: Action;Comedy"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Producers</Form.Label>
                        <Form.Select>
                            <option value=''>-- Choice a Producer --</option>
                            {
                                producers?.map(p => <option key={p.id} value={p.id}>{p.name}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Directors</Form.Label>
                        <Form.Select>
                            <option value=''>-- Choice a Director --</option>
                            {
                                directors?.map(d => <option key={d.id} value={d.id}>{d.fullname}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Stars</Form.Label>
                        {
                            stars?.map(s => <Form.Check value={s.id} key={s.id} label={s.fullname}/>)
                        }
                    </Form.Group>
                    <Button className="btn btn-success">Create</Button>
                </Col>
            </Row>
        </Container>
    )
}