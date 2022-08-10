import RepositoryItem from "../RepositoryList/repository-item.component";
import { Repository } from "../RepositoryList/repository-item.component";

const RepositoryList = ({ repositories }: { repositories: Repository[] }) => {
  return (
    <>
      {repositories.map((val) => {
        return <RepositoryItem key={val.cursor} repo={val} />;
      })}
      {/* <Issues repositoryName={node.name} repositoryOwner={node.owner.login} /> */}
    </>
  );
};

export default RepositoryList;
