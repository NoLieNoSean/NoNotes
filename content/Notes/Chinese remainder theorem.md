The Chinese Remainder Theorem is a tool for solving systems of linear congruences of the following form: $a_1x \equiv b_1 \pmod {m_1}, ....,a_{n-1}x \equiv \pmod{m_{n-1}}, a_nx \equiv b_n \pmod {m_n}$.

> [!Theorem] Chinese remainder theorem
> Let m$_1$, . . . , m$_n$ be positive integers different from 1 and pairwise relatively prime. Then for any nonzero integers a$_1$, . . . , a$_r$ the system of linear congruences$x \equiv a_1 \pmod{m_1}, ..., x \equiv a_r \pmod{m_r}$ has integer solutions, with any one of the solutions being congruent modulo $gcd(m_1, m_2 ...m_n)$ (since they are relatively prime, this will simply evaluate to their product).

Proof
Let there exist a solution $X$ for the system of modular congruences
$$
\begin{align}
 & X = b_1\pmod{n_1} \\
 & X = b_2\pmod{n_2} \\ 
  & \ \ \ \ \ \vdots \\
 & X = b_k\pmod{n_k} \\ 
\end{align}
$$
such that $n_1, n_2, ...n_k \in \mathbb{N}$, $\gcd(n_i, n_j) = 1 \space \forall \space i \neq j$, and $b_1, b_2, ...b_k \in \mathbb{Z}$.

- Proof
	- to prove→the system of congruences has a unique solution modulo $(n_1n_2n_3...n_k)$
	- here goes
		- let $N = n_1n_2n_3...n_k$
		- let $N_i = \dfrac{N}{n_i}$
		- assertion 1→$gcd(N_i, n_i) = 1$
		- assertion 2→if gcd(a, b) = 1 for $a, b \in \N$ , there must exist $x, y \in \Z$ which satisfy the equation $ax - by = 1$
		- using assertion 2, we can say that $N_ix_i - n_iy_i = 1$ for $x_i,y_i \in \Z$
		- $N_ix_i = n_iy_i + 1$
		- the above expression is equivalent to saying $N_ix_i \equiv1\pmod{n_i}$ *
		- assertion 3→$N_ix_i \equiv 0\pmod{n_j}$ for $i \neq j$
		- now, consider a solution for X $X = x_1N_1b_1 + x_2N_2b_2 ...x_kN_kb_k$
		- if we take$\pmod{n_i}$ , all terms except $x_iN_ib_i$ will evaluate to 0 (assertion 3)
		- thus, $X \equiv x_iN_ib_i\pmod{n_i}$
		- using *, $X \equiv b_i\pmod{n_i}$
		- thus, $\large X = x_1N_1b_1 + x_2N_2b_2 ...x_kN_kb_k = \sum \limits_{i=1}^{k}x_iN_ib_i $ is the solution of the system of congruences, congruent modulo $(n_1n_2n_3...n_k)$



- **Method to solve simultaneous congruences using the Chinese Remainder Theorem**
    - example: $x \equiv 2\pmod{4}\newline x \equiv 3\pmod{5}\newline x \equiv 1\pmod{7}$
    - note: all variable references are taken from the proof
    - first make sure that 4, 5 and 7 are relatively co-prime. Sure enough, there are. If not, try to break up the congruences.
    - let's define $a_i = x_ib_i$
    - then, the solution will reduce to $\large X = a_1N_1 + a_2N_2 +a_3N_3$
    - compute $N_i$ $\large X = a_1(5\times7) + a_2(4\times7) +a_3(4\times5)$
    - now, take $\pmod{4}, \pmod{5}, and\pmod{7}$ on both sides to get three equations which you can use to solve for $a_1, a_2,$ and $a_3$
    - $\pmod{4}$ on both sides: $2 \equiv a_1(5\times7) + 0 + 0 \pmod{4}$ $2 = a_1(-1)$ $a_1 = -2$
    - similarly, $a_2 = 1$ and $a_3 = -1$
    - these values for $a_i$ are not set in stone, different values will just result in a different solution for X
    - finally, use the obtained values to solve for X $\large X = -2(5\times7) +1(4\times7) -1(4\times5) = -62$
    - the general solution will be $-62 + 140t$ , where 140 is $gcd(4, 5, 7)$ and $t \in \Z$
    - usually, the solution is presented with the lowest natural number solution as the first term. so, the finial answer for X is $78 + 140 t$
    - note→if you encounter something like $3 \equiv 2a_i\pmod 7$ , remember that $a_i$ needs to be an integer. In this case, add 7 to the LHS repeatedly until the LHS becomes divisible by the coefficient of $a_i$ , which is 2 here. thus, $3+7 \equiv2a_i\pmod{2} \implies a_i = 5$