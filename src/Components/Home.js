import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              src="https://static.wixstatic.com/media/30f17f_880554cdac2e48d783ea2b8093f39e47~mv2.png/v1/fill/w_980,h_529,al_c,q_95,enc_auto/30f17f_880554cdac2e48d783ea2b8093f39e47~mv2.png"
              className="img-fluid w-100"
            />
          </div>
          <div className="col-12">
            <h1 className="about-us my-4">ABOUT US</h1>
            <p className="para">
              Travel with a Cause, the not-for-profit agency in Hobart, Tasmania
              making a difference through travel. Our mission is to save the
              environment by promoting sustainable tourism practices.
            </p>
            <p className="para">
              Travel With A Cause (TWAC), the not-for-profit charitable travel
              agency located in the heart of Hobart, Tasmania. It dedicates
              itself in providing personalised sustainable tours of this
              beautiful island which it has been doing for the past two decades.
            </p>
            <p className="para">
              Through years of charitable work, TWAC managed to save thousands
              of acres of reef and rainforest in Fiji; gave out computers to
              schools in developing countries like Zambia; purchasing mosquito
              nets and Lifestraws to send with our clients travelling to
              developing countries to keep them safe whilst there. On our latest
              project, partnered with UNESCO and National Geographic along with
              30+ organizations worldwide, initiating the Constructive Vision
              movement aims to educate young generation towards a more
              sustainable future.
            </p>
            <p className="para">
              TWAC offers wide range of travel products covers both domestic and
              international travel. Whether you are travelling alone or with
              groups, our friendly and experienced consultants will provide you
              with exceptional travel advice and the best deals to ensure you
              are having a pleasant and meaningful experience.
            </p>
            <div className="text-center mt-4 mt-lg-5">
              <button className="btn btn-lg read-more">Read More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <h1 className="product-we-offer text-center mb-5">PRODUCT OFFERED</h1>
          <div className="col-lg-6 d-flex my-lg-3 my-2">
            <i class="fas fa-briefcase"></i>
            <p className=" ms-2 para">
              <span className="internship">Internship</span> We've many
              available positions for interns like Accounting, ICT, Marketing,
              Business Admin, etc.
            </p>
          </div>
          <div className="col-lg-6 d-flex my-lg-3 my-2">
            <i class="fas fa-ship"></i>{" "}
            <p className="ms-2 para">
              <span className="internship">Spirit of Tasmania </span> View our
              page to find your perfect cruise. Fantastic specials available!
            </p>
          </div>
          <div className="col-lg-6 d-flex my-lg-3 my-2">
            <i class="fas fa-car"></i>
            <p className=" ms-2 para">
              <span className="internship">National Park Pass</span> Get your
              valid park pass to enter to all of Tasmania's national parks.
            </p>
          </div>
          <div className="col-lg-6 d-flex my-lg-3 my-2">
            <i class="fas fa-hand-point-up"></i>
            <p className="ms-2 para">
              <span className="internship">
                International & Domestic Flight Search
              </span>
              We also have exclusive prices from major airlines. See updates on
              our newsletter & Facebook
            </p>
          </div>
          <div className="col-lg-6 d-flex my-lg-3 my-2">
            <i class="fas fa-plane-departure"></i>{" "}
            <p className=" ms-2 para">
              <span className="internship">Book your travel insurance</span>{" "}
              with someone you can count on. Travel with a Cause Insurance
              Service is here to help you!
            </p>
          </div>
          <div className="col-lg-6 d-flex my-lg-3 my-2">
            <i class="fas fa-bed"></i>{" "}
            <p className="ms-2 para">
              <span className="internship">Online Hotel Booking</span> Search
              and Book
            </p>
          </div>
          <div className="col-lg-6 d-flex my-lg-3 my-2">
            <i class="fas fa-car-side"></i>
            <p className=" ms-2 para">
              <span className="internship">
                Online Car Rental Comparison Form
              </span>{" "}
              We specialise in car hire all over the world. Feel free to call or
              chat with us online
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
