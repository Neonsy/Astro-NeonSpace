# Workflow Overview

## Development Process

Without a planned feature:
I push changes directly to the Dev branch.

With a planned feature:
I create a temporary feature branch.
I create a PR targeting the Dev branch.

## Quality Assurance

From Dev to Preview:
I periodically create PRs to the Preview branch.
Code undergoes linting and formatting checks.
This PR also creates a preview build and deploys it.

From Preview to Main:
After passing Quality Assurance (QA), I create a PR targeting Main.
Upon successful testing, the PR is merged.
A production build is automatically deployed.