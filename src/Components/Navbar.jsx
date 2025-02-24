import React from 'react'
 import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchAll from './SearchAll';
import LocalStorage from './LocalStorage';
import Pagination from './Pagination';


const Navbar = () => {
  return (
    <div>
  <Router>
      <nav>
        <ul style={{
          display:'flex',
          justifyContent:'space-around',
          listStyle:'none'
        }}>
          <li style={{border:'2px', borderRadius:'6px', backgroundColor:'gray', padding:'6px', color:'white'}}><Link  to='/'> Search </Link></li>
          <li style={{border:'2px', borderRadius:'6px', backgroundColor:'gray', padding:'6px', color:'white'}}><Link  to='/localstorage'> Localstorage</Link></li>
          <li style={{border:'2px', borderRadius:'6px', backgroundColor:'gray', padding:'6px', color:'white'}}><Link  to='/pagination'> Pagination </Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<SearchAll />} />
        <Route path="/localstorage" element={<LocalStorage />} />
        <Route path='/pagination' element={<Pagination />} />
      </Routes>

    </Router>
    </div>
  )
}

export default Navbar