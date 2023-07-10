import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi'
import { FaGithub } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";



const LandingNav: React.FC = () => {

  return (
      <>
      <div className="nav">
            <div className="logo">
               <img className="img" src={logo} />
            </div>
            <div className="about">
                <button className="dropbtn">
                    About
                    <BiChevronDown className="fas" />
                </button>
                <div className="dropdown-content">
                  <a className='anchor' href="https://github.com/Elmostafa01/PingPong" target="_blank" ><FaGithub />Github</a>
                  <Link className='anchor' to="/authentication"><FaPenToSquare />Sign In</Link>
                </div>
            </div>
        </div>
      </>
  )
}

export default LandingNav
