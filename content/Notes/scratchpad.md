


[!Example] Formalizing Example 3.9
Let $\textsf{C}$ be a category. Let $A, B\in\text{Obj}(\textsf{C})$. Define a new category $\textsf{C}_{A, B}$ like so:
- $\text{Obj}(\textsf{C}_{A, B})$ consists of diagrams 
	
	```tikz
	\usepackage{tikz-cd}
	\begin{document}
	\begin{tikzcd}[row sep=tiny]
	& A\\
	Z \ar[ur, "f"]\ar[dr, "g"']&\\
	&B
	\end{tikzcd}
	\end{document}
	```
	in $\textsf{C}$, denoted by $(Z, f, g)$; and
- morphisms
	
	```tikz
	\usepackage{tikz-cd}
	\usepackage{amsmath}
	\usepackage{amssymb}
	\begin{document}
	\begin{tikzcd}[row sep=tiny]
		& A\\
		Z_1 \ar[ur, "f_1"]\ar[dr, "g_1"']&\\
		&B
	\end{tikzcd}
	\quad
	\begin{tikzcd}
		\longrightarrow
	\end{tikzcd}
	\quad
	\begin{tikzcd}[row sep=tiny]
		& A\\
		Z_2 \ar[ur, "f_2"]\ar[dr, "g_2"']&\\
		&B
	\end{tikzcd}
	\end{document}
	```
	are *commutative* diagrams
	```tikz
	\usepackage{tikz-cd}
	\begin{document}
	\begin{tikzcd}
	 && A\\
	 Z_1 \ar[rru, bend left, "f_1"]\ar[r, "\sigma"]\ar[rrd,bend right,  "g_1"] & Z_2 \ar[ru, "f_2"] \ar[rd, "g_2"]&\\
	 &&B
	\end{tikzcd}
	\end{document}
	```

As in example 3.5, the identities are inherited from the identities in $\textsf{C}$: for $(Z, f, g)$ in $\textsf{C}_{A, B}$, the identity $1_{(Z, f, g)}$ corresponds to the diagram
```tikz
	\usepackage{tikz-cd}
	\begin{document}
	\begin{tikzcd}
	 && A\\
	 Z \ar[rru, bend left, "f"]\ar[r, "1_Z"]\ar[rrd,bend right,  "g"] & Z \ar[ru, "f"] \ar[rd, "g"]&\\
	 &&B
	\end{tikzcd}
	\end{document}
```
The composition $(Z_{1}, f_{1}, g_{1})\xrightarrow{\sigma}(Z_{2}, f_{2}, g_{2})\xrightarrow{\tau}(Z_{3}, f_{3}, g_{3})$ is achieved by combining the diagrams of $\sigma$ and $\tau$ in the following manner
```tikz
	\usepackage{tikz-cd}
	\begin{document}
	\begin{tikzcd}
	 &&& A\\
	 Z_1 \ar[rrru, bend left, "f_1"]\ar[r, "\sigma"]\ar[rrrd,bend right,  "g_1"'] & Z_2 \ar[rru, bend left, "f_2"'] \ar[rrd, bend right, "g_2"]\ar[r, "\tau"]&Z_3 \ar[ru, "f_3"'] \ar[rd, "g_3"]&\\
	 &&&B
	\end{tikzcd}
	\end{document}
```
and since $\textsf{C}$ is a category, it follows that the diagram obtained by removing $Z_{2}$, i.e,
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
 && A\\
 Z_1 \ar[rru, bend left, "f_1"]\ar[r, "\tau\sigma"]\ar[rrd,bend right,  "g_1"] & Z_3 \ar[ru, "f_3"] \ar[rd, "g_3"]&\\
 &&B
\end{tikzcd}
\end{document}
```
commutes. Associativity immediately from the fact that composition is associative in $\textsf{C}$.

[!Example] Formalizing Example 3.10
Let $\textsf{C}$ be a category. Choose two fixed morphisms $\alpha:A\to C$ and $\beta:B\to C$ in $\textsf{C}$, with the same target $C$. Define a category $\textsf{C}_{\alpha, \beta}$ as follows:
- $\text{Obj}(\textsf{C}_{\alpha, \beta})$ contains commutative diagrams
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
	in $\textsf{C}$, and
- morphisms correspond to commutative diagrams


