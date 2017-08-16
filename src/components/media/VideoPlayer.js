import React, { Component } from 'react';
 
class VideoPlayer extends Component {    
    componentDidUpdate() {
        this.refs.video.load();
        this.refs.video.play();
    }
 
    render() {
        const { photo, url, handleVideoEnd } = this.props;
 
        return (
            <video ref="video" onEnded={handleVideoEnd} className="video-container video-container-overlay" autoPlay="true" controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen', 'next']}>
                <source src={url} type="video/mp4" />
            </video>
 
        );
    }
}
 
export default VideoPlayer;
 