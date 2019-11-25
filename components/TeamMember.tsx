import gql from 'graphql-tag';
import DatoCmsImage, { fragment as DatoCmsImageFragment, PropTypes as DatoCmsImagePropTypes } from './DatoCmsImage';

export const fragment = gql`
  fragment TeamMember on TeamMemberRecord {
    id
    name
    role
    avatar {
      ...DatoCmsImage
    }
  }
  ${DatoCmsImageFragment}
`;

type PropTypes = {
  name: string | null;
  role: string | null;
  avatar: DatoCmsImagePropTypes['src'] | null;
};

const TeamMember: React.SFC<PropTypes> = ({ name, avatar }) => {
  return (
    <div>
      {name}
      {avatar &&
        <DatoCmsImage src={avatar} />
      }
      <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
          font-family: "Arial";
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default TeamMember;
