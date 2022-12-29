import React from "react";
import 'animate.css';


const DefinitionsContainer: React.FC<{children: any}> = (props) => {
  return <div className={"definitions-container"}>{props.children}</div>;
};

export default DefinitionsContainer;
