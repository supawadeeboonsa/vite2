// CounterDec.tsx 
import useCounterStore from "../store/CounterStore";
 
const CounterDec = () => { 
    const { count, increase, reset } = useCounterStore(); 

    return ( 
        <div > 
            <h2 >Counter -</h2> 
            <p >{count}</p> 
            <div > 

                <button onClick={increase}> 
                    Decrease 
                </button> 

                <button onClick={reset}> 
                    Reset 
                </button> 

            </div> 
        </div> 
    ); 

} 

export default CounterDec; 