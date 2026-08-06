---
id: "326"
date: 2025-10-23
time: 10:53
tags:
  - CAL2
  - Lecture
---
# Differential forms

$V_{1}\otimes V_{2}\otimes\dots \otimes V_{n}\cong \{ V_{1}^{*}\times\dots \times V_{n}^{*}\xrightarrow{\text{multilinear}} K \}$, where $K$ is the base field.

[!Definition]
$\bigwedge^{K}V^{*}:=\{ V\times\dots \times V\xrightarrow{\text{multilinear, alternating}}  K\}$.

$\bigwedge^{0}V^{*}=K$. 
$\bigwedge^{1}V^{*}=V^{*}$. 
$\bigwedge^{2}V^{*}$ is the space of skew symmetric forms.


[!Definition]
Let $i=1, 2$. Let $w_{i}\in \otimes_{m_{i}}V^{*}$. 

$w_{1}\wedge w_{2}(v_{1}, \dots, v_{m_{1}+m_{2}})=\sum_{r\in\text{Sh}(m_{1}, m_{2})}(-1)^{r}w_{1}(v_{r_{1}}, \dots, v_{r_{m_{1}}})w_{2}(v_{r_{m_{1}+1}}, \dots, v_{r_{m_{1}+m_{2}}})$. 
$\text{Sh}(m_{1}, m_{2})=\{ r\in S_{m_{1}+m_{2}}:r_{1}<\dots< r_{m_{1}}, r_{m_{1}+1}<\dots< r_{m_{1}+m_{2}} \}$. 
$(-1)^{r}:=\text{sgn}(r)$. 

$w_{1}\wedge w_{2}\wedge w_{3}$ is similarly defined.

[!Proposition]
$(w_{1}\wedge w_{2})\wedge w_{3}=w_{1}\wedge(w_{2}\wedge w_{3})$.
$w_{1}\wedge w_{2}=(-1)^{m_{1}m_{2}}w_{2}\wedge w_{1}$.

[!Lemma]
$\text{Sh}(m_{1}, m_{2}, m_{3})\xrightarrow{\sim}\text{Sh}(m_{1}+m_{2}, m_{3})\times\text{Sh}(m_{1}, m_{2})$.


---

There is a natural inclusion
$$
\bigwedge^{m}V^{*}\xrightarrow{i}  \bigotimes^{m}V^{*}.
$$

Define $\text{Alt}:\bigotimes^{m}V^{*}\to\bigotimes^{m}V^{*}$ by
$$
\text{Alt}(w)= \frac{1}{|\mathfrak{S}_{m}|}\sum_{\mathfrak{\sigma}\in \mathfrak{S}_{m}}(-1)^{\sigma}(\sigma.w),
$$
where $(\sigma.w)(v_{1}, \dots, v_{m})=w(v_{\sigma(1)}, \dots, v_{\sigma(m)})$.


[!Proposition]
$\text{Alt}$ is a projector onto $\bigwedge^{m}V^{*}$, that is, 
1. $\mathrm{Im}~(\text{Alt})=\bigwedge^{m}V^{*}$.
2. $\text{Alt}\circ\text{Alt}=\text{Alt}$


