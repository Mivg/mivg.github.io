---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I’m an AI researcher, entrepreneur, and lecturer with deep expertise in large language models (LLMs) and their practical applications. I hold a Ph.D. in Computer Science from Tel Aviv University, where I was advised by Prof. Jonathan Berant and Dr. Yair Carmon. My research focused on advancing LLMs for real-world use, with works on model scaling, long-context processing, fallback behaviors, and data curation. I graduated summa cum laude from the Hebrew University of Jerusalem and later co-founded Demystify-AI, serving as CTO and leading the development of an explainable AI platform for healthcare and finance. I’ve also built and deployed AI solutions in domains ranging from computer vision and network analysis to energy and law enforcement, with an emphasis on reliability and scalability. Today, I work at the forefront of AI research and advise leading Israeli companies on developing state-of-the-art NLP and data science products. I also designed and teach a popular NLP course at Tel Aviv University, which has trained nearly 500 students over the past two years.

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