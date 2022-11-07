import React from "react";

const initialState = { count: 0, changeValue: "" };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count !== 0 ? state.count - 1 : (state.count = 0) };
    case "changeValue":
      return { count: parseInt(action.payload) };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="bg-[#2c2c2c] h-screen flex flex-col items-center  md:p-[100px] p-[20px] w-full">
      <div className="md:p-[80px] p-[40px] flex md:gap-[70px] gap-[30px] justify-center  items-center md:w-[800px] w-[300px] h-[100px] md:h-[200px]  mx-auto bg-[#272727] rounded-full">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="text-red-500 md:text-7xl text-3xl"
        >
          -
        </button>

        <h1 className="text-white md:text-7xl text-3xl font-bold bg-[#3b3b3b] md:p-[50px] p-[20px] rounded-full shadow-2xl shadow-gray-900">
          {state.count}
        </h1>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="text-green-500 md:text-7xl text-3xl"
        >
          +
        </button>
      </div>
      <form>
        <label className="font-bold md:text-3xl text-white">Set Value: </label>
        <input
          placeholder="Enter value"
          type="number"
          maxLength={2}
          onChange={(e) =>
            dispatch({ type: "changeValue", payload: e.target.value })
          }
          className="mt-[20px] md:h-[50px] md:w-[300px] rounded-lg md:px-[20px] px-[10px] md:py-[5px] py-[2px] bg-[#3b3b3b] border-none text-white"
        />
      </form>

      <button
        className="bg-[#ffffff50] md:px-[30px] px-[15px] md:py-[10px] py-[5px] md:mt-[20px] mt-[10px] text-white rounded-lg "
        type="reset"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}

// export class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     // logErrorToMyService(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }

// function App() {
//   const [count, setCount] = React.useState(0);

//   function add() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function minus() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   function reset() {
//     setCount(0);
//   }
//   return (
//     <div className="counter--app">
//       <div className="counter">
//         <button className="btn-1" onClick={minus}>
//           -
//         </button>
//         <div>
//           <h1 className="count">{count}</h1>
//         </div>
//         <button className="btn-2" onClick={add}>
//           +
//         </button>
//       </div>
//       <button className="reset" type="reset" onClick={reset}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default App;
