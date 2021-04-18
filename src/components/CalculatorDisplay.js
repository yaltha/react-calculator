import React, { Component } from "react";
import AutoScalingText from "./AutoScalingText";

export default class CalculatorDisplay extends Component {
  render() {
    const { value, ...props } = this.props;
    const languange = navigator.language || "en-US";
    let formattedValue = parseFloat(value).toLocaleString(languange, {
      useGrouping: true,
      maximumFractionDigits: 6,
    });

    //add back missing .0 in eg. 12.0
    const match = value.match(/\.\d*?(0*)$/);
    if (match) {
      formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];
    }
    return (
      <div {...props} className="calculator-display">
        <AutoScalingText>{formattedValue}</AutoScalingText>
      </div>
    );
  }
}
