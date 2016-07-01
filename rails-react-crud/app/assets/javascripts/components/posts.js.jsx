var Posts = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World</h1>
        <PostList data={this.props.data} />
      </div>
    )
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