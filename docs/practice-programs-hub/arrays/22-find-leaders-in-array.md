---
title: Find Leaders in an Array
tags:
  - java
  - python
  - arrays
  - easy
  - iteration
categories:
  - Programming
  - Interview
difficulty: easy
background: bg-[#e0f2fe]
badge_color: text-blue-800 bg-blue-100
topic: arrays
date: 2025-07-22
author: Anikethan Bekal
intro: |
  This is a basic interview question for SDET roles that tests understanding of array manipulation and iteration techniques.
---

# 🧠 Problem: Find Leaders in an Array

Given an array of integers, find all leaders. A leader is an element that is greater than all elements to its right.

**Category**: Arrays  
**Difficulty**: Easy  
**Tags**: arrays, iteration, leaders

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[16, 17, 4, 3, 5, 2]`)
- **Output**: List of leaders (e.g., `[17, 5, 2]`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
```

---

## 🧪 Test Cases
| Input              | Output       |
|---------------------|--------------|
| [16, 17, 4, 3, 5, 2] | [17, 5, 2]  |
| [1, 2, 3, 4, 5]      | [5]         |
| [5, 4, 3, 2, 1]      | [5, 4, 3, 2, 1] |
| [-1, -2, -3, -4]     | [-1]        |

---

## ☕ Java Solution
```java
import java.util.ArrayList;
import java.util.List;

public class LeadersInArray {
    // Approach: Traverse from right to left
    public static List<Integer> findLeaders(int[] arr) {
        List<Integer> leaders = new ArrayList<>();
        int maxFromRight = Integer.MIN_VALUE;
        for (int i = arr.length - 1; i >= 0; i--) {
            if (arr[i] > maxFromRight) {
                leaders.add(arr[i]);
                maxFromRight = arr[i];
            }
        }
        return leaders;
    }

    public static void main(String[] args) {
        int[] arr = {16, 17, 4, 3, 5, 2};
        System.out.println("Leaders in array: " + findLeaders(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_leaders(arr):
    # Approach: Traverse from right to left
    leaders = []
    max_from_right = float('-inf')
    for num in reversed(arr):
        if num > max_from_right:
            leaders.append(num)
            max_from_right = num
    return leaders

# Example usage
arr = [16, 17, 4, 3, 5, 2]
print(f"Leaders in array: {find_leaders(arr)}")
```

---

## 🔍 Explanation
- **Right-to-Left Traversal**:
  - Maintains a variable `maxFromRight` to track the maximum element encountered so far.
  - Adds elements to the result if they are greater than `maxFromRight`.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(n)             | Single pass through the array |
| Python   | O(n)            | O(n)             | Single pass through the array |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with all identical elements.
  - Array with only one element.
- Explain why the traversal is done from right to left.

---

## 🏷 Tags
`arrays`, `python`, `java`, `leaders`, `easy`, `interview`, `iteration`
---
