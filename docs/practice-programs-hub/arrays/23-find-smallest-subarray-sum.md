---
title: Find Smallest Subarray with Sum Greater Than or Equal to Target
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
date: 2025-07-23
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and sliding window techniques.
---

# 🧠 Problem: Find Smallest Subarray with Sum Greater Than or Equal to Target

Given an array of integers and a target sum, find the length of the smallest subarray with a sum greater than or equal to the target.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, sliding-window, subarray-sum

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[2, 3, 1, 2, 4, 3]`) and an integer `target` (e.g., `7`)
- **Output**: Length of the smallest subarray (e.g., `2`)
- **Constraints**:
  - Array contains positive integers.

---

## 🧪 Example(s)
```text
Input: arr = [2, 3, 1, 2, 4, 3], target = 7
Output: 2
```

---

## 🧪 Test Cases
| Input                  | Output |
|-------------------------|--------|
| [2, 3, 1, 2, 4, 3], 7  | 2      |
| [1, 1, 1, 1, 1], 5     | 5      |
| [1, 2, 3, 4, 5], 15    | 5      |
| [5, 1, 2, 3], 10       | -1     |

---

## ☕ Java Solution
```java
public class SmallestSubarraySum {
    // Approach: Sliding Window
    public static int findSmallestSubarray(int[] arr, int target) {
        int minLength = Integer.MAX_VALUE, sum = 0, start = 0;
        for (int end = 0; end < arr.length; end++) {
            sum += arr[end];
            while (sum >= target) {
                minLength = Math.min(minLength, end - start + 1);
                sum -= arr[start++];
            }
        }
        return minLength == Integer.MAX_VALUE ? -1 : minLength;
    }

    public static void main(String[] args) {
        int[] arr = {2, 3, 1, 2, 4, 3};
        int target = 7;
        System.out.println("Smallest subarray length: " + findSmallestSubarray(arr, target));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_smallest_subarray(arr, target):
    # Approach: Sliding Window
    min_length = float('inf')
    sum = 0
    start = 0
    for end in range(len(arr)):
        sum += arr[end]
        while sum >= target:
            min_length = min(min_length, end - start + 1)
            sum -= arr[start]
            start += 1
    return min_length if min_length != float('inf') else -1

# Example usage
arr = [2, 3, 1, 2, 4, 3]
target = 7
print(f"Smallest subarray length: {find_smallest_subarray(arr, target)}")
```

---

## 🔍 Explanation
- **Sliding Window**:
  - Expands the window by adding elements to the sum.
  - Shrinks the window by removing elements when the sum exceeds or equals the target.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Single pass using sliding window |
| Python   | O(n)            | O(1)             | Single pass using sliding window |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - No subarray found (return `-1`).
  - Subarray is the entire array.
- Explain the efficiency of sliding window compared to brute force.

---

## 🏷 Tags
`arrays`, `python`, `java`, `subarray-sum`, `medium`, `interview`, `sliding-window`
---
