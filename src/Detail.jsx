import Card from "./components/card";
import Radio from "./components/radio-button";
import pic from "./components/water-b.png";
import "./App.css"

function Detail() {
  return (
    <div >
      < Radio/>
      <button type="button" class="btn btn-danger " >
        <img src={pic} className='water'/>
      </button>
      <h1>Tree name</h1>
      <Card img={'https://cdn-icons-png.flaticon.com/512/1752/1752941.png'} />
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