See @kozenAutomataComputability1997 lectures 19, 20

CNF and GNF cannot generate $\epsilon$. 
- Replace single letters with non-terminals
- Remove $\epsilon$
- Remove unit productions.
- Remove productions of length greater than $2$.k



> [!Theorem] Pumping lemma for CFLs, @hopcroftIntroductionAutomataTheory2007 7.18
> Let $L$ be a CFL. Then there exists a constant $n$ such that if $z$ is any string in $L$ such that $|z|$ is at least $n$, then we can write $z=uvwxy$, subject to the following conditions:
> 1. $|vwx|\leq n$.
> 2. $vx\ne \epsilon$.
> 3. For all $i\geq 0$, $uv^{i}wx^{i}y\in L$.