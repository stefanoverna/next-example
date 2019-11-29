import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "apollo-client";

import { withDato } from "../lib/datocms";
import BlogPost from "../components/BlogPost";
import ErrorMessage from "../components/ErrorMessage";

import {
  BlogPostsQuery,
  BlogPostsQueryVariables
} from "./types/BlogPostsQuery";

const ALL_MEMBERS_QUERY = gql`
  query BlogPostsQuery($first: IntType!, $skip: IntType!) {
    allBlogPosts: allBlogPosts(first: $first, skip: $skip, orderBy: publicationDate_DESC) {
      ...BlogPost
    }
    _allBlogPostsMeta {
      count
    }
  }
  ${BlogPost.fragment}
`;

export const allBlogPostsQueryVars: BlogPostsQueryVariables = {
  skip: 0,
  first: 6
};

const Index: React.SFC = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery<
    BlogPostsQuery,
    BlogPostsQueryVariables
  >(ALL_MEMBERS_QUERY, {
    variables: allBlogPostsQueryVars,
    notifyOnNetworkStatusChange: true
  });

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  const loadMorePosts = () => {
    fetchMore({
      variables: {
        skip: allBlogPosts.length
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        return Object.assign({}, previousResult, {
          // Append the new posts results to the old one
          allBlogPosts: [
            ...previousResult.allBlogPosts,
            ...fetchMoreResult.allBlogPosts
          ]
        });
      }
    });
  };

  if (error) return <ErrorMessage message="Error loading team members!" />;
  if (loading && !loadingMorePosts) return <div>Loading...</div>;
  if (!data) return <ErrorMessage message="Error loading team members!" />;

  const { allBlogPosts, _allBlogPostsMeta } = data;
  const areMoreBlogPosts = allBlogPosts.length < _allBlogPostsMeta.count;

  return (
    <div className="team-members">
      {allBlogPosts.map(member => (
        <BlogPost key={member.id} {...member} />
      ))}
      {areMoreBlogPosts && (
        <button onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
          {loadingMorePosts ? "Loading..." : "Show More"}
        </button>
      )}
      <style jsx>{`
        .team-members {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default withDato(Index);
