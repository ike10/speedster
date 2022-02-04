import React, { useState } from "react";
//  import ReactDOM from 'react-dom';
// import mystyles from './mystyles.module.css';
import './settingsmodal.css'
import '../../App.css'
// import LightSwap from '../../images/homepage/LightSwap.svg'
// import BinanceIcon from '../../images/homepage/binance.svg'
import ToggleDay from '../../images/homepage/toggleday.svg'
import ToggleNight from '../../images/homepage/togglenight.svg'
// import Cancel from '../../images/homepage/Cancel.svg'
import WhiteBack from '../../images/homepage/whiteback.svg'
import Back from '../../images/homepage/Back.svg'


export const SettingsModal  = ({closeModal}) => {
 
    const [lightMode, setLightMode] = useState(false) 
  const dayMode = {
      
                color:'#000000',
                backgroundColor: '#ffffff'
            }

  const nightMode={
                color:'#ffffff',
                backgroundColor: '#000000'
            }
  
    const renderLightMode = ()=>{
        if(lightMode){
            
           return( 
            <img alt="lightswap" src={ToggleNight}/>)
        }else{
            
            return(
                <img 
                alt="lightswap"
                src={ToggleDay} />
            )
        }
    }
    return (
    <div className="main-modal">
    {/* header */}
        
    {/* end of heder */}
    {/* wallet  modal */}
        <div className="settings-modal"
            
        >
          <div className="settings-container"
          style={lightMode? dayMode : nightMode}
          >
                <div className="settings-nav">
                {
                    lightMode ? <img alt="lightswap" onClick={closeModal} src={Back}/> : <img alt="lightswap" onClick={closeModal} src={WhiteBack}/> 
                }
                    
                </div>
                <h2 className="settings-header"> Settings</h2>
                <div className="settings-toggle-container">
                    <p>{
                        lightMode ? 'Light Mode' : 'Dark Mode'
                    }</p>
                    <div onClick={()=>{
                setLightMode(!lightMode)
            }}>
{
    renderLightMode()
}
                    </div>
                    

                </div>
                <p className="settings-slippage-header">Slippage</p>
                <div className="settings-slippage-container">
                <div className="settings-slippage-text">
<p >0.5%</p>
                </div>
                    <div className="settings-slippage-text">
<p >0.5%</p>
                </div>
                     <div className="settings-slippage-text">
<p >0.5%</p>
                </div>
                </div>
                <p className="transaction-speed-header">Transaction Speed</p>
               <div className="transaction-speed-container">
               <div className="transaction-speed-text">
<p >0.5%</p>
               </div>
<div className="transaction-speed-text">
<p >0.5%</p>
               </div>
                    <div className="transaction-speed-text">
<p >0.5%</p>
               </div>
               </div>

               <div className="settings-help">
                   <p>need more help? </p>
                   <p className="settings-help-link"> &#160;Contact us</p>
               </div>
                
          </div>
                
    
            
        </div>
        {/* end of home modal */}
       
        

    </div>
  
    )
  
 
}
export default SettingsModal;