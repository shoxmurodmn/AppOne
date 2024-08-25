import styled from "styled-components";
import { Button, Dropdown, Flex } from 'antd';
import imgUre from "../../assets/img/BackgroundImage.png"

    const  Wrapper =styled.div`
            padding: 160px 0 80px;

        width: 100%;
        background-image: url(${imgUre});
        padding-top:120px;
        background-repeat:no-repeat;
        background-size: cover; 

    

    `

const Container = styled.div`
   
    margin: 0 auto;
    padding: 60px  0;
    padding-bottom: 0 !important;
    text-align:left;    

    display: flex;
    gap: 50px;
    justify-content:space-evenly;
    align-items: center;    

    @media (max-width: 991px) {
        padding: 60px 20px;
     }
    
     @media (max-width: 680px) {
        flex-direction: column;
     }

`

const Box = styled.div`
    margin-bottom: 18px;
    
    background-color: var(--colorPrimary);
    padding:40px 30px;

    box-shadow: 23px 20px 5px 2px rgba(23, 22, 48, 0.49);

    @media (max-width: 991px) {
        padding: 60px 20px;
     };
    
     @media (max-width: 680px) {
        padding:18px 12px;
     };
    

`


const H1 = styled.h1`
  
    font-size: 48.83px;
    font-weight: 700;
    line-height: 63.48px;
    text-align: left;
    @media (max-width: 991px) {
       
    
    font-size: 31.25px;
    font-weight: 700;
    line-height: 47.25px;
    text-align: left;

     }

`
 
const DownloadSection = styled.h2`
    font-size: 25px;
    font-weight: 600;
    line-height: 37.5px;
    text-align: left;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
`
const Img = styled.img`
    height: 646px;

     @media (max-width: 991px) {
        height: 423px;
     }
   
`

export { Wrapper ,Container,Box,H1, DownloadSection , Img}