import gql from 'graphql-tag';
import SFC from '../lib/SFC';
import Img from "gatsby-image";
import { BlogPost as BlogPostInterface } from './types/BlogPost';

//

const BlogPost: SFC<BlogPostInterface> = ({ title, coverImage }) => {
  return (
    <div className="blogpost">
      {coverImage && coverImage.fluidImage &&
        <>
          <Img fluid={coverImage.fluidImage} />
          <img className="blurhash" src={coverImage.fluidImage.base64} style={{ width: '100%' }} />
          <div className="title">{title}</div>
        </>
      }
      <style jsx>{`
        .blogpost {
          max-width: 400px;
          min-width: 300px;
          flex: 1;
          margin-right: 30px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          border: 1px solid #ddd;
          margin-bottom: 30px;
        }

        .title {
          margin-top: 20px;
          font-size: 20px;
          font-family: arial;
        }
      `}</style>
    </div>
  );
};

BlogPost.fragment = gql`
  fragment BlogPost on BlogPostRecord {
    id
    title
    coverImage {
      fluidImage(imgixParams: { fit: crop, ar: "9:9", w: 400, crop: [top, right] }) {
        aspectRatio
        src
        sizes
        srcSet
        width
        height
        base64
      }
    }
  }
`;

export default BlogPost;
