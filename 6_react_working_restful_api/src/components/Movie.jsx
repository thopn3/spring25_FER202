// Component xử lý đọc dữ liệu từ API với URI: GET /movies
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Button, Col, Container, Form, Row, Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Movie(){
    const [movies, setMovies] = useState([])
    const [directors, setDirectors] = useState([])
    const [producers, setProducers] = useState([])
    const [stars, setStars] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(()=>{
        const getData = async () => {
            const movieResult = await axios.get('http://localhost:9999/movies')
            const directorResult = await axios.get('http://localhost:9999/directors')
            const producerResult = await axios.get('http://localhost:9999/producers')
            const starResult = await axios.get('http://localhost:9999/stars')
            setMovies(movieResult.data)
            setDirectors(directorResult.data)
            setProducers(producerResult.data)
            setStars(starResult.data)

            const genreSet = [...new Set(movieResult.data.flatMap(m => m.genres))]
            setGenres(genreSet)
        }

        getData()
    }, [])

    console.log(genres)

    return (
        <Container>
            <Row>
                <Col><h3 style={{textAlign:'center'}}>List of Movies</h3></Col>
            </Row>
            <Row>
                <Col md={{span:8,offset:2}}>
                    <Form.Control placeholder='Search by title ...'
                        style={{border:'1px solid gray', marginBottom:20}}/>
                </Col>
            </Row>
            <Row>
                <Col style={{textAlign:'right', marginBottom:10}}>
                    {/* <Button className='btn btn-success'>Create Movie</Button> */}
                    <Link to={'/movies/create'} className='btn btn-success'>Create Movie</Link>
                </Col>
            </Row>
            <Row>
                <Col xs={2} style={{backgroundColor:"aquamarine", fontSize:15}}>
                    <h3>Genres</h3>
                    <Form.Select>
                        <option value=''>-- Choice a Genre --</option>
                        {
                            genres?.map(g => <option value={g} key={g}>{g}</option>)
                        }
                    </Form.Select>
                    <h3>Producers</h3>
                    {
                        producers?.map(p => <Form.Check type='radio' name='rbProducer' value={p.id} label={p.name} key={p.id}/>)
                    }
                    <h3>Directors</h3>
                    {
                        directors?.map(d => <Form.Check type='checkbox' value={d.id} label={d.fullname} key={d.id}/>)
                    }
                </Col>
                <Col>
                    <Table bordered hover striped style={{border:'1px solid black'}}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Release</th>
                                <th>Producer</th>
                                <th>Director</th>
                                <th>Genres</th>
                                <th>Stars</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                movies?.map(m => {
                                    const r = new Date(m.release)
                                    return <tr key={m.id}>
                                        <td>{m.id}</td>
                                        <td>{m.title}</td>
                                        <td>{r.getUTCDate()}-{r.getUTCMonth()}-{r.getFullYear()}</td>
                                        <td>{producers?.find(p=>p.id === m.producerId)?.name}</td>
                                        <td>{directors?.find(d=>d.id === m.directorId)?.fullname}</td>
                                        <td>{m.genres.join("; ")}</td>
                                        <td>
                                            <ol>
                                            {
                                            stars?.filter(s=>m?.starIds.includes(s.id))
                                                .map(s1 => <li key={s1.id}>{s1.fullname}</li>)
                                            }
                                            </ol>
                                        </td>
                                        <td>
                                            {/* <Link to={`/movies/edit/${m.id}`} className='btn btn-primary'>Edit</Link> */}
                                            <Link to={`/movies/edit?movie_id=${m.id}`} className='btn btn-primary'>Edit</Link>
                                        </td>
                                        <td>
                                            <Button className='btn btn-danger'>Delete</Button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}