import React from 'react';
import { Table, Image, Button, Typography, InputNumber } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Aged Balsamic Vinegar",
    description: "12-year aged balsamic vinegar from Modena, Italy",
    price: 24.99,
    stock: 50,
    imageUrl: "https://example.com/aged-balsamic.jpg"
  },
  {
    id: 2,
    name: "Organic Apple Cider Vinegar",
    description: "Raw, unfiltered apple cider vinegar with the mother",
    price: 9.99,
    stock: 100,
    imageUrl: "https://example.com/apple-cider-vinegar.jpg"
  },
  // Add more products...
];

const ProductCatalog: React.FC = () => {
  const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Product) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            width={50}
            src={record.imageUrl}
            alt={text}
            style={{ marginRight: '10px' }}
          />
          {text}
        </div>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Quantity',
      key: 'quantity',
      render: () => <InputNumber min={1} defaultValue={1} />,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button type="primary" icon={<ShoppingCartOutlined />}>
          Add to Cart
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Title>Product Catalog</Title>
      <Paragraph>
        Explore our selection of high-quality vinegars and related products.
      </Paragraph>
      <Table columns={columns} dataSource={products} rowKey="id" />
    </div>
  );
}

export default ProductCatalog;
