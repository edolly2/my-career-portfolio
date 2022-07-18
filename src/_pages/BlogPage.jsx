import Button from '../_components/Button';
import styled from 'styled-components';
const BlogPageContent = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BlogPage = () => {
  return (
    <BlogPageContent>
      <Button btnText='Blog' />
    </BlogPageContent>
  );
};

export default BlogPage;
