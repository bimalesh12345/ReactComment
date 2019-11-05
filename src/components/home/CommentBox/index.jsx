import React from "react";
//import "./App.css";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      data: {},
      error: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ""
    });
  };
  commentSubmit = () => {
    if (this.state.comment) {
      this.props.submitcomment(this.state.comment);
      this.setState({ comment: "" });
    } else {
      this.setState({ error: "error" });
    }
  };
  render() {
    return (
      <div className="commentbox">
        <div className="comment-txt">
          <h2 className="head-title">Comment Here</h2>
          <div className="cmt-txt">
            <input type="text" />
            <textarea
              className={this.state.error}
              placeholder="Add Comment.."
              maxLength="200"
              name="comment"
              value={this.state.comment}
              onChange={e => this.handleChange(e)}
            ></textarea>
            <input
              type="button"
              value="Submit"
              onClick={() => this.commentSubmit()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
