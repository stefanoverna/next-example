import gql from "graphql-tag";
import { DatoCmsImage as DatoCmsImageType } from "./types/DatoCmsImage";
import SFC from '../lib/SFC';

export type PropTypes = {
  image: DatoCmsImageType;
  imgixParams: object;
};

const DatoCmsImage: SFC<PropTypes> = ({ image }) => {
  return (
    <>
      {image.blurhashBase64Thumb && (
        <img src={image.blurhashBase64Thumb} width={50} />
      )}
    </>
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