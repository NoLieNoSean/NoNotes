

Vasudeva S Nanjangud

---

## 3.30
![[Pasted image 20240827163402.png|300]]
Let $A$ have acceleration $a$ and tension $T$ acting upward. Then, from the conservation of string, pulley 1 must have upward acceleration of $\frac{a}{2}$, pulley 2 $\frac{a}{4}$, and pulley $n$ (and hence $B$) $\frac{a}{2^n}$. Similarly, if $A$ experiences an upward tension of $T$, pulley 1 must experience a total upward tension of $2T$, pulley 2 $4T$, and pulley $n$ (and hence $B$) $2^nT$. 

We can now proceed to write the second law equations for both the blocks.

$$
\begin{align}
\text{block A: }~~&T-mg=-ma\\
\text{block B: }~~&2^nT-mg=m\frac{a}{2^n}
\end{align}
$$
Solving these equations for $a$, we get
$$
\boxed{
a=\frac{{g(2^n-1)}}{2^{-n}+2^n}
}
$$
## 3.44
![[Pasted image 20240827170008.png|300]]
Suppose Newton is at $A(0,0)$, and he aims his rock at an apple located at $B(d,h)$ with a velocity $\mathbf{v}$. Let $\mathbf{r}_{1}$ denote the position of the rock, and $\mathbf{r}_{2}$ denote the position of the apple. $\mathbf{r}_{1}$ and $\mathbf{r}_{2}$ can be parameterized in $t$ like so (let $\theta = \arctan\left( \frac{h}{d} \right)$):
$$
\begin{align}
\mathbf{r}_{1}&=\left( |\mathbf{v}|\cos \theta ~t,\  |\mathbf{v}|\sin \theta~t-\frac{1}{2}gt^{2} \right),\\
\mathbf{r}_{2}&= \left( d, \ h-\frac{1}{2}gt^{2} \right)
\end{align}
$$
Equating the $\text{x}$ coordinates, we get $t=\frac{d}{|\mathbf{v}|\cos \theta}$, the time at which the rock and apple will have the same $\text{x}$ coordinate. On plugging this value of $t$ into the expressions for $\mathbf{r}_{1}$ and $\mathbf{r}_{2}$, we get 
$$
\boxed{
\begin{align}
\mathbf{r}_{1}=\mathbf{r}_{2}=\left( d,\  h-\frac{gd^{2}}{2|\mathbf{v}|^{2}\cos ^{2}\theta} \right)\\
\end{align}
}
$$
Thus, the rock hits the apple.

## 3.57
![[Pasted image 20240827175208.png|300]]

From the frame of reference of the hoop, the bead will experience a fictitious force $\mathbf{F}_{2} = mR\sin \theta \omega^{2}\hat{r}$, gravitational force $\mathbf{F}_{1}=-mg\hat{k}$, and normal force due to the hoop $\mathbf{N}$. For the bead to remain at the same angle $\theta$ relative to the vertical, the resultant of $\mathbf{F}_{1}$ and $\mathbf{F}_{2}$ must be antiparallel to $\mathbf{N}$. Thus, 
$$

\begin{align}
&\frac{|\mathbf{F}_{2}|}{|\mathbf{F}_{1}|} = \tan \theta \\
\implies & \frac{{R\sin \theta \omega^{2}}}{g} = \tan \theta\\
\implies & \boxed{\omega = \sqrt{\frac{g}{R\cos \theta} }}
\end{align}
$$
When $\theta=0$, $\omega = \sqrt{ \frac{g}{R} }$. This implies that if $\omega\leq\sqrt{ \frac{g}{R} }$, the bead will not be able to maintain any position $\theta > 0$ on the hoop. 




## 3.69
We know that $F_r=m(\ddot{r}-r\dot{\theta}^2)$ and $\\F_\theta=m(r\ddot{\theta}+2\dot{r}\dot{\theta})$. Balancing forces in the radial and tangential directions, we get
$$
\begin{align}
& F_{\theta} = m(r \ddot{\theta}+2\dot{r}\dot{\theta}) = 2m \dot{r} \dot{\theta} \implies \ddot{\theta} = 0\\
& F_{r} = m(\ddot{r} -r \dot{\theta}^{2}) =0 \implies \ddot{r} = r \dot{\theta}^{2}

\end{align}
$$
The first equation tells us that $\dot{\theta}$ is constant, and the second provides us with the differential equation we can use to solve for $r$ in terms of $\theta$.
$$
\begin{align}
\ddot{r} &= r \dot{\theta}^{2}\\
\dot{r} \frac{{d \dot{r}}}{dr} &= r \dot{\theta}^{2}\\
\int \dot{r} ~d \dot{r} &= \dot{\theta}^{2}\int r~dr~~+c_{1}\\
\dot{r}^{2}&=\dot{\theta}^{2}r^2+2c_{1} \\
\int\frac{dr}{\sqrt{\dot{\theta}^{2}r^2+2c_{1}}}&= \int dt +c_{2}\\
\end{align}
$$

Let $C_{1}$ be $\sqrt{ 2c_{1} }$, and $\tan x$ be $\frac{\dot{\theta}r}{C_{1}}$. It follows that $\sec ^{2}x~dx = \frac{\dot{\theta}}{C_{1}}~dr$.
$$
\begin{align}
\frac{1}{C_{1}}\int\frac{dr}{\sqrt{\frac{\dot{\theta}^{2}r^2}{C_{1}^{2}}+1}}=
\frac{1}{\dot{\theta}}\int\frac{\sec ^{2}x~dx}{\sqrt{\tan ^{2}x+1}}=\frac{1}{\dot{\theta}} \int \sec x~dx ~&{\mathbf =} \int dt +c_{2}\\
\frac{1}{\dot{\theta}} \ln(\sec x+\tan x) &= t+c_{2}\\
\end{align}
$$
Substituting the values of $\sec x$ and $\tan x$ in terms of $r$, we get 
$$
\begin{align}
\frac{1}{\dot{\theta}}\ln\left( \sqrt{ 1+\left( \frac{\dot{\theta}r}{C_{1}} \right)^{2} }+{\frac{\dot{\theta}r}{C_{1}}} \right) &=t+c_{2}\\
\sqrt{ 1+\left( \frac{\dot{\theta}r}{C_{1}} \right)^{2} } &= e^{\dot{\theta}(t+c_{2})} -{\frac{\dot{\theta}r}{C_{1}}}\\
1+\cancel{ \left( \frac{\dot{\theta}r}{C_{1}} \right)^{2} } &= e^{2\dot{\theta}(t+c_{2})} +\cancel{ \left( \frac{\dot{\theta}r}{C_{1}} \right)^{2} } - 2e^{\dot{\theta}(t+c_{2})}{\frac{\dot{\theta}r}{C_{1}}}\\
 2e^{\dot{\theta}(t+c_{2})}{\frac{\dot{\theta}r}{C_{1}}}&= e^{2\dot{\theta}(t+c_{2})}  -1\\
 r&= A'e^{\dot{\theta}(t+c_{2})}  -B'e^{-\dot{\theta}(t+c_{2})}\\
\end{align}
$$


for some constants $A'$ and $B'$. 

Let $\theta = \dot{\theta}t+\theta_{0}$, for some initial angle $\theta_{0}$.  Now, the above equation can be rewritten as
$$
\begin{align}
 r&= A'e^{c_{2}\dot{\theta}-\theta_{0}}e^{\dot{\theta}t+\theta_{0}}  -B'e^{-c_{2}\dot{\theta} +\theta_{0}}e^{-(\dot{\theta}t+\theta_{0})}\\
 &= Ae^{\theta} + Be^{-\theta}
\end{align}
$$
for some constants $A$ and $B$.