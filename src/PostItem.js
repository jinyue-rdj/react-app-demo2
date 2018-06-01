import React, {Component} from "react"
import like from "./images/like-default.png";
import "./PostItem.css"

export default class PostItem extends Component{
    constructor(props){
        super(props);
        this.state={
            editing:false,
            post:props.post
        };

        this.handleVote=this.handleVote.bind(this);
        this.handleEditPost=this.handleEditPost.bind(this);
        this.handleTitleChange=this.handleTitleChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (this.props.post !== nextProps.post){
            this.setState({post:nextProps.post});
        }
    }

    handleVote(){
        this.props.onVote(this.props.post.id);
    }

    handleEditPost(){
        const editing = this.state.editing;

        if (editing){
            this.props.onSave({
                ...this.state.post,
                date:this.getFormatDate()
            });
        }
        this.setState({
            editing: !editing
        });
    }

    handleTitleChange(e){
        const newPost={...this.state.post, title:e.target.value};
        this.setState({post:newPost});
    }

    getFormatDate(){
    }

    render(){
        const {post} = this.state;
        return(
            <li className='item'>
            <div className='title'>
            {this.state.editing
            ? <form>
                <textarea value={post.title}
                onChange={this.handleTitleChange} />
                </form>
                :post.title}
            </div>
            <div>
                创建人:<span>{post.author}</span>
            </div>
            <div>
                创建时间:<span>{post.date}</span>
            </div>
            <div className='like'>
                <span>
                    <img alt='vote' src={like} onClick={this.handleVote} />
                </span>
                <span>
                    {post.vote}
                </span>
            </div>
            <div>
                <button onClick={this.handleEditPost}>
                {this.state.editing?"保存":"编辑"}
                </button>
            </div>
        </li>
        )
    }


}