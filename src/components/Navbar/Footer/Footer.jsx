import React from 'react'
import './footer.css';
import amazoneLogo from '../../../assets/stock.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footerContent">

        <div className="footerCont1">
          <div className="contentFooterTitle">Get To Know Us</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">About US</div>
            <div className="contentFooterSubTitleCont">Careers</div>
           
            <div className="contentFooterSubTitleCont">Press Releases</div>
            <div className="contentFooterSubTitleCont">Amazone Science</div>
           
          </div>

        </div>



        <div className="footerCont1">
          <div className="contentFooterTitle">Connect with Us</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">Facebook</div>
            <div className="contentFooterSubTitleCont">Twitter</div>
           
            <div className="contentFooterSubTitleCont">Instagram</div>
           
           
          </div>

        </div>

        









        <div className="footerCont1">
          <div className="contentFooterTitle">Make Money with Us</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">Sell on Amazon</div>
            <div className="contentFooterSubTitleCont">Sell under Amazon Accelerator</div>
           
            <div className="contentFooterSubTitleCont">Protect and Build Your Brand</div>
            <div className="contentFooterSubTitleCont">Amazon Global Selling</div>
            <div className="contentFooterSubTitleCont">Become an Affiliate</div>
            <div className="contentFooterSubTitleCont">Fulfilment by Amazon</div>
            <div className="contentFooterSubTitleCont">Advertise Your Products</div>
            <div className="contentFooterSubTitleCont">Amazon Pay on Merchants</div>
           
          </div>

        </div>





        <div className="footerCont1">
          <div className="contentFooterTitle"> Let Us Help You</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">COVID-19 and Amazon</div>
            <div className="contentFooterSubTitleCont">Your Account</div>
           
            <div className="contentFooterSubTitleCont">Recalls and Product Safety Alerts</div>
            <div className="contentFooterSubTitleCont">100% Purchase Protection</div>
            <div className="contentFooterSubTitleCont">
            Amazon App Download</div>
            <div className="contentFooterSubTitleCont">Help</div>
           
           
          </div>

        </div>

      </div>






      <div className="amagoneImg">
        <img className='amazoneImgFooter' src={amazoneLogo} alt="img" />
      </div>
    </div>
  )
}

export default Footer