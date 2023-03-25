import { gql, useQuery } from "@apollo/client";

export const useStarships = () => {
  const query = gql`
    query GetAllStarships {
      allStarships {
        starships {
          name
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `;
  const result = useQuery(query);
  return {
    ...result,
  };
};
