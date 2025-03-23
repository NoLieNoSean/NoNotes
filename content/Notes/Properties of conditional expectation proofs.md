---
draft: true
---


Below is a table summarizing the expectation (mean) and variance expressions for the binomial, negative binomial, Poisson, geometric, and hypergeometric distributions. These are all discrete random variables, and I’ll define each distribution’s parameters clearly to avoid ambiguity. All expressions are derived from standard probability theory definitions, assuming discrete random variables with finite or countably infinite support.

| **Distribution**       | **Parameters**                          | **Expectation (\( \mathbb{E}(X) \))** | **Variance (\( \text{Var}(X) \))**       |
|-------------------------|-----------------------------------------|---------------------------------------|------------------------------------------|
| **Binomial**           | \( n \) (trials), \( p \) (success prob.) | \( np \)                             | \( np(1-p) \)                           |
| **Negative Binomial**  | \( r \) (successes), \( p \) (success prob.) | \( \frac{r(1-p)}{p} \)              | \( \frac{r(1-p)}{p^2} \)                |
| **Poisson**            | \( \lambda \) (rate)                    | \( \lambda \)                        | \( \lambda \)                           |
| **Geometric**          | \( p \) (success prob.)                 | \( \frac{1-p}{p} \)                  | \( \frac{1-p}{p^2} \)                   |
| **Hypergeometric**     | \( N \) (population), \( K \) (successes), \( n \) (draws) | \( n \frac{K}{N} \)         | \( n \frac{K}{N} \frac{N-K}{N} \frac{N-n}{N-1} \) |

### Notes on Definitions and Derivations

1. **Binomial (\( X \sim \text{Binomial}(n, p) \))**:
   - \( X \): Number of successes in \( n \) independent trials, each with success probability \( p \).
   - \( \mathbb{E}(X) = np \): Sum of \( n \) Bernoulli means (\( p \) each).
   - \( \text{Var}(X) = np(1-p) \): Sum of \( n \) independent Bernoulli variances (\( p(1-p) \) each).

2. **Negative Binomial (\( X \sim \text{NB}(r, p) \))**:
   - \( X \): Number of failures until the \( r \)-th success, where each trial has success probability \( p \).
   - \( \mathbb{E}(X) = \frac{r(1-p)}{p} \): \( X \) is the sum of \( r \) independent geometric random variables (failures before each success), each with mean \( \frac{1-p}{p} \).
   - \( \text{Var}(X) = \frac{r(1-p)}{p^2} \): Variance of \( r \) independent geometric variables, each with variance \( \frac{1-p}{p^2} \).

3. **Poisson (\( X \sim \text{Poisson}(\lambda) \))**:
   - \( X \): Number of events in a fixed interval, with average rate \( \lambda \).
   - \( \mathbb{E}(X) = \lambda \): Direct from the definition of the Poisson mean.
   - \( \text{Var}(X) = \lambda \): For Poisson, variance equals the mean, verifiable via moment-generating function or direct computation.

4. **Geometric (\( X \sim \text{Geometric}(p) \))**:
   - \( X \): Number of failures before the first success, with success probability \( p \) per trial.
   - \( \mathbb{E}(X) = \frac{1-p}{p} \): Sum of probabilities \( \sum_{k=0}^\infty k p (1-p)^k \), computed using the geometric series derivative.
   - \( \text{Var}(X) = \frac{1-p}{p^2} \): From \( \mathbb{E}(X^2) = \frac{1-p}{p^2} + \frac{1-p}{p} \), then \( \text{Var}(X) = \mathbb{E}(X^2) - [\mathbb{E}(X)]^2 \).
   - *Note*: Some define geometric as trials until success (including the success), shifting the mean and variance; here, we use failures before success.

5. **Hypergeometric (\( X \sim \text{Hypergeometric}(N, K, n) \))**:
   - \( X \): Number of successes in \( n \) draws without replacement from a population of \( N \) items, \( K \) of which are successes.
   - \( \mathbb{E}(X) = n \frac{K}{N} \): Expected proportion of successes \( \frac{K}{N} \) times number of draws \( n \).
   - \( \text{Var}(X) = n \frac{K}{N} \frac{N-K}{N} \frac{N-n}{N-1} \): Includes a finite population correction \( \frac{N-n}{N-1} \) due to dependence between draws.

### Assumptions
- All probabilities (\( p \)) are between 0 and 1.
- Parameters (\( n, r, N, K \)) are positive integers where applicable, with \( K \leq N \), \( n \leq N \).
- \( \lambda > 0 \) for Poisson.

This table provides a concise reference for these common discrete distributions, with expressions grounded in their probability mass functions and properties. Let me know if you’d like detailed derivations for any specific case!