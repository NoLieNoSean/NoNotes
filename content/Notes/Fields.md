---
tags:
  - ANA1
---

## Axioms
A *field* is a set $\mathbb{F}$ with two operations, called addition and multiplication, which satisfy the following field axioms:
- **Axioms for addition**
	- $x\in \mathbb{F}$ and $y\in \mathbb{F}$ $\implies$ $x+y\in \mathbb{F}$.
	- Addition is commutative: $x+y=y+x$ for all $x,y\in \mathbb{F}$.
	- Addition is associative: $(x+y)+z = x+(y+z)$ for all $x, y,z\in \mathbb{F}$.
	- $\mathbb{F}$ contains an element $0$ such that $0+x = x$ for all $x\in \mathbb{F}$.
	- To every $x\in \mathbb{F}$ corresponds an element $-x\in \mathbb{F}$ such that $x+(-x)=0$.
- **Axioms for multiplication**
	- If $x\in \mathbb{F}$ and $y\in F$, then their product $xy\in \mathbb{F}$.
	- Multiplication is commutative: $xy=yx$ for all $x,y\in \mathbb{F}$.
	- Multiplication is associative: $(xy)z = x(yz)$ for all $x,y,z \in \mathbb{F}$.
	- $\mathbb{F}$ contains an element $1\ne 0$ such that $1x=x$ for every $x\in \mathbb{F}$.
	- If $x\in \mathbb{F}$ and $x\ne 0$ then there exists an element $\frac{1}{x}\in \mathbb{F}$ such that $x (\frac{1}{x})=1$.
- **Distributive Law**
	- $x(y+z) = xy+xz$ holds for all $x,y,z\in \mathbb{F}$.

## Statements implied by the axioms
- **For addition**
	- if $x+y = x+z$ then $y=z$
	- if $x+y = x$ then $y=0$.
	- If $x+y = 0$ then $y=-x$.
	- $-(-x) = x$.
- **For multiplication**
	- If $x\ne 0$ and $xy=xz$ then $y=z$.
	- If $x \ne 0$ and $xy = x$ then $y=1$.
	- If $x\ne 0$ and $xy = 1$ then $y = \frac{1}{x}$.
	- If $x\ne 0$ then $\frac{1}{\frac{1}{x}} = x$.
- **And the rest**
	- $0x=0$.
	- If $x\ne 0$ and $y\ne 0$ then $xy\ne 0$.
	- $(-x)y = -(xy)=x(-y)$.
	- $(-x)(-y)=xy$.

## Examples
- The set $\{ 0,1,2,3,4 \}$ is a field when addition and multiplication are defined modulo $5$. Pay special attention to how multiplicative inverses would work here. $4^{-1} = 4,\ 3^{-1} = 2,\ 2^{-1} = 3,\ 1^{-1} = 1$.