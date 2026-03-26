#!/usr/bin/env bash

set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: ./scripts/run.sh <problem-slug> <language>"
  echo "Example: ./scripts/run.sh two-sum swift"
  exit 1
fi

problem_slug="$1"
language="$2"
problem_dir="problems/${problem_slug}"

if [[ ! -d "${problem_dir}" ]]; then
  echo "Problem not found: ${problem_dir}"
  exit 1
fi

case "${language}" in
  swift)
    file="${problem_dir}/swift/Solution.swift"
    [[ -f "${file}" ]] || { echo "Missing file: ${file}"; exit 1; }
    swift "${file}"
    ;;
  python)
    file="${problem_dir}/python/solution.py"
    [[ -f "${file}" ]] || { echo "Missing file: ${file}"; exit 1; }
    python3 "${file}"
    ;;
  javascript|js)
    file="${problem_dir}/javascript/solution.js"
    [[ -f "${file}" ]] || { echo "Missing file: ${file}"; exit 1; }
    node "${file}"
    ;;
  *)
    echo "Unsupported language: ${language}"
    echo "Supported: swift, python, javascript"
    exit 1
    ;;
esac
