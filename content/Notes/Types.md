In Haskell,
- Every expression has a type.
- The type of every expression is known at compile time (static type system).
- The type of an expression is inferred, and need not be explicitly mentioned (type inference).
- Explicit types are always denoted with the first letter in capital case.

In GHCI use `:t` followed by an expression to fetch the type of the expression.
```hs
ghci> :t 'a'  
'a' :: Char
```
`::` is read as 'has type of'.

Unlike lists, each tuple has its own type.
```hs
- ghci> :t (True, 'a')  
- (True, 'a') :: (Bool, Char)
```

---
# Common types
- `Int` bounded, but more efficient.
- `Integer` unbounded, but less efficient.


`code`


```cpp
for(int i = 0; i < k; i ++){
	cout << i;
}
```
