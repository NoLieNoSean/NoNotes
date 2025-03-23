## More properties of the probability function

$P(A\cup B)=P(A)+P(B)-P(A\cap B)$.
**Proof:** $A\cup B=A\sqcup(B\setminus A)=A\sqcup(B\setminus(A\cap B))$.

>[!Theorem] The inclusion-exclusion principle
> Let $A_{1}, A_{2}, \dots, A_{n}\in \mathcal{F}$ for some $(\Omega, \mathcal{F}, P)$. Define
> $$
> S_{1}=\sum_{i=1}^{n} P(A_{i})
> $$
> $$
> S_{2}=\sum_{1\leq i< j\leq n} P(A_{i}\cap A_{j}) 
> $$
> $$
> S_{3}=\sum_{1\leq i<j<k\leq n}P(A_{i}\cap A_{j}\cap A_{k})
> $$
> $$
> \vdots
> $$
> Then,
> $$
> P\left( \bigcup_{i=1}^{n} A_{i} \right)=S_{1}-S_{2}+S_{3}-\dots+(-1)^{n+1}S_{n}
> $$

Proof by induction (assignment).

>[!Theorem] Sub-additivity
> $$
> P\left(\bigcup_{i=1}^{n}A_{i}\right)\leq \sum_{i=1}^{n} P(A_{i})=S_{1}.
> $$

> **Proof**
> Define $B_{1}=A_{1}$, $B_{2}=A_{2}\setminus B_{1}$, $B_{3}=A_{3}\setminus(B_{1}\sqcup B_{2})$, $B_{i}=A_{i}\setminus\bigsqcup_{j=1}^{i-1}B_{j}$.
> and note that $\bigcup_{i=1}^{n}A_{i}=\bigsqcup_{i=1}^{n}B_{i}$. Now, 
> $$
> P\left( \bigcup_{i=1}^{n}A_{i} \right)=P\left( \bigsqcup_{i=1}^{n}B_{i} \right)=\sum_{i=1}^{n} P(B_{i})\leq \sum_{i=1}^{n} P(A_{i}).
> $$
> 

> [!Theorem] More sub-additivity
> $$
> P\left(\bigcup_{i=1}^{n}A_{i}\right)\geq S_{1}-S_{2}.
> $$

> **Proof**
> Consider the $B_{i}$s defined in the previous proof.
> 
> $$
> \begin{align}
> P(A_{i}) & =P(B_{i}\sqcup(A_{i}\setminus B_{i})) \\
>  & =P(B_{i})+P(A_{i}\setminus B_{i}) \\
> 	 & \leq P(B_{i})+P\left( \bigcup_{j\ne i} (A_{i}\cap A_{j}) \right) \\
>  & \leq P(B_{i})+\sum_{j\ne i}P(A_{i}\cap A_{j}) \\ \\
> 
>  \implies   & P(B_{i})\geq P(A_{i})-\sum_{j\ne i}P(A_{i}\cap A_{j}) 
> \end{align}
> $$
> Summing both sides from $i=1$ to $n$ yields the property.

---
## Conditional probability

We will consider events to be subsets of the sample space from now.

> [!Definition] Conditional probability
> Let $A, B\subset \Omega$. The *conditional probability of $A$ given $B$* is
> $$
> P(A/B)=\frac{P(A\cap B)}{P(B)}.
> $$

Notes:
- $P(A\cap B)=P(A)P(B/A)=P(B)P(A/B)$.
- $P(C)=P(C/A)P(A)+P(C/A^{c})P(A^{c})$. 
- If $A_{1}, A_{2}, \dots, A_{n}$ are disjoint and cover $\Omega$, $P(C)=\sum_{i=1}^{n}P(C/A_{i})P(A_{i})$.
  Also, $P(A_{i}/C)=\frac{P(C/A_{i})P(A_{i})}{\sum_{j=1}^{n}P(C/A_{j})P(A_{j})}$. <- Bayes' Formula

### Example: Polya's Urn scheme

An urn contains $r$ red balls and $b$ blue balls. One ball is selected at random and $c$ balls of the same color are added into the urn. What is the probability of drawing a red ball in the second draw?

$$
\begin{align}
P(R_{2}) & =P(R_{2}/R_{1})P(R_{1})+P(R_{2}/B_{1})P(B_{1}) \\
	 & =\left( \frac{r+c}{r+b+c} \right)\left( \frac{r}{r+b} \right)+\left( \frac{r}{r+b+c} \right)\left( \frac{b}{r+b} \right) \\
	 & = \frac{r}{r+b} 

\end{align}
$$
You can [[2023Probnotes13.pdf#page=22|prove]] that $P(R_{n})=\frac{r}{r+b}$ using induction.