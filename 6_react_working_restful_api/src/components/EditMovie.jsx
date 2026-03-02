import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function EditMovie(){
    // Lấy id từ URI được gắn với định dạng :id
    const {id} = useParams()
    return (
        <Container>
            <Row>
                <Col><h1 style={{textAlign:"center"}}>Edit Movie (MVC pattern)</h1></Col>
            </Row>
            <Row>
                <Col>
                MovieId: {id}
                </Col>
            </Row>
        </Container>
    )
}