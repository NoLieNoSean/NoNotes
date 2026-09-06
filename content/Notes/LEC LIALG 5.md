---
id: "528"
date: 2026-08-18
time: 14:07
tags:
---
Quiz next tuesday

---

comes right up to Engel's theorem. 

> [!Lemma]
> Let $V$ be a finite dimensional vector space over $F$. Let $x\in \mathfrak{gl}(V)=\text{End}(V)$ be a nilpotent endomorphism of $V$. Then $\text{ad}(x)$ is a nilpotent endomorphism of $\mathfrak{gl}(V)$. 
> 
> > [!Proof]-
> > 
> > Consider the left multiplication and right multiplication maps $\lambda_{x}, \rho_{x}:\mathfrak{gl}(V)\to \mathfrak{gl}(V)$. Note that $\text{ad}(x)=\lambda_{x}-\rho_{x}$. Since $x$ is nilpotent, both $\lambda_{x}$ and $\rho_{x}$ are nilpotent endomorphisms of $\mathfrak{gl}(V)$. Further, $\lambda_{x}$ and $\rho_{x}$ commute with each other. Therefore, $\text{ad}(x)$ is nilpotent. 
> 
> 

^ee0216

---

> [!Theorem] @humphreysIntroductionLieAlgebras1972 [p. 12]
> Let $V$ be a nonzero finite dimensional vector space over $F$. Let $L$ be a Lie subalgebra of $\mathfrak{gl}(V)$ consisting of nilpotent elements. Then, there is a nonzero vector $v\in V$ such that $x\cdot v=0$ for all $x\in L$. That is, there is a common eigenvector for all elements of $L$ with eigenvalue $0$. In other words, 
> $$
> v\in \bigcap_{x\in L}\ker x.
> $$
> 
> > [!Proof]-
> > 
> > Use induction on $\dim L$, the case $\dim L=0, 1$ are clear. So let $\dim L\geqslant 2$. Let $K$ be a nonzero proper Lie subalgebra of $L$ (Such a $K$ exists, since $1$-dimensional subspaces are always Lie subalgebras). 
> > 
> > Recall that $N_{L}(K)=\{ x\in L:\text{ad}(x)(K)\subseteq K \}$. 
> > 
> > We first prove that $N_{L}(K)\supsetneq K$. 
> > 
> > > Let $x\in K$. Consider the map $\varphi_{x}:L/K\to L/K$ defined by $\varphi_{x}(y+K)=\text{ad}_{L}(x)(y)+K$. It is easy to see that $\varphi_{x}$ is well defined: if $y_{1}, y_{2}\in L$ are such that $y_{1}+K=y_{2}+K$, 
> > > $$
> > > \begin{align}
> > > \varphi_{x}(y_{1}+K)-\varphi_{x}(y_{2}+K) & =([x, y_{1}-y_{2}]+K)=0+K, 
> > > \end{align}
> > > $$
> > > since $x, y_{1}-y_{2}\in K$ and $K$ is a Lie subalgebra of $L$. Since $\text{ad}_{L}(x):L\to L$ is $F$-linear, $\varphi_{x}$ is $F$-linear. 
> > > 
> > > Next, consider the map $\varphi:K\to \mathfrak{gl}(L/K)$ defined by $\varphi(x)=\varphi_{x}$. Since $\text{ad}_{L}:L\to \mathfrak{gl}(L)$ is $F$-linear, $\varphi$ is $F$-linear. Moreover, since $\text{ad}_{L}$ is a Lie algebra homomorphism, so is $\varphi$:
> > > $$
> > > \begin{align}
> > > \varphi([xy])(z+K) & =\text{ad}_{L}([xy])(z)+K \\
> > >  & =[\text{ad}_{L}(x), \text{ad}_{L}(y)](z)+K \\
> > >  & =[\varphi(x), \varphi(y)](z+K).
> > > \end{align}
> > > $$
> > > 
> > > By hypothesis, every element of $L$ is nilpotent. By [[#^ee0216]], $\text{ad}_{\mathfrak{gl}(V)}(x)$ is nilpotent for every $x\in L$. Since $\text{ad}_{L}(x)=\text{ad}_{\mathfrak{gl}(V)}(x)|_{L}$, we conclude that $\text{ad}_{L}(x)$ is a nilpotent endomorphism of $L$ for every $x\in L$, and in particular for every $x\in K$. It follows that $\varphi_{x}$ is a nilpotent endomorphism of $L/K$ for every $x\in K$, i.e., $\varphi(K)\subseteq \mathfrak{gl}(L/K)$ is a Lie subalgebra consisting of nilpotent elements. Further, since $\dim\varphi(K)\leqslant \dim K\leqslant \dim L-1$, there exists nonzero $z+K\in L/K$ such that $\varphi_{x}(z+K)=0$ for all $x\in K$. Since this implies $[xz]\in K$ for all $x\in K$, $z\in N_{L}(K)\setminus K$. 
> > 
> > Suppose $K$ is a maximal proper Lie subalgebra of $L$ (existence is clear in finite dimensions). By maximality of $K$, $N_{L}(K)=L$, i.e., $K$ is an ideal of $L$. Let $W=\{ v\in V:xv=0 \forall x\in K \}$. Since $K$ consists of nilpotent elements and has dimension less than $L$, $W$ is nonempty by the induction hypothesis. We note that $W$ is $L$-stable: for $x\in L$, $y\in K$, and $w\in W$, 
> > $$
> > \begin{align}
> > yxw = x\underbrace{ yw }_{ =0 }-\underbrace{ [xy] }_{ =0 }w=0.
> > \end{align}
> > $$
> > Let $K'$ be a $1$-dimensional subalgebra of $L/K$; its inverse image under projection, $\pi ^{-1}(K')$, is a Lie subalgebra of $L$ containing $K$ with $\dim(\pi ^{-1}(K'))=1+\dim K$. By maximality of $K$, $\pi ^{-1}(K')$ must be $L$. Thus, 
> > $$
> > L=K+Fz
> > $$
> > for some $z\in L\setminus K$. Since $W$ is $L$-stable, $zW\subseteq W$. Since $z$ is nilpotent, $z|_{W}$ is nilpotent, so there is a nonzero element $v\in W$ such that $zv=0$. 
> > 
> > 
> 

^684123