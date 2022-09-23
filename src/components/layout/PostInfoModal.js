import React from "react";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import PostInfo from "./PostInfo";

const PostInfoModal = ({ showForm }) => {
  return (
    <div className="myModal">
      <PostInfo  />
      <hr />

      <div className="myModalBottom">
        <div className="left">
          <div>
            Partager cette offre sur :
            <br />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="right">
          <button className="l" onClick={showForm}>
            Postuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInfoModal;
