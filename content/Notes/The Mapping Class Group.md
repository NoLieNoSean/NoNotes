---
id: "482"
date: 2026-06-25
time: 01:37
tags:
---
> [!Definition] Compact-open Topology
> Let $X$ and $Y$ be topological space, and let $C(X, Y)$ denote the set of all continuous maps between $X$ and $Y$. Given a compact subset $K\subseteq X$, and an open subset $U\subseteq Y$, let $V(K, U)$ denote the set of all functions $f\in C(X, Y)$ such that $f(K)\subseteq U$. Then the collection of all such $V(K, U)$ is a [[Preliminaries to Topology#^22ca76|subbasis]] for the **compact-open topology** on $C(X, Y)$. 

^a39cc2

> [!Proposition] #td
> If $Y$ is metric, then the compact-open topology is the "topology of uniform convergence on compact sets", i.e., a sequence of functions converges in the compact-open topology iff it converges uniformly on every compact subset of $Y$. 

> [!Proposition] #td 
> Let $S$ be a surface. Path components of $\text{Homeo}(S)$ correspond to isotopy classes of $\text{Homeo}(S)$, where $\text{Homeo}(S)$ has the [[#^a39cc2|compact-open topology]]. 
> 
> > [!Proof]-
> > 
> > See [[Homotopy classes and Isotopy classes of surfaces]]
> 

^f31c09

> [!Definition] Mapping Class Group
> Let $\text{Homeo}^{+}(S, \partial S)$ be the group of orientation-preserving homeomorphisms $S\to S$ that restrict to the identity on $\partial S$, equipped with the [[#^a39cc2|compact-open topology]]. Let $\text{Homeo}_{0}(S, \partial S)$ denote the path-component of $\text{Homeo}^{+}(S, \partial S)$ that contains the identity. [[#^f31c09|That is]], $\text{Homeo}_{0}(S)$ is the set of elements that are isotopic to the identity, where we require isotopies to be fix the boundary. Note that[^1] $\text{Homeo}_{0}(S, \partial S)$ is a normal subgroup of $\text{Homeo}^{+}(S, \partial S)$. The **mapping class group** of $S$ is defined to be the quotient
> $$
> \begin{align}
> \text{Mod}(S):=\text{Homeo}^{+}(S, \partial S)/\text{Homeo}_{0}(S, \partial S). 
> \end{align}
> $$
> 

^fb44bb

[^1]: This entails showing that for any $g\in \text{Homeo}_{0}(S, \partial S)$ and $h\in \text{Homeo}^{+}(S, \partial S)$, $hgh^{-1}$ is isotopic to $\mathrm{id}$. Given an isotopy $M$ between $g$ and $\mathrm{id}$, this is easily achieved by the composition $hMh^{-1}$. 


> [!Remark]-
> Schultens instead defines the MCG of a compact orientable surface as $\text{Diffeo}^{+}(S)/\text{Diffeo}_{0}(S)$, the group of orientation-preserving self-diffeomorphisms of $S$ modulo the subgroup consisting of self-diffeomorphisms of $S$ homotopic to the identity. These definitions are equivalent, thanks to these results ( @farbPrimerMappingClass2012 might have references)
> 1. If two orientation-preserving diffeomorphisms of a surface $S$ of finite type are homotopic relative to $\partial S$, then they are smoothly isotopic to $\partial S$. 
> 2. Every homeomorphism of $S$ (relative to $\partial S$) is isotopic to a diffeomorphism of $S$ (relative to $\partial S$). 

> [!Proposition] @schultensIntroduction3manifolds2014 2.6.2
> The mapping class group of the torus is isomorphic to $SL(2, \mathbb{Z})$. 
> 
> > [!Proof]-
> > 
> > Given a simple closed curve $\gamma$ on $\mathbb{T}^{2}$, we define an integer vector
> > $$
> > i(\gamma)=([\gamma]\cdot[-l], [\gamma]\cdot[m]),
> > $$
> > where $m$ and $l$ are the filling curves form [[Homotopy and Isotopy on Surfaces#^d60470]] satisfying $[l]\cdot[m]=1$. ($i$ defines coordinates on the [[Homology#^2e2c68|homology group]] $H_{1}(\mathbb{T}^{2}, \mathbb{Z})$, which is isomorphic to $\mathbb{Z}^{2}$). 
> > 
> > Then, given a homeomorphism $f\in \text{Homeo}(\mathbb{T}^{2})$, we define the matrix $A_{f}$, whose columns are the vectors $i(f(m))$ and $i(f(l))$:
> > $$
> > A_{f}=\begin{bmatrix}
> > [f(m)]\cdot[-l] & [f(m)]\cdot[-l] \\
> > [f(m)]\cdot[m] & [f(m)]\cdot[m]
> > \end{bmatrix}
> > $$
> > We note that the matrix $A_{f}$ completely determines the isotopy class of $f$ ( #q why?), that the map $\eta:f\mapsto A_{f}$ is a homomorphism from $\text{Homeo}(\mathbb{T}^{2})$ to $\text{Aut}(H_{1}(\mathbb{T}^{2}, \mathbb{Z}))\cong GL(2, \mathbb{Z})$, and that this map descends to a homomorphism $H: \text{Mod}(\mathbb{T}^{2})\to GL(2, \mathbb{Z})$. We then proceed to show that $H$ is an isomorphism on $SL(2, \mathbb{Z})$ (which makes sense from a distance, since $f$ is orientation preserving). 
> 

^02a14f

<iframe src="https://www.desmos.com/3d/ebsdaadrli" width="100%" height= "500px"></iframe>


^^^ The conventions here need to be updated! #td
# Dehn twists

A simple closed curve $c$ in a surface $S$ has a regular neighborhood: When $c$ is [[Differentiable manifolds#^b6cdf3|orientation preserving]], this means there is an embedding of an annuls $f:\mathbb{S}^{1}\times[0, 1]\to S$ such that $c=f(\mathbb{S}^{1}\times \{ 1/2 \})$ whose image is the regular neighborhood. If $c$ is orientation reversing, an analogous statement holds with the annulus replaced by a Möbius band. 

> [!Definition] Dehn twist
> Let $c$ be an orientation-preserving simple closed curve in a compact surface $S$ and let $N(c)$ be a regular neighborhood of $c$ that is oriented via the parameterization $i:\mathbb{S}^{1}\times[0, 1]\to \eta(c)$. A map $f:S\to S$ is called a **left Dehn twist** around $c$ if
> 1. $f|_{S\setminus N(c)}$ is the identity map; and
> 2. $f|_{N(c)}$ is the map of the annulus given by $f(e^{ 2i\pi\theta }, t)=(e^{ 2i\pi(\theta+t) }, t)$ for all $(e^{ 2i\pi\theta }, t)\in \mathbb{S}^{1}\times[0, 1]$. 
> 
> An analogous definition holds for **right Dehn twist**. 

Essentially, a Dehn twist cuts along a simple closed curve $c$, performs a full twist (to the left/right), and reglues along $c$.

The following theorem tells us that Dehn twists generate the mapping class group of a surface. 

> [!Theorem]
> Every surface diffeomorphism is isotopic to a composition of Dehn twists. In other words, the mapping class group is generated by Dehn twists. 

#td Go though the the exposition that follows in Schultens
#td @wiltonMappingClassGroups seems to be a milder deep dive than @farbPrimerMappingClass2012 