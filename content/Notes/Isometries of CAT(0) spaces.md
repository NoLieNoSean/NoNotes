---
id: "624"
date: 2026-11-19
time: 18:55
tags:
---
We've seen ([[CAT-(k) spaces#^d85d84]]) the isometry groups of the model spaces. We now study the isometry groups of arbitrary $\text{CAT}(0)$ spaces. 
# Individual Isometries

> [!Definition] Translation length
> Let $X$ be a metric space and let $\gamma$ be an isometry of $X$. The **displacement function** of $\gamma$ is the function $d_{\gamma}:X\to \mathbb{R}_{+}$ defined by $d_{\gamma}(\gamma x, x)$. The **translation length** of $\gamma$ is the number $|\gamma|:=\inf \{ d_{\gamma}(x):x\in X \}$. 

> [!Definition]
> The set of points where $d_{\gamma}$ attains this infimum is denoted by $\text{Min}(\gamma)$. More generally, if $\Gamma$ is a group acting by isometries on $X,$ then $\text{Min}(\Gamma)=\bigcap_{\gamma\in\Gamma}\text{Min}(\gamma)$. An isometry is called **semisimple** if $\text{Min}(\gamma)$ is non-empty. An action of a group by isometries of $X$ is called **semisimple** if all of its elements are semisimple. 

> [!Proposition] @bridsonMetricSpacesNonpositive1999 Thm II.6.2
> Let $X$ be a metric space and let $\gamma$ be an isometry of $X$. Let $\Gamma$ be a group acting by isometries on $X$. 
> 1. $\text{Min}(\gamma)$ is $\gamma$-invariant and $\text{Min}(\Gamma)$ is $\Gamma$-invariant. 
> 2. If $\alpha$ is an isometry of $X$, then $|\gamma|=|\alpha\gamma\alpha ^{-1}|$, and $\text{Min}(\alpha\gamma\alpha ^{-1})=\alpha\text{Min}(\gamma)$. In particular, if $\alpha$ commutes with $\gamma$, then it leaves $\text{Min}(\gamma)$ invariant. If $N$ is a normal subgroup of $\Gamma$, then $\text{Min}(N)$ is $\Gamma$-invariant. 
> 3. If $X$ is a $\text{CAT}(0)$ space, then $d_{\gamma}$ is convex, and hence $\text{Min}(\gamma)$ is a closed convex set. 
> 4. If $C\subseteq X$ is non-empty, complete, convex, and $\gamma$-invariant, then $|\gamma|=|\gamma|_{C}|$ and $\gamma$ is semisimple iff $\gamma|_{C}$ is semisimple. Thus $\text{Min}(\gamma)$ is non-empty iff $C\cap\text{Min}(\gamma)$ is non-empty. 

> [!Definition]
> Let $X$ be a metric space. An isometry $\gamma$ of $X$ is called
> 1. **elliptic** if $\gamma$ has a fixed point,
> 2. **hyperbolic** if $d_{\gamma}$ attains a strictly positive minimum
> 3. **parabolic** if $d_{\gamma}$ does not attain its minimum, in other words if $\text{Min}(\gamma)$ is empty. 

So, an isometry is semisimple iff it is elliptic or hyperbolic.

[!Example]
1. Isometries of $\mathbb{H}^{2}$, semisimple only when diagonalizable
2. Every isometry of an $\mathbb{R}$-tree is semisimple


## Characterizing elliptic and hyperbolic isometries

> [!Proposition] @bridsonMetricSpacesNonpositive1999 Thm II.6.7
> Let $X$ be a complete $\text{CAT}(0)$ space, and let $\gamma$ be an isometry of $X$. Then, $\gamma$ is elliptic iff $\gamma$ has a bounded orbit. And if $\gamma^{n}$ is elliptic for some $n\ne 0$, then $\gamma$ is elliptic. 
> 
> > [!Proof]-
> > 
> > The first assertion follows from [[CAT-(k) spaces#^c2819d]]. If $\gamma^{n}$ is elliptic, fixing $x\in X$, then the orbit of $x$ under $\gamma$ is finite, hence bounded. 
> 

[!Proposition] @bridsonMetricSpacesNonpositive1999 Thm II.6.8
Let $X$ be a $\text{CAT}(0)$ space. 
1. An isometry $\gamma$ of $X$ is hyperbolic iff there exists a geodesic line $c:\mathbb{R}\to X$ which is translated non-trivially by $\gamma$, namely $\gamma c(t)=c(t+a)$, for some $a> 0$. The set $c(\mathbb{R})$ is called an **axis** of $\gamma$. For any such axis, we have $a=|\gamma|$. 
2. If $X$ is complete and $\gamma^{n}$ is hyperbolic for some $m\ne 0$, then $\gamma$ is hyperbolic. 

[!Proposition] @bridsonMetricSpacesNonpositive1999 Thm II.6.8
Let $X$ be a $\text{CAT}(0)$ space, and let $\gamma$ be a hyperbolic isometry of $X$. 
1. The axes of $\gamma$ are parallel to each other and their union is $\text{Min}(\gamma)$. 
2. $\text{Min}(\gamma)$ is isometric to a product $Y\times \mathbb{R}$, and the restriction of $\gamma$ to $\text{Min}(\gamma)$ is of the form $(y, t)\mapsto(y, t+|\gamma|)$, where $y\in Y$, $t\in \mathbb{R}$. 
3. Every isometry $\alpha$ that commutes with $\gamma$ leaves $\text{Min}(\gamma)=Y\times \mathbb{R}$ invariant, and its restriction to $Y\times \mathbb{R}$ is of the form $(\alpha', \alpha'')$, where $\alpha'$ is an isometry of $Y$ and $\alpha''$ a translation of $\mathbb{R}$. 


# Clifford translations

[!Definition]
An isometry $\gamma$ of a metric space $X$ is called a **Clifford translation** if $d_{\gamma}$ is a constant function, i.e., $\text{Min}(\gamma)=X$. 

# Isometry groups of non-positively curved spaces
