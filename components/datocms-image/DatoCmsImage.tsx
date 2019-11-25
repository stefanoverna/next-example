import gql from "graphql-tag";
import SFC from '../../lib/SFC';
import ImgixUrlQueryParams from './ImgixUrlQueryParams';
import sizeAfterTransformations from './sizeAfterTransformations';

export type PropTypes = {
  image: {
    url: string;
    width?: number | null;
    height?: number | null;
    blurhashBase64Thumb?: string | null;
  };
  imgixParams?: ImgixUrlQueryParams;
};

const DatoCmsImage: SFC<PropTypes> = ({ image, imgixParams }) => {
  if (!image.width || !image.height) {
    return null;
  }

  const { width, height } = sizeAfterTransformations(image.width, image.height, imgixParams);

  return (
    <div style={{ width, height }}>
      {image.blurhashBase64Thumb && (
        <img src={image.blurhashBase64Thumb} width={50} />
      )}
      <picture>

      </picture>
    </div>
  );
};

DatoCmsImage.fragment = gql`
  fragment DatoCmsImage on FileField {
    url
    width
    height
    blurhashBase64Thumb
  }
`;

export default DatoCmsImage;