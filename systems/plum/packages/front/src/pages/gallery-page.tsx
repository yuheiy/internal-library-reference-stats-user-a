import React, { useState } from 'react';
import { Typography, Card, Row, Col, Modal } from 'antd';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const images = [
  { src: '/api/placeholder/400/300', title: '満開の梅林', description: '春の訪れを告げる美しい梅の花' },
  { src: '/api/placeholder/400/300', title: '梅の実', description: '初夏を迎え、実をつけた梅の木' },
  { src: '/api/placeholder/400/300', title: '梅干し作り', description: '伝統的な方法で作られる梅干し' },
  { src: '/api/placeholder/400/300', title: '梅酒', description: '香り高い自家製梅酒' },
  { src: '/api/placeholder/400/300', title: '白加賀', description: '優雅な白い花を咲かせる白加賀' },
  { src: '/api/placeholder/400/300', title: '梅ジャム', description: '朝食にぴったりの手作り梅ジャム' },
  { src: '/api/placeholder/400/300', title: '盆栽の梅', description: '小さな鉢で育つ可愛らしい梅の盆栽' },
  { src: '/api/placeholder/400/300', title: '梅の木', description: '古木となった風格ある梅の木' },
];

function PlumGalleryPage() {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const showModal = (image) => {
    setSelectedImage(image);
    setVisible(true);
  };

  return (
    <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Title level={2}>梅のギャラリー</Title>
      <Paragraph>
        美しい梅の花から、おいしそうな梅の加工品まで、梅の魅力あふれる画像をご覧ください。
      </Paragraph>
      
      <Row gutter={[16, 16]}>
        {images.map((image, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              cover={<img alt={image.title} src={image.src} />}
              onClick={() => showModal(image)}
            >
              <Meta title={image.title} description={image.description} />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        visible={visible}
        title={selectedImage?.title}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <img alt={selectedImage?.title} src={selectedImage?.src} style={{ width: '100%' }} />
        <Paragraph>{selectedImage?.description}</Paragraph>
      </Modal>
    </div>
  );
}

export default PlumGalleryPage;
