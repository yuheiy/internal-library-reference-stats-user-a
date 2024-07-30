import React from 'react';
import { Typography, Timeline, Card } from 'antd';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <div>
      <Title>白玉について</Title>
      <Paragraph>
        白玉は、もち米を粉にして丸めた日本の伝統的な和菓子です。その柔らかな食感と上品な甘さは、
        多くの人々に愛されています。
      </Paragraph>
      <Card title="白玉の歴史">
        <Timeline>
          <Timeline.Item>平安時代：白玉の原型が誕生</Timeline.Item>
          <Timeline.Item>江戸時代：庶民の間で人気に</Timeline.Item>
          <Timeline.Item>明治時代：白玉粉の製造が始まる</Timeline.Item>
          <Timeline.Item>現代：様々なアレンジが登場</Timeline.Item>
        </Timeline>
      </Card>
    </div>
  );
};

export default About;
