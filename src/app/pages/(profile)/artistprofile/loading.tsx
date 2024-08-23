export default function Loading() {
    return (
      <div className="flex flex-col items-center gap-4 md:gap-10 animate-pulse">
        <div className="w-full max-w-[1120px] h-[356px] bg-gray-200 rounded-xl"></div>
        <div className="w-full max-w-[1120px] h-64 bg-gray-200 rounded-xl"></div>
        <div className="w-full max-w-[1120px] h-80 bg-gray-200 rounded-xl"></div>
        <div className="w-full max-w-[1120px] h-96 bg-gray-200 rounded-xl"></div>
      </div>
    )
  }