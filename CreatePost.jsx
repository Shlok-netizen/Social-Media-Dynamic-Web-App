import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {

  const{addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");//It pass as an array

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId,postTitle,postBody,reactions,tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>

     <div className="mb-3">
        <label htmlFor="userId" className="form-label">
       Enter your user Id Here
        </label>
        <input
          type="text"
          ref={ userIdElement}
          className="form-control"
          id="userId"
          placeholder=" your user Id "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          ref={ postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

         <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reaction
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder=" How many people reacted to this post "
        />
      </div>

         <div className="mb-3">
        <label htmlFor="tags" className="form-label">
       Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder=" Please enter tag using space... "
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
