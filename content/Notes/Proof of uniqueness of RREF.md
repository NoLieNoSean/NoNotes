Consider a $m\times n$ matrix $A$. Say, through some finite sequence of row operations, we obtain two RREFs of $A$.
$$
\begin{align}
E_{1}E_{2}\dots E_{a}A  & =R_{1} \\
E_{1}'E_{2}'\dots E_{b}'A  & =R_{2},
\end{align}
$$
where $R_{1}$ and $R_{2}$ are in reduced row echelon form. Since performing row operations does not change the solution set of a given system, we have $A\mathbf{x}=\mathbf{0}$, $R_{1}\mathbf{x}=\mathbf{0}$ and $R_{2}\mathbf{x}=\mathbf{0}$ must have the SAME solutions. We first consider the case when $R_{1}$ and $R_{2}$ have different pivot variables.

**Different positions of pivot columns**

Let $\mathbf{x}=(x_{1}, x_{2}, \dots x_{n})$. Let column $p$ be a pivot column in $R_{1}$, but not a pivot column in $R_{2}$. In other words, $x_{p}$ is a fixed variable in $R_{1}$, and a free variable in $R_{2}$. Note that free variables can be assigned any value without constraint, while pivot variables are determined (or "fixed") on fixing the free variables. Particularly, observe that since all entries to the left of a pivot variable are zero, a pivot variable's value is fixed when we assign values to all the free variables to the right of it.

Observe: If we set all free variables to the right of a pivot variable to 0, the pivot variable is forced to be 0. 

Consider the equation $R_{2}\mathbf{x}=\mathbf{0}$. Consider all the free variables $x_{i}$, $i\ge p$. Since these are free variables, we can set them to be anything we wish. So, set all $x_{i}$, $i>p$ to be $0$. Notice that by doing so, we also force all pivot variables to the right of $x_{p}$ to be zero. Set $x_{p}=\alpha$ for some non zero $\alpha$, which we can do since $x_{p}$ is a free variable in $R_{2}$. Thus, we have a solution where $x_{p}\ne 0$, and $x_{i}=0\ \forall i>p$ (the other variables can do whatever; we don't care). We will show that no solution of this form can satisfy $R_{1}\mathbf{x}=\mathbf{0}$. If all free variables to the right of $x_{p}$ are set to $0$ (which forces the fixed variables to be zero too), then $x_{p}$, being a pivot variable in $R_{1}$, is forced to be zero. Contradiction!

Hence, the positions of pivot columns must be the same.

**Different values of cells that appear after a pivot variable in a row**

Now that we have established that the positions of the pivot variables are the same in $R_{1}$ and $R_{2}$, the only difference than can exist between $R_{1}$ and $R_{2}$ is in the values of cells that occur to the right of the pivot in their respective rows, and are not in a pivot column. Such cells are boxed in this example: 
$$
\left[\begin{array}{cccccc}1&\boxed{2}&0&\boxed{0}&0&\boxed{1}\\0&0&1&\boxed{5}&0&\boxed{2}\\0&0&0&0&1&\boxed{3}\end{array}\right]
$$
Say such a cell, $R_{1_{r, s}}$ is different from $R_{2_{r, s}}$. Let the pivot variable for row $r$ be located in column $p$. In $R_{1}$, set $x_{s}$ to be 1, and all the other free variables to the right of the pivot to be 0. This forces $x_{p}$ to be $-R_{1_{r, s}}$. Do the same in $R_{2}$, forcing $x_{p}$ to be $-R_{2_{r, s}}$. Thus, $R_{1}\mathbf{x}=0$ and $R_{2}\mathbf{x}=0$ do not have the same solution set. Contradiction.

