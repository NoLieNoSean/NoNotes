`Vasudeva S Nanjangud`
## 4.22
![[Pasted image 20240907001103.png]]




### Part (a)
The $F=ma$ equations are
$$
\begin{align}
-mg-ky&=m\ddot{y} \\
-kx&=m\ddot{x}
\end{align}
$$
In the $y$ and $x$ directions respectively.
$$
\begin{align}
\ddot{y}=-\left( g+\frac{ky}{m} \right)
\end{align}
$$
Let $w = g + \frac{ky}{m}$. Then, $\ddot{w} = \frac{k\ddot{y}}{m}$. Thus, 
$$
\begin{align}
\ddot{w} = -\omega^{2}w 
\end{align}
$$
where $\omega^{2}=\frac{k}{m}$. This is a standard differential equation. Since we are given the initial position and velocity, it is beneficial to write the solution in this form:
$$
\begin{align}
w &= A \cos(\omega t)+B\sin(\omega t) \\
\implies y &= A' \cos(\omega t)+B'\sin(\omega t) -\frac{gm}{k}.
\end{align}
$$
Plugging in the initial conditions of $y(0) = 0$ and $\dot{y}(0) = v_{0}\sin\theta$, we get
$$

\begin{align}
A'&= \frac{gm}{k}, \\
B' &=\frac{v_{0}\sin\theta}{\omega}. \\ \\
\therefore y(t)&=\frac{gm}{k}\cos(\omega t)+\left( \frac{v_{0}\sin\theta}{\omega} \right)\sin(\omega t)-\frac{gm}{k}.
\end{align}

$$
Similarly, in the $x$ direction, we have
$$
\begin{align}
x = C\cos(\omega t)+D\sin(\omega t).
\end{align}
$$
Plugging in the initial conditions of $x(0) = 0$ and $\dot{x}(0)=v_{0}\cos\theta$, we get
$$
\begin{align}
C&=0, \\
D&= \frac{v_{0}\cos\theta}{\omega}. \\ \\
\therefore x(t)&= \frac{v_{0}\cos\theta}{\omega}\sin(\omega t). 
\end{align}
$$
The trajectory looks elliptical:
![[Pasted image 20240906230324.png|400]]

---

### Part (b)
If $\omega t\ll 1$, we can use the small angle approximations, namely $\sin\alpha \approx \alpha$ and $\cos\alpha \approx 1-\frac{\alpha^{2}}{2}$. 
$$
\begin{align}
y(t) &\approx \frac{gm}{k}\left( 1-\frac{\omega^{2}t^{2}}{2} \right) +\left( \frac{v_{0}\sin\theta}{\omega} \right)\omega t -\frac{gm}{k}= v_{0}\sin\theta~t-\frac{1}{2}gt^{2} \\
x(t) &\approx \frac{v_{0}\cos\theta}{\omega}(\omega t) =  v_{0}\cos\theta~t
\end{align}
$$
These equations describe vanilla projectile motion. As stated initially, these approximations are only valid when $\omega t \ll 1$. If only we concern ourselves with the motion of the particle when it is airborne, $t$ attains its maximum value right before the particle hits the ground, which is $t = \frac{2v_{0}\sin\theta}{g}$. Thus, if $\omega \left( \frac{2v_{0}\sin\theta}{g} \right)\ll 1$, it follows that $\omega t\ll 1$ for all values of $t$ (before the particle hits the ground, of course). So, $\omega\ll \frac{g}{2v_{0}\sin\theta}$ would ensure that the small angle approximations are valid.

---
We notice that $y(t)$ can be rewritten like so:
$$
y(t) = \frac{g}{\omega^{2}}(\cos(\omega t)-1)+\left( \frac{v_{0}\sin\theta}{\omega} \right)\sin(\omega t).
$$
If we somehow get the first term to vanish, the trajectory is reduced to a straight line with slope $\tan\theta$. 
$$
\begin{align}
y(t) &= \left( \frac{v_{0}\sin\theta}{\omega} \right)\sin(\omega t), \\
x(t) &= \left( \frac{v_{0}\cos\theta}{\omega} \right)\sin(\omega t).  \\ \\

\implies & \frac{y}{x} = \tan\theta
\end{align}
$$
![[Pasted image 20240906231113.png|400]]

For this to happen, the first term must become negligibly small as compared to the second term. So, 
$$
\begin{align}
\frac{g}{\omega^{2}}\ll \frac{v_{0}\sin\theta}{\omega} \\
\implies \omega \gg \frac{g}{v_{0}\sin\theta}
\end{align}
$$
---

### Part (c)

We want $y = 0$ when $\dot{x} = 0$.
$$
\begin{align}
\dot{x} = v_{0}\cos\theta \cos (\omega t) = 0\implies \omega t = \frac{\pi}{2}
\end{align}
$$
Plugging $\omega t = \frac{\pi}{2}$ into $y(t)$, we get
$$
\begin{align}
\frac{v_{0}\sin\theta}{\omega} = \frac{gm}{k}= \frac{g}{\omega^{2}} \\
\implies \omega = \frac{g}{v_{0}\sin\theta}.
\end{align}
$$

---

## 4.29
![[Pasted image 20240907001121.png]]
$R$ is defined in 4.33 like so:
$$
R\equiv\sqrt{\left(\omega^2-\omega_\mathrm{d}^2\right)^2+(2\gamma\omega_\mathrm{d})^2}.
$$
On taking the derivatives of the expression inside the square root with respect to $\omega_{d}$, we get
$$
\begin{align}
&\frac{d}{d\omega_{d}}R^{2} = -4\omega_{d}(\omega^{2}-\omega_{d}^{2}) +8\gamma^{2}\omega_{d} = 4\omega_{d}^{3}+\omega_{d}(8\gamma^{2}-4\omega^{2}), \\ \\

&\frac{d^{2}}{d\omega_{d}^{2}}R^{2} = 12\omega_{d}^{2}+8\gamma^{2}-4\omega^{2}
\end{align}
$$
On setting the first derivative of $R^{2}$ equal to $0$,
$$
\begin{align}
\omega_{d}\left(\omega_{d}^{2} -(\omega^{2}-2\gamma^{2})\right) = 0 \\
\end{align}
$$
we get the critical points to be $\omega_{d_{1}}=0$ and $\omega_{d_{2}} = \sqrt{ \omega^{2}-2\gamma^{2} }$. 

On evaluating the second derivative at these points, we get $4( 2\gamma^{2}-\omega^{2})$ and $8(\omega^{2}-2\gamma^{2})$ respectively. Thus, if $\omega^{2}-2\gamma^{2}<0$, $R$ achieves a minima at $\omega_{d_{1}}$. If $\omega^{2}-2\gamma^{2}>0$, $R$ achieves a minima at $\omega_{d_{2}}$. 

If $\omega^{2}-2\gamma^{2} = 0$, we continue to take derivatives till we reach a non zero derivative:

$$
\begin{align}
&\frac{d^{3}}{d\omega_{d}^{3}}R^{2} = 24\omega_{d}^{} \\
&\frac{d^{4}}{d\omega_{d}^{4}}R^{2} = 24. \\
\end{align}
$$
Since $4$ is even and $24$ is positive, we can conclude from the higher order derivative test that $\omega_{d} = 0$ is a minima.




