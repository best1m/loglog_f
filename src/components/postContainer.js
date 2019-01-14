import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'scss/components/postContainer.scss';

class PostContainer extends Component {

    state = {
        posts : [
            { name : 'kim'},
            { name : 'lee'},
            { name : 'park'},
            { name : 'choi'},
            { name : 'moon'},
            { name : 'bang'},
        ]
    }

    render(){
        const {posts} = this.state

            return(
         <div className="ll-postContainer">
            {posts.map(post =>
                <Link to="/detail" className="ll-post">  
                    <div className="ll-imageBox"></div>
                    {post.name}
                </Link>
            )}
         </div>
        )
    }
}

export default PostContainer;