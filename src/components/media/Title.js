import React from 'react';
 
const Title = ({title, subTitle}) => (
    <div className="title">
        <div className="avatar circle-text">
            <div>{title[0]}</div>
        </div>
        <div className="title-text">
            <h5 className="card-title">{title}</h5>
            <h8 className="card-subtitle mb-2 text-muted">{subTitle}</h8>
        </div>
    </div>
)
 
export default Title;