---
title: Java Collections Framework Cheat Sheet
tags:
  - java
  - collections
  - sdet
  - programming
  - core-java
categories:
  - Programming
  - Language-Specific
  - Java
difficulty:
  - medium
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: collections
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet on the Java Collections Framework, covering List, Set, and Map interfaces and their common implementations. Essential for data manipulation in test automation.
---

# 📘 Java Collections Framework

The Java Collections Framework provides a set of interfaces and classes to store and manipulate groups of objects.

---

## 🧠 Core Interfaces

| Interface | Description | Common Implementations |
|---|---|---|
| `List` | An ordered collection that allows duplicate elements. | `ArrayList`, `LinkedList` |
| `Set` | A collection that does not allow duplicate elements. | `HashSet`, `LinkedHashSet`, `TreeSet` |
| `Map` | An object that maps keys to values. Does not allow duplicate keys. | `HashMap`, `LinkedHashMap`, `TreeMap` |

---

## ✅ `List` Interface

`ArrayList` is the most common implementation. It's a resizable array.

### Common `List` Methods

| Method | Description |
|---|---|
| `add(E e)` | Appends the specified element to the end of the list. |
| `get(int index)` | Returns the element at the specified position. |
| `remove(int index)` | Removes the element at the specified position. |
| `size()` | Returns the number of elements in the list. |
| `isEmpty()` | Returns `true` if the list contains no elements. |
| `contains(Object o)` | Returns `true` if the list contains the specified element. |

```java
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
System.out.println(names.get(0)); // "Alice"
```

---

## ✅ `Set` Interface

`HashSet` is the most common implementation. It makes no guarantees about the iteration order.

### Common `Set` Methods

| Method | Description |
|---|---|
| `add(E e)` | Adds the specified element to the set if it is not already present. |
| `remove(Object o)` | Removes the specified element from the set if it is present. |
| `size()` | Returns the number of elements in the set. |
| `contains(Object o)` | Returns `true` if the set contains the specified element. |

```java
Set<String> uniqueNames = new HashSet<>();
uniqueNames.add("Alice");
uniqueNames.add("Alice"); // This will be ignored
System.out.println(uniqueNames.size()); // 1
```

---

## ✅ `Map` Interface

`HashMap` is the most common implementation. It makes no guarantees about the iteration order.

### Common `Map` Methods

| Method | Description |
|---|---|
| `put(K key, V value)` | Associates the specified value with the specified key. |
| `get(Object key)` | Returns the value to which the specified key is mapped. |
| `remove(Object key)` | Removes the mapping for a key if it is present. |
| `size()` | Returns the number of key-value mappings. |
| `containsKey(Object key)` | Returns `true` if the map contains a mapping for the specified key. |
| `keySet()` | Returns a `Set` view of the keys contained in the map. |
| `values()` | Returns a `Collection` view of the values contained in the map. |

```java
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 88);
System.out.println(scores.get("Alice")); // 95
```

---

## 💡 Tips for SDETs

- Use `List` to store a sequence of elements, like a list of web elements from a Selenium query.
- Use `Set` to ensure uniqueness, such as storing unique IDs from a test data set.
- Use `Map` to store key-value pairs, like configuration properties or API request parameters.
- Always use the interface (`List`, `Set`, `Map`) as the type for your variables to allow for easy changes in implementation.

---

## 🏷 Tags

`java`, `collections`, `sdet`, `programming`, `core-java`
