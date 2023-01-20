import React from "react";
import "./Passpark.css";
function NationalParkEnquiry() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="row">
            <div className="col-12">
              <h1 className="twac py-4">National Park Pass Enquiry Form</h1>
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    {" "}
                    <div className="mb-3 ">
                      <label htmlFor="name" className="form-label">
                        Full Name <span className="mandatory_sym">*</span>{" "}
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3  w-lg-100">
                      <label htmlFor="email" className="form-label">
                        Email<span className="mandatory_sym">*</span>{" "}
                      </label>
                      <input
                        required
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3  w-lg-50">
                      <label htmlFor="postcode" className="form-label">
                        Post Code <span className="mandatory_sym">*</span>{" "}
                      </label>
                      <input
                        required
                        type="number"
                        className="form-control"
                        id="postcode"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3  w-lg-50">
                      <label htmlFor="phone" className="form-label">
                        Phone <span className="mandatory_sym">*</span>{" "}
                      </label>
                      <input
                        required
                        type="number"
                        className="form-control"
                        id="phone"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3  w-lg-50">
                      <label htmlFor="address" className="form-label">
                        Address <span className="mandatory_sym">*</span>{" "}
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="address"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NationalParkEnquiry;
