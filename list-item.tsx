import React, { useEffect, useRef } from "react";
import style from "./styles/list-item.module.css";
interface Props {
  type?: string;
  noList?: boolean;
  height?: string;
}

/**
 *
 * @returns a <List />
 * @param Children
 * @summary this component is the basic component for list types
 */
export const ListItem: React.FC<Props> = ({
  children,
  type = "ul",
  noList,
  height = "max-content",
}) => {
  let ulRef = useRef<HTMLUListElement>(null);
  let olRef = useRef<HTMLOListElement>(null);
  //component did mount
  //
  useEffect(() => {
    //   if the list item is in the dom
    //then run this functions
    if (null !== ulRef.current) {
      ulRef.current.style.height = height;
      if (noList) {
        ulRef.current.style.listStyleType = "none";
      }
    }
    if (null !== olRef.current) {
      olRef.current.style.height = height;
      if (noList) {
        olRef.current.style.listStyleType = "none";
      }
    }
  });

  return (
    <>
      {type === "ul" && <ul ref={ulRef}>{children}</ul>}
      {type === "ol" && <ol ref={olRef}>{children}</ol>}
    </>
  );
};

// export default ListItem;

interface IProps {
  title?: string;
  icon?: any;
}

export const List: React.FC<IProps> = ({ children, title = "", icon }) => {
  return (
    <li title={title}>
      {" "}
      {icon && <small className={style.list_icon}>{icon}&#160;</small>}{" "}
      {children}
    </li>
  );
};
