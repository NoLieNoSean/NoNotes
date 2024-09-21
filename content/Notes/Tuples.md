
Tuples are enclosed in parenthesis.

Different from lists.
- Of fixed length.
- May not be homogeneous.
- Their type depends on how many elements they have and the type of those elements. For example, which `[1, 2, 3]` and `[1, 2]` are the same type, `(1, 2, 3)` (a triplet) and `(1, 2)` (a pair) are different types. `(1, "two")` and `(1, 2)` are also different types. Since Lists are homogeneous, tuples of different types cannot be stored in the same list. 
- Like lists, tuples can be compared with each other if their components can be compared. Only you can't compare two tuples of different sizes, whereas you can compare two lists of different sizes.

# Prefix tuple operators
- `fst` takes a pair, returns first component
- `snd` takes a pair, returns second component
- `zip` 
```hs
ghci> zip [1,2,3,4,5] [5,5,5,5,5]  
[(1,5),(2,5),(3,5),(4,5),(5,5)]  
ghci> zip [1 .. 5] ["one", "two", "three", "four", "five"]  
[(1,"one"),(2,"two"),(3,"three"),(4,"four"),(5,"five")]
ghci> zip [1..] ["apple", "orange", "cherry", "mango"]  
[(1,"apple"),(2,"orange"),(3,"cherry"),(4,"mango")]
```

