import React from "react";
import "../../styles/css/style.css";
import Commentbox from "./CommentBox/index.jsx";
import CommentList from "./CommentList/index.jsx";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentvalue: [],
      color: []
    };
  }
  commentClick = data => {
    const { commentvalue } = this.state;
    const nextState = [...commentvalue, data];
    this.setState({ commentvalue: nextState });
    this.random_bg_color();
  };
  random_bg_color = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgba(" + x + "," + y + "," + z + ",.5)";

    const { color } = this.state;
    const nextState = [...color, bgColor];
    this.setState({ color: nextState });
  };
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="comment-box">
            <div className="commentbox">
              <Commentbox submitcomment={this.commentClick} />
              <CommentList
                commentData={this.state.commentvalue}
                color={this.state.color}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
