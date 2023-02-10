import Card from "./components/card";
import pic from "./components/default.png";
import Radio from "./components/radio-button";

function Detail() {
  return (
    <div >
      < Radio/>
      <h1>Tree name</h1>
      <Card img={'https://cdn-icons-png.flaticon.com/512/1752/1752941.png'}/>
      <div className="detail" >
        <h4>Temperature: </h4>
        </div>
        <div className="detail">
          <h4>Moisture: </h4>
        </div>
        <div className="detail">
          <h4>Light: </h4>
        </div>

    </div>
  );
}

export default Detail;