import video from "../data/video.js";
import Title from "./Title.js";
import Views from "./Views.js";
import Comments from "./Comments.js";
import Likes from "./Likes.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title title={video.title}/>
      <Views views={video.views} uploadDate={video.createdAt}/>
      <Likes likes={video.upvotes}  dislikes={video.downvotes}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
