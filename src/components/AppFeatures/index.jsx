import React from 'react'
import {Wrapper, Container,Description, Centr, Vertikl, Box , List, ListItme } from './style'
import AboutCart from '../AboutCart'
import FeaturesImg  from "../../assets/img/App.png"
import AppFgCart from '../AppFgCart'





const AppFeatures = () => {
  return (
     <Wrapper>
        <Container>
          <h2 className='title'>App features</h2>
          <Description className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </Description>

          <Centr>
            <AppFgCart props="center" name="chat"></AppFgCart>
          </Centr>
          
          <Box>
            <Vertikl>
              <AppFgCart props="right" name="1"></AppFgCart>
              <AppFgCart props="right" name="2"></AppFgCart>
            </Vertikl>

            <div>
              <img src={FeaturesImg} alt="" />
            </div>

            <Vertikl>
              <AppFgCart props="left" name="3"></AppFgCart>
              <AppFgCart props="left" name="4"></AppFgCart>
            </Vertikl>

          </Box>

         <Centr>
            <AppFgCart props="center" name="5"></AppFgCart>
          </Centr>

        </Container>

       
    </Wrapper>
  )
}

export default AppFeatures
