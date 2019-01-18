import React, { Component } from 'react';
import axios from 'axios';


class Write extends Component {
    state = {
      username : '',
      title : '',
      content : '',
      img_url : '',
      created : ''
    }
    

  onWrite = () => {

    const {username, title, content, img_url, created} = this.state;
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = mm + '/' + dd + '/' + yyyy;
    
    axios.post('http://localhost:4000/posts/add', {
      username : username,
      title : title,
      content : content,
      img_url : img_url,
      created : today
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
    const {username, title, content, img_url, created} = this.state;
    return (
      <div>
          <h1>Write</h1>
          USERNAME : <input type="text" value={username} name='username' onChange={this.handleChange}/>
          TITLE : <input type="text" value={title} name='title' onChange={this.handleChange}/>
          CONTENT : <textarea rows="5" cols="20" value={content} name='content' onChange={this.handleChange}/>
          IMG_URL : <input type="text" value={img_url} name='img_url' onChange={this.handleChange}/>
          <button onClick={this.onWrite}>Done</button>
      </div>
    );
  }
}

export default Write;
