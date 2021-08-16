import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg,
            HeroContent, HeroH1, HeroP, 
            HeroBtnWrapper,
            ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'
import heroVideo from '../../videos/heroVideo.mp4'

const Hero = () => {
const[hover, setHover] = useState(false)

const onHover = () =>{
    setHover(!hover)
}

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={heroVideo} type ='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to the Future</HeroH1>
                <HeroP>Sign up for a new account today and receive double points upon your first purchase.</HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary='true'
                    dark='true'
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true'
                    offset={-80}
                    >
                        Get started {hover ? <ArrowRight /> : <ArrowForward />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
