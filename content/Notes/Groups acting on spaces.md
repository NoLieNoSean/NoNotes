---
id: "601"
date: 2026-10-22
time: 20:42
tags:
  - TOP
---
> [!Definition] Group action on topological space
> 1. An **action** of a group $\Gamma$ on a topological space $X$ is a homomorphism $\Phi:\Gamma\to \text{Homeo}(X)$. 
> 2. An action $\Phi$ is said to be **faithful** or effective if $\ker \Phi=\{ 1 \}$. 
> 3. An action is said to be **free** if for every $x\in X$ and $\gamma\in\Gamma \setminus \{ 1 \}$, one has $\gamma x\ne x$. 


A specific instance of this notion is the group of deck transformations of a covering space. 

> [!Definition] Deck transformation group
> For a covering space $p:\tilde{X}\to X$ the [[More on Covering Spaces#^f57977|isomorphisms]] $\tilde{X}\to \tilde{X}$ are called **deck transformations** or **covering transformations**. These form a group $G(\tilde{X})$ under composition. 

By the [[More on Covering Spaces#^7160cb|unique lifting property]], a deck transformation is completely determined by where it sends a single point, assuming $\tilde{X}$ is path connected. In particular, only the identity deck transformation can fix a point of $\tilde{X}$. 

> [!Definition] normal covering space
> A covering space $p:\tilde{X}\to X$ is called **normal** if for each $x\in X$ and each pair of lifts $\tilde{x}, \tilde{x}'$ of $x$ there is a deck transformation taking $\tilde{x}$ to $\tilde{x}'$. 

The term 'normal' is motivated by the following result:

> [!Proposition] @hatcherAlgebraicTopology2002 1.39
> Let $p:(\tilde{X}, \tilde{x}_{0})\to(X, X_{0})$ be a path connected covering space of the path connected, locally path connected space $X$, and let $H$ be the subgroup $p_{*}(\pi_{1}(\tilde{X}, \tilde{x}_{0}))\subseteq \pi_{1}(X, x_{0})$. Then:
> 1. This covering space is normal iff $H\triangleleft \pi_{1}(X, x_{0})$. 
> 2. $G(\tilde{x})\cong N(H)/H$, where $N(H)$ is the normalizer of $H$ in $\pi_{1}(X, x_{0})$. 
> 
> In particular, $G(\tilde{X})\cong \pi_{1}(X, x_{0})/H$ if $\tilde{X}$ is a normal covering. Hence for the universal cover $\tilde{X}\to X$ we have $G(\tilde{X})\cong \pi_{1}(X)$.  

> [!Definition] Orbit space
> Given an action of a group $\Gamma$ on a space $X$, we can form a space $X/\Gamma$, the quotient space of $X$ in the each point $x$ is identified with all its images $\gamma(x)$ as $\gamma$ ranges over $\Gamma$. The points of $X/\Gamma$ are orbits of the action, and $X/\Gamma$ is called the **orbit space** of the action. 

> [!Definition] Covering space action
> An action is called a **covering space action** if it satisfies the following condition: Each $x\in X$ has a neighborhood $U$ such that all images $\gamma(U)$ for varying $\gamma\in\Gamma$ are disjoint. In other words, $U\cap\gamma(U)\ne\emptyset$ implies $g=1$. 

^c65189

The action $G(\tilde{X})$ on $\tilde{X}$ satisfies [[#^c65189]]. To see this, let $\tilde{U}\subseteq \tilde{X}$ project homeomorphically to $U\subseteq X$. If $g(U)\cap U\ne \emptyset$ for some $g\in G(\tilde{X})$, then $g(\tilde{x}_{1})=\tilde{x}_{2}$ for some $\tilde{x}_{1}, \tilde{x}_{2}\in U$. Since $\tilde{x}_{1}$ and $\tilde{x}_{2}$ must lie in the same set $p ^{-1}(x)$, which intersects $\tilde{U}$ in only one point, we must have $\tilde{x}_{1}=\tilde{x}_{2}$. Then, $g$ fixes this point, so $g=1$. 

> [!Proposition]
> Suppose $\Gamma$ acts on $X$ as a covering space action. Then:
> 1. The quotient map $p:X\to X/\Gamma$ is a normal covering space.
> 2. $\Gamma$ is the group of deck transformations of this covering space if $X$ is path connected. 
> 3. $\Gamma$ is isomorphic to $\pi_{1}(X/\Gamma)/p_{*}(\pi_{1}(X))$ if $X$ is path connected and locally path-connected. 

^5759fe

> [!Remark]
> As a special case of [[#^5759fe]].3 we see that for a covering space action of a group $\Gamma$ on a simply connected locally path connected space $X$, the orbit space $X/\Gamma$ has fundamental group isomorphic to $\Gamma$. 