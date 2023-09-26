
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Students from './components/Students';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Students />} ></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
