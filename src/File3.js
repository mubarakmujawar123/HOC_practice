import UpdatedComp from "./HOC";
const File3 = ({ count, onIncreament }) => {
  return (
    <>
      <h1 onMouseEnter={onIncreament}>File 3</h1>
      <h2>Count: {count}</h2>
    </>
  );
};

export default UpdatedComp(File3);
