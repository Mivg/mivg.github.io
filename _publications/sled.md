---
title: "Efficient Long-Text Understanding with Short-Text Models"
authors: "<b>Maor Ivgi</b>, Uri Shaham, Jonathan Berant"
collection: publications
permalink: /publication/sled
excerpt: 'Can short-range LMs perform long-range reasoning? They can!<br>In this work, we propose the <b>SL</b>iding-<b>E</b>ncoder and <b>D</b>ecoder (SLED) which leverages <i>existing</i> battle-proven enc-dec LMs to operate over long-range NLU tasks.'
date: 2022-08-01
venue: 'TACL 2023, presented in ACL 2023'
code: 'https://github.com/Mivg/SLED'
paperurl: "https://arxiv.org/abs/2208.00748"
paperpdf: 'https://arxiv.org/pdf/2208.00748.pdf'
citation: '@inproceedings{Ivgi2022EfficientLU,<br>
  title={Efficient Long-Text Understanding with Short-Text Models},<br>
  author={Maor Ivgi and Uri Shaham and Jonathan Berant},<br>
  year={2022}<br>
}'
---
Transformer-based pretrained language models (LMs) are ubiquitous across natural language understanding, but cannot be applied to long sequences such as stories, scientific articles and long documents, due to their quadratic complexity. While a myriad of efficient transformer variants have been proposed, they are typically based on custom implementations that require expensive pretraining from scratch. In this work, we propose <b>SLED</b>: <b>SL</b>iding-<b>E</b>ncoder and <b>D</b>ecoder, a simple approach for processing long sequences that re-uses and leverages battle-tested short-text pretrained LMs. Specifically, we partition the input into overlapping chunks, encode each with a short-text LM encoder and use the pretrained decoder to fuse information across chunks (<i>fusion-in-decoder</i>). We illustrate through controlled experiments that SLED offers a viable strategy for long text understanding and evaluate our approach on SCROLLS, a benchmark with seven datasets across a wide range of language understanding tasks. We find that SLED is competitive with specialized models that are up to 50x larger and require a dedicated and expensive pretraining step.