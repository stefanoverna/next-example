import gql from 'graphql-tag';

type Imageish = {
  width: number | null;
  height: number | null;
  url: string;
  blurhashBase64Thumb: string | null;
}

type PropTypes = {
  src: Imageish,
}

export const fragment = gql`
  fragment DatoCmsImage on FileField {
    url
    width
    height
    blurhashBase64Thumb
  }
`;

const DatoCmsImage: React.SFC<PropTypes> = ({ src }) => {
  return (
    <>
      <img src={src.url} />
    </>
  )
}

export default DatoCmsImage;