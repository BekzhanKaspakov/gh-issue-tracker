export type RepositoryProps = {
  repo: Repository;
};

export type Repository = {
  cursor: string;
  description: string;
  name: string;
};

const RepositoryItem = ({ repo }: RepositoryProps) => {
  const { name, description } = repo;
  return (
    <div className="RepositoryItem">
      <h2 className="RepositoryItem-title">{name}</h2>
      <div className="RepositoryItem-description">{description}</div>
    </div>
  );
};

export default RepositoryItem;
