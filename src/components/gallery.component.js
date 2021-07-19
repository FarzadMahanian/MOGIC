import React, { Component } from "react";
import { connect } from "react-redux";
import { retrievePhotos } from "../actions/photos";

import { LoadingOutlined } from "@ant-design/icons";
import { Modal, Carousel, Typography } from "antd";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      carouselSettings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
      },
    };
  }

  componentDidMount() {
    this.props.retrievePhotos(this.props.albumData.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
    }
  }

  render() {
    const { albumData, onCloseModal, photos } = this.props;
    const { carouselSettings, isLoading } = this.state;
    return (
      <Modal
        title={`GALLERY: ${albumData.title}`}
        width={700}
        visible
        destroyOnClose
        maskClosable={false}
        onCancel={onCloseModal}
        footer={null}
        className="app-gallery"
        centered
      >
        {isLoading ? (
          <div className="app-loading">
            <LoadingOutlined className="loading-icon" />
          </div>
        ) : (
          <Carousel {...carouselSettings}>
            {photos.map((photo) => (
              <div className="gallery-item" key={photo.id}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  style={{ width: "100%" }}
                />
                <Typography.Text>{photo.title}</Typography.Text>
              </div>
            ))}
          </Carousel>
        )}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

export default connect(mapStateToProps, { retrievePhotos })(Gallery);
