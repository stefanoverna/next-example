import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'

import { withDato } from "../lib/datocms";
import Layout from "../components/MyLayout";
import TeamMember from "../components/TeamMember";
import ErrorMessage from "../components/ErrorMessage";
import { fragment } from "../components/DatoCmsImage";
import { TeamMembersQuery, TeamMembersQueryVariables } from './types/TeamMembersQuery';

const ALL_MEMBERS_QUERY = gql`
  query TeamMembersQuery($first: IntType!, $skip: IntType!) {
    allTeamMembers(first: $first, skip: $skip) {
      id
      name
      role
      avatar {
        ...${fragment}
      }
    }
    _allTeamMembersMeta {
      count
    }
  }
`;

export const allTeamMembersQueryVars: TeamMembersQueryVariables = {
  skip: 0,
  first: 3,
}

const Index: React.SFC = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery<TeamMembersQuery, TeamMembersQueryVariables>(
    ALL_MEMBERS_QUERY,
    {
      variables: allTeamMembersQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  )

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: allTeamMembers.length,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult
        }
        return Object.assign({}, previousResult, {
          // Append the new posts results to the old one
          allTeamMembers: [...previousResult.allTeamMembers, ...fetchMoreResult.allTeamMembers],
        })
      },
    })
  }

  if (error) return <ErrorMessage message="Error loading team members!" />
  if (loading && !loadingMorePosts) return <div>Loading...</div>
  if (!data) return <ErrorMessage message="Error loading team members!" />

  const { allTeamMembers, _allTeamMembersMeta } = data
  const areMoreTeamMembers = allTeamMembers.length < _allTeamMembersMeta.count

  return (
    <Layout>
      {allTeamMembers.map(member => (
        <TeamMember key={member.id} {...member} />
      ))}
      {areMoreTeamMembers && (
        <button onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </button>
      )}
    </Layout>
  );
};

export default withDato(Index);
