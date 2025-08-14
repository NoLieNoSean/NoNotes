---
tags:
  - Tutorial
  - ALG3
date: 2025-08-08
time: 14:55
---

# Problem 1

$(a)$: $R$ is clearly an abelian group under $+$. Associativity, distributivity, and existence of identity are easily verified.

$(b)$: $\alpha$ is a left zero divisor when $a=p$:
$$
\begin{pmatrix}
p & \overline{0} \\
0 & 1 
\end{pmatrix}
\begin{pmatrix}
0 & \overline{1} \\
0 & 0
\end{pmatrix}
=\begin{pmatrix}
0 & \overline{0} \\
0 & 0
\end{pmatrix}.
$$
$\alpha$ is not a right zero divisor since right multiplication by $\alpha$ is injective (unless $a=0$)
$$
\begin{pmatrix}
x & \overline{y} \\
0 & z
\end{pmatrix}\begin{pmatrix}
a & \overline{0} \\
0 & 1
\end{pmatrix}=\begin{pmatrix}
xa & \overline{y} \\
0 & z
\end{pmatrix}.
$$

$(c)$: $\beta$ is a right zero divisor from $(b)$, and also from the fact that $\beta^{2}=0$ (which also makes it a left zero divisor).

# Problem 2

$(a)$: It is easy to verify that $(\mathbb{H}, +)$ is an abelian group.

**Verifying associativity**
Consider the injective map $\varphi:\mathbb{H}\to M_{2}(\mathbb{C})$ defined by
$$
\varphi(a+b\mathbf{i}+c\mathbf{j}+d\mathbf{k})=\begin{pmatrix}
a+b\mathbf{i} & c+d\mathbf{i} \\
-c+d\mathbf{i} & a-b\mathbf{i}
\end{pmatrix}.
$$
Clearly, $\varphi$ respects addition: $\varphi(q_{1}+q_{2})=\varphi(q_{1})+\varphi(q_{2})$. Thus, $\varphi$ is a group homomorphism $\varphi:(\mathbb{H}, +)\to (M_{2}(\mathbb{C}), +)$. Next, we see that $\varphi$ respects multiplication too. It is easily verified that $\varphi(1)=I$, $\varphi(i)^{2}=\varphi(j)^{2}=\varphi(k)^{2}=-I$, and $\varphi(i)\varphi(j)=-\varphi(j)\varphi(i)=\varphi(k)$. Since $\varphi$ respects addition, this yields
$$
\begin{align}
 & \varphi((a+b\mathbf{i}+c\mathbf{j}+d\mathbf{k})(e+f\mathbf{i}+g\mathbf{j}+h\mathbf{k})) \\
 & = \varphi(a+b\mathbf{i}+c\mathbf{j}+d\mathbf{k})\varphi(e+f\mathbf{i}+g\mathbf{j}+h\mathbf{k}).
\end{align}
$$
Thus, $\varphi$ respects multiplication. So, 
$$
\begin{align}
 & \varphi((q_{1}q_{2})q_{3})=\varphi(q_{1}q_{2})\varphi(q_{3}) \\
 & =\varphi(q_{1})\varphi(q_{2})\varphi(q_{3})=\varphi(q_{1})\varphi(q_{2}q_{3})=\varphi(q_{1}(q_{2}q_{3})).
\end{align}
$$
Since $\varphi$ is injective, this implies $(q_{1}q_{2})q_{3}=q_{1}(q_{2}q_{3})$.

**Division ring**
For $q=a+b\mathbf{i}+c\mathbf{j}+d\mathbf{k}\in \mathbb{H}$, let
$$
q^{-1}\equiv\frac{a-b\mathbf{i}-c\mathbf{j}-d\mathbf{k}}{ a^{2}+b^{2}+c^{2}+d^{2} }.
$$
Then, $qq^{-1}=q^{-1}q=1$. 

**Center**
For $q=a+b\mathbf{i}+c\mathbf{j}+d\mathbf{k}\in \mathbb{H}$, $q\mathbf{i}-\mathbf{i}q=-2c\mathbf{k}+2d\mathbf{j}$. Thus, $q$ commutes with $\mathbf{i}$ iff $c=d=0$. Similarly, $q$ commutes with $\mathbf{j}$ iff $b=d=0$. Thus, $Z(\mathbb{H})\subseteq \mathbb{R}$. Since it is clear that $\mathbb{R}\subseteq Z(\mathbb{H})$, $Z(\mathbb{H})=\mathbb{R}$.

$(b)$: $2$ doesn't have an inverse. The units are $\{ \pm 1, \pm \mathbf{i}, \pm \mathbf{j}, \pm \mathbf{k} \}$. The center is $\mathbb{Z}$.

# Problem 3

$(a)$: 
$$
\begin{align}
 & \left[ \left( \sum a_{i}x^{i} \right)\left( \sum b_{j}x^{j} \right) \right]\left( \sum c_{k}x^{k} \right) \\
 & =\left[ \sum a_{i}\sigma^{i}(b_{j})x^{i+j} \right]\left( \sum c_{k}x^{k} \right) \\
 & = \sum a_{i}\sigma^{i}(b_{j})\sigma^{i+j}(c_{k})x^{i+j+k} \\
 & =\left( \sum a_{i}x^{i} \right)\left[ \sum b_{j}\sigma^{j}(c_{k})x^{j+k} \right] \\

 & = \left( \sum a_{i}x^{i} \right)\left[ \left( \sum b_{j}x^{j} \right) \left( \sum c_{k}x^{k} \right) \right] \\
\end{align}
$$
Distributivity trivially holds.

$(b)$: Let $\sum a_{i}x^{i}\in Z(R)$. 
$$
\begin{align}
 & \left[ x, \sum a_{j}x^{j} \right]=0\iff a_{j}=\overline{a_{j}}\,\forall j\iff a_{j}\in R\,\forall j \\
 & \left[ b, \sum a_{j}x^{j} \right]=0\iff ba_{j}=a_{j}\sigma^{j}(b)\,\forall j\iff 2 |   j\,\forall j.
\end{align}
$$
Thus, $Z(R)= \mathbb{R}[x^{2}]$.

$(c)$: Define a map $\varphi:R/(R\cdot(x^{2}+1))\to \mathbb{H}$ by
$$
a+bx+I\mapsto a+b(j)+I(j).
$$

