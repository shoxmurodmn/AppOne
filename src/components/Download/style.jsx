import styled from "styled-components";
import { Button, Dropdown, Flex } from 'antd';
import Logojon  from '../../assets/img/logo.png';
const Container = styled.div`
    width: 315px;
   
    display: flex;
    flex-direction:   ${({props})=> props?"column": "row" };
 
  column-gap:14px;


`




export { Container, }