const Banner = ({ inProgressCount, resolveCount }) => {
  return (
    <div className="lg:flex items-center justify-between gap-8 mt-20">
      <div className="mb-5 mx-8 lg:mx-0 py-20 px-60 rounded-md text-center text-xl text-white border-0  bg-gradient-to-br from-purple-700 via-purple-500 to-purple-400">
        <h4>In-Progress</h4>
        <span className="font-semibold">{inProgressCount}</span>
      </div>
      <div className="mb-5 mx-8 lg:mx-0 py-20 px-60 rounded-md text-center text-xl text-white border-0 bg-gradient-to-bl from-green-700 via-green-500 to-green-400">
        <h4>Resolved</h4>
        <span className="font-semibold">{resolveCount}</span>
      </div>
    </div>
  );
};

export default Banner;
