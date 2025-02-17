Grading:
- 3 quizzes, 15
- Midsem, 35
- Endsem, 40
- class assignment, 10

References:
- Mathematical Analysis, TM Apostle
# Lecture notes

- [[CAL1_L1]] ✅
	- The p-norm
- [[CAL1_L2]] ✅
	- Equivalence of p-norms
- [[CAL1_L3]] ✅
	- Equivalence of all norms on a finite dimensional normed linear space
- [[CAL1_L4]] ✅
	- Example of complete normed linear space, inner product spaces (mostly stuff covered in ALG1)
- [[CAL1_L5]] ✅
	- Examples of finding limits in $\mathbb{R}^{2}$
- [[CAL1_L6]] ✅
	- Absolutely nothing.
- [[CAL1_L7]]
	- Lindelöf's covering theorem
- [[CAL1_L8]]
	- Separable metric spaces, Cantor intersection theorem, contraction maps, Fixed point theorem
- [[CAL1_L9]]
	- Totally bounded sets and their relation to completeness, compactness, and sequential compactness
- [[CAL1_L10]]
	- Converse of the extreme value theorem, Lebesgue covering theorem
- [[CAL1_L11]]
	- Constructing the completion of a metric space.
- [[CAL1_L12]]
	- Baire Category theorem, differentiation.


Constructing the completion of a metric space

suppose $(x_{n})$ and $(y_{n})$ are two Cauchy sequences in $X$. Then, $(d(x_{n}, y_{n}))$ is a Cauchy sequence (easy proof). 
Step 1: Let $(x_{n})$ and $(y_{n})$ be CS in $X$. Define $d'((x_{n}), (y_{n}))=\lim_{ n \to \infty }d(x_{n}, y_{n})$. It is easy to see that
- $d'\geq 0$, and $(x_{n})=(y_{n})$ implies ...
- $d'$ is symmetric
- triangle inequality holds

However, $f'((x_{n}), (y_{n}))=0$ may not imply $(x_{n})=(y_{n})$.

Step 2: We define an equivalence class of CS in $X$, and call it $\tilde{X}$. We say $(x_{n})\sim(y_{n})$ if $d'((x_{n}), (y_{n}))=0$. Let $\tilde{X}$ be the set of equivalence classes of CS. Define $\tilde{d}([(x_{n})], [(y_{n})])=d'((x_{n}), (y_{n}))$.

note that $\tilde{d}$ is well defined.


Step 3: $(\tilde{X}, \tilde{d})$ is complete.
Consider a CS in $\tilde{X}$: $([(x_{n, 1})], [(x_{n, 2})], \dots)$. By passing to a subsequence if necessary, we can assume that each $(x_{n, i})$ has the following property:
$$
d(x_{n, i}, d_{n+1, i})< \frac{1}{2^{n}}
$$
for all $n$. From this, you can prove that.



---

to-do:
- [ ] Apostol, MA, C3, 4
- [ ] Fitzpat, C9, 10
- [ ] Rudin, C7, 8
- [ ] Apostol, CV2, C8

