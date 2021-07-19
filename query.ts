export const someFragment = gql`
  fragment someFragment on Creature {
    ... on Person {
      name
      age
    }
  }
`;

const query = gql`
  query GetFoo {
    foo {
      id
      meta {
        data {
          ...someFragment
        }
      }
    }
  }
  ${someFragment}
`;
