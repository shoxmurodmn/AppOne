import React from 'react'
import { Container, Svg, Info } from './style'
import Title from 'antd/es/skeleton/Title'


const appFungtion = [
  { name: "chat", Imgurel: "efk lrejv", Title: "fref", Dicription: "vwejrnwewvwreg" },
  { name: "1", Imgurel: "efk regwm", Title: "fregwref", Dicription: "vwejrnwewvwreg" },
  { name: "2", Imgurel: "efk lrregwrgejv", Title: "efqwfeqwef", Dicription: "vwejrnwewvwreg" },
  { name: "3", Imgurel: "efk lrejv", Title: "frwragef", Dicription: "vwejrnwewvwreg" },
  { name: "4", Imgurel: "efk lerwrejv", Title: "frewegf", Dicription: "vwejrnwewvwreg" },
  { name: "5", Imgurel: "efk lrejv", Title: "webw", Dicription: "vwejrnwewvwreg" }
]



const AppFgCart = ({ props, name }) => {
  appFungtion.map((valu)=>{
    
  })

  console.log(window.innerWidth)


  return (
    <>
      {appFungtion.map((item) => {
        return (
          <div>
            { item.name == name ? <div>
              <Container align={props}>
                <Svg>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.9686 3.36926H7.98254C4.42915 3.36926 1.53809 6.26033 1.53809 9.81372V30.6125C1.53809 34.159 4.41656 37.0449 7.95965 37.0569V46.4958L21.5229 37.0578H41.9686C45.522 37.0578 48.4131 34.1667 48.4131 30.6125V9.81372C48.4131 6.26033 45.522 3.36926 41.9686 3.36926ZM35.8669 27.54H14.0842V24.7935H35.8669V27.54ZM35.8669 21.6807H14.0842V18.9341H35.8669V21.6807ZM35.8669 15.8213H14.0842V13.0747H35.8669V15.8213Z" fill="white" />
                  </svg>
                </Svg>

                <Info align={props}>
                  <h3 className='titleInfo'>
                    {item.Title}
                  </h3>
                  <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, sit!
                  </p>
                </Info>


              </Container>
            </div> : <div></div>}
          </div>
        )
      })}
    </>
  )


}

export default AppFgCart
