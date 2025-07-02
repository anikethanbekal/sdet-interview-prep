---
title: Find Maximum Sum of Increasing Subsequence
tags:
  - java
  - python
  - arrays
  - hard
  - dynamic-programming
categories:
  - Programming
  - Interview
difficulty: hard
background: bg-[#fde68a]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-20
author: Anikethan Bekal
intro: |
  This is a challenging interview question for SDET roles that tests understanding of array manipulation and dynamic programming techniques.
---

# 🧠 Problem: Find Maximum Sum of Increasing Subsequence

Given an array of integers, find the maximum sum of an increasing subsequence.

**Category**: Arrays  
**Difficulty**: Hard  
**Tags**: arrays, dynamic-programming, increasing-subsequence

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 101, 2, 3, 100, 4, 5]`)
- **Output**: Maximum sum of an increasing subsequence (e.g., `106`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: [1, 101, 2, 3, 100, 4, 5]
Output: 106
```

---

## 🧪 Test Cases
| Input                        | Output |
|-------------------------------|--------|
| [1, 101, 2, 3, 100, 4, 5]     | 106    |
| [3, 4, 5, 10]                 | 22     |
| [10, 5, 4, 3]                 | 10     |
| [-1, -2, -3, -4]              | -1     |

---

## ☕ Java Solution
```java
public class MaximumSumIncreasingSubsequence {
    // Approach: Dynamic Programming
    public static int findMaxSumIncreasingSubsequence(int[] arr) {
        int n = arr.length;
        int[] dp = new int[n];
        System.arraycopy(arr, 0, dp, 0, n);

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[i] > arr[j] && dp[i] < dp[j] + arr[i]) {
                    dp[i] = dp[j] + arr[i];
                }
            }
        }

        int maxSum = dp[0];
        for (int sum : dp) {
            maxSum = Math.max(maxSum, sum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {1, 101, 2, 3, 100, 4, 5};
        System.out.println("Maximum sum of increasing subsequence: " + findMaxSumIncreasingSubsequence(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_max_sum_increasing_subsequence(arr):
    # Approach: Dynamic Programming
    n = len(arr)
    dp = arr[:]

    for i in range(1, n):
        for j in range(i):
            if arr[i] > arr[j] and dp[i] < dp[j] + arr[i]:
                dp[i] = dp[j] + arr[i]

    return max(dp)

# Example usage
arr = [1, 101, 2, 3, 100, 4, 5]
print(f"Maximum sum of increasing subsequence: {find_max_sum_increasing_subsequence(arr)}")
```

---

## 🔍 Explanation
- **Dynamic Programming**:
  - Maintains a `dp` array where `dp[i]` represents the maximum sum of an increasing subsequence ending at index `i`.
  - Updates `dp[i]` by checking all previous indices.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n^2)          | O(n)             | Nested loops for subsequence comparison |
| Python   | O(n^2)          | O(n)             | Nested loops for subsequence comparison |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with all negative numbers.
  - Array with only one element.
- Explain why dynamic programming is preferred over brute force.

---

## 🏷 Tags
`arrays`, `python`, `java`, `increasing-subsequence`, `hard`, `interview`, `dynamic-programming`
---
