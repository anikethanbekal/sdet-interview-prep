---
title: Find the K-th Largest Element in an Array
tags:
  - java
  - python
  - arrays
  - medium
  - heap
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-10
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and efficient algorithms like heaps.
---

# 🧠 Problem: Find the K-th Largest Element in an Array

Given an array of integers and an integer `k`, find the k-th largest element in the array.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, heap, k-th-largest

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[3, 2, 1, 5, 6, 4]`) and an integer `k` (e.g., `2`)
- **Output**: The k-th largest element (e.g., `5`)
- **Constraints**:
  - Array contains distinct integers.

---

## 🧪 Example(s)
```text
Input: arr = [3, 2, 1, 5, 6, 4], k = 2
Output: 5
```

---

## 🧪 Test Cases
| Input                  | Output |
|-------------------------|--------|
| [3, 2, 1, 5, 6, 4], 2  | 5      |
| [1, 2, 3, 4, 5], 1     | 5      |
| [1, 2, 3, 4, 5], 5     | 1      |
| [5, 5, 5, 5, 5], 3     | 5      |

---

## ☕ Java Solution
```java
import java.util.PriorityQueue;

public class KthLargestElement {
    // Approach: Min-Heap
    public static int findKthLargest(int[] arr, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : arr) {
            minHeap.add(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        return minHeap.peek();
    }

    public static void main(String[] args) {
        int[] arr = {3, 2, 1, 5, 6, 4};
        int k = 2;
        System.out.println("K-th largest element: " + findKthLargest(arr, k));
    }
}
```

---

## 🔵🟡 Python Solution
```python
import heapq

def find_kth_largest(arr, k):
    # Approach: Min-Heap
    return heapq.nlargest(k, arr)[-1]

# Example usage
arr = [3, 2, 1, 5, 6, 4]
k = 2
print(f"K-th largest element: {find_kth_largest(arr, k)}")
```

---

## 🔍 Explanation
- **Min-Heap**:
  - Maintains a heap of size `k`.
  - Ensures the smallest element in the heap is the k-th largest element.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n log k)      | O(k)             | Uses `PriorityQueue` |
| Python   | O(n log k)      | O(k)             | Uses `heapq.nlargest` |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - `k = 1` (largest element).
  - `k = len(arr)` (smallest element).
- Explain the efficiency of heap-based solutions compared to sorting.

---

## 🏷 Tags
`arrays`, `python`, `java`, `k-th-largest`, `medium`, `interview`, `heap`
---
