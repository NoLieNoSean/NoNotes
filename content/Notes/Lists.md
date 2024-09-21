
>[!Definition] Lists
>Homogeneous collection of elements. Indexing starts at 0.

# Infix list operators

- Lists are concatenated by the `++` operator. Haskell has to iterate through the entire list on the left.
- Elements can be prepended to lists in O(1) time by using the `:` operator `'A':" SMALL CAT"`
- Indices are accessed using the `!!` operator `[9.4,33.2,96.2,11.2,23.25] !! 1`
- Relational operators compare lists in lexicographical order. Lists of different sizes can be compared.

# Prefix list operations
- `length` 
- `null` checks if a list is empty. 
- `reverse`
- `take` takes a number and a list, and extracts said number of elements from the beginning of the list. 
- `drop` opposite of `take`
- `maximum` works on all lists which can be ordered
- `minimum` ditto
- `sum` 
- `elem` takes a thing and a list of things; returns true if thing is in list.
- `cycle` takes a list and cycles it into an infinite list.
- `repeat` takes an element and produces an infinite list of just that element.

Do not use these on empty lists!
- `head` returns the first element
- `tail` pops the first element and returns the remnant ('tail')
- `last` returns the last element
- `init` pops the last element and returns the remnant