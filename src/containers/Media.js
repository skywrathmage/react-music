import React, { Component } from 'react';
import VideoPlayer from '../components/media/VideoPlayer';
import Title from '../components/media/Title';
import Content from '../components/media/Content';

class Media extends Component {      
    render() {        
        const {video} = this.props;

        return (
            <div className="card">
                <VideoPlayer photo={video.photo} url={video.url} handleVideoEnd={this.props.handleVideoEnd}/>
                <div className="card-block">
                    <Title title={video.title} subTitle={video.subTitle} />
                    <Content content={video.content} shortContent={video.shortContent} />
                </div>
            </div>
        );
    }
}

export default Media;
