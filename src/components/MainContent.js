import React from "react";
import Award from "../asserts/1.png";
import Ceremony from "../asserts/2.png";
import machinary from "../asserts/3.png";

const MainContent = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Award} alt="Award" width={450} height={750} />
        <div>
          <h5>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h5>
          <ul>
            <li>
              {" "}
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for <br />{" "}
              various projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the <br />{" "}
              old inefficient pumps with 5 Star rated energy efficient smart
              pumps with IoT enabled control panel.{" "}
            </li>
          </ul>
          <img src={Ceremony} alt="Ceremony" height={550} width={820} />
          <p style={{ width: "830px" }}>
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
      <p style={{
          margin:'0 auto'}}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop:'16px'
         
        }}
      >
        <img src={machinary} alt="machinary" width={1178} />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <p
        style={{
          border: "1px solid red",
          width:'48%',
          margin:'0 auto'
        }}
      />
    </div>
  );
};

export default MainContent;
