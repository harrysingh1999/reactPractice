import withCounter from "./withCounter";

function HOCCounter({ count, incrementCount }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-6">
        {" "}
        Demonstration of Higher Order Component{" "}
      </h1>
      <p>Count is: {count}</p>
      <button onClick={incrementCount}> + </button>
    </div>
  );
}

export default withCounter(HOCCounter);
