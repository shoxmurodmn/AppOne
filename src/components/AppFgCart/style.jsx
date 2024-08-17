import styled from "styled-components";
import { Button, Dropdown, Flex } from 'antd';
import Logojon  from '../../assets/img/logo.png';


const getTextAlign = (align) => {
  
    switch (align) {
      case 'left':
        return 'left';
      case 'center':
        return 'center';
      case 'right':
        return 'right';
      default:
        return 'left'; // Default holat
    }
  };
  

const Container = styled.div`
    max-width: 330px;
   
    
    padding: 60px  0;
    border-radius: 10px;

    text-align: ${({align}) => getTextAlign(align)};

    display: flex;
    flex-direction: column;
    gap:20px;
    /* box-shadow: 0px 1px 15px 1px rgba(34, 60, 80, 0.08); */
    padding: 30px 18px;
   
`
const Svg =styled.div`
       
    `

const Info = styled.div`
    display: flex;
    flex-direction:column;
    gap:12px;   
    text-align:${({align}) => getTextAlign(align)};
`


    



export { Container,Svg, Info}