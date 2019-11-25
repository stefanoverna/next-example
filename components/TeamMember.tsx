import gql from 'graphql-tag';
import SFC from '../lib/SFC';

import DatoCmsImage, { PropTypes as DatoCmsImagePropTypes } from './DatoCmsImage';

type PropTypes = {
  name: string | null;
  role: string | null;
  avatar: DatoCmsImagePropTypes['image'] | null;
};

const TeamMember: SFC<PropTypes> = ({ name, avatar }) => {
  return (
    <div className="team-member">
      <div className="team-member__name">{name}</div>
      {avatar &&
        <DatoCmsImage image={avatar} />
      }
      <style jsx>{`
        .team-member__name {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

TeamMember.fragment = gql`
  fragment TeamMember on TeamMemberRecord {
    id
    name
    role
    avatar {
      ...DatoCmsImage
    }
  }
  ${DatoCmsImage.fragment}
`;

export default TeamMember;
