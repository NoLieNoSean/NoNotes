---
id: "395"
date: 2026-01-26
time: 13:08
tags:
  - DQN
---

# Problem 1.4


For uncoupled systems of the form $\mathbf{\dot{x}}=A\mathbf{x}$ where $A=\text{diag}\{ \lambda_{1}, \dots, \lambda_{n} \}$, the solution is obtained by solving each of the uncoupled equations separately:
$$
\mathbf{x}(t)=\begin{bmatrix}
e^{ \lambda_{1}t } & \dots & 0 \\
\vdots & \ddots & \vdots \\
0 & \dots & e^{ \lambda_{n} t}
\end{bmatrix}\mathbf{c}.
$$
Therefore, $\mathbf{x}(t)\to \mathbf{0}$ as $t\to \infty$ for all $\mathbf{c}\in \mathbb{R}^{n}$ when $\lambda_{i}< 0$ for all $i$. 

This solution is unique, since the solution $x_{i}(t)=e^{ \lambda_{i}t }c_{i}$ is unique for each equation in the system ($\frac{d}{dt}(x_{i}(t)e^{ \lambda_{i}t })$ is constant).

# Problem 1.1

## Part a

$$
\begin{align}
\mathbf{x}(t)=\begin{bmatrix}
e^{ t } & 0 \\
0 & e^{ t } 
\end{bmatrix}\begin{bmatrix}
c_{1} \\
c_{2}
\end{bmatrix}.
\end{align}
$$
$$
x_{2}=\frac{c_{2}}{c_{1}}x_{1}
$$

```latex
% latex-id: b422-0924-d4ae-4588-8547
\tikzset{
      myarrowtip/.tip={Straight Barb[length=4pt,width=6pt]},
      arrow data/.style={%
      decoration={%
         markings,
         mark=at position 0.3 with \arrow{myarrowtip},
         mark=at position 0.6 with \arrow{myarrowtip},
         },
         postaction=decorate
         }
      }%

\begin{document}

\begin{tikzpicture}
\begin{axis}[
 xmin=-20, xmax=20, ymin=-20, ymax=20, grid = both,
 axis lines=middle,
 axis line style={-Latex[round],thick},
 yticklabels={},xticklabels={},
 ylabel=$x_{2}$,
 xlabel=$x_{1}$,
 clip mode=individual, % so that $O$ node isn't clipped away,
 axis equal image
]

\addplot [arrow data, red] expression[domain=0:20, samples=100]{tan(30)*x};
\addplot [arrow data, red] expression[domain=0:20, samples=100]{tan(60)*x};

\addplot [arrow data, domain=0:20, samples=100, red] ({0}, {x});
\addplot [arrow data, domain=0:20, samples=100, red] ({0}, {-x});
\addplot [arrow data, domain=0:20, samples=100, red] ({x}, {0});
\addplot [arrow data, domain=0:20, samples=100, red] ({-x}, {0});


\addplot [arrow data, red] expression[domain=0:-20, samples=100]{tan(120)*x};
\addplot [arrow data, red] expression[domain=0:-20, samples=100]{tan(150)*x};
\addplot [arrow data, red] expression[domain=0:-20, samples=100]{tan(210)*x};
\addplot [arrow data, red] expression[domain=0:-20, samples=100]{tan(240)*x};
\addplot [arrow data, red] expression[domain=0:20, samples=100]{tan(300)*x};
\addplot [arrow data, red] expression[domain=0:20, samples=100]{tan(330)*x};

\end{axis}
\end{tikzpicture}
\end{document}
```

## Part b

$$
\begin{align}
\mathbf{x}(t)=\begin{bmatrix}
e^{ t } & 0 \\
0 & e^{ 2t } 
\end{bmatrix}\begin{bmatrix}
c_{1} \\
c_{2}
\end{bmatrix}.
\end{align}
$$
$$
x_{2}=\frac{c_{2}}{c_{1}^{2}}x_{1}^{2}
$$

```latex

% latex-id: b6ed-3cd4-226e-4085-a068
\tikzset{
      myarrowtip/.tip={Straight Barb[length=4pt,width=6pt]},
      arrow data/.style={%
      decoration={%
         markings,
         mark=at position 0.3 with \arrow{myarrowtip},
         mark=at position 0.6 with \arrow{myarrowtip},
         },
         postaction=decorate
         }
      }%

\begin{document}

\begin{tikzpicture}
\begin{axis}[
 xmin=-20, xmax=20, ymin=-20, ymax=20, grid = both,
 axis lines=middle,
 axis line style={-Latex[round],thick},
 yticklabels={},xticklabels={},
 ylabel=$x_{2}$,
 xlabel=$x_{1}$,
 clip =true, % so that $O$ node isn't clipped away
 clip mode=individual,
 enlargelimits=false,
 unbounded coords=discard,
 axis equal image
]

\addplot [arrow data, red] expression[domain=0:20, restrict y to domain=-20:20, samples=100]{x*x};
\addplot [arrow data, red] expression[domain=0:20, restrict y to domain=-20:20, samples=100]{0.2*x*x};
\addplot [arrow data, red] expression[domain=0:20, restrict y to domain=-20:20, samples=100]{0.05*x*x};

\addplot [arrow data, red] expression[domain=0:-20, restrict y to domain=-20:20, samples=100]{x*x};
\addplot [arrow data, red] expression[domain=0:-20, restrict y to domain=-20:20, samples=100]{0.2*x*x};
\addplot [arrow data, red] expression[domain=0:-20, restrict y to domain=-20:20, samples=100]{0.05*x*x};

\addplot [arrow data, red] expression[domain=0:20, restrict y to domain=-20:20, samples=100]{-x*x};
\addplot [arrow data, red] expression[domain=0:20, restrict y to domain=-20:20, samples=100]{-0.2*x*x};
\addplot [arrow data, red] expression[domain=0:20, restrict y to domain=-20:20, samples=100]{-0.05*x*x};

\addplot [arrow data, red] expression[domain=0:-20, restrict y to domain=-20:20, samples=100]{-x*x};
\addplot [arrow data, red] expression[domain=0:-20, restrict y to domain=-20:20, samples=100]{-0.2*x*x};
\addplot [arrow data, red] expression[domain=0:-20, restrict y to domain=-20:20, samples=100]{-0.05*x*x};

\end{axis}
\end{tikzpicture}
\end{document}
```

## Part c


$$
\begin{align}
\mathbf{x}(t)=\begin{bmatrix}
e^{ t } & 0 \\
0 & e^{ 3t } 
\end{bmatrix}\begin{bmatrix}
c_{1} \\
c_{2}
\end{bmatrix}.
\end{align}
$$
$$
x_{2}=\frac{c_{2}}{c_{1}^{3}}x_{1}^{3}
$$

```latex


% latex-id: dfa3-007b-112c-42bb-adf5
\tikzset{
      myarrowtip/.tip={Straight Barb[length=4pt,width=6pt]},
      arrow data/.style={%
      decoration={%
         markings,
         mark=at position 0.3 with \arrow{myarrowtip},
         mark=at position 0.6 with \arrow{myarrowtip},
         },
         postaction=decorate
         }
      }%

\begin{document}

\begin{tikzpicture}
\begin{axis}[
 xmin=-20, xmax=20, ymin=-20, ymax=20, grid = both,
 axis lines=middle,
 axis line style={-Latex[round],thick},
 yticklabels={},xticklabels={},
 ylabel=$x_{2}$,
 xlabel=$x_{1}$,
 clip =true, % so that $O$ node isn't clipped away
 clip mode=individual,
 enlargelimits=false,
 unbounded coords=discard,
 axis equal image
]

\addplot [arrow data, red] expression[domain=0:6, restrict y to domain=-20:20, samples=100]{x^3};
\addplot [arrow data, red] expression[domain=0:6, restrict y to domain=-20:20, samples=100]{0.1*x^3};
\addplot [arrow data, red] expression[domain=0:20, restrict y to domain=-20:20, samples=100]{0.01*x^3};

\addplot [arrow data, red] expression[domain=0:-6, restrict y to domain=-20:20, samples=100]{x^3};
\addplot [arrow data, red] expression[domain=0:-6, restrict y to domain=-20:20, samples=100]{0.1*x^3};
\addplot [arrow data, red] expression[domain=0:-20, restrict y to domain=-20:20, samples=100]{0.01*x^3};

\addplot [arrow data, red] expression[domain=0:6, restrict y to domain=-20:20, samples=100]{-x^3};
\addplot [arrow data, red] expression[domain=0:6, restrict y to domain=-20:20, samples=100]{-0.1*x^3};
\addplot [arrow data, red] expression[domain=0:20, restrict y to domain=-20:20, samples=100]{-0.01*x^3};

\addplot [arrow data, red] expression[domain=0:-6, restrict y to domain=-20:20, samples=100]{-x^3};
\addplot [arrow data, red] expression[domain=0:-6, restrict y to domain=-20:20, samples=100]{-0.1*x^3};
\addplot [arrow data, red] expression[domain=0:-20, restrict y to domain=-20:20, samples=100]{-0.01*x^3};


\end{axis}
\end{tikzpicture}
\end{document}
```

## Part d

The system yields the differential equation $\ddot{x}_{1}=-x_{1}$. Using an exponential ansatz of $x_{1}(t)=Ae^{ \alpha t }$, we see that $\alpha=\pm i$. Thus, a general solution has the form
$$
x_{1}(t)=Ae^{ it }+Be^{ -it }.
$$
For the solution to be real, $A$ and $B$ are forced to be conjugates. Let $A, B=c_{1}\pm ic_{2}$. Then, 
$$
\begin{align}
x_{1}(t) & = 2c_{1}\cos t-2c_{2}\sin t \\
 & =c_{1}\cos t+c_{2}\sin t,
\end{align}
$$
where $2c_{1}$ and $-2c_{2}$ have been renamed $c_{1}$ and $c_{2}$.

It follows that
$$
x_{2}(t)=-\dot{x}_{1}=c_{1}\sin t-c_{2}\cos t.
$$
Note that $x_{1}^{2}+x_{2}^{2}=c_{1}^{2}+c_{2}^{2}$ is constant for a given solution curve, making it a circle. 

```latex
% latex-id: f549-3cf6-e122-486f-8b40
\tikzset{
      myarrowtip/.tip={Straight Barb[length=4pt,width=6pt]},
      arrow data/.style={%
      decoration={%
         markings,
         mark=at position 0.15 with \arrow{myarrowtip},
         mark=at position 0.48 with \arrow{myarrowtip}, 
         mark=at position 0.81 with \arrow{myarrowtip},         
         },
         postaction=decorate
         }
      }%

\begin{document}

\begin{tikzpicture}
\begin{axis}[
 xmin=-20, xmax=20, ymin=-20, ymax=20, grid = both,
 axis lines=middle,
 axis line style={-Latex[round],thick},
 yticklabels={},xticklabels={},
 ylabel=$x_{2}$,
 xlabel=$x_{1}$,
 clip =true, % so that $O$ node isn't clipped away
 clip mode=individual,
 enlargelimits=false,
 unbounded coords=discard,
 axis equal image
]

\addplot [arrow data, domain=0:360, samples=100, red] ({5*cos(x)}, {5*sin(x)});
\addplot [arrow data, domain=0:360, samples=100, red] ({10*cos(x)}, {10*sin(x)});
\addplot [arrow data, domain=0:360, samples=100, red] ({15*cos(x)}, {15*sin(x)});


\end{axis}
\end{tikzpicture}
\end{document}
```

## Part e

On finding $x_{2}(t)=c_{2}e^{ -t }$, we obtain a first order linear differential equation
$$
\dot{x}_{1}+x_{1}-c_{2}e^{ -t }=0
$$
Applying the standard formula, we have $A(t)=\int_{0}^{t} 1 \, dt=t$ and
$$
\begin{align}
x_{1}(t) & = c_{1}e^{ -A(t)}+e^{ -A(t) }\int_{0}^{t} c_{2}e^{ -t }e^{ A(t) } \, dt  \\
 & =c_{1}e^{ -t}+e^{ -t}\int_{0}^{t} c_{2}\, dt  \\
 & =c_{1}e^{ -t}+c_{2}te^{ -t}.
\end{align}
$$
For $c_{2}> 0$,
$$
\frac{x_{1}}{x_{2}}+\ln x_{2}=\frac{c_{1}}{c_{2}}+\ln c_{2}
$$
is constant for a given solution curve. For $c_{2}< 0$, 
$$
\frac{x_{1}}{x_{2}}+\ln (-x_{2})=\frac{c_{1}}{c_{2}}+\ln (-c_{2})
$$
is constant. For $c_{2}=0$, the solution is parameterized by $(c_{1}e^{ -t }, 0)$. 

```latex

% latex-id: 9700-8a2c-9077-4e12-a700
\tikzset{
      myarrowtip/.tip={Straight Barb[length=3pt,width=3pt]},
      arrow data/.style={%
      decoration={%
         markings,
         mark=at position 0.15 with \arrow{myarrowtip},
         mark=at position 0.48 with \arrow{myarrowtip}, 
         mark=at position 0.81 with \arrow{myarrowtip},         
         },
         postaction=decorate
         }
      }%

\begin{document}

\begin{tikzpicture}
\begin{axis}[
 xmin=-20, xmax=20, ymin=-20, ymax=20, grid = both,
 axis lines=middle,
 axis line style={-Latex[round],thick},
 yticklabels={},xticklabels={},
 ylabel=$x_{2}$,
 xlabel=$x_{1}$,
 clip =true, % so that $O$ node isn't clipped away
 clip mode=individual,
 enlargelimits=false,
 unbounded coords=discard,
 axis equal image
]

\addplot [arrow data, domain=0:10, samples=100, red] ({20*e^(-x)+10*x*e^(-x)}, {10*e^(-x)});
\addplot [arrow data, domain=0:10, samples=100, red] ({10*e^(-x)+20*x*e^(-x)}, {20*e^(-x)});
\addplot [arrow data, domain=0:10, samples=100, red] ({-10*e^(-x)+20*x*e^(-x)}, {20*e^(-x)});
\addplot [arrow data, domain=0:10, samples=100, red] ({-20*e^(-x)+10*x*e^(-x)}, {10*e^(-x)});


\addplot [arrow data, domain=0:10, samples=100, red] ({20*e^(-x)-10*x*e^(-x)}, {-10*e^(-x)});
\addplot [arrow data, domain=0:10, samples=100, red] ({10*e^(-x)-20*x*e^(-x)}, {-20*e^(-x)});
\addplot [arrow data, domain=0:10, samples=100, red] ({-10*e^(-x)-20*x*e^(-x)}, {-20*e^(-x)});
\addplot [arrow data, domain=0:10, samples=100, red] ({-20*e^(-x)-10*x*e^(-x)}, {-10*e^(-x)});

\addplot [arrow data, domain=20:0, samples=100, red] ({x}, {0});
\addplot [arrow data, domain=20:0, samples=100, red] ({-x}, {0});



\end{axis}
\end{tikzpicture}
\end{document}
```

---

# Problem 1.2

## Part a

$$
\begin{align}
\mathbf{x}(t)=\begin{bmatrix}
e^{ t } & 0  & 0\\
0 & e^{ t }  & 0 \\
0 & 0 & e^{ t } 
\end{bmatrix}\begin{bmatrix}
c_{1} \\
c_{2} \\
c_{3}
\end{bmatrix}.
\end{align}
$$


```latex


% latex-id: 2f7c-5321-6735-4023-8799
\usepackage{pgfplots}
\pgfplotsset{compat=1.8}
\tikzset{
      myarrowtip/.tip={Straight Barb[length=3pt,width=3pt]},
      arrow data/.style={%
      decoration={%
         markings,
         mark=at position 0.15 with \arrow{myarrowtip},
         mark=at position 0.48 with \arrow{myarrowtip}, 
         mark=at position 0.81 with \arrow{myarrowtip},         
         },
         postaction=decorate
         }
      }%
\begin{document}
\begin{tikzpicture}
\begin{axis}[
  width=2*175pt,
  tick label style={font=\scriptsize},
  yticklabels={},xticklabels={}, zticklabels={}
  axis on top,
  axis lines=center,
  name=myplot,
  % axis equal image,
  enlargelimits=.1,
  ymin=-20, ymax=20, xmin=-20, xmax=20, zmin=-20, zmax=20,
  xlabel=$x_{1}$, ylabel=$x_{2}$, zlabel=$x_{3}$,
  every axis y label/.append style={at=(ticklabel* cs:0)}]
  
  
  \addplot3 [
        domain=0:5,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{1*x},
{2*x},
{3*x}
);

\addplot3 [
        domain=0:5,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{-2*x},
{-1*x},
{-2*x}
);

\addplot3 [
        domain=0:15,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{-2*x},
{3*x},
{-1*x}
);

\addplot3 [
        domain=0:4,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{3*x},
{-3*x},
{-4*x}
);
\end{axis}
\end{tikzpicture}
\end{document}

```

## Part b

$$
\begin{align}
\mathbf{x}(t)=\begin{bmatrix}
e^{ -t } & 0  & 0\\
0 & e^{ -t }  & 0 \\
0 & 0 & e^{ t } 
\end{bmatrix}\begin{bmatrix}
c_{1} \\
c_{2} \\
c_{3}
\end{bmatrix}.
\end{align}
$$


```latex



% latex-id: 459e-7704-02b9-4e3e-9e0c
\usepackage{pgfplots}
\pgfplotsset{compat=1.8}
\tikzset{
      myarrowtip/.tip={Straight Barb[length=3pt,width=3pt]},
      arrow data/.style={%
      decoration={%
         markings,
         mark=at position 0.15 with \arrow{myarrowtip},
         mark=at position 0.48 with \arrow{myarrowtip}, 
         mark=at position 0.81 with \arrow{myarrowtip},         
         },
         postaction=decorate
         }
      }%
\begin{document}
\begin{tikzpicture}
\begin{axis}[
  width=2*175pt,
  tick label style={font=\scriptsize},
  yticklabels={},xticklabels={}, zticklabels={}
  axis on top,
  axis lines=center,
  name=myplot,
  % axis equal image,
  enlargelimits=.1,
  ymin=-20, ymax=20, xmin=-20, xmax=20, zmin=-20, zmax=20,
  xlabel=$x_{1}$, ylabel=$x_{2}$, zlabel=$x_{3}$,
  every axis y label/.append style={at=(ticklabel* cs:0)}]
  
  
  \addplot3 [
        domain=0:1,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{10*e^(-x)},
{10*e^(-x)},
{10*e^x}
);

  \addplot3 [
        domain=0:1,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{10*e^(-x)},
{-10*e^(-x)},
{10*e^x}
);

  \addplot3 [
        domain=0:1,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{-10*e^(-x)},
{-10*e^(-x)},
{10*e^x}
);

  \addplot3 [
        domain=0:1,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{-10*e^(-x)},
{10*e^(-x)},
{10*e^x}
);



  \addplot3 [
        domain=0:1,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{10*e^(-x)},
{10*e^(-x)},
{-10*e^x}
);

  \addplot3 [
        domain=0:1,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{10*e^(-x)},
{-10*e^(-x)},
{-10*e^x}
);

  \addplot3 [
        domain=0:1,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{-10*e^(-x)},
{-10*e^(-x)},
{-10*e^x}
);

  \addplot3 [
        domain=0:1,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{-10*e^(-x)},
{10*e^(-x)},
{-10*e^x}
);



  \addplot3 [
        domain=20:0,
        samples=200,
        samples y=0,
        arrow data,
        green,
        thick
    ] (
{x},
{0},
{0}
);

  \addplot3 [
        domain=20:0,
        samples=200,
        samples y=0,
        arrow data,
        green,
        thick
    ] (
{-x},
{0},
{0}
);

  \addplot3 [
        domain=20:0,
        samples=200,
        samples y=0,
        arrow data,
        green,
        thick
    ] (
{0},
{x},
{0}
);

  \addplot3 [
        domain=20:0,
        samples=200,
        samples y=0,
        arrow data,
        green,
        thick
    ] (
{0},
{-x},
{0}
);

  \addplot3 [
        domain=0:20,
        samples=200,
        samples y=0,
        arrow data,
        blue,
        thick
    ] (
{0},
{0},
{x}
);

  \addplot3 [
        domain=0:20,
        samples=200,
        samples y=0,
        arrow data,
        blue,
        thick
    ] (
{0},
{0},
{-x}
);




\end{axis}
\end{tikzpicture}
\end{document}

```

The $x_{1}, x_{2}$ plane is the stable subspace. The $x_{3}$ axis is the unstable subspace. 

## Part c

Observe that $x_{1}, x_{2}$ are uncoupled form $x_{3}$. Using previous work from Problem 1.1, part d, we have
$$
\begin{align}
x_{1}(t) 
 & =c_{1}\cos t+c_{2}\sin t, \\
x_{2}(t) 
 & =c_{1}\sin t-c_{2}\cos t, \\
x_{3}(t) & = c_{3}e^{ -t }
\end{align}
$$


```latex

% latex-id: 56cf-9c25-0e0c-4bb8-ae7e
\usepackage{pgfplots}
\pgfplotsset{compat=1.8}
\tikzset{
      myarrowtip/.tip={Straight Barb[length=3pt,width=3pt]},
      arrow data/.style={%
      decoration={%
         markings,
         mark=at position 0.07 with \arrow{myarrowtip},
         mark=at position 0.3 with \arrow{myarrowtip}, 
         mark=at position 0.8 with \arrow{myarrowtip},         
         },
         postaction=decorate
         }
      }%
\begin{document}
\begin{tikzpicture}
\begin{axis}[
  width=2*175pt,
  tick label style={font=\scriptsize},
  yticklabels={},xticklabels={}, zticklabels={}
  axis on top,
  axis lines=center,
  name=myplot,
  % axis equal image,
  enlargelimits=.1,
  ymin=-20, ymax=20, xmin=-20, xmax=20, zmin=-20, zmax=20,
  xlabel=$x_{1}$, ylabel=$x_{2}$, zlabel=$x_{3}$,
  every axis y label/.append style={at=(ticklabel* cs:0)}]
  
  
  \addplot3 [
        domain=0:20,
        samples=200,
        samples y=0,
        arrow data,
        red
    ] (
{10*cos(deg(x))+10*sin(deg(x))},
{10*sin(deg(x))-10*cos(deg(x))},
{15*e^(-x)}
);


  \addplot3 [
        domain=0:20,
        samples=200,
        samples y=0,
        arrow data,
        blue
    ] (
{-5*cos(deg(x))+5*sin(deg(x))},
{-5*sin(deg(x))-5*cos(deg(x))},
{-20*e^(-x)}
);

  \addplot3 [
        domain=0:20,
        samples=200,
        samples y=0,
        arrow data,
        green
    ] (
{0},
{0},
{20*e^(-x)}
);

  \addplot3 [
        domain=0:20,
        samples=200,
        samples y=0,
        arrow data,
        green
    ] (
{0},
{0},
{-20*e^(-x)}
);



\end{axis}
\end{tikzpicture}
\end{document}

```
Clearly, the $x_{3}$ axis is the stable subspace. 


---

# Problem 2.6

Let $\lambda_{1}, \dots, \lambda_{n}$ be the real, distinct eigenvalues of $A$, with corresponding eigenvectors $\mathbf{v}_{1}, \dots, \mathbf{v}_{n}$. Then, $\dot{\mathbf{x}}=A\mathbf{x}$ has the solution
$$
\mathbf{x}(t)=PE(t)P^{-1}\mathbf{x}(0),
$$
where $P=\begin{bmatrix}\mathbf{v}_{1} & \dots & \mathbf{v}_{n}\end{bmatrix}$ and $E(t)=\text{diag}(e^{ \lambda_{1}t }, \dots, e^{ \lambda_{n}t })$. Thus, 
$$
\phi(t, \mathbf{x}_{0})=PE(t)P^{-1}\mathbf{x}_{0}.
$$
For fixed $t$, $\phi(t, \mathbf{x}_{0})$ is a linear map between finite dimensional vector spaces, and hence is continuous. 

---

# Problem 2.7

## Part a

Let $\lambda=1$, $\mu=2$. We have
$$
\begin{align}
\mathbf{x}(t) & =\begin{bmatrix}
1 & -1 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
e^{ t } & 0 \\
 0 &  e^{ 2t }
\end{bmatrix}\begin{bmatrix}
1 & 1 \\
0 & 1
\end{bmatrix}\mathbf{x}(0) \\
 & =\begin{bmatrix}
e^{ t } & e^{ t }-e^{ 2t } \\
 0 & e^{ 2t }
\end{bmatrix}\mathbf{x}(0)
\end{align}
$$

![[image.jpeg|398x396]]


## Part b

Let $\lambda=2$, $\mu=1$. 
$$
\begin{align}
\mathbf{x}(t) & =\begin{bmatrix}
1 & -1 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
e^{ 2t } & 0 \\
 0 &  e^{ t }
\end{bmatrix}\begin{bmatrix}
1 & 1 \\
0 & 1
\end{bmatrix}\mathbf{x}(0) \\
 & =\begin{bmatrix}
e^{ 2t } & e^{ 2t }-e^{ t } \\
 0 & e^{ t }
\end{bmatrix}\mathbf{x}(0)
\end{align}
$$
![[image-6.jpeg|401x399]]

## Part c

Let $\lambda=-2$, $\mu=-1$. 
$$
\begin{align}
\mathbf{x}(t) & =\begin{bmatrix}
1 & -1 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
e^{ -2t } & 0 \\
 0 &  e^{ -t }
\end{bmatrix}\begin{bmatrix}
1 & 1 \\
0 & 1
\end{bmatrix}\mathbf{x}(0) \\
 & =\begin{bmatrix}
e^{ -2t } & e^{ -2t }-e^{ -t } \\
 0 & e^{ -t }
\end{bmatrix}\mathbf{x}(0)
\end{align}
$$
![[image-7.jpeg|402x401]]


## Part d

Let $\lambda=-1$, $\mu=1$. 
$$
\begin{align}
\mathbf{x}(t) & =\begin{bmatrix}
1 & -1 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
e^{ -t } & 0 \\
 0 &  e^{ t }
\end{bmatrix}\begin{bmatrix}
1 & 1 \\
0 & 1
\end{bmatrix}\mathbf{x}(0) \\
 & =\begin{bmatrix}
e^{ -t } & e^{ -t }-e^{ t } \\
 0 & e^{ t }
\end{bmatrix}\mathbf{x}(0)
\end{align}
$$

![[image-10.jpeg|412x411]]


## Part e

Let $\lambda=1$, $\mu=-1$. 
$$
\begin{align}
\mathbf{x}(t) & =\begin{bmatrix}
1 & -1 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
e^{ t } & 0 \\
 0 &  e^{ -t }
\end{bmatrix}\begin{bmatrix}
1 & 1 \\
0 & 1
\end{bmatrix}\mathbf{x}(0) \\
 & =\begin{bmatrix}
e^{ t } & e^{ t }-e^{ -t } \\
 0 & e^{ -t }
\end{bmatrix}\mathbf{x}(0)
\end{align}
$$

![[image-10.jpeg|412x411]]

(lines are directed the opposite way!)

## Part f


Let $\lambda=0$, $\mu=1$. 
$$
\begin{align}
\mathbf{x}(t) & =\begin{bmatrix}
1 & -1 \\
0 & 1
\end{bmatrix}\begin{bmatrix}
1 & 0 \\
 0 &  e^{ t }
\end{bmatrix}\begin{bmatrix}
1 & 1 \\
0 & 1
\end{bmatrix}\mathbf{x}(0) \\
 & =\begin{bmatrix}
1 & 1-e^{ t } \\
 0 & e^{ t }
\end{bmatrix}\mathbf{x}(0)
\end{align}
$$
![[image-11.jpeg|393x392]]

---

# Problem 3.1

## Part a

$\lVert A \rVert=\max_{|x|=1}|Ax|$. We need maximize $\sqrt{ 4x_{1}^{2}+9x_{2}^{2} }$ subject to the constraint $x_{1}^{2}+x_{2}^{2}=1$. 
$$
\begin{align}
 4x_{1}^{2}+9x_{2}^{2}  & =4+5x_{2}^{2},
\end{align}
$$
the maximum value of which is clearly $9$. Thus, $\lVert A \rVert=\sqrt{ 9 }=3$. 

## Part b

We need to maximize $|Ax|^{2}= (x_{1}+2x_{2})^{2} +x_{2}^{2}$ subject to the constraint $x_{1}^{2}+x_{2}^{2}=1$. 
$$
x_{1}^{2}+4x_{1}x_{2}+5x_{2}^{2}=1+4x_{1}x_{2}+4x_{2}^{2}.
$$
Plug $x_{1}=\cos t$, $x_{2}=\sin t$, where $t\in[0, 2\pi)$. We now need to maximize $f(t)=\sin t\cos t+\sin^{2}t$. 
$$
f'(t)=\sin 2t+ \cos 2t.
$$
The zeroes of $f'(t)$ are $3\pi/8, 7\pi/8, 11\pi/8, 15\pi/8$. Of these, $t=3\pi/8$ and $t=11\pi/8$, correspond to local maxima, and the values of $f$ at these points are equal. Thus, 
$$
\begin{align}
\lVert A \rVert  & =\sqrt{ 1+4\cos\left( \frac{3\pi}{8} \right) \sin\left( \frac{3\pi}{8} \right)+4\sin^{2}\left( \frac{3\pi}{8} \right)} \\
 & = 1+\sqrt{ 2 }.
\end{align}
$$

## Part c

We need to maximize $|Ax|^{2}=26x_{1}^{2}+10x_{1}x_{2}+x_{2}^{2}$ subject to the constraint $x_{1}^{2}+x_{2}^{2}=1$. Again, let $x_{1}=\cos t$, and $x_{2}=\sin t$.
$$
\begin{align}
26x_{1}^{2}+10x_{1}x_{2}+x_{2}^{2} & =1+10x_{1}x_{2}+25x_{1}^{2} \\
 & =1+10\cos t\sin t+25\cos ^{2}t
\end{align}
$$
Let $f(t)=1+10\cos t\sin t+25\cos ^{2}t$. 
$$
\begin{align}
f'(t) & =-10(2.5\sin 2t-\cos 2t) \\
\end{align}
$$
The zeroes of $f$ are 
$$
\left\{  \left( \frac{k\pi+\tan ^{-1}\left( \frac{2}{5} \right)}{2} \right) :k\in \{ 0, 1, 2, 3 \}  \right\}.
$$
Of these, $k=0, 2$ correspond to local maxima. Again, the values of $f$ at these points are equal. Thus,
$$
\begin{align}   
\lVert A \rVert =\sqrt{f\left(\frac{\tan^{-1}\left(\frac{2}{5}\right)}{2}\right)}=5.19258240357\dots.
\end{align}
$$
