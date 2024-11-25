`Vasudeva S N`

## 11.47

Let $A$, $B$, and $C$ be frames of reference with coordinates $(ct, x)$, $(c\tilde{t}, \tilde{x})$, and $(c\overline{t}, \overline{x})$. Let the velocity of $B$ be $v_{1}$ with respect to $A$, and the velocity of $C$ be $v_{2}$ with respect to $B$. If we let $\beta_{v_{1}}=v_{1}/c$, $\beta_{v_{2}}=\frac{v_{2}}{c}$, $\gamma_{v_{1}}=1/\sqrt{ 1-\beta_{v_{1}}^{2} }$, and $\gamma_{v_{2}}=1/\sqrt{ 1-\beta_{v_{2}}^{2} }$, we can write
$$
\begin{align}\begin{bmatrix}
c\tilde{t} \ \\
\tilde{x}
\end{bmatrix}=\gamma_{v_{1}}\begin{bmatrix}
1  & -\beta_{v_{1}} \\
-\beta_{v_{1}}  &  1
\end{bmatrix} 
\begin{bmatrix}
ct \\
x

\end{bmatrix} \\ \\


\begin{bmatrix}
c\overline{t} \  \\
\overline{x}
\end{bmatrix}=\gamma_{v_{2}}\begin{bmatrix}
1  & -\beta_{v_{2}} \\
-\beta_{v_{2}}  &  1
\end{bmatrix} 
\begin{bmatrix}
c\tilde{t} \\
\tilde{x}

\end{bmatrix} \\

\end{align}
$$
$$
\begin{align}
\implies \begin{bmatrix}
c\overline{t} \  \\
\overline{x}
\end{bmatrix}
=\gamma_{v_{1}}\gamma_{v_{2}} \begin{bmatrix}
1  & -\beta_{v_{2}} \\
-\beta_{v_{2}}  &  1
\end{bmatrix} \begin{bmatrix}
1  & -\beta_{v_{1}} \\
-\beta_{v_{1}}  &  1
\end{bmatrix} \begin{bmatrix}
ct \\
x
\end{bmatrix}
\end{align}.
$$
On simplifying, we get
$$
\begin{align}
\begin{bmatrix}
c\overline{t}\  \\
\overline{x}
\end{bmatrix} & =\frac{1}{\sqrt{ 1-\beta_{v_{1}}^{2} }\sqrt{ 1-\beta_{v_{2}}^{2} }}\begin{bmatrix}
1+\beta_{v_{1}}\beta_{v_{2}} & -\beta_{v_{1}}-\beta_{v_{2}} \\
-\beta_{v_{2}}-\beta_{v_{1}}  & 1+\beta_{v_{1}}\beta_{v_{2}}
\end{bmatrix}\begin{bmatrix}
ct \\
x
\end{bmatrix} \\
 & = \frac{1}{\sqrt{ 1-\beta^{2} }}\begin{bmatrix}
1  & -\beta \\
-\beta  &  1
\end{bmatrix}\begin{bmatrix}
ct \\
x
\end{bmatrix} 
\end{align}
$$
where  
$$
\beta= \frac{{\beta_{v_{1}}+\beta_{v_{2}}}}{1+\beta_{v_{1}}\beta_{v_{2}}}.
$$
On substituting the values for $\beta_{v_{1}}$ and $\beta_{v_{2}}$ and equating to $v/c$, we get
$$
\begin{align}
\frac{v}{c}=\frac{{\frac{v_{1}}{c}+\frac{v_{2}}{c}}}{1+\frac{v_{1}v_{2}}{c^{2}}} \\
\implies v=\frac{{v_{1}+v_{2}}}{1+v_{1}v_{2}/c^{2}}
\end{align}
$$

---


