# LeetCode Practice Repo (Multi-Language)

This repo provides LeetCode **problems**, **solutions**, and **examples of how LeetCode-style code can be used in real-life situations**.

It is organized for multiple languages (not just Swift), so each problem can be solved side-by-side in the languages you want to practice.

## Repository Structure

```text
problems/
  <problem-slug>/
    prompt.md
    swift/solution.swift
    python/solution.py
    javascript/solution.js
    c++/solution.cc
scripts/
  run.sh
```

- Each problem has its own folder under `problems/`.
- Each language has its own solution file.
- Add only the language folders you want for each problem.

## Quick Start

Create a new problem folder:

```bash
mkdir -p problems/valid-parentheses/{swift,python,javascript,c++}
```

Run a solution:

```bash
./scripts/run.sh two-sum swift
./scripts/run.sh two-sum python
./scripts/run.sh two-sum javascript
```

## Why this repo

- Practice core algorithm patterns from LeetCode.
- Keep clean, comparable implementations across languages.
- Bridge interview-style problems to practical coding use cases.
