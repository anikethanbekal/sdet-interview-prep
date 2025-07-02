---
title: Find Maximum Subarray Sum
tags:
  - java
  - python
  - arrays
  - medium
  - kadane
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-13
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and efficient algorithms like Kadane's Algorithm.
---

# 🧠 Problem: Find Maximum Subarray Sum

Given an array of integers, find the maximum sum of a contiguous subarray.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, kadane, subarray-sum

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`)
- **Output**: Maximum sum of a contiguous subarray (e.g., `6`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
```

---

## 🧪 Test Cases
| Input                        | Output |
|-------------------------------|--------|
| [-2, 1, -3, 4, -1, 2, 1, -5, 4] | 6      |
| [1, 2, 3, 4, 5]               | 15     |
| [-1, -2, -3, -4]              | -1     |
| [5, -1, 5, -1, 5]             | 13     |

---

## ☕ Java Solution
```java
public class MaximumSubarraySum {
    // Approach: Kadane's Algorithm
    public static int findMaxSubarraySum(int[] arr) {
        int maxSum = Integer.MIN_VALUE, currentSum = 0;
        for (int num : arr) {
            currentSum = Math.max(num, currentSum + num);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Maximum subarray sum: " + findMaxSubarraySum(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_max_subarray_sum(arr):
    # Approach: Kadane's Algorithm
    max_sum = float('-inf')
    current_sum = 0
    for num in arr:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum

# Example usage
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(f"Maximum subarray sum: {find_max_subarray_sum(arr)}")
```

---

## 🔍 Explanation
- **Kadane's Algorithm**:
  - Iterates through the array while maintaining the current sum and maximum sum.
  - Resets the current sum to the current number if adding it results in a smaller sum.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Single pass through the array |
| Python   | O(n)            | O(1)             | Single pass through the array |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with all negative numbers.
  - Array with only one element.
- Explain the efficiency of Kadane's Algorithm compared to brute force.

---

## 🏷 Tags
`arrays`, `python`, `java`, `subarray-sum`, `medium`, `interview`, `kadane`
---
