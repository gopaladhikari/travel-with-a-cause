import React from "react";
import "./Passpark.css";
function ParksInTasmania() {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <div className="row mobile_scroll">
            <div className="col-12 mx-auto">
              <h1 className="twac">The National Park in Tasmania</h1>
            </div>
            <div className="col-lg-6 mx-auto">
              <img
                src="https://static.wixstatic.com/media/30f17f_47d5bb21fd6f40458660c500f80ea980~mv2.jpg/v1/fill/w_417,h_412,al_c,lg_1,q_90,enc_auto/30f17f_47d5bb21fd6f40458660c500f80ea980~mv2.jpg"
                className="img-fluid mx-auto"
                alt="Tasmania map"
              />

              <h4 className="passpark_head mt-lg-5 mt-4">Ben Lomond</h4>
              <p className="para">
                Dolerite cliffs and a stark alpine plateau.
              </p>
              <h4 className="passpark_head">Cradle Mountain</h4>
              <p className="para">Tasmania’s iconic wilderness destination.</p>
              <h4 className="passpark_head">Douglas-Apsley</h4>
              <p className="para">
                Protects rich and diverse dry sclerophyll forests.
              </p>
              <h4 className="passpark_head">Freycinet</h4>
              <p className="para">
                The jewel of Tasmania’s stunning coastline.
              </p>
              <h4 className="passpark_head">Hartz Mountains</h4>
              <p className="para">Mountain walks and wildflowers.</p>
              <h4 className="passpark_head">Kent Group</h4>
              <p className="para">
                The Kent Group is as beautiful as it is remote.
              </p>
              <h4 className="passpark_head">Lake St Clair</h4>
              <p className="para">A wilderness carved by glaciers.</p>
            </div>
            <div className="col-lg-6 mx-auto">
              {" "}
              <h4 className="passpark_head">Maria Island d</h4>
              <p className="para">A tranquil island with a unique heritage.</p>
              <h4 className="passpark_head">Mole Creek</h4>
              <p className="para">A network of sparkling limestone caves.</p>
              <h4 className="passpark_head">Mt Field</h4>
              <p className="para">Tall trees, waterfalls and alpine tarns.</p>
              <h4 className="passpark_head">Mt William</h4>
              <p className="para">
                Long lonely beaches, rich wildlife and plant life.
              </p>
              <h4 className="passpark_head">Narawntapu</h4>
              <p className="para">Untouched beaches and abundant wildlife.</p>
              <h4 className="passpark_head">Rocky Cape</h4>
              <p className="para">Aboriginal heritage, shipwrecks and more.</p>
              <h4 className="passpark_head">Savage River</h4>
              <p className="para">
                A remote, wilderness park of temperate rainforest.
              </p>
              <h4 className="passpark_head">South Bruny</h4>
              <p className="para">Spectacular coastal scenery.</p>
              <h4 className="passpark_head">Southwest</h4>
              <p className="para">The heart of the Tasmanian wilderness.</p>
              <h4 className="passpark_head">Strzelecki</h4>
              <p className="para">
                Home of rare flora and fauna on Flinders Island.
              </p>
              <h4 className="passpark_head">Tasman</h4>
              <p className="para">
                Spectacular sea-cliffs, pristine beaches and coastal walks.
              </p>
              <h4 className="passpark_head">Walls of Jerusalem</h4>
              <p className="para">
                Rich alpine flora set among rugged mountains.
              </p>
              <h4 className="passpark_head">Wild Rivers</h4>
              <p className="para">
                Dramatic peaks, rainforest, wild rivers and gorges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParksInTasmania;
