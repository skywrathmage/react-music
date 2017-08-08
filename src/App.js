import React, { Component } from 'react';
import PlayList from './containers/PlayList';
import Media from './containers/Media';
import playList from './data'
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            video: playList[0]
        };
    }

    handleVideoClick = (id) => {
        this.setState({ video: playList.find(vd => vd.id === id) });
    };

    handleVideoEnd = () => {
        let index = playList.findIndex(vd => vd.id === this.state.video.id);

        if (index < playList.length - 1) {
            this.setState({ video: playList[index + 1] });
        } else {
            this.setState({ video: playList[0] });
        }
    };

    render() {
        const video = this.state.video;
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="cold-lg-8 col-md-7 col-xs-12 col-sm-7  ">
                        <Media video={video} handleVideoEnd={this.handleVideoEnd} />
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-12 col-sm-4  ">
                        <PlayList playList={playList} handleVideoClick={this.handleVideoClick} selectedId={video.id} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
