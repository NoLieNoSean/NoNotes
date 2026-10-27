---
id: "608"
date: 2026-10-26
time: 13:41
tags:
  - LIALG
---
# Problem 2



### (a) Prove that $\mathfrak{n}(A)$ is a Lie subalgebra of $\mathfrak{sl}(n, \mathbb{C})$.

Let $(i,j) \in A$ and $(k,l) \in A$. Note that $i < j$ and $k < l$.
$$ [E_{ij}, E_{kl}] = \delta_{jk} E_{il} - \delta_{li} E_{kj} $$
For the bracket to be non-zero, we must have $j=k$ or $l=i$.

**Case 1: $j = k$.**
Then $[E_{ij}, E_{jl}] = E_{il}$.
Since $(i,j) \in A$ and $(j,l) \in A$, we have $i < j < l$.
By the given condition on $A$, $E_{il} \in \mathfrak{n}(A)$.

**Case 2: $l = i$.**
Then $[E_{ij}, E_{ki}] = -E_{kj}$.
Since $(k,i) \in A$ and $(i,j) \in A$, we have $k < i < j$.
By the condition on $A$, $E_{kj} \in \mathfrak{n}(A)$.

---

### (b) Prove that $M(A)$ is a maximal nilpotent Lie subalgebra of $\mathfrak{sl}(n, \mathbb{C})$.

**Proof:**

**1. $M(A)$ is a Lie subalgebra:**
$M(A) = K \oplus \mathfrak{n}(A)$.
*   $K$ consists of diagonal matrices, so $[K, K] = 0$.
*   $\mathfrak{n}(A)$ is a subalgebra by part (a), so $[\mathfrak{n}(A), \mathfrak{n}(A)] \subseteq \mathfrak{n}(A)$.
*   Check $[K, \mathfrak{n}(A)]$: Let $D = \text{diag}(d_1, \dots, d_n) \in K$ and $E_{ij} \in \mathfrak{n}(A)$ (so $(i,j) \in A$).
    $$ [D, E_{ij}] = (d_i - d_j) E_{ij} $$
    By definition of $K$, $d_i = d_j$ for all $(i,j) \in A$. Thus $[D, E_{ij}] = 0$.
    So $[K, \mathfrak{n}(A)] = 0$.
Therefore, $[M(A), M(A)] = [\mathfrak{n}(A), \mathfrak{n}(A)] \subseteq \mathfrak{n}(A) \subseteq M(A)$. $M(A)$ is a subalgebra.

**2. $M(A)$ is nilpotent:**
The lower central series is defined by $M(A)^0 = M(A)$, $M(A)^{k+1} = [M(A), M(A)^k]$.
$M(A)^1 = [M(A), M(A)] = [\mathfrak{n}(A), \mathfrak{n}(A)] \subseteq \mathfrak{n}(A)$.
Since $\mathfrak{n}(A) \subseteq \mathfrak{n}$ (strictly upper triangular matrices), and $\mathfrak{n}$ is nilpotent (specifically $\mathfrak{n}^n = 0$), the series for $\mathfrak{n}(A)$ terminates. Thus the series for $M(A)$ terminates. $M(A)$ is nilpotent.

**3. $M(A)$ is maximal:**

Let $L$ be a nilpotent Lie subalgebra of $\mathfrak{sl}(n, \mathbb{C})$ such that $M(A) \subseteq L$. We want to show $L = M(A)$.

**Step 4: Analyze the action of $K$ on $L$**
$K$ consists of diagonal matrices, which are semisimple (diagonalizable) operators.
A key property of nilpotent Lie algebras is that any semisimple element must be central.
*   Let $H \in K \subseteq L$. Since $H$ is diagonal, $\text{ad}(H)$ is a semisimple operator.
*   Since $L$ is nilpotent, for any $x \in L$, $\text{ad}(x)$ is a nilpotent operator on $L$.
*   Thus $\text{ad}(H)$ is both semisimple and nilpotent, which implies $\text{ad}(H) = 0$ on $L$.
*   Therefore, $[H, X] = 0$ for all $H \in K$ and $X \in L$.

**Step 5: Show $L$ is block-diagonal**
Let $X \in L$. We can write $X = \sum x_{ij} E_{ij}$.
For any $H \in K$, $[H, X] = \sum_{i,j} x_{ij}(h_i - h_j)E_{ij} = 0$.
This implies $x_{ij}(h_i - h_j) = 0$ for all $i,j$ and all $H \in K$.

*   **Case 1: $i$ and $j$ are in different blocks ($V_r$ and $V_s$ with $r \neq s$).**
    Since there are at least two blocks (assuming $A \neq I$, otherwise $M(A)=\mathfrak{n}$ which is standard maximal), we can construct a diagonal matrix $H \in K$ such that $h_i \neq h_j$. (We set the diagonal value for block $V_r$ to $a$ and block $V_s$ to $b$ with $a \neq b$, adjusting other blocks to ensure trace 0).
    Since $h_i \neq h_j$, we must have $x_{ij} = 0$.
    This holds for all $X \in L$. Thus, $L$ contains no matrices with non-zero entries between different blocks. $L$ is a subalgebra of $\bigoplus_{r=1}^m \mathfrak{gl}(V_r) \cap \mathfrak{sl}(n, \mathbb{C})$.

**Step 6: Analyze $L$ within each block**
Since $L$ is block-diagonal, we can look at its projection onto each block $V_r$. Let $L_r$ be the set of matrices in $\mathfrak{gl}(V_r)$ formed by the $V_r \times V_r$ block of elements in $L$.
*   Since $L$ is nilpotent, $L_r$ is a nilpotent subalgebra of $\mathfrak{gl}(V_r)$.
*   $M(A) \subseteq L$, so the projection of $M(A)$ is contained in $L_r$.
*   The projection of $M(A)$ onto block $V_r$ is the set of matrices of the form $cI + N$, where $N$ is strictly upper triangular. Let's call this algebra $\mathfrak{t}_0(V_r)$.

We know that $\mathfrak{n}(V_r)$ (strictly upper triangular matrices) is a maximal nilpotent subalgebra of $\mathfrak{sl}(V_r)$.
$\mathfrak{t}_0(V_r) = \mathbb{C}I \oplus \mathfrak{n}(V_r)$.
Any nilpotent subalgebra of $\mathfrak{gl}(V_r)$ containing $\mathfrak{t}_0(V_r)$ must be contained in $\mathbb{C}I \oplus \mathfrak{n}(V_r)$ (because its intersection with $\mathfrak{sl}(V_r)$ would be a nilpotent subalgebra containing $\mathfrak{n}(V_r)$, hence equal to $\mathfrak{n}(V_r)$).

Thus, $L_r = \mathfrak{t}_0(V_r)$.

**Conclusion**
Since $L$ is block-diagonal and each block $L_r$ equals the corresponding block of $M(A)$, we have $L = M(A)$. Thus $M(A)$ is maximal.

---

### (c) Prove that every maximal nilpotent Lie subalgebra of $\mathfrak{sl}(n, \mathbb{C})$ is, up to isomorphism, of the form $M(A)$.

**Proof:**
Let $L$ be a maximal nilpotent Lie subalgebra of $\mathfrak{sl}(n, \mathbb{C})$.
Since $L$ is nilpotent, it is solvable. By the conjugacy theorem for solvable subalgebras (Lie's Theorem context), $L$ is conjugate to a subalgebra of the standard Borel subalgebra $\mathfrak{b} = \mathfrak{h} \oplus \mathfrak{n}$ (upper triangular matrices).
Since the property of being a maximal nilpotent subalgebra is invariant under conjugation (automorphisms of the Lie algebra), we may assume without loss of generality that $L \subseteq \mathfrak{b}$.

So $L = (L \cap \mathfrak{h}) \oplus (L \cap \mathfrak{n})$. Let $K' = L \cap \mathfrak{h}$ and $\mathfrak{n}' = L \cap \mathfrak{n}$.
Since $L$ is nilpotent, for any $H \in K'$, $\text{ad}(H)|_L$ is nilpotent. But $H$ is diagonal, so $\text{ad}(H)$ is diagonalizable (semisimple). Thus $\text{ad}(H)|_L = 0$.
This means $[H, X] = 0$ for all $X \in L$.
In particular, for any $E_{ij} \in \mathfrak{n}'$, $[H, E_{ij}] = (h_i - h_j) E_{ij} = 0 \implies h_i = h_j$.

Let $A = \{ (i,j) \in I : E_{ij} \in \mathfrak{n}' \}$.
Since $\mathfrak{n}'$ is a subalgebra, it is closed under brackets.
$[E_{ij}, E_{jk}] = E_{ik}$. So if $(i,j), (j,k) \in A$, then $(i,k) \in A$.
This is the transitivity condition.
For $L$ to be *maximal*, we must include all possible elements that maintain nilpotency.
As shown in part (b), if $(i,j) \in A$ and $(j,k) \in A$, we must have $(i,k) \in A$ (closure).
Also, if $(i,k) \in A$ and $(j,k) \in A$ (with $i<j<k$), we have $E_{ik}, E_{jk} \in L$. The diagonal matrices in $K'$ must satisfy $h_i = h_k$ and $h_j = h_k$, so $h_i = h_j$.
We can add $E_{ij}$ to $L$. $[H, E_{ij}] = 0$ for $H \in K'$. $[E_{ik}, E_{ij}] = 0$. $[E_{jk}, E_{ij}] = E_{ik} \in L$.
The new algebra is still nilpotent. By maximality, $E_{ij}$ must already be in $L$, so $(i,j) \in A$.
Similarly for $(i,j), (i,k) \in A \implies (j,k) \in A$.
Thus $A$ satisfies the condition in the problem statement.

So $\mathfrak{n}' \subseteq \mathfrak{n}(A)$.
And $K' \subseteq \{ H \in \mathfrak{h} : h_i = h_j \text{ for } (i,j) \in A \} = K$.
So $L \subseteq K \oplus \mathfrak{n}(A) = M(A)$.
Since $L$ is maximal and $M(A)$ is nilpotent (from part b), we must have $L = M(A)$.

Thus, every maximal nilpotent subalgebra is conjugate to (isomorphic to) some $M(A)$.



---
