import React from "react";
import ListItem from "./ListItem.jsx";
//import "./App.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="commentlist">
        <div className="cooment-msg">
          <ul>
            {this.props.commentData.map((item, i) => (
              <ListItem key={i} value={item} bg_color={this.props.color[i]} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Index;
