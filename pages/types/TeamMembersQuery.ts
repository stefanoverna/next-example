/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TeamMembersQuery
// ====================================================

export interface TeamMembersQuery_allTeamMembers_avatar {
  __typename: "FileField";
  width: GQLIntType | null;
  height: GQLIntType | null;
  url: string;
  blurhashBase64Thumb: string | null;
}

export interface TeamMembersQuery_allTeamMembers {
  __typename: "TeamMemberRecord";
  id: GQLItemId;
  name: string | null;
  role: string | null;
  avatar: TeamMembersQuery_allTeamMembers_avatar | null;
}

export interface TeamMembersQuery__allTeamMembersMeta {
  __typename: "CollectionMetadata";
  count: GQLIntType;
}

export interface TeamMembersQuery {
  /**
   * Returns a collection of records
   */
  allTeamMembers: TeamMembersQuery_allTeamMembers[];
  /**
   * Returns meta information regarding a record collection
   */
  _allTeamMembersMeta: TeamMembersQuery__allTeamMembersMeta;
}

export interface TeamMembersQueryVariables {
  first: GQLIntType;
  skip: GQLIntType;
}
