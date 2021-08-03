/* eslint-disable @next/next/no-img-element */
import Image, { ImageProps } from "next/image";
import unityLogo from "public/assets/images/unity-logo.png";
import smartlyLogo from "public/assets/images/smartly-logo.png";
import quenticLogo from "public/assets/images/quentic-logo.png";
import uhsLogo from "public/assets/images/uhs-logo.png";
import ersLogo from "public/assets/images/ers-logo.png";
import { classNames } from "utils/classNames";

export const companies: readonly Pick<ItemProps, "src" | "alt">[] = [
  { src: unityLogo, alt: "Unity" },
  { src: smartlyLogo, alt: "Smartly.io" },
  { src: quenticLogo, alt: "Quentic" },
  { src: uhsLogo, alt: "Universal Hospital Systems" },
  { src: ersLogo, alt: "Emergency Reporting" },
];

export function LogoCloud() {
  return (
    <div className="bg-gray-100" data-cy="logo-cloud">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
          Trusted by a handful of former employers
        </p>
        <div
          data-cy="logo-cloud-container"
          className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"
        >
          {companies.map((company, i) => (
            <Item
              key={company.alt}
              {...company}
              current={i + 1}
              length={companies.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  src: Exclude<ImageProps["src"], string>;
  alt: ImageProps["alt"];
  current: number;
  length: number;
};

function Item({ src, alt, current, length }: ItemProps) {
  const isLast = current === length;
  const is2ndToLast = length - 1 === current;

  return (
    <div
      className={classNames(
        "relative filter grayscale opacity-40 h-12 md:col-span-2 flex justify-center lg:col-span-1",
        isLast ? "col-span-2 md:col-start-4" : "col-span-1",
        is2ndToLast && "md:col-start-2"
      )}
    >
      <Image layout="fill" objectFit="contain" src={src} alt={alt} />
    </div>
  );
}

export default LogoCloud;
