import React from 'react';
import { Typography, Form, Input, Button, message } from 'antd';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

function PlumContactPage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    message.success('お問い合わせを送信しました。ありがとうございます！');
    form.resetFields();
  };

  return (
    <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Title level={2}>お問い合わせ</Title>
      <Paragraph>
        梅に関するご質問、ご意見、ご感想などございましたら、以下のフォームよりお気軽にお問い合わせください。
      </Paragraph>
      
      <Form form={form} name="contact" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="お名前"
          rules={[{ required: true, message: 'お名前を入力してください' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="メールアドレス"
          rules={[
            { required: true, message: 'メールアドレスを入力してください' },
            { type: 'email', message: '有効なメールアドレスを入力してください' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="subject"
          label="件名"
          rules={[{ required: true, message: '件名を入力してください' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="message"
          label="メッセージ"
          rules={[{ required: true, message: 'メッセージを入力してください' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            送信
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PlumContactPage;
