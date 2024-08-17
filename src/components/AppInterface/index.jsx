import React from 'react'
import { Container,Description,Box , List, ListItme } from './style'
import AboutCart from '../AboutCart'
import ImgAbout from "../../assets/img/abonent/about.png"





const AppInterface = () => {
  return (
     <div>
        <Container>
          <h2 className='title'>About Our App</h2>
          <Description className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </Description>

          <Box>
            <div>
              <img src={ImgAbout} alt="" />
            </div>

            <List>{/* map buladi */}
             <ListItme>
               <AboutCart></AboutCart>
              </ListItme>   

              <ListItme>
               <AboutCart></AboutCart>
              </ListItme> 
              
              <ListItme>
               <AboutCart></AboutCart>
              </ListItme> 
            </List>

          </Box>

        </Container>

       
    </div>
  )
}

export default AppInterface
