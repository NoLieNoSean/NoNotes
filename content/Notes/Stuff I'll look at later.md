[!Fact]
Let $k$ be a field. Then, $S=k[x_{1}, \dots, x_{n}]$ is a UFD. This follows from the fact that any regular local ring is a UFD. A Local ring $R$ is one which has a unique maximal ideal $\mathfrak{m}$. If a ring is regular local, then $\mathfrak{m}/\mathfrak{m}^{2}$ is a vector space over $R/\mathfrak{m}$. 

[!Exercise]
$\dim R[x]\leq 1+\dim R$. 

It follows that $\dim \mathbb{Z}[x]=2$. 

$\mathbb{C}[x]$ is a Euclidean domain. Define the degree of a power series to be the degree of the smallest non-zero term. 

[!Definition]
Let $R$ be a ring and $S$ be a subset of $R$. An element $d\in R$ is a gcd of $S$ if
1. $d\ | \ a$ for all $a\in S$, and
2. If $c\ | \ a$ for all $a\in S$, then $c\ | \ d$. 

[!Theorem]
Let $a_{1}, \dots, a_{n}\in R$. Let $S=\{ a_{1}, \dots, a_{n} \}$. Then,
$$
d\in R\text{ is gcd of }S \text{ such that }d=\sum_{i=1}^{n} r_{i}a_{i}\text{ for }r_{i}\in R\iff(d)=(a_{1})+(a_{1})+\dots+(a_{n})=(a_{1}, \dots, a_{n})
$$

[!Proof]-

Let $d=\gcd S$ such that $d=\sum_{i=1}^{n}r_{i}a_{i}$. Since $d\in(a_{1})+\dots+(a_{n})$, we have $(d)\subseteq(a_{1})+\dots+(a_{n})$. Also, since $d\ | \ a_{i}$ for all $i$, $(a_{i})\subseteq(d)$ for all $i$, and the reverse inclusion holds.

Conversely, suppose $(d)=(a_{1})+\dots+(a_{n})$. $d=\sum_{i=1}^{n}r_{i}a_{i}$ and $d\ | \ a_{i}$ immediately follow.  show property $(2)$. Show that if there exists another gcd $d'$, $d$ and $d'$ are associates.

[!Example]
Let $R$ be a ring. Suppose $d$ is the gcd of $S=\{ a_{1}, \dots, a_{n} \}$. It is possible that $d$ may not be expressible as a $R$ linear combination of the elements of $S$. For example, $1$ is the gcd of $\{ x, y \}$ in $k[x, y]$, but $1\not\in \langle x, y \rangle$. 




$\mathbb{Z}[x]/(2, x+1, x^{2}+5)$.

Show that $(x^{2}+5, 3)$ is not a prime ideal.


---

[!Definition]
Let $\alpha\in \mathbb{C}$ not be an integer. Let $\alpha$ satisfy a monic irreducible polynomial $f(x)=x^{n}+a_{n-1}x^{n-1}+\dots+a_{0}$, where $a_{i}\in \mathbb{Z}$. We define the norm and trace of $\alpha$ as $\text{Norm}(\alpha)=(-1)^{n}a_{0}$, $\text{Tr}(\alpha)=-a_{n-1}$.

For example, every element in $\mathbb{Z}[i]$ is of the form $\alpha=a+bi$; $\text{Tr}(\alpha)=2a$, $\text{Norm}(\alpha)=a^{2}+b^{2}$. 




---








[!Remark]
Every ideal in a ring is a module over $R$. Look up nakayama's lemma @singhBasicCommutativeAlgebra2011 [p. 16]. 

[!Remark]
Let $f:R\to S$ be a homomorphism and $M$ be a $S$-module $\implies$ $M$ is an $R$-module. If $M$ is an $R$-module, then for any ideal $J\subseteq ann(M)$, $M$ is $R/J$ module. 

$ann(M)=\{ r\in R\ | \ rM=0 \}$.

---

[!Theorem]
Every PID is a UFD.

[!Proof]-
factorization exists: Suppose $R$ is a PID. We prove by contradiction. Suppose there exists nonzero nonunit $x$ which cannot be factors as a finite product of irreducible elements. Let $S$ be the set of all such elements. Let $\alpha\in S$. Then $(\alpha)\subseteq M$ where $M$ is a maximal ideal and $M=(\beta)$ where $\beta$ is irreducible. So $(\alpha)\subseteq(\beta)$, $\alpha=f\beta$. $f$ can't be a unit, since that would mean $\alpha \not\in S$. For the same reason, $f$ can't be written as the product of a unit and finitely many irreducibles. Thus, $f$ is forced to be in $S$. So, $(\alpha)\subset(\beta)$, and the inclusion is proper. Continue this process to get an infinite chain; this is a contradiction. 

Uniqueness of factorization:jjj




---




[!Proposition]
Let $R$ be a UFD. Then a non-zero element if prime iff it is irreducible.

[!Proof]-
Prime implies irreducible in any ID. Have to show irreducible implies prime. Let $p$ be an irreducible element and let $p\ | \ ab$. We need to show that $p\ | \ a$ or $p\ | \ b$.

$ab=rp$ for some $r\in R$. By hypothesis, we can write $a=up_{1}\dots p_{s}$, $b=wq_{1}\dots q_{t}$, where $u, w$ are units and $p_{i}$ and $q_{i}$ are irreducibles. We now have
$$
(uw)p_{1}\dots p_{s}q_{1}\dots q_{t}=rp.
$$
Thus, $p$ is an associate of at least one of $p_{1},\dots,p_{s},q_{1},\dots,q_{t}$. If $p$ is an associate of some $p_{i}$, then $p\ | \ a$. If $p$ is an associate of some $q_{i}$, $p\ | \ b$. 

[!Proposition]
If $R$ is a UFD and $a, b\ne 0$, then gcd of $a$ and $b$ exists. 

[!Proof]-
Let $a=up_{1}^{a_{1}}\dots p_{s}^{a_{s}}$ and $b=wq_{1}^{b_{1}}\dots q_{t}^{b_{t}}$. Consider $\{ p_{i_{1}}, \dots, p_{i_{k}} \}$ where $p_{i_{j}}$ is an associate of some ...


---

In $R=k[x_{1}, \dots, x_{n}]$, If $I=(m_{1}, \dots, m_{t})$ and $d$ is the gcd of the generators of $I$, then $I=(d)(I:(d))$. 

