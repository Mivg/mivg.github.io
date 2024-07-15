---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I’m an AI researcher, entrepreneur, and lecturer with extensive experience in practical applications of large language models (LLMs). As a Ph.D. candidate at Tel-Aviv University, advised by <a href="http://www.cs.tau.ac.il/~joberant/" target="_blank" rel="noopener noreferrer">Prof. Jonathan Berant'</a> and <a href="https://www.cs.tau.ac.il/~ycarmon/" target="_blank" rel="noopener noreferrer">Dr. Yair Carmon'</a>, I focus on improving LLMs for real-world use. I graduated summa cum laude from the Hebrew University of Jerusalem and am on track to graduate with my Ph.D. from Tel-Aviv University.<br/>I co-founded <a href="http://www.demystify-ai.com" target="_blank" rel="noopener noreferrer">Demystify-AI</a>, where I served as CTO, developing an innovative explainable AI platform for healthcare and finance. Previously, I implemented advanced AI solutions for computer vision, network analysis, and more for the energy industry as well as for government law enforcement, gaining valuable experience in deploying highly dependable and scalable products.<br/>Currently, I work with Meta’s GenAI team and consult for leading Israeli companies on developing cutting-edge NLP and data science products. Additionally, I developed and teach a popular NLP course at Tel-Aviv University, which has educated nearly 500 students over the past two years.

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