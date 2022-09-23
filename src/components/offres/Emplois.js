import React from "react";
import Post from "../layout/Post";

const Emplois = ({ openModal, emplois }) => {
  
  

  
  return (
    <>
      <div>
        <div className="emploiWrapper">
          <div className="emplois-title">choisis votre post</div>
          <div className="emplois-posts">
            <ul>
              {emplois.map((post) => (
                <li onClick={openModal}  key={post._id}>
                  {" "}
                  <Post post={post}  />{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emplois;
