import styled from "styled-components";
import { Button, Dropdown, Flex } from 'antd';
import Logojon  from '../../assets/img/logo.png';

import imgUre from "../../assets/img/BackgroundImage.png"


const  Wrapper =styled.div`

background-image: url(${imgUre});
padding:80px;

`
const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 60px  0;
    color: var(--colorPrimary);
    

`
const Description =styled.div`
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    margin-top:18px;
    margin-bottom:60px ;
`
const Centr = styled.div`
    display: flex;
    justify-content: center;
`
const Vertikl = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    


`

const Box =styled.div`
    display: flex;
    justify-content:space-between;
    gap: 20px;
 
`


const List = styled.ul`
    height:100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: space-between;
    

`

const ListItme = styled.li`

`

export {Wrapper, Container,Description, Centr, Vertikl ,Box , List, ListItme}