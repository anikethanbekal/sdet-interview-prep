---
title: Find the Duplicate Number in an Array
tags:
  - java
  - python
  - arrays
  - medium
  - hash-map
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-05
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and hash-based techniques.
---

# 🧠 Problem: Find the Duplicate Number in an Array

Given an array of integers where one number is repeated, find the duplicate number.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, hash-map, duplicate

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 3, 4, 2, 2]`)
- **Output**: The duplicate integer (e.g., `2`)
- **Constraints**:
  - Array contains integers from 1 to n.
  - Only one number is repeated.

---

## 🧪 Example(s)
```text
Input: [1, 3, 4, 2, 2]
Output: 2
```

---

## 🧪 Test Cases
| Input           | Output |
|------------------|--------|
| [1, 3, 4, 2, 2]  | 2      |
| [3, 1, 3, 4, 2]  | 3      |
| [1, 1]           | 1      |
| [2, 2, 2, 2]     | 2      |

---

## ☕ Java Solution
```java
import java.util.HashSet;

public class FindDuplicate {
    // Approach: HashSet to track seen numbers
    public static int findDuplicate(int[] arr) {
        HashSet<Integer> seen = new HashSet<>();
        for (int num : arr) {
            if (seen.contains(num)) {
                return num;
            }
            seen.add(num);
        }
        return -1; // No duplicate found
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 4, 2, 2};
        System.out.println("Duplicate number: " + findDuplicate(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_duplicate(arr):
    # Approach: HashSet to track seen numbers
    seen = set()
    for num in arr:
        if num in seen:
            return num
        seen.add(num)
    return -1  # No duplicate found

# Example usage
arr = [1, 3, 4, 2, 2]
print(f"Duplicate number: {find_duplicate(arr)}")
```

---

## 🔍 Explanation
- **Java**:
  - Uses a `HashSet` to track numbers that have been seen.
  - Returns the first number that is already in the set.
- **Python**:
  - Similar approach using a `set` to track seen numbers.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(n)             | Uses `HashSet` |
| Python   | O(n)            | O(n)             | Uses `set` |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Arrays with multiple duplicates (return the first duplicate found).
  - Arrays with only one element (no duplicate).
- Avoid sorting the array as it increases time complexity to `O(n log n)`.

---

## 🏷 Tags
`arrays`, `python`, `java`, `duplicate`, `medium`, `interview`, `hash-map`
---
