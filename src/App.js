import React from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    // case "changeValue":
    //   return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // const [inputValues, setInputValues] = React.useReducer(
  //   (state, newState) => ({ ...state, ...newState }),
  //   {}
  // );

  // const handleOnChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputValues({ [name]: value });
  // };

  function handleChange(event) {
    const setValue = event.target.value;
    return setValue;
  }

  return (
    <div className="bg-[#2c2c2c] h-screen flex flex-col items-center  md:p-[100px] p-[20px] w-full">
      <div className="md:p-[80px] p-[20px] flex md:gap-[50px] gap-[20px] justify-center  items-center md:w-[500px] w-[200px] h-[100px] md:h-[200px]  mx-auto bg-[#272727] rounded-full">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="text-[#ffffff50] md:text-7xl text-3xl"
        >
          -
        </button>

        <h1 className="text-white md:text-7xl text-5xl font-bold bg-[#3b3b3b] md:p-[50px] p-[20px] rounded-full shadow-2xl shadow-gray-900">
          {state.count}
        </h1>

        <button
          onClick={() => dispatch({ type: "increment" })}
          className="text-[#ffffff50] md:text-7xl text-3xl"
        >
          +
        </button>
      </div>
      <form method="POST" action="">
        <input
          placeholder="Enter value"
          type="number"
          onChange={handleChange}
          className="mt-[20px] rounded-lg md:px-[20px] px-[10px] md:py-[5px] py-[2px] bg-[#3b3b3b] border-none text-white"
        />
        <button className="bg-[#ffffff50] md:px-[30px] px-[15px] md:py-[5px] py-[2px] md:mt-[20px] mt-[10px] text-white rounded-lg md:ml-[20px] ml-[10px]">
          Set value
        </button>
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
