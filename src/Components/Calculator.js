import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [element, AddNewEl] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const Calc = (event) => {
    const NewEl = calculate(element, event.target.textContent);
    AddNewEl(NewEl);
  };
  return (
    <div className="container-wrap">
      <div className="output">{element.next || element.total || 0}</div>
      <div className="row">
        <button type="button" className="calc_key " onClick={Calc}>
          AC
        </button>
        <button type="button" className="calc_key" onClick={Calc}>
          +/-
        </button>
        <button type="button" className="calc_key" onClick={Calc}>
          %
        </button>
        <button type="button" className="calc_key operator_key" onClick={Calc}>
          ÷
        </button>
      </div>
      <div className="row">
        <button type="button" className="calc_key" onClick={Calc}>
          7
        </button>
        <button type="button" className="calc_key" onClick={Calc}>
          8
        </button>
        <button type="button" className="calc_key" onClick={Calc}>
          9
        </button>
        <button type="button" className="calc_key operator_key" onClick={Calc}>
          x
        </button>
      </div>
      <div className="row">
        <button type="button" className="calc_key" onClick={Calc}>
          4
        </button>
        <button type="button" className="calc_key" onClick={Calc}>
          5
        </button>
        <button type="button" className="calc_key" onClick={Calc}>
          6
        </button>
        <button type="button" className="calc_key operator_key" onClick={Calc}>
          -
        </button>
      </div>
      <div className="row">
        <button type="button" className="calc_key" onClick={Calc}>
          1
        </button>
        <button type="button" className="calc_key" onClick={Calc}>
          2
        </button>
        <button type="button" className="calc_key" onClick={Calc}>
          3
        </button>
        <button type="button" className="calc_key operator_key" onClick={Calc}>
          +
        </button>
      </div>
      <div className="last_row">
        <button type="button" className="calc_key zero_key" onClick={Calc}>
          0
        </button>
        <button type="button" className="calc_key" onClick={Calc}>
          .
        </button>
        <button type="button" className="calc_key operator_key" onClick={Calc}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
