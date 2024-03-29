import React from 'react';


const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.image} alt={props.imageAlt} />
            </a>

            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>

                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>

                <div className="text">
                    {props.comment}
                </div>
            </div>
        </div>
    )
}

export default CommentDetail;