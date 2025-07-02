---
title: Find the second smallest number in an array
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
   Finding the second smallest number in an array is a common interview problem, testing iteration and comparison logic.
---

# 🧠 Problem: Find the second smallest number in an array

Given an array of integers, return the second smallest number.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, array, second-smallest

---

## ✅ Requirements
- **Input**: Array of integers (length >= 2)
- **Output**: Integer, second smallest number in the array
- **Constraints**: Array has at least two distinct elements

---

## 🧪 Example(s)
```text
Input: [3, 7, 2, 9, 4]
Output: 3
```

---

## ☕ Java Solution
```java
// Method 1: Iterative
public static int secondSmallest(int[] arr) {
    int min = Integer.MAX_VALUE, second = Integer.MAX_VALUE;
    for (int num : arr) {
        if (num < min) {
            second = min;
            min = num;
        } else if (num < second && num != min) {
            second = num;
        }
    }
    return second;
}

// Method 2: Sorting
public static int secondSmallestSort(int[] arr) {
    int[] sorted = Arrays.copyOf(arr, arr.length);
    Arrays.sort(sorted);
    for (int i = 1; i < sorted.length; i++) {
        if (sorted[i] != sorted[0]) return sorted[i];
    }
    return Integer.MAX_VALUE; // if no second smallest
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Iterative
def second_smallest(arr):
    min_val = second = float('inf')
    for num in arr:
        if num < min_val:
            second = min_val
            min_val = num
        elif num < second and num != min_val:
            second = num
    return second

# Method 2: Sorting
def second_smallest_sort(arr):
    sorted_arr = sorted(arr)
    for i in range(1, len(sorted_arr)):
        if sorted_arr[i] != sorted_arr[0]:
            return sorted_arr[i]
    return float('inf') # if no second smallest
```

---

## 🔍 Explanation
- Iterate and track min and second min.
- Can also sort and find the second smallest.

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
`numbers`, `python`, `java`, `second-smallest`, `easy`, `interview`, `array`
--- 