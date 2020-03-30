import React from "react";

class CommentBox extends React.Component {
  render() {
    return (
      <form>
        <h4>Add a Comment</h4>
        <textarea />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
