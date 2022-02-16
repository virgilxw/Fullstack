import React, { Component } from 'react';
import Weather from "./weather"

class DetailButton extends React.Component {

  state = { showing: true };

  render() {
      const { showing } = this.state;   
      return (
          <span>
              <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
              { showing 
                  ? null
                  : <div>
                  <h1>{this.props.countryData.name.common}</h1>
                  <i>{this.props.countryData.name.official}</i>
                  <br />
                  <p><b>Capital</b>: {this.props.countryData.capital}<br />
                    <b>Area</b>: {this.props.countryData.area}</p>
                  <br />
                  <b>Languages:</b>
                  <ul>
                    {Object.keys(this.props.countryData.languages).map(key => (<li key={this.props.countryData.languages[key]}>{this.props.countryData.languages[key]}</li>))}
                  </ul>
                  <br />
                  <img src={this.props.countryData.flags.png}></img>
                  <br />
                  <Weather latlng={this.props.countryData.capitalInfo.latlng} capital={this.props.countryData.capital} />
                </div>
              }
          </span>  
      )
  }
}
  
  export default DetailButton