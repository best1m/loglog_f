import React, { Component } from 'react';
import Post from 'components/post';
import 'scss/pages/homePage.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Home extends Component {
  state = {
    posts : []
  }

  componentDidMount(){

      axios.get('http://localhost:4000/posts')
      .then(res =>  {
        console.log(res.data);
        this.setState({
          posts : res.data
        })
      })
      .catch(err => console.log(err))
    
  }



  render() {
    const {posts} = this.state;
    return (
      <div className="ll-home">
         <Link to="/postCreatePage">
          <button className="ll-write-button">write</button>
         </Link>
         <div className="ll-post-container">
            {posts.map((post, i) => <Post key={i} title={post.title} content={post.content} src={post.image_url}/>)}
         </div>
      </div>
    );
  }
}

export default Home;
