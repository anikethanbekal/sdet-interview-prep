---
title: Java Exception Handling Cheat Sheet
tags:
  - java
  - exception-handling
  - sdet
  - programming
  - core-java
categories:
  - Programming
  - Language-Specific
  - Java
difficulty:
  - easy
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: exception-handling
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet on Java exception handling, covering try-catch-finally blocks, checked vs. unchecked exceptions, and best practices. Crucial for writing robust and stable automation scripts.
---

# 📘 Java Exception Handling

Exception handling is a mechanism to handle runtime errors such as `ClassNotFoundException`, `IOException`, `SQLException`, etc.

---

## 🧠 Core Concepts

- **Exception**: An event that disrupts the normal flow of the program.
- **`try`**: The block of code to be monitored for exceptions.
- **`catch`**: The block of code that handles the exception.
- **`finally`**: The block of code that is always executed, regardless of whether an exception is handled or not.
- **`throw`**: Used to manually throw an exception.
- **`throws`**: Used in a method signature to declare the exceptions that can be thrown by the method.

---

## ✅ `try-catch-finally` Block

```java
try {
    // Code that may throw an exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Handle the exception
    System.out.println("Cannot divide by zero!");
} finally {
    // This code will always be executed
    System.out.println("Finally block executed.");
}
```

---

## ✅ Checked vs. Unchecked Exceptions

| Type | Description | Examples |
|---|---|---|
| **Checked Exceptions** | Exceptions that are checked at compile-time. The compiler forces you to handle them using `try-catch` or declare them with `throws`. | `IOException`, `SQLException`, `FileNotFoundException` |
| **Unchecked Exceptions** | Exceptions that are not checked at compile-time. They usually result from programming errors. | `NullPointerException`, `ArrayIndexOutOfBoundsException`, `ArithmeticException` |

---

## ✅ Custom Exceptions

You can create your own exceptions by extending the `Exception` class.

```java
class InvalidTestDataException extends Exception {
    public InvalidTestDataException(String message) {
        super(message);
    }
}

public void processTestData(String data) throws InvalidTestDataException {
    if (data == null || data.isEmpty()) {
        throw new InvalidTestDataException("Test data cannot be null or empty.");
    }
    // ...
}
```

---

## 💡 Tips for SDETs

- In test automation, wrap code that interacts with external systems (e.g., web browsers, APIs) in `try-catch` blocks to handle unexpected failures gracefully.
- Use the `finally` block to ensure cleanup code (like closing a browser window with `driver.quit()`) is always executed, even if a test fails.
- Create custom exceptions to represent specific failures in your test framework, such as `ElementNotFoundException` or `InvalidCredentialsException`.
- Don't just catch an exception and ignore it. At a minimum, log the exception to help with debugging.

---

## 🏷 Tags

`java`, `exception-handling`, `sdet`, `programming`, `core-java`
