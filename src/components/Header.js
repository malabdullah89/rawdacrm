import React from 'react'
import styled from 'styled-components'


function Header() {
    return (
        <Container>
            <LogoNav>
                <img src="https://s.alqabas.com/wp-content/uploads/2018/05/6-1.jpg" />
            </LogoNav>
        </Container>
    )
}

export default Header

const Container = styled.nav`
    
    box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);ss
    height: 50px;
    
    

`

const LogoNav = styled.div`
    img {
        width: 130px;
        
    }
`