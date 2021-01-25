import React from "react";

class BaseComponent extends React.PureComponent {
  componentDidCatch(error, info) {
    // For production we can send to matter most error stack!
    if (process.env.NODE_ENV === "development") {
      console.log(error);
      console.log(error.stack);
      console.log(info);
    }
  }
}
export default BaseComponent;
