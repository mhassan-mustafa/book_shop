import './asset/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import contact from './components/contact';
import AddBook from './components/add_book';
import Detail from './components/book_detail';
import Update_book from './components/update_book';
import delete_book from './components/delete_book';
import { Nav, Navbar } from 'react-bootstrap';


export default function App() {

  return (
    <>
      <div>
        <Router>
          <Navbar expand="lg" className="navbar px-3">
            <h2 className='nav-heading text-primary'>BOOK SHOP</h2>
            <Nav className="me-auto">
              <Link className='nav-link ms-5' to='/'>Home</Link>
              <Link className='nav-link ms-3' to='/about'>About</Link>
              <Link className='nav-link ms-3' to="/contact">Contact</Link>
            </Nav>
          </Navbar>
          <Routes>
            <Route path='/' Component={home} />
            <Route path='/add_book' Component={AddBook} />
            <Route path='/detail/:id' Component={Detail} />
            <Route path='/update/:id' Component={Update_book} />
            <Route path='/delete/:id' Component={delete_book} />
            <Route path='/about' Component={about} />
            <Route path='/contact' Component={contact} />
          </Routes>
        </Router>
      </div>
    </>
  )
}