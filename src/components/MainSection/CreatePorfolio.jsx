import PlusIcon from "../../assets/icons/plus.png";

const CreatePorfolio = () => {
  return (
    <div className="w-[360px] h-[120px] ml-[10px] mt-[45px] border border-gray-200 rounded-xl justify-center text-center p-[15px]">
      <div
        className="text-gray-500 text-[14px] font-semibold"
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
      >
        Create a portfolio to view your investments in one place
      </div>
      <button className="mt-2 flex items-center justify-center space-x-2 rounded-full text-[14px] text-blue-600 w-full py-2 border border-gray-200">
        <img src={PlusIcon} alt="Add" className="w-5 h-5" />
        <span>New Portfolio</span>
      </button>
    </div>
  );
};

export default CreatePorfolio;
