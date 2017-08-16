    import React, { Component } from 'react';
    import PlayList from './containers/PlayList';
    import Media from './containers/Media';
    import videoService from './service/video-service';
    import './App.css';
     
    class App extends Component {
        constructor(props) {
            super(props);
            this.state = {
                video: null
            };
            videoService.getData().then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            }).then((videos) => {
                this.playList = videos;
                this.setState({ video: videos[0] });
            });
        }
     
        handleVideoClick = (id) => {
            this.setState({ video: this.playList.find(vd => vd.id === id) });
        };
     
        handleVideoEnd = () => {
            let index = this.playList.findIndex(vd => vd.id === this.state.video.id);
     
            if (index < this.playList.length - 1) {
                this.setState({ video: this.playList[index + 1] });
            } else {
                this.setState({ video: this.playList[0] });
            }
        };
     
        render() {
            const video = this.state.video;
            const playList = this.playList;
            return (
                <div className="container-fluid">
                    {video &&
                        <div className="row justify-content-md-center">
                            <div className="cold-lg-8 col-md-7 col-xs-12 col-sm-7  ">
                                <Media video={video} handleVideoEnd={this.handleVideoEnd} />
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-12 col-sm-4  ">
                                <PlayList playList={playList} handleVideoClick={this.handleVideoClick} selectedId={video.id} />
                            </div>
                        </div>
                    }
                </div>
            );
        }
    }
     
    export default App;