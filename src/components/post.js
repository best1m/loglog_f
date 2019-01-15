import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'scss/components/post.scss';

class Post extends Component {

    render(){
        return(
            <div className="ll-post-container">
                <Link to={`/post/${this.props.id}`} className="ll-post">  
                <img className="ll-imageBox" src={this.props.src}/>
                <div><span className="ll-font-bold">title</span> : {this.props.name} </div>
                <div className="ll-contents"><span className="ll-font-bold">content</span> : Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                    the 1500s, when an unknown printer took a galley of type and scrambled it to 
                    make a type specimen book. It has survived not only five centuries, but also 
                    the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </Link>
            </div>
        )
    }
}

export default Post;