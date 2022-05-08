import React, { useState } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme, lightTheme } from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'
import profileImg from '../assets/Images/profile-img.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 30vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 5rem;
  width: 50vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`


const AboutPage = () => {

    const [data, setData] = useState({
        user: "",
        email: "",
        message: ""
    })

    const [click, setClick] = useState(false)

    const buttonClick = click => {
        setClick(!click)
    }

    const { user, email, message } = data

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(data)
    }
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                {/* <SocialIcons theme='dark' /> */}
                <PowerButton />

                <Spaceman>
                    <img src={profileImg} alt="spaceman" />
                </Spaceman>
                <Main>

                    <form onSubmit={submitHandler}>
                        <input type="text" name="user" value={user} onChange={handleChange} placeholder="Enter your Name" style={{ width: "50vw", padding: 10, borderRadius: 10, borderWidth: 0, marginBottom: 10 }} /><br />
                        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" style={{ width: "50vw", padding: 10, borderRadius: 10, borderWidth: 0, marginBottom: 10 }} /><br />
                        <input type="text" name="message" value={message} onChange={handleChange} placeholder="Enter your Message" style={{ height: 150, width: "50vw", padding: 10, borderRadius: 10, borderWidth: 0, marginRight: 30, marginBottom: 10 }} /><br />
                        <button onclick={buttonClick} style={{ width: "51.5vw", padding: 10, color: "#fff", borderRadius: 10, borderWidth: 0, backgroundColor: '#464E85' }}>
                            Submit
                        </button>
                        {
                            user!="" ? <p>Submit</p> : null
                        }
                    </form>

                </Main>

                <BigTitle text="CONTACT" top="10%" left="5%" />


            </Box>

        </ThemeProvider>

    )
}

export default AboutPage
