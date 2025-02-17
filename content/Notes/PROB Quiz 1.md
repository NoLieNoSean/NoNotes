Vasudeva S N
[[Quiz 1 Probability Theory 2025.pdf]]

# Problem 1

Define the group operation to be symmetric difference.
# Problem 2
$(\Omega, \mathcal{F}, \mathbb{P})$ is a probability space such that $\mathbb{P}(A)\in \{ 0, 1 \}$ for all $A\in \mathcal{F}$. Let $X:\Omega\to \mathbb{R}$ be a random variable, not necessarily discrete. Prove that there exists $c\in \mathbb{R}$ such that $\mathbb{P}(X=c)=1$.

Let $G=\{ g_{n}=\{ X\in[n, n+1) \}\in \mathcal{F}\ | \ n\in \mathbb{Z}\}$. Note that $G$ is countable. Now, 
$$
\mathbb{P}(\Omega)=\mathbb{P}\left( \bigcup_{n\in \mathbb{Z}}g_{n} \right)=\sum_{n\in \mathbb{Z}}P(g_{n}).
$$
Since $\mathbb{P}(\Omega)=1$, it must be the case that $P(g_{n})=1$ for exactly one $n$. Consider the interval $i_{1}=[n, n+1]$. If $P\left( X=n+\frac{1}{2} \right)=1$, we are done. Else, either $P\left( X=\left[ n, n+\frac{1}{2} \right] \right)=1$ or $P\left( X=\left[ n+\frac{1}{2}, n+1 \right] \right)=1$. Repeat the steps on the interval whose probability is $1$. We will either get a point $c$ such that $P(X=c)=1$ and stop, or keep going and obtain a sequence of nested intervals $S=\{ i_{1}, i_{2}, \dots \}$. We know from the [[The real field#Nested interval property|nested interval property]] that their intersection will be a singleton, $c$. Also, if we consider the set $\{ \{ X\in i_{1} \}, \{ X\in i_{2} \}, \dots\}$ in $\Omega$, it forms a countable descending sequence. Let their intersection be $B$. [[PROB_L1#Properties of the probability function|We know]] that the probability of their intersection is the limit of their probabilities, which is $1$. Thus, $P(B)=1$. Clearly, $\{ X=c \}=B$, since if $b\not\in B$, $X(b)\ne c$, and there exists an interval in $S$ containing $c$ but not containing $X(b)$. Thus, $\mathbb{P}(X=c)=P(B)=1$.

# Problem 3
Let $(\Omega, \mathcal{A}, \mathbb{P})$ be a probability space. Let $\{ A_{n} \}$ be a sequence of events in $\mathcal{A}$. Note that
$$
\limsup _{ n \to \infty } A_{n}= \bigcap_{n=1}^{\infty}\left( \bigcup_{k=n}^{\infty} A_{k} \right),
$$
$$
\liminf_{ n \to \infty } A_{n}= \bigcup_{n=1}^{\infty}\left( \bigcap_{k=n}^{\infty}A_{k} \right).
$$
## Fatou's Lemma

Prove that
$$
\mathbb{P}(\liminf _{ n \to \infty } A_{n})\leq \liminf_{ n \to \infty } \mathbb{P}(A_{n})\leq \limsup _{ n \to \infty } \mathbb{P}(A_{n})\leq \mathbb{P}(\limsup_{ n \to \infty } A_{n}).
$$

$$
\mathbb{P}(\liminf _{ n \to \infty } A_{n})=\mathbb{P}\left( \bigcup_{n=1}^{\infty}\left( \bigcap_{k=n}^{\infty}A_{k} \right) \right)=\lim_{ n \to \infty } \mathbb{P}\left( \bigcap_{k=n}^{\infty}A_{k} \right)=\sup \{ \mathbb{P}(A_{n}\cap A_{n+1}\cap\dots)\ | \  n\in \mathbb{Z} \},
$$
%% where [[PROB_L1#Properties of the probability function|this]] property has been used. Results from [[LimSup and LimInf|here]] have also been used. %%
$$
\liminf_{ n \to \infty }\mathbb{P}(A_{n})=\lim_{ n \to \infty } \inf \{\mathbb{P}(A_{n}), \mathbb{P}(A_{n+1}), \dots\}=\sup \{ \inf \{\mathbb{P}(A_{n}), \mathbb{P}(A_{n+1}), \dots\}\ | \  n\in \mathbb{Z}\}
$$
Now, $\mathbb{P}(A_{n}\cap A_{n+1}\cap\dots)\leq \mathbb{P}(A_{k})$ for all $k\geq n$. Thus, it is a lower bound for $\{ \mathbb{P}(A_{n}), \mathbb{P}(A_{n+1}), \dots \}$ and hence must be less than or equal to its infimum. Thus, we have
$$
\mathbb{P}(A_{n}\cap A_{n+1}\cap\dots)\leq \inf \{ \mathbb{P}(A_{n}), \mathbb{P}(A_{n+1}), \dots \}.
$$
This holds for all $n$. Thus, it must be that $\sup \{ \mathbb{P}(A_{n}\cap A_{n+1}\cap\dots)\ | \  n\in \mathbb{Z} \}\leq\sup \{ \inf \{\mathbb{P}(A_{n}), \mathbb{P}(A_{n+1}), \dots\}\ | \  n\in \mathbb{Z}\}$.

Hence the first inequality holds.


The second inequality follows from the definition of lim inf and lim sup.

For the third inequality, we have
$$
\limsup _{ n \to \infty } \mathbb{P}(A_{n})=\inf  \{ \sup  \{\mathbb{P}(A_{n}), \mathbb{P}(A_{n+1}), \dots\}\ | \  n\in \mathbb{Z}\}
$$
$$
\mathbb{P}(\limsup_{ n \to \infty } A_{n})=\inf  \{ \mathbb{P}(A_{n}\cup A_{n+1}\cup\dots)\ | \  n\in \mathbb{Z} \},
$$
Since $\mathbb{P}(A_{n}\cup A_{n+1}\cup\dots)$ is an upper bound for $\{ \mathbb{P}(A_{n}), \mathbb{P}(A_{n+1}), \dots \}$, $\sup \{ \mathbb{P}(A_{n}), \mathbb{P}(A_{n+1}), \dots \}\leq \mathbb{P}(A_{n}\cup A_{n+1}\cup\dots)$. Thus, the fourth inequality holds.

## Borel-Cantelli lemma 

Say $\mathbb{P}(\lim\sup_{ n \to \infty }(B_{n}))=\inf  \{ \mathbb{P}(B_{n}\cup B_{n+1}\cup\dots)\ | \  n\in \mathbb{Z} \}$. We know that
$$
\mathbb{P}(B_{n}\cup B_{n+1}\cup\dots)\leq \mathbb{P}(B_{n})+\mathbb{P}(B_{n+1})+\dots<\infty
$$
So, $\inf  \{ \mathbb{P}(B_{n}\cup B_{n+1}\cup\dots)\ | \  n\in \mathbb{Z} \}\leq\inf  \{ \mathbb{P}(B_{n})+ \mathbb{P}(B_{n+1})+\dots)\ | \  n\in \mathbb{Z} \}$. Since $\lim_{ n \to \infty }(\mathbb{P}(B_{n})+\mathbb{P}(B_{n+1})+\dots)=0$, $\inf  \{ \mathbb{P}(B_{n})+ \mathbb{P}(B_{n+1})+\dots)\ | \  n\in \mathbb{Z} \}=0$.