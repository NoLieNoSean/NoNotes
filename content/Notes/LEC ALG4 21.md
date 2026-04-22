---
id: "437"
date: 2026-03-27
time: 11:53
tags:
  - ALG4
  - Lecture
  - Processed
---
# Fundamental theorem of Galois theory

> [!Theorem] @isaacsAlgebraGraduateCourse2009 18.20
> Let $G\subseteq \text{Aut}(E)$. Let $F=E^{G}$. If $G$ is finite, then
> 1. $|G|=|E:F|$,
> 2. $G=\text{Gal}(E/F)$, and
> 3. $E$ is Galois over $F$. 

^1150be

> [!Theorem] Fundamental, of Galois theory, @isaacsAlgebraGraduateCourse2009 18.21
> Let $E/F$ be a Galois extension with $G=\text{Gal}(E/F)$. Write
> $$
> \mathcal{F}=\{ K:E/K/F \}\quad \text{and}\quad \mathcal{G}=\{ H:H\leqslant G \}.
> $$
> 1. The maps $f=\text{Fix}(\_)$ and $g=\text{Gal}(E/\_)$ are inverse bijections between $\mathcal{F}$ and $\mathcal{G}$. These maps reverse containments. 
> 2. If $g(K)=H$, then $|E:K|=|H|$ and $|K:F|=|G:H|$. In particular, $|E:F|=|G|$. 
> 3. If $g(K)=H$ and $\sigma\in G$, then $g(\sigma(K))=\sigma H\sigma ^{-1}$. Also, if $H\triangleleft G$ iff $K$ is Galois over $F$, and in this case, $\text{Gal}(K/F)\cong G/H$. 


> [!Proposition]
> Let $G$ be a finite group. Then there exists $E$ such that $G\hookrightarrow \text{Aut}(E)$ (which implies, by [[LEC ALG4 21#^1150be]], $\text{Gal}(E/E^{G})=G$). 
> 
> > [!Proof]-
> > 
> > [[LEC ALG2 7#^3ca8d2|Embed]] $G\hookrightarrow\mathfrak{S}_{n}$ for some $n$. Let $F$ be any field, and let $E=F(x_{1}, \dots, x_{n})$. Compose with the natural embedding $\mathfrak{S}_{n}\hookrightarrow \text{Gal}(E/F)\subseteq \text{Aut}(E)$. 