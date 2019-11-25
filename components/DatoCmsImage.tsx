import gql from 'graphql-tag';
import { DatoCmsImage as DatoCmsImageType } from './types/DatoCmsImage';

export const fragment = gql`
  fragment DatoCmsImage on FileField {
    url
    width
    height
    blurhashBase64Thumb
  }
`;

export type PropTypes = {
  src: DatoCmsImageType,
}

const DatoCmsImage: React.SFC<PropTypes> = ({ src }) => {
  return (
    <>
      <img src={`${src.url}?w=50`} />
    </>
  )
}

export default DatoCmsImage;