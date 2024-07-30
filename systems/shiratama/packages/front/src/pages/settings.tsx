import React from 'react';
import { Typography, Form, Input, Switch, Select, Button } from 'antd';

const { Title } = Typography;
const { Option } = Select;

interface SettingsFormValues {
  email: string;
  language: string;
  notifications: boolean;
  theme: string;
}

const Settings: React.FC = () => {
  const onFinish = (values: SettingsFormValues) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <Title>設定</Title>
      <Form name="settings" onFinish={onFinish} layout="vertical">
        <Form.Item name="email" label="メールアドレス" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="language" label="言語">
          <Select defaultValue="japanese">
            <Option value="japanese">日本語</Option>
            <Option value="english">English</Option>
          </Select>
        </Form.Item>
        <Form.Item name="notifications" label="通知" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item name="theme" label="テーマ">
          <Select defaultValue="light">
            <Option value="light">ライト</Option>
            <Option value="dark">ダーク</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            設定を保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Settings;
