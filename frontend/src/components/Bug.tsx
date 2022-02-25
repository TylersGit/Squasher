import React, { FC, PropsWithChildren } from "react";

import BugProps from "../interfaces/BugInterfaces";
import "../styles/Bug.css";

const Bug: FC<BugProps> = (props: PropsWithChildren<BugProps>) => {
  const isClosedStyle = props.closed
    ? { display: "visible" }
    : { display: "none" };

  return (
    <div>
      <div className="header">
        <h2>{props.id}</h2>
        <h1>{props.title}</h1>
      </div>
      <div className="body">
        <div className="leftSide">
          <div className="details">
            <p>Status: {props.status}</p>
            <p>Priority: {props.priority}</p>
          </div>
          <div className="description">
            <p>Steps to reproduce: {props.stepsToReproduce}</p>
            <p>Description: {props.description}</p>
            <p>Expected result: {props.expectedResult}</p>
            <p>Actual result: {props.actualResult}</p>
          </div>
        </div>
        <div className="rightSide">
          <div className="people">
            <p className="header">People:</p>
            <p>Reported by: {props.reporter}</p>
            <p>Handled by: {props.owner}</p>
          </div>
          <div className="dates">
            <p className="header">Dates:</p>
            <p>Created: {props.created}</p>
            <p>Updated: {props.updated}</p>
            <p style={isClosedStyle}>Closed: {props.closed}</p>
          </div>
        </div>
      </div>
      <div>
        <p>Comment</p>
        <p>comment 2</p>
      </div>
    </div>
  );
};

export default Bug;
