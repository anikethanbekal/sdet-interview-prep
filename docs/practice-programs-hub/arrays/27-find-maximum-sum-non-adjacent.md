---
title: Find Maximum Sum of Non-Adjacent Elements
tags:
  - java
  - python
  - arrays
  - medium
  - dynamic-programming
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-27
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and dynamic programming techniques.
---

# 🧠 Problem: Find Maximum Sum of Non-Adjacent Elements

Given an array of integers, find the maximum sum of non-adjacent elements.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, dynamic-programming, non-adjacent-sum

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[3, 2, 7, 10]`)
- **Output**: Maximum sum of non-adjacent elements (e.g., `13`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: [3, 2, 7, 10]
Output: 13
```

---

## 🧪 Test Cases
| Input              | Output |
|---------------------|--------|
| [3, 2, 7, 10]       | 13     |
| [5, 5, 10, 100, 10] | 110    |
| [1, 2, 3, 4, 5]     | 9      |
| [-1, -2, -3, -4]    | 0      |

---

## ☕ Java Solution
```java
public class MaximumSumNonAdjacent {
    // Approach: Dynamic Programming
    public static int findMaxSumNonAdjacent(int[] arr) {
        int include = 0, exclude = 0;
        for (int num : arr) {
            int temp = include;
            include = Math.max(exclude + num, include);
            exclude = temp;
        }
        return include;
    }

    public static void main(String[] args) {
        int[] arr = {3, 2, 7, 10};
        System.out.println("Maximum sum of non-adjacent elements: " + findMaxSumNonAdjacent(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_max_sum_non_adjacent(arr):
    # Approach: Dynamic Programming
    include, exclude = 0, 0
    for num in arr:
        temp = include
        include = max(exclude + num, include)
        exclude = temp
    return include

# Example usage
arr = [3, 2, 7, 10]
print(f"Maximum sum of non-adjacent elements: {find_max_sum_non_adjacent(arr)}")
```

---

## 🔍 Explanation
- **Dynamic Programming**:
  - Maintains two variables: `include` (sum including current element) and `exclude` (sum excluding current element).
  - Updates `include` and `exclude` iteratively.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Single pass through the array |
| Python   | O(n)            | O(1)             | Single pass through the array |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with all negative numbers (return `0`).
  - Array with only one element.
- Explain why dynamic programming is preferred over brute force.

---

## 🏷 Tags
`arrays`, `python`, `java`, `non-adjacent-sum`, `medium`, `interview`, `dynamic-programming`
---
