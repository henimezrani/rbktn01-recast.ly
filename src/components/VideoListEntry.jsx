import exampleVideoData from '../data/exampleVideoData.js';
import App from './App.js';

// var onListItemClick = (event) => {
//   console.log('hey')
//   for (var i = 0 ; i < exampleVideoData.length; i++){
//     if (exampleVideoData[i].id.videoID === event.target.id)
//       this.setState({
//         video: exampleVideoData[i]
//       })
//     }
//   }
// };


var VideoListEntry = ({video, onListItemClick}) => (

  <div className="video-list-entry media" >
    <div className="media-left media-middle">
      <img className="media-object" src={`https://i.ytimg.com/vi/${video.id.videoId}/default.jpg`} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" id={video.id.videoId} onClick={()=>onListItemClick(event)} >{video.snippet.title}</div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
