## Catalan numbers

$C_{n}$ is the number of binary trees with $n$ nodes.
$(C_{n})=(1, 2, 5, 14, 42, \dots)$. 
### Balanced strings

Consider all strings of length $2n$ over the alphabet $\{ (, ) \}$ that form balanced strings, i.e, the nesting of parenthesis is valid. For example, for $2n=4$, we have two: $()()$ and $(())$. For $2n=6$, we have 5: $()()()$, $((()))$, $(())()$, $()(())$, $(()())$. The number of such strings for $2n$ is equal to $C_{n}$. 

> [!Info] A bijection between the set of all balanced strings of length $2n$ and the set of all binary trees on $n$ vertices
> Given a balanced string, treat the interior of the first matched pair of parenthesis as the left child, and what follows as the right child. For example, in $(()())(())$, the left child is $()()$, and the right child is $(())$. It corresponds to this binary tree:
> 
> ![[Pasted image 20250223171005.png]]
> 
> Here's the bijection for $n=5$:
> 
> ![[Pasted image 20250223170944.png]]

### Monotonic lattice paths which do not pass over the diagonal

If we replace '(' with 'R' and ')' with 'U', then a balanced string of length $2n$ is a binary string with $n$ Rs and $n$ Us where each prefix has at least as many Rs as Us. If we now interpret the balanced string as a path in a $n\times n$ grid starting form the origin, the set of all balanced strings will represent the set of all monotonic paths from $(0, 0)$ to $(n, n)$ which do not cross the $x=y$ line. These are the 14 paths for $n=4$:
![[Pasted image 20250223203347.png]]

This manifestation of the Catalan numbers leads naturally to an explicit formula for $C_{n}$. 
$$
\begin{align}
C_{n}= & (\text{number of paths from }(0, 0)\text{ to }(n, n))- \\
 & (\text{number of such paths which rise above the }x=y\text{ line})
\end{align}
$$
To compute the second term, notice that there exists a bijection between the set of all paths from $(0, 0)$ to $(n, n)$ which rise above the $x=y$ line and the set of all paths from $(0, 0)$ to $(n-1, n+1)$:

![[Pasted image 20250223205828.png|400]]

Thus, we have
$$
C_{n}=\binom{2n}{n}-\binom{2n}{n-1}.
$$


### The recurrence relation

$C_{n}$ has a non-linear recurrence, which should be evident from the binary trees perspective. To make things work, we take $C_{0}=1$.
$$
C_{n}=\sum_{k=0}^{n-1} C_{k}C_{n-k-1}.
$$
Let the generating function be
$$
\phi(x)=\sum_{n\geq 0}C_{n}x^{n}.
$$
Now,
$$
\begin{align}
\phi(x) & =\sum_{n\geq1}\left( \sum_{k=0}^{n-1}C_{k}C_{n-k-1} \right)x^{n} +C_{0} \\
 & =1+x\sum_{n\geq 0}\left( \sum_{k= 0}^{n}C_{k}C_{n-k} \right)x^{n} \\
 & =1+x\left( \sum_{i\geq{0}}C_{i}x^{i} \right)\left( \sum_{j\geq 0}C_{j}x^{j} \right) \\
& =1+x\phi(x)^{2}
\end{align}
$$
The roots are $\phi(x)=\frac{1\pm \sqrt{ 1-4x }}{2x}$.

Note that in all our pervious encounters with generating functions, we got a single solution. The solution with the minus does not work, since it is not possible to associate a formal power series with it (trust me bro).

So, working with the other solution, we get
$$
\begin{align}
\phi(x) & = \frac{1}{2x}(1-\sqrt{ 1-4x }) \\
 & = \frac{1}{-2x}\left( \sum_{n\geq 1}\binom{\frac{1}{2}}{n}(-4x)^{n} \right) \\
 & =2\sum_{n\geq 0}\binom{\frac{1}{2}}{n+1}(-4x)^{n}
\end{align}
$$
(There is a truckload of justification that's required for what we just did, but it's ok to sweep it under the rug for now). 

Finally, the Catalan numbers can be read off the coefficients:

$$
\begin{align}
C_{n} & =2 \binom{\frac{1}{2}}{n+1}(-4)^{n} \\
 & = \cancel{ 2 }\frac{{\cancel{ \left( \frac{1}{2} \right) }\left( \frac{1}{2}-1 \right)\dots\left( \frac{1}{2}-n \right) }}{(n+1)!}4^{n}(-1)^{n} \\
 & = \frac{{(2-1)(4-1)\dots(2n-1)}}{(n+1)(n!)}2^{n} \\
 & =\frac{1}{n+1}\binom{2n}{n}.
\end{align}
$$
