---
tags:
  - ALG3
  - Lecture
date: 2025-09-11
time: 09:27
---
# Gauss's Lemma

We have two tools to study factoring in $\mathbb{Z}[x]$:
1. The inclusion $\mathbb{Z}[x]\subseteq \mathbb{Q}[x]$, and
2. the [[LEC ALG3 1#^0422dc|unique homomorphism]] $\psi_{p}:\mathbb{Z}[x]\to \mathbb{F}_{p}[x]$ that sends $x$ to $x$.

> [!Definition]
> A polynomial $f(x)=\sum_{i=0}^{n}a_{i}x^{i}\in \mathbb{Q}[x]$ is called **primitive** if 
> 1. it is an integer polynomial of positive degree,
> 2. the gcd of its coefficients in $\mathbb{Z}$ is $1$, and
> 3. $a_{n}> 0$. 

It is clear that if $f$ is an integer polynomial of positive degree