## Catalan numbers

$C_{n}$ is the number os binary trees with $n$ nodes.
$C_{0}=1$, the empty binary tree
$C_{1}=1$, just the root
$C_{2}=2$, root with left child and root with right child.

$C_{n}$ has a non-linear recurrence:
$$
C_{n}=\sum_{k=0}^{n-1} C_{k}C_{n-k-1}.
$$
Let
$$
\phi(x)=\sum_{n\geq 0}C_{n}x^{n}.
$$
We will show that $C_{n}=\frac{1}{n+1}\binom{2n}{n}$.

### Instances of $C_{n}$ coming up

#### Balanced parenthesis

Consider all strings of length $2n$ over the alphabet $\{ (, ) \}$ that form balanced strings, i.e, the nesting of parenthesis is valid. For example, for $2n=4$, we have two: $()()$ and $(())$. This number for $2n$ is equal to $C_{n}$.
$()()()$, $((()))$, $(())()$, $()(())$, $(()())$.
Gave a bijection between the set of balanced strings and binary trees.


Balanced string: Any binary string of length $2n$ with $n$ zeroes and $n$ ones where each prefix has at least as many 0s at 1s.


Associating with ascending paths on a grid which lie below the x=y line
reflection method to count the above
$\binom{2n}{n}-\binom{2n}{n-1}$.




---

$$
\begin{align}
\phi(x) & =\sum_{n\geq1}\left( \sum_{k=0}^{n-1}C_{k}C_{n-k-1} \right)x^{n} +C_{0} \\
 & =1+x\sum_{n\geq 0}\left( \sum_{k\geq 0}C_{k}C_{n-k} \right)x^{n} \\
 & =1+x\left( \sum_{i\geq{0}}C_{i}x^{i} \right)\left( \sum_{j\geq 0}C_{j}x^{j} \right)
\end{align}
$$
Thus, $\phi(x)=1+x\phi(x)^{2}$.

Thus, $\phi(x)=\frac{1\pm \sqrt{ 1-4x }}{2x}$.
