import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container p-3">
        <div className="row">
          <div className="col-lg-4 desktop-footer-wrapper">
            {" "}
            <div>
              <h3 className="cause">Travel with a cause</h3>
              <p className="mt-lg-5 mt-4 para">
                Not-For-Profit | 28 years of experience
              </p>
              <p className="para">ATAS No: A10921 | ABN 35 096 017 166</p>
              <p className="para">
                1st Floor, 41-43 Victoria Street, Hobart TAS 7000 <br /> Email:
                info@twac.org.au <br /> Tel: +61 3 6231 3844 | Fax: 03 6231 4855
              </p>
            </div>
          </div>
          <div className="col-lg-2 d-flex justify-content-center align-items-center md-footer-logo ">
            <img src="https://static.wixstatic.com/media/30f17f_83a5eec016454ab7ba7de9f70205a5a4~mv2.png/v1/crop/x_0,y_41,w_424,h_342/fill/w_149,h_120,al_c,q_95,enc_auto/TWAC%20Logo%20Transparent%20Background.png" />
          </div>
          <div className="col-lg-2 d-flex justify-content-center align-items-center md-footer-logo ">
            <img src="https://static.wixstatic.com/media/30f17f_fcaf9a30df33471f855b07d359d6b41b~mv2.png/v1/fill/w_144,h_120,al_c,q_95,enc_auto/ACNC-Registered-Charity-Logo_RGB.png" />
          </div>
          <div className="col-lg-4 desktop-footer-wrapper">
            <div>
              <h3 className="cause">Hear From Our Clients </h3>
              <p className="mt-lg-5 mt-4 para">Best Travel Agency in Hobart</p>
              <p className="para">2018, 2019 & 2020</p>
              <p className="para">National Travel Award</p>
              <p className="para">Best Travel Agency Group Winner 2019</p>
            </div>
          </div>{" "}
          <div className="col-12 text-center">
            <img
              className="mx-2  img-fluid"
              src="https://static.wixstatic.com/media/30f17f_795104a377b44635baa431a1f668690d~mv2.png/v1/fill/w_36,h_36,al_c,lg_1,q_95,enc_auto/30f17f_795104a377b44635baa431a1f668690d~mv2.png"
            />
            <img
              className="mx-2  img-fluid"
              src="https://static.wixstatic.com/media/30f17f_6707f6b6d3e44185a852beb2aab8b006~mv2.png/v1/fill/w_36,h_36,al_c,lg_1,q_95,enc_auto/30f17f_6707f6b6d3e44185a852beb2aab8b006~mv2.png"
            />
            <img
              className="mx-2   img-fluid"
              src="https://static.wixstatic.com/media/30f17f_438494c7dca64a04aca156aad76c091f~mv2.png/v1/fill/w_36,h_36,al_c,lg_1,q_95,enc_auto/30f17f_438494c7dca64a04aca156aad76c091f~mv2.png"
            />
            <img
              className="mx-2   img-fluid"
              src="https://static.wixstatic.com/media/30f17f_3069ec46e77645c48387a2fb3949c78e~mv2.png/v1/fill/w_36,h_36,al_c,lg_1,q_95,enc_auto/30f17f_3069ec46e77645c48387a2fb3949c78e~mv2.png"
            ></img>
          </div>
          <div className="col-12 text-center mt-5">
            <img
              className="mx-lg-5 m md-3 footer-images"
              src="https://static.wixstatic.com/media/30f17f_bbacd707965945a28bd491d723385aaf~mv2.png/v1/fill/w_139,h_81,al_c,lg_1,q_95,enc_auto/tc_footer.png"
            />
            <img
              className="mx-lg-5 m md-3 footer-images"
              src="https://static.wixstatic.com/media/30f17f_a51d630cec8f4a25867cda4791a7b937~mv2.png/v1/crop/x_4,y_0,w_279,h_178/fill/w_159,h_102,al_c,q_95,enc_auto/Transparent_ATAS.png"
            />
            <img
              className="mx-lg-5 m md-3 footer-images"
              src="https://static.wixstatic.com/media/30f17f_6696a4d327c548348b6440661515b7f2~mv2.png/v1/crop/x_0,y_5,w_86,h_68/fill/w_120,h_95,al_c,lg_1,q_95,enc_auto/30f17f_6696a4d327c548348b6440661515b7f2~mv2.png"
            />
            <img
              className="mx-lg-5 m md-3 footer-images"
              src="https://static.wixstatic.com/media/30f17f_ea598f87522946fc9718d2a066049711~mv2.png/v1/fill/w_105,h_102,al_c,lg_1,q_95,enc_auto/30f17f_ea598f87522946fc9718d2a066049711~mv2.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
