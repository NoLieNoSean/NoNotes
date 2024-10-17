---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-09-10
time: 14:00
---
## Recall and orient

>There's no point to being stupid. 
>-Karnataki


>[!Recall]
>We showed in L7 that a spanning set in $\mathbb{R}^{n}$ must be of size at least $n$, and a linearly independent set in $\mathbb{R}^{n}$ cannot have more than $n$ elements. We defined a basis to be a linearly independent spanning set, and concluded that any basis of $\mathbb{R}^{n}$ must have cardinality $n$. Then, we asked the question "Does *every* vector space $V$ have a basis?". We discussed two strategies to construct a basis for any arbitrary vector space:
>1. Start with an empty set, and keep adding vectors (while preserving linear independence) till $V$ is spanned. However, we do not know if this process will ever terminate.
>2. Start with any (finite) spanning set of $V$, and keep removing (redundant) vectors till you reach a basis. However, we do not know if $V$ has a spanning set of finite size to begin with.
>
>We observed that both approaches hinge on $V$ having a finite spanning set. We turned this property into a definition, and called $V$ a *finite dimensional vector space* (fdvsp) if it has a finite spanning set.

Our goal in L8 is to prove the following two theorems:

>[!Theorem] Theorem 1
>Every fdvsp has a basis.

>[!Theorem] Theorem 2
>Any two bases of an fdvsp have same cardinality, i.e, the cardinality of a basis is an *invariant* of an fdvsp.

---
## Theorem 1

We will use the strategies outlined in the Recall section.
### Strategy 1: Augment a linearly independent (or empty) set

Let $V$ be a fdvsp. Any linearly independent set $I\in V$ can be extended to give a basis of $V$. The existence of a finite spanning set  $S\in V$ is guaranteed by definition. Keep adding vectors from $S$ to $I$ that increase the span until you exhaust the spanning set. 

>**Proof**
>
>Define $I_{0}:=I$.
>Let $S:=\{ \mathbf{u}_{1}, \mathbf{u}_{2}, \dots, \mathbf{u}_{k} \}$ be a spanning set in $V$.
>Define
>$$
>I_{j}:=
>\begin{cases}
>I_{j-1}\cup \{ \mathbf{u}_{j} \} & \mathbf{u}_{j}\not\in\text{Span }I_{j-1} \\
>I_{j-1} & \mathbf{u}_{j}\in\text{Span }I_{j-1}
>\end{cases}
>$$
>Each $I_{j}$ is linearly independent, and $\text{Span }I_{k}=\text{Span }S=V$.
>Thus, $I_{k}$ is a basis. ❏

You could also begin from an empty set, if you'd like. If using the "span" of an empty $I_{0}$ to define $I_{1}$ troubles you, just make $I_{0}$ have a single non zero vector.
### Strategy 2: Prune a spanning set

Take a finite spanning set $S$ of $V$ and keep deleting unnecessary vectors till what remains is linearly independent. This process is guaranteed to terminate before we reach the empty set, since the empty set is not a spanning set, and we are preserving the spanning property on every deletion.

---
## Theorem 2

>[!Note]
>Theorem 2 does not say anything about the existence of bases, only that if bases exist, they must have the same cardinality. We proved Theorem 1 for a reason.

We have already shown that any basis of $\mathbb{R}^{n}$ has $n$ vectors. This is a result of pivot analysis. Now, we will show an analogue for a general fdvsp. Again, two strategies:
1. Use first principles of vector spaces to prove the result.
2. Show that every fdvsp is isomorphic to $\mathbb{R}^{n}$. 

### Strategy 1: First principles

#### Establishing tools: Steinitz Exchange Lemma

>[!Theorem] Steinitz Exchange Lemma
>Let $\mathbf{v}\in S\subset V$, where $V$ is a fdvsp and $S$ is of finite cardinality, and $\mathbf{u}\in V$ such that $\mathbf{u}\in\text{Span }S$. Suppose $\mathbf{u}\not\in\text{Span }(S\setminus \{ \mathbf{v} \})$, then $\mathbf{v}\in\text{Span }((S\setminus \{ \mathbf{v} \})\cup \{ \mathbf{u} \})$.

>**Proof**
>
>Let $S=\{ \mathbf{v}, \mathbf{v}_{2}, \dots, \mathbf{v}_{k} \}$
>Since $\mathbf{u}\in\text{Span }S$,
>$$
>\mathbf{u}=a\mathbf{v}+\sum_{i=2}^{k}a_{i}\mathbf{v}_{i}, 
>$$
>for some $a, a_{i}\in \mathbb{R}$. 
>Also, $a\ne 0$ because $\mathbf{u}\notin\text{Span }(S\setminus \{ \mathbf{v} \})$.
>$$
>\implies \frac{1}{a}\mathbf{u}-\sum_{i=2}^{k}\left( \frac{a_{i}}{a} \right)\mathbf{v}_{i}=\mathbf{v}.
>$$
>❏

What this is essentially saying is that you can "exchange" or "replace" $\mathbf{v}$ with $\mathbf{u}$ while conserving the span of $S$ (We can express any linear combination of elements in $S$ as a linear combination of elements in $(S\setminus \{ \mathbf{v} \})\cup \{ \mathbf{u} \}$ by replacing $\mathbf{v}$ in the linear combination with the expression for $\mathbf{v}$  in terms of $\mathbf{u}$ obtained in the proof above). 


#### One more Lemma

>[!Theorem] Lemma
>If $I\subset V$ is a finite linearly independent set, and $S\subset V$ is a finite spanning set, then $|I|\le|S|$. 

Define
$I:=\{ \mathbf{u}_{1}, \mathbf{u}_{2}, \dots \mathbf{u}_{m} \}$
$S:=\{ \mathbf{v}_{1}, \mathbf{v}_{2}, \dots \mathbf{v}_{n} \}$

The lemma claims that $m\le n$.

We will first show that if $m\le n$ then, after rearranging $v_{j}$ if necessary, $\{ \mathbf{u}_{1}, \dots, \mathbf{u}_{m}, \mathbf{v}_{m+1}, \dots, \mathbf{v}_{n} \}$ spans $V$. A sub-lemma, if you will.

>[!Warning]
>I am certain the following proof is wrong; there may exist infinitely many linear combinations of $S'$ equalling $\mathbf{u}_{m'}$, and we do not know that $\mathbf{u}_{m'}\not\in\text{Span }(S'\setminus \{ \mathbf{v}_{m'} \})$. Also, what we're trying to prove can be shown easily. Since $I$ spans $V$, take the same linear combinations, and $\{ \mathbf{u}_{1}, \dots, \mathbf{u}_{m}, \mathbf{v}_{m+1}, \dots, \mathbf{v}_{n} \}$ now spans $V$. Why did we do the following!?


>**Proof**
>
>By induction on $|I|$.
>Holds for $|I|=0$, as there are no $\mathbf{u}_{i}$'s, and $S$ spans $V$. 
>Assume the result holds for $|I|=m'-1$, where $m'-1< n$. 
>$S'=\{ \mathbf{u}_{1}, \dots, \mathbf{u}_{m'-1}, \mathbf{v}_{m'}, \mathbf{v}_{m'+1}, \dots, \mathbf{v}_{n} \}$ spans $V$. 
>Then, $\mathbf{u}_{m'}=\sum_{i=1}^{m'-1}c_{i}\mathbf{u}_{i}+\sum_{j=m'}^{n}d_{j}\mathbf{v}_{j}$. Observe that some $d_{j}$ must be non zero, say $d_{m'}$, after possibly rearranging the $\mathbf{v}_{j}$'s.
>Further, $\mathbf{u}_{m'}\in\text{Span }S'$, $\mathbf{u}_{m'}\not\in\text{Span }(S'\setminus \{ \mathbf{v}_{m'} \})$.
>Exchange $\mathbf{v}_{m'}$ and $\mathbf{u}_{m'}$, which we can do courtesy the Steinitz Exchange Lemma.
>We have shown that $S''=\{ \mathbf{u}_{1}, \dots, \mathbf{u}_{m'-1}, \mathbf{u}_{m'}, \mathbf{v}_{m'+1}, \dots, \mathbf{v}_{n} \}$ spans $V$. 
>❏


> Everything that follows is ok

Now, assume $m=n+k$ for some $k> 0$. Since the preceding result holds for $m=n$, $\{ \mathbf{u}_{1}, \mathbf{u}_{2}, \dots, \mathbf{u}_{n} \}$ must be a spanning set. This implies that $\mathbf{u}_{n+1}, \dots, \mathbf{u}_{k}$ can be expressed as a linear combination of $\mathbf{u}_{1}, \mathbf{u}_{2}, \dots, \mathbf{u}_{n}$, which implies $I$ cannot be linearly independent (contradiction!). Consequently, we must have  $m\le n$. ❏
#### Finally, theorem 2

>**Proof**
>
>Let $B_{1}$ and $B_{2}$ be bases of cardinality $n$ and $m$ respectively.
>Since $B_{1}$ is linearly independent, and $B_{2}$ is a spanning set, $n\le m$.
>Since $B_{2}$ is linearly independent, and $B_{1}$ is a spanning set, $m\le n$.
>Thus, $m=n$. ❏

---
### Strategy 2: Exploit previous work on $\mathbb{R}^{n}$

#### Isomorphisms

Observe: A basis "defines" a "coordinate system" on the fdvsp $V$. How? Any $\mathbf{v}\in V$ can be written *uniquely* as a linear combination of basis vectors.

Thus, if we fix the order in which the elements of a basis $B=\{ \mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n} \}$ are listed, then $(c_{1}, c_{2}, \dots, c_{n})^{T}\in\mathbb{R}^{n}$ is the coordinate vector of $\mathbf{u}=\sum_{i=1}^{n}c_{i}\mathbf{v}_{i}$ in $V$. 

>[!Definition]
>Suppose $V$ and $W$ are vector spaces. A function $f:V\to W$ is called an *isomorphism* is
>1. $f$ is a bijection
>2. $f(\mathbf{v}_{1}+\mathbf{v}_{2})=f(\mathbf{v}_{1})+f(\mathbf{v}_{2}), f(\lambda \mathbf{v})=\lambda f(\mathbf{v})$ for all $\lambda\in \mathbb{R}$, $\mathbf{v}, \mathbf{v}_{1}, \mathbf{v}_{2}\in V$, i.e, $f$ is a linear map.

>[!Remark]
>If $f$ is an isomorphism, so is $f^{-1}$. (If $f$ is bijective, $f^{-1}$ exists, and is a bijection. Property 2 can be easily proved.)

If there is an isomorphism from $V$ to $W$, we say that $V$ and $W$ are isomorphic ($V\cong W$).

Also, if $f:V\to W$ is an isomorphism, then any true assertion in $V$ about its vector space structure remains true after transport by $f$ to $W$ and vice versa. 

Let $f$ be a linear map from $\mathbb{R}^{c}$ to $\mathbb{R}^{r}$. We know that $f$ can be represented as an $r\times c$ matrix $A$. If $f$ is an isomorphism, $f$ must be bijective, and it must be the case that $c=r$ (cuz pivots).
Thus, $\mathbb{R}^{n}\cong\mathbb{R}^{k}\iff n=k$. 
#### Proof of theorem 2, again

>**Proof**
>
>Let $V$ be a fdvsp.
>Let $\{ \mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n} \}$ and $\{ \mathbf{u}_{1}, \mathbf{u}_{2}, \dots, \mathbf{u}_{k} \}$ be bases of $V$.
>Now, there exist isomorphisms $f:\mathbb{R}^{n}\to V$, defined by $f\left((c_{1}, c_{2}, \dots, c_{n})^{T}\right)= \sum c_{i}\mathbf{v}_{i}$ and $g: \mathbb{R}^{k}\to V$ defined by $g((d_{1}, d_{2}, \dots, d_{k})^{T})= \sum d_{i}\mathbf{u}_{i}$. 
>It follows that $g^{-1}f:\mathbb{R}^{n}\to \mathbb{R}^{k}$ is an isomorphism.
>Thus, $n=k$. ❏





