import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from './components/Movie';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateMovie from './components/CreateMovie';
import EditMovie from './components/EditMovie';
import EditMovie1 from './components/EditMovie1';

function App() {
  return (
    <BrowserRouter>
      {/* <User/>
      <Post/> */}
      <Routes>
        <Route path='/' element={<Movie/>}/>
        <Route path='/movies' element={<Movie/>}/>
        <Route path='/movies/create' element={<CreateMovie/>}/>
        <Route path='/movies/edit/:id' element={<EditMovie/>}/>
        <Route path='/movies/edit' element={<EditMovie1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
