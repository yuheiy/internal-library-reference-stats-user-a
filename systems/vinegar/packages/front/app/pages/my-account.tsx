import React from 'react';
import { Tabs, Form, Input, Button, Table, Typography } from 'antd';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
}

const orders: Order[] = [
  { id: '1001', date: '2024-07-15', total: 45.99, status: 'Delivered' },
  { id: '1002', date: '2024-07-22', total: 32.50, status: 'Processing' },
  // Add more orders...
];

const MyAccount: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Updated profile:', values);
    // Here you would typically send the updated profile to a server
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (total: number) => `$${total.toFixed(2)}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div>
      <Title>My Account</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <Form
            form={form}
            name="profile"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Profile
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Order History" key="2">
          <Table columns={columns} dataSource={orders} rowKey="id" />
        </TabPane>
        <TabPane tab="Preferences" key="3">
          <Paragraph>
            Set your preferences for notifications, newsletters, and more.
          </Paragraph>
          {/* Add preference settings here */}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default MyAccount;
