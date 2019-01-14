import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'scss/components/post.scss';

class Post extends Component {

    render(){
            return(
                <Link to={`/post/${this.props.id}`} className="ll-post">  
                    <div className="ll-imageBox"></div>
                    {this.props.name}
                </Link>
        )
    }
}

export default Post;