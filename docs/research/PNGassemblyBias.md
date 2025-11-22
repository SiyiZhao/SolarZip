---
title: PNG assembly bias
tags:
  - cosmology
  - galaxy survey
  - simulation
createTime: 2025/05/27 09:59:59
permalink: /blog/png_assembly_bias/
---

## 背景

五月份我们测试了一些 N-body simulation 的代码，包括 pkdgrav3、MP-Gadget 和 CUBE，比较的基准是 Quijote 的 fiducial cosmology 中的第一个 realization，可以算是 Gadget 的结果。得到的结论是 pkdgrav3 比 MP-Gadget 和 CUBE 都快很多，而在 pkdgrav3 内部主要的 limit 在 CPU 上，GPU 模块能加速但不多。
至于精度，因为各个“流派”的 code 使用的配置有所不同，严谨的比较需要花费一些工作量，而 DESI 会议近在眼前（x），所以我们（暂时）其实只精细地比较了 pkdgrav3 和 Quijote 的 matter power spectrum、 halo mass function 和 halo power spectrum，结论是除了 power spectrum 最大尺度那个点外都是挺一致的 （percent level）。 

测试之后就是使用，为此，调研了一下 PNG assembly bias （其实也就是测量 $b_\phi$ 或者说 $p$ 的问题） 的文献，主要目的是确定 simulation 的配置需要达到什么精度。以下是文献调研小结。

## 文献检索 

在 ads 上查询 PNG assembly bias ([search page](https://ui.adsabs.harvard.edu/search/fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq_database=(database%3Aastronomy%20OR%20database%3Aphysics)&q=PNG%20assembly%20bias&sort=date%20desc%2C%20bibcode%20desc&p_=0)) 查到 4 篇，仔细看过后发现其中只有 2 篇讨论的主题是 assembly bias。

其中 [Lazeyras et al. 2023](http://arxiv.org/abs/2209.07251) 这篇其实之前就看过了，还做了笔记。核心是：发现 concentration 影响很大， spin 和 sphericity 基本没影响，但是提示在选源的时候要考虑尽量选择 concentration 一致的 sample，以及 $b_\phi(b_1)$ relation 中的 assembly bias 需要更多的工作来研究。

重点是 [AbacusPNG](http://arxiv.org/abs/2402.10881) 那篇，细节见下。

另外还有一些工作可能因为用简写的 PNG 检索没搜出来。包括
1. [Dalal & Percival 2025](http://arxiv.org/abs/2503.21024) 重点不在 assembly bias，而是通过把 separate universe 方法中的 $\Delta \sigma_8$ 替换为 $\Delta z$，以试图通过观测中星系的数密度随着红移演化来独立地测量 $b_\phi$。不过他们也看了 $b_\phi$ 和 concentration 的关系，并且说明这个方法是可以测量出 $b_\phi$ 中 assembly 的成分的（不输 separate universe 的能力）。
2. [Sullivan & Seljak 2025](http://arxiv.org/abs/2503.21736) 和上一篇的主题一致，也是为了从**红移演化**中测量
$b_\phi$，以期在 LPNG 分析中，可以给 $b_\phi$ 一个合理的 prior。从文章内容上看比上篇的工作量要大一些，在 N-body 之外还看了 hydro-simulation ，展示了 $b_\phi$ 和 galaxy color (g-r) 的关系，不过他们用的 simulation 可能是盒子小或是什么原因，误差比较大，关系不明显。



## AbacusPNG

他们用的 Abacus code 跑了 $2{\rm~Gpc}/h$, $4096^3$ 的盒子（mass resolution 是 $1.01 \times 10^{10} ~M_\odot/h$）。
对于 $b_\phi$，用了三种不同的方法计算：
1. 直接从 PNG simulation 的 halo power spectrum 中测量，最简单的 model.
2. 通过 separate universe 的方法，测量  
$$b_\phi \equiv \frac{\rm d \ln n_h(z)}{ {\rm d} f_{\rm NL} \phi} =4 \frac{\mathrm{~d} \ln n_h(z)}{\mathrm{d} \delta A_s}=2 \frac{\mathrm{~d} \ln n_h(z)}{\mathrm{d} \delta \sigma_8}$$
3. 用理论的 $b_\phi(b_1)$ relation 计算 $b_\phi=0.9 \times 2 \delta_{\rm cr} (b_1-1)$。
得到后两者是完美符合的，而第一种比较 noisy，可能是因为有高阶的东西混了进来，也有大质量 halo 个数较少带来的统计误差。

<figure style="text-align:center;">
  <img src="/images/bphi_meas.png" width="70%" style="display:block;margin:auto;"/>
  <figcaption>图 1：三种方法测量 $b_\phi$ 的比较 (Hadzhiyska et al. 2024)</figcaption>
</figure>

他们比较了 concentration、accretion rate、shear 这三个 assembly properties，发现都对 $b_\phi(b_1)$ relation 有影响，特别是 concentration 的影响最大。对于特定的 property，小质量低 Bias 的 halo 受到的影响更大。

<figure style="text-align:center;">
  <img src="/images/LPNG_assembly_bias.png" style="display:block;margin:auto;"/>
  <figcaption>图 2：不同 assembly property 对 $b_\phi(b_1)$ 的影响 (Hadzhiyska et al. 2024) </figcaption>
</figure>

他们还进一步针对 DESI 的两个 LRGs samples 和 QSO sample 做了改进的 HOD fit，并对 $f_{\rm NL} b_\phi$ 做了限制，指出 assembly bias 会对 $f_{\rm NL}$ 的误差估计造成 1.5-2 倍的影响。并指出下一步需要利用 hydro-dynamic simulation 等方法研究 galaxy properties 和 halo properties 之间的关系。

## 结论

总的来说，PNG assembly bias 已经有了初步的研究，发现至少 concentration 对 $b_\phi(b_1)$ 有显著影响，更进一步地搞清楚 $b_\phi$ 可能需要一些星系方面的知识，以及更高精度的模拟。

