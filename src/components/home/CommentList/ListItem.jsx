import React from "react";

function ListItem(props) {
  return <li style={{ backgroundColor: props.bg_color }}>{props.value}</li>;
}
export default ListItem;
