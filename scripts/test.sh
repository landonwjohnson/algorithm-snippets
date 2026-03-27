#!/usr/bin/env bash

set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: ./scripts/test.sh <problem-slug>"
  echo "Example: ./scripts/test.sh concatenation-of-array"
  exit 1
fi

problem_slug="$1"
test_script="tests/${problem_slug}/test.sh"

if [[ ! -f "${test_script}" ]]; then
  echo "No tests found for problem: ${problem_slug}"
  echo "Expected: ${test_script}"
  exit 1
fi

bash "${test_script}"
