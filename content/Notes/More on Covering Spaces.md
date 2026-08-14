---
id: "518"
date: 2026-08-12
time: 01:46
tags:
---
# Lifting properties

We generalize some observations from [[Homotopy, Covering Spaces and the Fundamental Group#Lifting properties of covering maps for paths]]. We assume the covering space $E$ is path connected. 

> [!Proposition] Lifts are unique, @leeIntroductionTopologicalManifolds2011 Thm 11.12
> Let $q:E\to X$ be a covering map. Suppose $Y$ is connected, $\varphi:Y\to X$ is continuous, and $\tilde{\varphi}_{1}, \tilde{\varphi}_{2}:Y\to E$ are lifts of $\varphi$ that agree at some point of $Y$. Then $\tilde{\varphi}_{1}$ is identically equal to $\tilde{\varphi}_{2}$. 

> [!Proposition] Homotopies lift, @leeIntroductionTopologicalManifolds2011 Thm 11.13
> Let $q:E\to X$ be a covering map, and let $Y$ be a locally connected space. Suppose $\varphi_{0}, \varphi_{1}:Y\to X$ are continuous maps, $H:Y\times I\to X$ is a homotopy form $\varphi_{0}$ to $\varphi_{1}$, and $\tilde{\varphi}_{0}:Y\to E$ is any lift of $\varphi_{0}$. Then there exists a unique lift of $H$ to a homotopy $\tilde{H}$ satisfying $\tilde{H}_{0}=\tilde{\varphi}_{0}$. If $H$ is stationary on some subset $A\subseteq Y$, then so is $\tilde{H}$. 

> [!Proposition] Lifting Criterion, @leeIntroductionTopologicalManifolds2011 Thm 11.18
> Suppose $q:E\to X$ is a covering map. Let $Y$ be a connected and locally path-connected space, and let $\varphi:Y\to X$ be a continuous map. Given any points $y_{0}\in Y$ and $e_{0}\in E$ such that $q(e_{0})=\varphi(y_{0})$, the map $\varphi$ has a lift $\tilde{\varphi}:Y\to E$ satisfying $\tilde{\varphi}(y_{0})=e_{0}$ iff the subgroup $\varphi_{*}\pi_{1}(Y, y_{0})$ of $\pi_{1}(X, \varphi(y_{0}))$ is contained in $q_{*}\pi_{1}(E, e_{0})$. 

Recall [[Homotopy, Covering Spaces and the Fundamental Group#^334a74]]; the following corollaries are immediate. 

> [!Corollary] Lifting Maps from Simply Connected spaces, @leeIntroductionTopologicalManifolds2011 Cor 11.19
> If $q:E\to X$ is a covering map and $Y$ is a simply connected locally path-connected space, then every continuous map $\varphi:Y\to X$ has a lift to $E$. Given any point $y_{0}\in Y$, the lift can be chosen to take $y_{0}$ to any point in the fiber over $\varphi(y_{0})$. 

> [!Corollary] Lifting Maps to Simply Connected Spaces, @leeIntroductionTopologicalManifolds2011 Cor 11.20
> Suppose $q:E\to X$ is a covering map and $E$ is simply connected. For any connected and locally path-connected space $Y$, a continuous map $\varphi:Y\to X$ has a lift to $E$ iff $\varphi_{*}$ is the zero homomorphism for some base point $y_{0}\in Y$. If this is the case, then the lift can be chosen to take $y_{0}$ to any point in the fiber over $\varphi(y_{0})$. 

---

# Properties of the Monodromy action

> [!Proposition] Stabilizers of the Monodromy action, @leeIntroductionTopologicalManifolds2011 Thm 11.29
> Suppose $q:E\to X$ is a covering map and $x\in X$. For each $e\in q^{-1}(x)$, the stabilizer of $e$ under the Monodromy action is $q_{*}(\pi_{1})(E, e)\subseteq \pi_{1}(X, x)$. 

> [!Proposition] @leeIntroductionTopologicalManifolds2011 Thm 11.34
> Let $q:E\to X$ be a covering map. For any $x\in X$, as $e$ varies over the fiber $q^{-1}(x)$, the set of induced subgroups of $q_{*}(\pi_{1})(E, e)$ is exactly one conjugacy class. 


There is an important special case in which the subgroup $q_{*}(\pi_{1})(E, e)$ does not depend on the choice of base point within a given fiber. 

> [!Definition] Normal covering
> A covering map $q:E\to X$ is called a **normal covering** if the induced subgroup $q_{*}\pi_{1}(E, e)$ is a normal subgroup of $\pi_{1}(X, q(e))$ for some $e\in E$. 

> [!Proposition] Characterization of Normal Coverings, @leeIntroductionTopologicalManifolds2011 Prp 11.35
> Suppose $q:E\to X$ is a covering map. TFAE:
> 1. The subgroup $q_{*}\pi_{1}(E, e)$ is normal for some $e\in E$
> 2. For some $x\in X$, the subgroups $q_{*}\pi_{1}(E, e)$ are the same for all $e\in q^{-1}(x)$. 
> 3. For every $x\in X$, the subgroups $q_{*}\pi_{1}(E, e)$ are the same for all $e\in q^{-1}(x)$. 
> 4. The subgroup $q_{*}\pi_{1}(E, e)$ is normal for every $e\in E$. 


---

# Covering homomorphisms

> [!Definition] Covering homomorphism
> Suppose $q_{1}:E_{1}\to X$, $q_{2}:E_{2}\to X$ are two coverings of $X$. A **covering homomorphism from $q_{1}$ to $q_{2}$** is a continuous map $\varphi:E_{1}\to E_{2}$ such that $q_{2}\circ\varphi=q_{1}$. 
> 
> ```latex
> % latex-id: 4c2b-dde3-810e-4c5f-a588
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMCwwLCJFXzEiXSxbMiwwLCJFXzIiXSxbMSwxLCJYIl0sWzAsMiwicV8xIiwyXSxbMSwyLCJxXzIiXSxbMCwxLCJcXHZhcnBoaSJdXQ==
> \[\begin{tikzcd} {E_1} && {E_2} \\ & X \arrow["\varphi", from=1-1, to=1-3] \arrow["{q_1}"', from=1-1, to=2-2] \arrow["{q_2}", from=1-3, to=2-2] \end{tikzcd}\] 
> 
> \end{document}
> ```
> 
> A covering homomorphism that is also a homeomorphism is called a **covering isomorphism**. 


> [!Proposition] Properties of Covering Homomorphisms, @leeIntroductionTopologicalManifolds2011 Prp 11.36
> Let $q_{1}:E_{1}\to X$ and $q_{2}:E_{2}\to X$ be coverings of the same space $X$. 
> 1. If two coverings homomorphisms from $q_{1}$ to $q_{2}$ agree at one point of $E_{1}$, then they are equal. 
> 2. Given $x\in X$, any covering homomorphism from $q_{1}$ to $q_{2}$ restricts to a $\pi_{1}(X, x)$-[[LEC ALG2 7#^846bb7|equivariant map]] from $q_{1}^{-1}(x)$ to $q_{2}^{-1}(x)$. 
> 3. Every covering homomorphism is itself a covering map.

> [!Theorem] Covering Homomorphism Criterion, @leeIntroductionTopologicalManifolds2011 Thm 11.37
> Let $q_{1}:E_{1}\to X$ and $q_{2}:E_{2}\to X$ be two coverings of $X$, and suppose $e_{1}\in E_{1}$ and $e_{2}\in E_{2}$ are base points such that $q_{1}(e_{1})=q_{2}(e_{2})$. There exists a covering homomorphism from $q_{1}$ to $q_{2}$ taking $e_{1}$ to $e_{2}$ iff ${q_{1}}_{*}\pi_{1}(E_{1}, e_{1})\subseteq{q_{2}}_{*}(E_{2}, e_{2})$. 

> [!Theorem] Covering Isomorphism Criterion, @leeIntroductionTopologicalManifolds2011 Thm 11.40
> Suppose $q_{1}:E_{1}\to X$ and $q_{2}:E_{2}\to X$ are two coverings of $X$. 
> 1. Given $e_{1}\in E_{1}$ and $e_{2}\in E_{2}$ such that $q_{1}(e_{1})=q_{2}(e_{2})$, there exists a (necessarily unique) covering isomorphism from $q_{1}$ to $q_{2}$ taking $e_{1}$ to $e_{2}$ iff ${q_{1}}_{*}\pi_{1}(E_{1}, e_{1})={q_{2}}_{*}(E_{2}, e_{2})$. 
> 2. The coverings $q_{1}$ and $q_{2}$ are isomorphic iff for some $x\in X$, the conjugacy classes of subgroups of $\pi_{1}(X, x)$ induced by $q_{1}$ and $q_{2}$ are the same. If this is the case, these conjugacy classes are the same for every $x\in X$. 

---

# Universal Covering Space

> [!Theorem] Universality of Simply Connected Coverings, @leeIntroductionTopologicalManifolds2011 Prp 11.41
> Let $q:E\to X$ be a covering map with $E$ simply connected. If $q':E'\to X$ is any covering, there exists a covering map $Q:E\to E'$ such this diagram commutes:
> 
> ```latex
> % latex-id: bb55-adce-61e1-46e3-b43a
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMCwwLCJFIl0sWzAsMiwiWCJdLFsxLDEsIkUnIl0sWzAsMSwicSIsMl0sWzAsMiwiUSJdLFsyLDEsInEnIl1d
> \[\begin{tikzcd} E & \\ & {E'} \\ X \arrow["Q", from=1-1, to=2-2] \arrow["q"', from=1-1, to=3-1] \arrow["{q'}", from=2-2, to=3-1] \end{tikzcd}\] 
> 
> \end{document}
> ```
> 
> Also, any two simply connected coverings spaces of $X$ are isomorphic. 
> 

^f57977

> [!Definition] Universal Covering Space
> Because of [[#^f57977]], any covering of $X$ by a comply connected space $\tilde{X}$ is called a **universal covering**, and $\tilde{X}$ is called the **universal covering space of $X$**. 

^357bab

> [!Theorem] Existence of the Universal Cover, @leeIntroductionTopologicalManifolds2011 Thm 11.43
> Every connected and locally simply connected topological space (in particular, every connected manifold) has a [[#^357bab|universal covering space]]. 

#t Read the (rather long) proof of this theorem sometime 
