export type Maybe<T> = T | null;
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
};

export type Animal = Creature & {
  age: Scalars['Int'];
  claws: Scalars['Boolean'];
};

export type Creature = {
  age: Scalars['Int'];
};

export type Foo = {
  id: Scalars['String'];
  meta?: Maybe<Meta>;
};

export type Meta = {
  data?: Maybe<Person>;
};

export type Person = Creature & {
  age: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  foo?: Maybe<Foo>;
};

type SomeFragment_Animal_Fragment = {};

type SomeFragment_Person_Fragment = Pick<Person, 'name' | 'age'>;

export type SomeFragmentFragment = SomeFragment_Animal_Fragment | SomeFragment_Person_Fragment;

export type GetFooQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooQuery = { foo?: Maybe<(
    Pick<Foo, 'id'>
    & { meta?: Maybe<{ data?: Maybe<SomeFragment_Person_Fragment> }> }
  )> };

type DiscriminateUnion<T, U> = T extends U ? T : never;

export type SomeFragmentPersonInlineFragment = (DiscriminateUnion<SomeFragmentFragment, { __typename?: 'Person' }>);
export type GetFooVariables = GetFooQueryVariables;
export type GetFooFoo = GetFooQuery['foo'];
export type GetFooMeta = GetFooFoo['meta'];
export type GetFooData = GetFooQuery['foo']['meta']['data'];
