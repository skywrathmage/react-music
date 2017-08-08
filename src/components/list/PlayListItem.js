import React from 'react';

const PlayListItem = (props) => {
    const {video, handleVideoClick, selected} = props;
    return (
        <a href="#" className={"list-group-item list-group-item-action flex-column align-items-start " + (selected? "select": "")} onClick={() => handleVideoClick(video.id)}>
            <div className="row">
                <div className="col-sm-12 col-md-7">
                    <img src={video.photo} alt={video.name} className="moviePhoto" />
                </div>
                <div className="col-sm-12 col-md-5">
                    <p className="mb-1">{video.title}</p>
                    <small>{video.subTitle}</small>
                </div>
            </div>
        </a>
    );
}

export default PlayListItem;
