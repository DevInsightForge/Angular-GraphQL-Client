import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  messages: Array<Message>;
  participants: Array<UserBasic>;
  title: Scalars['String'];
};

export type ChatBasic = {
  __typename?: 'ChatBasic';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type JwtTokens = {
  __typename?: 'JwtTokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** message model */
export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  id: Scalars['ID'];
  sentAt: Scalars['DateTime'];
  user: UserBasic;
};

export type Mutation = {
  __typename?: 'Mutation';
  createChat: ChatBasic;
  deleteChat: Scalars['Boolean'];
  deleteMessage: Scalars['Boolean'];
  login: JwtTokens;
  refreshAccessToken?: Maybe<Scalars['String']>;
  register: JwtTokens;
  sendMessage: Message;
};


export type MutationCreateChatArgs = {
  input: NewChatInput;
};


export type MutationDeleteChatArgs = {
  chatId: Scalars['String'];
};


export type MutationDeleteMessageArgs = {
  messageId: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRefreshAccessTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationSendMessageArgs = {
  newMessageData: NewMessageInput;
};

export type NewChatInput = {
  participants?: InputMaybe<Array<UserBasicInputs>>;
  title: Scalars['String'];
};

export type NewMessageInput = {
  chatId: Scalars['String'];
  content: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  chatMessages: Array<Message>;
  getChat: Chat;
  myChats: Array<ChatBasic>;
  userProfile: User;
  userSessions: Array<RefreshToken>;
};


export type QueryAllUsersArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type QueryChatMessagesArgs = {
  chatId: Scalars['String'];
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type QueryGetChatArgs = {
  chatId: Scalars['String'];
};


export type QueryMyChatsArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  browser: Scalars['String'];
  device: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  system: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newChatMessage: Message;
};


export type SubscriptionNewChatMessageArgs = {
  chatId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  dateJoined?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isSuperadmin?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UserRole>;
};

export type UserBasic = {
  __typename?: 'UserBasic';
  email: Scalars['String'];
  id: Scalars['ID'];
};

export type UserBasicInputs = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

/** User role that controls user permissions */
export enum UserRole {
  Admin = 'admin',
  Superadmin = 'superadmin',
  User = 'user'
}

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = { __typename?: 'Query', userProfile: { __typename?: 'User', id: string, email: string, dateJoined?: any | null, lastLogin?: any | null, isActive?: boolean | null, role?: UserRole | null, isSuperadmin?: boolean | null, isAdmin?: boolean | null } };

export const UserProfileDocument = gql`
    query UserProfile {
  userProfile {
    id
    email
    dateJoined
    lastLogin
    isActive
    role
    isSuperadmin
    isAdmin
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserProfileGQL extends Apollo.Query<UserProfileQuery, UserProfileQueryVariables> {
    override document = UserProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }