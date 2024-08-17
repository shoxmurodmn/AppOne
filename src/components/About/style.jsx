import styled from "styled-components";
import { Button, Dropdown, Flex } from 'antd';
import Logojon  from '../../assets/img/logo.png';
const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 60px  0;
   
    

`
const Description =styled.div`
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    margin-top:18px;
`

const Box =styled.div`
    display: flex;
    justify-content:space-between;
    gap: 100px;
    padding: 60px 10px 100px;
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

export { Container,Description,Box , List, ListItme}