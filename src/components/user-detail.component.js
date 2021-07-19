import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { retrieveAlbums } from "../actions/albums";
import GalleryComponent from "./gallery.component";

import { LoadingOutlined } from "@ant-design/icons";
import { Drawer, Descriptions, Divider, Space, Tag } from "antd";

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.onCloseModal = this.onCloseModal.bind(this);

    this.state = {
      isLoading: true,
      selectedAlbum: null,
      carouselSettings: {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.retrieveAlbums(this.props.userData.id);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ isLoading: false });
    }
  }

  onCloseModal() {
    this.setState({ selectedAlbum: null });
  }

  render() {
    const { userData, onCloseDrawer, albums } = this.props;
    const { selectedAlbum, isLoading } = this.state;
    return (
      <Fragment>
        <Drawer
          title="USER DETAIL"
          width={500}
          visible={true}
          destroyOnClose={true}
          maskClosable={false}
          onClose={onCloseDrawer}
        >
          <Descriptions title={null} column={1}>
            <Descriptions.Item label="Name">{userData.name}</Descriptions.Item>
            <Descriptions.Item label="Username">
              {userData.username}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {userData.email}
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
              {userData.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Website">
              {userData.website}
            </Descriptions.Item>
            <Descriptions.Item label="Company">
              {userData.company.name}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {`${userData.address.street}, ${userData.address.suite}, ${userData.address.city}, ${userData.address.zipcode}`}
            </Descriptions.Item>
          </Descriptions>
          <Divider orientation="left">Albums</Divider>
          {isLoading && (
            <div className="app-loading">
              <LoadingOutlined className="loading-icon" />
            </div>
          )}
          {!isLoading && albums && (
            <Space direction="vertical">
              {albums.map((album) => (
                <Tag
                  key={album.id}
                  color="processing"
                  onClick={() => this.setState({ selectedAlbum: album })}
                  style={{ cursor: "pointer" }}
                >
                  {album.title}
                </Tag>
              ))}
            </Space>
          )}
        </Drawer>
        {selectedAlbum && (
          <GalleryComponent
            albumData={selectedAlbum}
            onCloseModal={this.onCloseModal}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};

export default connect(mapStateToProps, { retrieveAlbums })(UserDetail);
