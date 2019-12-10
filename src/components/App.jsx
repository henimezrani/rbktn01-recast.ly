import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state: {
      video: exampleVideoData[2]
    };

    this.onListItemClick = this.onListItemClick.bind(this);
  }

  var onListItemClick = (event) => {
    console.log('hey')
    // for (var i = 0 ; i < exampleVideoData.length; i++){
    //   if (exampleVideoData[i].id.videoID === event.target.id)
    //     this.setState({
    //       video: exampleVideoData[i]
    //     })
    //   }
    // }
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {exampleVideoData} onListItemClick={this.onListItemClick}/>
          </div>
        </div>
      </div>
    )
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
