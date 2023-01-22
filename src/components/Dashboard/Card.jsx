import React from "react";

function Index() {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="w-11/12 mt-6 ml-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl py-2 pl-6 flex items-start shadow">
          <div className="pl-3 pr-10 mt-1">
            <h3 className="font-semibold leading-4 text-gray-700 dark:text-gray-700 text-base">
              Today's Sale
            </h3>
            <div className="flex items-end mt-2">
              <h2 className="text-indigo-700 dark:text-black text-2xl leading-normal font-bold">
                $12,426
              </h2>
              <div className="flex items-center  ml-36">
                <p className="-mt-9 text-green-400 text-base tracking-wide font-bold leading-normal pl-1">
                  7.2% ⬆
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white  rounded-xl py-2 pl-6 flex items-start shadow">
          <div className="pl-3 pr-10 mt-1">
            <h3 className="font-semibold leading-4 text-gray-800 dark:text-gray-800 text-base">
              Total Sale
            </h3>
            <div className="flex items-end mt-2">
              <h2 className="text-indigo-700 dark:text-black text-2xl leading-normal font-bold">
                $2,38,485
              </h2>
              <div className="flex items-center ml-32">
                <p className="-mt-9 text-red-400 text-base tracking-wide font-bold leading-normal pl-1">
                  7.2% ⬇
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white  rounded-xl py-2 pl-6 flex items-start shadow">
          <div className="pl-3 pr-10 mt-1">
            <h3 className="font-semibold leading-4 text-gray-800 dark:text-gray-800 text-base">
              Total Sales
            </h3>
            <div className="flex items-end mt-2">
              <h2 className="text-indigo-700 dark:text-black text-2xl leading-normal font-bold">
                84,382
              </h2>
              <div className="flex items-center  ml-36">
                <p className="-mt-9 text-green-400 text-base tracking-wide font-bold leading-normal pl-1">
                  7.2% ⬆
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl py-2 pl-6 flex items-start shadow">
          <div className="pl-3 pr-10 mt-1">
            <h3 className="font-semibold leading-4 text-gray-800 dark:text-gray-800 text-base">
              Profit Earned
            </h3>
            <div className="flex items-end mt-2">
              <h2 className="text-indigo-700 dark:text-black text-2xl leading-normal font-bold">
                33,493
              </h2>
              <div className="flex items-center  ml-36">
                <p className="-mt-9 text-green-400 text-base tracking-wide font-bold leading-normal pl-1">
                  7.2% ⬆
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default Index;
