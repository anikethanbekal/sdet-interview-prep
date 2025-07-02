---
title: Find the Largest Element in an Array
tags:
  - java
  - python
  - arrays
  - easy
  - language-syntax
categories:
  - Programming
  - Interview
difficulty: easy
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-01
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests basic array manipulation and understanding of iteration techniques.
---

# 🧠 Problem: Find the Largest Element in an Array

Given an array of integers, find the largest element.

**Category**: Arrays  
**Difficulty**: Easy  
**Tags**: arrays, iteration, max

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 5, 3, 9, 2]`)
- **Output**: The largest integer in the array (e.g., `9`)
- **Constraints**:
  - Array is non-empty.
  - Elements can be positive, negative, or zero.

---

## 🧪 Example(s)
```text
Input: [1, 5, 3, 9, 2]
Output: 9
```

---

## 🧪 Test Cases
| Input           | Output |
|------------------|--------|
| [1, 5, 3, 9, 2] | 9      |
| [-1, -5, -3]    | -1     |
| [0, 0, 0]       | 0      |
| [100]           | 100    |

---

## ☕ Java Solution
```java
public class LargestElement {
    public static int findLargest(int[] arr) {
        int max = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] arr = {1, 5, 3, 9, 2};
        System.out.println("Largest element: " + findLargest(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_largest(arr):
    max_val = float('-inf')
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val

# Example usage
arr = [1, 5, 3, 9, 2]
print(f"Largest element: {find_largest(arr)}")
```

---

## 🔍 Explanation
- **Java**:
  - Iterates through the array using a `for-each` loop.
  - Compares each element with the current maximum (`max`) and updates `max` if the element is larger.
- **Python**:
  - Iterates through the array using a `for` loop.
  - Compares each element with the current maximum (`max_val`) and updates `max_val` if the element is larger.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Iterates through the array once |
| Python   | O(n)            | O(1)             | Iterates through the array once |

---

## ⚠️ Interview Tips / Notes
- Be prepared to handle edge cases:
  - Single-element arrays.
  - Arrays with all negative numbers.
- Avoid using built-in functions like `max()` unless explicitly allowed.
- Discuss the importance of initializing the maximum value (`Integer.MIN_VALUE` or `float('-inf')`).

---

## 🏷 Tags
`arrays`, `python`, `java`, `max`, `easy`, `interview`, `iteration`
---
