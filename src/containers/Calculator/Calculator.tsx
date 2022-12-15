import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import './Calculator.css';
import {action, clear, deleteLast, getTotal} from "./calculatorSlice";

const Calculator = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.counter.value);

  return (
    <div className='Calculator mt-5'>
      <div className="container">
        <div className="row">
          <h1 className='col border rounded'>{counterValue}</h1>
          <button
            onClick={() => dispatch(deleteLast())}
            className='col-2 border rounded btn btn-dark'>CE</button>
        </div>
        <div className="row">
          <button
            onClick={() => dispatch(action('7'))}
            className='col btn border'>7
          </button>
          <button
            onClick={() => dispatch(action('8'))}
            className='col btn border'>8
          </button>
          <button
            onClick={() => dispatch(action('9'))}
            className='col btn border'>9
          </button>
          <button
            onClick={() => dispatch(action('/'))}
            className='col btn border'>/
          </button>
        </div>
        <div className="row">
          <button
            onClick={() => dispatch(action('4'))}
            className='col btn border'>4
          </button>
          <button
            onClick={() => dispatch(action('5'))}
            className='col btn border'>5
          </button>
          <button
            onClick={() => dispatch(action('6'))}
            className='col btn border'>6
          </button>
          <button
            onClick={() => dispatch(action('*'))}
            className='col btn border'>*
          </button>
        </div>
        <div className="row">
          <button
            onClick={() => dispatch(action('1'))}
            className='col btn border'>1
          </button>
          <button
            onClick={() => dispatch(action('2'))}
            className='col btn border'>2
          </button>
          <button
            onClick={() => dispatch(action('3'))}
            className='col btn border'>3
          </button>
          <button
            onClick={() => dispatch(action('-'))}
            className='col btn border'>-
          </button>
        </div>
        <div className="row">
          <button
            onClick={() => dispatch(action('0'))}
            className='col btn border'>0
          </button>
          <button
            onClick={() => dispatch(clear())}
            className='col btn btn-danger border'>AC
          </button>
          <button
            onClick={() => dispatch(getTotal())}
            className='col btn border btn-primary'>=
          </button>
          <button
            onClick={() => dispatch(action('+'))}
            className='col btn border'>+
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;