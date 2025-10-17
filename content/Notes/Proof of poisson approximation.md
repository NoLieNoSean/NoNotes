---
draft: true
id: "267"
---


Let’s rigorously prove that if \(\lim_{n \to \infty} n p_n = \lambda\), where \(\lambda\) is a positive constant, then the binomial probability converges to the Poisson probability:

\[
\lim_{n \to \infty} \binom{n}{k} p_n^k (1 - p_n)^{n - k} = \frac{\lambda^k}{k!} e^{-\lambda},
\]

where \(k\) is a fixed non-negative integer, and we assume \(0 \leq p_n \leq 1\) since \(p_n\) represents a probability in the binomial distribution.

### Step 1: Understanding the Problem

The expression \(\binom{n}{k} p_n^k (1 - p_n)^{n - k}\) is the probability of exactly \(k\) successes in \(n\) independent Bernoulli trials, each with success probability \(p_n\). The target expression, \(\frac{\lambda^k}{k!} e^{-\lambda}\), is the probability mass function of a Poisson random variable with parameter \(\lambda\). The given condition, \(\lim_{n \to \infty} n p_n = \lambda\), suggests that as \(n\) becomes large, \(p_n\) approaches 0 (since \(\lambda\) is finite), but the expected number of successes, \(n p_n\), stabilizes at \(\lambda\). This is the classic setup for the Poisson limit theorem, which we will prove step-by-step by analyzing the limit of the binomial term.

### Step 2: Rewrite the Expression

Start with the binomial probability:

\[
\binom{n}{k} p_n^k (1 - p_n)^{n - k},
\]

where the binomial coefficient is:

\[
\binom{n}{k} = \frac{n!}{k! (n - k)!} = \frac{n (n - 1) \cdots (n - k + 1)}{k!},
\]

since there are \(k\) terms in the numerator: \(n, n-1, \ldots, n - k + 1\). Thus, the expression becomes:

\[
\binom{n}{k} p_n^k (1 - p_n)^{n - k} = \frac{n (n - 1) \cdots (n - k + 1)}{k!} p_n^k (1 - p_n)^{n - k}.
\]

Our goal is to evaluate the limit of this product as \(n \to \infty\), using the condition \(n p_n \to \lambda\).

### Step 3: Analyze the Components

Since the expression is a product, we can consider the limits of its parts, provided each part converges and the number of factors is finite (here, determined by fixed \(k\)). Let’s break it into two main components:

1. **The term involving the successes**: \(\binom{n}{k} p_n^k\),
2. **The term involving the failures**: \((1 - p_n)^{n - k}\).

We will compute the limit of each part separately and then combine them, justifying the use of the product rule for limits.

#### Part 1: Limit of \(\binom{n}{k} p_n^k\)

Rewrite:

\[
\binom{n}{k} p_n^k = \frac{n (n - 1) \cdots (n - k + 1)}{k!} p_n^k.
\]

Notice that there are exactly \(k\) factors in the numerator. Since \(n p_n \to \lambda\), we can express \(p_n\) as:

\[
p_n = \frac{n p_n}{n},
\]

so:

\[
p_n^k = \left( \frac{n p_n}{n} \right)^k = \frac{(n p_n)^k}{n^k}.
\]

Substitute into the expression:

\[
\binom{n}{k} p_n^k = \frac{n (n - 1) \cdots (n - k + 1)}{k!} \cdot \frac{(n p_n)^k}{n^k}.
\]

Now, rewrite the numerator relative to \(n^k\):

\[
n (n - 1) \cdots (n - k + 1) = n^k \cdot \frac{n}{n} \cdot \frac{n - 1}{n} \cdots \frac{n - k + 1}{n} = n^k \cdot \prod_{j=0}^{k-1} \left( 1 - \frac{j}{n} \right),
\]

where the product has \(k\) terms (from \(j = 0\) to \(j = k - 1\)):

- \(j = 0\): \(1 - \frac{0}{n} = 1\),
- \(j = 1\): \(1 - \frac{1}{n}\),
- ...
- \(j = k - 1\): \(1 - \frac{k - 1}{n}\).

Thus:

\[
\binom{n}{k} p_n^k = \frac{n^k}{k!} \cdot \prod_{j=0}^{k-1} \left( 1 - \frac{j}{n} \right) \cdot \frac{(n p_n)^k}{n^k} = \frac{(n p_n)^k}{k!} \cdot \prod_{j=0}^{k-1} \left( 1 - \frac{j}{n} \right).
\]

- **Limit of \(n p_n\)**: Given \(\lim_{n \to \infty} n p_n = \lambda\), so \((n p_n)^k \to \lambda^k\), because the function \(x \mapsto x^k\) is continuous and \(k\) is fixed.

- **Limit of the product**: For each \(j = 0, 1, \ldots, k - 1\), since \(j\) is fixed and \(n \to \infty\),

\[
1 - \frac{j}{n} \to 1,
\]

because \(\frac{j}{n} \to 0\). There are \(k\) terms in the product, and \(k\) is finite. For a finite product of terms where each factor converges, the product converges to the product of the limits (by the limit theorem for products):

\[
\prod_{j=0}^{k-1} \left( 1 - \frac{j}{n} \right) \to \prod_{j=0}^{k-1} 1 = 1.
\]

- **Combined limit**: Since both factors converge,

\[
\binom{n}{k} p_n^k = \frac{(n p_n)^k}{k!} \cdot \prod_{j=0}^{k-1} \left( 1 - \frac{j}{n} \right) \to \frac{\lambda^k}{k!} \cdot 1 = \frac{\lambda^k}{k!}.
\]

To ensure rigor, note that \(n - k + 1 > 0\) for sufficiently large \(n\) since \(k\) is fixed, and \(p_n \geq 0\), so the expression is non-negative and well-defined.

#### Alternative Approach for Part 1:

Consider the product directly:

\[
\binom{n}{k} p_n^k = \frac{1}{k!} \cdot n p_n \cdot (n - 1) p_n \cdots (n - k + 1) p_n.
\]

For each \(j = 0, 1, \ldots, k - 1\),

\[
(n - j) p_n = n p_n \cdot \left( 1 - \frac{j}{n} \right).
\]

- \(n p_n \to \lambda\),
- \(\frac{j}{n} \to 0\), so \(1 - \frac{j}{n} \to 1\),
- Thus, \((n - j) p_n \to \lambda \cdot 1 = \lambda\).

With \(k\) factors, each converging to \(\lambda\),

\[
\prod_{j=0}^{k-1} (n - j) p_n \to \prod_{j=0}^{k-1} \lambda = \lambda^k,
\]

so:

\[
\binom{n}{k} p_n^k = \frac{1}{k!} \cdot \prod_{j=0}^{k-1} (n - j) p_n \to \frac{1}{k!} \cdot \lambda^k = \frac{\lambda^k}{k!}.
\]

This confirms our result consistently.

#### Part 2: Limit of \((1 - p_n)^{n - k}\)

Since \(k\) is fixed, analyze:

\[
(1 - p_n)^{n - k} = e^{(n - k) \ln (1 - p_n)}.
\]

We need \((n - k) \ln (1 - p_n) \to -\lambda\).

- **Behavior of \(p_n\)**: Since \(n p_n \to \lambda\), and \(\lambda > 0\), for large \(n\), \(p_n \approx \frac{\lambda}{n} \to 0\). Moreover, \(0 \leq p_n \leq 1\) (as a probability), and since \(n p_n\) is bounded, \(p_n \to 0\). For \(p_n < 1\), \(\ln (1 - p_n)\) is defined and negative.

- **Taylor expansion**: For small \(x\), \(\ln (1 - x) = -x - \frac{x^2}{2} - \frac{x^3}{3} - \cdots\), valid for \(0 < x < 1\). So:

\[
\ln (1 - p_n) = - p_n - \frac{p_n^2}{2} - \frac{p_n^3}{3} - \cdots.
\]

- **Exponent**:

\[
(n - k) \ln (1 - p_n) = (n - k) \left( - p_n - \frac{p_n^2}{2} - \cdots \right) = - (n - k) p_n - (n - k) \cdot \frac{p_n^2}{2} - \cdots.
\]

- **First term**: \((n - k) p_n = n p_n \cdot \left( 1 - \frac{k}{n} \right)\). Since \(n p_n \to \lambda\) and \(\frac{k}{n} \to 0\), \((n - k) p_n \to \lambda \cdot 1 = \lambda\).

- **Error terms**: Consider \(n p_n^2 = p_n \cdot (n p_n)\). Since \(n p_n \to \lambda\) and \(p_n \to 0\), \(n p_n^2 \to 0 \cdot \lambda = 0\). Then, \((n - k) p_n^2 = n p_n^2 \cdot \left( 1 - \frac{k}{n} \right) \to 0 \cdot 1 = 0\). Higher-order terms like \(n p_n^3\) vanish faster since \(p_n^3 = p_n \cdot p_n^2\).

- **Total**: \((n - k) \ln (1 - p_n) = - (n - k) p_n + o(1) \to -\lambda\).

Thus:

\[
(1 - p_n)^{n - k} \to e^{-\lambda}.
\]

For \(p_n = 1\) finitely often, adjust \(n\) to start beyond such points; typically, \(p_n < 1\) for large \(n\) since \(p_n \to 0\).

### Step 4: Combine the Limits

Since:

- \(\binom{n}{k} p_n^k \to \frac{\lambda^k}{k!}\),
- \((1 - p_n)^{n - k} \to e^{-\lambda}\),

and both are continuous functions of \(n\), the product converges:

\[
\binom{n}{k} p_n^k (1 - p_n)^{n - k} \to \frac{\lambda^k}{k!} \cdot e^{-\lambda}.
\]

### Step 5: Verification

- **\(k = 0\)**: \(\binom{n}{0} p_n^0 (1 - p_n)^n = (1 - p_n)^n \to e^{-\lambda} = \frac{\lambda^0}{0!} e^{-\lambda}\).
- **\(k = 1\)**: \(\binom{n}{1} p_n (1 - p_n)^{n - 1} = n p_n (1 - p_n)^{n - 1} \to \lambda \cdot e^{-\lambda}\).

The result holds for all fixed \(k\).

### Conclusion

Thus, we have rigorously shown:

\[
\lim_{n \to \infty} \binom{n}{k} p_n^k (1 - p_n)^{n - k} = \frac{\lambda^k}{k!} e^{-\lambda}.
\]