# GitHub Issue Tracker

## Features

- React 18
- Vite
- React Router 4
- Apollo with GitHub GraphQL API
  - Queries and Mutations with render props
  - Optimistic Updates
  - Pagination
  - Optimistic Fetch (e.g. Issues)

## Installation

- `git clone git@github.com:BekzhanKaspakov/gh-issue-tracker.git`
- cd gh-issue-tracker
- add your own [GitHub personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) in a .env file in your root folder
  - scopes/permissions you need to check: admin:org, repo, user, notifications
  - VITE_GITHUB_PERSONAL_ACCESS_TOKEN=xxxXXX
- npm install
- npm dev
- visit `http://localhost:5137`
