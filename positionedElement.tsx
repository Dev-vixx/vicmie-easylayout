import React, { forwardRef, useEffect, useRef, useState } from "react";

interface IProps {
  fixed?: boolean;
  absolute?: boolean;
  relative?: boolean;
  style?: object;
  /**
   * @summary the className is used to receive classnames to the component
   * @description the classnames are CSS classes
   * ```js
   * <PositionedElement className="jumbotron" />
    ```
   */
  className?: any;
  //   moving the element
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export type Ref = HTMLDivElement;

/**
 * @function this component is used for positioning HTMLElements as
 * @param `top, fixed, absolute, relative,bottom,left,right,bottom,style,className`
 *  ```js
  * <PositionedElement className="jumbotron" fixed right={0.3}> 
  *       <div>the test</div> 
  * </PositionedElement>
    ```
 * @returns JSX ELEMENT
 */
export const PositionedElement: React.FC<IProps> = forwardRef<Ref, IProps>(
  (props, ref) => {
    let [position, setPosition] = useState("relative");

    let e = useRef<HTMLDivElement>(null);
    // on component mount, then get the position of the element
    useEffect(() => {
      //   setting the element style here
      if (null !== e.current) {
        e.current.style.position = position;
      }

      if (props.top) {
        if (null !== e.current) {
          e.current.style.top = props.top + "px";
        }
      }

      if (props.left) {
        if (null !== e.current) {
          e.current.style.left = props.left + "px";
        }
      }

      if (props.right) {
        if (null !== e.current) {
          e.current.style.right = props.right + "px";
        }
      }

      if (props.bottom) {
        if (null !== e.current) {
          e.current.style.bottom = props.bottom + "px";
        }
      }

      if (props.absolute) return setPosition("absolute");
      if (props.fixed) return setPosition("fixed");
      if (props.relative) return setPosition("relative");
    }, [
      position,
      props.absolute,
      props.bottom,
      props.fixed,
      props.left,
      props.relative,
      props.right,
      props.top,
    ]);

    return (
      <div
        className={`${
          props.className ? props.className : ""
        } positioned_element`}
        aria-label="container"
        ref={ref || e}
        style={{ ...props.style }}
      >
        {props.children}
      </div>
    );
  }
);

// export default PositionedElement;
