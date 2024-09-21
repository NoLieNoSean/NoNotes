`Vasudeva S Nanjangud`
## 4.23
### Part a
![[Pasted image 20240913212450.png|600]]

Let $x$ be the arc length traversed by the bob, i.e,  $x=l\theta$.
$$
\begin{align}
T=4\int_{0}^{T/4} dt  & = 4\int_{0}^{\theta_{0}l} \frac{1}{v} \, dx=4l\int_{0}^{\theta_{0}} \frac{1}{v} \, d\theta    & (1)
\end{align}
$$
From the second law equation for the pendulum bob, we have $-mg\sin\theta=ma\implies a=-g\sin\theta$. Since $a=v \frac{dv}{dx}$, we have $v~dv=-g\sin\theta~dx$.
$$
\begin{align}
v~dv & =-gl\sin\theta~d\theta \\
\int v~dv & =-gl\int \sin\theta~d\theta +c \\
v^{2} & =2gl\cos\theta+c'
\end{align}
$$
When $\theta=\theta_{0}$, $v=0$. Thus, $c'=-2gl\cos\theta_{0}$. This gives us an expression for $v$ in $\theta$, $v=\sqrt{ 2gl(\cos\theta-\cos\theta_{0}) }$, which we can plug into $(1)$ to obtain the desired expression for $T$.
$$
\begin{align}
T & =\sqrt{ \frac{8l}{g} }\int_{0}^{\theta_{0}} \frac{1}{\sqrt{ \cos\theta-\cos\theta_{0} }} \, d\theta  & (2)
\end{align}
$$
### Part b
![[Pasted image 20240914005928.png|600]]
On using the suggested trigonometric identity in $(2)$, we get 
$$
\begin{align}
T & =2\sqrt{ \frac{l}{g} }{\int_{0}^{\theta_{0}}} \frac{1}{\sqrt{ \sin ^{2}( \theta_{0} /2) -\sin ^{2}(\theta /2)}} \, d\theta  \\  
 & =2\sqrt{ \frac{l}{g\sin ^{2}(\theta_{0} /2)} }{\int_{0}^{\theta_{0}}} \frac{1}{\sqrt{ 1 -\left(\sin(\theta /2) / \sin(\theta_{0} /2)\right)^{2}}} \, d\theta.
\end{align}
$$
Making the suggested substitution of $\sin x\equiv \frac{\sin\left( \frac{\theta}{2} \right)}{\sin\left( \frac{\theta_{0}}{2} \right)}$ (note that this $x$ is different from the $x$ used in part $(a)$), we get
$$
\begin{align}
T=4\sqrt{ \frac{l}{g} }{\int_{0}^{\pi/2}} \frac{1}{\cos{\frac{\theta}{2}}} \, dx= 4\sqrt{ \frac{l}{g} }{\int_{0}^{\pi/2}} \left( 1-\sin ^{2}x\sin ^{2} \frac{\theta_{0}}{2} \right)^{-1/2} \, dx.
\end{align}
$$
The Maclaurin series for $\sin x$ is $x-\frac{x^{3}}{3!}+\frac{x^{5}}{5!}+\dots$ . Since we are only interested in an approximation up to the second order of $\theta_{0}$, we can approximate $\sin ^{2} \frac{\theta_{0}}{2} \approx \frac{\theta_{0}^{2}}{4}$.

We can now employ the Maclaurin series of the function $f(y)=(1+y)^{\alpha}$:
$$
\begin{align}
(1+y)^{\alpha}=1+\alpha y+\frac{1}{2}\alpha(\alpha-1)y^{2} +\dots.
\end{align}
$$
On plugging $y = -\sin ^{2}x \left( \frac{\theta_{0}^{2}}{4} \right)$ and $\alpha=-\frac{1}{2}$, and approximating $(1+y)^{\alpha}\approx 1+\alpha y$ (since we only require the first power of $y$ to obtain an approximation in $\theta_{0}^{2}$), we get
$$
\begin{align}
T & \approx 4\sqrt{ \frac{l}{g} }{\int_{0}^{\pi/2}} 1+\frac{1}{2}\sin ^{2}x\frac{\theta_{0}^{2}}{4}  + \dots\, dx \\
 & = 4\sqrt{ \frac{l}{g} }\left( x +\frac{\theta_{0}^{2}}{8}\left( \frac{x}{2}-\frac{{\sin 2x}}{4} \right)+\dots\right)_{0}^{\pi/2} \\
 & = 4\sqrt{ \frac{l}{g} } \left( \frac{\pi}{2} +\frac{\theta_{0}^{2}}{8}\left( \frac{\pi}{4} \right)+\dots\right) \\
 & = 2\pi \sqrt{ \frac{l}{g} }\left( 1+\frac{\theta_{0}^{2}}{16}+\dots \right),
\end{align}
$$
as desired.

---


## 4.33

![[Pasted image 20240913212603.png|600]]
![[Screenshot 2024-09-14 at 00.26.45.png|300|300]]
Let the two masses be $m_{1}$ and $m_{2}$, and their distances from the origin (where the two rails cross each other) are $x$ and $y$ respectively. We can write the second law equations for both beads only considering the component of the spring force along their rails, as the perpendicular component is nullified by normal forces.
$$
\begin{align}
m_{1} & :k(y\cos\theta-x)=m\ddot{x} & (1) \\
m_{2} & :k(x\cos\theta-y)=m\ddot{y} & (2)
\end{align}
$$
Adding $(1)$ and $(2)$, we obtain
$$
\begin{align}
 & (\ddot{x}+\ddot{y})+(x+y)(1-\cos\theta) \frac{k}{m}=0 \\
\implies  & x+y = A \cos\left( t\sqrt{  (1-\cos\theta) \frac{k}{m} }+\phi_{1}\right) & (3)
\end{align}
$$
for some constants $A$ and $\phi_{1}$. Similarly, on subtracting $(2)$ from $(1)$, we obtain
$$
\begin{align}
 & (\ddot{x}-\ddot{y})+(x-y)(1+\cos\theta) \frac{k}{m}=0 \\
\implies  & x-y = B \cos\left( t\sqrt{  (1+\cos\theta) \frac{k}{m} }+\phi_{2}\right)  & (4)
\end{align}
$$
for some constants $B$ and $\phi_{2}$. Thus, $x+y$ and $x-y$ are the normal modes, as they oscillate with pure frequencies. $(3)$ and $(4)$ can be solved for $x(t)$ and $y(t)$.
$$
\begin{align}
x=\frac{A}{2} \cos\left( t\sqrt{  (1-\cos\theta) \frac{k}{m} }+\phi_{1}\right)+\frac{B}{2} \cos\left( t\sqrt{  (1+\cos\theta) \frac{k}{m} }+\phi_{2}\right) \\
y=\frac{A}{2} \cos\left( t\sqrt{  (1-\cos\theta) \frac{k}{m} }+\phi_{1}\right)-\frac{B}{2} \cos\left( t\sqrt{  (1+\cos\theta) \frac{k}{m} }+\phi_{2}\right)
\end{align}
$$
