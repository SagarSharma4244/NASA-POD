import React, {Component} from "react";
// import {Link} from "react-router-dom";
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap";
// import "./Home.css";

export default class Home extends Component {
  state = {
    details: {}
  };
  componentDidMount = async () => {
    const req = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=nM84iG1FFJCfeAGjhVVdzyILiL7LcQdicfgxH1bB"
    );
    const res = await req.json();
    this.setState({details: res});
    // console.log(this.state.details);
  };
  render() {
    const nasaDetails = this.state.details;
    return (
      <div className="container1">
        <Row>
          <Col lg={3} className="text">
            {/* <span>{nasaDetails.date}</span> */}
            <h1>{nasaDetails.title}</h1>

            <span>
              {nasaDetails.date}
              <br />
            </span>

            <p id="explanation">{nasaDetails.explanation}</p>
          </Col>
          <Col lg={9} className="image">
            {/* <a href={`${nasaDetails.url}`}>Source</a> */}
            {/* <p>
              {nasaDetails.url === undefined
                ? `Waiting for Huston`
                : `Source: ${nasaDetails.url}`}
            </p> */}
            <img
              className="img-fluid shadow p-3 mb-5 bg-white rounded"
              src={nasaDetails.url}
              alt="NASA's Pic of the day."
            />
          </Col>
        </Row>
      </div>
    );
  }
}
