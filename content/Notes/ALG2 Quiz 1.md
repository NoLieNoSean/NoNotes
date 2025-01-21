Suppose $\mathbb{F}$ is a infinite field. Let $V$ be a vector space over $\mathbb{F}$. Show that $V$ cannot be written as a union of finitely many proper subspace. Does the same statement hold if $\mathbb{F}$ is a finite field?

### When F is an infinite field

FTSOC, Let $V=\bigcup_{i=1}^{n} V_{i}$, where $V_{i}$ are proper subspaces of $V$. Pick a non-zero vector $\mathbf{x}\in V_{1}$. Pick another non zero vector $\mathbf{y}\in V-V_{1}$. Note that there are infinite vectors of the form $\mathbf{x}+\alpha \mathbf{y}$, $\alpha\in \mathbb{F}\setminus \{ 0 \}$, and none of them are in $V_{1}$. Thus, some $V_{j}$, $2\leq j\leq n$, must contain an infinite number of these vectors. $V_{j}$ must thus contain $\mathbf{y}$, and thus must contain $\mathbf{x}$. Since $\mathbf{x}$ was arbitrary to begin with, we have shown that every $\mathbf{x}\in V_{1}$ can be found in $\bigcup_{i=2}^{n}V_{i}$, i.e, $V=\bigcup_{i=2}^{n}V_{i}$. We can proceed inductively to reach $V=V_{n}$, which is impossible since $V_{n}$ is a proper subspace of $V$. Thus, $V$ cannot be a finite union of proper subspaces. 

### When F is a finite field

A finite dimensional vector space over a finite field has a finite number of elements. Suppose the field  $\mathbb{F}$  is finite, with  |$\mathbb{F}$| = $q$ , where  $q$  is the number of elements in the field. Let  $V$  be a vector space over  $\mathbb{F}$  with dimension  $n$ . This means that  $V$  has a basis consisting of  $n$  linearly independent vectors. Each element of  $V$  is a linear combination of the basis vectors. Specifically, if  $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n\}$  is a basis for  $V$, then every element of  $V$  can be written uniquely as:
$$
a_1 \mathbf{v}_1 + a_2 \mathbf{v}_2 + \cdots + a_n \mathbf{v}_n

$$
  

where  $a_1, a_2, \ldots, a_n \in \mathbb{F}$.

Since  $\mathbb{F}$  has  $q$  elements, each coefficient  $a_{i}$  in the linear combination has  $q$  possible values. Therefore, the total number of elements in  $V$  is $|V| = q^n$.

Thus, it is easy to see that $V$ can be expressed as a finite union of proper subspaces. 