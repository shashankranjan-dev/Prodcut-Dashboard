const Index = () => {
  return (
    <div className="py-6 ml-4 max-w-lg w-full">
      <div className=" bg-white shadow rounded-lg p-9">
        <div className="flex items-center justify-between">
          <p className="text-base font-bold leading-5 text-gray-800 pr-40">
            Transactions
          </p>
        </div>
        <p className="text-sm leading-normal text-gray-500 pt-1">
          Lorem ipsum dollar set atis
        </p>

        <div className="flex items-start justify-between mt-3 w-full">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full">
              <img
                src="https://cdn.tuk.dev/assets/components/misc/profile-img-1.png"
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-normal text-gray-800">
                Sandra Rogers
              </p>
              <p className="text-xs leading-3 pt-1 text-gray-600">
                www@exapmle.com
              </p>
            </div>
          </div>
          <p className="text-sm font-medium leading-normal text-right text-red-700">
            $12,847
          </p>
        </div>
        <div className="flex items-start justify-between mt-3 w-full">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <img
                src="https://cdn.tuk.dev/assets/components/misc/RT.png"
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-normal text-gray-800">
                Raymond Tusk
              </p>
              <p className="text-xs leading-3 pt-1 text-gray-600">
                www@exapmle.com
              </p>
            </div>
          </div>
          <p className="text-sm font-medium leading-normal text-right text-red-700">
            $11,847
          </p>
        </div>
        <div className="flex items-start justify-between mt-3 w-full">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <img
                src="https://cdn.tuk.dev/assets/components/misc/JR.png"
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-normal text-gray-800">
                Jane Roberts
              </p>
              <p className="text-xs leading-3 pt-1 text-gray-600">
                www@exapmle.com
              </p>
            </div>
          </div>
          <p className="text-sm font-medium leading-normal text-right text-red-700">
            $21,847
          </p>
        </div>
        <div className="flex items-start justify-between mt-4 w-full">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <img
                src="https://cdn.tuk.dev/assets/components/misc/profile-img-2.png"
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-normal text-gray-800">
                Maia Kelly
              </p>
              <p className="text-xs leading-3 pt-1 text-gray-600">
                www@exapmle.com
              </p>
            </div>
          </div>
          <p className="text-sm font-medium leading-normal text-right text-red-700">
            $2,847
          </p>
        </div>

        <p className="font-semibold text-sm text-gray-500 mt-8">
          See all Customers {">"}
        </p>
      </div>
    </div>
  );
};
export default Index;
