// CounterInc.tsx
import useCounterStore from "../store/CounterStore";  

const CounterInc = () => {
  const { count, increase, reset } = useCounterStore();

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Counter +</h2>
      <p className="text-3xl mb-4">{count}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
        <button
          onClick={increase}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default CounterInc;
