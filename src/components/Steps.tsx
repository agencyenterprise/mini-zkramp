import React, { FC } from "react";
import { Block, BlockTitle } from "konsta/react";

const HEXAGONS = [
  {
    icon: "select.svg",
    title: "Select an order",
    text: "Select the order that suits you best.",
  },
  {
    icon: "pay.svg",
    title: "Pay the order",
    text: "You can block the order for one hour to pay.",
  },
  {
    icon: "confirm.svg",
    title: "Confirm Payment",
    text: "Prove payment by uploading the email sent by Wise",
  },
  {
    icon: "receive.svg",
    title: "Receive your crypto",
    text: "There is nothing else to be done. AZERO is in your wallet",
  },
];

export const Steps: FC = () => {
  const Hexagon = ({
    icon,
    title,
    step,
    text,
  }: {
    icon: string;
    title: string;
    step: number;
    text: string;
  }) => {
    return (
      <Block strong className="flex flex-col items-start">
        <img src={`/${icon}`} alt={icon} className="w-30 mx-auto" />
        <div className="flex flex-col items-center gap-2">
          <span className="text-center text-xs font-normal uppercase leading-tight ">
            Step {step}
          </span>
          <span className="text-xl font-bold leading-7">{title}</span>
          <p className="text-center text-base font-normal leading-normal ">
            {text}
          </p>
        </div>
      </Block>
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
      {HEXAGONS.map((hexagon, i) => (
        <React.Fragment key={hexagon.title}>
          <Hexagon {...hexagon} step={i + 1} />
          {i !== HEXAGONS.length - 1 && (
            <img
              src="/arrow.svg"
              alt="arrow"
              className="hidden md:block w-26 h-26 ml-2 mt-8"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
