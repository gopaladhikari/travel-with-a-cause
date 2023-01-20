import React from "react";
import "./Passpark.css";

function Heading() {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <div className="row">
            <div className="col-12 mx-auto">
              <h1 className="twac">
                Travel With A Cause (TWAC) is proud to be in the top three best
                Travel Agency in Hobart from 2018 until now. Also we're proud to
                have entered the Business Innovation semi-finalists! We are an
                authorised agent to sell National Park Passes and we're here to
                help you get your best option. Please note your park pass will
                be emailed to you within 24 hours after you purchase your park
                pass from us.
              </h1>
              <p className="para">
                The Tasmania National Park Pass is a one-time purchase that
                provides unlimited entry to all national parks and reserves in
                Tasmania for up to eight weeks from the date of purchase. There
                is a park for every season and a park for Tasmania's outstanding
                national park system offers visitors a wide choice of
                opportunities to discover spectacular landscapes, from highlands
                carved by glaciers to quiet, solitary beaches; from cool, silent
                rainforests to colourful, alpine wilderness wildflowers.
                Tasmania's 19 national parks encompass a diversity of unspoiled
                habitats and ecosystems which offer refuge to unique, and often
                ancient, plants and animals found nowhere else on Earth. ​
              </p>
              <p className="para">
                There is a park for every season and a park for every person.{" "}
              </p>
              <h1 className="twac">How much to purchase a pass?</h1>
              <p className="para">
                The national park pass which is currently $80 per vehicle (up to
                eight passengers). The pass can be purchased by travel with a
                cause, get a enquiry form now, and our lovely staff will contact
                you soon.
              </p>
              <h3 className="twac">Please note:</h3>
              <ul>
                <li>Entry fees apply for entry into national parks.</li>
                <li>Dogs and other pets are not allowed in national parks.</li>
                <li>
                  Many areas in Tasmania's national parks do not have rubbish
                  bins available. Please be prepared to carry your rubbish back
                  out of the park at the end of your stay.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
