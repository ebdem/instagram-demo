import React from "react";


export default function UploadButton(){
    return <form className="post_commentBox">
    <input
      className="post_input"
      type="text"
      placeholder="Yorum yaz kanka"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    
    ></input>
    <button 
    disabled={!comment}
    className="post_button"
    type="submit"
    onClick={postComment}
    >
      Post

    </button>
  </form>
}