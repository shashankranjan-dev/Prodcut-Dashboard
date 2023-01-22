import React from "react";
export default function IndexPage() {
  return (

        <div className=" bg-white h-full shadow rounded-lg px-8 py-6 mt-6 max-w-lg w-full">
          <div className="flex items-center justify-between">
            <div>
              <p className=" text-base font-bold  text-gray-800 dark:text-gray-900">
                Traffic Sources
              </p>
            </div>
            <div className="sm:ml-28">
              <p className="text-sm text-gray-800 font-semibold dark:text-gray-900">
                Last 7 days
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm leading-3 font-semibold text-gray-500 dark:text-gray-900">
                  Direct
                </p>
                <p className="text-base leading-3 text-right text-gray-800 dark:text-gray-900">
                  60%
                </p>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-6">
                <div className="w-1/2 h-2 bg-blue-500 rounded-full" />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm leading-3 font-semibold text-gray-500 dark:text-gray-900">
                  Referral
                </p>
                <p className="text-base leading-3 text-right text-gray-800 dark:text-gray-900">
                  $5600
                </p>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-6">
                <div className="w-1/6 h-2 bg-blue-500 rounded-full" />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm leading-3 font-semibold text-gray-500 dark:text-gray-900">
                  Social Media
                </p>
                <p className="text-base leading-3 text-right text-gray-800 dark:text-gray-900">
                  320
                </p>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-6">
                <div className="w-2/5 h-2 bg-blue-500 rounded-full" />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm leading-3 font-semibold text-gray-500 dark:text-gray-900">
                  Twitter
                </p>
                <p className="text-base leading-3 text-right text-gray-800 dark:text-gray-900">
                  320
                </p>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-6">
                <div className="w-2/5 h-2 bg-blue-500 rounded-full" />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm leading-3 font-semibold text-gray-500 dark:text-gray-900">
                  Twitter
                </p>
                <p className="text-base leading-3 text-right text-gray-800 dark:text-gray-900">
                  320
                </p>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-6">
                <div className="w-2/5 h-2 bg-blue-500 rounded-full" />
              </div>
            </div>
           
          </div>
        </div>

  );
}
