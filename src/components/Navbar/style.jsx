import styled from "styled-components";
import { Button, Dropdown, Flex } from 'antd';
import Logojon  from '../../assets/img/KIDSUPLOGO2png.png';
import { logDOM } from "@testing-library/react";

const Container = styled.div`
z-index:100;
    
    height: 60px;
    
    max-width: 1200px;
    width:96%;
    margin: 0 auto;
    margin-top :10px;
    position: fixed;
    left:50%;
    transform: translateX(-50%);
    transition: all 1s ease;
    

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
    transition: all .5s ease;

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

    height: 80px;
    border-radius: 5px 0px 0px 0px;
    
    position: absolute;
    top:80%;
    left:50%;
    transform:translate(-50%, -50%);

`

const Nav = styled.nav`
   
    display: flex;
    margin-bottom: 10px;
    transition: all .5s ease;
`
const NavLeft = styled.nav`
    display: flex;
    align-items: center;
    gap: 8px;
`

const NavRight = styled.nav`
    padding-left: 40px;
    display: flex;
    align-items: center;
    gap: 8px;
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
    transform: translateX(-50%);
    
`
const  Link = styled.a`
   
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #fff;
    text-decoration: none;
   

`


export { Container, Box ,List, ListItme, Btn , Logo, Logojon, Nav, NavLeft, NavRight, Selekt,Link}