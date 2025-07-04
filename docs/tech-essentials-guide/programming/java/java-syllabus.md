
# 🧑‍💻 Core Java Syllabus for SDET Roles

## 🧱 1. Java Basics
- Introduction to Java & its role in testing
- Java History and Features
- JVM, JRE, JDK – Roles and Differences
- Setting up Java Environment
- Writing & Running a Java Program
- Java Coding Standards

## 📝 2. Java Syntax and Fundamentals
- Java Keywords and Identifiers
- Variables and Data Types
- Type Casting (Implicit & Explicit)
- Operators (Arithmetic, Logical, Relational, Bitwise, Assignment)
- Flow Control Statements:
  - if, if-else, switch
  - for, while, do-while
  - break, continue
- Arrays:
  - Single & Multidimensional Arrays
  - Array manipulation techniques
- Input Handling: `Scanner`, `BufferedReader`

## 🧠 3. Methods and Functional Programming Basics
- Defining and Calling Methods
- Method Parameters and Return Types
- Method Overloading
- Recursion
- Scope of Variables (Local, Global, Static)
- Pass by Value vs Pass by Reference

## 🔤 4. String Manipulation
- String Class and String Pool
- `String`, `StringBuilder`, `StringBuffer`
- Common String methods and usage
- String Comparison and Immutability

## ⚙️ 5. Object-Oriented Programming (OOP)
- OOP Principles Overview
- Defining Classes and Objects
- Attributes and Behavior
- Constructor (Default, Parameterized, Constructor Overloading)
- Key OOP Concepts:
  - Encapsulation
  - Inheritance
  - Polymorphism (Compile-time & Run-time)
  - Abstraction
- `this`, `super`, `final`, `static`, `instanceof` keywords
- Access Modifiers (`public`, `private`, `protected`, default)
- Packages and Imports

## 🎭 6. Interfaces and Abstract Classes
- Defining and Using Interfaces
- Interface vs Abstract Class
- Functional Interfaces
- Default and Static methods in Interfaces
- Marker Interfaces
- Enums

## 🚨 7. Exception Handling
- Types of Errors: Compile-time vs Runtime
- Exception Hierarchy
- Checked vs Unchecked Exceptions
- `try`, `catch`, `finally`, `throw`, `throws`
- Creating Custom Exceptions
- Best Practices in Exception Handling

## 🧵 8. Multithreading and Concurrency (SDET-Oriented)
- Threads and Runnable Interface
- Thread Lifecycle
- Thread Methods (`start()`, `run()`, `sleep()`, `join()`, etc.)
- Synchronization and Locks
- Thread Safety & Race Conditions
- `wait()`, `notify()`, `notifyAll()`
- Executor Framework (Overview)
- Practical scenarios in test automation with threads

## 🎁 9. Wrapper Classes
- Autoboxing and Unboxing
- Usage in Collections and Test Data Management
- Common methods in Wrapper classes

## 🧺 10. Java Collections Framework
- Introduction to Collections API
- List: `ArrayList`, `LinkedList`
- Set: `HashSet`, `LinkedHashSet`, `TreeSet`
- Map: `HashMap`, `TreeMap`, `LinkedHashMap`
- Queue: `PriorityQueue`, `Deque`
- Stack
- Iterators: `Iterator`, `ListIterator`
- Comparable vs Comparator
- Collections Utility Class
- Best Practices in Collections for Automation

## 🛠️ 11. Utility APIs for Testing
- Working with `java.time` (Date and Time API)
- `Math`, `Random`, and `UUID` classes
- File I/O: `File`, `FileReader`, `FileWriter`, `BufferedReader`, `BufferedWriter`
- Java 8+ Features:
  - Lambda Expressions
  - Streams and Filters
  - Method References
  - Optional
- Useful Built-in Annotations

## 🧪 12. Java for SDET (Practical Integration Topics)
- Java + Selenium/TestNG Integration Concepts
- Java in BDD with Cucumber
- Page Object Model (POM) using Core Java
- Handling Test Data (Excel, CSV, JSON)
- REST API Testing using Core Java (via `HttpURLConnection` or `RestAssured`)
- Java Logging Frameworks (`Log4j`, `SLF4J` basics)
- Basic Maven Understanding (for test automation)

## 🧠 13. Java Memory Management and Garbage Collection

### Java Memory Management Overview
Java memory management is handled by the **Java Virtual Machine (JVM)** and includes:

#### Memory Areas in JVM
- **Heap**:
  - Stores objects and class instances.
  - Divided into:
    - **Young Generation (Eden + Survivor spaces)**: Newly created objects.
    - **Old Generation (Tenured)**: Long-lived objects.
- **Stack**:
  - Stores method calls and local variables.
  - Each thread has its own stack.
- **Method Area**:
  - Stores class-level data (static fields, methods).
- **Program Counter (PC) Register**:
  - Stores the address of the current JVM instruction being executed.
- **Native Method Stack**:
  - Supports native method execution (outside JVM).

### Garbage Collection (GC)
Garbage Collection is the process of automatically freeing memory by deleting unreachable objects.

#### Key Concepts:
- **Automatic Memory Management** by JVM.
- Objects without references become **eligible for GC**.
- You **cannot force GC**, but can request it using:
```java
System.gc();
```

### GC Process and Generations
1. **Young Generation**
   - All new objects are allocated here.
   - Frequent GC called **Minor GC**.
   - Surviving objects move to Old Generation.

2. **Old Generation (Tenured)**
   - Long-lived objects reside here.
   - Cleaned via **Major GC** or **Full GC**.

3. **Metaspace (Java 8+)**
   - Replaces PermGen.
   - Stores class metadata.

### Garbage Collectors in Java

| GC Name                | Description |
|------------------------|-------------|
| **Serial GC**          | Single-threaded, suitable for small applications (`-XX:+UseSerialGC`) |
| **Parallel GC**        | Multi-threaded, focuses on throughput (`-XX:+UseParallelGC`) |
| **CMS (Deprecated)**   | Low pause time, replaced by G1 (`-XX:+UseConcMarkSweepGC`) |
| **G1 GC**              | Default from Java 9+, balanced (`-XX:+UseG1GC`) |
| **ZGC / Shenandoah**   | Ultra-low pause time (Java 11+) |

### GC Phases
- **Mark**: Identifies live (reachable) objects.
- **Sweep**: Removes unreachable objects.
- **Compact**: Rearranges memory (in some collectors).

### Memory Leaks
Memory leaks happen when unused objects are still referenced. Common causes:
- Static collections
- Unclosed resources
- Long-living listeners

Use tools like **VisualVM**, **JConsole**, **YourKit**, **Eclipse MAT** to analyze.

### Useful JVM Options
```bash
-verbose:gc
-Xms<size>         # Initial Heap Size
-Xmx<size>         # Max Heap Size
-XX:+UseG1GC
-XX:+PrintGCDetails
-XX:+HeapDumpOnOutOfMemoryError
```

### References
- [Java Memory Management - Oracle Docs](https://docs.oracle.com/javase/specs/)
- [G1 Garbage Collector](https://openjdk.org/jeps/246)
- [Java Performance Tuning](https://www.baeldung.com/java-heap-memory)
