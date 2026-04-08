---
id: "434"
date: 2026-03-20
time: 11:54
tags:
  - ALG4
  - Lecture
---
> [!Recap]
> 1. Let $E$ be a field. Let $G$ be a subgroup of automorphisms of $E$. Let $F=E^{G}$. We proved:
> 	1. $[E:F]\leqslant |G|$
> 	2. For all $\alpha\in E$, $\prod (x-\beta)$, where $\beta$ ranges over all elements in the $G$-orbit of $\alpha$, is the minpoly of $\alpha$ over $F$. 
> 	3. $E/F$ is a separable extension. 
> 	4. $[E:F]=|G|$.
> 2. $E/F$ fintie extension. Let $G=\text{Aut}_{F}(E)$. Then $F\subseteq E^{G}\subseteq E$. Suppose (we will prove this later) that $|G|< \infty$. Then, $[E:F]=|G|[E^{G}:F]$.

---

# Galois Extensions

> [!Proposition]
> Let $E/F$ be finite. Let $G=\text{Aut}_{F}(E)$. TFAE:
> 1. $[E:F]=|G|$. 
> 2. $F=E^{G}$.
> 
> > [!Proof]-
> > 
> > $[E:F]=|G|$ $\iff$ $[E^{G}:F]=1$ $\iff$ $E^{G}=F$. 
> 

^1ab213

> [!Definition] Galois extension
> Let $E/F$ be a finite extension. Say that this extension is **Galois** (or $E$ is Galois over $F$) if it satisfies the (equivalent) conditions of [[LEC ALG4 19#^1ab213]]. 

> [!Proposition]
> Let $E/F$ be a finite Galois extension. Let $f\in F[x]$ be irreducible. If $f$ has a root in $E$, then $f$ splits into linear factors over $E$. 
> 
> > [!Proof]-
> > 
> > Let $\alpha\in E$ be a root of $f$. Let $G=\text{Aut}_{F}(E)$, so $F=E^{G}$. Let $A$ be the $G$-orbit of $\alpha$. Then $f=c\cdot\text{irr}(\alpha; F)$, which by [[LEC ALG4 18#^dbed4e]] splits completely in $E$.

^806468

Recall [[LEC ALG3 20#^0b1e65]], [[LEC ALG3 20#^b78800]], and [[LEC ALG4 16#^ba7e62]]. 

> [!Theorem]
> Let $E/F$ be a finite extension. TFAE:
> 1. $E/F$ is Galois. 
> 2. $E/F$ is normal and separable. 
> 3. $E$ is the splitting field of a separable polynomial in $F[x]$. 

^1f27bb

[!Proof]-

$(1)\implies (2)$ Use lemmas from [[LEC ALG4 18]] to get separability. [[LEC ALG4 19#^806468]] gives normality. 

$(2)\implies (3)$ Let $\alpha\in E$ be a primitive element of $E/F$. Let $f\in F[x]$ be the minpoly of $\alpha$ over $F$. $f$ is separable. Let $\{ \alpha_{1}=\alpha, \alpha_{2}, \dots, \alpha_{r} \}$ be the set of $F$-conjugates of $\alpha$ in $\overline{E}$ so $\alpha_{i}\in E$ for all $1\leqslant i\leqslant r$ by normality. 
$$
E=F(\alpha)\subseteq F(\alpha_{1}, \alpha_{2}, \dots, \alpha_{r})\subseteq E.
$$
Thus, $E$ is the splitting field of $F$. 

[!Lemma] @isaacsAlgebraGraduateCourse2009 18.3
Let $E/F$ be some extension. Let $f(x)\in F[x]$. Let $\Omega$ be the set of all roots of $f$ in $E$. Assume $\Omega\ne 0$. Let $G=\text{Aut}_{F}(E)$. Then
1. $G$ permutes the elements of $\Omega$. 
2. If $\Omega$ generates $E$ over $F$, then $G\hookrightarrow\text{Sym}(\Omega)$. 
3. Suppose that $f$ is irreducible and $E$ is a splitting field of some polynomial in $F[x]$, then $G$ acts transitively on $\Omega$. 

[!Proof]-

$(1)$ We have seen this before - for $\sigma\in G$, $\sigma(f(\alpha))=f(\sigma(\alpha))$. 

$(2)$ By $(1)$, there exists a group homomorphism $G\to\text{Sym}(\Omega)$. Let $H$ be the kernel. $H$ acts on $E$. Since $\Omega \subseteq E^{H}$ and $F\subseteq E^{H}$, we have $F(\Omega)\subseteq E^{H}$. By hypothesis, $F(\Omega)=E$, so we have $E=E^{H}$. This forces $H=\{ \mathrm{id} \}$. 

---

Last class, we saw that $E/F$ finite $\implies$ $|\text{Aut}_{F}(E)|< \infty$. 

