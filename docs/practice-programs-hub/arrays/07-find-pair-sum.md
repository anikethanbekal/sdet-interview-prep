---
title: Find Pairs with a Given Sum in an Array
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
date: 2025-07-07
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and hash-based techniques.
---

# 🧠 Problem: Find Pairs with a Given Sum in an Array

Given an array of integers and a target sum, find all pairs of numbers that add up to the target.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, hash-map, pair-sum

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 2, 3, 4, 5]`) and an integer `target` (e.g., `6`)
- **Output**: List of pairs (e.g., `[(1, 5), (2, 4)]`)
- **Constraints**:
  - Array can contain duplicates.
  - Pairs should not repeat.

---

## 🧪 Example(s)
```text
Input: arr = [1, 2, 3, 4, 5], target = 6
Output: [(1, 5), (2, 4)]
```

---

## 🧪 Test Cases
| Input               | Output         |
|----------------------|----------------|
| [1, 2, 3, 4, 5], 6  | [(1, 5), (2, 4)] |
| [1, 1, 1, 1], 2     | [(1, 1)]         |
| [-1, -2, -3, -4], -5| [(-1, -4), (-2, -3)] |
| [1, 2, 3], 10       | []              |

---

## ☕ Java Solution
```java
import java.util.*;

public class PairSum {
    // Approach: HashMap to track complements
    public static List<int[]> findPairs(int[] arr, int target) {
        List<int[]> pairs = new ArrayList<>();
        Set<Integer> seen = new HashSet<>();
        for (int num : arr) {
            int complement = target - num;
            if (seen.contains(complement)) {
                pairs.add(new int[]{complement, num});
            }
            seen.add(num);
        }
        return pairs;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int target = 6;
        List<int[]> pairs = findPairs(arr, target);
        for (int[] pair : pairs) {
            System.out.println(Arrays.toString(pair));
        }
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_pairs(arr, target):
    # Approach: HashSet to track complements
    pairs = []
    seen = set()
    for num in arr:
        complement = target - num
        if complement in seen:
            pairs.append((complement, num))
        seen.add(num)
    return pairs

# Example usage
arr = [1, 2, 3, 4, 5]
target = 6
pairs = find_pairs(arr, target)
print(f"Pairs: {pairs}")
```

---

## 🔍 Explanation
- **Java**:
  - Uses a `HashSet` to track numbers seen so far.
  - Checks if the complement of the current number exists in the set.
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
  - No pairs found.
  - Array with duplicate numbers.
- Avoid nested loops as they increase time complexity to `O(n^2)`.

---

## 🏷 Tags
`arrays`, `python`, `java`, `pair-sum`, `medium`, `interview`, `hash-map`
---
