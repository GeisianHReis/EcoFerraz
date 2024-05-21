import styled from 'styled-components';

export const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const BlogImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 20px;
`;

export const BlogTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
`;

export const BlogContent = styled.div`
  font-size: 1.2em;
  line-height: 1.6;
  text-align: justify;
`;
