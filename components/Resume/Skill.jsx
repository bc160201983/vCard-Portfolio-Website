import React from "react";

const Skill = () => {
  return (
    <div>
      <div className="title-h2 flex justify-start items-center mb-[20px]">
        <div className="main-title text-[24px] font-semibold text-white">
          My Skills
        </div>
      </div>
      <div className="box box--s2 box-inner mb-0 p-[30px]">
        {/* <!-- Web Design --> */}
        <div className="progress">
          <div className="progress-text">
            <span>Web Design</span> 80%
          </div>
          <div className="progress-bar">
            <span
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "80%", "z-index": "2" }}
            ></span>
          </div>
        </div>

        {/* <!-- Web Design --> */}
        <div className="progress">
          <div className="progress-text">
            <span>Graphic Design</span> 75%
          </div>
          <div className="progress-bar">
            <span
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "75%", "z-index": "2" }}
            ></span>
          </div>
        </div>

        {/* <!-- Web Design --> */}
        <div className="progress">
          <div className="progress-text">
            <span>Branding</span> 90%
          </div>
          <div className="progress-bar">
            <span
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "90%", "z-index": "2" }}
            ></span>
          </div>
        </div>

        {/* <!-- Web Design --> */}
        <div className="progress">
          <div className="progress-text">
            <span>WordPress</span> 50%
          </div>
          <div className="progress-bar">
            <span
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "50%", "z-index": "2" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
