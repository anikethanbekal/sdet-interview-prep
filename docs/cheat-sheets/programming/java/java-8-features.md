---
title: Java 8 Features Cheat Sheet
tags:
  - java
  - java8
  - streams
  - lambda
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
topic: java8
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet on key Java 8 features, including Lambda Expressions and the Stream API. These features allow for more concise and functional-style programming, which is very useful in test automation.
---

# 📘 Java 8 Features

Java 8 introduced several important features. The most significant are Lambda Expressions and the Stream API.

---

## 🧠 Lambda Expressions

A lambda expression is a short block of code which takes in parameters and returns a value. Lambda expressions are similar to methods, but they do not need a name and they can be implemented right in the body of a method.

### Syntax

```
(parameter1, parameter2) -> expression
```

or

```
(parameter1, parameter2) -> { code block }
```

### Example

```java
// Before Java 8
new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello from old thread!");
    }
}).start();

// With Lambda Expression
new Thread(() -> System.out.println("Hello from new thread!")).start();
```

---

## ✅ Stream API

A stream is a sequence of elements from a source that supports aggregate operations.

- **Source**: A collection, an array, or an I/O resource.
- **Intermediate Operations**: Operations that return a new stream, such as `filter`, `map`, `sorted`.
- **Terminal Operations**: Operations that return a result or produce a side effect, such as `forEach`, `collect`, `reduce`.

### Example

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Anna");

// Filter names that start with "A", convert to uppercase, and collect to a new list
List<String> result = names.stream()
    .filter(name -> name.startsWith("A"))
    .map(String::toUpperCase)
    .collect(Collectors.toList());

System.out.println(result); // ["ALICE", "ANNA"]
```

### Common Stream Operations

| Operation | Type | Description |
|---|---|---|
| `filter(Predicate<T> predicate)` | Intermediate | Returns a stream consisting of the elements that match the given predicate. |
| `map(Function<T, R> mapper)` | Intermediate | Returns a stream consisting of the results of applying the given function to the elements. |
| `sorted()` | Intermediate | Returns a stream consisting of the elements of this stream, sorted according to natural order. |
| `forEach(Consumer<T> action)` | Terminal | Performs an action for each element of this stream. |
| `collect(Collector<T, A, R> collector)` | Terminal | Performs a mutable reduction operation on the elements of this stream. |
| `count()` | Terminal | Returns the count of elements in this stream. |
| `anyMatch(Predicate<T> predicate)` | Terminal | Returns whether any elements of this stream match the provided predicate. |
| `allMatch(Predicate<T> predicate)` | Terminal | Returns whether all elements of this stream match the provided predicate. |

---

## 💡 Tips for SDETs

- Use streams to process collections of web elements from Selenium. For example, you can easily filter for visible elements, extract their text, and store it in a list.
- Lambda expressions make your test code more concise and readable, especially when working with listeners or simple functional interfaces.
- The Stream API is great for data-driven testing, where you can filter and map your test data on the fly.

---

## 🏷 Tags

`java`, `java8`, `streams`, `lambda`, `sdet`, `programming`, `core-java`
