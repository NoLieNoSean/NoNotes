
Haskell's if statements are expressions, since the else block is mandated (which ensures that the if statement always returns a value).
```
doubleSmallNumber' x = (if x > 100 then x else x*2) + 1
```