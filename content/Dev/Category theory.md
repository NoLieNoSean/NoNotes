[[Aluffi - 2009 - Algebra chapter 0.pdf#page=41|Refer]] [@aluffiAlgebraChapter02009, pp. 18].

> [!Definition] Category
> A **category** $\textsf{C}$ consists of
> - a class $\text{Obj}(\textsf{C})$ of *objects* of this category; and
> - for every two objects $A, B$ of $\textsf{C}$, a set $\text{Hom}_{\textsf{C}}(A, B)$ of *morphisms*, with the properties listed below.
> 
> Properties of morphisms:
> 1. For every object $A$ of $\textsf{C}$, there exists (at least) one morphism $1_{A}\in \text{Hom}_{\textsf{C}}(A, A)$ of morphisms, the *identity* on $A$. 
> 2. One can *compose* morphisms: two morphisms $f\in \text{Hom}_{\textsf{C}}(A, B)$ and $g\in \text{Hom}_{\textsf{C}}(B, C)$ determine a morphism $gf\in \text{Hom}_{\textsf{C}}(A, C)$. That is, for every triple of objects $A, B, C$ of $\textsf{C}$, there is a function (of sets) $\text{Hom}_{C}(A, B)\times \text{Hom}_{\textsf{C}}(B, C)\to \text{Hom}_{\textsf{C}}(A, C)$, and the image of the pair $(f, g)$ is denoted by $gf$.
> 3. This 'composition law' is *associative*: if $f\in \text{Hom}_{\textsf{C}}(A, B)$, $g\in \text{Hom}_{\textsf{C}}(B, C)$, and $h\in \text{Hom}_{\textsf{C}}(C, D)$, then $(hg)f=h(gf)$.
> 4. The *identity morphisms are identities with respect to composition*: for all $f\in \text{Hom}_{\textsf{C}}(A, B)$, we have $f 1_{A}=f$, $1_{B}f=f$.

^05a089

Also, note that if two morphisms are the same, then necessarily they have the same source and the same target: source and target are part of the datum of a morphism (and by extension, set-functions too).

Refer [@aluffiAlgebraChapter02009, pp. 20] for examples.

> [!Note]
> In [@aluffiAlgebraChapter02009, pp.22] Example 3.5, we could drop the requirement for morphisms in $\textsf{C}_{A}$ to be *commutative* diagrams. In this new category, call it $\textsf{D}_{A}$, morphisms $f_{1}\to f_{2}$ correspond to all morphisms $\sigma:Z_{1}\to Z_{2}$. However, such a category doesn't yield anything new, since $\text{Hom}_{\textsf{D}_{A}}(f, f')$ is the same as long as the domains of $f$ and $f'$ are fixed. In other words, morphisms in $\textsf{D}_{A}$ depend only on the $Z$'s and ignore the maps to $A$. So, $\textsf{D}_{A}$ is essentially $\textsf{C}$ itself, where the objects are the pairs $(Z, f)$, but the $f$'s are forgotten in defining the morphisms.

> [!Example] Formalizing Example 3.9
> Let $\textsf{C}$ be a category. Let $A, B\in\text{Obj}(\textsf{C})$. Define a new category $\textsf{C}_{A, B}$ like so:
> - $\text{Obj}(\textsf{C}_{A, B})$ consists of diagrams 
> 	
> 	```tikz
> 	\usepackage{tikz-cd}
> 	\begin{document}
> 	\begin{tikzcd}[row sep=tiny]
> 	& A\\
> 	Z \ar[ur, "f"]\ar[dr, "g"']&\\
> 	&B
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 	in $\textsf{C}$, denoted by $(Z, f, g)$; and
> - morphisms
> 	
> 	```tikz
> 	\usepackage{tikz-cd}
> 	\usepackage{amsmath}
> 	\usepackage{amssymb}
> 	\begin{document}
> 	\begin{tikzcd}[row sep=tiny]
> 		& A\\
> 		Z_1 \ar[ur, "f_1"]\ar[dr, "g_1"']&\\
> 		&B
> 	\end{tikzcd}
> 	\quad
> 	\begin{tikzcd}
> 		\longrightarrow
> 	\end{tikzcd}
> 	\quad
> 	\begin{tikzcd}[row sep=tiny]
> 		& A\\
> 		Z_2 \ar[ur, "f_2"]\ar[dr, "g_2"']&\\
> 		&B
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 	are *commutative* diagrams
> 	```tikz
> 	\usepackage{tikz-cd}
> 	\begin{document}
> 	\begin{tikzcd}
> 	 && A\\
> 	 Z_1 \ar[rru, bend left, "f_1"]\ar[r, "\sigma"]\ar[rrd,bend right,  "g_1"] & Z_2 \ar[ru, "f_2"] \ar[rd, "g_2"]&\\
> 	 &&B
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 
> As in example 3.5, the identities are inherited from the identities in $\textsf{C}$: for $(Z, f, g)$ in $\textsf{C}_{A, B}$, the identity $1_{(Z, f, g)}$ corresponds to the diagram
> ```tikz
> 	\usepackage{tikz-cd}
> 	\begin{document}
> 	\begin{tikzcd}
> 	 && A\\
> 	 Z \ar[rru, bend left, "f"]\ar[r, "1_Z"]\ar[rrd,bend right,  "g"] & Z \ar[ru, "f"] \ar[rd, "g"]&\\
> 	 &&B
> 	\end{tikzcd}
> 	\end{document}
> ```
> The composition $(Z_{1}, f_{1}, g_{1})\xrightarrow{\sigma}(Z_{2}, f_{2}, g_{2})\xrightarrow{\tau}(Z_{3}, f_{3}, g_{3})$ is achieved by combining the diagrams of $\sigma$ and $\tau$ in the following manner
> ```tikz
> 	\usepackage{tikz-cd}
> 	\begin{document}
> 	\begin{tikzcd}
> 	 &&& A\\
> 	 Z_1 \ar[rrru, bend left, "f_1"]\ar[r, "\sigma"]\ar[rrrd,bend right,  "g_1"'] & Z_2 \ar[rru, bend left, "f_2"'] \ar[rrd, bend right, "g_2"]\ar[r, "\tau"]&Z_3 \ar[ru, "f_3"'] \ar[rd, "g_3"]&\\
> 	 &&&B
> 	\end{tikzcd}
> 	\end{document}
> ```
> and since $\textsf{C}$ is a category, it follows that the diagram obtained by removing $Z_{2}$, i.e,
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}
>  && A\\
>  Z_1 \ar[rru, bend left, "f_1"]\ar[r, "\tau\sigma"]\ar[rrd,bend right,  "g_1"] & Z_3 \ar[ru, "f_3"] \ar[rd, "g_3"]&\\
>  &&B
> \end{tikzcd}
> \end{document}
> ```
> commutes. Associativity immediately from the fact that composition is associative in $\textsf{C}$.

[!Example] Formalizing Example 3.10
Let $\textsf{C}$ be a category. Choose two fixed morphisms $\alpha:A\to C$ and $\beta:B\to C$ in $\textsf{C}$, with the same target $C$. Define a category $\textsf{C}_{\alpha, \beta}$ as follows:

```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
& A\ar[rd, "\alpha"] &\\
Z\ar[ru, "f"]\ar[rd, "g"]&&C\\
&B\ar[ru, "\beta"]&
\end{tikzcd}
\end{document}
```


```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
&&A\ar[rd, "\alpha"]&\\
Z_1\ar[rru, bend left, "f_1"]\ar[r, "\sigma"]\ar[rrd, bend right, "g_1"]& Z_2\ar[ru, "f_2"]\ar[rd, "g_2"]&&C\\
&&B\ar[ru, "\beta"]
\end{tikzcd}
\end{document}
```




```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
Z_1 \ar[d, "f_1"'] & Z_2 \arrow[d, "f_2"']\\
A&A
\end{tikzcd}

\end{document}
```

```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}[column sep=tiny]
Z_1 \ar[rr, "\sigma"] \ar[dr, "f_1"'] & & Z_2 \ar[dl, "f_2"]\\
& A &
\end{tikzcd}
\end{document}
```

```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
Z_1 \ar[r, "\sigma"] \ar[dr, "f_1"'] & Z_2 \ar[d, "f_2"] \ar[r, "\tau"] & Z_3 \ar[dl, "f_3"]\\
& A &
\end{tikzcd}
\end{document}
```

