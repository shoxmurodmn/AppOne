import React from 'react'
import AboutCart from '../AboutCart'

import MObilPhone from "../../assets/img/phone.png"

import {Wrapper , Container ,Box,H1, DownloadSection , Img} from './style'
import Download from '../Download'




const Hero = () => {
  return (
     <Wrapper>
        <Container>
          <Box data-aos="fade-right" >
              <H1> A Great App Makes
              Your Life Better</H1>
          

            <p className='description'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          
            <DownloadSection>
              <div>
                  Download App Now
              </div>
              
              <Download></Download>

            </DownloadSection>
          </Box>

          <div data-aos="fade-down">
              <Img src={MObilPhone} height={646} alt="" />
          </div>
        </Container>

       
    </Wrapper>
  )
}

export default Hero
