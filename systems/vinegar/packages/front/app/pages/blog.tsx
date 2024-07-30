import React from 'react';
import { List, Avatar, Space, Typography } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  stars: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Surprising Uses for Vinegar",
    description: "Discover unconventional ways to use vinegar in your daily life...",
    author: "Jane Doe",
    avatar: "https://example.com/jane-avatar.jpg",
    content: "Vinegar is not just for salad dressings...",
    likes: 156,
    comments: 24,
    stars: 4.5
  },
  {
    id: 2,
    title: "The Health Benefits of Apple Cider Vinegar",
    description: "Learn about the numerous health benefits of consuming apple cider vinegar...",
    author: "John Smith",
    avatar: "https://example.com/john-avatar.jpg",
    content: "Apple cider vinegar has been used for centuries...",
    likes: 203,
    comments: 31,
    stars: 4.8
  },
  // Add more blog posts...
];

const IconText = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Space>
    {icon}
    {text}
  </Space>
);

const Blog: React.FC = () => {
  return (
    <div>
      <Title>Vinegar Vista Blog</Title>
      <Paragraph>
        Stay up-to-date with the latest vinegar trends, recipes, and health tips.
      </Paragraph>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={blogPosts}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={<StarOutlined />} text={item.stars.toString()} key="list-vertical-star-o" />,
              <IconText icon={<LikeOutlined />} text={item.likes.toString()} key="list-vertical-like-o" />,
              <IconText icon={<MessageOutlined />} text={item.comments.toString()} key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={`/blog/${item.id}`}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
}

export default Blog;
