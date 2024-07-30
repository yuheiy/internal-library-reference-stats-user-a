import React, { useState } from "react";
import {
  Card,
  Rate,
  Pagination,
  Typography,
  Tag,
  Row,
  Col,
  Modal,
  List,
  Button,
} from "antd";

const { Title, Paragraph } = Typography;

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  rating: number;
  difficulty: string;
  prepTime: string;
  imageUrl: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Balsamic Glazed Chicken",
    description:
      "A delicious and easy chicken dish with a rich balsamic glaze.",
    ingredients: [
      "4 chicken breasts",
      "1/2 cup balsamic vinegar",
      "2 tbsp honey",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Mix balsamic vinegar, honey, and garlic in a bowl.",
      "Season chicken breasts with salt and pepper.",
      "Pour the mixture over the chicken and marinate for 30 minutes.",
      "Preheat oven to 375°F (190°C).",
      "Bake chicken for 25-30 minutes or until cooked through.",
      "Serve with the remaining glaze drizzled over the top.",
    ],
    rating: 4.5,
    difficulty: "Easy",
    prepTime: "45 minutes",
    imageUrl: "https://example.com/balsamic-chicken.jpg",
  },
  {
    id: 2,
    name: "Apple Cider Vinegar Salad Dressing",
    description:
      "A tangy and healthy salad dressing perfect for any green salad.",
    ingredients: [
      "1/4 cup apple cider vinegar",
      "1/4 cup extra virgin olive oil",
      "1 tbsp Dijon mustard",
      "1 tbsp honey",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Whisk together apple cider vinegar, olive oil, Dijon mustard, and honey in a bowl.",
      "Season with salt and pepper to taste.",
      "Adjust sweetness or acidity according to your preference.",
      "Store in an airtight container in the refrigerator for up to a week.",
    ],
    rating: 4.2,
    difficulty: "Easy",
    prepTime: "10 minutes",
    imageUrl: "https://example.com/acv-dressing.jpg",
  },
  // Add more recipes here...
];

const Recipes: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const pageSize = 6;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showRecipeDetails = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedRecipe(null);
  };

  const paginatedRecipes = recipes.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <Title>Vinegar-Based Recipes</Title>
      <Paragraph>
        Discover delicious recipes that showcase the versatility of vinegar in
        cooking.
      </Paragraph>
      <Row gutter={[16, 16]}>
        {paginatedRecipes.map((recipe) => (
          <Col xs={24} sm={12} md={8} key={recipe.id}>
            <Card
              hoverable
              cover={<img alt={recipe.name} src={recipe.imageUrl} />}
              onClick={() => showRecipeDetails(recipe)}
            >
              <Card.Meta
                title={recipe.name}
                description={
                  <>
                    <Paragraph ellipsis={{ rows: 2 }}>
                      {recipe.description}
                    </Paragraph>
                    <Rate disabled defaultValue={recipe.rating} />
                    <Tag color="blue">{recipe.difficulty}</Tag>
                    <Tag color="green">{recipe.prepTime}</Tag>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        total={recipes.length}
        pageSize={pageSize}
        onChange={onPageChange}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
      <Modal
        title={selectedRecipe?.name}
        visible={modalVisible}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
        width={800}
      >
        {selectedRecipe && (
          <>
            <img
              src={selectedRecipe.imageUrl}
              alt={selectedRecipe.name}
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
            <Paragraph>{selectedRecipe.description}</Paragraph>
            <Title level={4}>Ingredients</Title>
            <List
              dataSource={selectedRecipe.ingredients}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Title level={4}>Instructions</Title>
            <List
              dataSource={selectedRecipe.instructions}
              renderItem={(item, index) => (
                <List.Item>
                  <Typography.Text strong>{index + 1}. </Typography.Text> {item}
                </List.Item>
              )}
            />
            <Paragraph>
              <Rate disabled defaultValue={selectedRecipe.rating} />
              <Tag color="blue" style={{ marginLeft: 8 }}>
                {selectedRecipe.difficulty}
              </Tag>
              <Tag color="green">{selectedRecipe.prepTime}</Tag>
            </Paragraph>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Recipes;
