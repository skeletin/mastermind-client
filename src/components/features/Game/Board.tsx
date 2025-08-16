const Board = () => {
  const grid = Array.from({ length: 40 }, (_, i) => (
    <div key={i} className="flex justify-center items-center w-14 h-14 p-2">
      <button className="text-white text-lg border-slate-700 border-4 rounded-full w-full h-full hover:bg-slate-700 pointer"></button>
    </div>
  ));
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <button className="w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full  hover:bg-slate-700"></button>
        <button className="w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full  hover:bg-slate-700"></button>
        <button className="w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full  hover:bg-slate-700"></button>
        <button className="w-16 h-16 text-white text-lg border-slate-700 border-4 rounded-full  hover:bg-slate-700"></button>
      </div>
      <div className="grid grid-cols-4 grid-rows-10 self-center">{grid}</div>
    </div>
  );
};

export default Board;
