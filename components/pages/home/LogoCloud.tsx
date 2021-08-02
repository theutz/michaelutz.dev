/* eslint-disable @next/next/no-img-element */
import Image, { ImageProps } from "next/image";
import unityLogo from "public/assets/images/unity-logo.png";
import smartlyLogo from "public/assets/images/smartly-logo.png";
import quenticLogo from "public/assets/images/quentic-logo.png";
import uhsLogo from "public/assets/images/uhs-logo.png";
import ersLogo from "public/assets/images/ers-logo.png";

const companies: readonly ItemProps[] = [
  { src: unityLogo, alt: "Unity" },
  { src: smartlyLogo, alt: "Smartly.io" },
  { src: quenticLogo, alt: "Quentic" },
  { src: uhsLogo, alt: "Universal Hospital Systems" },
  { src: ersLogo, alt: "Emergency Reporting" },
];

export function LogoCloud() {
  return (
    <div className="bg-gray-100">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
          Trusted by over 5 very average small businesses
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {companies.map((company) => (
            <Item key={company.alt} {...company} />
          ))}
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  src: Exclude<ImageProps["src"], string>;
  alt: ImageProps["alt"];
};

function Item({ src, alt }: ItemProps) {
  return (
    <div className="relative filter grayscale opacity-40 h-12 flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
      <Image layout="fill" objectFit="contain" src={src} alt={alt} />
    </div>
  );
}

export default LogoCloud;
