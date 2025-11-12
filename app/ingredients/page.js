"use client"; 

import useCounterStore from "@/Store/useIngredientsStore";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-3 mt-10">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-4">
        <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded">
          +
        </button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">
          -
        </button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
}
