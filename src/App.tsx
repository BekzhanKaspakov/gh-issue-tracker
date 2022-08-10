import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import RepositoryList from "./components/Repository/RepositoryItem/repository-list.component";
import { Repository } from "./components/Repository/RepositoryList/repository-item.component";
import "./css/main.css";
import getRepositories from "./getRepositories.graphql";

function App() {
  const { loading, error, data } = useQuery(getRepositories, {
    variables: { login: "BekzhanKaspakov", perPage: 10 },
  });
  const repositories: Repository[] =
    data != null
      ? data.user.repositories.edges.map((val: any) => {
          return { ...val.node, cursor: val.cursor };
        })
      : [];

  return (
    <div className="App-main">
      <div className="App-content_large-header">
        <RepositoryList repositories={repositories} />

        {error != null && <h1>{error.cause?.message}</h1>}
      </div>
    </div>
  );
}

export default App;
