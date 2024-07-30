import React from 'react';
import { Typography, List, Card, Row, Col, Calendar, Badge } from 'antd';

const { Title, Paragraph } = Typography;

const festivals = [
  {
    name: '筑波山梅まつり',
    location: '茨城県つくば市',
    date: '2月中旬〜3月中旬',
    description: '筑波山の麓に広がる梅林で開催される祭り。約1,000本の梅が咲き誇ります。'
  },
  {
    name: '湯河原梅林梅まつり',
    location: '神奈川県湯河原町',
    date: '2月上旬〜3月上旬',
    description: '約4,000本の梅が咲く湯河原梅林で開催。梅の香りと温泉を楽しめます。'
  },
  {
    name: '越生梅林梅まつり',
    location: '埼玉県越生町',
    date: '3月上旬〜3月下旬',
    description: '関東最大級の梅林で、約1,000品種、10万本の梅が咲きます。'
  },
  {
    name: '大阪城梅林梅まつり',
    location: '大阪府大阪市',
    date: '2月中旬〜3月中旬',
    description: '大阪城公園内にある梅林で開催。約1,270本の梅が楽しめます。'
  }
];

function getListData(value) {
  const listData = [];
  festivals.forEach((festival) => {
    const [startMonth, startDay] = festival.date.split('〜')[0].split('月');
    if (value.month() === parseInt(startMonth) - 1 && value.date() === parseInt(startDay)) {
      listData.push({ type: 'success', content: festival.name });
    }
  });
  return listData;
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function PlumFestivalPage() {
  return (
    <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Title level={2}>梅祭り情報</Title>
      <Paragraph>
        日本各地で開催される梅祭りの情報です。美しい梅の花と共に、日本の春を楽しみましょう。
      </Paragraph>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <List
            itemLayout="vertical"
            dataSource={festivals}
            renderItem={item => (
              <List.Item>
                <Card title={item.name}>
                  <p><strong>場所：</strong> {item.location}</p>
                  <p><strong>期間：</strong> {item.date}</p>
                  <p>{item.description}</p>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} md={12}>
          <Card title="梅祭りカレンダー">
            <Calendar dateCellRender={dateCellRender} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PlumFestivalPage;
