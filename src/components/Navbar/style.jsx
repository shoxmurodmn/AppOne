import styled from "styled-components";
import { Button, Dropdown, Flex } from 'antd';
import Logojon  from '../../assets/img/logo.png';

const Container = styled.div`
    
    height: 60px;
    
    max-width: 1200px;
    width:100%;
    margin: 0 auto;
    margin-top :50px;
    position: fixed;
    left:50%;
    transform: translateX(-50%);


`
const Box = styled.div`
    margin: 0 auto;

    /* max-width: 1200px;
    width:100%; */
    height: 60px;
    margin: 0 auto;
    
    
    /* position: fixed;
    left:50%;
    transform: translateX(-50%); */
    


`
const List = styled.ul`
    margin: 0 auto;
    border-radius:5px;
    padding:  0 20px;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--colorPrimary);

`

const ListItme = styled.li`
  
   position: relative;
   

`

const Btn = styled(Button)`
    width: 150px;
    height: 47px;
    position: relative;
`
const Logo= styled.img`

    width: 200px;
    border-radius: 5px 0px 0px 0px;
    opacity: 0px;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);

`

const Nav = styled.nav`
    
`
const NavLeft = styled.nav`
    
`

const NavRight = styled.nav`
    
`

const Pochta = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
`
const Selekt = styled.div`
    position: absolute;
    left: 50%;
    top: 130%;
    transform: translateX(-50%)
    
`

export { Container, Box ,List, ListItme, Btn , Logo, Logojon, Nav, NavLeft, NavRight, Selekt}