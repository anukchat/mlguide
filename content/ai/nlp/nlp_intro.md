# Natural Language Processing

Natural language processing (NLP) is the ability of a **computer program** to **understand human language** as it is spoken and written -- referred to as natural language. 

NLP has existed for more than 50 years and has roots in the field of linguistics. The whole field is directed at helping machines understand and process the human language. 

This can then be used to perform tasks like **spell check** or **machine translation**.

NLP, as it is commonly known, is one of the best-known areas where machine learning has been applied and used in production software.

## Computational linguistics

Computational linguistics is an area of research and development over many decades that studies how **computers** can **work with**, and even **understand**, **translate**, and **communicate** with languages. 

Natural language processing (NLP) is a related field focused on how computers can process 'natural', or human, languages.

### Example - phone dictation

If you have ever dictated to your phone instead of typing or asked a virtual assistant a question, your speech was converted into a text form and then processed or *parsed* from the language you spoke. 

The detected keywords were then processed into a format that the phone or assistant could understand and act on.


### How is this technology made possible?

This is possible because a computer program was written to enable this. A few decades ago, some science fiction writers predicted that people would mostly communicate with their computers by speaking to them, and the computers would always understand exactly what they meant. 

However, it turned out to be a more difficult problem than many people imagined, and while significant progress has been made, there are still significant challenges in achieving 'perfect' natural language processing when it comes to understanding the meaning of a sentence. 

This is a particularly hard problem when it comes to understanding humor or detecting emotions such as sarcasm in a sentence.

In manny schools grammar and linguistics are taught as a dedicated subject, but in many, these topics are included as part of learning a language: either your first language in primary school (learning to read and write) and perhaps a second language in post-primary, or high school.

If you struggle with the difference between the *simple present* and *present progressive*, you are not alone. This is a challenging thing for many people, even native speakers of a language. 

The good news is that computers are really good at applying formal rules, and you will learn to write code that can *parse* a sentence as well as a human. The greater challenge you will examine later is understanding the *meaning*, and *sentiment*, of a sentence.

>[!TIP] Interesting Fact
The history of trying to make computers understand human language goes back decades, and one of the earliest scientists to consider natural language processing was ***Alan Turing***. 
>
>### **The 'Turing test'**
> 
> When **Turing** was researching *artificial intelligence* in the 1950's, he considered if a conversational test could be given to a human and computer (via typed correspondence) where the human in the conversation was not sure if they were conversing with another human or a computer.
>
> If, <mark>after a certain length of conversation, the human could not determine that the answers were from a computer or not, then could the computer be said to be *thinking* </mark>
> ### 'The imitation game'
> 
> The idea for this came from a party game called *The Imitation Game* where an interrogator is alone in a room and tasked with determining which of two people (in another room) are male and female respectively. 
> 
> The interrogator can send notes, and must <mark>try to think of questions where the written answers reveal the gender of the mystery person.</mark> Of course, the players in the other room are trying to trick the interrogator by answering questions in such as way as to mislead or confuse the interrogator, whilst also giving the appearance of answering honestly.
>
> **Reference**
> 
> Schubert, Lenhart, "Computational Linguistics", *The Stanford Encyclopedia of Philosophy* (Spring 2020 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/spr2020/entries/computational-linguistics/>.


## NLP Tasks


* **Text classification** is a typical classification problem pertaining to text sequences. 
  > Examples include 
  > 1. Classifying e-mail messages as spam vs. no-spam, 
  > 2. Categorizing articles as sport, business, politics, etc. 
  > 3. Also, when developing chat bots, we often need to understand what a user wanted to say -- in this case we are dealing with **intent classification**. 
* **Sentiment analysis** Problem where we need to know how positive/negative the meaning of a sentence is., eg. **Restaurant review** *In this restaurant, I liked the cuisine, but the atmosphere was awful*.
* **Named Entity Recognition** (NER) refers to the problem of **extracting** certain **entities** from text. For example, for sentence *I need to fly to Paris tomorrow* the word *tomorrow* refers to DATE, and *Paris* is a LOCATION.  
* **Keyword extraction** is similar to NER, but we need to extract words important to the meaning of the sentence automatically, without pre-training for specific entity types.
* **Text clustering** can be useful when we want to group together similar sentences, for example, similar requests in technical support conversations.
* **Question answering** is a task where the model receives a text passage and a question as inputs, and needs to answer the question based on the text passage.
* **Text Generation** is the ability of a model to **generate new text**. It can be considered as **classification task** that **predicts next letter/word based on some *text prompt***. Advanced text generation models, such as GPT-3, are able to solve other NLP tasks such as classification using a technique called <mark>Prompt engineering</mark>
* **Text summarization** Computer to "read" long text and summarize it in a few sentences.
* **Machine translation** is the task of translating text from one language to another.

>[!TIP] Traditional Method
Initially, most of NLP tasks were solved using traditional methods such as grammars. For example, in machine translation parsers were used to transform initial sentence into a syntax tree, then higher level semantic structures were extracted to represent the meaning of the sentence, and based on this meaning and grammar of the target language the result was generated.
>
>Nowadays, many NLP tasks are more effectively solved using neural networks.
>
> Many classical NLP methods are implemented in [Natural Language Processing Toolkit (NLTK)](https://www.nltk.org) Python library. 
> 
> There is a great [NLTK Book](https://www.nltk.org/book/) available online that covers how different NLP tasks can be solved using NLTK.


## Modules

:::: {grid} 1 2 3 4
:align: center
:margin: 0
:gutter: 0

::: {card} 1️⃣ Word Vectors
:link: ../concepts/001_traditional_nlp.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Know about word vectors in NLP.
:::

::: {card} 2️⃣ Embeddings
:link: ../concepts/002_embeddings.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Know about embeddings in NLP.
:::

::: {card} 3️⃣ N Grams using CNN
:link: ../concepts/003_ngram_cnn.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Know how to build N Gram using 1D CNN
:::

::: {card} 4️⃣ Word2Vec
:link: ../concepts/004_word2vec.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Deep dive in implementation of Word2Vec
:::

::: {card} 5️⃣ Neural Language Model
:link: ../concepts/005_language_model_basic.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Know basics of Neural Language Model
:::

::: {card} 6️⃣ RNN
:link: ../concepts/006_language_model_rnn.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Understand how RNN works
:::

::: {card} 7️⃣ Encoder Decoder
:link: ../concepts/007_encoder_decoder.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Understand how Encoder Decoder works
:::

::: {card} 8️⃣ Attention
:link: ../concepts/008_attention.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Deep dive in to implementation of Attention
:::

::: {card} 9️⃣ Transformers
:link: ../concepts/009_transformer.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Learn how to implement Transformers
:::

::: {card} NLP Tasks
:link: ../concepts/010_llm_tasks.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Learn various types of tasks NLP can perform
:::

::: {card} Appendix
:link: ../concepts/011_appendix.html
:link-type: url
:shadow: md
:margin: 3
:text-align: center

Learn other concepts of NLP
:::
::::

