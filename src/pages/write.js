import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';


class Write extends Component {
    state = {
      username : '',
      title : '',
      content : '',
      image_url : '',
      created : ''
    }
    

  onWrite = () => {

    const {username, title, content, image_url, created} = this.state;
 

    this.setState({
      created : moment().format('YYYY-MM-DD')
    })
    
    axios.post('http://localhost:4000/posts/add', {
      title : title,
      content : content,
      image_url : image_url,
      username : username,
      created : created
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
    console.log(this.state);

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <div>
          <h1>Write</h1>
          USERNAME : <input type="text"name='username' onChange={this.handleChange}/>
          TITLE : <input type="text"  name='title' onChange={this.handleChange}/>
          CONTENT : <textarea rows="5" cols="20"  name='content' onChange={this.handleChange}/>
          IMAGE_URL : <input type="text"  name='image_url' onChange={this.handleChange}/>
          <button onClick={this.onWrite}>Done</button>
      </div>
    );
  }
}

export default Write;
