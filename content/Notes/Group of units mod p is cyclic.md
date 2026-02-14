---
id: "52"
date: February 2025
---
Edit: This is an immediate corollary of [[TUT ALG3 9#^a7389b]]

---

@hersteinAbstractAlgebra1996 [p. 66], problems 37 to 40

The set of all positive integers less than a given positive integer $n$ and co-prime to $n$ [[LEC ALG2 1#Groups|form a group]] under multiplication modulo $n$, which is denoted by $U_{n}$. To be clear, $U_{n}$ in general can have any group structure: $U_{6}\cong C_{3}$, $U_{8}\cong V_{4}$, $U_{10}\cong C_{4}$, $U_{15}\cong C_{2}\times C_{4}$, etc. However, we will prove that when $n$ is prime (denoted by replacing $n$ with $p$), $U_{p}$ is cyclic.

<small>Note for future self: This is NOT the same thing as proving that a group of order $p$ is cyclic, idiot. $U_{p}$ has order $p-1$. Also, $U_{n}$ being cyclic does not imply $n$ is prime ($U_{n}$ is cyclic iff $n=2, 4, p^{k}$ or $2p^{k}$ where $p$ is an odd prime; see @chenOrdersModuloPrime2015 [p. 3]).</small> 

> [!Theorem]
> In a cyclic group $G$ of order $n$, for each positive integer $m$ that divides $n$, there are $\phi(m)$ elements of order $m$. 

For $m=n$, we know that there are $\phi(n)$ elements of order $n$. Now, for $m\ne n$, the elements of order $m$ must lie in a subgroup of $G$ of order $m$. Note that in cyclic groups, only one group of order $m$ exists, so all the elements of order $m$ in $G$ must lie in this one subgroup. This subgroup would have $\phi(m)$ elements of order $m$. 

It follows that $n=\sum_{m\ | \ n}\phi(m)$ (note that this is a general result which can be interpreted without any group theory).

---

Unrelated thing i proved that didn't turn out to be useful here but is nonetheless interesting:

> [!Theorem]
> For any group $G$ of order $n$, let the number of elements of order $m$ be denoted by $\psi(m)$. Then, $\psi(m)=k\phi(m), k\in \mathbb{Z}_{\geq 0}$. 

If there are no elements of order $m$, $k=0$. 
Let $x$ be an element of order $m$. $x$ must generate a subgroup of $G$ of order $m$, which in turn must have $\phi(m)$ elements of order $m$. Thus, the moment we have one element of order $m$, $\phi(m)$ elements of order $m$ are forced onto us. Let $y$ be another element of order $m$ such that $\langle y \rangle\ne\langle x \rangle$. The intersection $\langle y \rangle\cap \langle x \rangle$ must be a proper subgroup of $\langle y \rangle$ and $\langle x \rangle$, and so must have order less than $m$, preventing it from housing any elements of order $m$. Thus, the $\phi(m)$ elements of order $m$ in $\langle y \rangle$ are different from the ones in $\langle x \rangle$, bringing the total count to $2\phi(m)$, and you get the idea. 

---

> [!Theorem]
> Let $G$ be a finite group of order $n$ for which the number of solutions of $x^{m}=e$ is at most $m$ for any $m$ dividing $n$. Then, $G$ must be cyclic.

As shown above, having one element of order $m$ results in having an entire cyclic subgroup $A_{m}$ of order $m$. Not all elements in this cyclic subgroup will have order $m$, BUT, all elements in $A_{m}$ will satisfy $x^{m}=e$, since all their orders divide $m$. This gives us $m$ solutions to $x^{m}=e$, and $\phi(m)$ elements of order $m$. If there exists another element of order $m$, then it must also satisfy $x^{m}=e$, bringing the number of solutions to $x^{m}=e$ to $m+1$. Thus, $\psi(m)\leq \phi(m)$. Now, 
$$
n=\sum_{m\ | \  n}\psi(m)\leq \sum_{m\ | \  n}\phi(m)=n
$$
Thus, $\psi(m)=\phi(m)$ for all $m\ | \ n$.