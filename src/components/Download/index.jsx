import React from 'react'
import { Container } from './style'
import Playmarket from "../../assets/img/paymarket.png"
import AppStore from "../../assets/img/appstore.png"





const Download = ({prop}) => {


  
  return (
     <div>
        <Container props={prop}>
          <div>
            <a href="#">
             <img src={Playmarket} alt="" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={AppStore} alt="" />
            </a>
          </div>
        

        </Container>

       
    </div>
  )
}

export default Download
