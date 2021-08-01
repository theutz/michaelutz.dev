/* eslint-disable @next/next/no-img-element */

export function LogoCloud() {
  return (
    <div className="bg-gray-100">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
          Trusted by over 5 very average small businesses
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
            />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
            />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div className="flex justify-center col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div className="flex justify-center col-span-2 md:col-span-2 md:col-start-4 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoCloud;
