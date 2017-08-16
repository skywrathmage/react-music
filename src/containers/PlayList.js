import React, { Component } from 'react';
import PlayListItem from '../components/list/PlayListItem';
 
const PlayList = ({playList, handleVideoClick, selectedId}) => {
        return (
            <div className="list-group">
                {
                    playList.map(vd => (
                        <PlayListItem video={vd} handleVideoClick={handleVideoClick} key={vd.id} selected={selectedId===vd.id} />
                    ))
                }
            </div>
        );
}
 
export default PlayList;