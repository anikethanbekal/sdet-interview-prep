---
title: Find Minimum in Rotated Sorted Array
tags:
  - java
  - python
  - arrays
  - medium
  - binary-search
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-26
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and binary search techniques.
---

# 🧠 Problem: Find Minimum in Rotated Sorted Array

Given a rotated sorted array, find the minimum element.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, binary-search, rotated-array

---

## ✅ Requirements
- **Input**: A rotated sorted array `arr` (e.g., `[4, 5, 6, 7, 0, 1, 2]`)
- **Output**: The minimum element (e.g., `0`)
- **Constraints**:
  - Array contains distinct integers.

---

## 🧪 Example(s)
```text
Input: [4, 5, 6, 7, 0, 1, 2]
Output: 0
```

---

## 🧪 Test Cases
| Input                     | Output |
|----------------------------|--------|
| [4, 5, 6, 7, 0, 1, 2]      | 0      |
| [1, 2, 3, 4, 5]            | 1      |
| [5, 1, 2, 3, 4]            | 1      |
| [2, 3, 4, 5, 1]            | 1      |

---

## ☕ Java Solution
```java
public class MinimumInRotatedArray {
    // Approach: Binary Search
    public static int findMinimum(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] > arr[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return arr[left];
    }

    public static void main(String[] args) {
        int[] arr = {4, 5, 6, 7, 0, 1, 2};
        System.out.println("Minimum element: " + findMinimum(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_minimum(arr):
    # Approach: Binary Search
    left, right = 0, len(arr) - 1
    while left < right:
        mid = left + (right - left) // 2
        if arr[mid] > arr[right]:
            left = mid + 1
        else:
            right = mid
    return arr[left]

# Example usage
arr = [4, 5, 6, 7, 0, 1, 2]
print(f"Minimum element: {find_minimum(arr)}")
```

---

## 🔍 Explanation
- **Binary Search**:
  - Compares the middle element with the rightmost element to determine the rotation point.
  - Narrows down the search space until the minimum element is found.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(log n)        | O(1)             | Binary search on rotated array |
| Python   | O(log n)        | O(1)             | Binary search on rotated array |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with no rotation (already sorted).
  - Array with only one element.
- Explain why binary search is preferred over linear search.

---

## 🏷 Tags
`arrays`, `python`, `java`, `rotated-array`, `medium`, `interview`, `binary-search`
---
