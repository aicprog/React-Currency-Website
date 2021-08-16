import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrapper, FooterLinksContainer,
        FooterLinksWrapper, FooterLinkItems, FooterLink, 
        FooterLinkTitle, SocialMedia, SocialLogo, SocialIcons,
        SocialIconLink, WebsiteRights, SocialMediaWrap } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How It Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destinations</FooterLink>
                            <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Video</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Offices</FooterLinkTitle>
                            <FooterLink to="/signin">Los Angeles</FooterLink>
                            <FooterLink to="/signin">New York</FooterLink>
                            <FooterLink to="/signin">Maryland</FooterLink>
                            <FooterLink to="/signin">New Zealand</FooterLink>
                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/"
                        onClick={toggleHome}
                        >
                            Currency one
                        </SocialLogo>
                        <WebsiteRights>Currency One © {new Date().getFullYear()} All Rights Reserved
                        </WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" >
                            <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" >
                            <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" >
                            <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" >
                            <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn" >
                            <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
