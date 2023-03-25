import React from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Top } from "./components/Top/Top";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Top />
    </ApolloProvider>
  );
};

export default App;
