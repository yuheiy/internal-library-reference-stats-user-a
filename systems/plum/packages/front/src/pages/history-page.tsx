import React from 'react';
import { Typography, Timeline, Card, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const historicalEvents = [
  {
    year: '縄文時代',
    event: '日本に自生する梅の種が発見されており、この頃から梅が存在していたと考えられています。'
  },
  {
    year: '奈良時代',
    event: '中国から梅の栽培技術が伝来し、日本で本格的な梅の栽培が始まりました。'
  },
  {
    year: '平安時代',
    event: '梅は和歌や物語の題材として頻繁に登場し、日本文化に深く根付きました。'
  },
  {
    year: '江戸時代',
    event: '梅干しが長期保存食として広く普及し、梅酒の製法も確立されました。'
  },
  {
    year: '明治時代',
    event: '西洋の影響を受け、梅のジャムやシロップなど新しい加工品が登場しました。'
  },
  {
    year: '現代',
    event: '健康食品としての梅の価値が再認識され、さまざまな梅製品が開発されています。'
  }
];

const culturalSignificance = [
  {
    title: '文学での梅',
    content: '『万葉集』や『古今和歌集』など、多くの古典文学作品に梅が詠まれています。'
  },
  {
    title: '美術での梅',
    content: '水墨画や浮世絵など、日本美術において梅は人気のモチーフの一つです。'
  },
  {
    title: '梅と武士道',
    content: '梅は高潔さや忠誠心の象徴とされ、多くの武家の家紋に使われています。'
  }
];

function PlumHistoryPage() {
  return (
    <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Title level={2}>梅の歴史</Title>
      <Paragraph>
        梅は日本の文化や歴史に深く根ざした果実です。その歴史は古く、日本人の生活に長く寄り添ってきました。
      </Paragraph>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Timeline mode="left">
            {historicalEvents.map((event, index) => (
              <Timeline.Item key={index} label={event.year}>
                {event.event}
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
        <Col xs={24} md={12}>
          <Title level={3}>梅の文化的意義</Title>
          {culturalSignificance.map((item, index) => (
            <Card key={index} title={item.title} style={{ marginBottom: 16 }}>
              <Paragraph>{item.content}</Paragraph>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default PlumHistoryPage;
