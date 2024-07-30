import React from 'react';
import { Typography, Image, Row, Col } from 'antd';

const { Title } = Typography;

const Gallery: React.FC = () => {
  return (
    <div>
      <Title>ギャラリー</Title>
      <Row gutter={[16, 16]}>
        {['白玉ぜんざい', '抹茶白玉パフェ', 'フルーツ白玉', '白玉アイス', '白玉ドリンク', '白玉プリン'].map((item, index) => (
          <Col span={8} key={index}>
            <Image
              src={`/api/placeholder/300/200`}
              alt={item}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
