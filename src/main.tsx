import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = process.
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${
      import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <header className="Navigation">
        <div className="Navigation-link">
          <a href="/profile">Profile</a>
        </div>
        <div className="Navigation-link">
          <a href="/">Organization</a>
        </div>
      </header>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
