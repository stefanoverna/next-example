/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BlogPost
// ====================================================

export interface BlogPost_coverImage_fluidImage {
  __typename: "FluidImage";
  aspectRatio: any;
  src: string;
  sizes: string;
  srcSet: string;
  width: any;
  height: any;
  base64: string;
}

export interface BlogPost_coverImage {
  __typename: "FileField";
  fluidImage: BlogPost_coverImage_fluidImage | null;
}

export interface BlogPost {
  __typename: "BlogPostRecord";
  id: any;
  title: string | null;
  coverImage: BlogPost_coverImage | null;
}
