import React from "react";
import Btn from "./Btn";
import Links from "./Links";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mx-auto">
          <div className="col-lg-5">
            <form className="p-lg-5 p-3">
              <div className="mb-3">
                <label htmlFor="fName" className="form-label me-2">
                  First Name
                </label>
                <input type="text" id="fName" className="form-control" />
                <label htmlFor="lName" className="form-label">
                  Last Name
                </label>
                <input type="text" id="lName" className="form-control" />

                <label htmlFor="exampleInputEmail1" className="form-label me-2">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <div className="d-flex py-3">
              <h1 className="travel pe-4 me-5">
                Travel <br /> Resources
              </h1>{" "}
              <div>
                <button className="btn corTravel mt-2 me-3">
                  Corporate Travel
                </button>
              </div>
              <div className="contactBtn_wrapper">
                <div className="d-flex">
                  {<Btn text="Flight Research" />}
                  {<Btn text="Travel Insurance" />}
                  {<Btn text="Honeymoon Registry" />}
                </div>
                <div className="d-flex">
                  {<Btn text="Hotels & Tours" />}
                  {<Btn text="Travel SIM" />}
                  {<Btn text="Travel Gift Card" />}
                </div>
                <div className="d-flex">
                  {<Btn text="Car Hire" />}
                  {<Btn text="Visa" />}
                </div>
              </div>
            </div>
            <div className="container-fluid my-5">
              <div className="row gx-4">
                <div className="col-lg-10 mx-auto">
                  <div className="row gy-3">
                    {
                      <Links
                        class="fa-solid fa-sun me-3"
                        text="Get the world weather from the World Meteorological Organization. Visit website"
                      />
                    }
                    {
                      <Links
                        class="fa-solid fa-exclamation ms-2  me-5"
                        text="Get your conversion with the National Australia Bank currency convertor. Visit website"
                      />
                    }
                    {
                      <Links
                        class="fa-solid fa-location-dot me-4"
                        text="Get local times from around the world. Visit website"
                      />
                    }
                    {
                      <Links
                        class="fa-solid fa-ship me-4"
                        text="Get the world weather from the World Meteorological Organization. Visit website"
                      />
                    }
                    {
                      <Links
                        class="fa-solid fa-sack-dollar me-3"
                        text="Get your conversion with the National Australia Bank currency convertor. Visit website"
                      />
                    }
                    {
                      <Links
                        class="fa-solid fa-clock me-4"
                        text="Get local times from around the world. Visit website"
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
