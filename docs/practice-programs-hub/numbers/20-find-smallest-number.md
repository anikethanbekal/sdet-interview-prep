---
title: Find the smallest number in an array
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
   Finding the smallest number in an array is a basic interview problem, testing iteration and comparison logic.
---

# 🧠 Problem: Find the smallest number in an array

Given an array of integers, return the smallest number.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, array, min

---

## ✅ Requirements
- **Input**: Array of integers
- **Output**: Integer, smallest number in the array
- **Constraints**: Array is non-empty

---

## 🧪 Example(s)
```text
Input: [3, 7, 2, 9, 4]
Output: 2
```

---

## ☕ Java Solution
```java
// Method 1: Iterative
public static int findMin(int[] arr) {
    int min = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

// Method 2: Using Java Streams
public static int findMinStream(int[] arr) {
    return Arrays.stream(arr).min().getAsInt();
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Iterative
def find_min(arr):
    min_val = arr[0]
    for num in arr[1:]:
        if num < min_val:
            min_val = num
    return min_val

# Method 2: Using built-in
def find_min_builtin(arr):
    return min(arr)
```
---

## 🔍 Explanation
- Iterate through the array and keep track of the minimum value.
- Can also use built-in functions for simplicity.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | n = array length |
| Python   | O(n)            | O(1)             | n = array length |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases (all positive numbers, single element).
- Built-in functions are preferred for readability.

---

## 🏷 Tags
`numbers`, `python`, `java`, `min`, `easy`, `interview`, `array`
--- 
