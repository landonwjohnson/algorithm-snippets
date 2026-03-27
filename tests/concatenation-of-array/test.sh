#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "${TMP_DIR}"' EXIT

echo "Running concatenation-of-array tests..."

SWIFT_SOURCE="${ROOT_DIR}/problems/concatenation-of-array/languages/swift/solution.swift"
CPP_SOURCE="${ROOT_DIR}/problems/concatenation-of-array/languages/c++/solution.cc"

if [[ ! -f "${SWIFT_SOURCE}" ]]; then
  echo "Missing Swift source: ${SWIFT_SOURCE}"
  exit 1
fi

if [[ ! -f "${CPP_SOURCE}" ]]; then
  echo "Missing C++ source: ${CPP_SOURCE}"
  exit 1
fi

cat "${SWIFT_SOURCE}" > "${TMP_DIR}/swift_test.swift"
cat <<'EOF' >> "${TMP_DIR}/swift_test.swift"
func assertEqual(_ actual: [Int], _ expected: [Int], _ label: String) {
    if actual != expected {
        print("Swift test failed (\(label)): got \(actual), expected \(expected)")
        exit(1)
    }
}

let solver = Solution()
assertEqual(solver.getConcatenation([1, 2, 1]), [1, 2, 1, 1, 2, 1], "example-1")
assertEqual(solver.getConcatenation([1, 3, 2, 1]), [1, 3, 2, 1, 1, 3, 2, 1], "example-2")
assertEqual(solver.getConcatenation([7]), [7, 7], "single-value")
print("Swift tests passed")
EOF

swift "${TMP_DIR}/swift_test.swift"

cat <<'EOF' > "${TMP_DIR}/cpp_test.cc"
#include <iostream>
#include <vector>
#include <string>
#include <cstdlib>
EOF
cat "${CPP_SOURCE}" >> "${TMP_DIR}/cpp_test.cc"
cat <<'EOF' >> "${TMP_DIR}/cpp_test.cc"
static void assertEqual(const std::vector<int>& actual, const std::vector<int>& expected, const std::string& label) {
    if (actual != expected) {
        std::cerr << "C++ test failed (" << label << ")\n";
        std::exit(1);
    }
}

int main() {
    Solution solver;

    std::vector<int> case1{1, 2, 1};
    std::vector<int> case2{1, 3, 2, 1};
    std::vector<int> case3{7};

    assertEqual(solver.getConcatenation(case1), std::vector<int>{1, 2, 1, 1, 2, 1}, "example-1");
    assertEqual(solver.getConcatenation(case2), std::vector<int>{1, 3, 2, 1, 1, 3, 2, 1}, "example-2");
    assertEqual(solver.getConcatenation(case3), std::vector<int>{7, 7}, "single-value");

    std::cout << "C++ tests passed\n";
    return 0;
}
EOF

clang++ -std=c++17 -Wall -Wextra -pedantic "${TMP_DIR}/cpp_test.cc" -o "${TMP_DIR}/cpp_test"
"${TMP_DIR}/cpp_test"

echo "All concatenation-of-array tests passed."
