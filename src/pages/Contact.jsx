import { MDBCardImage } from "mdb-react-ui-kit";
import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="container my-5 row mx-auto">
        <h3 className="text-center my-3"> Keep in Touch </h3>
        <div className="row mx-auto ">
          <div className="col-6 ">
            <MDBCardImage
              src="https://t4.ftcdn.net/jpg/02/86/27/27/360_F_286272767_OX1i7aU2l86AD5UTm2tNxvwi07dyQ0Ee.jpg"
              alt="Generic placeholder image"
              className="mt-4 mb-3 img-thumbnail"
              fluid
              //   style={{ width: "150px", zIndex: "1" }}
            />
          </div>
          <div className="col-6 py-5">
            <div className="row">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form8Example1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="form8Example1"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form8Example2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form8Example2"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form8Example3">
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="form8Example3"
                    className="form-control"
                    placeholder="your message"
                  ></textarea>
                </div>
                <div className="form-outline text-end">
                  <button className="btn btn-dark my-3 "> Submit </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
