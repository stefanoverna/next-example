/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostsQuery
// ====================================================

export interface BlogPostsQuery_allBlogPosts_coverImage_fluidImage {
  __typename: "FluidImage";
  aspectRatio: any;
  src: string;
  sizes: string;
  srcSet: string;
  width: any;
  height: any;
  base64: string;
}

export interface BlogPostsQuery_allBlogPosts_coverImage {
  __typename: "FileField";
  fluidImage: BlogPostsQuery_allBlogPosts_coverImage_fluidImage | null;
}

export interface BlogPostsQuery_allBlogPosts {
  __typename: "BlogPostRecord";
  id: any;
  title: string | null;
  coverImage: BlogPostsQuery_allBlogPosts_coverImage | null;
}

export interface BlogPostsQuery__allBlogPostsMeta {
  __typename: "CollectionMetadata";
  count: any;
}

export interface BlogPostsQuery {
  /**
   * Returns a collection of records
   */
  allBlogPosts: BlogPostsQuery_allBlogPosts[];
  /**
   * Returns meta information regarding a record collection
   */
  _allBlogPostsMeta: BlogPostsQuery__allBlogPostsMeta;
}

export interface BlogPostsQueryVariables {
  first: any;
  skip: any;
}
