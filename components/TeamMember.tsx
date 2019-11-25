import DatoCmsImage from './DatoCmsImage';

type PropTypes = {
  name: string | null;
  role: string | null;
  avatar: object | null;
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
