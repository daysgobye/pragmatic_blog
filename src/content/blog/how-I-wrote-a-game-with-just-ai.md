---
title: From Zero to Game - How I Programmed an Entire Video Game with Just 5 AI Prompts
excerpt: I wrote a video game with these 5 prompts in one afternoon and you can too easy no code needed.
featured: true
publishDate: Dec 9 2024
tags:
  - programing
  - game dev
seo:
  image:
    src: /ai_game_hero.png
    alt: How I programed a video game with 5 prompts

---
                                    
![How I programed a video game with 5 prompts](/ai_game_hero.png)

# From Zero to Game: How I Programmed an Entire Video Game with Just 5 AI Prompts

## Introduction

So, I know this whole blog is about anti-AI-generated content. But, like most broad statements, that’s not the full story. A better guiding principle for this blog would be pragmatism: focusing on the 20% of effort that delivers 80% of the results.  

Why did I decide to make an entire game using AI? A year ago, I had an idea to breathe new life into old, public domain books by transforming them into visual novels. The goal was to make them more accessible and appealing to modern audiences. Using AI felt like a fair compromise—after all, it would be reworking existing text rather than creating something entirely new. Spoiler alert: this didn’t work for that project.  

But on Thanksgiving, I decided to give it a shot. So I set off looking for a source story. I wanted a short book that could fit within an AI's context window multiple times and was compelling enough to read a few of times (still started skimming pretty hard). I went for [**H.P. Lovecraft**](https://en.wikipedia.org/wiki/H._P._Lovecraft). Because I love is work and I know they are short. His works are atmospheric, eerie, and perfect for the visuals of a visual novel.... After a long  search for something brief and dialogue-heavy (ideal for visual novels) but I couldn't find anything so, I settled on *"Nyarlathotep"* just being short.   

## The Process: Breaking It Down with AI Prompts  

Here’s how I used just five AI prompts to transform this story into a visual novel:

### 1. **Scene Splitting Prompt**  
**split this story into distinct scenes do not change the content at all simply split it. “<STORY>”**

The first prompt was only really needed since the source lacked formal chapters. I had to break it into manageable scenes. Think of each scene as a contained unit: everything that happens in a single location. For example, a house would be one scene; leaving it would be another.  

### 2. **View Prompt**  
Now in the same chat so we have the context the next prompt:

**now break each scene into smaller views views so if the again do not change the content at all a simple split** 

This prompt takes the scene and splits it further into views think a list of static camera shots in said house this prompt really lays the ground work for generating  the images Next


 

### 3. **Image Prompting**  
Now in the same chat so we have the context the next prompt:

**now for each view create a prompt for an image ai to describe the view**

This prompt is short and to the point and takes what's happening in said view and turns it into a prompt we can feed into another ai. you could change this if you were going a big text-image ai like stable diffusion but I knew I would be feeding it into a refined ai that can only generate one art style so it really just needed to be content no style ( more about this later) this is going to spit out a lot of prompts save them and wait for later.

### 4. **Story Refinement Prompt** 
Now in a new context start with this prompt followed by the output from prompt #2

**you are a 1800s explorer from the cthulhu universe change the perspective of the following story to be as told by you around a camp fire. change as little as possible keep as much of the source text as possible. STORY:** 

This prompt tailored the text for the visual novel format. It adjusted Lovecraft’s up until this point mostly original work into a more script-like structure. While the original text is atmospheric, a visual novel has images and the the words work better as more of a story with the images in the background.  

### 5. **Game Code Prompt**  
Now in the same chat so we have the context the next prompt:

**with the story you reworked and these images make a rpy file for renpy the vn engine <LIST OF IMAGE FILE NAMES>**

Finally, I needed a playable game. Ren'Py was an obvious choice for its simplicity and flexibility, and AI handled the code generation well. The prompt crafted the script for scenes, integrating dialogue, images, and transitions seamlessly. You can see in the generated code its quite nice and understood the goal  
![AI generated code](/ai-code.png)


## Generating the Images  

So I lied I did write some code... I built a quick tool to batch-process the prompts into images using the [model](https://huggingface.co/alvdansen/haunted_linework_flux). Good news is you dont have to write it you can use mine 😎. Now it is tool code I wrote real quick but it did the job if you have problems.... start over on your own, :P
You can check it out on [GitHub: mass image gen](https://github.com/daysgobye/mass_image_gen).  
- Use the `-m` flag to specify the model.  
- Use the `-p` flag to input the folder containing your JSON prompts.  

Below are some more of the images and corresponding prompts used to generate them 

![A decaying urban landscape under a sickly yellow sky](/ai_game_2.png)

**prompt**: "A decaying urban landscape under a sickly yellow sky. The moonlight glistens off murky green waters, and ancient church steeples crumble against the oppressive backdrop."

![A decaying urban landscape under a sickly yellow sky](/ai_game_1.png)

**prompt**: "A glowing screen displays horrifying images of ruined monuments and grotesque faces. The crowd recoils in terror, shadows flickering across their horrified faces."

## Final touches

Yeah I lied again I put in some [cc0](https://creativecommons.org/public-domain/cc0/) sound effects I found from [Opengameart](https://opengameart.org/) a killer website I love to use for quick stuff like this. Ren'py's docs were great and made it super easy for me to add 5 lines of code to have sound effects. Just read the story 1 more time and drop in the appropriate sound.

## The Result  

[*Nyarlathotep: A Visual Novel*](https://nyarlathotep.pages.dev/), is playable online [here](https://nyarlathotep.pages.dev/). Is it groundbreaking? No. Was it fun to make? Kinda. It was a fine way to spend an afternoon, test an idea, and learn more about integrating AI into creative workflows. Should you do it? No its AI garbage and The core idea to use a real book so that the writing was good is kinda sound but was thrown off by the final prompt.  

## What Could Be Improved?  

1. **Better Source Material**  
A book with more dialogue would have been ideal. More character interaction could allow AI to generate expressive poses and detailed backgrounds separately.  

2. **Choose-Your-Own-Adventure**  
 Branching narratives, would have made the game a lot more fun and really use the VN benefits.

## Tools I Used  

Creating [*Nyarlathotep: A Visual Novel*](https://nyarlathotep.pages.dev/) I used a few tools here’s what I used and why:

### **1. ChatGPT (or other LLMs)**  
**Why I Used It:** ChatGPT was the backbone of the project. I used it to craft prompts, process text, and generate Ren'Py code.  

**Alternatives:** 
* (Gemini)[https://gemini.google.com/chat] I also tried Google’s Gemini AI but found it less effective.
* Any other chat ai you like.

---

### **2. Ren'Py (Game Engine)**  
**Why I Used It:** Ren'Py is a visual novel engine that’s beginner-friendly and easy to work in. Its code structure is intuitive and clear.  

**Key Features for This Project:**  
- **Web Build Support:** Ren'Py allows exporting games as web builds, which makes sharing the final product easy.  
- **Simple Script Language:** The Ren'Py scripting language is straightforward and easy for our LLM to generate, meaning generated code required no tweaks.  

**Alternatives:** 
* Godot with (Dialogic plugin)[https://github.com/dialogic-godot/dialogic]
* (Pixi-vn)[https://pixi-vn.web.app/]
---

### **3. Image Generation AI**  
**Why I Used It:** The visual component was critical for a game like this. I chose [Haunted Linework Flux](https://huggingface.co/alvdansen/haunted_linework_flux) from Hugging Face because it had the perfect eerie aesthetic for adapting Lovecraft’s tone. This model also delivered stylistic consistency, ensuring that all images looked like they belonged to the same world.  

**Key Benefits:**  
- **Pre-Tuned Model:** Using a fine-tuned model meant I didn’t need to specify artistic styles in my prompts, saving time and effort. 


**Alternatives:** 
* (Dall-e)[https://openai.com/index/dall-e-2/]
* (Midjourney)[https://www.midjourney.com/home]

---

### **4. Mass Image Generation Tool**  
**Why I Used It:** To automate image creation, I wrote a batch-processing tool. This saved hours of repetitive work by processing the prompt array, feeding it to the AI model, and saving the generated images in a structured format.  

**Tool Overview:**  
- Built in typescript with bun to work with Hugging Face models.  
- **Usage:**  
  - Use the `-m` flag to select the model (e.g., Haunted Linework Flux).  
  - Use the `-p` flag to point to the folder containing JSON prompts.  

**Where to Find It:** The tool is open-source and available on GitHub: [mass_image_gen](https://github.com/daysgobye/mass_image_gen).  

**Alternatives:** 
* prompting and saving by hand

---

### **5. Source Text**  
**Why I Used It:** Lovecraft’s works are in the public domain, making them ideal for creative reinterpretation. I accessed the text via [H.P. Lovecraft's Official Archive](https://www.hplovecraft.com/writings/texts/#fiction), which offers a comprehensive collection.  

**Challenges with the Source:**  
- Lovecraft’s prose is rich in atmosphere but often lacks dialogue. This made adaptation harder since visual novels are more engaging when done in a conversational format.  

 
## Conclusion  

This project was an experiment in creativity and AI, proving that a Ai can really help with your work but needs to be used as just another tool much like a spell check. But handful of  prompts can take you from zero to a playable game. I hope this was a fun read and gives you some ideas, and I also hope you don't do this the visual Novel community is awesome and has so many great works they don't need more AI noise.

