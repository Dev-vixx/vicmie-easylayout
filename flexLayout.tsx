import React, { useEffect, useRef } from "react";
import style from "./styles/flex-layout.module.css";

interface Props {
  justifyContent?: string;
  justifyItems?: string;
  alignItems?: string;
  flexDirection?: string;
  flexFlow?: string;
  flexWrap?: string;
  height?: string;
  className?: string;
}

export const FlexLayout: React.FC<Props> = ({
  justifyContent,
  justifyItems,
  alignItems,
  flexDirection,
  flexFlow,
  children,
  flexWrap,
  className = "",
  height,
}) => {
  // using a ref to gain access to the element root node in the DOM
  let elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if the element ref is not null
    // then perform the below operations

    if (null !== elementRef.current) {
      elementRef.current.style.justifyContent = justifyContent || "inherit";
      elementRef.current.style.justifyItems = justifyItems || "inherit";
      elementRef.current.style.flexDirection = flexDirection || "row";
      elementRef.current.style.alignItems = alignItems || "inherit";
      elementRef.current.style.flexFlow = flexFlow || "inherit";
      elementRef.current.style.flexWrap = flexWrap || "inherit";
      elementRef.current.style.height = height || "max-content";
    }
  }, [
    alignItems,
    flexDirection,
    flexFlow,
    flexWrap,
    height,
    justifyContent,
    justifyItems,
  ]);
  return (
    <div className={`${style.flex} ${className}`} ref={elementRef}>
      {children}
    </div>
  );
};

// export default FlexLayout;

interface ChildProps {
  justifySelf?: string;
  className?: string;
  alignSelf?: string;
  flex?: string;
  order?: number;
}

/**
 *
 * @description  this component is only usable in the care of a flexlayout component
 * @returns flex child element
 */
export const FlexChild: React.FC<ChildProps> = ({
  children,
  justifySelf = "auto",
  alignSelf = "auto",
  className = "",
  flex = "",
  order = 0,
}) => {
  let flexChildRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (null !== flexChildRef.current) {
      flexChildRef.current.style.justifySelf = justifySelf;
      flexChildRef.current.style.alignSelf = alignSelf;
      if (flex) {
        flexChildRef.current.style.flex = flex;
      }
      if (order) {
        flexChildRef.current.style.order = order.toString();
      }
    }
  });

  return (
    <div ref={flexChildRef} className={`${style.flex_child} ${className}`}>
      {children}
    </div>
  );
};
