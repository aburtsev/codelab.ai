#!/usr/bin/env bash
LAST_COMMIT=$(git rev-parse HEAD)
# https://stackoverflow.com/questions/424071/how-to-list-all-the-files-in-a-commit
MODIFIED_FILES=$(git diff-tree --no-commit-id --name-only -r $LAST_COMMIT)

# eslint $MODIFIED_FILES
echo $MODIFIED_FILES
