import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function ActionSection() {
    return (
        <Container>

            <Wrap>
                <Link to="/new-sub" >
                 اشتراك جديد
                </Link>
            </Wrap>

                
        </Container>
    )
}

export default ActionSection

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    padding: 50px;
   
    
    

`

const Wrap = styled.button`
    text-align: justify;
    text-justify: inter-word;
    width: 210px;
    height: 40px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 20%) 0px 26px 30px -10px,
    rgb(0 0 0 / 20%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    text-align: center;

    &:hover {
        box-shadow: rgb(0 0 0 / 30%) 0px 40px 58px -16px,
        rgb(0 0 0 / 30%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        background: #1b4285;
        color: white;
        

    }
    
    a { 
        text-decoration: none;
        color: black;
        
      

        &:hover {
            color: white;
        }

        h3 {
            font-size: 20px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            
           
        }
    }
    
    
    
   
    
`
