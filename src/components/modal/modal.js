import React from "react";
//  import ReactDOM from 'react-dom';
// import mystyles from './mystyles.module.css';
import './modal.css'
import '../../App.css'
import LightSwap from '../../images/homepage/LightSwap.svg'
import BinanceIcon from '../../images/homepage/binance.svg'
import MetamaskIcon from '../../images/homepage/metamask.svg'
import Trustwallet from '../../images/homepage/trustwallet.svg'
import WalletConnect from '../../images/homepage/walletconnect.svg'
import BinanceSmartChain from '../../images/homepage/binancesmartchain.svg'

import Cancel from '../../images/homepage/Cancel.svg'
import Back from '../../images/homepage/Back.svg'



export const ConnectModal  = ({closeModal}) => {
 
  
    return (
    <div className="main-modal">
    {/* header */}
        <nav className="header-container">
            
                <div className="page-logo">
                    <img alt="lightswap" src={LightSwap} />
                </div>
                <div className="page-links">
                        
                        <p>Trade</p>
                        <p>Earn</p>
                        <p>NFT Marketplace</p>
                    
                </div>
                <div className="page-buttons">
                    <div id="binance-button" className="header-button">
                        <img alt="lightswap" src={BinanceIcon} />
                        <p>Binance</p>
                    </div>
                    <div id="connect-wallet-button" className="header-button">
                        <img alt="lightswap" />
                        <p>Connect Wallet</p>
                    </div>
                </div>
            
        </nav>
    {/* end of heder */}
    {/* wallet  modal */}
        <div className="connect-wallet-modal"
            
        >
          <div className="connect-wallet-form">
                <div className="connect-wallet-nav">
                    <div className="connect-wallet-nav-back"
                    onClick={closeModal}
                    >
                         <img alt="lightswap"  src={Back}/>
                    </div>
                   <div 
                   onClick={closeModal}
                   className="connect-wallet-nav-cancel">
<img alt="lightswap" className="connect-wallet-nav-cancel" src={Cancel}/>
                   </div>
                    
                </div>
                <h2 className="connect-wallet-header">Connect Wallet</h2>
                <div className="wallet-container">
                   <div>
<img alt="lightswap" src={MetamaskIcon}/>
<p>MetaMask</p>
                   </div>
                    <div>
<img alt="lightswap" src={Trustwallet}/>
<p>Trust Wallet</p>
                    </div>
                    
                </div>
                <div className="wallet-container">
                <div>
                <img alt="lightswap" src={WalletConnect}/>
                    <p>Wallet Connect</p>
                </div>

                <div>
                 <img alt="lightswap" src={BinanceSmartChain}/>
                    <p>Binance Smart Chain</p>
                </div>
                    
                   
                </div>

                <div className="connect-wallet-text">
<p>More .....</p>
                <p >Don't have a Crypto Wallet yet? </p>
                </div>
                
          </div>
            
        </div>
        {/* end of home modal */}
       
        

    </div>
  
    )
  
 
}
export default ConnectModal;