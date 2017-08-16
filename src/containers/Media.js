import React from 'react';
import VideoPlayer from '../components/media/VideoPlayer';
import Title from '../components/media/Title';
import Content from '../components/media/Content';
 
const Media = ({video, handleVideoEnd}) => (
    <div className="card">
        <VideoPlayer photo={video.photo} url={video.url} handleVideoEnd={handleVideoEnd}/>
        <div className="card-block">
            <Title title={video.title} subTitle={video.subTitle} />
            <Content content={video.content} shortContent={video.shortContent} />
        </div>
    </div>
)
 
export default Media;