import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = () =>{
      return(
          <nav className="nav-wrapper gery darken-3">
              <div className='container'>
                  <Link to ='/' className="logo">Home</Link>
              </div>
          </nav>
      )

}

export default Toolbar;