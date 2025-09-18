---
tags: 
date: "2025-09-17"
time: "09:28"
---

CFLs are closed under unions, concatenation, and kleene star, homo, inv homo, CF subs. Not closed under intersection and complement.

Write a grammar for $\{ a^{n}b^{n}c^{n} \}^{c}$. 

$$
\begin{align}
\{ a^{*}b^{*}c^{*} \}^{c}\cup \{ a^{n_{1}}b^{n_{2}}c^{n_{3}}\ | \  n_{1}\ne n_{2} \}\cup \{ a^{n_{1}}b^{n_{2}}c^{n_{3}}\ | \  n_{2}\ne n_{3} \}\cup \{ a^{n_{1}}b^{n_{2}}c^{n_{3}}\ | \  n_{3}\ne n_{1} \}
\end{align}
$$

You can further split $\{ a^{n_{1}}b^{n_{2}}c^{n_{3}}\ | \  n_{1}\ne n_{2} \}$  as $\{ a^{n_{1}}b^{n_{2}}c^{n_{3}}\ | \  n_{1}< n_{2} \}\cup \{ a^{n_{1}}b^{n_{2}}c^{n_{3}}\ | \  n_{1}> n_{2} \}$. 