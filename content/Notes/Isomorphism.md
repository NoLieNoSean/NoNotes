---
tags:
  - ALG1
---

## Definition

>[!Definition]
>An [[Invertible Transformations#Invertible transformations|invertible linear transformation]] $A:V\to W$ is called an *isomorphism*. 
>Two [[Vector spaces|vector spaces]] $V$ and $W$ are called *isomorphic* (denoted $V \cong W$) if there is an isomorphism $A:V\to W$.

Isomorphic spaces can be considered as different representations of the same space, meaning that all properties and constructions involving vector space operations are preserved under isomorphism.

---
## Properties 

### An isomorphism maps a basis to a basis

>[!Theorem]
>Let $A:V\to W$ be an isomorphism, and let $S = \{ \mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n} \}$ be a [[bases|basis]] in $V$. Then  $S' = \{ A\mathbf{v}_{1}, A\mathbf{v}_{2}, \dots A\mathbf{v}_{n} \}$ is a basis in $W$.
>
>LADW, 6.6
>^Theorem1

>**Proof**
>
>**$S'$ is a spanning set in W**
>
>Since $S$ is a basis in $V$, $S$ must be a spanning set in $V$, and thus must permit a representation of every vector in $V$ as a linear combination of its elements.
>$$
>\mathbf{x}=\sum_{k=1}^n\alpha_k\mathbf{v}_k \ \ \forall \mathbf{x}\in V
>$$
>$$
>\implies A\mathbf{x}=\sum_{k=1}^n\alpha_kA\mathbf{v}_k \ \ \forall \mathbf{x}\in V
>$$
>Also, since $A$ is invertible, $A$ must be surjective. Thus, for every $\mathbf{y}\in W$,  $\exists \mathbf{x}\in V$ such that $\mathbf{y}=A\mathbf{x}$. Thus, $S'$ is a spanning set in $W$. 
>
>**$S'$ is linearly independent**
>
>Say $S'$ is not linearly independent. Then, some vector $\mathbf{w}\in W$ must permit representation as two distinct linear combinations of the vectors in $S'$. 
>$$
>\mathbf{w}=\sum_{i=1}^{n} \beta_{i}(A\mathbf{v}_{i}) = \sum_{i=1}^{n} \gamma_{i}(A\mathbf{v}_{i}),
>$$
>where $\beta_{i}\ne \gamma_{i}$ for some $i$. Now, 
>$$
>\begin{align}
>&\sum_{i=1}^{n} \beta_{i}(A\mathbf{v}_{i}) = \sum_{i=1}^{n} \gamma_{i}(A\mathbf{v}_{i}) \\
>\implies& A\left( \sum_{i=1}^{n} \beta_{i}\mathbf{v}_{i}  \right)= A\left( \sum_{i=1}^{n}\gamma_{i}\mathbf{v}_{i} \right) \\
>\implies &\sum_{i=1}^{n} \beta_{i}\mathbf{v}_{i}= \sum_{i=1}^{n}\gamma_{i}\mathbf{v}_{i}, &\text{A is invertible} \\
>\implies& \beta_{i}=\gamma_{i}\ \  \forall 1\le i\le n,  & \text{S is a basis in V}
>\end{align}
>$$
>We have reached a contradiction. Thus,  $S'$ must be linearly independent. ❏

In the above theorem, one can replace "basis" by "[[Bases#Linearly independent systems|linearly independent]]", "[[Bases#Spanning systems|spanning]]", or "linearly dependent" - all these properties are preserved under isomorphisms.

Also, If $A$ is an isomorphism, so is $A^{-1}$. Therefore, in the above theorem we can say that $S$ is a basis if and only if $S'$ is a basis. 

### Basis to basis maps are isomorphisms

>[!Theorem]
>Let $A:V\to W$ be a linear map, and let $S=\{ \mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n} \}$ be a basis in $V$. If $A(S)$ is a basis in $W$, $A$ is an isomorphism.
>
>LADW, 6.7
>^Theorem2

>**Proof**
>One way to prove this is to show $A$ is injective and surjective, which is easily done. 
>
>An alternative is to show $A$ is invertible. As we know, a linear map is defined by its values on a basis. Let $S'=A(S)$. *Define* $A^{-1}$ by $A^{-1}(S')=S$. It is easy to verify that $A^{-1}$ works as both a left inverse and right inverse of $A$.  Thus, $A$ must be an isomorphism. ❏

>[!Example]
>- $\mathbb{P}^{\mathbb{F}}_{n}\cong \mathbb{F}^{n+1}$: ($\mathbb{P}^{\mathbb{F}}_{n}$ is the set of polynomials with degree at most $n$ and with coefficients in $\mathbb{F}$.) The [[Bases#Standard basis in $ mathbb{P} n$|standard basis]] in $\mathbb{P}^{\mathbb{F}}_{n}$ is $\{1, x, x^{2}, \dots, x^{n}\}$. Let $A:\mathbb{F}^{n+1}\to \mathbb{P}^{\mathbb{F}}_{n}$ be defined by $A\mathbf{e}_{1}=1, A\mathbf{e}_{2}=x, \dots, A\mathbf{e}_{n+1}=x^{n}$, where $\mathbf{e}_{i}$ are the [[Bases#Standard basis in $ mathbb{F} n$|standard basis vectors]] in $\mathbb{F}^{n+1}$. By the previous theorem, $A$ is an isomorphism, and the assertion follows.
>- Any vector space over $\mathbb{F}$ is isomorphic to $\mathbb{F}^{n}$ for some $n$.
>- $M^{\mathbb{F}}_{m\times n}\cong \mathbb{F}^{mn}$


Thus, to show two sets are isomorphic, it is sufficient to construct a LT which maps the basis of one set onto another.

### Putting it all together

Let $A:V\to W$ be a linear map. Consider the statements:
1. $S$ is a basis in $V$
2. $A(S)$ is a basis in $W$.
3. $A$ is an isomorphism (remember, this is just fancy talk for saying $A$ is invertible).

The [[#^Theorem1|first theorem]] states $1\&3\implies2$
The [[#^Theorem2|second theorem]] states $1\&2\implies 3$.

Thus, the two theorems effectively say given $1$, we have $2\iff 3$. 

Here is a concise thought trail (Given $1$):
$$
\begin{align}
A \text{ is invertible}  \underset{ \text{defn} }{ \iff } &(\text{Left inverse exists})\text{ and }(\text{Right inverse exists}) \\
  \underset{ * }{ \iff } & (A \text{ is injective})\text{ and }(A \text{ is surjective}) \\
\underset{ ** }{ \iff } & (A(S)\text{ is linearly independent})\text{ and } \\
&(A(S)\text{ is a spanning set}) \\
\underset{ \text{defn} }{ \iff } & A(S)\text{ is a basis in }W
\end{align}
$$
(\*) is easy to show. Refer [[Analysis1_HW1.pdf|this]].
(\*\*) is important. Proof goes exactly like the proof of the [[#^Theorem1|first theorem]]. 

Speaking in terms of matrices, we get the following corollary to the two theorems:

>[!Corollary]
>An $m\times n$ matrix is invertible if and only if its columns form a basis in $\mathbb{F}^{m}$.

