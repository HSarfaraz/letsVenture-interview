import React, { Component } from "react";
import ReactImage from "./react.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import "./app.css";

 const job = [
  {
    position: "Frontend Developer",
    location: "Bengalore",
    company:"LetsVenture",
    logo:"LOGO",
    type:"",
    experience:"6",
    skills:"React,HTML, CSS",
  },
  {
    position: "FullStack Developer",
    location: "Bengalore",
    company:"LetsVenture",
    logo:"LOGO",
    type:"",
    experience:"8",
    skills:"Node, Express, MongoDB",
  }
];


export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then((res) => res.json())
      .then((user) => this.setState({ username: user.username }));
  }
 
  render() {
    const { username } = this.state;
    return (
      <div>
        <Header />
        {/* Search functionality */}

              <div className="row p-0 mt-3">
                <div className="col-sm-2 text-center p-2 mt-2">
                  <button className="btn btn-outline-secondary mt-3 btn-lg"> Filter by location </button>
                </div>
                <div className="col-sm-2 text-center p-2 mt-2">
                  <input type="checkbox" name="All" id="all" />                  
                  <label htmlFor="all">  All</label>
                </div>
                <div className="col-sm-2 text-center p-2 mt-2">
                  <input type="checkbox" name="full-time" id="full-time" />                 
                  <label htmlFor="full-time">  full-time</label>
                </div>
                <div className="col-sm-2 text-center p-2 mt-2">                  
                  <input type="checkbox" name="part-time" id="part-time" />                
                  <label htmlFor="part-time">  part-time</label>
                </div>
                <div className="col-sm-2 text-center p-2 mt-2">                  
                  <input type="checkbox" name="freelancer" id="freelancer" />                
                  <label htmlFor="freelancer">  freelancer</label>
                </div>
                <div className="col-sm-2 text-center p-2 mt-2">
                  <button className="btn btn-outline-secondary mt-3 btn-lg"> Filter by location </button>
                </div>
              </div>

              <div className="row ml-2 mt-3">
                <a href="#" className=" text-center p-2 mt-2 col-sm-2">Advance Search</a>
              </div>
              
              <div className="row p-0 mt-3">
                <div className="col-sm-2 text-center p-2 mt-2">
                  <button className="btn btn-outline-secondary mt-3 btn-lg"> Filter by location </button>
                </div>
                <div className="col-sm-2 text-center p-2 mt-2">
                  <button className="btn btn-outline-secondary mt-3 btn-lg"> Filter by Experience </button>
                </div>
              </div>
        {job.filter(profile => profile.company === "LetsVenture").map(filteredProfile=> (


          <div className="container-fluid d-flex justify-content-center">                       

              
              
            <div className="card round col-sm-12 mb-2 mt-2 ">          

              <div className="row card-body p-0 mt-3">

                <div className="col-sm-2 text-center p-2 mt-2">Logo</div>
                <div className="col-sm-6 text-center p-2">
                  <h1 className="inline">{filteredProfile.position}</h1>
                  <p>
                    <span>{filteredProfile.company}</span> | <span>{filteredProfile.location}</span> | <span>{filteredProfile.experience} </span>
                  </p>
                </div>
                <div className="col-sm-2  text-right p-2">
                  <button className="btn btn-primary mt-3 btn-lg"> Apply </button>
                </div><br/>
              </div>
            </div>

          </div>
        ))}
        {/* {username ? (
          <h1>{`Hello ${username}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )} */}
        <Footer />
      </div>
    );
  }
}
