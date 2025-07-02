---
title: Find Intersection of Two Arrays
tags:
  - java
  - python
  - arrays
  - easy
  - hash-set
categories:
  - Programming
  - Interview
difficulty: easy
background: bg-[#e0f2fe]
badge_color: text-blue-800 bg-blue-100
topic: arrays
date: 2025-07-17
author: Anikethan Bekal
intro: |
  This is a basic interview question for SDET roles that tests understanding of array manipulation and hash-based techniques.
---

# 🧠 Problem: Find Intersection of Two Arrays

Given two arrays of integers, find their intersection.

**Category**: Arrays  
**Difficulty**: Easy  
**Tags**: arrays, hash-set, intersection

---

## ✅ Requirements
- **Input**: Two arrays of integers `arr1` and `arr2` (e.g., `[1, 2, 3, 4]` and `[3, 4, 5, 6]`)
- **Output**: List of intersection elements (e.g., `[3, 4]`)
- **Constraints**:
  - Arrays can contain duplicates.

---

## 🧪 Example(s)
```text
Input: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]
Output: [3, 4]
```

---

## 🧪 Test Cases
| Input                          | Output |
|---------------------------------|--------|
| [1, 2, 3, 4], [3, 4, 5, 6]     | [3, 4] |
| [1, 1, 1, 1], [1, 1, 1, 1]     | [1]    |
| [1, 2, 3], [4, 5, 6]           | []     |
| [10, 20, 30], [30, 40, 50]     | [30]   |

---

## ☕ Java Solution
```java
import java.util.*;

public class IntersectionOfArrays {
    // Approach: HashSet to track elements
    public static List<Integer> findIntersection(int[] arr1, int[] arr2) {
        Set<Integer> set = new HashSet<>();
        List<Integer> intersection = new ArrayList<>();
        for (int num : arr1) {
            set.add(num);
        }
        for (int num : arr2) {
            if (set.contains(num)) {
                intersection.add(num);
                set.remove(num); // Avoid duplicates
            }
        }
        return intersection;
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4};
        int[] arr2 = {3, 4, 5, 6};
        System.out.println("Intersection: " + findIntersection(arr1, arr2));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_intersection(arr1, arr2):
    # Approach: HashSet to track elements
    set1 = set(arr1)
    intersection = []
    for num in arr2:
        if num in set1:
            intersection.append(num)
            set1.remove(num)  # Avoid duplicates
    return intersection

# Example usage
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]
print(f"Intersection: {find_intersection(arr1, arr2)}")
```

---

## 🔍 Explanation
- **HashSet**:
  - Tracks elements of the first array.
  - Checks if elements of the second array exist in the set.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n + m)        | O(n)             | `n` and `m` are lengths of the arrays |
| Python   | O(n + m)        | O(n)             | `n` and `m` are lengths of the arrays |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Arrays with no intersection.
  - Arrays with all identical elements.
- Explain the efficiency of HashSet compared to nested loops.

---

## 🏷 Tags
`arrays`, `python`, `java`, `intersection`, `easy`, `interview`, `hash-set`
---
