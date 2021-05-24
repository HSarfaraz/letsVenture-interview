import React from 'react';

export default function Header() {
  return (
    <div className="header container-fluid">
      <div className="row">
        <div className="col-sm-6 text-left">
          <span className="pr-2"> Logo </span> <a href="#" className="pr-2"> Job </a> <a href="#"> Recruiter </a>
        </div>
        <div className="col-sm-6 text-right"><a href="#"> Login </a></div>
      </div>
    </div>
  )
}
