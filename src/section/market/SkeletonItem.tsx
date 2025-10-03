export const SekeletonItem: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div
        className="bg-[#424242] rounded-t-[15px] flex justify-center items-center relative
             min-h-[273px] max-h-[273px] p-[15px] max-lg:min-[180px] max-sm:min-h-[140px] max-lg:max-h-[273px] max-lg:p-[10px] animate-pulse">
        <div className="max-h-[272px] h-full w-full max-w-[400px]"></div>
      </div>

      <div className="bg-[#313237] rounded-b-[20px] p-[20px] pt-[10px] animate-pulse h-[85px]"></div>
    </div>
  );
};
