---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm an AI researcher and entrepreneur. I have vast experience in implementing state-of-the-art deep learning models for real-world use cases, ranging from computer vision solutions for the energy industry to graph analysis for government law enforcement. I received my masters in Computer Science at Tel-Aviv University advised by <a href="http://www.cs.tau.ac.il/~joberant/" target="_blank">Prof. Jonathan Berant</a>, focusing on NLP models' Robustness. As a Ph.D. candidate at Prof. Berant's lab, I research remaining gaps in state-of-the-art NLP models and how to solve them to increase trust in the industry and allow productionization of such models to empower everyday users.<br/>I co-founded <a href="http://www.demystify-ai.com" target="_blank">Demystify-AI</a> where I act as the CTO and lead all research and technological efforts, developing a disruptive explainable AI platform, helping healthcare and financial institutions leverage modern ML techniques in highly regulated environment.

[Publications](/publications)
========
{% for post in site.publications reversed %}
  {% include short-archive-single.html %}
{% endfor %}

[Teaching](/teaching)
========
{% for post in site.teaching reversed %}
  {% include short-archive-single.html %}
{% endfor %}

[Patents](/patents)
========
{% for post in site.patents reversed %}
  {% include short-archive-single.html %}
{% endfor %}