import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CreateMovie(){
    const navigate = useNavigate()
    const [directors, setDirectors] = useState([])
    const [producers, setProducers] = useState([])
    const [stars, setStars] = useState([])

    // Tạo các states lấy dữ liệu trên form
    const [title, setTitle] = useState('')
    const [release, setRelease] = useState('');
    const [description, setDescription] = useState('')
    const [producerId, setProducerId] = useState('')
    const [directorId, setDirectorId] = useState('')
    const [genres, setGenres] = useState('')
    const [starIds, setStarIds] = useState([])

    // Tạo các state chứa thông báo cho từng input control -> Đảm bảo validate theo yêu cầu
    const [msgTitle, setMsgTitle] = useState('')
    const [msgRelease, setMsgRelease] = useState('')
    const [msgGenres, setMsgGenres] = useState('')
    const [msgProducerId, setMsgProducerId] = useState('')
    const [msgDirectorId, setMsgDirectorId] = useState('')
    const [msgStarIds, setMsgStarIds] = useState('')

    const handleCheck = (e) => {
        // Lấy giá trị tại Checkbox đang có sự kiện do người dùng tác động (check || uncheck)
        const value = e.target.value
        if(e.target.checked) // Nếu checkbox được checked (tích)
            // Kiểm tra starId đã tồn tại chưa. Nếu chưa tồn tại thì thêm vào mảng starIds
            setStarIds(prev => prev.includes(value)? prev : [...prev,value])
        else // Nếu checkbox bỏ tích
            // Lọc từ mảng starIds lấy các starId khác với value của checkbox đang bỏ tích
            setStarIds(prev => prev.filter(starId => starId != value))
    }

    function checkInput(){
        let flag = true
        
        if(title.trim().length==0){
            flag = false
            setMsgTitle('Title is required')
        }else
            setMsgTitle('')

        const dateNow = new Date()
        const releaseDate = new Date(release)
        if(releaseDate < dateNow){
            flag = false
            setMsgRelease('Release must be greater than or equal to current date')
        }else
            setMsgRelease('')

        if(starIds.length == 0){
            flag = false
            setMsgStarIds('You choice at least one star')
        }else
            setMsgStarIds([])

        // Hoàn thiện với producer và director

        return flag
    }

    const handleCreateMovie = () =>{
        // Validate data
        if(checkInput()){
            // Tổ chức lại dữ liệu
            const newMovie = {
                title, 
                release,
                genres: genres.split(";"),
                description,
                starIds,
                producerId,
                directorId
            }

            axios.post("http://localhost:9999/movies", newMovie)
            alert('Create new movie successfully')
            // Điều hướng về /movies
            navigate('/movies')
        }
    }
    
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
        <Container style={{backgroundColor:'aquamarine'}}>
            <Row>
                <Col><h1 style={{textAlign:"center"}}>Create new Movie</h1></Col>
            </Row>
            <Row>
                <Col md={{span:8, offset:2}} style={{backgroundColor:'white'}}>
                    {msgTitle && <li style={{color:'red'}}>{msgTitle}</li>}
                    {msgRelease && <li style={{color:'red'}}>{msgRelease}</li>}
                </Col>
            </Row>
            <Row>
                <Col md={{span:8, offset:2}}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={e => setTitle(e.target.value)}/>
                        {msgTitle && <span style={{color:'red'}}>{msgTitle}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Release</Form.Label>
                        <Form.Control type="datetime-local"
                             onChange={e => setRelease(e.target.value)}/>
                        {msgRelease && <span style={{color:'red'}}>{msgRelease}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Genres</Form.Label>
                        <Form.Control placeholder="Separate by simicolon (;). Example: Action;Comedy"
                             onChange={e => setGenres(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" onChange={e => setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Producers</Form.Label>
                        <Form.Select onChange={e => setProducerId(e.target.value)}>
                            <option value=''>-- Choice a Producer --</option>
                            {
                                producers?.map(p => <option key={p.id} value={p.id}>{p.name}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Directors</Form.Label>
                        <Form.Select onChange={e => setDirectorId(e.target.value)}>
                            <option value=''>-- Choice a Director --</option>
                            {
                                directors?.map(d => <option key={d.id} value={d.id}>{d.fullname}</option>)
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Stars</Form.Label>
                        {
                            stars?.map(s => <Form.Check value={s.id} key={s.id} label={s.fullname}
                                onChange={e => handleCheck(e)}
                            />)
                        }
                    </Form.Group>
                    <Button className="btn btn-success" onClick={()=>handleCreateMovie()}>Create</Button>
                </Col>
            </Row>
        </Container>
    )
}