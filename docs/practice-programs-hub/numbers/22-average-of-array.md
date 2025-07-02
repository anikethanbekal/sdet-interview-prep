---
title: Find the average of elements in an array
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
   Finding the average of array elements is a basic interview problem, testing aggregation and division logic.
---

# 🧠 Problem: Find the average of elements in an array

Given an array of integers, return the average (mean) of all elements.

**Category**: Numbers  
**Difficulty**: Easy  
**Tags**: numbers, array, average

---

## ✅ Requirements
- **Input**: Array of integers
- **Output**: Float/Double, average of all elements
- **Constraints**: Array is non-empty

---

## 🧪 Example(s)
```text
Input: [3, 7, 2, 9, 4]
Output: 5.0
```

---

## ☕ Java Solution
```java
// Method 1: Iterative
public static double averageArray(int[] arr) {
    int sum = 0;
    for (int num : arr) {
        sum += num;
    }
    return (double) sum / arr.length;
}

// Method 2: Using Java Streams
public static double averageArrayStream(int[] arr) {
    return Arrays.stream(arr).average().orElse(0.0);
}
```

## 🔵🟡 Python Solution
```python
# Method 1: Iterative
def average_array(arr):
    total = 0
    for num in arr:
        total += num
    return total / len(arr)

# Method 2: Using built-in
def average_array_builtin(arr):
    return sum(arr) / len(arr)
```

---

## 🔍 Explanation
- Sum all elements and divide by the length of the array.
- Can also use built-in functions for simplicity.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | n = array length |
| Python   | O(n)            | O(1)             | n = array length |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases (empty array, integer division).
- Built-in functions are preferred for readability.

---

## 🏷 Tags
`numbers`, `python`, `java`, `average`, `easy`, `interview`, `array`
--- 