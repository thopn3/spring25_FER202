import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function EditMovie1(){
    const [parameters] = useSearchParams()
    const movieId = parameters.get('movie_id')
    return (
        <Container>
            <Row>
                <Col><h1 style={{textAlign:"center"}}>Edit Movie (Params on Query string)</h1></Col>
            </Row>
            <Row>
                <Col>
                    MovieId: {movieId}
                </Col>
            </Row>
        </Container>
    )
}