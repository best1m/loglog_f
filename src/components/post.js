import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'scss/components/post.scss';

class Post extends Component {

    render(){
        console.log(this.props);
        return(
            <Link to={`/post/${this.props.id}`} className="ll-post">  
            <img className="ll-imageBox" src={this.props.src}/>
            <div><span className="ll-font-bold">title</span> : {this.props.title} </div>
            <div className="ll-contents"><span className="ll-font-bold">content</span> : {this.props.content}</div>
            </Link>
        )
    }
}

export default Post;