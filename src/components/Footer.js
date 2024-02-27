import Phone from '../asserts/phone.png'
import Internet from '../asserts/internet.png'
import Social from '../asserts/social.png'


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
          margin:'0 auto'
        }}
      >
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p>
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
          margin:'20px 20px'
        }}
      >
        <div style={{display:'flex',justifyContent: "center", alignItems:'center',gap:'2px'}}>
          <img src={Phone} alt='phone' width={40} height={40}/>
          Toll free <b>1800 200 1234</b>
        </div>
        <div style={{display:'flex',justifyContent: "center", alignItems:'center',gap:'2px'}}>
          <img src={Social} alt='social' width={50} height={50}/>
          <div>www.facebook.com/cripumps</div>
        </div>
        <div style={{display:'flex',justifyContent: "center", alignItems:'center',gap:'2px'}}>
          <img src={Internet} alt='internet' width={40} height={40}/>
          <div>www.crigroups.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
