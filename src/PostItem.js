import React from "react";
import "./PostItem.css"

export default function PostItem(props){
    const handleClick = () =>{
        props.onVote(props.post.id);
    };

    const post = props.post;

    return (
        <li>
            <div>{post.title}</div>
            <div>创建人：<span>{post.author}</span></div>
            <div>创建时间<span>{post.date}</span></div>
            <div>
                <button onClick={handleClick}>点赞</button>
                <span>{post.vote}</span>
            </div>
        </li>
    );

}