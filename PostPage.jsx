import React, { useState } from 'react';
import { Container, Segment, Form, Radio } from 'semantic-ui-react'; // Import Radio component
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import './PostPage.css'; // Adjust the path to match the location of your CSS file

const PostPage = () => {
  const [postType, setPostType] = useState('question'); // Default to 'question'

  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
   };

  return (
    <Container>
      <Segment>
        <Form>
          <Form.Field>
            <label>Post Type:</label>
            <Radio
              label="Question"
              name="postType"
              value="question"
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            <Radio
              label="Article"
              name="postType"
              value="article"
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
          </Form.Field>
        </Form>
      </Segment>
      {postType === 'question' ? <QuestionForm /> : <ArticleForm />}
      {/* Other components and UI elements can be added here */}
    </Container>
  );
};

export default PostPage;
