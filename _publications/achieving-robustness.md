---
title: "Achieving Model Robustness through Discrete Adversarial Training"
authors: "<b>Maor Ivgi</b> and Jonathan Berant"
collection: publications
permalink: /publication/achieving-robustness
excerpt: 'While many works established that modern transformer-based NLP models are not robust, this work is all about achieving this lost robustness back.'
date: 2021-04-11
venue: 'EMNLP 2021'
code: 'https://github.com/Mivg/robust_transformers'
paperurl: "https://arxiv.org/abs/2104.05062"
paperpdf: 'https://arxiv.org/pdf/2104.05062.pdf'
citation: '@inproceedings{Ivgi2021AchievingMR, <br>
  title={Achieving Model Robustness through Discrete Adversarial Training}, <br>
  author={Maor Ivgi and Jonathan Berant}, <br>
  booktitle={EMNLP}, <br>
  year={2021}
}'
---
Discrete adversarial attacks are symbolic perturbations to a language input that preserve the output label but lead to a prediction error. While such attacks have been extensively explored for the purpose of evaluating model robustness, their utility for improving robustness has been limited to offline augmentation only. Concretely, given a trained model, attacks are used to generate perturbed (adversarial) examples, and the model is re-trained exactly once. In this work, we address this gap and leverage discrete attacks for online augmentation, where adversarial examples are generated at every training step, adapting to the changing nature of the model. We propose (i) a new discrete attack, based on best-first search, and (ii) random sampling attacks that unlike prior work are not based on expensive search-based procedures. Surprisingly, we find that random sampling leads to impressive gains in robustness, outperforming the commonly-used offline augmentation, while leading to a speedup at training time of ~10x. Furthermore, online augmentation with search-based attacks justifies the higher training cost, significantly improving robustness on three datasets. Last, we show that our new attack substantially improves robustness compared to prior methods.