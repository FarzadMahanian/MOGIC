import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { retrieveUsers } from "../actions/users";
import UserDetailComponent from "./user-detail.component";

import { Table, Space, Typography, Button } from "antd";

const { Title } = Typography;

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.onCloseDrawer = this.onCloseDrawer.bind(this);

    this.state = {
      isLoading: true,
      selectedUser: null,
      tableColumns: [
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "User Name",
          dataIndex: "username",
          key: "username",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
          render: (text, record) => (
            <Space direction="vertical" size="small">
              <span>{`${record.address.street}, ${record.address.suite}`}</span>
              <span>{`${record.address.city}, ${record.address.zipcode}`}</span>
            </Space>
          ),
        },
        {
          title: "Action",
          key: "action",
          render: (text, record) => (
            <Space size="middle">
              <Button
                type="dashed"
                size="small"
                onClick={() => this.setState({ selectedUser: record })}
              >
                Detail
              </Button>
            </Space>
          ),
        },
      ],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.retrieveUsers();
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ isLoading: false });
    }
  }

  onCloseDrawer() {
    this.setState({ selectedUser: null });
  }

  render() {
    const { users } = this.props;
    const { tableColumns, isLoading, selectedUser } = this.state;
    return (
      <Fragment>
        <Title>LIST OF USERS</Title>
        <Table
          dataSource={users}
          columns={tableColumns}
          rowKey={(record) => record.id}
          loading={isLoading}
          pagination={{ hideOnSinglePage: true }}
        />
        {selectedUser && (
          <UserDetailComponent
            userData={selectedUser}
            onCloseDrawer={this.onCloseDrawer}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { retrieveUsers })(UsersList);
