import React, { ElementType } from "react";
import "./GradientText.css";

type GradientProp = {
  children: React.ReactNode;
  classes?: string;
  duration?: number;
  as?: ElementType;
};

const GradientText = ({
  children,
  classes,
  duration = 15,
  as: Tag = "div",
}: GradientProp) => {
  
  const gradientTextStyle = {
    WebkitAnimation: `GradientAnimation ${duration}s ease infinite`,
    MozAnimation: `GradientAnimation ${duration}s ease infinite`,
    animation: `GradientAnimation ${duration}s ease infinite`,
  };

  return (
    <Tag style={gradientTextStyle} className={`gradient-text ${classes}`}>
      {children}
    </Tag>
  );
};

export default GradientText;
