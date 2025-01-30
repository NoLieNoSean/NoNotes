[[probsheet1.pdf|Problem sheet 1]].

# 1

The binary sequences in $\{ 0, 1 \}^{\mathbb{N}}$ can be represented as subsets of $\mathbb{N}$, with the nth bit deciding on whether $n$ is in the subset. 
## a

$\{ \{ 1 \}, \{ 1, 2 \}, \{ 1, 2, 3 \}, \dots \}$

## b

$\{ \{ 1 \}, \{ 2 \}, \{ 3 \} , \dots\}$

## c

Find an uncountable antichain in $\{ 0, 1 \}^{\mathbb{N}}$

Let $a$ represent $01$, and $b$ represent $10$. Let $A$ be the set of all sequences of $a$s and $b$s. Note that a bijection between $A$ and $\{ 0, 1 \}^{\mathbb{N}}$ exists, so $A$ is uncountable. Also, no two elements in $A$ are comparable.

## d

We know that $\mathbb{Q}$ is countable. Let $\phi:\mathbb{Q}\to \mathbb{N}$ be a bijection. We know that every real number is uniquely determined by a Dedekind cut in $\mathbb{Q}$. So, for $r\in \mathbb{R}$, define 
$$
\psi(r)=\{ \phi(q)\ |\ q<r \}.
$$
$\mathbb{R}$ is uncountable, and $\psi$ associates each $r\in \mathbb{R}$ with a unique subset of $\mathbb{N}$ such that $\psi(r)\subset \psi(r')$ whenever $r<r'$.

## e

