import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setValue(eval(value).toString()); 
    } catch {
      setValue('Error');
    }
  };

  return (
    <div className="container vw-100 vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="bg-secondary p-4 rounded shadow-lg">
        <form>
          <div className="mb-3">
            <input
              type="text"
              value={value}
              readOnly
              className="form-control text-end fs-3 bg-light"
            />
          </div>

          
          <div className="d-flex mb-2">
            <button type="button" className="btn btn-info flex-fill me-1" onClick={handleClear}>AC</button>
            <button type="button" className="btn btn-info flex-fill me-1" onClick={handleDelete}>DE</button>
            <button type="button" className="btn btn-info flex-fill me-1" value="." onClick={handleClick}>.</button>
            <button type="button" className="btn btn-info flex-fill" value="/" onClick={handleClick}>/</button>
          </div>

         
          <div className="d-flex mb-2">
            <button type="button" className="btn btn-info flex-fill me-1" value="7" onClick={handleClick}>7</button>
            <button type="button" className="btn btn-info flex-fill me-1" value="8" onClick={handleClick}>8</button>
            <button type="button" className="btn btn-info flex-fill me-1" value="9" onClick={handleClick}>9</button>
            <button type="button" className="btn btn-info flex-fill" value="*" onClick={handleClick}>*</button>
          </div>

         
          <div className="d-flex mb-2">
            <button type="button" className="btn btn-info flex-fill me-1" value="6" onClick={handleClick}>6</button>
            <button type="button" className="btn btn-info flex-fill me-1" value="5" onClick={handleClick}>5</button>
            <button type="button" className="btn btn-info flex-fill me-1" value="4" onClick={handleClick}>4</button>
            <button type="button" className="btn btn-info flex-fill" value="+" onClick={handleClick}>+</button>
          </div>

          
          <div className="d-flex mb-2">
            <button type="button" className="btn btn-info flex-fill me-1" value="3" onClick={handleClick}>3</button>
            <button type="button" className="btn btn-info flex-fill me-1" value="2" onClick={handleClick}>2</button>
            <button type="button" className="btn btn-info flex-fill me-1" value="1" onClick={handleClick}>1</button>
            <button type="button" className="btn btn-info flex-fill" value="-" onClick={handleClick}>-</button>
          </div>

          
          <div className="d-flex">
            <button type="button" className="btn btn-info flex-fill me-1" value="0" onClick={handleClick}>0</button>
            <button type="button" className="btn btn-info flex-fill me-1" value="00" onClick={handleClick}>00</button>
            <button type="button" className="btn btn-info flex-fill me-1" value="%" onClick={handleClick}>%</button>
            <button type="button" className="btn btn-success flex-fill" onClick={handleCalculate}>=</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;