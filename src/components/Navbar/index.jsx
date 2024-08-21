import React, { useState, useEffect } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

import Remu from "../../assets/img/Remove.png"

import { Container, Box, List, ListItme, Btn, Logo, Logojon, Nav, NavLeft, NavRight, Selekt, Link, NavMadya, ImgMad, ListMad } from './style.jsx'
import "./index.css"
import Download from '../Download/index.jsx'
// import Logojon  from '../../assets/img/logo.png'

import Pochta from "../../assets/icons/mail-fill.png"
import Telifon from "../../assets/icons/phone-fill.png"


const Navbar = () => {

  



  const [count, setCount] = useState(false)

  const [navburger, setNavburger] = useState(false)

  const [shrink, setShrink] = useState(false);

  let Windov =()=>{
    window.onclick(()=>{
      setNavburger(false)
    })
  }





  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // 50px dan ko'p skroll qilingan bo'lsa
        setShrink(true);

      } else {
        setShrink(false);

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ButtonClik = () => {

    const Nav = () => {
      setNavburger(!navburger)
    }

    setCount(!count);
  }


  const NavMad = () => {
    return <NavMadya>
      <ImgMad onClick={() => setNavburger(false) } src={Remu} alt="" />
      <ListMad>
        <ListItme>Home</ListItme>
        <ListItme>About</ListItme>
        <ListItme>Features</ListItme>
        <ListItme>Screenshot</ListItme>
        <ListItme>Blog</ListItme>
      </ListMad>
    </NavMadya>
  }




  return (
    <div>
      {navburger ? <NavMad /> : <></>}
      <Container>
        <Box>


          <Nav className={shrink ? "none" : "flex"}>
            <NavLeft>
              <img src={Pochta} width={18} alt="" />
              <Link href="#">Info@youremail.com</Link>
            </NavLeft>

            <NavRight>
              <img src={Telifon} width={18} alt="" />
              <Link href="#">+998 __ --- -- --</Link>
            </NavRight>
          </Nav>

          <List>
            <ListItme className='GamburgerMenyu' onClick={() => setNavburger(true)} >
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#232233" />
                </svg>
              </div>



            </ListItme>

            <ListItme className='navNan'>  Home     </ListItme>
            <ListItme className='navNan'>  About    </ListItme>
            <ListItme className='navNan'>  Features </ListItme>

            <ListItme className='logojon'>
              <span> </span>
              <Logo src={Logojon} alt="" />
            </ListItme>


            <ListItme className='navNan'>  Screenshot </ListItme>



            <ListItme className='navNan'>  Blog </ListItme>
            <ListItme>
              <Btn type="primary" onClick={ButtonClik} >Download {count && <Selekt><Download prop="colmun"></Download> </Selekt>} </Btn>
            </ListItme>
          </List>
        </Box>
      </Container>



      <Outlet />
    </div>
  )
}

export default Navbar

