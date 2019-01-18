import React, { Component } from 'react';
import Post from 'components/post';
import 'scss/pages/homePage.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Home extends Component {

  componentDidMount(){

      axios.get('http://localhost:4000/posts')
      .then(res =>  console.log(res.data))
      .catch(err => console.log(err))
    
  }

  state = {
    // posts : [
    //     { name : 'kim', id : 1, src : 'http://www.freejupiter.com/wp-content/uploads/2018/08/Superfine-Modern-Surrealism-Art-And-Painting-Ideas-feature.jpg'},
    //     { name : 'lee', id: 2, src : 'https://cdn.uploadvr.com/wp-content/uploads/2016/05/sea-ship-whale.jpg'},
    //     { name : 'park', id : 3, src : 'https://www.demilked.com/magazine/wp-content/uploads/2016/12/french-surrealism-illustrations-guy-billout-15.jpg'},
    //     { name : 'choi' , id : 4, src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2OU7WDxka-d9qqINJh1B17XA9R2BXBWQ8nNjh965lzLBMyVxIA'},
    //     { name : 'moon', id : 5, src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrn6E21kd1XhFGcl2aqyiNPg4Xu1N5pk54OmoRmIPCC7xvefOV'},
    //     { name : 'bang', id : 6, src : 'http://webneel.com/daily/sites/default/files/images/daily/11-2012/surreal-painting-vladimir-kush%20(23).jpg'},
    // ],
    posts : []
}

  render() {
    const {posts} = this.state;
    return (
      <div className="ll-home">
         <Link to="/write">
          <button className="ll-write-button">write</button>
         </Link>
         <div className="ll-post-container">
            {posts.map((post, i) => <Post key={i} name={post.name} id={post.id} src={post.src}/>)}
         </div>
      </div>
    );
  }
}

export default Home;
