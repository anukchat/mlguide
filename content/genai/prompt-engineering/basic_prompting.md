
# Prompt Engineering

Prompt engineering helps optimize prompts for better use of language models (LMs) in various tasks. It improves how developers and researchers work with large language models (LLMs), like question answering and reasoning.

## Basic Prompts

Prompts contain instructions or questions for the model, but quality depends on how detailed the input is.

*Example Prompt:*
```
The sky is
```
*Output:*
```
blue. On a cloudy day, it may be gray or white.
```

To improve, be specific:
```
Complete the sentence: The sky is
```
*Output:*
```
so beautiful today.
```

This shows how prompt engineering tailors results.


### Standard Prompts

A basic prompt format:
```
<Question>?
```
For QA tasks, try few-shot prompts:
```
Q: <Question>?
A: <Answer>

Q: <Question>?
A:
```
This helps models learn tasks with just a few examples.

### Prompt Elements

Prompts can include:
- **Instruction**: What task to perform
- **Context**: Background information
- **Input Data**: What to analyze
- **Output Indicator**: Desired response format

Not all are necessary, but they guide the model's responses.

### Designing Prompts

**👉 Start Simple**
Begin with basic prompts and iterate. Break down complex tasks into subtasks for better results.

**👉 The Instruction**
Use commands like "Summarize", "Translate", "Classify" for clarity.

**👉 Specificity**
Be clear and concise. Add examples for better output formats.

**👉  Avoid Impreciseness**
Be direct. Instead of vague commands, use specific instructions.

**👉 To Do or Not to Do?**
Focus on what to do, rather than what not to do, for clearer results.

## LLM Settings

Key settings for prompt results:

- **Temperature:** Controls randomness (higher values = more creative).
- **Top_p:** Adjusts sampling diversity.

Experiment with these to balance accuracy and creativity.

## Basic Prompts Usage

Let's see how prompts are used and introduce key concepts that will be important for the more advanced techniques. 


### Text Summarization
One of the standard tasks in natural language generation is text summarization. Text summarization can include many different flavors and domains. One of the most promising applications of language models is the ability to summarize articles and concepts into quick and easy-to-read summaries. Let's try a basic summarization task using prompts.

Let's say I am interested to learn about antibiotics, I could try a prompt like this:

*Prompt:*
```
Explain antibiotics

A:
```

*Output:*
```
Antibiotics are a type of medication used to treat bacterial infections. They work by either killing the bacteria or preventing them from reproducing, allowing the body’s immune system to fight off the infection. Antibiotics are usually taken orally in the form of pills, capsules, or liquid solutions, or sometimes administered intravenously. They are not effective against viral infections, and using them inappropriately can lead to antibiotic resistance.
```

The "A:" is an explicit prompt format that's used in question answering. I used it here to tell the model that there is an expected further. In this example, it's not clear how this is useful vs not using it but we will leave it that for later examples. Let's just assume that this is too much information and want to summarize it further. We can instruct the model to summarize into one sentence like so:

*Prompt:*
```
Antibiotics are a type of medication used to treat bacterial infections. They work by either killing the bacteria or preventing them from reproducing, allowing the body’s immune system to fight off the infection. Antibiotics are usually taken orally in the form of pills, capsules, or liquid solutions, or sometimes administered intravenously. They are not effective against viral infections, and using them inappropriately can lead to antibiotic resistance.

Explain the above in one sentence:
```

*Output:*
```
Antibiotics are medications used to treat bacterial infections by either killing the bacteria or stopping them from reproducing, but they are not effective against viruses and overuse can lead to antibiotic resistance.
```

---

### Information Extraction
While language models are trained to perform natural language generation and related tasks, it's also very capable of performing classification and a range of other natural language processing (NLP) tasks. 

Here is an example of a prompt that extracts information from a given paragraph.

*Prompt:*
```
Author-contribution statements and acknowledgements in research papers should state clearly and specifically whether, and to what extent, the authors used AI technologies such as ChatGPT in the preparation of their manuscript and analysis. They should also indicate which LLMs were used. This will alert editors and reviewers to scrutinize manuscripts more carefully for potential biases, inaccuracies and improper source crediting. Likewise, scientific journals should be transparent about their use of LLMs, for example when selecting submitted manuscripts.

Mention the large language model based product mentioned in the paragraph above:
```

*Output:*
```
The large language model based product mentioned in the paragraph above is ChatGPT.
```

Paragraph source: [ChatGPT: five priorities for research](https://www.nature.com/articles/d41586-023-00288-7) 

---

### Question Answering
One of the best ways to get the model to respond to specific answers is to improve the format of the prompt. As covered before, a prompt could combine instructions, context, input, and output indicators to get improved results.

*Prompt:*
```
Answer the question based on the context below. Keep the answer short. Respond "Unsure about answer" if not sure about the answer.

Context: Teplizumab traces its roots to a New Jersey drug company called Ortho Pharmaceutical. There, scientists generated an early version of the antibody, dubbed OKT3. Originally sourced from mice, the molecule was able to bind to the surface of T cells and limit their cell-killing potential. In 1986, it was approved to help prevent organ rejection after kidney transplants, making it the first therapeutic antibody allowed for human use.

Question: What was OKT3 originally sourced from?

Answer:
```

*Output:*
```
Mice.
```

---

### Text Classification
As a prompt engineer, you will need to get better at providing better instructions. For harder use cases, just providing instructions won't be enough. Other elements you can provide are `input data` or `examples`. 

*Prompt:*
```
Classify the text into neutral, negative or positive. 

Text: I think the food was okay. 
Sentiment:
```

*Output:*
```
Neutral
```

Let's try specifying output format by providing examples:

*Prompt:*
```
Classify the text into neutral, negative or positive. 

Text: I think the vacation is okay.
Sentiment: neutral 

Text: I think the food was okay. 
Sentiment:
```

*Output:*
```
neutral
```

---

### Conversation
Instructing the LLM system on behavior and identity is key in conversational systems.

*Prompt:*
```
The following is a conversation with an AI research assistant. The assistant tone is technical and scientific.

Human: Hello, who are you?
AI: Greeting! I am an AI research assistant. How can I help you today?
Human: Can you tell me about the creation of black holes?
AI:
```

*Output:*
```
Sure! Black holes are regions of spacetime where the gravitational force is so strong that nothing, not even light, can escape from it.
```

---

### Code Generation
LLMs are highly effective at code generation.

*Prompt:*
```
/*
Ask the user for their name and say "Hello"
*/
```

*Output:*
```
let name = prompt("What is your name?");
console.log(`Hello, ${name}!`);
```

---

### Reasoning
LLMs perform basic arithmetic and reasoning tasks.

*Prompt:*
```
What is 9,000 * 9,000?
```

*Output:*
```
81,000,000
```

---