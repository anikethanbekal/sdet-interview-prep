---
title: Find the second largest number in an array
tags:
  - java
  - python
  - numbers
  - array
  - easy
categories:
  - Programming
  - Coding
difficulty: easy
background: bg-[#e0f2fe]
badge_color: text-blue-800 bg-blue-100
topic: number-manipulation
date: 2025-07-01
author: Anikethan Bekal
intro: |
   Finding the second largest number in an array is a common interview problem, testing iteration and comparison logic.
---

# 🧠 Problem: Find the second largest number in an array

Given an array of integers, return the second largest number.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, array, second-largest

---

## ✅ Requirements
- **Input**: Array of integers (length >= 2)
- **Output**: Integer, second largest number in the array
- **Constraints**: Array has at least two distinct elements

---

## 🧪 Example(s)
```text
Input: [3, 7, 2, 9, 4]
Output: 7
```

---

## ☕ Java Solution
```java
// Method 1: Iterative
public static int secondLargest(int[] arr) {
    int max = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
    for (int num : arr) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num != max) {
            second = num;
        }
    }
    return second;
}

// Method 2: Sorting
public static int secondLargestSort(int[] arr) {
    int[] sorted = Arrays.copyOf(arr, arr.length);
    Arrays.sort(sorted);
    for (int i = sorted.length - 2; i >= 0; i--) {
        if (sorted[i] != sorted[sorted.length - 1]) return sorted[i];
    }
    return Integer.MIN_VALUE; // if no second largest
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Iterative
def second_largest(arr):
    max_val = second = float('-inf')
    for num in arr:
        if num > max_val:
            second = max_val
            max_val = num
        elif num > second and num != max_val:
            second = num
    return second

# Method 2: Sorting
def second_largest_sort(arr):
    sorted_arr = sorted(arr)
    for i in range(len(sorted_arr) - 2, -1, -1):
        if sorted_arr[i] != sorted_arr[-1]:
            return sorted_arr[i]
    return float('-inf') # if no second largest
```

---

## 🔍 Explanation
- Iterate and track max and second max.
- Can also sort and find the second largest.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)/O(n log n) | O(1)/O(n)        | Iterative/Sorting |
| Python   | O(n)/O(n log n) | O(1)/O(n)        | Iterative/Sorting |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases (duplicates, all same values).
- Sorting is less efficient but simple.

---

## 🏷 Tags
`numbers`, `python`, `java`, `second-largest`, `easy`, `interview`, `array`
--- 