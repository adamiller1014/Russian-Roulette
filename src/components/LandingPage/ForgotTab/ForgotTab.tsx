const ForgotTab = () => {
  return (
    <div
      className="flex flex-row
        h-[40px]
        border-t-[1px] border-[#1c2127]"
    >
      <button
        className="h-full flex justify-center items-center
            text-[#f8bf60] flex-1 border-r-[1px] border-[#1c2127]"
      >
        Forgot Password?
      </button>
      <button
        className="h-full flex justify-center items-center
            text-[#f8bf60] flex-1 border-r-[1px] border-[#1c2127]"
      >
        Create an Account?
      </button>
    </div>
  );
};

export default ForgotTab;
