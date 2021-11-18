---
title: "Beyond Importance Scores: Interpreting Tabular ML by Visualizing Feature Semantics"
authors: "Amirata Ghorbani, Dina Berenbaum, <b>Maor Ivgi</b>, Yuval Dafna and James Zou"
collection: publications
permalink: /publication/beyond-importance
excerpt: 'A novel way to visualize not only the importance of each feature in tabular data, but also the semantic meaning and relationships of features.'
date: 2021-11-10
venue: 'Arxiv (Preprint)'
code: 'https://github.com/feature-vectors/feature-vectors'
package: 'https://pypi.org/project/feature-vectors/'
paperurl: 'https://www.semanticscholar.org/paper/Beyond-Importance-Scores%3A-Interpreting-Tabular-ML-Ghorbani-Berenbaum/6899359eefa80aa590404e04d8ebff7a49f69072'
paperpdf: 'https://mivg.github.io/files/beyond-importance.pdf'
citation: '@inproceedings{Ghorbani2021BeyondIS, <br>
  title={Beyond Importance Scores: Interpreting Tabular ML by Visualizing Feature Semantics}, <br>
  author={Amirata Ghorbani and Dina Berenbaum and Maor Ivgi and Yuval Dafna and James Zou}, <br>
  year={2021}
}'
---
Interpretability is becoming an active research topic as machine learning (ML) models are more widely used to make critical decisions. Tabular data is one of the most commonly used modes of data in diverse applications such as healthcare and finance. Much of the existing interpretability methods used for tabular data only report feature-importance scores—either locally (per example) or globally (per model)—but they do not provide interpretation or visualization of how the features interact. We address this limitation by introducing Feature Vectors, a new global interpretability method designed for tabular datasets. In addition to providing feature-importance, Feature Vectors discovers the inherent semantic relationship among features via an intuitive feature visualization technique. Our systematic experiments demonstrate the empirical utility of this new method by applying it to several real-world datasets. We further provide an easy-to-use Python package for Feature Vectors.