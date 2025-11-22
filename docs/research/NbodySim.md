---
title: Nbody Simulations —— Codes, Performance, and "New" Physics
tags:
  - cosmology
  - simulation
createTime: 2025/06/10 10:00:16
permalink: /blog/nbodysim/
---

::: note 注
接到任务要在 MUST science meeting 上报告最近测试的 N-body simulation codes 的 performance，以及介绍一些新的 simulations 和 codes。

看起来是把完全不相关的三部分拼凑到一块儿……
:::

## N-body codes test 

五月份我们测试了一些 N-body simulation 的代码，包括 pkdgrav3、MP-Gadget 和 CUBE，比较的基准是 Quijote 的 fiducial cosmology 中的第一个 realization，可以算是 Gadget 的结果。得到的结论是 pkdgrav3 比 MP-Gadget 和 CUBE 都快很多，而在 pkdgrav3 内部主要的 limit 在 CPU 上，GPU 模块能加速但不多。

我们的测试采用 32 tasks, 4 threads per task 的配置，测试结果如下：

| 代码 / codes   | 设置 / settings  | 用时 / time  |
| ------------- |:-------------:| -----:|
| pkdgrav3      | 100 steps, CPU+GPU | 113 mins |
| pkdgrav3      | 100 steps, CPU-only |   143 mins 32.479 s |
| pkdgrav3      | 1000 steps, CPU+GPU | 233 mins 25.109 s |
| MP-Gadget    | -             | 632 mins 24.555 s |
| CUBE         | -             | 3214 mins 17.496 s |

在精度上，MP-Gadget 和 CUBE 尚有一些技术细节没有弄明白，我们仔细比较了 pkdgrav3 的输出和 Quijote 的结果，发现差别都在 percent level，符合对现今 N-body code 精度的预期。

<figure style="text-align:center;">
  <img src="/images/compare_nbody.png" width="70%" style="display:block;margin:auto;"/>
  <figcaption>图 1：N-body 代码的比较。下图阴影区域为 1% </figcaption>
</figure>

具体的来说，我们比较了 matter power spectrum, halo mass function 和 halo power spectrum.
- matter power spectrum 的比较结果如上图所示，除了第一个点 $k_{\rm F}$ 外， pkdgrav3 和 Quijote 的结果在 $k \lesssim 2 \, h/\text{Mpc}$ 的尺度上都在 1% 以内的误差。
- 对于 halo ， Quijote 使用的方法是 Gadget on-the-fly halo finder ，我们用 `nbodykit.fof` 后处理的方法生成 FoF halo catalog 和 Quijote 的结果比较。
  - 对于 halo mass function ，pkdgrav3 和 Quijote 的结果在 $M \lesssim 10^{15} \, M_\odot/h$ 的尺度上都在 5% 以内的误差。
  - 对于 halo power spectrum ，除了第一个点 $k_{\rm F}$ 外， pkdgrav3 和 Quijote 的结果在 $k \lesssim 2 \, h/\text{Mpc}$ 的尺度上都在 2% 以内的误差。（后面就到测量极限了，所以可以认为除了第一个点外全尺度都在 2% 以内——因为 halo power spectrum 相对 matter 更 noise，我们选择了相对较大的 tolerance 。）

## General Relativistic N-body code: gevolution

一般的 N-body code 都是基于 Newtonian 近似的，然而宇宙中存在未知的 components: dark matter 和 dark energy ，它们不一定是非相对论性的。另一方面，随着宇宙学探索逐渐走向更高红移，“时空是不平坦的”这一事实给被观测的光子带来的影响越来越重要。过去的部分研究表明，种种相对论效应的 leading order 可能在 1% 量级，因此，未来的精确宇宙学可能需要以广义相对论作为基本动力学的模拟。

早在 2016 年，就有计算物理学家提出了一个基于广义相对论的 N-body code —— gevolution 。我目前只看了它的 code paper，其中以 $\Lambda$CDM 模型为例，和标准的模拟做了一系列 benchmark 比较，说明 implementation 的正确性。并且进一步“证实”了， spin-1 perturbations 的影响确实在 percent level 量级。这一系列不知道还有没有其它 codes ， GR N-body codes 的应用前景目前看来有 neutrino 和 warm dark matter 甚至 wave dark matter 的模拟，随着 DESI 的结果发布， dynamic dark energy 的模拟也可能会成为一个新的应用方向。

## Cosmological Collider Simulations

Beyond local shape PNG 有两个技术路线。

其一基于理论学家做的 factorized bispectrum ，利用 FFT 加速 non-Gaussian $\phi$ field 的生成，由 Scoccimarro 在 2011 年开创。 Quijote 系列的工作都沿用其思路，包括覆盖三种传统 shapes 的 Quijote-PNG 和 Goldstein 跑的 collider simulation （目前已能实现虚指数和 oscillate signal ）。

其二则更 general ，不需要 separate bispectrum ，是 Wagner 和 Licia Verde 在 2010 年的工作中提出的，Julian Adamek 在为 gevolution 做的 IC generator RELIC 中沿用了这一路线，甚至好像进一步拓展，使得输入任意场都可以。
