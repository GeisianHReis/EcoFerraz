import { useParams } from 'react-router-dom';
import plasticoImg from '../../assets/plastico.jpeg';
import papelImg from '../../assets/papel.jpg';
import metalImg from '../../assets/metais.jpg';
import vidroImg from '../../assets/vidro.jpg';
import { BlogPostContainer, BlogImage, BlogTitle, BlogContent } from './style';

const BlogPost = () => {
  const { postType } = useParams();

  const posts = {
    papel: {
      title: "Reciclagem de Papel",
      image: papelImg,
      content: "A reciclagem de papel é o processo de transformar papel usado ou descartado em novos produtos de papel. É uma prática importante que contribui para a sustentabilidade ambiental e redução do impacto ambiental da produção de papel. A reciclagem de papel é uma responsabilidade de todos. Ao reciclarmos papel, podemos ajudar a proteger o meio ambiente para as futuras gerações."
    },
    plastico: {
      title: "Reciclagem de Plástico",
      image: plasticoImg, 
      content: "A reciclagem de plástico é o processo de transformar resíduos plásticos em novos produtos. É uma prática crucial para minimizar o impacto ambiental do plástico, que representa um grande desafio para o planeta. A reciclagem de plástico é uma responsabilidade compartilhada entre todos. Ao reciclarmos, podemos juntos fazer a diferença e construir um planeta mais limpo e sustentável para as próximas gerações."
    },
    metal: {
      title: "Reciclagem de Metal",
      image: metalImg, 
      content: "A reciclagem de metal é o processo de transformar resíduos metálicos em novos produtos de metal. É uma prática crucial para minimizar o impacto ambiental da indústria metalúrgica, que gera grande quantidade de sucata e contribui para diversos problemas ambientais."
    },
    vidro: {
      title: "Reciclagem de Vidro",
      image: vidroImg, 
      content: "A reciclagem de vidro é o processo de transformar cacos de vidro em novos produtos de vidro, como garrafas, potes, jarras, peças decorativas e até mesmo materiais de construção. É uma prática essencial para reduzir o impacto ambiental da produção de vidro, que utiliza recursos naturais finitos e gera grande quantidade de resíduos."
    }
  };

  const post = posts[postType];

  return (
    <BlogPostContainer>
      <BlogImage src={post.image} alt={post.title} />
      <BlogTitle>{post.title}</BlogTitle>
      <BlogContent>{post.content}</BlogContent>
    </BlogPostContainer>
  );
};

export default BlogPost;
