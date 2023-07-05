import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

const CalculatorButton = ({ label, className, colSize }) => (
  <div className={colSize}>
    <button className={className} type="button">{label}</button>
  </div>
);

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  colSize: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const Calculator = () => (
  <div className="container mt-5">
    <div className="row no-gutters">
      <div className="col-md-3 offset-md-4 p-0">
        <div className="calculator">
          <div className="display">
            <div className="row">
              <div className="col-12 no-padding">
                <input type="text" className="w-100 result text-end text-white" value="0" readOnly />
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="row no-gutters">
              <CalculatorButton label="AC" className="bg-grey w-100" colSize="col-md-3 no-padding" />
              <CalculatorButton label="+/-" className="bg-grey w-100" colSize="col-md-3 no-padding" />
              <CalculatorButton label="%" className="bg-grey w-100" colSize="col-md-3 no-padding" />
              <CalculatorButton label="÷" className="bg-orange w-100" colSize="col-md-3 no-padding" />
            </div>
            <div className="row no-gutters">
              <CalculatorButton label="7" className="bg-grey w-100" colSize="col-3 no-padding" />
              <CalculatorButton label="8" className="bg-grey w-100" colSize="col-3 no-padding" />
              <CalculatorButton label="9" className="bg-grey w-100" colSize="col-3 no-padding" />
              <CalculatorButton label="x" className="bg-orange w-100" colSize="col-3 no-padding" />
            </div>
            <div className="row">
              <CalculatorButton label="4" className="bg-grey w-100" colSize="col-3 no-padding" />
              <CalculatorButton label="5" className="bg-grey w-100" colSize="col-3 no-padding" />
              <CalculatorButton label="6" className="bg-grey w-100" colSize="col-3 no-padding" />
              <CalculatorButton label="-" className="bg-orange w-100" colSize="col-3 no-padding" />
            </div>
            <div className="row">
              <CalculatorButton label="1" className="bg-grey w-100" colSize="col-3 no-padding" />
              <CalculatorButton label="2" className="bg-grey w-100" colSize="col-3 no-padding" />
              <CalculatorButton label="3" className="bg-grey w-100" colSize="col-3 no-padding" />
              <CalculatorButton label="+" className="bg-orange w-100" colSize="col-3 no-padding" />
            </div>
            <div className="row">
              <CalculatorButton label="0" className="bg-grey w-100" colSize="col-6 no-padding" />
              <CalculatorButton label="." className="bg-grey w-100" colSize="col-3 no-padding" />
              <CalculatorButton label="=" className="bg-orange w-100" colSize="col-3 no-padding" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Calculator;
