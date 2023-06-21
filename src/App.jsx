import  { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
const CustomCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="max-w-screen-2xl text-center ">
      <h1 className="text-red-500 text-center text-[25px]">Count: {state.count}</h1>
      <button className="w-[100px] m-[20px] bg-[blue]" onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button className="w-[100px] m-[20px]  bg-[red]" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default CustomCounter;