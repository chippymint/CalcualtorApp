import React from "react";
import "./Button.css";
import PropTypes from "prop-types";


export default class Button extends React.Component {
    static propTypes = {
      name: PropTypes.string,
      purple: PropTypes.bool,
      wide: PropTypes.bool,
      clickHandler: PropTypes.func,
    };
  
    handleClick = () => {
      this.props.clickHandler(this.props.name);
    };
  
    render() {
      const className = [
        "component-button",
        this.props.purple ? "purple" : "",
        this.props.wide ? "wide" : "",
      ];
  
      return (
        <div className={className.join(" ").trim()}>
          <button onClick={this.handleClick}>{this.props.name}</button>
        </div>
      );
    }
  }
  
