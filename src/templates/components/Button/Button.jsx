const Button = () => {
  return (
    <div className="flex px-3 py-3 md:px-4 sm:py-2 text-slate-700  bg-emerald rounded-md font-bold text-base md:text-xl  cursor-pointer active:bg-seagreen active:text-slate-200">
      <div className="flex items-center sm:mr-3 text-lg"></div>
      <p className="hidden sm:inline">Produto</p>
    </div>
  );
};

export default Button;
