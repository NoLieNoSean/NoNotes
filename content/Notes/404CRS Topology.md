---
id: "368"
date: 2025-12-14
time: 14:57
tags:
  - MOC
  - TOP
---
CMI, Jan-Apr 2026, Upendra Kulkarni
@munkresTopology2000



```latex
% latex-id: 6793-0425-42c9-4f85-845d
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[x=1cm,y=1cm]
  % ---------- Parameters ----------
  \def\n{30}                % number of rectangles 
  \def\rectw{0.6}           % parent rectangle width (in cm)
  \def\recth{4.0}           % parent rectangle height (in cm)
  \def\gap{0.12}            % horizontal gap between parents (in cm)
  % ---------- Data ----------
  % Format: index/bottomFraction/topFraction/x_{\alpha}
  % Fractions are between 0 and 1 measured relative to parent height.
  \foreach [evaluate=\i as \x using {(\i-1)*(\rectw+\gap)}] \i/\b/\t/\d in {
    1/0/1/0.35, 2/0/1/0.3, 3/0/1/0.45, 4/0/0.9/0.5, 5/0.05/1/0.6,
    6/0.13/0.8/0.67, 7/0.34/0.85/0.7, 8/0.56/0.8/0.65, 9/0.27/0.71/0.6, 10/0.3/0.77/0.55,
    11/0.15/0.6/0.5, 12/0.37/0.65/0.45, 13/0.2/0.45/0.35, 14/0.32/1/0.42, 15/0.29/0.66/0.45,
    16/0.31/0.78/0.46876, 17/0/1/0.5, 18/0/1/0.5, 19/0.1/1/0.43, 20/0.21/0.47/0.34,
    21/0.16/1/0.48098, 22/0/1/0.6, 23/0/1/0.62, 24/0/1/0.7, 25/0/1/0.64,
    26/0/1/0.55, 27/0/1/0.7, 28/0/1/0.6, 29/0/1/0.5, 30/0/1/0.45
  }{
    % Draw parent rectangle
    \draw[draw opacity={0.5*min(1, -\i/10+3)}] (\x,0) rectangle ++(\rectw,\recth);

    % Compute absolute y-coordinates for the subrectangle
    \pgfmathsetmacro{\yb}{\b*\recth}
    \pgfmathsetmacro{\yt}{\t*\recth}
    \pgfmathsetmacro{\yd}{\d*\recth}
    
    % Draw inner yellow subrectangle 
    \fill[blue, fill opacity={0.5*min(1, -\i/10+3)}] (\x,\yb) rectangle ++(\rectw,{\yt-\yb});

 .  % Draw inner red subrectangle 
    \fill[red, fill opacity={1*min(1, -\i/10+3)}] (\x,\yd-0.02*\i) rectangle ++(\rectw,{0.04*\i});
    % \node[font=\scriptsize, below] at ({\x+\rectw/2}, -0.12) {$U_{\i}$};
  }

  % bounding box or axis line
  % \draw[dashed] (-0.1,0) -- ({\n*(\rectw+\gap)-\gap+0.1},0);
\end{tikzpicture}
Exhibit B: The product topology on $\mathbb{R}^{\mathbb{N}}$ is metrizable
\end{document}
```
---

[[Preliminaries to Topology]] 
[[Countability and Separation Axioms]]
[[Compactness]]
[[Urysohn Lemma and Applications]]
[[Stone-Čech Compactification]]
[[The Quotient Topology]] 
[[Covering Spaces and the Fundamental Group]] 
[[Retractions and Fixed Points]]
[[Deformation Retracts and Homotopy Type]]
[[The Fundamental Groups of Some Surfaces]]
[[The Seifert-Van Kampen theorem]]

[[AS TOP 1]]
