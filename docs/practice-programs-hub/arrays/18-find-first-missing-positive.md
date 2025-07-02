---
title: Find the First Missing Positive Integer
tags:
  - java
  - python
  - arrays
  - hard
  - in-place
categories:
  - Programming
  - Interview
difficulty: hard
background: bg-[#fde68a]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-18
author: Anikethan Bekal
intro: |
  This is a challenging interview question for SDET roles that tests understanding of array manipulation and in-place algorithms.
---

# 🧠 Problem: Find the First Missing Positive Integer

Given an unsorted array of integers, find the smallest positive integer that is missing.

**Category**: Arrays  
**Difficulty**: Hard  
**Tags**: arrays, in-place, missing-positive

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[3, 4, -1, 1]`)
- **Output**: The smallest positive integer missing (e.g., `2`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: [3, 4, -1, 1]
Output: 2
```

---

## 🧪 Test Cases
| Input              | Output |
|---------------------|--------|
| [3, 4, -1, 1]       | 2      |
| [1, 2, 0]           | 3      |
| [-1, -2, -3]        | 1      |
| [7, 8, 9, 11, 12]   | 1      |

---

## ☕ Java Solution
```java
public class FirstMissingPositive {
    // Approach: In-place swapping
    public static int findFirstMissingPositive(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] != arr[i]) {
                int temp = arr[arr[i] - 1];
                arr[arr[i] - 1] = arr[i];
                arr[i] = temp;
            }
        }
        for (int i = 0; i < n; i++) {
            if (arr[i] != i + 1) {
                return i + 1;
            }
        }
        return n + 1;
    }

    public static void main(String[] args) {
        int[] arr = {3, 4, -1, 1};
        System.out.println("First missing positive: " + findFirstMissingPositive(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_first_missing_positive(arr):
    # Approach: In-place swapping
    n = len(arr)
    for i in range(n):
        while 0 < arr[i] <= n and arr[arr[i] - 1] != arr[i]:
            arr[arr[i] - 1], arr[i] = arr[i], arr[arr[i] - 1]
    for i in range(n):
        if arr[i] != i + 1:
            return i + 1
    return n + 1

# Example usage
arr = [3, 4, -1, 1]
print(f"First missing positive: {find_first_missing_positive(arr)}")
```

---

## 🔍 Explanation
- **In-place Swapping**:
  - Places each positive integer in its correct index (e.g., `arr[i] = i + 1`).
  - Iterates through the array to find the first index where the condition is violated.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | In-place swapping |
| Python   | O(n)            | O(1)             | In-place swapping |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with all negative numbers.
  - Array with consecutive positive integers starting from `1`.
- Explain why sorting is avoided to achieve `O(n)` complexity.

---

## 🏷 Tags
`arrays`, `python`, `java`, `missing-positive`, `hard`, `interview`, `in-place`
---
