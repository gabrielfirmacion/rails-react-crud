var Posts = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World</h1>
        <NewForm />
        <PostList data={this.props.data} />
      </div>
    )
  }
});

var NewForm = React.createClass({
  render: function() {
    return (
      <div className="newForm">
        <input ref='name' placeholder='Enter the name of the Post' />
        <input ref='description' placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  },
  handleClick: function() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/post',
      type: 'POST',
      data: { post: {name: name, description: description } },
      success: (response) => {
        console.log("added new item")
      }
    })
  }
});

var PostList = React.createClass({
  render: function() {
    var posts = this.props.data.map((post, i) => {
      return (
        <div className="post" key={i}>
          <h2>{post.name}</h2>
          <p>{post.description}</p>
        </div>
      )
    });
    return (<div className="PostList">
      {posts}
    </div>)
  }
});

