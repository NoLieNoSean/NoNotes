> [!Lemma]
> Let $a$ and $b$ be integers with gcd $d$. Then, there exist integers $x$ and $y$ such that $ax+by=d$. Moreover, all integers of the type $an+bm$ are multiples of $d$. 
> 
> > [!Proof]-
> > Given any non-zero integers $a$ and $b$, let $S=\{ ax+by : x, y\in \mathbb{Z}, ax+by>0 \}$. $S$ has at least one element, since either $a$ or $-a$ is in $S$. Since $S$ is bounded below, $S$ must have a minimum element. Let $d$ be this minimum element. We have to show that $d$ divides $a$ and $b$, and that all common factors of $a$ and $b$ are $\leq d$. 
> > 
> > The euclidean division of $a$ by $d$ may be written as $a=qd+r$, where $0\leq r < d$. Since $d\in S$, $d$ can be written as a linear combination of $a$ and $b$, hence $r$ can be written as a linear combination of $a$ and $b$. Since $r$ cannot be in $S$ ($d$ is smallest element), $r$ is forced to be $0$. Thus, $d$ divides $a$, and similarly, $b$. 
> > 
> > Now consider a common factor $c$ of $a$ and $b$. We have
> > $$
> > \begin{align}
> > d  & = ua+vb \\
> >  & =uca'+vcb' \\
> >  & =c(ua'+vb')
> > \end{align}
> > $$
> > That is, $c$ is a divisor of $d$. Since $d>0$, we have $c\leq d$. 
> 
