import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPostContainer, BlogImage, BlogTitle, BlogContent } from '../Blog/style';
import plasticoImg from '../../assets/plastico.jpeg';
import papelImg from '../../assets/papel.jpg';
import metalImg from '../../assets/metais.jpg';
import vidroImg from '../../assets/vidro.jpg';

const BlogList = () => {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Reciclagem de Papel",
      image: papelImg,
      content: "A reciclagem de papel é o processo de transformar...",
      slug: "papel"
    },
    {
      id: 2,
      title: "Reciclagem de Plástico",
      image: plasticoImg,
      content: "A reciclagem de plástico é o processo de transformar...",
      slug: "plastico"
    },
    {
      id: 3,
      title: "Reciclagem de Metal",
      image: metalImg,
      content: "A reciclagem de metal é o processo de transformar...",
      slug: "metal"
    },
    {
      id: 4,
      title: "Reciclagem de Vidro",
      image: vidroImg,
      content: "A reciclagem de vidro é o processo de transformar...",
      slug: "vidro"
    }
  ]);

  return (
    <div>
      {blogPosts.map(post => (
        <Link key={post.id} to={`/blog/${post.slug}`}>
          <BlogPostContainer>
            <BlogImage src={post.image} alt={post.title} />
            <BlogTitle>{post.title}</BlogTitle>
            <BlogContent>{post.content}</BlogContent>
          </BlogPostContainer>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
