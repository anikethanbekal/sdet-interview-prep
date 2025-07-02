---
title: Find Subarray with a Given Sum
tags:
  - java
  - python
  - arrays
  - medium
  - sliding-window
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-09
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and efficient algorithms like sliding window.
---

# 🧠 Problem: Find Subarray with a Given Sum

Given an array of integers and a target sum, find a contiguous subarray that sums up to the target.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, sliding-window, subarray-sum

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 2, 3, 7, 5]`) and an integer `target` (e.g., `12`)
- **Output**: The subarray (e.g., `[2, 3, 7]`)
- **Constraints**:
  - Array contains positive integers.

---

## 🧪 Example(s)
```text
Input: arr = [1, 2, 3, 7, 5], target = 12
Output: [2, 3, 7]
```

---

## 🧪 Test Cases
| Input                  | Output       |
|-------------------------|--------------|
| [1, 2, 3, 7, 5], 12    | [2, 3, 7]    |
| [1, 2, 3, 4, 5], 9     | [2, 3, 4]    |
| [1, 2, 3], 6           | [1, 2, 3]    |
| [1, 2, 3], 10          | []           |

---

## ☕ Java Solution
```java
import java.util.*;

public class SubarraySum {
    // Approach: Sliding Window
    public static List<Integer> findSubarrayWithSum(int[] arr, int target) {
        int start = 0, sum = 0;
        for (int end = 0; end < arr.length; end++) {
            sum += arr[end];
            while (sum > target) {
                sum -= arr[start++];
            }
            if (sum == target) {
                return Arrays.asList(Arrays.copyOfRange(arr, start, end + 1));
            }
        }
        return Collections.emptyList(); // No subarray found
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 7, 5};
        int target = 12;
        System.out.println("Subarray with sum: " + findSubarrayWithSum(arr, target));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_subarray_with_sum(arr, target):
    # Approach: Sliding Window
    start, sum = 0, 0
    for end in range(len(arr)):
        sum += arr[end]
        while sum > target:
            sum -= arr[start]
            start += 1
        if sum == target:
            return arr[start:end + 1]
    return []  # No subarray found

# Example usage
arr = [1, 2, 3, 7, 5]
target = 12
print(f"Subarray with sum: {find_subarray_with_sum(arr, target)}")
```

---

## 🔍 Explanation
- **Sliding Window**:
  - Expands the window by adding elements to the sum.
  - Shrinks the window by removing elements when the sum exceeds the target.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Single pass using sliding window |
| Python   | O(n)            | O(1)             | Single pass using sliding window |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - No subarray found (return empty list).
  - Subarray is the entire array.
- Explain the efficiency of sliding window compared to brute force.

---

## 🏷 Tags
`arrays`, `python`, `java`, `subarray-sum`, `medium`, `interview`, `sliding-window`
---
