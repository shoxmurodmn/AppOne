import React,  {useState} from 'react'

import { NavLink, Outlet} from 'react-router-dom'

import { Container,Box , List, ListItme, Btn, Logo, Logojon, Nav, NavLeft, NavRight, Selekt, Link} from './style.jsx'
import Download from '../Download/index.jsx'
// import Logojon  from '../../assets/img/logo.png'

import Pochta from "../../assets/icons/mail-fill.png"
import Telifon from "../../assets/icons/phone-fill.png"

const Navbar = () => {
  
const [count, setCount ] = useState(false)
  
const  ButtonClik=()=>{

   setCount(!count);
}



  return (
     <div>
        <Container>
        <Box>

        
          <Nav>
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
          <ListItme>  Home     </ListItme>
          <ListItme>  About    </ListItme>
          <ListItme>  Features </ListItme>

          <ListItme className='logojon'> 
            <span> </span> 
             <Logo src={Logojon}   alt="" />
          </ListItme>


          <ListItme>  Screenshot </ListItme>

          

          <ListItme>  Blog </ListItme>
          <ListItme>  
             <Btn type="primary" onClick={ButtonClik} >Download {count&&<Selekt><Download prop="colmun"></Download> </Selekt>} </Btn>
          </ListItme>
        </List>
        </Box>
        </Container>

           <Outlet />
    </div>
  )
}

export default Navbar

