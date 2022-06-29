import React from "react";

const DefinitionsContainer: React.FC<{children: any}> = (props) => {
  return <div className={"definitions-container"}>{props.children}</div>;
};

export default DefinitionsContainer;
