import React from "react";
import "./MensFashion.css";
import { useNavigate } from "react-router-dom";

const MensFashion = () => {
  const NavigateTo = useNavigate();

  function redirectToMensProducts() {
    NavigateTo("/mens-multiple-products");
  }

  return (
    <>
      <div id="mens-fashion">
        <div id="slider">
          <img
            src="https://assets.tatacliq.com/medias/sys_master/images/47513566183454.jpg"
            alt="mens-slider"
          />
        </div>
        <div id="sec-1">
          <div className="sec-1-common" onClick={redirectToMensProducts}>
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396042702878.jpg"
              alt="types"
            />
          </div>
          <div className="sec-1-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396042768414.jpg"
              alt="types"
            />
          </div>
          <div className="sec-1-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396042833950.jpg"
              alt="types"
            />
          </div>
          <div className="sec-1-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396042899486.jpg"
              alt="types"
            />
          </div>
          <div className="sec-1-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396042965022.jpg"
              alt="types"
            />
          </div>
          <div className="sec-1-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396043030558.jpg"
              alt="types"
            />
          </div>
          <div className="sec-1-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396043096094.jpg"
              alt="types"
            />
          </div>
          <div className="sec-1-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396043161630.jpg"
              alt="types"
            />
          </div>
        </div>
        <div id="sec-2">
          <div className="sec-2-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47627123523614.jpg"
              alt="sec-2"
            />
          </div>
          <div className="sec-2-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47596855787550.jpg"
              alt="sec-2"
            />
          </div>
        </div>
        <div id="sec-3">
          <div className="sec-3-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396043882526.jpg"
              alt="sec-3"
            />
          </div>
          <div className="sec-3-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396044210206.jpg"
              alt="sec-3"
            />
          </div>
        </div>
        <div id="sec-4">
          <div className="sec-4-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396044275742.jpg"
              alt="sec-4"
            />
          </div>
          <div className="sec-4-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396044341278.jpg"
              alt="sec-4"
            />
          </div>
          <div className="sec-4-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396044406814.jpg"
              alt="sec-4"
            />
          </div>
          <div className="sec-4-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396044472350.jpg"
              alt="sec-4"
            />
          </div>
        </div>
        <div id="sec-5">
          <div className="sec-5-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396044865566.jpg"
              alt="sec-5"
            />
          </div>
        </div>
        <div id="sec-6">
          <div className="sec-6-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396044931102.jpg"
              alt="sec-6"
            />
          </div>
          <div className="sec-6-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396044996638.jpg"
              alt="sec-6"
            />
          </div>
          <div className="sec-6-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396045062174.jpg"
              alt="sec-6"
            />
          </div>
          <div className="sec-6-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396045127710.jpg"
              alt="sec-6"
            />
          </div>
        </div>
        <div id="sec-7">
          <div className="sec-7-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396045193246.jpg"
              alt="sec-7"
            />
          </div>
        </div>
        <div id="sec-8">
          <div className="sec-8-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396047781918.jpg"
              alt="sec-8"
            />
          </div>
          <div className="sec-8-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396047847454.jpg"
              alt="sec-8"
            />
          </div>
          <div className="sec-8-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396047912990.jpg"
              alt="sec-8"
            />
          </div>
          <div className="sec-8-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396047978526.jpg"
              alt="sec-8"
            />
          </div>
        </div>
        <div id="sec-9">
          <div className="sec-9-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396049420318.jpg"
              alt="sec-9"
            />
          </div>
        </div>
        <div id="sec-10">
          <div className="sec-10-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396049485854.jpg"
              alt="sec-10"
            />
          </div>
          <div className="sec-10-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396049551390.jpg"
              alt="sec-10"
            />
          </div>
          <div className="sec-10-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396049616926.jpg"
              alt="sec-10"
            />
          </div>
          <div className="sec-10-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396049682462.jpg"
              alt="sec-10"
            />
          </div>
        </div>
        <div id="sec-11">
          <div className="sec-11-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396050206750.jpg"
              alt="sec-11"
            />
          </div>
        </div>
        <div id="sec-12">
          <div className="sec-12-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396050272286.jpg"
              alt="sec-12"
            />
          </div>
          <div className="sec-12-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396050337822.jpg"
              alt="sec-12"
            />
          </div>
          <div className="sec-12-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396050403358.jpg"
              alt="sec-12"
            />
          </div>
          <div className="sec-12-common">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/47396050468894.jpg"
              alt="sec-12"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MensFashion;
