import React, { FC, PropsWithChildren } from "react";
import BugProps from "../interfaces/BugInterfaces";

const Bug: FC<BugProps> = (props: PropsWithChildren<BugProps>) => {
  return (
    <div>
      <div className="header">
        <h1>{props.id}</h1>
        <h1>{props.title}</h1>
      </div>
      <div>
        <div className="people">
          <p>{props.reporter}</p>
          <p>{props.owner}</p>
        </div>
        <div className="details">
          <p>{props.status}</p>
          <p>{props.stepsToReproduce}</p>
          <p>{props.priority}</p>
          <p>{props.created}</p>
          <p>{props.updated}</p>
          <p>{props.closed}</p>
        </div>
        <div className="dscription">
          <p>{props.expectedResult}</p>
          <p>{props.actualResult}</p>
          <p>{props.description}</p>
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
