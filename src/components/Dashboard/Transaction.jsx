import React, { useState } from "react";
export default function IndexPage() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  return (
    <>
      <div className="flex items-start justify-start py-6">
        <div className="  rounded-lg shadow overflow-x-auto" style={{width: 1120}}>
          <table className=" "style={{width: 1120}}>
            <thead className="dark:bg-white bg-gray-800">
              <tr>
                <td className="text-base font-bold text-gray-800 dark:text-gray-900  sm:py-8 py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <h1>Transactions</h1>
                  </div>
                  <p className="font-semibold text-gray-500 text-xs">
                    Lorem Ipsum Dollar contractor
                  </p>
                </td>
                <td className="text-sm font-bold text-gray-800 dark:text-gray-900 pl-6  sm:pr-6 pr-4"></td>
                <td className="text-sm font-bold text-gray-800 dark:text-gray-900 pl-6  sm:pr-6 pr-4"></td>
                <td className="text-sm font-bold text-gray-800 dark:text-gray-900 pl-6  sm:pr-6 pr-4"></td>

                <td className="text-sm font-bold text-gray-800 dark:text-blue-700 pl-0  sm:pr-6 pr-4">
                  <div className="flex font-bold items-center">
                    See All Transactions {">"}
                  </div>
                </td>
              </tr>
            </thead>
            <tbody className="bg-white ">
              <tr className="border-b border-gray-200 ">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <p className="text-sm leading-tight font-bold bg-green-200 rounded-lg p-2 text-gray-500 dark:text-green-800 pl-3">
                      • Completed
                    </p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="">
                      <p className="text-sm font-bold leading-none text-gray-800 dark:text-gray-800 pb-2">
                        Visacard****4831
                      </p>
                      <p className="text-xs font-semibold leading-3 text-gray-500 dark:text-gray-400">
                        CardPayment
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-bold leading-none text-gray-800 dark:text-gray-800">
                    23.4k
                  </p>
                  <p className="text-xs leading-3 font-semibold text-gray-500 dark:text-gray-400 pt-2">
                    in 24 hours
                  </p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm leading-none font-semibold text-gray-800 dark:text-gray-400">
                    Amazon
                  </p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center pl-10">
                    <p className="text-xl font-semibold leading-none text-gray-800 dark:text-gray-800">
                      ...
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <p className="text-sm leading-tight font-bold bg-green-200 rounded-lg p-2 text-gray-500 dark:text-green-800 pl-3">
                      • Completed
                    </p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="">
                      <p className="text-sm font-bold leading-none text-gray-800 dark:text-gray-800 pb-2">
                        Mastercard****6442
                      </p>
                      <p className="text-xs font-semibold leading-3 text-gray-500 dark:text-gray-400">
                        CardPayment
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-bold leading-none text-gray-800 dark:text-gray-800">
                    78k
                  </p>
                  <p className="text-xs leading-3 font-semibold text-gray-500 dark:text-gray-400 pt-2">
                    in 24 hours
                  </p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-400">
                    Facebook
                  </p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center pl-10">
                    <p className="text-xl font-semibold leading-none text-gray-800 dark:text-gray-800">
                      ...
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <p className="text-sm leading-tight bg-yellow-200 p-2 rounded-lg text-gray-500 dark:text-yellow-800 pl-3">
                      • Pending
                    </p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="">
                      <p className="text-sm font-bold leading-none text-gray-800 dark:text-gray-800 pb-2">
                        Account****882
                      </p>
                      <p className="text-xs font-semibold leading-3 text-gray-500 dark:text-gray-400">
                        CardPayment
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-bold leading-none text-gray-800 dark:text-gray-800">
                    162
                  </p>
                  <p className="text-xs leading-3 font-semibold text-gray-500 dark:text-gray-400 pt-2">
                    in 24 hours
                  </p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-400">
                    Netflix
                  </p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center pl-10">
                    <p className="text-xl font-semibold leading-none text-gray-800 dark:text-gray-800">
                      ...
                    </p>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <p className="text-sm leading-tight bg-red-200 p-2 rounded-lg text-gray-800 dark:text-red-800 pl-3">
                      • Cancelled
                    </p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="">
                      <p className="text-sm font-bold leading-none text-gray-800 dark:text-gray-800 pb-2">
                        Amexcard****5666
                      </p>
                      <p className="text-xs font-semibold leading-3 text-gray-500 dark:text-gray-400">
                        CardPayment
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-bold leading-none text-gray-800 dark:text-gray-800">
                    214
                  </p>
                  <p className="text-xs leading-3 font-semibold text-gray-500 dark:text-gray-400 pt-2">
                    in 24 hours
                  </p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-400">
                    Amazon Prime
                  </p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center pl-10">
                    <p className="text-xl font-semibold leading-none text-gray-800 dark:text-gray-800">
                      ...
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
