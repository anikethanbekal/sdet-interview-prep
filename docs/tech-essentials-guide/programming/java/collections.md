# Java Collections Deep Dive

Explore the Java Collections Framework in detail, understanding the nuances of various data structures and choosing the right one for your test automation needs.

## Topics:

- **List Implementations:** `ArrayList` vs. `LinkedList` performance characteristics.
- **Set Implementations:** `HashSet`, `LinkedHashSet`, `TreeSet` and their use cases.
- **Map Implementations:** `HashMap`, `LinkedHashMap`, `TreeMap`, `ConcurrentHashMap`.
- **Custom Objects in Collections:** Implementing `equals()` and `hashCode()`.
- **Sorting Collections:** `Comparable` and `Comparator`.

---

## 💡 SDET Perspective on Java Collections

Java Collections are fundamental for managing test data, processing API responses, handling UI elements, and building robust test automation frameworks. Choosing the right collection type can significantly impact the performance and maintainability of your tests.

---

## ✅ List Implementations: `ArrayList` vs. `LinkedList`

Both `ArrayList` and `LinkedList` implement the `List` interface, but they have different underlying data structures and performance characteristics.

| Feature | `ArrayList` | `LinkedList` | SDET Relevance |
|---|---|---|---|
| **Underlying Structure** | Dynamic Array | Doubly Linked List | |
| **Random Access (get/set by index)** | O(1) - Very fast | O(n) - Slow | `ArrayList` is better when you frequently need to access elements by their index (e.g., getting the 5th element from a list of web elements). |
| **Add/Remove (at end)** | O(1) amortized | O(1) | Both are efficient for adding/removing at the end. |
| **Add/Remove (in middle)** | O(n) - Slow (requires shifting elements) | O(1) - Fast | `LinkedList` is better when you frequently need to insert or delete elements in the middle of the list (less common in typical test automation). |
| **Memory Overhead** | Less | More (stores pointers for next/previous elements) | |

**SDET Best Practice:**
- For most test automation scenarios where you collect elements (e.g., `List<WebElement>`), `ArrayList` is generally preferred due to its faster random access, which is common when iterating or accessing specific elements.
- If you have a very specific use case involving frequent insertions/deletions in the middle of a large list, `LinkedList` might be considered, but this is rare in test automation.

**Example: Using ArrayList for WebElements**

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import java.util.ArrayList;
import java.util.List;

// Assuming 'driver' is an initialized WebDriver instance
public class WebElementCollector {
    public List<String> getLinkTexts(WebDriver driver) {
        List<WebElement> links = driver.findElements(By.tagName("a"));
        List<String> linkTexts = new ArrayList<>(); // ArrayList is a good choice here
        for (WebElement link : links) {
            linkTexts.add(link.getText());
        }
        return linkTexts;
    }
}
```

---

## ✅ Set Implementations: `HashSet`, `LinkedHashSet`, `TreeSet`

Sets are collections that store unique elements. They are useful for ensuring no duplicates in your data.

| Class | Order | Performance | SDET Relevance |
|---|---|---|---|
| `HashSet` | No guaranteed order | O(1) average for add, remove, contains | Most common. Use when you need fast checks for uniqueness and order doesn't matter (e.g., verifying unique IDs in a response). |
| `LinkedHashSet` | Insertion order | O(1) average | Use when you need uniqueness AND want to maintain the order in which elements were added (e.g., processing unique log entries in chronological order). |
| `TreeSet` | Natural sorting order (or custom `Comparator`) | O(log n) | Use when you need uniqueness AND elements to be stored in a sorted order (e.g., sorting a list of unique product prices). |

**Example: Using HashSet for Unique Data**

```java
import java.util.HashSet;
import java.util.Set;

public class UniqueDataProcessor {
    public boolean hasDuplicates(List<String> data) {
        Set<String> uniqueItems = new HashSet<>(data);
        return uniqueItems.size() != data.size();
    }

    public Set<String> getUniqueErrorCodes(List<String> logEntries) {
        Set<String> errorCodes = new HashSet<>();
        for (String entry : logEntries) {
            if (entry.contains("ERROR")) {
                // Extract error code (simplified example)
                String errorCode = entry.substring(entry.indexOf("ERROR:") + 6).trim();
                errorCodes.add(errorCode);
            }
        }
        return errorCodes;
    }
}
```

---

## ✅ Map Implementations: `HashMap`, `LinkedHashMap`, `TreeMap`, `ConcurrentHashMap`

Maps store key-value pairs, where each key is unique.

| Class | Order | Thread-Safety | Performance | SDET Relevance |
|---|---|---|---|---|
| `HashMap` | No guaranteed order | Not thread-safe | O(1) average | Most common. Use for fast lookups of configuration properties, test data, or API response parsing where order doesn't matter. |
| `LinkedHashMap` | Insertion order | Not thread-safe | O(1) average | Use when you need to maintain the order in which key-value pairs were inserted (e.g., processing ordered JSON fields). |
| `TreeMap` | Natural sorting order of keys (or custom `Comparator`) | Not thread-safe | O(log n) | Use when you need keys to be sorted (e.g., storing test results by timestamp). |
| `ConcurrentHashMap` | No guaranteed order | Thread-safe | O(1) average (highly concurrent) | Use in multi-threaded test frameworks where multiple threads need to access and modify the same map concurrently (e.g., shared test counters, global configuration). |

**Example: Using HashMap for Test Data**

```java
import java.util.HashMap;
import java.util.Map;

public class TestDataReader {
    public Map<String, String> getUserData(String userId) {
        Map<String, String> userData = new HashMap<>();
        // In a real scenario, this would come from a file, database, or API
        if (userId.equals("user123")) {
            userData.put("username", "testuser");
            userData.put("password", "password123");
            userData.put("email", "test@example.com");
        }
        return userData;
    }

    // Usage in test:
    // Map<String, String> user = new TestDataReader().getUserData("user123");
    // String username = user.get("username");
}
```

---

## ✅ Custom Objects in Collections: `equals()` and `hashCode()`

When you store custom objects in collections (especially `HashSet`, `HashMap`, `LinkedHashSet`, `LinkedHashMap`), it's crucial to properly override `equals()` and `hashCode()` methods. If you don't, these collections will use the default `Object` implementations, which compare memory addresses, leading to incorrect behavior (e.g., duplicates in a `HashSet`).

- **`equals(Object obj)`:** Defines what makes two objects logically equal.
- **`hashCode()`:** Returns an integer hash code value for the object. If two objects are equal according to the `equals(Object)` method, then calling the `hashCode` method on each of the two objects must produce the same integer result.

**SDET Relevance:**
- Comparing complex API response objects.
- Storing custom test data objects in sets or maps.
- Verifying that a list of expected objects matches a list of actual objects.

**Example: Custom User Object**

```java
import java.util.Objects;

public class UserProfile {
    private String id;
    private String email;
    private String name;

    public UserProfile(String id, String email, String name) {
        this.id = id;
        this.email = email;
        this.name = name;
    }

    // Getters (omitted for brevity)

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProfile that = (UserProfile) o;
        return Objects.equals(id, that.id) &&
               Objects.equals(email, that.email) &&
               Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, name);
    }

    @Override
    public String toString() {
        return "UserProfile{" +
               "id='" + id + '\'' +
               ", email='" + email + '\'' +
               ", name='" + name + '\'' +
               '}';
    }
}

// Usage:
// UserProfile user1 = new UserProfile("1", "a@b.com", "Alice");
// UserProfile user2 = new UserProfile("1", "a@b.com", "Alice");
// System.out.println(user1.equals(user2)); // true (if equals/hashCode overridden)

// Set<UserProfile> users = new HashSet<>();
// users.add(user1);
// users.add(user2); // Will not add if equals/hashCode overridden correctly
// System.out.println(users.size()); // 1
```

---

## ✅ Sorting Collections: `Comparable` and `Comparator`

Sorting is a common operation in test automation, especially when verifying ordered lists or tables.

- **`Comparable` (Natural Ordering):** Used when objects of a class have a single, natural ordering. Implement `compareTo(T o)` method.
- **`Comparator` (Custom Ordering):** Used when objects don't have a natural ordering, or you need multiple ways to sort them. Implement `compare(T o1, T o2)` method.

**SDET Relevance:**
- Verifying that search results are sorted correctly.
- Sorting test data before processing.
- Ordering API response lists for easier comparison.

**Example: Sorting Custom Objects**

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Product implements Comparable<Product> {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() { return name; }
    public double getPrice() { return price; }

    @Override
    public int compareTo(Product other) {
        // Natural ordering by name
        return this.name.compareTo(other.name);
    }

    @Override
    public String toString() {
        return "Product{name='" + name + "', price=" + price + "}";
    }
}

public class ProductSorter {
    public static void main(String[] args) {
        List<Product> products = new ArrayList<>();
        products.add(new Product("Laptop", 1200.00));
        products.add(new Product("Mouse", 25.00));
        products.add(new Product("Keyboard", 75.00));

        System.out.println("Original: " + products);

        // Sort by natural order (name)
        Collections.sort(products);
        System.out.println("Sorted by Name: " + products);

        // Sort by price using a Comparator (Lambda expression - Java 8+)
        Collections.sort(products, (p1, p2) -> Double.compare(p1.getPrice(), p2.getPrice()));
        System.out.println("Sorted by Price: " + products);

        // Sort by price in descending order
        Collections.sort(products, Comparator.comparingDouble(Product::getPrice).reversed());
        System.out.println("Sorted by Price (Desc): " + products);
    }
}
```

---

## 🏷 Tags

`java`, `collections`, `list`, `set`, `map`, `comparable`, `comparator`, `sdet`, `programming`, `core-java`, `data-structures`