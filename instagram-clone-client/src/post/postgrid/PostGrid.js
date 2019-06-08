import React, { Component } from "react";
import { Empty, List } from "antd";
import LoadingIndicator from "../../common/LoadingIndicator";

class PostGrid extends Component {
  state = { isLoading: false };

  componentDidMount = () => {
    this.setState({ isLoading: true });
    this.props.onGetUserPosts();
    this.setState({ isLoading: false });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }

    if (!Array.isArray(this.props.posts) || !this.props.posts.length) {
      return (
        <Empty
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
          description={<span>No Posts Yet</span>}
        />
      );
    }

    return (
      <div>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={this.props.posts}
          renderItem={item => (
            <List.Item>
              <img width="375" height="375" alt={item.id} src={item.imageUrl} />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default PostGrid;
