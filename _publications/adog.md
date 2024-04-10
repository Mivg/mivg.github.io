---
title: "Accelerated Parameter-Free Stochastic Optimization"
authors: "Itai Kreisler, <b>Maor Ivgi</b>, Oliver Hinder, Yair Carmon"
collection: publications
permalink: /publication/adog
excerpt: 'Building on the [DoG](https://mivg.github.io/publication/dog){:target="_blank" rel="noopener noreferrer"} optimizer, ADoG is a tuning-free dynamic accelerated SGD step size formula, backed by strong theoretical guarantees and empirically demonstrated to work well in the convex settings.'
date: 2024-03-31
venue: 'ICML (2023)'
code: 'https://github.com/formll/dog'
paperurl: 'https://arxiv.org/abs/2302.12022'
paperpdf: 'https://arxiv.org/pdf/2302.12022.pdf'
citation: "@article{kreisler2024accelerated, <br>
  title={Accelerated Parameter-Free Stochastic Optimization}, <br>
  author={Itai Kreisler and Maor Ivgi and Oliver Hinder and Yair Carmon}, <br>
  journal={arXiv:2404.00666}, <br>
  year={2024}, <br>
}"
---
We propose a method that achieves near-optimal rates for smooth stochastic convex optimization and requires essentially no prior knowledge of problem parameters. This improves on prior work which requires knowing at least the initial distance to optimality d0. Our method, U-DoG, combines UniXGrad (Kavis et al., 2019) and DoG (Ivgi et al., 2023) with novel iterate stabilization techniques. It requires only loose bounds on d0 and the noise magnitude, provides high probability guarantees under sub-Gaussian noise, and is also near-optimal in the non-smooth case. Our experiments show consistent, strong performance on convex problems and mixed results on neural network training.