---
title: Find the Majority Element in an Array
tags:
  - java
  - python
  - arrays
  - medium
  - moore-voting
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-08
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and efficient algorithms like Moore's Voting.
---

# 🧠 Problem: Find the Majority Element in an Array

Given an array of integers, find the majority element. A majority element is an element that appears more than `n/2` times in the array.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, moore-voting, majority-element

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[3, 3, 4, 2, 3, 3, 3]`)
- **Output**: The majority element (e.g., `3`)
- **Constraints**:
  - Array contains at least one majority element.

---

## 🧪 Example(s)
```text
Input: [3, 3, 4, 2, 3, 3, 3]
Output: 3
```

---

## 🧪 Test Cases
| Input                  | Output |
|-------------------------|--------|
| [3, 3, 4, 2, 3, 3, 3]  | 3      |
| [1, 1, 1, 2, 2]        | 1      |
| [5, 5, 5, 5, 5]        | 5      |
| [2, 2, 2, 3, 3]        | 2      |

---

## ☕ Java Solution
```java
public class MajorityElement {
    // Approach: Moore's Voting Algorithm
    public static int findMajorityElement(int[] arr) {
        int candidate = findCandidate(arr);
        return isMajority(arr, candidate) ? candidate : -1;
    }

    private static int findCandidate(int[] arr) {
        int count = 0, candidate = -1;
        for (int num : arr) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }
        return candidate;
    }

    private static boolean isMajority(int[] arr, int candidate) {
        int count = 0;
        for (int num : arr) {
            if (num == candidate) {
                count++;
            }
        }
        return count > arr.length / 2;
    }

    public static void main(String[] args) {
        int[] arr = {3, 3, 4, 2, 3, 3, 3};
        System.out.println("Majority element: " + findMajorityElement(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_majority_element(arr):
    # Approach: Moore's Voting Algorithm
    candidate = find_candidate(arr)
    return candidate if is_majority(arr, candidate) else -1

def find_candidate(arr):
    count, candidate = 0, None
    for num in arr:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    return candidate

def is_majority(arr, candidate):
    return arr.count(candidate) > len(arr) // 2

# Example usage
arr = [3, 3, 4, 2, 3, 3, 3]
print(f"Majority element: {find_majority_element(arr)}")
```

---

## 🔍 Explanation
- **Moore's Voting Algorithm**:
  - Finds a candidate for the majority element by maintaining a count.
  - Verifies if the candidate is indeed the majority element.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Two passes: candidate selection and verification |
| Python   | O(n)            | O(1)             | Two passes: candidate selection and verification |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Arrays with no majority element (return `-1`).
  - Arrays with all identical elements.
- Explain the efficiency of Moore's Voting Algorithm compared to brute force.

---

## 🏷 Tags
`arrays`, `python`, `java`, `majority-element`, `medium`, `interview`, `moore-voting`
---
