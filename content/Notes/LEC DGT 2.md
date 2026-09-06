---
id: "514"
date: 2026-08-08
time: 16:15
tags:
  - Lecture
  - DGEO
---
@guilleminDifferentialTopology1974 Ch 1

# Manifolds - basic infrastructure

In this course, we think of manifolds as subsets of $\mathbb{R}^{n}$:

> [!Definition] $n$-manifold (yep, again)
> 1. Let $M\subseteq \mathbb{R}^{k}$ and $n$ be a nonnegative integer. We say that $M$ is an **$n$-dimensional manifold** if $M\ne \emptyset$ and for every $p\in M$, there are an open set $\Omega \subseteq \mathbb{R}^{n}$, an $M$-open neighborhood $V\subseteq M$ of $p$, and a [[Smooth and analytic multivariable functions#^861ecb|smooth]] map $\phi :\Omega\to \mathbb{R}^{k}$ such that $\phi(\Omega)=V$, $\phi:\Omega\to V$ is a homeomorphism, and $\phi$ is an [[LEC DGT 1#^3d6ea4|immersion]]. 
> 2. The map $\phi$ is called a local parameterization of $M$ and $\phi ^{-1}:V\to \Omega$ is called a **local coordinate map** or **coordinate system** on $M$. 
> 3. If $X$ and $Z$ are both manifolds in $\mathbb{R}^{N}$ and $Z\subseteq X$, then $Z$ is a **submanifold** of $X$. 

^c7abc3

> [!Remark]
> Note that a smooth homeomorphism does not have to be a diffeomorphism - consider the map $\varphi:(-1, 1)\to \mathbb{R}^{2}$ defined by $(t)\mapsto(t^{3}, t^{3})$. However, we will see [[#^0b32a6|below]] that smooth homeomorphisms that are also immersions are diffeomorphisms (note that the above example is not an immersion!). 

> [!Definition] Smooth maps between arbitrary subsets
> 4. A map $f:X\to \mathbb{R}^{m}$ defined on an arbitrary subset $X\subseteq \mathbb{R}^{n}$ is called **smooth** if it may be locally extended to a smooth map on open sets; that is, if around each point $x\in X$ there is an open set $U\subseteq \mathbb{R}^{n}$ and a smooth map $F:U\to \mathbb{R}^{m}$ such that $F$ equals $f$ on $U\cap X$. 
> 5. A bijection $f:X\to Y$ is called a **diffeomorphism** if both $f$ and $f^{-1}$ are smooth. 

^2da0d5

> [!Remark]
> 6. When $X$ and $Y$ are open, [[#^2da0d5]] agrees with the usual definition. A smooth map between arbitrary subsets is continuous in the relative topologies, because is is locally the restriction of a continuous ambient map. 
> 7. The composition of smooth maps is smooth, and so is the restriction of a smooth map. 


> [!Lemma] Coordinate maps are smooth
> Let $\phi:\Omega\to V$ be a local parameterization of $M\subseteq \mathbb{R}^{k}$, where $\Omega \subseteq \mathbb{R}^{n}$ is open and $V\subseteq M$ is $M$-open. Then the coordinate map $\phi ^{-1}:V\to \Omega$ is smooth in the sense of [[#^2da0d5]]. Consequently, $\phi ^{-1}$ is a diffeomorphism. 
> 
> > [!Proof]-
> > 
> > Fix $p=\phi(a)\in V$. By [[LEC DGT 1#^77789d|the local structure theorem for immersions]], there exists an ambient map $F:W\to F(W)\subseteq \mathbb{R}^{k}$ such that $F(\phi(x))=(x, 0)$ for all $x$ in a neighborhood $\Omega'$ of $a$, such that $M\cap W= \phi(\Omega')$. Let $\pi:\mathbb{R}^{k}\to \mathbb{R}^{n}$ be the projection $\pi(x^{1}, \dots, x^{k})=(x^{1}, \dots, x^{n})$. Clearly, $\phi ^{-1}$ agrees on $M\cap W$ with the smooth map $(\pi \circ F)|_{W}$. 
> 

^0b32a6

> [!Lemma]
> Let $\Omega \subseteq \mathbb{R}^{n}$, $\Theta \subseteq \mathbb{R}^{k}$ be open. Suppose $f:\Omega\to\Theta$ is a diffeomorphism. Then, $n=k$. 
> 
> > [!Proof]-
> > 
> > Denote the smooth map $f^{-1}:\Theta\to \Omega$ by $g$. 
> > Differentiating $g\circ f=\mathrm{id}$ and $f\circ g=\mathrm{id}$ shows that $Df_{a}:\mathbb{R}^{n}\to \mathbb{R}^{m}$ and $Dg_{f(a)}:\mathbb{R}^{m}\to \mathbb{R}^{n}$ are invertible for any $a\in \Omega$. Thus, we must have $n=m$. 
> 

^2724d3

> [!Lemma] Transition maps are smooth
> Suppose $\phi:\Omega \subseteq \mathbb{R}^{n}\to U$ and $\psi:\Theta\subseteq \mathbb{R}^{m}\to V$ are local parameterizations of $M\subseteq \mathbb{R}^{k}$ near a point $p\in M$. Then the transition maps $\psi ^{-1}\circ \phi:\phi ^{-1}(U\cap V)\to \psi ^{-1}(U\cap V)$ and $\phi ^{-1}\circ \psi:\psi ^{-1}(U\cap V)\to \phi ^{-1}(U\cap V)$ are smooth.
> 
> > [!Proof]-
> > 
> > The domain and codomain are open because $U\cap V$ is $M$-open and $\phi, \psi$ are homeomorphisms. By [[#^0b32a6]], $\psi ^{-1}$ is smooth in the sense of [[#^2da0d5]]. Fix $a\in \phi ^{-1}(U\cap V)$, and let $q=\phi(a)$. Near $q$, the coordinate map $\psi ^{-1}$ agrees on $M$ with an ambient smooth map $F:W\to \mathbb{R}^{k}$. Hence, near $b$, the transition map $\psi ^{-1}\circ \phi$ agrees with the ordinary smooth map $F\circ \phi$. It is therefore smooth. Interchanging $\phi$ and $\psi$ shows that its inverse $\phi ^{-1}\circ \psi$ is smooth as well. 
> 

^ac95fb

Also, [[#^2724d3]] now tells us that $n=m$, affirming that the dimension of a manifold at a point does not depend on the choice of local parameterizations and hence is well defined. It follows that if the manifold is path connected, the dimension of the manifold at all points must be the same, making the notion of dimension well defined for the entire manifold.

We next establish equivalences between various definitions of a manifold as a subset of $\mathbb{R}^{k}$, [[#^c7abc3]] being one of them. 

> [!Proposition]
> Let $M\subseteq \mathbb{R}^{k}$, let $p\in M$, and let $0\leqslant n\leqslant k$. The following conditions are equivalent.
> 1. There exist an open set $\Omega \subseteq \mathbb{R}^{n}$ and an $M$-open neighborhood $V\subseteq M$ of $p$, and a smooth immersion $\phi:\Omega\to \mathbb{R}^{k}$ that is a homeomorphism from $\Omega$ onto $V$ ([[#^c7abc3]]).
> 2. There exist an $M$-open neighborhood $V\subseteq M$ of $p$, an open set $\Omega \subseteq \mathbb{R}^{n}$, and a diffeomorphism $\psi:V\to \Omega$ where smoothness is understood in the sense of [[#^2da0d5]]. 
> 3. There exist open sets $U$, $A\subseteq \mathbb{R}^{k}$, with $p\in U$, and a diffeomorphism $\Psi:U\to A$ such that $\Psi(U\cap M)=A\cap(\mathbb{R}^{n}\times \{ \mathbf{0} \})$, where $\mathbf{0}\in \mathbb{R}^{k-n}$. 
> 4. There exist an open neighborhood $\tilde{U}\subseteq \mathbb{R}^{k}$ of $p$ and a smooth map $g: \tilde{U}\to \mathbb{R}^{k-n}$ such that $\tilde{U}\cap M=g^{-1}(\mathbf{0})$ and $Dg_{q}:\mathbb{R}^{k}\to \mathbb{R}^{k-n}$ is surjective for all $q\in \tilde{U}\cap M$. We call $g$ a **local defining function** for $M$. 
> 
> > [!Proof]-
> > 
> > $(1\implies 2)$ is immediate from [[#^0b32a6]] - just set $\psi=\phi ^{-1}$. 
> > 
> > $(2\implies 1)$ Set $\phi=\psi ^{-1}$. It is a smooth map and a homeomorphism. It remains to prove that it is an immersion. Fix $x\in \Omega$ and let $q=\phi(x)$. Let $F:V'\to \Omega$ be an ambient smooth extension of $\psi$ around $q$. On a neighborhood of $x$, $F\circ \phi=\mathrm{id}_{\Omega}$. Differentiation gives $DF_{q}\circ D\phi_{x}=I$, so $D\phi_{x}$ is injective. 
> > 
> > $(1\implies 3)$ Let $\Omega'\subseteq \Omega$, $p\in W\subseteq \mathbb{R}^{k}$, and $\Phi:W\to \Phi(W)$ be such that $\Phi(\phi(\Omega'))=\Omega'\times \{ \mathbf{0} \}=\Phi(W)\cap(\mathbb{R}^{n}\times \{ \mathbf{0} \})$, as in [[LEC DGT 1#^77789d]]. It is easy to see that $\phi(\Omega')=W\cap V$. Suppose $V=M\cap V'$, for some open $V'\subseteq \mathbb{R}^{k}$. Set $U=W\cap V'$, $A=\Phi(W\cap V')$, and $\Psi=\Phi|U$. We have
> > $$
> > \begin{align}
> > \Psi(U\cap M) & =\Psi(W\cap V'\cap M) \\
> >  & =\Psi(W\cap V) \\
> >  & =\Phi(W\cap V) \\
> >  & =\Phi(W)\cap(\mathbb{R}^{n}\times \{ \mathbf{0} \}) \\
> >  & = \Phi(W\cap V')\cap(\mathbb{R}^{n}\times \{ \mathbf{0} \}) & \because V\subseteq V' \\
> >  & =A\cap(\mathbb{R}^{n}\times \{ \mathbf{0} \}).
> > \end{align}
> > $$
> > $(3\implies 2)$ is clear. 
> > 
> > $(3\implies 4)$ Let $\pi:\mathbb{R}^{k}\to \mathbb{R}^{k-n}$ be the projection $\pi(x^{1}, \dots, x^{k})=(x^{n+1}, \dots, x^{k})$, and define $g=\pi \circ \Phi$. Then $g^{-1}(0)=U\cap M$, and $Dg_{q}=D\pi_{\Phi(q)}D\Phi_{q}$ is surjective because $D\Phi_{q}$ is invertible and $D\pi$ is surjective. 
> > 
> > $(4\implies 3)$ Using [[LEC DGT 1#^549235|the local structure theorem for submersions]] (and permuting the coordinates), we can obtain $U\subseteq \tilde{U}$ containing $p$, $A\subseteq \mathbb{R}^{k}$, and a diffeomorphism $\Phi:U\to A$ such that $g(\Phi ^{-1}(x^{1}, \dots, x^{k}))=(x^{n+1}, \dots, x^{k})$ on $A$. Clearly, $(g\circ \Phi ^{-1})^{-1}(\mathbf{0})=\mathbb{R}^{n}\times \{ \mathbf{0} \}$. On the other hand, $(g\circ \Phi ^{-1})^{-1}(\mathbf{0})=\Phi(g^{-1}(\mathbf{0}))=\Phi(U\cap M)$. Thus, we have $\Phi(U\cap M)=A\cap(\mathbb{R}^{n}\times \{ \mathbf{0} \})$. 

^0ad231

We next provide another definition of smoothness - the kind you'd be using if your manifold wasn't by definition a subset of $\mathbb{R}^{k}$. 

> [!Definition] Smoothness in local coordinates
> A map $f:M\to N$ is **smooth in local coordinates** if for every $p\in M$, there are coordinate maps $\phi:U\to \Omega \subseteq \mathbb{R}^{n}$ around $p$ and $\psi:V\to\Theta \subseteq \mathbb{R}^{m}$ around $f(p)$, with $f(U)\subseteq V$, such that $\psi \circ f\circ \phi ^{-1}:\Omega\to\Theta$ is smooth in the usual sense. 

^35c001

> [!Proposition]
> If $f$ is smooth in local coordinates with for one pair of coordinate maps around each point, then it is smooth for every pair of coordinate maps for which it is defined. 
> 
> > [!Proof]-
> > 
> > Suppose that $\psi \circ f\circ \phi ^{-1}$ is smooth at $p$, and let $\phi'$ and $\psi'$ be another pair of coordinate maps whose domains contain $p$ and $f(p)$ respectively. On appropriate open sets, 
> > $$
> > \psi'\circ f\circ \phi'^{-1}=(\psi'\circ\psi ^{-1})\circ (\psi \circ f\circ \phi ^{-1})\circ (\phi \circ \phi'^{-1}).
> > $$
> > The first and last factors are smooth transition maps by [[#^ac95fb]]. Hence the new coordinate representation is smooth. 

^8d4caf

> [!Proposition] Equivalence of the two definitions of smoothness
> For a map $f:M\to N$, the following are equivalent:
> 1. $f$ is smooth in the sense of [[#^2da0d5]], i.e., it locally extends to a smooth map from an open subset of $\mathbb{R}^{k}$ to $\mathbb{R}^{l}$. 
> 2. $f$ is smooth in the sense of [[#^35c001]], i.e., it is smooth in local coordinates. 

