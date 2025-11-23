---
id: "338"
date: 2025-10-30
time: 09:04
tags:
  - ALG3
  - Lecture
  - Processed
---
# Algebraic closures

## Embeddings

> [!Definition]
> Let $E/k$ and let $\sigma:k\to L$ be an embedding. $\sigma$ induces an isomorphism of $k$ with its image $\sigma k$, written as $k^{\sigma}$. An embedding $\tau$ of $E$ into $L$ is said to be **over** $\sigma$ if $\tau|_{k}=\sigma$. If $\sigma$ is an inclusion, we say $\tau$ is an embedding of $E$ over $k$. 

> [!Remark]
> Note that if $\alpha\in E$ is a root of $f(x)\in k[x]$, then $\alpha^{\tau}$ is a root of $f^{\sigma}$. 

^0d49d1

> [!Example]
> There does not exist an embedding of $\mathbb{Q}[\sqrt{ 2 }]$ into $\mathbb{Q}[\sqrt{ 3 }]$ over $\mathbb{Q}$. Suppose $\tau$ were such an embedding, with $\tau(\sqrt{ 2 })=\alpha$. $\alpha$ must satisfy the following for all $a+b\sqrt{ 2 }, c+d\sqrt{ 2 }\in \mathbb{Q}[\sqrt{ 2 }]$:
> $$
> \begin{align}
>  & ac+2bd+\alpha(ad+bc)=ac+\alpha^{2}bd+\alpha(ad+bc) \\
> \implies & 2=\alpha^{2},
> \end{align}
> $$
> which is not possible since $\sqrt{ 2 }\not\in \mathbb{Q}[\sqrt{ 3 }]$.

> [!Lemma]
> Let $E$ be an algebraic extension of $k$, and let $\sigma:E\to E$ be an embedding of $E$ into itself over $k$. Then $\sigma$ is an automorphism.
> 
> > [!Proof]-
> > 
> > It suffices to prove that $\sigma$ is surjective. Let $\alpha=\alpha_{1}\in E$, let $p(x)$ be its irreducible polynomial over $k$. Let $\alpha_{1}, \dots, \alpha_{n}$ be the roots of $p(x)$ which lie in $E$, and let $E'=k(\alpha_{1}, \dots, \alpha_{n})$ [^1]. $E'/k$ is finite by [[LEC ALG3 16#^167dcc]]. By [[#^0d49d1]], $\sigma(\alpha_{1}), \dots, \sigma(\alpha_{n})$ are roots of $p(x)$, so $\sigma(\{ \alpha_{1}, \dots, \alpha_{n} \})=\{ \alpha_{1}, \dots, \alpha_{n} \}$.  Since $E'$ is the smallest field containing $k$ and $\alpha_{1}, \dots, \alpha_{n}$, it follows that $E'\subseteq\sigma(E')$. Since there exists[^2] a $k$-basis of $k(\alpha_{1}, \dots, \alpha_{n})$ of the form
> > $$
> > \{ \alpha_{1}^{i_{1}}\dots\alpha_{n}^{i_{n}}:0\leqslant i_{1}\leqslant d_{1}-1, \dots, 0\leqslant i_{n}\leqslant d_{n}-1 \},
> > $$
> > we have $\sigma(E')\subseteq E'$ and hence $\sigma(E')=E'$ [^3]. Since $\alpha\in E'$, it follows that $\alpha$ is in the image of $\sigma$.
> 

^fce9e7

[^1]: It may very well be that $n\ne \text{deg}\,p(x)$. In other words, $p(x)$ being irreducible in $k[x]$ and $E/k$ being an extension containing a root of $p(x)$ does not imply that $E$ is the [[LEC ALG3 20#^0b1e65|splitting field]] of $p(x)$. 

[^2]: See [[LEC ALG3 15#^5c70c9]] and the proof of [[LEC ALG3 16#^ead96e]]. 

[^3]: Knowing $\sigma(E')\subseteq E'$, an alternative way to glean $\sigma(E')=E'$ is to observe that since $\sigma$ is an injective $k$-module homomorphism, $\sigma(E')$ is a subspace of $E'$ having the same dimension $[E':k]$. 

> [!Question]-
> In the proof of [[#^fce9e7]], is it always true that $k(\alpha_{1}, \dots, \alpha_{n})\ne k(\alpha_{s}:s\in S)$ for all $S\subsetneq[n]$? More concretely, can you give me an irreducible polynomial $p(x)$ over $\mathbb{Q}$ and a field extension $F/\mathbb{Q}$ such that $p(x)$ has at least three roots $\alpha_{1}, \alpha_{2}, \alpha_{3}$ in $F$, and $\mathbb{Q}(\alpha_{i})$ and $\mathbb{Q}(\alpha_{i}, \alpha_{j})$ are strictly contained in $\mathbb{Q}(\alpha_{1}, \alpha_{2},\alpha_{3})$ for all $i, j$? 

## Extensions in which a given polynomial splits

> [!Proposition]
> Let $k$ be a field and $f$ a polynomial in $k[x]$ of degree $\geqslant 1$. Then there exists an extension $E$ of $k$ in which $f$ has a root. 
> 
> > [!Proof]-
> > 
> > WLOG, we can assume $f(x)$ is irreducible. Let $K$ be the field ${k[x]}/{(f(x))}$. Consider the canonical homomorphism
> > $$
> > \sigma:k[x]\to K.
> > $$
> > Note that $\sigma|_{k}$ is an embedding of $k$ into $K$. Let $x^{\sigma}=x+(f(x))$ be the image of $x$ under $\sigma$. Let $f(x)=\sum_{i=0}^{n}a_{i}x^{i}$, and let[^4]
> > $$
> > f^{\sigma}(X):=\sum_{i=0}^{n} a_{i}^{\sigma}X^{n}\in k^{\sigma} [X].
> > $$
> > Then
> > $$
> > \begin{align}
> > f^{\sigma}(x^{\sigma}) & =\sum_{i=0}^{n} a_{i}^{\sigma}(x^{\sigma})^{n} \\
> >  & = \sigma\left( \sum_{i=0}^{n} a_{i}x^{n} \right) \\
> >  & =\sigma(f(x)) \\
> >  & =0.
> > \end{align}
> > $$
> > Thus, $x^{\sigma}$ is a root of $f^{\sigma}$. If you're like me, you'd say we're done: $k\cong k^{\sigma}$, and we just found an extension $K/k^{\sigma}$ in which $f^{\sigma}$ has a root. To be extra rigorous, you can define a set $E\supset k$ such that $|E|=|K|$, extend $\sigma$ to a bijection $E\to K$, and pull back the field structure of $K/k^{\sigma}$ to $E/k$ to get a "true" field extension of $k$; see @langAlgebra2002 5.2.3.
> > 
> > Note that $K/k^{\sigma}$ is a finite extension, since $\{ 1, x, x^{2}, \dots, x^{\text{deg}\,f-1} \}$ is a $k^{\sigma}$-basis for $K$.
> 

^b196e5

> [!Corollary]
> Let $k$ be a field and let $f_{1}, \dots, f_{n}$ be polynomials in $k[x]$ of degrees $\geqslant 1$. Then there exists an extension $E/k$ in which each $f_{i}$ has a root. 
> 
> > [!Proof]-
> > 
> > Using [[#^b196e5]], let $E_{1}$ be an extension in which $f_{1}$ has a root. We may view $f_{2}$ as a polynomial over $E_{1}$. Let $E_{2}$ be an extension of $E_{1}$ in which $f_{2}$ has a root. Proceed inductively. 
> 

^0edfc6

## Algebraically closed fields and algebraic closures

> [!Definition]
> 1. A field $k$ is said to be **algebraically closed** if every polynomial in $k[x]$ of degree $\geqslant 1$ has a root in $k$.
> 2. An **algebraic closure** of a field $k$ is an algebraic extension of $k$ which is algebraically closed.

> [!Proposition]
> Every algebraic extension of an algebraically closed field is trivial.
> 
> > [!Proof]-
> > 
> > Suppose $k$ is algebraically closed and $E/k$ is an algebraic extension. Let $\alpha\in E$ and $p(x)\in k[x]$ be its irreducible polynomial. Since $k$ is algebraically closed, $p(x)$ splits into linear factors in $k[x]$, so all of its roots lie in $k$. It follows that $\alpha\in k$, and $E=k$. 
> 

^c6f453

> [!Theorem] Existence of algebraically closed extensions, @langAlgebra2002 5.2.5
> Let $k$ be a field. Then there exists an algebraically closed extension $E/k$.
> 
> > [!Proof]-
> > 
> > We first construct an extension $E_{1}$ of $k$ in which every polynomial in $k[x]$ of degree $\geqslant 1$ has a root. To each polynomial $f(x)\in k[x]$ of degree $\geqslant 1$, associate a symbol $X_{f}$ and let $S$ be the set of all such symbols. Form the polynomial ring $k[S]$. We claim that the ideal generated by all the polynomials $f(X_{f})$ in $k[S]$ is not the unit ideal. It it is. then there is a finite combination of elements in our ideal which is equal to $1$:
> > $$
> > g_{1}f_{1}(X_{f_{1}})+\dots+g_{n}f_{n}(X_{f_{n}})=1
> > $$
> > with $g_{i}\in k[S]$. We will write $X_{i}$ instead of $X_{f_{i}}$. The polynomials $g_{i}$ will involve only a finite number of variables, say $X_{1}, \dots, X_{N}$ (with $N\geqslant n$). Our relation then reads
> > $$
> > \sum_{i=1}^{n} g_{i}(X_{1}, \dots, X_{N})f_{i}(X_{i})=1.
> > $$
> > By [[#^0edfc6]], there exists a finite extension $F/k$ in which each polynomial $f_{1}(x), \dots, f_{n}(x)\in k[x]$ has a root, say $\alpha_{i}$ is a root of $f_{i}$ in $F$. Let $\alpha_{i}=0$ for $i> n$. Take the image of both sides under the evaluation map $X_{i}\mapsto\alpha_{i}$. We get $0=1$, a contradiction. 
> > 
> > By [[LEC ALG3 6#^5e9db5]] there exists a maximal ideal $\mathfrak{m}$ containing the ideal generated by all polynomials $f(X_{f})$ in $k[S]$. $k[S]/\mathfrak{m}$ is a field, and we have a canonical map
> > $$
> > \sigma:k[S]\to k[S]/\mathfrak{m}.
> > $$
> > As in the proof of [[#^b196e5]], $\sigma|_{k}$ is an embedding of $k$ into $k[S]/\mathfrak{m}$, which is an extension of $k^{\sigma}$. For any polynomial $f(x)\in k[x]$ of degree $\geqslant 1$, $X_{f}^{\sigma}\in k[S]/\mathfrak{m}$ is a root of $f^{\sigma}(X)\in (k[S]/\mathfrak{m})[X]$ [^4]:
> > $$
> > \begin{align}
> > f^{\sigma}(X^{\sigma}_{f}) & =\sum_{i=0}^{k} a_{i}^{\sigma}(X^{\sigma}_{f})^{i}=\sigma(f(X_{f}))=0.
> > \end{align}
> > $$
> > Using the same type of set-theoretic argument[^5] as in [[#^b196e5]], we conclude there exists an extension $E_{1}$ of $k$ in which every polynomial $f(x)\in k[x]$ of degree $\geqslant 1$ has a root. 
> > 
> > Inductively, we can form a sequence of fields
> > $$
> > \dots/E_{n}/\dots/E_{3}/E_{2}/E_{1}/k
> > $$
> > such that every polynomial in $E_{n}[x]$ of degree $\geqslant 1$ has a root in $E_{n+1}$. Now, define
> > $$
> > E=\bigcup_{n=1}^{\infty}E_{i}.
> > $$
> > Then $E$ is naturally a field, for if $x, y\in E$ then there exists some $n$ such that $x, y\in E_{n}$, and we can take their product or sum in $E_{n}$. Every polynomial in $E[X]$ has its coefficients in some subfield $E_{n}$, hence a root in $E_{n+1}$, hence a root in $E$, as desired.
> 

^b76417

> [!Theorem] Existence of algebraic closures, @langAlgebra2002 5.2.6
> Let $k$ be a field. There exists an algebraic extension $k^{\text{a}}$ of $k$ which is algebraically closed, called the **algebraic closure** of $k$.
> 
> > [!Proof]-
> > 
> > Let $E/k$ be the algebraically closed extension supplied by [[#^b76417]]. Using [[LEC ALG3 17#^21beb3]], let $k^{\text{a}}$ be the subextension formed by the elements of $E$ that are algebraic over $k$. Then $k^{\text{a}}$ is algebraic over $k$. If $\alpha\in E$ and $\alpha$ is algebraic over $k^{\text{a}}$, then by [[LEC ALG3 15#^1a378a]] $\alpha$ is algebraic over $k$. If $f$ is a polynomial of degree $\geqslant 1$ in $k^{\text{a}}[x]$, then $f$ has a root $\alpha$ in $E$, and $\alpha$ is algebraic over $k^{\text{a}}$. Hence $\alpha$ is in $k^{\text{a}}$ and $k^{\text{a}}$ is algebraically closed. 
> 

^b35e3d

> [!Proposition]
> If $k$ is a field which is not finite, then any algebraic extension of $k$ has the same cardinality as $k$. 
> 
> > [!Proof]-
> > 
> > Let $\aleph$ be the cardinality of $k$. It follows that $k[x]$ has cardinality $\aleph$. If $E/k$ is an algebraic extension, Each $\alpha\in E$ has an associated $p(x)\in k[x]$. Since any $p(x)\in k[x]$ can accommodate only finitely many roots, it follows that $E$ has cardinality $\aleph$.
> 



## Uniqueness of algebraic closures

> [!Lemma]
> Let $k$ be a field and $\sigma:k\to L$ an embedding of $k$ into $L$[^6]. Let $E=k(\alpha)$ be an algebraic extension of $k$ generated by one element. Let $p(x):=\text{Irr}(\alpha,k)=\sum_{i=0}^{n}a_{i}x^{i}\in k[x]$. Let $p^{\sigma}(y):=\sum_{i=0}^{n}a_{i}^{\sigma}y^{i}\in k^{\sigma}[y]$. Then, there exists a bijection
> $$
> \{ \psi:k(\alpha)\to L\ | \  \psi\text{ is an embedding extending }\sigma \}\longleftrightarrow \{  \beta\in L:p^{\sigma}(\beta)=0\}.
> $$
> 
> > [!Proof]-
> > 
> > Let $\beta$ be a root of $p^{\sigma}$ in $L$. By [[LEC ALG3 15#^5c70c9]], $\{ 1, \alpha, \dots, \alpha^{n-1} \}$ is a $k$-basis for $k(\alpha)$. Thus, every element of $k(\alpha)$ can be uniquely expressed in the form $\sum_{i=0}^{n-1}c_{i}\alpha^{i}$, $c_{i}\in k$. Define an extension $\psi:k(\alpha)\to L$ of $\sigma$ by $\sum_{i=0}^{n-1} c_{i}\alpha^{i}\mapsto \sum_{i=0}^{n-1} c_{i}^{\sigma}\beta^{i}$. We do not need to prove that $\psi$ is well-defined owing to the unique representation afforded by the basis. Let $a, b\in k(\alpha)$.
> > $$
> > \begin{align}
> > \psi(ab) & =\psi\left( \left( \sum_{i=0}^{n-1} a_{i}\alpha^{i} \right)\left( \sum_{i=0}^{n-1} b_{i}\alpha^{i} \right) \right) \\
> >  & =\psi\left( \sum_{i=0}^{n-1}c_{i}\alpha^{i}+p(\alpha)g(\alpha)  \right) \\
> >  & =\psi\left( \sum_{i=0}^{n-1}c_{i}\alpha^{i}  \right) \\
> >  & =\sum_{i=0}^{n-1} c_{i}^{\sigma}\beta^{i} \\\\
> > 
> > \psi(a)\psi(b) & =\left( \sum_{i=0}^{n-1} a_{i}^{\sigma}\beta^{i} \right)\left( \sum_{i=0}^{n-1} b_{i}^{\sigma}\beta^{i} \right) \\
> >  & =\sum_{i=0}^{n-1} c_{i}^{\sigma}\beta^{i} +p^{\sigma}(\beta)g^{\sigma}(\beta)  \\
> >  & =\sum_{i=0}^{n-1} c_{i}^{\sigma}\beta^{i} \\
> > \end{align}
> > $$
> > $\psi$ clearly satisfies $\psi(a+b)=\psi(a)+\psi(b)$. Thus, $\psi$ is a homomorphism. It is also clear from the above computation that $p^{\sigma}(\beta)$ ($=p^{\sigma}(\alpha^{\psi})$) must be zero for $\psi$ to be a homomorphism, forcing $\psi$ to map $\alpha$ to a root of $p^{\sigma}$. 

^8f77a8

Next, we inspect extensions of $\sigma$ to arbitrary algebraic extensions of $k$. 

> [!Theorem]
> Let $E/k$ be an algebraic extension, and $\sigma:k\hookrightarrow L$ an embedding of $k$ in an algebraically closed field $L$. Then there exists an embedding of $E$ into $L$ over $\sigma$. If $E$ is algebraically closed and $L$ is algebraic over $k^{\sigma}$, then any such embedding over $\sigma$ is an isomorphism of $E$ onto $L$. 
> 
> > [!Proof]-
> > 
> > Let $S$ be the set of all pairs $(F, \tau)$ where $F$ is a subfield of $E$ containing $k$, and $\tau$ is an extension of $\sigma$ to an embedding of $F$ into $L$. We write a partial order $\leqslant$ by $(F, \tau)\leqslant(F', \tau')$ if $F\subseteq F'$ and $\tau'|_{F}=\tau$. Note that $S$ is not empty since it contains $(k, \sigma)$. If $\{ (F_{i}, \tau_{i}) \}$ is a totally ordered subset, we let $F=\bigcup F_{i}$ and define $\tau$ on $F$ to be equal to $\tau_{i}$ on each $F_{i}$. Then $(F, \tau)$ is an upper bound for the totally ordered subset. By [[LEC DMAT 3#^98db69|Zorn's lemma]], let $(K, \lambda)$ be a maximal element in $S$. Then $\lambda$ is an extension of $\sigma$. 
> > 
> > We contend that $K=E$. Otherwise, there exists $\alpha\in E$, $\alpha \not\in K$. If $p$ is the irreducible polynomial of $\alpha$ over $K$, $p^{\lambda}$ must have a root in $L$ since $L$ is algebraically closed. It follows from [[#^8f77a8]] that there exists an extension $\psi:K(\alpha)\to L$ extending $\lambda$, contradicting the maximality of $(K, \lambda)$. This proves that there exists an extension $\lambda$ of $\sigma$ to $E$. 
> > 
> > If $E$ is algebraically closed, and $L$ is algebraic over $k^{\sigma}$, then $E^{\sigma}$ is algebraically closed and $L$ is algebraic over $E^{\sigma}$, hence $L= E^{\sigma}$ by [[#^c6f453]]. 
> 

^fff473

An immediate corollary:

> [!Corollary] Uniqueness of algebraic closures
> Let $k$ be a field and $E/k$, $E'/k$ be algebraic extensions. Assume that $E, E'$ are algebraically closed. Then there exists an isomorphism $\tau:E\to E'$ over $k$. 



[^4]: Note that $f^{\sigma}$ is NOT the image of $f$ under $\sigma$ (which would be $0$)!

[^5]: If we do not do this, we technically cannot take the union $\bigcup E_{i}$ later on in the proof; you can, however take the colimit instead. See @buzzardExistenceAlgebraicClosure

[^6]: @langAlgebra2002 [p. 233] assumes $L$ is algebraically closed. I do not see where this this hypothesis is used, and hence have removed it.
