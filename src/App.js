import React, { useState } from "react";
//  import ReactDOM from 'react-dom';
// import mystyles from './mystyles.module.css';
import './App.css'

import LightSwap from '../src/images/homepage/LightSwap.svg'
import SettingIcon from '../src/images/homepage/Vectorsettings.svg'
import RefreshIcon from '../src/images/homepage/Vectorrefresh.svg'
import BTCIcon from '../src/images/homepage/BTC - Bitcoin.svg'
import BNBIcon from '../src/images/homepage/BNB - BNB.svg'
import Switch from '../src/images/homepage/Vector.svg'
import MenuDown from '../src/images/homepage/menudown.svg'
import SwitchHorizontal from '../src/images/homepage/switch-horizonal.svg'
import Ethereum from '../src/images/homepage/ethereum.svg'
import Polygon from '../src/images/homepage/polygon.svg'
import Avalance from '../src/images/homepage/avalanche logo.svg'

import BinanceIcon from '../src/images/homepage/binance.svg'
import ConnectModal from './components/modal/modal'
import SettingsModal from './components/settingsmodal/settingsmodal'
export const App  = () => {
 const [showConnectWallet, setShowConnectWallet] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)

  const renderSettingsModal = ()=>{
      if(showSettingsModal){
          return(
              <SettingsModal closeModal={()=>{
                  setShowSettingsModal(!showSettingsModal)
              }}/>
          )
      }else{
          return null
      }
  }
 const renderConnectWallet =()=>{
     if(showConnectWallet){
         return(
             <ConnectModal closeModal={()=>{
                setShowConnectWallet(!showConnectWallet)
             }}/>
         )
     }else{
         return null
     }
 }
 const renderMenu=()=>{
     if(showMenu){
         return(
             <div className="menu-container">
                <div className="menu-item">
                    <img alt="lightswap"src={BNBIcon}/>
                    <p>Binance</p>
                </div>
                <div className="menu-item">
                    <img alt="lightswap"src={Ethereum}/>
                    <p>Ethereum</p>
                </div>
                <div className="menu-item">
                    <img alt="lightswap"src={Polygon}/>
                    <p>Polygon</p>
                </div>
                <div className="menu-item">
                    <img alt="lightswap"src={Avalance}/>
                    <p>Avalanche</p>
                </div>
             </div>
         )
     }else{
         return null
     }
 }
  
    return (
    <div className="main-body">
    {/* header */}
        <nav className="header-container">
            
                <div className="page-logo">
                    <img alt="lightswap"src={LightSwap} />
                </div>
                <div className="page-links">
                        <div>
                <p>Trade</p>
                <img alt="lightswap" src={MenuDown} />
                                        </div>

                                        <div>
                <p>Earn</p>
                <img alt="lightswap" src={MenuDown} />
                                        </div>

                                        <div>
                <p>NFT Marketplace</p>
                <img alt="lightswap" src={MenuDown} />
                        </div>
                      
                    
                </div>
                <div className="page-buttons">
                    <div 
                    onClick={()=>{
                        setShowMenu(!showMenu)
                    }}
                    id="binance-button" className="header-button">
                        <img alt="lightswap"src={BinanceIcon} />
                        <p>Binance</p>
                        
                    </div>
                    <div onClick={()=>{
                        setShowConnectWallet(!showConnectWallet)
                    }} id="connect-wallet-button" className="header-button">
                       
                        <p>Connect Wallet</p>
                    </div>
                </div>
            
        </nav>
    {/* end of heder */}
    {
        renderConnectWallet()
    }
    {
        renderMenu()
        }
        {
            renderSettingsModal()
        }
    {/* home page */}
        <div className="home-page"
            
        >
            <div className="home-form">
              <div className="form-overlay"
             
              >
                <div className="form-container">
                    <h2 className="form-header">Swap</h2>
                    <div className="form-container-icon">
                        
 <img onClick={()=>{
     setShowSettingsModal(!showSettingsModal)
 }} alt="lightswap"src={SettingIcon}/>
                        <img alt="lightswap"src={RefreshIcon}/>
                        
                       
                    </div>
                    <p className="form-label">
                        From
                    </p>
                    <div className="form-select">
                        <img alt="lightswap"src={BTCIcon}  className="form-select-icon"/>
                        <p>BTC</p>
                        <input placeholder="0.123" className="form-select-input"/>
  
                    </div>
                    <div className="form-balance">
  <p >Balance: 1.3112</p>
                    </div>
                  
                    <div className="switch-icon-container">
                        <img alt="lightswap"src={Switch} className="switch-icon"/>
                    </div>
                    <p className="form-label">
                        To
                    </p>
                    <div className="form-select">
                        <img alt="lightswap"src={BNBIcon} className="form-select-icon"/>
                        <p>BNB</p>
                        <input placeholder="0.123" className="form-select-input"/>
  
                    </div>
                    <div className="form-balance">
  <p >Balance: 1.3112</p>
                    </div>
                <div
                onClick={()=>{
                        setShowConnectWallet(!showConnectWallet)
                    }}
                 className="form-container-button">
                    <p>Connect Wallet</p>
                </div>
                <div className="form-bottom-text">
                    <p className="form-bottom-text-heading">Slippage Tolerance</p>
                    <p className="form-bottom-text-figure">0.23</p>
                </div>
                <div className="form-bottom-text">
                    
                    <p className="form-bottom-text-heading">Minimum received</p>
                    <p className="form-bottom-text-figure">0.23</p>
                    
                </div>
                </div>
               
            </div>
            </div>
            {/* the chart */}
            <div className="home-chart">
             <div className="home-chart-container">
                <div className="chart-info">
                    <div className="chart-info-logo">
                    <div className="chart-navbar">
                        <img alt="lightswap"src={BNBIcon}/>
                        <img alt="lightswap"src={BTCIcon}/>
                        <p>BTC/BNB</p>
                        <img alt="lightswap"src={SwitchHorizontal}/>
                    </div>
                    <div className="time-card-container">
                        <div className="time-card">
                            <p>1H</p>
                            <p>24H</p>
                            <p>1W</p>
                        </div>
                    </div>
                        
                    </div>
                    <div className="chart-info-rate">
                        <p className="chart-info-price">$95</p>
                        <p className="chart-info-percentage">(-8.14%)</p>
                    </div>
                </div>
                <div className="chart-container">

                </div>
                <div className="chart-button">

                </div>
           </div>
            </div>
            
            {/* end of the chat */}
            
        </div>
        {/* end of homr page */}
       
        

    </div>
  
    )
  
 
}
export default App;