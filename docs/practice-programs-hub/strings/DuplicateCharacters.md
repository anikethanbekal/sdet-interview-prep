---
title: Count duplicate characters in Java and Python
tags:
  - java
  - python
  - string
  - easy
  - language-syntax
categories:
  - Programming
  - Coding
difficulty: easy
background: bg-[#d1fae5]
badge_color: text-green-800 bg-green-100
topic: string-manipulation
date: 2025-06-30
author: Anikethan Bekal
intro: |
   This is a basic string manipulation problem where the goal is to count the number of duplicate characters in a given string.
---

# 🧠 Problem: Count Duplicate Characters

Write a function that takes a string as input and returns the number of duplicate characters in it.

**Category**: Strings  
**Difficulty**: Easy  
**Tags**: string, brute-force, optimized

---

## ✅ Requirements

- **Input**: 
  - A non-empty string `str` (e.g., `"Hello World"`)
- **Output**: The count of duplicate characters in `str` (e.g., `h = 3
i = 3 ...`)
- **Constraints**:
  - Case-sensitive comparison.
  - Time complexity should be linear `O(n)`.

---

## 🧪 Example(s)

```text
Input:  
  str = "Hello World"
Output: 2
```

---

## ☕ Java Solution

```java
public static void bruteforce(String str){
	int count;
	if (str == null) {
		System.out.println("The given string is null");
	} else if (str.isEmpty()) {
		System.out.println("The given string is empty");
	} else {
		char[] string = str.toCharArray();
		for (int i = 0; i < string.length; i++) {
			count =1;
			for (int j = i+1; j < string.length; j++) {
				if(string[i]==string[j] && string[i]!=' ') {
					count++;
					string[j] ='0';
				}
			}
			if(count>1 && string[i]!='0') {
				System.out.println(string[i] + " = " + count);
			}	
		}
	}
}
public static void hashsMap(String str) {
	char[] ch = str.toCharArray();
	//If  order is important use LinkedHashMap
	//If order not imp use HashMap
	//If natural order requried use TreeMap
	Map<Character,Integer> map = new LinkedHashMap<Character,Integer>(); 
	for(int i = 0; i<ch.length;i++){
	  if(!map.containsKey(ch[i])){
	    map.put(ch[i], 1);
	  }else{
	    map.put(ch[i],map.get(ch[i])+1);
	  }
	}
	for (Map.Entry<Character, Integer> entry : map.entrySet()) {
	  if(entry.getValue()>1){
      System.out.println(entry.getKey() + " = " + entry.getValue());
		}
	}
}
public static void main(String[] args) {
	String str = "This is duplicate characters check program";
	bruteforce(str);
	hashsMap(str);
}
```

---

## 🔵🟡 Python Solution

```python
def bruteforce(s):
    if s is None:
        print("The given string is null")
    elif s == "":
        print("The given string is empty")
    else:
        string = list(s)
        for i in range(len(string)):
            count = 1
            if string[i] == '0':
                continue
            for j in range(i + 1, len(string)):
                if string[i] == string[j] and string[i] != ' ':
                    count += 1
                    string[j] = '0'
            if count > 1 and string[i] != '0':
                print(f"{string[i]} = {count}")

def hash_map(s):
    # Using OrderedDict to preserve insertion order
    char_count = OrderedDict()
    
    for ch in s:
        if ch in char_count:
            char_count[ch] += 1
        else:
            char_count[ch] = 1

    for key, value in char_count.items():
        if value > 1:
            print(f"{key} = {value}")

def find_duplicates():
    s = "This is a string"
    counter = Counter(s)
    duplicates = {char: count for char, count in counter.items() if count > 1}
    for char, count in duplicates.items():
        print(f"Character '{char}' appears {count} times.")

def main():
    str1 = "This is duplicate characters check program"

    print("Using bruteforce method:")
    bruteforce(str1)

    print("\nUsing hashmap method:")
    hash_map("Hello World")

    print("\nUsing find_duplicates method:")
    find_duplicates()
if __name__ == "__main__":
    main()
```

---

## 🔍 Explanation

- **Java**:
  - Iterates through each character in the string.
  - Uses a brute-force approach or a HashMap to count duplicate characters.
- **Python**:
  - Uses a list-based approach, a dictionary, or the `Counter` class to count duplicate characters efficiently.

---

## ⏱️ Time & Space Complexity

| Language | Time Complexity | Space Complexity | Notes                          |
|----------|-----------------|------------------|--------------------------------|
| Java     | O(n)            | O(n)             | Uses a HashMap for counting    |
| Python   | O(n)            | O(n)             | Uses a dictionary or Counter   |

---

## ⚠️ Interview Tips / Notes

- Be prepared to count:
  - Duplicate characters in case-sensitive scenarios.
  - Characters with **Unicode**, emojis, or special characters (complex case).
- Avoid using built-in functions if interviewers ask for manual logic:
  - **Java Manual Approach**: Use nested loops for brute force.
  - **Python Manual Approach**: Use loops and conditionals.

---

## 🏷 Tags

`string`, `python`, `java`, `duplicates`, `easy`, `interview`, `syntax`, `language-syntax`

---