function App() {

    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(expression);
 
 function display(symbol) {
    setExpression((prevValue) => {
    if(/[+\-*\/]/.test(symbol) && /[+\-*\/]/.test(prevValue[prevValue.length - 1])) {
        let newValue;
        if(/[-]/.test(symbol)) {
            newValue = prevValue.slice() + symbol;
        } else {
            let count = 0;
            for(let i = 0; i < prevValue.length; i++) {
                if(isNaN(+prevValue[i])) {
                    count++;
                } else {
                    count = 0;
                  }
                }
                    newValue = prevValue.slice(0, prevValue.length - count) + symbol;
                }
                setExpression(newValue);
             } else {
                 if(prevValue) {
                     prevValue = prevValue + "";
                     let valArr = prevValue.split(/[+\/*\-]/g);
                     let lastNum = valArr[valArr.length - 1];
                     if(!isNaN(lastNum) && /[.]/.test(lastNum) && symbol === ".") {
                         symbol = "";
                     }
                 }
 
                 setExpression((prevValue + symbol).replace(/^0/g, '').replace(/\.+/g, '.'));
             }
        });
 
        setAnswer((prevValue) => (prevValue + symbol).replace(/^0/g, '').replace(/\.+/g, '.'));
    }
 
    function calculate() {
        setAnswer(eval(expression));
        setExpression(eval(expression));
    }
 
     function allClear() {
         setExpression("");
         setAnswer(0);
     } 
 
     function clear() {
         setExpression(prev => {
             setAnswer(0);
             prev = prev + "";
             return prev.split("").slice(0, prev.length - 1).join("");
         });
     }
 
 return(
         <div className='container'>
             <div className='grid'>
                 <div className='display'>
                     <input value={expression} placeholder='0' class='expression' disabled></input>
                     <input className='answer'value={answer} id='display' disabled></input>
                 </div>
                 <div onClick={allClear}className="padButton AC crveno" id='clear'>AC</div>
                 <div onClick={clear}className="padButton C crveno">C</div>
                 <div onClick={() => display('*')} className="padButton times" id='multiply'>*</div>
                 <div onClick={() => display('/')} className="padButton div" id='divide'>/</div>
                 <div onClick={() => display('7')} className="padButton seven dark-gray" id='seven'>7</div>
                 <div onClick={() => display('8')} className="padButton eight dark-gray" id='eight'>8</div>
                 <div onClick={() => display('9')} className="padButton nine dark-gray" id='nine'>9</div>
                 <div onClick={() => display('-')} className="padButton minus" id='subtract'>-</div>
                 <div onClick={() => display('4')} className="padButton four dark-gray" id='four'>4</div>
                 <div onClick={() => display('5')} className="padButton five dark-gray" id='five'>5</div>
                 <div onClick={() => display('6')} className="padButton six dark-gray" id='six'>6</div>
                 <div onClick={() => display('+')} className="padButton plus" id='add'>+</div>
                 <div onClick={() => display('1')} className="padButton one dark-gray" id='one'>1</div>
                 <div onClick={() => display('2')} className="padButton two dark-gray" id='two'>2</div>
                 <div onClick={() => display('3')} className="padButton three dark-gray" id='three'>3</div>
                 <div onClick={calculate} className="padButton equal" id='equals'>=</div>
                 <div onClick={() => display('0')} className="padButton zero dark-gray" id='zero'>0</div>
                 <div onClick={() => display('.')} className="padButton dot dark-gray" id='decimal'>.</div>
             </div>
         </div>
     ) 
 }

ReactDOM.render(<App />, document.getElementById('root'));