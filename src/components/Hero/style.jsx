import styled from "styled-components";
import { Button, Dropdown, Flex } from 'antd';
import imgUre from "../../assets/img/BackgroundImage.png"

    const  Wrapper =styled.div`
        height: 125vh;
        width: 100%;
        background-image: url(${imgUre});
        padding-top:120px;
        background-repeat:no-repeat;
        background-position: center;    

    `

const Container = styled.div`
    max-width: 1171px;
    margin: 0 auto;
    padding: 60px  0;
    text-align:left;    

    display: flex;
    gap: 50px;
    justify-content:space-evenly;
    align-items: center;    


    

`

const Box = styled.div`
    margin-bottom: 18px;
    width: 510px;
    background-color: var(--colorPrimary);
    padding:40px 30px;

    box-shadow: 23px 20px 5px 2px rgba(23, 22, 48, 0.49);


`


const H1 = styled.h1`
  
    font-size: 48.83px;
    font-weight: 700;
    line-height: 63.48px;
    text-align: left;

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


export { Wrapper ,Container,Box,H1, DownloadSection }