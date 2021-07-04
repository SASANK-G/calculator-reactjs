import {useState} from 'react';

function App() {

  const [calc, setCalc] = useState("");
	// const [result, setResult] = useState("");

	const ops = [ '%', '/', '*', '-', '+', '.'];

  //generate numbers
	const createDigits = () => {
		const digits = [];

		for (let i = 1; i < 10; i++) {
			digits.push(<button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>);
		}
		return digits;
	}

  //final result(=)
  const calculate =  ()=>{
    console.log("final",calc);
    if(ops.includes(calc.slice(-1))){
      return;
    }
      setCalc(eval(calc).toString());
  }

  //Delete last digit/op
  const deleteLast=()=>{
    if(calc === ''){
      return;
    }
      const value = calc.slice(0,-1);
      setCalc(value);
  }

  // All clear
  const deleteFull=()=>{
  if(calc === ''){
    return;
  }
    const value = calc.slice(0, 0);
    setCalc(value);
  }

    
	const updateCalc = (value) => {
    
		if (
			(ops.includes(value) && calc === '') || 
			(ops.includes(value) && ops.includes(calc.slice(-1)))
		) {
			return;
		}

		setCalc(calc + value);

		// if (!ops.includes(value)) {
		// 	setResult(eval(calc + value).toString());
		// }
	}

  //percent
  const percent =()=>{
    const res = (calc)/100;
  
    setCalc(res.toString())
  
  }

  

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {calc || "0"}
        </div>
        
        <div className="boxx">
          <div className="numbers">
            <div className="operators1">
              <button onClick={deleteFull}>AC</button>
              <button onClick={deleteLast}>DEL</button>
              <button onClick={()=> percent('%')}>%</button>
            </div>
            <div className="digits">
              {createDigits() }
              <button onClick={()=> updateCalc('0')}>0</button>
              <button onClick={()=> updateCalc('.')}>.</button>
            </div>
          </div>
          <div className="symbols">
            <div className="operators2">
              <button onClick={()=> updateCalc('/')}>/</button>
              <button onClick={()=> updateCalc('*')}>*</button>
              <button onClick={()=> updateCalc('+')}>+</button>
              <button onClick={()=> updateCalc('-')}>-</button>

              <button onClick={calculate}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
