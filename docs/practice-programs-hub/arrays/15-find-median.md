---
title: Find the Median of an Array
tags:
  - java
  - python
  - arrays
  - medium
  - sorting
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-15
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and sorting techniques.
---

# 🧠 Problem: Find the Median of an Array

Given an unsorted array of integers, find the median.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, sorting, median

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 3, 2, 4]`)
- **Output**: Median of the array (e.g., `2.5`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: [1, 3, 2, 4]
Output: 2.5
```

---

## 🧪 Test Cases
| Input              | Output |
|---------------------|--------|
| [1, 3, 2, 4]        | 2.5    |
| [1, 2, 3, 4, 5]     | 3      |
| [-1, -2, -3, -4]    | -2.5   |
| [10, 20, 30, 40]    | 25     |

---

## ☕ Java Solution
```java
import java.util.Arrays;

public class MedianOfArray {
    // Approach: Sort and find median
    public static double findMedian(int[] arr) {
        Arrays.sort(arr);
        int n = arr.length;
        if (n % 2 == 0) {
            return (arr[n / 2 - 1] + arr[n / 2]) / 2.0;
        } else {
            return arr[n / 2];
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 4};
        System.out.println("Median: " + findMedian(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_median(arr):
    # Approach: Sort and find median
    arr.sort()
    n = len(arr)
    if n % 2 == 0:
        return (arr[n // 2 - 1] + arr[n // 2]) / 2
    else:
        return arr[n // 2]

# Example usage
arr = [1, 3, 2, 4]
print(f"Median: {find_median(arr)}")
```

---

## 🔍 Explanation
- **Sorting**:
  - Sorts the array to arrange elements in ascending order.
  - Finds the middle element(s) to calculate the median.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n log n)      | O(1)             | Uses `Arrays.sort()` |
| Python   | O(n log n)      | O(1)             | Uses `sort()` |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with one element.
  - Array with all identical elements.
- Explain the difference between median for even and odd-length arrays.

---

## 🏷 Tags
`arrays`, `python`, `java`, `median`, `medium`, `interview`, `sorting`
---
