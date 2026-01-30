---
id: "105"
date: April 2025
---

> [!Definition]
> An **isometry** of $\mathbb{R}^{n}$ is a distance preserving map $f$ from $\mathbb{R}^{n}$ to itself, a map such that, for all $u$ and $v$ in $\mathbb{R}^{n}$, 
> $$
> |f(u)-f(v)|=|u-v|.
> $$

Artin composes isometries from the right.

> [!Lemma]
> Let $\mathbf{x}$ and $\mathbf{y}$ be points in $\mathbb{R}^{n}$. If the three dot products $\mathbf{x}\cdot \mathbf{x}$, $\mathbf{y}\cdot \mathbf{y}$, and $\mathbf{y}\cdot \mathbf{y}$ are equal, then $\mathbf{x}=\mathbf{y}$.

> [!Theorem]
> The following conditions on a map $\varphi:\mathbb{R}^{n}\to \mathbb{R}^{n}$ are equivalent:
> 1. $\varphi$ is an isometry that fixes the origin: $\varphi(\mathbf{0})=\mathbf{0}$
> 2. $\varphi$ preserves dot products: $\varphi(\mathbf{v})\cdot\varphi(\mathbf{u})=\mathbf{v}\cdot \mathbf{u}$ for all $\mathbf{v}$ and $\mathbf{u}$,
> 3. $\varphi$ is an orthogonal linear operator.

> [!Corollary]
> Every isometry of $\mathbb{R}^{n}$ is the composition of an orthogonal linear operator and a translation.

More precisely, if $f$ is an isometry and if $f(0)=a$, then $f=t_{a}\varphi$ where $t_{a}$ is a translation and $\varphi$ is an orthogonal linear operator. This expression for $f$ is unique.

> [!Corollary]
> The set of all isometries of $\mathbb{R}^{n}$ forms a group that we denote by $M_{n}$, with the composition of functions as its law of composition

There is an important map $\pi:M_{n}\to O_{n}$, defined by dropping the translation part of an isometry $f$.

> [!Theorem] Proposition
> The map $\pi$ is a surjective homomorphism. Its kernel is the set $T=\{ t_{v} \}$ of translations, which is a normal subgroup of $M_{n}$.


# Change of coordinates

Let $P$ denote an $n$-dimensional space. To analyze the effect of such a change, we begin with an isometry $f$, a point $p$ of $P$, and its image $q=f(p)$, without reference to coordinates. Now, suppose we introduce a coordinate system $V=(v_{1}, \dots, v_{n})$ of $P$. The space $P$ becomes identified with $\mathbb{R}^{n}$, and the points $p$ and $q$ have coordinates $[p]_{V}$ and $[q]_{V}$. The isometry $f$ will have a formula $t_{a}\varphi$ in terms of the coordinates; call it $f_{V}$: $f_{V}([p]_{V})=[q]_{V}$. We want to determine what happens to the coordinate vectors and to the formula when we change coordinates by an isometry.

Say we change our coordinates by some isometry $\eta$ of $\mathbb{R}^{n}$, such that $\eta([p]_{W})=[p]_{V}$, where $W$ would be the new basis. Substituting for $[p]_{V}$ and $[q]_{V}$ in the old formula, we get

$$
\eta ^{-1}f_{V}\eta([p]_{W})=[q]_{W},
$$
so $f_{W}=\eta ^{-1}f_{V}\eta$.

# Isometries of the plane

> [!Theorem]
> Every isometry of the plane has one of the following forms:
> 
> (a) Orientation preserving symmetries:
> 1. Translation: A map $t_{v}$ that sends $p\mapsto p+v$.
> 2. Rotation: rotation of the plane through a nonzero angle $\theta$ about some point.
> 
> (b) orientation-reversing isometries:
> 3. Reflection: a bilateral symmetry about a line $l$
> 4. glide reflection: a reflection about a line $l$, followed by translation by a nonzero vector parallel to $l$.




