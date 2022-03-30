import React, { Component } from "react";
import "./Style.css";
import { withRouter } from "react-router";
import citilogo from "./Assets/citilogo.png";
import { getLocationApi } from "../../../service/ApiLocation";


 class LocationSelect extends Component {

state={
    country:[]
}

componentDidMount(){
    getLocationApi().then(res=>{
        //console.log(res.data)
        this.setState({country:res.data})
    
    })
}


navigateToLoginPage = ()=>{
    const { history } = this.props;

    history.push("/loginpage");
}


  render() {
    return (
      <div className="location-select-main-container">
        <div className="tts-black-bar">
          <span className="tts-text">Treasury and Trade Solutions</span>
        </div>
        <div className="citi-column-container">
          <div className="citi-mini-logo">
            <img className="citi-logo" src={citilogo} alt="citi logo" />
          </div>
          <div className="citidirect">CitiDirect</div>
        </div>
        <div className="container-dropdown">
          <div className="main-dropdown">
            <div className="main-items">
              <span>Select Your Location</span>
<select >

    {this.state.country.map((c)=><option key={c.id}>{c.name}</option>)}
</select>
              <button className="map-go-button" onClick={this.navigateToLoginPage}>Go</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LocationSelect);