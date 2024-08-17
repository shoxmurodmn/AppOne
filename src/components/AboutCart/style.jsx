import styled from "styled-components";
import { Button, Dropdown, Flex } from 'antd';
import Logojon  from '../../assets/img/logo.png';
const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 60px  0;
    border-radius: 10px;

    display: flex;
    gap:20px;
    box-shadow: 0px 1px 15px 1px rgba(34, 60, 80, 0.08);
    padding: 30px 18px;
    text-align: left;
   
`
const Svg =styled.div`
       
    `

const Info = styled.div`
     display: flex;
        flex-direction: column;
        gap:12px;
`


    



export { Container,Svg, Info}