import React, { Component } from 'react';
import 'react-html5video/dist/styles.css';

class VideoPlayer extends Component {    
    componentDidUpdate() {
        this.refs.video.load();
        this.refs.video.play();
    }

    render() {
        const { photo, url } = this.props;

        return (
            <video ref="video" onEnded={this.props.handleVideoEnd} className="video-container video-container-overlay" autoPlay="true" controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen', 'next']}>
                <source src={url} type="video/mp4" />
            </video>

        );
    }
}

export default VideoPlayer;