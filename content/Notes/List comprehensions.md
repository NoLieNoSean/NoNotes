Very much like set comprehensions.

Syntax: `[<output function> | ...<<variable> <- <input set>>, ...<predicates>]`

Use predicates to 'filter' elements from the input set(s).
All elements of the input set are passed to the output function if no predicates are present.
All predicates must evaluate to true for an element from the input set to be passed to the output function.

Comprehensions can be reused when placed inside functions `boomBangs xs = [ if x < 10 then "BOOM!" else "BANG!" | x <- xs, odd x]`

When drawing from several lists, comprehensions produce all combinations of the given lists and then join them by the output function we supply. 
```hs
ghci> [ x*y | x <- [2,5,10], y <- [8,10,11]]  
[16,20,22,40,50,55,80,100,110]
```

If we do not care about the value of a variable, we can use `_` in place of it `length' xs = sum [1 | _ <- xs]`

List comprehensions can be nested.
```hs
ghci> let xxs = [[1,3,5,2,3,1,2,4,5],[1,2,3,4,5,6,7,8,9],[1,2,4,2,1,6,3,1,3,2,3,6]]  
ghci> [ [ x | x <- xs, even x ] | xs <- xxs]  
[[2,2,4],[2,4,6,8],[2,4,2,6,2,6]]
```
