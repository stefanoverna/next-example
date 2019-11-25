/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TeamMember
// ====================================================

export interface TeamMember_avatar {
  __typename: "FileField";
  url: string;
  width: GQLIntType | null;
  height: GQLIntType | null;
  blurhashBase64Thumb: string | null;
}

export interface TeamMember {
  __typename: "TeamMemberRecord";
  id: GQLItemId;
  name: string | null;
  role: string | null;
  avatar: TeamMember_avatar | null;
}
