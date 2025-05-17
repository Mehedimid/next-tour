const loading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-gray-100 z-50">
      <div className="relative w-20 h-20">
        {/* Circular Progress Indicator */}
      </div>
      <div className="mt-4 text-2xl font-semibold text-gray-700">
        <span className="travil-char">T</span>
        <span className="travil-char">R</span>
        <span className="travil-char">A</span>
        <span className="travil-char">V</span>
        <span className="travil-char">I</span>
        <span className="travil-char">L</span>
      </div>
      <div className="text-sm text-gray-500">LOADING</div>
    </div>
  );
};

export default loading;
