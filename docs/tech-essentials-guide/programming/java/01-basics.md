---
title: Java Basics
tags:
  - java
  - basic
  - arrays
  - medium
categories:
  - Programming
  - Interview
  - Notes
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: java
date: 2025-07-05
author: Anikethan Bekal
intro: |
  This is a java basics notes required to know for SDET roles .
---

# Core Java for SDETs: Compact Notes

These notes provide a quick reference for essential Core Java concepts, tailored for an SDET role.

## 🧱 1. Java Basics

* **Introduction to Java & its role in testing:**
    * Java is a robust, platform-independent, object-oriented language.
    * **Role in Testing:** Dominant language for test automation (Selenium, Appium), building custom testing frameworks, performance testing tools (JMeter), and creating utility libraries for testing.

* **Java History and Features:**
    * **History:** Developed by James Gosling at Sun Microsystems (now Oracle) in the mid-1990s.
    * **Features:**
        * **Platform Independent (WORA - Write Once, Run Anywhere):** Achieved through JVM.
        * **Object-Oriented:** Based on Objects and Classes.
        * **Simple:** Clean syntax, less complex than C++.
        * **Secure:** Robust security model.
        * **Robust:** Strong memory management, exception handling.
        * **Multithreaded:** Supports concurrent execution.
        * **High Performance:** Just-In-Time (JIT) compilers.
        * **Distributed:** Designed for networked environments.

* **JVM, JRE, JDK – Roles and Differences:**
    * **JVM (Java Virtual Machine):**
        * **Role:** An abstract machine that provides the runtime environment for Java bytecode. It executes the `.class` files.
        * **Nature:** Platform-dependent. Actual "runtime" component.
    * **JRE (Java Runtime Environment):**
        * **Role:** Provides the necessary components to *run* Java applications. It includes the JVM, Java core classes, and supporting files.
        * **Nature:** Does not contain development tools (compiler, debugger).
    * **JDK (Java Development Kit):**
        * **Role:** Comprehensive kit for *developing, compiling, and running* Java applications. It includes the JRE + development tools like `javac` (compiler), `java` (launcher), `jar`, `javadoc`, etc.
        * **Nature:** Essential for developers/SDETs.

* **Setting up Java Environment:**
    * **Steps:**
        1.  Download and install the latest stable JDK from Oracle.
        2.  Set `JAVA_HOME` environment variable to the JDK installation directory.
        3.  Add `%JAVA_HOME%\bin` (Windows) or `$JAVA_HOME/bin` (Linux/macOS) to the `PATH` environment variable.
        4.  Verify installation: Open terminal/command prompt and run `java -version` and `javac -version`.

* **Writing & Running a Java Program:**
    * **Write:** Create a `.java` file (e.g., `MyProgram.java`) with a `public class MyProgram { public static void main(String[] args) { /* code */ } }`.
    * **Compile:** Open terminal, navigate to directory, run `javac MyProgram.java`. This creates `MyProgram.class` (bytecode).
    * **Run:** Execute `java MyProgram` (no `.class` extension). The JVM loads and executes the bytecode.

* **Java Coding Standards:**
    * **CamelCase for names:** `ClassName`, `methodName`, `variableName`.
    * **Constants:** `ALL_CAPS_WITH_UNDERSCORES`.
    * **Indentation:** Consistent 4 spaces or 1 tab.
    * **Brace style:** Typically "Egyptian style" (`{` on same line).
    * **Meaningful Names:** Variables, methods, classes should clearly indicate their purpose.
    * **Comments:** Use `//` for single-line, `/* ... */` for multi-line, `/** ... */` for Javadoc.

---

## 📝 2. Java Syntax and Fundamentals

* **Java Keywords and Identifiers:**
    * **Keywords:** Reserved words with predefined meanings (e.g., `public`, `static`, `void`, `int`, `if`). Cannot be used as identifiers.
    * **Identifiers:** Names given to classes, methods, variables, packages. Rules: Start with letter, `$`, or `_`; can contain digits; case-sensitive; no keywords.

* **Variables and Data Types:**
    * **Variables:** Named memory locations to store data. Declared as `dataType variableName = value;`.
    * **Data Types:**
        * **Primitive (value types):**
            * `byte` (1 byte), `short` (2 bytes), `int` (4 bytes), `long` (8 bytes) - Whole numbers.
            * `float` (4 bytes), `double` (8 bytes) - Floating-point numbers.
            * `char` (2 bytes, Unicode) - Single character.
            * `boolean` (1 bit) - `true` or `false`.
        * **Non-Primitive/Reference (object types):** `String`, Arrays, Classes, Interfaces. Store memory addresses of objects.

* **Type Casting (Implicit & Explicit):**
    * **Implicit (Widening):** Automatic conversion from smaller to larger data type (e.g., `int` to `long`, `float` to `double`). No data loss.
        byte -> short -> char -> int -> long -> float -> double
    * **Explicit (Narrowing):** Manual conversion from larger to smaller data type. Requires a cast operator `(type)`. Potential for data loss (e.g., `double` to `int`).
        double -> float -> long -> int -> char -> short -> byte
        * Example: `int x = (int) 3.14; // x becomes 3`

* **Operators:** Symbols performing operations on operands.
    * **Arithmetic:** `+`, `-`, `*`, `/`, `%` (modulus).
    * **Logical:** `&&` (AND), `||` (OR), `!` (NOT). Operate on boolean expressions.
    * **Relational:** `==` (equals), `!=` (not equals), `<`, `>`, `<=`, `>=`. Return boolean.
    * **Bitwise:** `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`. Operate on bits (less common for SDETs in daily tasks).
    * **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`.
    * **Ternary:** `condition ? value_if_true : value_if_false;` (Shorthand `if-else`).

* **Flow Control Statements:** Dictate execution order.
    * **`if`, `if-else`, `if-else-if-else`, `switch`:**
        * `if (condition) { // code }`
        * `if (condition) { // code } else { // code }`
        * `if (condition 1) { // code } else if (condition 2) { // code } else { // code }`
        * `switch (expression) { case value: // code; break; default: // code; }` (Java 7+ allows String in switch).
    * **`short-hand if..else`:**
        * `variable = (condition) ? expressionTrue :  expressionFalse;`
        * Example:
            `String result = (time < 12) ? "Good Morning" : "Good Evening";`
    * **`for`, `while`, `do-while`:**
        * `for (initialization; condition; increment/decrement) { // code }`
        * `while (condition) { // code }` (Executes 0 or more times)
        * `do { // code } while (condition);` (Executes at least once)
        * **Enhanced For Loop (for-each):** `for (Type element : arrayOrCollection) { // code }` - Iterates over elements directly.
    * **`break`, `continue`:**
        * `break;`: Terminates the nearest loop or `switch` statement.
        * `continue;`: Skips the current iteration of the loop and proceeds to the next.

* **Arrays:** Ordered collections of fixed-size elements of the same data type.
    * **Single-Dimensional:** `dataType[] arrayName = new dataType[size];` or `dataType[] arrayName = {val1, val2};`
    ```java
    //Declare array
    String[] cars;
    //insert into array
    String cars[] = {"TATA", "M&M", "AUDI","BMW"};
    //Access item from array
    cars[0]; //TATA
    //To Change in array
    cars[3] ="TOYOTA";
    ```

    ```java
    //Array ops
    //Array length
    cars.length;
    
    //Loop into array
    for(int i=0; i<cars.length;i++){
        System.out.println(cars[i]);
    }

    //Using for each
    for (String carName: cars){
        System.out.println(carName);
    }
    ```
    * **Multidimensional (e.g., 2D):** `dataType[][] matrix = new dataType[rows][cols];`
    * **Array Manipulation Techniques:** Accessing elements (`array[index]`), iterating (loops, for-each), `array.length`, `Arrays.copyOf()`, `System.arraycopy()`.

* **Input Handling:**
    * **`Scanner`:** Simpler for common input types (int, String, etc.).
        * `Scanner scanner = new Scanner(System.in);`
        * `String name = scanner.nextLine();`
        * `int age = scanner.nextInt();`
        * **Remember to `scanner.close()` to prevent resource leaks.**
    * **`BufferedReader`:** More efficient for reading large amounts of text (e.g., file input). Needs `InputStreamReader`. Throws `IOException`.
        * `BufferedReader br = new BufferedReader(new InputStreamReader(System.in));`
        * `String line = br.readLine();`

---

## 🧠 3. Methods and Functional Programming Basics

* **Defining and Calling Methods:**
    * **Definition:** A block of code that performs a specific task.
        * `[accessModifier] [static] [returnType] methodName([parameters]) { // method body }`
        * Example: `public static int add(int a, int b) { return a + b; }`
    * **Calling:** `objectName.methodName(arguments);` (for instance methods) or `ClassName.methodName(arguments);` (for static methods).

* **Method Parameters and Return Types:**
    * **Parameters:** Variables listed in the method signature, receiving values passed during the call.
    * **Return Type:** The data type of the value a method sends back. `void` means no value is returned.

* **Method Overloading:**
    * Defining multiple methods in the *same class* with the *same name* but *different parameter lists* (different number of parameters, different types of parameters, or different order of parameters).
    * Return type alone is not sufficient for overloading.
    * Example: `add(int a, int b)`, `add(double a, double b)`, `add(int a, int b, int c)`.

* **Recursion:**
    * A method calling itself.
    * Requires a **base case** (termination condition) to prevent `StackOverflowError`.
    * Often used for problems that can be broken down into smaller, similar sub-problems (e.g., factorial, Fibonacci, tree traversals).

* **Scope of Variables (Local, Global, Static):**
    * **Local Variables:** Declared inside a method, block, or constructor. Accessible only within that block. No default value; must be initialized.
    * **Instance (Global/Object) Variables:** Declared inside a class but outside any method/block. Belongs to an object. Accessible via object reference. Have default values.
    * **Static (Class) Variables:** Declared inside a class but outside any method, with the `static` keyword. Belongs to the class, not an object. Shared among all instances. Accessed via `ClassName.variableName`.

* **Pass by Value vs Pass by Reference:**
    * **Java is strictly Pass by Value.**
    * When primitive data types are passed, a *copy* of the value is passed. Changes to the parameter inside the method do not affect the original variable.
    * When objects (non-primitive data types) are passed, a *copy of the reference* (memory address) is passed. Both the original reference and the copied reference point to the *same object* in memory. So, changes to the *object's state* via the method's parameter *will* affect the original object. The reference itself cannot be re-pointed to a new object.

---

## 🔤 4. String Manipulation

* **`String` Class and String Pool:**
    * **`String` Class:** Represents immutable (cannot be changed after creation) sequences of characters.
    * **String Pool (String Literal Pool):** A special memory area within the Heap where String literals are stored. When a String literal is created, Java first checks the pool. If it exists, the existing object's reference is returned; otherwise, a new String object is created and placed in the pool.
    * Created using `String s = "hello";` (literal) or `String s = new String("hello");` (object, always creates new in heap).

* **`String`, `StringBuilder`, `StringBuffer`:**
    * **`String`:**
        * **Immutability:** Once created, its value cannot be changed. Any operation that appears to modify a String actually creates a *new* String object.
        * **Thread-Safety:** Inherently thread-safe due to immutability.
        * **Performance:** Less efficient for frequent modifications due to creation of many intermediate String objects.
        * **Use Case:** When string content is constant or rarely changes.
    * **`StringBuilder`:**
        * **Mutability:** Allows modification of string content without creating new objects.
        * **Thread-Safety:** Not thread-safe (faster for single-threaded environments).
        * **Performance:** Highly efficient for frequent string manipulations (insertions, deletions, appends).
        * **Use Case:** When string content needs frequent modification in a single-threaded context.
    * **`StringBuffer`:**
        * **Mutability:** Similar to `StringBuilder`, allows content modification.
        * **Thread-Safety:** Thread-safe (methods are `synchronized`).
        * **Performance:** Slower than `StringBuilder` due to synchronization overhead.
        * **Use Case:** When string content needs frequent modification in a multi-threaded context.

* **Common String Methods and Usage:**
    | **Method**                                     | **Syntax**                               | **Example**                                    |
    |------------------------------------------------|------------------------------------------|------------------------------------------------|
    | `length()`                                     | `string.length()`                        | `"hello".length()` → `5`                       |
    | `charAt(int index)`                            | `string.charAt(index)`                   | `"hello".charAt(1)` → `e`                      |
    | `substring(int beginIndex)`                    | `string.substring(beginIndex)`           | `"hello".substring(2)` → `"llo"`               |
    | `substring(int beginIndex, int endIndex)`      | `string.substring(beginIndex, endIndex)` | `"hello".substring(1, 4)` → `"ell"`            |
    | `indexOf(char/String)`                         | `string.indexOf(char/String)`            | `"hello".indexOf('l')` → `2`                   |
    | `lastIndexOf(char/String)`                     | `string.lastIndexOf(char/String)`        | `"hello".lastIndexOf('l')` → `3`               |
    | `equals(Object another)`                       | `string.equals(anotherString)`           | `"hello".equals("hello")` → `true`             |
    | `equalsIgnoreCase(String another)`             | `string.equalsIgnoreCase(anotherString)` | `"hello".equalsIgnoreCase("HELLO")` → `true`   |
    | `startsWith(String prefix)`                    | `string.startsWith(prefix)`              | `"hello".startsWith("he")` → `true`            |
    | `endsWith(String suffix)`                      | `string.endsWith(suffix)`                | `"hello".endsWith("lo")` → `true`              |
    | `contains(CharSequence s)`                     | `string.contains(sequence)`              | `"hello".contains("ell")` → `true`             |
    | `replace(char oldChar, char newChar)`          | `string.replace(oldChar, newChar)`       | `"hello".replace('l', 'p')` → `"heppo"`        |
    | `replaceAll(String regex, String replacement)` | `string.replaceAll(regex, replacement)`  | `"hello123".replaceAll("\\d", "")` → `"hello"` |
    | `trim()`                                       | `string.trim()`                          | `"  hello  ".trim()` → `"hello"`               |
    | `toUpperCase()`                                | `string.toUpperCase()`                   | `"hello".toUpperCase()` → `"HELLO"`            |
    | `toLowerCase()`                                | `string.toLowerCase()`                   | `"HELLO".toLowerCase()` → `"hello"`            |
    | `split(String regex)`                          | `string.split(regex)`                    | `"a,b,c".split(",")` → `["a", "b", "c"]`       |
    | `concat(String str)`                           | `string.concat(str)`                     | `"hello".concat(" world")` → `"hello world"`   |
    | `valueOf(primitiveType)`                       | `String.valueOf(primitiveType)`          | `String.valueOf(123)` → `"123"`                |

---

* **String Comparison and Immutability:**
    * **Comparison:**
        * `==` (Operator): Compares object *references* (memory addresses). `s1 == s2` is true only if `s1` and `s2` refer to the *exact same object*.
        * `equals()` (Method): Compares object *content*. `s1.equals(s2)` is true if `s1` and `s2` have the *same sequence of characters*. **Always use `equals()` for content comparison.**
    * **Immutability:** Explained above. Key concept for understanding String behavior and performance. When you modify a String, you are creating a new one.

---