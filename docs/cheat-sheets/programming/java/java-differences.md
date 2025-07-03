---
title: Key Java Differences Cheat Sheet
tags:
  - java
  - java-differences
  - sdet
  - programming
  - core-java
  - interview-questions
categories:
  - Programming
  - Language-Specific
  - Java
  - Interview Questions
difficulty:
  - medium
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: java-differences
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet that clarifies the differences between commonly confused concepts in Java. This is a frequent source of questions in technical interviews for SDETs.
---

# 📘 Key Java Differences

This cheat sheet provides a quick reference for the key differences between important Java concepts.

---

## ✅ `final` vs. `finally` vs. `finalize`

| Keyword | Type | Description |
|---|---|---|
| `final` | Keyword | A modifier that can be applied to classes, methods, and variables. A `final` class cannot be subclassed, a `final` method cannot be overridden, and a `final` variable can only be initialized once. |
| `finally` | Block | A block in a `try-catch` statement that is always executed, regardless of whether an exception is thrown or not. Used for cleanup code (e.g., closing resources). |
| `finalize` | Method | A method that the Garbage Collector calls just before an object is garbage collected. It is not recommended for resource cleanup due to its unpredictable nature. |

---

## ✅ `Class` vs. `Object`

| Concept | Description |
|---|---|
| **Class** | A blueprint or template from which objects are created. It defines the properties (attributes) and behaviors (methods) that an object will have. |
| **Object** | An instance of a class. It is a self-contained entity that consists of both data and procedures to manipulate the data. |

---

## ✅ `==` vs. `.equals()`

| Operator/Method | Description |
|---|---|
| `==` | Operator | Compares the memory address (reference) of two objects. It checks if two references point to the same object in memory. |
| `.equals()` | Method | Compares the content (value) of two objects. By default, in the `Object` class, it behaves like `==`, but it is often overridden in classes like `String` to provide a meaningful content comparison. |

---

## ✅ `String` vs. `StringBuilder` vs. `StringBuffer`

| Class | Mutability | Thread-Safety | Performance |
|---|---|---|---|
| `String` | Immutable | Thread-safe | Slower for frequent modifications because a new object is created for each change. |
| `StringBuilder` | Mutable | Not thread-safe | Faster than `StringBuffer` because it is not synchronized. Use for single-threaded environments. |
| `StringBuffer` | Mutable | Thread-safe | Slower than `StringBuilder` due to synchronization overhead. Use for multi-threaded environments. |

---

## ✅ `ArrayList` vs. `LinkedList`

| Class | Underlying Data Structure | Performance |
|---|---|---|
| `ArrayList` | Dynamic array | Faster for retrieving elements by index (`get`). Slower for adding/removing elements from the middle of the list because it requires shifting elements. |
| `LinkedList` | Doubly-linked list | Faster for adding/removing elements from the middle of the list. Slower for retrieving elements by index because it requires traversing the list. |

---

## ✅ `HashMap` vs. `HashSet`

| Class | Description |
|---|---|
| `HashMap` | Implements the `Map` interface. Stores key-value pairs. Does not allow duplicate keys. |
| `HashSet` | Implements the `Set` interface. Stores unique elements. Internally, it uses a `HashMap` to store its elements. |

---

## ✅ `abstract class` vs. `interface`

| Feature | `abstract class` | `interface` |
|---|---|---|
| **Multiple Inheritance** | A class can extend only one abstract class. | A class can implement multiple interfaces. |
| **Constructors** | Can have constructors. | Cannot have constructors. |
| **Methods** | Can have both abstract (no body) and concrete (with body) methods. | Before Java 8, could only have abstract methods. Since Java 8, can have `default` and `static` methods with bodies. |
| **Variables** | Can have instance variables (`final`, `non-final`, `static`, `non-static`). | Variables are `public`, `static`, and `final` by default. |
| **Purpose** | To provide a base for subclasses to build upon and share common code. Represents an "is-a" relationship. | To define a contract that implementing classes must adhere to. Represents a "has-a" capability. |

---

## ✅ `throw` vs. `throws`

| Keyword | Usage | Description |
|---|---|---|
| `throw` | Inside a method | Used to explicitly throw a single exception. |
| `throws` | In a method signature | Used to declare the exceptions that a method might throw. It delegates the responsibility of handling the exception to the caller. |

---

## 🏷 Tags

`java`, `java-differences`, `sdet`, `programming`, `core-java`, `interview-questions`
