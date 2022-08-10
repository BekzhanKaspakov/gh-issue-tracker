type IssueListProps = {
  issues: Issue[];
};

type Issue = {};

const IssueList = ({ issues }: IssueListProps) => {
  return (
    <IssueList
      issues={repository.issues}
      loading={loading}
      repositoryOwner={repositoryOwner}
      repositoryName={repositoryName}
      issueState={issueState}
      fetchMore={fetchMore}
    />
  );
};

export default IssueList;
