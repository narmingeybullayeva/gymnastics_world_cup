const Tab = () => {
  return (
    <div className="flex gap-6 justify-center pt-4">
      <div className=" border-gray-700 rounded-md border">
        <button className="px-4 py-2 rounded-md border border-gray-700 bg-[#3b2d5b]">
          MAG
        </button>
        <button className="px-4 py-2 rounded-md ">WAG</button>
      </div>
      <div className=" border-gray-700 rounded-md border">
        <button className="px-4 py-2 rounded-md">Qualification</button>
        <button className="px-4 py-2 rounded-md border border-gray-700 bg-[#3b2d5b]">
          Final
        </button>
      </div>
      <div className=" border-gray-700 rounded-md border">
        <button className="px-4 py-2 rounded-md border border-gray-700 bg-[#3b2d5b]">
          Apparatus
        </button>
        <button className="px-4 py-2 rounded-md ">Team</button>
        <button className="px-4 py-2 rounded-md ">All-around</button>
      </div>
      <div className=" border-gray-700 rounded-md border">
        <button className="px-4 py-2 rounded-md border border-gray-700 bg-[#3b2d5b]">
          Seniors
        </button>
        <button className="px-4 py-2 rounded-md ">Juniors</button>
      </div>
    </div>
  );
};

export default Tab;
