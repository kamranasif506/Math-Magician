import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from '../logic/calculate';

const CalculatorButton = ({
  label, className, colSize, onClick,
}) => (
  <div className={colSize}>
    <button className={className} type="button" onClick={onClick}>{label}</button>
  </div>
);

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  colSize: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Add onClick prop type
};

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setCalculatorData((prevState) => {
      const newData = calculate(prevState, buttonName);
      return newData;
    });
  };
  let res = 0;
  if (Object.hasOwnProperty.call(calculatorData, 'operation')) {
    if (calculatorData.operation === null
        && calculatorData.next === null
        && calculatorData.total === null) {
      res = calculatorData.total === null ? 0 : calculatorData.total;
    } else if (calculatorData.next === null
            && calculatorData.total !== null) {
      res = calculatorData.total;
    } else {
      res = calculatorData.operation === '=' ? calculatorData.total : calculatorData.next;
    }
  } else {
    res = calculatorData.next;
  }
  return (
    <div className="container mt-5">
      <div className="row no-gutters">
        <div className="col-md-3 offset-md-4 p-0">
          <div className="calculator">
            <div className="display">
              <div className="row">
                <div className="col-12 no-padding">
                  <input type="text" className="w-100 result text-end text-white" value={res} readOnly />
                </div>
              </div>
            </div>
            <div className="buttons">
              <div className="row no-gutters">
                <CalculatorButton label="AC" className="bg-grey w-100" colSize="col-md-3 no-padding" onClick={() => handleClick('AC')} />
                <CalculatorButton label="+/-" className="bg-grey w-100" colSize="col-md-3 no-padding" onClick={() => handleClick('+/-')} />
                <CalculatorButton label="%" className="bg-grey w-100" colSize="col-md-3 no-padding" onClick={() => handleClick('%')} />
                <CalculatorButton label="÷" className="bg-orange w-100" colSize="col-md-3 no-padding" onClick={() => handleClick('÷')} />
              </div>
              <div className="row no-gutters">
                <CalculatorButton label="7" className="bg-grey w-100" colSize="col-3 no-padding" onClick={() => handleClick('7')} />
                <CalculatorButton label="8" className="bg-grey w-100" colSize="col-3 no-padding" onClick={() => handleClick('8')} />
                <CalculatorButton label="9" className="bg-grey w-100" colSize="col-3 no-padding" onClick={() => handleClick('9')} />
                <CalculatorButton label="x" className="bg-orange w-100" colSize="col-3 no-padding" onClick={() => handleClick('x')} />
              </div>
              <div className="row">
                <CalculatorButton label="4" className="bg-grey w-100" colSize="col-3 no-padding" onClick={() => handleClick('4')} />
                <CalculatorButton label="5" className="bg-grey w-100" colSize="col-3 no-padding" onClick={() => handleClick('5')} />
                <CalculatorButton label="6" className="bg-grey w-100" colSize="col-3 no-padding" onClick={() => handleClick('6')} />
                <CalculatorButton label="-" className="bg-orange w-100" colSize="col-3 no-padding" onClick={() => handleClick('-')} />
              </div>
              <div className="row">
                <CalculatorButton label="1" className="bg-grey w-100" colSize="col-3 no-padding" onClick={() => handleClick('1')} />
                <CalculatorButton label="2" className="bg-grey w-100" colSize="col-3 no-padding" onClick={() => handleClick('2')} />
                <CalculatorButton label="3" className="bg-grey w-100" colSize="col-3 no-padding" onClick={() => handleClick('3')} />
                <CalculatorButton label="+" className="bg-orange w-100" colSize="col-3 no-padding" onClick={() => handleClick('+')} />
              </div>
              <div className="row">
                <CalculatorButton label="0" className="bg-grey w-100" colSize="col-6 no-padding" onClick={() => handleClick('0')} />
                <CalculatorButton label="." className="bg-grey w-100" colSize="col-3 no-padding" onClick={() => handleClick('.')} />
                <CalculatorButton label="=" className="bg-orange w-100" colSize="col-3 no-padding" onClick={() => handleClick('=')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
