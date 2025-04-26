> [!Question]
> If $aH=bH$, show that $aHa^{-1}=bHb ^{-1}$.
> 

If $aH=bH$, then $b ^{-1}a\in H$. Now, 
$$
H=Hb ^{-1}a\implies Ha^{-1}=Hb ^{-1}\implies aHa^{-1}=aHb ^{-1}\implies aHa^{-1}=bHb ^{-1}.
$$

> [!Question]
> If $H\leq G$ and $K\triangleleft G$, show that $H\cap K\triangleleft H$.

Consider $g\in H\cap K$ and $h\in H$. Clearly, $hgh^{-1}\in H$. Also, $hgh^{-1}\in K$ since $K$ is normal in $G$. Thus, $hgh^{-1}\in H\cap K$. Since conjugation is an injective map, we have $h(H\cap K)h^{-1}=H\cap K$.

> [!Question]
> Show that if $H\leq S_{n}$ and $[S_{n}:H]=n$, then $H\cong S_{n-1}$. $n\geq 5$.

Let $S_{n}$ act on the set of cosets $S_{n}/H$ by left multiplication: $g(\sigma H)=g\sigma H$. This induces a homomorphism $\varphi:S_{n}\to S_{n}$.

$$
\begin{align}
\ker\varphi & =\{ g\in S_{n}\ | \  g(\sigma H)=\sigma H \text{ for all }\sigma H\}
 \\ &  =\{ g\in S_{n}\ | \  g\in\sigma H\sigma ^{-1}\text{ for all }\sigma H \} \\
 & =\bigcap_{\sigma H\in S_{n}/H}\sigma H\sigma ^{-1}
\end{align}
$$
Thus, $\ker\varphi\leq H$. 

Now, for $n\geq 5$, $A_{n}$ is [[ALG2_L12#Simplicity of An|simple]]. If $K$ is a normal subgroup of $S_{n}$ for $n\geq 5$, $K\cap A_{n}$ must be a normal subgroup of $A_{n}$, from the previous question. Thus, $K\cap A_{n}=\{ e \}$. If all non-identity elements of $K$ are odd, $K$ must have order $2$, since the product of two odd permutations is even. If $K$ does have order $2$, it cannot be normal, since for $n\geq 3$ the center of $S_{n}$ is trivial. Thus, the only possibility left is $K=\{ e \}$. Thus, the action is injective.

Now, restrict the group action $\varphi$ to $H$ (note that if $*$ is an action of $G$, then $*$ restricted to any subgroup of $G$ is also an action!). Note that $\varphi|_{H}$ remains injective. 

Now, observe that all $h\in H$ fix $1H$. Thus, $\{ 1H \}$ is an orbit. Thus, $H$ acts on $S_{n}/H\setminus \{ 1H \}$ by left multiplication (In general, if you remove an entire orbit from the group being acted upon, the action remains an action). Note that the action still remains injective, too. We get an induced homomorphism $\psi:H\to S_{n-1}$. Since $|H|=|S_{n-1}|=(n-1)!$, $H\cong S_{n-1}$.