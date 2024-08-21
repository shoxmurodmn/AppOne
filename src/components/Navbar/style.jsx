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
    position: relative;
    box-shadow: 5px 5px  10px black;
    background-color: #ffcccc;
   
`

const ListItme = styled.li`
  cursor: pointer;
   

`

const Btn = styled(Button)`
    width: 150px;
    height: 47px;
    position: relative;
    @media (max-width: 576px) {
    width: 76px;
    height: 34px;
   
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    text-align: left;

    }
`
const Logo= styled.img`

    height: 80px;
    border-radius: 5px 0px 0px 0px;
    
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);

`

const Nav = styled.nav`
   
    display: flex;
    margin-bottom: 10px;
    transition: all .5s ease;

    @media (max-width: 991px) {
    display: none;
    }
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
    color: #ffffff;
    text-decoration: none;
   

`
const NavMadya = styled.div`
    width: 270px;
    padding: 67px 25px 40px 40px;
    z-index: 200;
    background-color: rgba(88, 86, 233, 0.8);
    height:100vh;
    z-index:22222;
    position: fixed;
    top: 0px;
    left: 0;
`
const ImgMad = styled.img`
    text-align: right;
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 30px;
`

const ListMad = styled.div`

        display: flex;
        flex-direction:column;
        gap:25px;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        text-align: left;
        list-style: none;
        margin: 0;
        padding: 0;
       
`


export { Container, Box ,List, ListItme, Btn , Logo, Logojon, Nav, NavLeft, NavRight, Selekt,Link,  NavMadya, ImgMad, ListMad}