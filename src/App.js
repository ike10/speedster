import React, { useState } from "react";
//  import ReactDOM from 'react-dom';
// import mystyles from './mystyles.module.css';
import './App.css'


import Back from '../src/images/homepage/whiteback.svg'
import SpeedstarLogo from '../src/images/homepage/speedster_logo.svg'

import WelcomeHeader from '../src/images/homepage/speedster-header-text.svg'
import TokenomicsHeader from '../src/images/homepage/tokenomics-header.svg'

import TwitterIcon from '../src/images/homepage/twittericon.svg'
import TelegramIcon from '../src/images/homepage/telegramicon.svg'
import MediumIcon from '../src/images/homepage/mediumicon.svg'
import MenuIcon from '../src/images/homepage/menu.svg'

import DisclaimerImage from '../src/images/homepage/disclaimer-image.svg'
import CommunityImage from '../src/images/homepage/speedster-footer.gif'
import CoinsImage from '../src/images/homepage/coinsImage.svg'
import CopyrightImage from '../src/images/homepage/copyright.svg'

import LiquidityIcon from '../src/images/homepage/liquidity.svg'
import MarketingIcon from '../src/images/homepage/marketing.svg'
import DevelopmentIcon from '../src/images/homepage/development.svg'
import CharityIcon from '../src/images/homepage/charity.svg'




export const App  = () => {
    const [mobileMenu, setShowMobileMenu] = useState(false)


 const renderMobileMenu = () =>{
     
     if (mobileMenu){
         return(
<nav className="mobile-menu"onClick={()=>{
                     
                    }}>
                         <div className="mobile-close"
                         onClick={()=>{
                             setShowMobileMenu(!mobileMenu)
                         }}
                         >
                    <img alt="back"src={Back} />
                </div>
                <div className="mobile-page-logo">
                    <img alt="speedstar"src={SpeedstarLogo} />
                </div>
                <div className="mobile-page-links">
                       <div>
               
                <a href='/'><p>Buy</p></a>
               
                                        </div>

                                        <div>
               
                <a href='/#tokenomics'><p>Tokenomics</p></a>
                
                                        </div>

                                        <div>
                
                
                        </div>
                           <div>
                <p></p>
                <a href='/#disclaimer'><p>The SpeedSter Code</p></a>
                        </div>
                           <div>
                <a href='/'><p>Roadmap</p></a>
                
                        </div>
                      
                    
                </div>
               
            
        </nav>
         )
     }else{
         return null
     }
 }
 


  
    return (
    <div className="main-body">
    {/* header */}
    {
        renderMobileMenu()
    }
    <nav className="mobile-header-container"> 
        <div className="mobile-page-logo">
                    <img alt="speedstar"src={SpeedstarLogo} />
                </div>

                <div onClick={()=>{
                   
                    setShowMobileMenu(!mobileMenu)
                    
                }} className="open-menu">
                    <img alt="menu"src={MenuIcon} />
    
                </div>
    </nav>
        <nav className="header-container">
            
                <div className="page-logo">
                    <img alt="speedstar"src={SpeedstarLogo} />
                </div>
                <div className="page-links">
                        <div>
                
                <a href='/'><p>Buy</p></a>
               
                                        </div>

                                        <div>
               
                <a href='/#tokenomics'><p>Tokenomics</p></a>
                                        </div>

                                        <div>
                
                
                        </div>
                           <div>
               
                <a href='/#disclaimer'><p>The SpeedSter Code</p></a>
                        </div>
                           <div>
               
                <a href='/'><p>Roadmap</p></a>
                
                        </div>
                      
                    
                </div>
                
            
        </nav>
    {/* end of heder */}
   
    {/* home page */}
        <div className="home-page"
            
        >

        <div className="welcome-section">
                <img className="welcome-header" src={WelcomeHeader} alt='welcome-header'/>
               
                <h2 className="welcome-text">A decentralised meme token moving at lightening speed</h2>
                <p className="welcome-subtext">Built as a decentralized community-focused token with charity and development activities in view.<br/> Welcome to The SpeedSter Token!!!</p>
                <div className="welcome-call-to-action">
                    <div className="buy-token-button">
                        <p>Buy SpeedSter</p>
                    </div>
                    {/* <div className="learn-more-button">
                        <p>Learn more</p>
                    </div> */}
                </div>
        </div> 
        <div className="welcome-image">
                <p></p>{/* <img src={HeroImage} alt='hero image' /> */}
        </div> 
        </div>
        {/* end of home page */}

        {/* Tokenomics page */}
        <div id='tokenomics' className="tokenomics-page">
        <div className="tokenomics-section">
  <img className="tokenomics-header" src={TokenomicsHeader} alt='tokenomics-header'/>
               <div className="tokenomics-list">
 <div className="tokenomics-item">
                    <p style={{
                        marginLeft:'22px'
                    }}>Token Name - The SpeedSter</p>
                </div>
                <div className="tokenomics-item">
                
                    <p style={{
                        marginLeft:'22px'
                    }}>Ticker - SSTER</p>
                </div>
                <div className="tokenomics-item">
                 
                    <p style={{
                        marginLeft:'22px'
                    }}>Max Supply - 1 Quadrillion</p>
                  
                </div>
                <div className="tokenomics-item">
                
                    <p style={{
                        marginLeft:'22px'
                    }}>Burning Reserve - 840.5 Trillion</p>
                </div>
                <div className="tokenomics-item">
                
                    <p style={{
                        marginLeft:'22px'
                    }}>Available Tokens - 159.5 Trillion</p>
                </div>
                <div className="tokenomics-item">
                    <img src={LiquidityIcon} alt='liquidity'/>
                    <p>Liquidity - 51.1%</p>
                </div>
                <div className="tokenomics-item">
                <img src={MarketingIcon} alt='marketing'/>
                    <p>Marketing - 26.6</p>
                </div>
                <div className="tokenomics-item">
                <img src={DevelopmentIcon} alt='development'/>
                    <p>Development - 14.7%</p>
                </div>
                <div className="tokenomics-item">
                <img src={CharityIcon} alt='charity'/>
                    <p>Charity- 7.8%</p>
                </div>
               </div>

               <div className="tokenomics-button">
                   <p>Download Whitepaper</p>
               </div>
               
        </div>
        <div className="tokenomics-image">
                <img src={CoinsImage} alt='tokenomics'/>
        </div>
      
        </div>
        {/* end of tokenomics section */}

        {/* start of disclaimer page */}
        <div id="disclaimer" className="disclaimer-page" >
            <div className="disclaimer-image">
                <img src={DisclaimerImage} alt="disclaimer" />
            </div>
            <div className="disclaimer-section">
                <p className="disclaimer-text" >No part of this document should be construed as financial advice nor as a guarantee of the future performance for SpeedSter or any other investment mentioned herein. 
<br/><br/>
Cryptocurrencies are extremely speculative and are subject to powerful market forces and fluctuations outside of the SpeedSter Finance team. <br/> <br/>Therefore, it is your responsibility to take all necessary security precautions when purchasing cryptocurrencies.</p>
            {/* <div className="disclaimer-button">
                <p>Learn More</p>
            </div> */}
            </div>
        </div>
        {/* end of disclaimer page */}
        {/* start of community page */}
        <div className="community-page">
            <div className="community-text">
                <p>The SpeedSter as a community grows and develops stronger and better every day.</p>
            </div>
            <div className="community-image">
                <img src={CommunityImage} alt="community"/>
            </div>
        </div>
        {/* end of community page */}
        
        {/* start of footer section */}
                <div className="footer-section">
                    <p className="footer-text">Follow our social media platforms for up-to-date information</p>
                    <div  className="footer-icon-section">
<a href="https://telegram.com" className="footer-icon">
                        <img src={TelegramIcon} alt="footer"/>
                        <p>Telegram</p>
                    </a>
                    <a href="https://twitter.com" className="footer-icon">
                        <img src={TwitterIcon} alt="footer"/>
                        <p>Twitter</p>
                    </a>
                    <a href="https://medium.com" className="footer-icon">
                        <img src={MediumIcon} alt="footer"/>
                        <p>Medium</p>
                    </a>
                    </div>
                    <div className="footer-copyright">
                        <img src={CopyrightImage} alt='copyright'/>
                        <p>Speedster 2022</p>
                    </div>
                    

                </div>
        {/* end of footer section */}

      
        

    </div>
   
  
    )
  
 
}
export default App;