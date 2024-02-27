const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p style={{ marginLeft:"656px",
          marginRight:"880px"}}>
          CHEMICALS PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE
          WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span>{" "}
          SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span>{" "}
          MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD &
          BEVERAGE<span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR{" "}
          <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE
          FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor:"red",
          color:"white",
          padding:"40px",
          marginLeft:"656px",
          marginRight:"880px"
         

        }}
      >
        <div>
          <img />
          Toll free <b>1800 200 1234</b>
        </div>
        <div>
          <img />
          <div>www.facebook.com/cripumps</div>
        </div>
        <div>
          <img />
          <div>www.crigroups.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
