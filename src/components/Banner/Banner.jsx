const Banner = ({ inProgress }) => {
  return (
    <div className="md:flex items-center justify-between gap-8">
      <div className="mb-5 py-20 px-60 rounded-md text-center text-xl text-white border-0 bg-gradient-to-br from-purple-700 via-purple-500 to-purple-400">
        <h4>In-Progress</h4>
        <span className="font-semibold">{inProgress}</span>
      </div>
      <div className="mb-5 py-20 px-60 rounded-md text-center text-xl text-white border-0 bg-gradient-to-bl from-green-700 via-green-500 to-green-400">
        <h4>Resolved</h4>
        <span className="font-semibold">0</span>
      </div>
    </div>
  );
};

export default Banner;
