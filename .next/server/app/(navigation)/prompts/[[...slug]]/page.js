(()=>{var e={};e.id=2784,e.ids=[2784],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},75092:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d}),a(28965),a(69826),a(66281),a(49722),a(70294),a(74663);var n=a(90769),i=a(59863),o=a(40674),r=a.n(o),s=a(92175),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);a.d(t,l);let d=["",{children:["(navigation)",{children:["prompts",{children:["[[...slug]]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,28965)),"/Users/fasu/faruxue/ray-so/app/(navigation)/prompts/[[...slug]]/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,69826)),"/Users/fasu/faruxue/ray-so/app/(navigation)/prompts/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,66281)),"/Users/fasu/faruxue/ray-so/app/(navigation)/layout.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,49722)),"/Users/fasu/faruxue/ray-so/app/(navigation)/loading.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,251))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,70294)),"/Users/fasu/faruxue/ray-so/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,74663)),"/Users/fasu/faruxue/ray-so/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,251))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/fasu/faruxue/ray-so/app/(navigation)/prompts/[[...slug]]/page.tsx"],p="/(navigation)/prompts/[[...slug]]/page",m={require:a,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(navigation)/prompts/[[...slug]]/page",pathname:"/prompts/[[...slug]]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},75374:(e,t,a)=>{Promise.resolve().then(a.bind(a,19320)),Promise.resolve().then(a.bind(a,8293))},19320:(e,t,a)=>{"use strict";a.d(t,{Prompts:()=>B});var n=a(91861),i=a(49874),o=a(96464),r=a.n(o),s=a(48718),l=a(2112),d=a(73907);function c(e,t){return`

${e}: {selection}

${t}:`}let p=[{id:"inspect-website",title:"Inspect Website",prompt:`Describe me the tech stack used based on the following HTML document:

{browser-tab format="html"}

Consider every element of a tech stack, from frameworks to APIs through tools (analytics, monitoring, etc.). Include which fonts are used. Don't make any guesses on what’s used if there’s no evidence.`,creativity:"low",date:"2024-03-18",icon:"globe-01",model:"anthropic-claude-haiku"},{id:"summarize-youtube-video",title:"Summarize YouTube Video",prompt:`Create a summary of a YouTube video using its transcript. You will use the following template:

"""
## Summary
{Multiple sentences summarising the YouTube video}

## Notes
{Bullet points that summarize the key points or important moments from the video’s transcript with explanations}

## Quotes
{Extract the best sentences from the transcript in a list}
"""

Transcript: {browser-tab}`,creativity:"low",model:"anthropic-claude-haiku",date:"2024-03-18",icon:"play-filled"}],m=[{id:"json-data",title:"Natural Language Processing",prompt:`Act as a natural language processing software. Analyze the given text and return me only a parsable and minified JSON object.


Here's the JSON Object structure:
{
  "key1": /* Some instructions */,
  "key2": /* Some instructions */,
}

Here are the rules you must follow:
- You MUST return a valid, parsable JSON object.
- More rules…

Here are some examples to help you out:
- Example 1…
- Example 2…`+c("Text","JSON Data"),creativity:"low",date:"2023-12-22",icon:"code"},{id:"css-to-tailwind",title:"Convert CSS code to Tailwind Classes",prompt:"Convert the following code into Tailwind CSS classes and give me the result in a code block. Make sure to remove any browser prefixes. Only give me what I can put into my HTML elements `class` properties."+c("Code","Tailwind CSS classes"),creativity:"low",date:"2023-06-06",icon:"code"},{id:"linux-terminal",title:"Linux Terminal",prompt:"Act as a linux terminal. Execute the following code and reply with what the terminal should show. Only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations."+c("Code","Terminal"),creativity:"medium",date:"2023-06-06",icon:"code"},{id:"code-interpreter",title:"Code Interpreter",prompt:"Act as a {argument name=language} interpreter. Execute the {argument name=language} code and reply with the output. Do not provide any explanations."+c("Code","Output"),creativity:"medium",date:"2023-06-06",icon:"code"},{id:"git-commands",title:"Git Commands",prompt:"Translate the text to Git commands. Only reply one unique code block, and nothing else. Do not write explanations."+c("Text","Git commands"),creativity:"low",date:"2023-06-06",icon:"code"},{id:"regex-generator",title:"Regex Generator",prompt:"Generate a regular expression that match the specific patterns in the text. Return the regular expression in a format that can be easily copied and pasted into a regex-enabled text editor or programming language. Then, give clear and understandable explanations on what the regex is doing and how it is constructed."+c("Text","Regex"),creativity:"medium",date:"2023-06-06",icon:"code"},{id:"convert-html-to-markdown",title:"Convert HTML to Markdown",prompt:"Convert the HTML code to Markdown."+c("HTML code","Markdown"),creativity:"none",date:"2023-06-06",icon:"code"},{id:"add-debug-statements",title:"Add Debug Statements",prompt:"Act as a software engineer debugging its code. Add debug statements to the code. Add as many as necessary to make debugging easier."+c("Code","Debugged code"),creativity:"medium",date:"2023-06-06",icon:"bug"},{id:"write-tests",title:"Write Tests",prompt:"As a software developer, I am currently working on a project using Jest, TypeScript, and React Testing Library. I would like you to help me generate unit tests for the given code. Analyze the given code and provide a single unit test with the necessary imports, without any additional explanations or comments, unless absolutely necessary. Avoid repeating imports and mocks you've mentioned already.\n\nIf I say 'next,' please give me another test for the same code. In case I submit new code, please discard the previous code and start generating tests for the new one. Prioritize testing the code logic in different scenarios as the first priority in testing.\n\nIf I provide specific instructions or ask you to test a particular part or scenario, please follow those instructions and generate the unit test accordingly. If I send you a Jest error, fix the problem and only return the lines which need to be changed in a readable format. Please format the output as a unique code block."+c("Code","Output"),creativity:"medium",date:"2023-06-06",icon:"bug",author:{name:"Alireza Sheikholmolouki",link:"https://github.com/Alireza29675"}},{id:"write-docstring",title:"Write Docstring",prompt:"Write a docstring for the function. Make sure the documentation is detailed."+c("Function","Docstring"),creativity:"low",date:"2023-06-06",icon:"blank-document"},{id:"convert-to-crontab",title:"Convert to Crontab Schedule",prompt:`Act as a knowledgable unix server admin. Given a cronjob schedule in natural language, respond with the correct crontab format for this exact schedule. Double-check your results, ensure it's valid crontab syntax, and respond with nothing but the crontab format.

Example Schedule: at 5:30am every tuesday in may
Expected Crontab: 30 5 * 5 2

Schedule: {argument name="schedule"}
Crontab: `,creativity:"low",date:"2024-04-21",icon:"code",author:{name:"Philipp Daun",link:"https://github.com/daun"}}],h=[{id:"translate-to-language",title:"Translate to Language",prompt:"Translate the text in {argument name=language}."+c("Text","Translation"),creativity:"low",date:"2023-06-06",icon:"speech-bubble"},{id:"decline-mail",title:"Decline this Mail",prompt:"Write a polite and friendly email to decline the following email. The email should be written in a way that it can be sent to the recipient."+c("Email","Declined email"),creativity:"low",date:"2023-06-06",icon:"envelope"},{id:"ask-question",title:"Ask Question",prompt:"Rewrite the following text as a concise and friendly message, phrased as a question. This should be written in a way that it can be sent in a chat application like Slack."+c("Text","Question"),creativity:"low",date:"2023-06-06",icon:"question-mark-circle"},{id:"bluf-message",title:"BLUF Message",prompt:`Rewrite the following text as a bottom line up front (BLUF) message formatted in Markdown. The format of the message should be made of two parts:

- The first part should be written in bold and convey the message's key information. It can either be a statement or a question. Don't lose any important detail in this part.
- The second part should be put onto a new line. This should give more details and provide some background about the message.

Make sure the message stays concise and clear so that readers don't lose extra time reading it.`+c("Text","Rewritten text"),creativity:"low",date:"2023-06-06",icon:"speech-bubble-active"},{id:"summarize-long-email",title:"Summarize Long Emails",prompt:`Help me summarize the key points from the email text into a maximum of 5 bullet points, each preferably one sentence, and at most two sentences. Also, identify any action items requested of me.

Key points:
<one-liner one>
<one-liner two>
...

Asked from you:
<action point one>
<action point two>

If there are no action items, the "Asked from you" section will be left empty.`+c("Email","Output"),creativity:"low",date:"2023-06-06",icon:"envelope",author:{name:"Alireza Sheikholmolouki",link:"https://github.com/Alireza29675"}},{id:"debate-controversial-topic",title:"Debate a Topic",prompt:"Take a stance on the topic and {argument default=for} it. Construct a convincing argument and provide evidence to support your stance."+c("Topic","Argument"),creativity:"high",date:"2023-06-06",icon:"speech-bubble-important"},{id:"create-calendar-event",title:"Create a Calendar Event",prompt:"Create a calendar event in ICS format based on the information. Include the start time, the end time, the location, all attendees, and a summary. If no end time is provided, assume the event will be one hour long. Add a reminder 1 hour before the event starts and 1 day before the event starts. Don't include the PRODID property. Only output the code block. Don't add any comments."+c("Information","ICS"),creativity:"medium",date:"2023-06-06",icon:"calendar",author:{name:"Roel Van Gils",link:"https://github.com/roelvangils"}},{id:"break-up-wall-of-text",title:"Break Up Wall of Text",prompt:`Take the wall of text below and write a cleaned up version inserting naturally appropriate paragraph breaks. It's important that the text does not change, only the whitespace.

Wall of text:
{selection}

Cleaned up version:
`,creativity:"none",date:"2023-11-06",icon:"paragraph"},{id:"summarize-and-sympathize",title:"Summarize and sympathize text",prompt:"Please summarize and omit the following. Then express your empathy."+c("Text","Sympathy"),creativity:"low",date:"2023-06-12",icon:"speech-bubble",author:{name:"nagauta",link:"https://github.com/nagauta"}},{id:"fill-the-gap",title:"Fill in the gap",prompt:`Use the following instructions to rewrite the text

Give me 5 words that most accurarely fill in the blank in a sentence.

The blank is represented by a few underscores, such as ___, or ______.

So for example: "I'm super ___ to announce my new product".

1. I'm super happy to announce my new product
2. I'm super excited to announce my new product
3. I'm super pumped to announce my new product
4. I'm super proud to announce my new product
5. I'm super nervous to announce my new product

Now do the same for this sentece:`+c("Text","Rewritten text"),creativity:"high",date:"2023-08-03",icon:"speech-bubble",author:{name:"peduarte",link:"https://github.com/peduarte"}}],u=[{id:"youtube-script",title:"Create a YouTube Script",prompt:"Create a compelling and captivating YouTube script based on the text. Make sure to include B-Rolls in the script. Make the script as long as necessary to make a video of {argument name=minutes default=10} minutes."+c("Text","Script"),creativity:"high",date:"2023-06-06",icon:"image"},{id:"midjourney-prompt-generator",title:"Midjourney Prompt Generator",prompt:`Based on the text, generate an "imagine prompt" that contains a maximum word count of 1,500 words that will be used as input for an AI-based text to image program called MidJourney based on the following parameters: /imagine prompt: [1], [2], [3], [4], [5], [6]

In this prompt, [1] should be replaced with a random subject and [2] should be a short concise description about that subject. Be specific and detailed in your descriptions, using descriptive adjectives and adverbs, a wide range of vocabulary, and sensory language. Provide context and background information about the subject and consider the perspective and point of view of the image. Use metaphors and similes sparingly to help describe abstract or complex concepts in a more concrete and vivid way. Use concrete nouns and active verbs to make your descriptions more specific and dynamic.

[3] should be a short concise description about the environment of the scene. Consider the overall tone and mood of the image, using language that evokes the desired emotions and atmosphere. Describe the setting in vivid, sensory terms, using specific details and adjectives to bring the scene to life.

[4] should be a short concise description about the mood of the scene. Use language that conveys the desired emotions and atmosphere, and consider the overall tone and mood of the image.

[5] should be a short concise description about the atmosphere of the scene. Use descriptive adjectives and adverbs to create a sense of atmosphere that considers the overall tone and mood of the image.

[6] should be a short concise description of the lighting effect including Types of Lights, Types of Displays, Lighting Styles and Techniques, Global Illumination and Shadows. Describe the quality, direction, colour and intensity of the light, and consider how it impacts the mood and atmosphere of the scene. Use specific adjectives and adverbs to convey the desired lighting effect, consider how the light will interact with the subject and environment.

It's important to note that the descriptions in the prompt should be written back to back, separated with commas and spaces, and should not include any line breaks or colons. Do not include any words, phrases or numbers in brackets, and you should always begin the prompt with "/imagine prompt: ".

Be consistent in your use of grammar and avoid using cliches or unnecessary words. Be sure to avoid repeatedly using the same descriptive adjectives and adverbs. Use negative descriptions sparingly, and try to describe what you do want rather than what you don't want. Use figurative language sparingly and ensure that it is appropriate and effective in the context of the prompt. Combine a wide variety of rarely used and common words in your descriptions.

The "imagine prompt" should strictly contain under 1,500 words. Use the end arguments "--c X --s Y --q 2" as a suffix to the prompt, where X is a whole number between 1 and 25, where Y is a whole number between 100 and 1000 if the prompt subject looks better vertically, add "--ar 2:3" before "--c" if the prompt subject looks better horizontally, add "--ar 3:2" before "--c" Please randomize the values of the end arguments format and fixate --q 2. Please do not use double quotation marks or punctuation marks. Please use randomized end suffix format.`+c("Text","Midjourney Prompt"),creativity:"high",date:"2023-06-06",icon:"image"},{id:"generate-icons",title:"Generate Icons",prompt:"Generate base64 data URIs of 100x100 SVG icons representing the text. Do not provide any commentary other than the list of data URIs as markdown images. For each icon, explain how it relates to the text."+c("Text","Icons"),creativity:"maximum",date:"2023-06-06",icon:"image",author:{name:"Stephen Kaplan",link:"https://github.com/SKaplanOfficial"}}],g=[{id:"write-story",title:"Write a Story",prompt:"Write a story based on the text. Make the story engaging. The story shouldn't be more than {argument name=number default=500} words."+c("Text","Story"),creativity:"high",date:"2023-06-06",icon:"pencil"},{id:"blog-post",title:"Write a Blog Post",prompt:"Write a blog post on the topic. Don't use more than {argument name=number default=1000} words"+c("Topic","Blog post"),creativity:"high",date:"2023-06-06",icon:"pencil"},{id:"twitter-thread",title:"Twitter Thread",prompt:"Convert the text into a list of tweets (= Twitter thread). The first tweet should be clear and engaging. Each tweet should flow smoothly into the next, building anticipation and momentum. The last tweet should be impactful so that the user can reflect on the whole thread. Make sure each tweet doesn't exceed 280 characters. Don't add a single hashtag to any of the tweets."+c("Text","Tweets"),creativity:"medium",date:"2023-06-06",icon:"bird"}],y=[{id:"write-a-song",title:"Write a Song",prompt:"Write a song based on the given text. The song should have a clear melody, lyrics that tell a story, and a memorable chorus. The mood of the song should be {argument name=mood}."+c("Text","Song"),creativity:"high",date:"2023-06-06",icon:"music"},{id:"playlist-maker",title:"Playlist Maker",prompt:"Act as a song recommender. Based on the given song, create a playlist of 10 similar songs. Provide a name and description for the playlist. Do not choose songs that are the same name or artist. Do not include the original song in the playlist."+c("Song","Playlist"),creativity:"high",date:"2023-06-06",icon:"music"}],f=[{id:"write-alternatives",title:"Write 10 Alternatives",prompt:"Give me 10 alternative versions of the text. Ensure that the alternatives are all distinct from one another."+c("Text","Alternatives"),creativity:"high",date:"2023-06-06",icon:"shuffle"},{id:"project-ideas",title:"Project Ideas",prompt:"Brainstorm 5 project ideas based on the text. Make sure the ideas are distinct from one another."+c("Text","Ideas"),creativity:"high",date:"2023-06-06",icon:"shuffle",author:{name:"Stephen Kaplan",link:"https://github.com/SKaplanOfficial"}},{id:"create-analogies",title:"Create Analogies",prompt:"Develop {argument name=number default=3} creative analogies or metaphors that help explain the main idea of the text."+c("Text","Analogies"),creativity:"high",date:"2023-06-06",icon:"light-bulb"}],x=[{name:"Code",slug:"/code",prompts:[...m],icon:"code"},{name:"Browser",slug:"/browser",prompts:[...p],icon:"globe-01"},{name:"Communication",slug:"/communication",prompts:[...h],icon:"envelope"},{name:"Image",slug:"/image",prompts:[...u],icon:"image"},{name:"Writing",slug:"/writing",prompts:[...g],icon:"pencil"},{name:"Music",slug:"/music",prompts:[...y],icon:"music"},{name:"Ideas",slug:"/ideas",prompts:[...f],icon:"light-bulb"},{name:"Fun",slug:"/fun",prompts:[{id:"act-as-a-character",title:"Act As a Character",prompt:"Rewrite the text as if you were {argument name=character default=yoda}. Use {argument name=character default=yoda}'s tone, manner and vocabulary. You must know all of the knowledge of {argument name=character default=yoda}."+c("Text","Rewritten text"),creativity:"medium",date:"2023-06-06",icon:"person"},{id:"drunkgpt",title:"DrunkGPT",prompt:"Rewrite the text as if you were drunk."+c("Text","Rewritten text"),creativity:"medium",date:"2023-06-06",icon:"game-controller"}],icon:"game-controller"},{name:"Misc",slug:"/misc",prompts:[{id:"tldr",title:"TL;DR",prompt:"Extract all facts from the text and summarize it in all relevant aspects in up to seven bullet points and a 1-liner summary. Pick a good matching emoji for every bullet point."+c("Text","Summary"),creativity:"low",date:"2023-06-06",icon:"bullet-points"},{id:"title-case",title:"Title Case",prompt:"Convert {selection} to title case.",creativity:"low",date:"2023-06-06",icon:"text"},{id:"emoji-suggestion",title:"Emoji Suggestion",prompt:"Suggest emojis that relate to the text. Suggest around 10 emojis and order them by relevance. Don't add any duplicates. Only respond with emojis."+c("Text","Emojis"),creativity:"medium",date:"2023-06-06",icon:"emoji"},{id:"find-synonyms",title:"Find Synonyms",prompt:"Find synonyms for the word {selection} and format the output as a list. Words should exist. Do not write any explanations. Do not include the original word in the list. The list should not have any duplicates.",creativity:"medium",date:"2023-06-06",icon:"text"},{id:"create-recipe",title:"Give Me a Recipe",prompt:"Give me a recipe based on the ingredients. The recipe should be easy to follow."+c("Ingredients","Recipe"),creativity:"medium",date:"2023-06-06",icon:"bullet-points"},{id:"create-action-items",title:"Create Action Items",prompt:"Generate a markdown list of action items to complete based on the text, using a unique identifier for each item as bold headings. If there are any errors in the text, make action items to fix them. In a sublist of each item, provide a description, priority, estimated level of difficulty, and a reasonable duration for the task."+c("Text","Action items"),creativity:"medium",date:"2023-06-06",icon:"check-circle",author:{name:"Stephen Kaplan",link:"https://github.com/SKaplanOfficial"}},{id:"create-task-list",title:"Create Task List",prompt:"List detailed action steps in markdown format based on the provided text. Ensure the tasks can be efficiently completed."+c("Text","Tasks"),creativity:"medium",date:"2024-05-04",icon:"flag",author:{name:"Abner Shang",link:"https://www.linkedin.com/in/abnershang/"}},{id:"extract-email-addresses",title:"Extract Email Addresses",prompt:"Extract all email addresses in the text and list them using markdown. Include anything that might be an email address. If possible, provide the name of the person or company to which the email address belongs."+c("Text","Email addresses"),creativity:"low",date:"2023-06-06",icon:"envelope",author:{name:"Stephen Kaplan",link:"https://github.com/SKaplanOfficial"}},{id:"extract-phone-numbers",title:"Extract Phone Numbers",prompt:"Identify all phone numbers in the text and list them using markdown. Include anything that might be a phone number. If possible, provide the name of the person or company to which the phone number belongs."+c("Text","Phone numbers"),creativity:"low",date:"2023-06-06",icon:"phone",author:{name:"Stephen Kaplan",link:"https://github.com/SKaplanOfficial"}},{id:"extract-links",title:"Extract Links",prompt:"Extract links in the text. Do not provide any commentary other than the list of Markdown links."+c("Text","Links"),creativity:"low",date:"2023-06-06",icon:"link",author:{name:"Stephen Kaplan",link:"https://github.com/SKaplanOfficial"}},{id:"pros-and-cons",title:"Pros & Cons",prompt:"List pros and cons for the text based on the topics mentioned. Format the response as a markdown list of pros and cons. Do not provide any other commentary."+c("Text","Pros & Cons"),creativity:"low",date:"2023-06-06",icon:"bullet-points",author:{name:"Stephen Kaplan",link:"https://github.com/SKaplanOfficial"}},{id:"eli",title:"Explain Like I'm a…",prompt:`Explain the text like I’m a {argument name=identity default="5 year old"}`+c("Text","Explanation"),creativity:"low",date:"2023-06-06",icon:"book"},{id:"text-analysis",title:"Text Analysis",prompt:"Analyze the text and provide insights on its tone, style, and potential audience."+c("Text","Analysis"),creativity:"medium",date:"2023-06-06",icon:"magnifying-glass"},{id:"summarize-product-reviews",title:"Summarize Product Reviews",prompt:`Carefully read the product reviews below. Translate them to English and create a summary of all the reviews in English and list them as Pros and Cons in the bullet point format. Remember that each bullet point should be one sentence or at max two short sentences. Most frequently mentioned should come first in each list and every bullet point should have a percentage showing how much evidence the reviews have brought for that pro or con. For example if reviews are mentioning that product is going bad easily and they brought some reasons for what they are saying, the percentage of your confidence should go higher, but if there are some reviews which are unsure about something or there are no evidence or it's not repeated frequently then the percentage should go lower. At the end you should write a paragraph about what I should pay attention to, before buying this product. These can be some warnings or some tips or some suggestions, points that I will miss, or anything that you think is important to know before buying this product.

You can use the following template to create the summary:

'''
## Summary of the reviews

**✅ Pros:**
- Pro 1 - percentage of your confidence%
- Pro 2 - percentage of your confidence%
...
- Pro n - percentage of your confidence%

**❌ Cons:**
- Con 1 - percentage of your confidence%
- Con 2 - percentage of your confidence%
...
- Con n - percentage of your confidence%

**💡 You should pay attention to:**
- Tip 1
- Tip 2
...
- Tip n
'''`+c("Product reviews","Summary"),creativity:"low",date:"2023-06-16",icon:"tag",author:{name:"Alireza Sheikholmolouki",link:"https://github.com/Alireza29675"}}],icon:"folder"},{name:"Raycast Prompts",slug:"/raycast",prompts:[{id:"improve-writing-custom",title:"Improve Writing - Editable",prompt:`Act as a spelling corrector, content writer, and text improver/editor. Reply to each message only with the rewritten text
Stricly follow these rules:
- Correct spelling, grammar, and punctuation errors in the given text
- Enhance clarity and conciseness without altering the original meaning
- Divide lengthy sentences into shorter, more readable ones
- Eliminate unnecessary repetition while preserving important points
- Prioritize active voice over passive voice for a more engaging tone
- Opt for simpler, more accessible vocabulary when possible
- ALWAYS ensure the original meaning and intention of the given text
- (maintainOriginalLanguage)
- ALWAYS maintain the existing tone of voice and style, e.g. formal, casual, polite, etc.
- NEVER surround the improved text with quotes or any additional formatting
- If the text is already well-written and requires no improvement, don't change the given text`+c("Text","Improved Text"),creativity:"low",date:"2024-04-23",icon:"raycast-logo-neg",model:"anthropic-claude-haiku"},{id:"fix-spelling-and-grammar-custom",title:"Fix Spelling and Grammar - Editable",prompt:`Act as a spelling corrector and improver. (replyWithRewrittenText)

Strictly follow these rules:
- Correct spelling, grammar and punctuation
- (maintainOriginalLanguage)
- NEVER surround the rewritten text with quotes
- (maintainURLs)
- Don't change emojis`+c("Text","Fixed Text"),creativity:"low",date:"2024-04-23",icon:"raycast-logo-neg",model:"openai-gpt-3.5-turbo"},{id:"explain-this-in-simple-terms-custom",title:"Explain This in Simple Terms - Editable",prompt:`Act as a dictionary and encyclopedia, providing clear and concise explanations for given words or concepts.

Strictly follow these rules:
- Explain the text in a simple and concise language
  - For a single word, provide a brief, easy-to-understand definition
  - For a concept or phrase, give a concise explanation that breaks down the main ideas into simple terms
- Use examples or analogies to clarify complex topics when necessary
- Only reply with the explanation or definition

Some examples:
Text: Philosophy
Explanation: Philosophy is the study of the fundamental nature of knowledge, reality, and existence. It is a system of ideas that attempts to explain the world and our place in it. Philosophers use logic and reason to explore the meaning of life and the universe.`+c("Text","Explanation"),creativity:"low",date:"2024-04-23",icon:"raycast-logo-neg",model:"openai-gpt-3.5-turbo"},{id:"make-longer-custom",title:"Make Longer - Editable",prompt:`Act as a professional content writer tasked with expanding a client's text while maintaining its essence and style. (replyWithRewrittenText)

Stictly follow these rules:
- ALWAYS preserve the original tone, voice, and language of the text
- Identify and expand the most critical information and key points
- Avoid repetition
- Stay factual close to the provided text
- Keep URLs in their original format without replacing them with markdown links
- Only reply with the expanded text`+c("Text","Expanded text"),creativity:"high",date:"2024-04-23",icon:"raycast-logo-neg",model:"openai-gpt-3.5-turbo"},{id:"make-shorter-custom",title:"Make Shorter - Editable",prompt:`Act as a professional content writer tasked with shortening a client's text while maintaining its essence and style. (replyWithRewrittenText)

Strictly follow these rules:
- ALWAYS preserve the original tone, voice, and language of the text
- Identify and retain the most critical information and key points
- Eliminate redundancies and repetitive phrases or sentences
- Keep URLs in their original format without replacing them with markdown links
- Ensure the shortened text flows smoothly and maintains coherence
- Aim to reduce the word count as much as possible without compromising the core meaning and style
- Only reply with the shortend text`+c("Text","Shortened text"),creativity:"low",date:"2024-04-23",icon:"raycast-logo-neg",model:"anthropic-claude-haiku"},{id:"change-tone-to-professional",title:"Change Tone to Professional - Editable",prompt:`Act as a professional content writer and editor. (replyWithRewrittenText)

Strictly follow these rules:
- Professional tone of voice
- Formal language
- Accurate facts
- Correct spelling, grammar, and punctuation
- Concise phrasing
- meaning  unchanged
- Length retained
- (maintainURLs)
(maintainOriginalLanguage)`+c("Text","Rewritten text"),creativity:"low",date:"2024-04-23",icon:"raycast-logo-neg",model:"openai-gpt-3.5-turbo"},{id:"change-tone-to-friendly",title:"Change Tone to Friendly - Editable",prompt:`Act as a content writer and editor. (replyWithRewrittenText)

Strictly follow these rules:
- Friendly and optimistic tone of voice
- Correct spelling, grammar, and punctuation
- Meaning unchanged
- Length retained
- (maintainURLs)
- (maintainOriginalLanguage)`+c("Text","Rewritten text"),creativity:"low",date:"2024-04-23",icon:"raycast-logo-neg",model:"openai-gpt-3.5-turbo"},{id:"change-tone-to-confident-custom",title:"Change Tone to Confident - Editable",prompt:`Act as a content writer and editor. (replyWithRewrittenText)

Strictly follow these rules:
- Use confident, formal and friendly tone of voice
- Avoid hedging, be definite where possible
- Skip apologies
- Focus on main arguments
- Correct spelling, grammar, and punctuation
- Keep meaning unchanged
- Keep length retained
- (maintainURLs)
- (maintainOriginalLanguage)`+c("Text","Rewritten text"),creativity:"low",date:"2024-04-23",icon:"raycast-logo-neg",model:"openai-gpt-3.5-turbo"},{id:"change-tone-to-casual-custom",title:"Change Tone to Casual - Editable",prompt:`Act as a content writer and editor. (replyWithRewrittenText)

Strictly follow these rules:
- Use casual and friendly tone of voice
- Use active voice
- Keep sentences shorts
- Ok to use slang and contractions
- Keep grammatical person
- Correct spelling, grammar, and punctuation
- Keep meaning unchanged
- Keep length retained
- (maintainURLs)
- (maintainOriginalLanguage)`+c("Text","Rewritten text"),creativity:"low",date:"2024-04-23",icon:"raycast-logo-neg",model:"openai-gpt-3.5-turbo"},{id:"rephrase-as-tweet-custom",title:"Rephrase as Tweet - Editable",prompt:`You're an expert in the field and have the perfect opportunity to share your ideas and insights with a huge audience!. Rewrite the text as a tweet that is:
- Casual and upbeat
- Creative and catchy
- Focused on key takeaways that challenge the status quo
- Engaging and punchy
- (maintainURLs)
- IMPORTANT: less than 25 words.
- IMPORTANT: doesn't include hash, hashtags and words starting with #, i.e. #innovation #Technology
- (maintainOriginalLanguage)

Text:
The concept of Rayday is simple. Every Friday, everyone can use the day to work on something that benefits Raycast. From new features, to fixing bugs, drafting documentation or tidying up, it’s time for us to take a break from project work. As well as getting creative with our own ideas, it’s a great chance to act on feedback from our users and community too.

Tweet:
⚒️ We hack every Friday – we call it 'Rayday'. Everyone can use the day to work on something that benefits Raycast – aside from normal project work.`+c("Text","Tweet"),creativity:"high",date:"2024-04-23",icon:"raycast-logo-neg",model:"openai-gpt-3.5-turbo"},{id:"explain-code-custom",title:"Explain Code Step by Step - Editable",prompt:`Act as a software engineer with deep understanding of any programming language and it's documentation. Explain how the code works step by step in a list. Be concise with a casual tone of voice and write it as documentation for others.

Code:
\`\`\`
function GoToPreviousPageAction() {
  const [page, setPage] = useGlobalState("page");
  return (
    <Action
      icon={Icon.ArrowLeftCircle}
      title="Go to Previous Page"
      shortcut={{ modifiers: ["cmd"], key: "[" }}
      onAction={() => setPage(Math.max(page - 1, 0))}
    />
  );
}
\`\`\`

Explanation:
The code is a React component that goes to the previous page.
1. The component renders an 'Action' component with an icon, title, and shortcut.
3. The 'useGlobalState' hook is used to get the current page number from the global state.
4. The 'onAction' prop is used to set the page number to one less than the current page number.
5. This will cause the page to go back one page when the action is taken.
6. The page is capped at 0 so that the page is never negative.`+c("Code","Explanation"),creativity:"medium",date:"2024-04-23",icon:"raycast-logo-neg",model:"openai-gpt-3.5-turbo"},{id:"find-bugs-custom",title:"Find Bugs in Code - Editable",prompt:`Act as a software engineer with deep understanding of any programming language. Review the code to fix logical bugs in the code. Only consider the provided context, answer concisely and add a codeblock with the proposed code changes. If you can't confidently find bugs, answer with "Nothing found - LGTM 👍"..

Code:
\`\`\`
function PrevAction() {
  const [page, setPage] = useGlobalState("page");
  return (
    <Action
      title="Go to Previous Page"
      onAction={() => setPage(page - 1)}
    />
  );
}
\`\`\`

Review:
The code is missing a check to make sure \`page\` is greater than 0 before subtracting 1. Otherwise, the page could be set to -1 which might cause unexpected behavior.
\`\`\`
function PrevAction() {
  const [page, setPage] = useGlobalState("page");
  return (
    <Action
      title="Go to Previous Page"
      onAction={() => setPage(Math.max(page - 1, 0))}
    />
  );
}
\`\`\`

Code:
\`\`\`
private func submit(_ text: String) {
  guard !text.isEmpty else { return }
  let prompt = OpenAIPrompt(prompt: text, imitateChatGPT: true)
  submit(prompt)
}
\`\`\`

Review:
Nothing found - LGTM 👌`+c("Code","Review"),creativity:"medium",date:"2024-04-23",icon:"raycast-logo-neg",model:"openai-gpt-3.5-turbo"},{id:"summarize-website-custom",title:"Summarize Website - Editable",prompt:`Summarize the provided website with the following format:
"""
## <concise and easy-to-read website title>

<one to two sentence summary with the most important information>

### Key Takeaways

- <EXACTLY three bullet points with the key takeaways, keep the bullet points as short as possible>
"""

Some rules to follow precisely:
- ALWAYS capture the tone, perspective and POV of the author
- NEVER come up with additional information

Here's the website information:
{browser-tab}`,creativity:"low",date:"2024-03-21",icon:"raycast-logo-neg",model:"anthropic-claude-haiku"}],icon:"raycast-logo-neg"}].map(e=>({...e,iconComponent:d.PJP[e.icon],prompts:e.prompts.map(e=>({...e,iconComponent:d.PJP[e.icon]}))})),w={name:"New",slug:"/new",prompts:x.flatMap(e=>e.prompts).filter(e=>{let t=new Date;return t.setDate(t.getDate()-14),new Date(e.date)>=t}).sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()),icon:"calendar",iconComponent:d.PJP.calendar},b=[...w.prompts.length>0?[w]:[],...x];var v=a(48280),k=a(47172),T=a(13639),j=a.n(T),C=a(57712),A=a.n(C),S=a(63615),I=a(42112),P=a(1932),R=a(37068),E=a(73020),_=a(45594),N=a.n(_);function M(){return(0,n.jsxs)("div",{className:N().root,children:[(0,n.jsxs)("div",{className:N().skeletons,children:[n.jsx(D,{}),n.jsx(D,{selected:!0}),n.jsx(D,{}),n.jsx(D,{}),n.jsx(L,{})]}),n.jsx("h3",{className:N().title,children:"Install AI Commands"}),(0,n.jsxs)("p",{className:N().description,children:["Select a prompt by clicking on it. Hold ",n.jsx("kbd",{"data-variant":"small",children:"⌘"})," to select multiple. Click"," ",n.jsx("strong",{children:"Add to Raycast"})," to import them directly."]}),n.jsx(I.z,{variant:"primary",disabled:!0,children:"Add to Raycast"})]})}function D({selected:e=!1}){return(0,n.jsxs)("div",{className:N().skeleton,"data-selected":e,children:[n.jsx("div",{className:N().skeletonPrimary}),n.jsx("div",{className:N().skeletonSecondary})]})}let L=()=>(0,n.jsxs)("svg",{className:N().skeletonCursor,width:"12",height:"18",viewBox:"0 0 12 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{width:"12",height:"18",fill:"white",fillOpacity:"0.01"}),n.jsx("path",{d:"M9.51124 11.5H4.94536C4.66188 11.5 4.39171 11.6203 4.20207 11.831L1.74329 14.563C1.1302 15.2442 0 14.8105 0 13.894V2.3434C0 1.46271 1.05606 1.01206 1.69191 1.62141L10.2031 9.77801C10.8538 10.4016 10.4124 11.5 9.51124 11.5Z",fill:"#888888"}),n.jsx("path",{d:"M7.64353 10.3273L4.26005 10.0234C4.09699 10.0088 3.93708 10.0749 3.83198 10.2004L1.87261 12.5404C1.57276 12.8985 0.989258 12.6865 0.989258 12.2194V3.61637C0.989258 3.17065 1.52839 2.94769 1.84321 3.26321L8.0422 9.47611C8.37211 9.80676 8.10875 10.369 7.64353 10.3273Z",fill:"#363636"})]});var U=a(70239),O=a(58751),z=a(44499),G=a(7238),W=a(93518),q=a(23673);function B({models:e}){let[t,a]=r().useState(!1);(0,s.m)({headerHeight:50,enabled:t});let o=(0,i.useRouter)(),[c,p]=r().useState([]),[m,h]=r().useState(!1),[u,g]=r().useState(""),[y,f]=r().useState(!1),[x,w]=r().useState(),T=r().useCallback(()=>{(0,k.O6)(c)},[c]),C=r().useCallback(()=>{(0,k.F1)(c),g("Copied to clipboard"),h(!0)},[c]),_=r().useCallback(async()=>{g("Copying URL to clipboard..."),h(!0);let e=(0,k.bf)(c),t=encodeURIComponent(e),a=await fetch(`https://ray.so/api/shorten-url?url=${t}&ref=prompts`).then(e=>e.json());a.link&&(e=a.link),j()(e),h(!0),g("Copied URL to clipboard!")},[c]),N=r().useCallback(e=>{j()(e.prompt),h(!0),g("Copied to clipboard")},[]),D=r().useCallback(()=>(0,k.e_)(o,c),[o,c]);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(G.NavigationActions,{children:[n.jsx("div",{className:"flex gap-2 sm:hidden",children:(0,n.jsxs)(I.z,{variant:"primary",disabled:0===c.length,onClick:()=>_(),children:[n.jsx(d.xPt,{})," Copy URL to Share"]})}),(0,n.jsxs)("div",{className:"sm:flex gap-2 hidden",children:[n.jsx(q.c,{}),(0,n.jsxs)(S.h,{children:[(0,n.jsxs)(I.z,{variant:"primary",disabled:0===c.length,onClick:()=>D(),children:[n.jsx(d.wl8,{})," Add to Raycast"]}),(0,n.jsxs)(P.DropdownMenu,{open:y,onOpenChange:f,children:[n.jsx(P.DropdownMenuTrigger,{asChild:!0,children:n.jsx(I.z,{variant:"primary",disabled:0===c.length,"aria-label":"Export options",children:n.jsx(d.v4q,{})})}),(0,n.jsxs)(P.DropdownMenuContent,{align:"end",children:[(0,n.jsxs)(P.DropdownMenuItem,{disabled:0===c.length,onSelect:()=>T(),children:[n.jsx(d._8t,{})," Download JSON",(0,n.jsxs)(W.iN,{children:[n.jsx(W.Tz,{children:"⌘"}),n.jsx(W.Tz,{children:"D"})]})]}),(0,n.jsxs)(P.DropdownMenuItem,{disabled:0===c.length,onSelect:()=>C(),children:[n.jsx(d.gIV,{})," Copy JSON"," ",(0,n.jsxs)(W.iN,{children:[n.jsx(W.Tz,{children:"⌘"}),n.jsx(W.Tz,{children:"⌥"}),n.jsx(W.Tz,{children:"C"})]})]}),(0,n.jsxs)(P.DropdownMenuItem,{disabled:0===c.length,onSelect:()=>_(),children:[n.jsx(d.xPt,{})," Copy URL to Share"," ",(0,n.jsxs)(W.iN,{children:[n.jsx(W.Tz,{children:"⌘"}),n.jsx(W.Tz,{children:"⇧"}),n.jsx(W.Tz,{children:"C"})]})]})]})]})]})]})]}),n.jsx(R.F,{open:m,onOpenChange:h,children:(0,n.jsxs)(R.M,{className:A().toastTitle,children:[n.jsx(d.gIV,{})," ",u]})}),(0,n.jsxs)("div",{className:A().main,children:[n.jsx("div",{className:A().sidebar,children:n.jsx("div",{className:A().sidebarInner,children:n.jsx(E.x,{children:(0,n.jsxs)("div",{className:A().sidebarContent,children:[(0,n.jsxs)("div",{className:A().sidebarNav,children:[n.jsx("p",{className:A().sidebarTitle,children:"Categories"}),b.map(e=>n.jsx(K,{category:e},e.slug))]}),0===c.length&&n.jsx(M,{}),c.length>0&&(0,n.jsxs)("div",{children:[n.jsx("p",{className:A().sidebarTitle,children:"Add to Raycast"}),(0,n.jsxs)(U.fC,{children:[n.jsx(U.xz,{asChild:!0,children:(0,n.jsxs)("button",{className:A().summaryTrigger,children:[c.length," ",c.length>1?"Prompts":"Prompt"," selected",n.jsx(d.v4q,{})]})}),n.jsx(U.VY,{className:A().summaryContent,children:c.map((e,t)=>(0,n.jsxs)("div",{className:A().summaryItem,children:[e.title,n.jsx("button",{className:A().summaryItemButton,onClick:()=>{p(c.filter(t=>t.id!==e.id))},children:n.jsx(d.XHJ,{})})]},e.title+t))})]}),(0,n.jsxs)("div",{className:A().summaryControls,children:[n.jsx(I.z,{onClick:D,variant:"primary",children:"Add to Raycast"}),n.jsx(I.z,{onClick:()=>p([]),children:"Clear selected"})]})]})]})})})}),n.jsx("div",{className:A().container,children:null!==x&&n.jsx(l.ZP,{className:"container pt-8",onStart:({event:e,selection:t})=>{x||e?.ctrlKey||e?.metaKey||(t.clearSelection(),p([]))},onMove:({store:{changed:{added:e,removed:t}}})=>{let a=(0,v.M)(e,b),n=(0,v.M)(t,b);p(e=>{let t=[...e];return a.forEach(e=>{!e||t.find(t=>t.id===e.id)||t.push(e)}),n.forEach(e=>t.filter(t=>t?.id!==e?.id)),t})},selectables:".selectable",features:{touch:!x,range:!0,singleTap:{allow:!0,intersect:"native"}},children:b.map(t=>(0,n.jsxs)("div",{"data-section-slug":`/prompts${t.slug}`,style:{outline:"none"},tabIndex:-1,children:[(0,n.jsxs)("h2",{className:A().subtitle,children:[n.jsx(t.iconComponent,{})," ",t.name]}),n.jsx("div",{className:A().prompts,children:t.prompts.map((a,i)=>{let o=c.some(e=>e.id===a.id),r=e?.find(e=>e.id===a.model);return(0,n.jsxs)(O.fC,{children:[n.jsx(O.xz,{children:(0,n.jsxs)("div",{className:`${A().item} selectable`,"data-selected":o,"data-key":`${t.slug}-${i}`,children:[n.jsx("div",{className:A().promptTemplate,children:n.jsx(E.x,{children:n.jsx("pre",{className:A().template,dangerouslySetInnerHTML:{__html:a.prompt.replace(/\{[^}]+\}/g,`<span class="${A().placeholder}">$&</span>`)}})})}),(0,n.jsxs)("div",{className:A().prompt,children:[(0,n.jsxs)("span",{className:A().name,children:[n.jsx(a.iconComponent,{}),a.title,a.author?(0,n.jsxs)("span",{className:A().promptAuthor,children:["by"," ",a.author.link?n.jsx("a",{href:a.author.link,target:"_blank",rel:"noopener noreferrer",children:a.author.name}):a.author.name]}):null]}),a.model?n.jsx("span",{className:A().promptModel,title:`${r?.provider_name} ${r?.name}`,children:r?.name}):null,n.jsx(z.Z,{creativity:a.creativity})]})]})}),n.jsx(O.Uv,{children:(0,n.jsxs)(O.VY,{className:A().contextMenuContent,children:[(0,n.jsxs)(O.ck,{className:A().contextMenuItem,onSelect:()=>{if(o)return p(e=>e.filter(e=>e.id!==a.id));p(e=>[...e,a])},children:[o?n.jsx(d.$_5,{}):n.jsx(d.wl8,{}),o?"Deselect Prompt":"Select Prompt"]}),(0,n.jsxs)(O.ck,{className:A().contextMenuItem,onSelect:()=>N(a),children:[n.jsx(d.gIV,{})," Copy Prompt Text"," "]})]})})]},a.id)})})]},t.name))})})]})]})}function K({category:e}){let t=(0,s.r)();return(0,n.jsxs)("a",{onClick:t=>{t.preventDefault(),window.history.pushState(null,"",`/prompts${e.slug}`)},className:A().sidebarNavItem,"data-active":t===`/prompts${e.slug}`,children:[e.icon?n.jsx(e.iconComponent,{}):n.jsx(d.KWp,{}),e.name,n.jsx("span",{className:A().badge,children:e.prompts.length})]})}},45594:e=>{e.exports={root:"Instructions_root__k78af",showInstructions:"Instructions_showInstructions__hSHJB",title:"Instructions_title__PGWcO",description:"Instructions_description__JweUs",skeletons:"Instructions_skeletons__Da_1E",skeleton:"Instructions_skeleton__HXper",fadeBgToRed:"Instructions_fadeBgToRed__jVhmR",fadeBorderToRed:"Instructions_fadeBorderToRed__qBdNl",skeletonPrimary:"Instructions_skeletonPrimary__zclUX",skeletonSecondary:"Instructions_skeletonSecondary__M84If",skeletonCursor:"Instructions_skeletonCursor__Jsghw",moveCursor:"Instructions_moveCursor__wgytw"}},67423:(e,t,a)=>{"use strict";async function n(){let e=await fetch("https://raycast.com/api/v1/ai/models");return(await e.json()).models}a.d(t,{c:()=>n})},28965:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u,metadata:()=>h});var n=a(97389),i=a(67423),o=a(70907);let r=(0,o.createProxy)(String.raw`/Users/fasu/faruxue/ray-so/app/(navigation)/prompts/[[...slug]]/prompts.tsx`),{__esModule:s,$$typeof:l}=r;r.default;let d=(0,o.createProxy)(String.raw`/Users/fasu/faruxue/ray-so/app/(navigation)/prompts/[[...slug]]/prompts.tsx#Prompts`),c="Prompt Explorer by Raycast",p="Easily browse, share, and add prompts to Raycast.",m="/_next/static/media/og-image.db8dc808.png",h={title:c,description:p,openGraph:{type:"website",url:"/prompts",title:c,description:p,siteName:"Ray.so",images:[{url:m,width:1200,height:630,alt:c}]},twitter:{card:"summary_large_image",creator:"@raycastapp",title:c,description:p,images:[{url:m,width:1200,height:630,alt:c}]},keywords:"prompts, AI, import, raycast, ideas"};async function u(){let e=await (0,i.c)();return n.jsx(d,{models:e})}},8293:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});let n={src:"/_next/static/media/og-image.db8dc808.png",height:512,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAD1BMVEULBxAUDxwkICUsIEoeFyugKwg0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVR4nGNgYGBgZGSAAGZmKIORBcpgYmJgYAAAAT4AEgkdeP0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},70239:(e,t,a)=>{"use strict";a.d(t,{VY:()=>S,fC:()=>C,xz:()=>A});var n=a(96464),i=a(75607),o=a(29683),r=a(29669),s=a(99578),l=a(44293),d=a(52763),c=a(88963),p=a(2723),m=a(91861),h="Collapsible",[u,g]=(0,o.b)(h),[y,f]=u(h),x=n.forwardRef((e,t)=>{let{__scopeCollapsible:a,open:i,defaultOpen:o,disabled:s,onOpenChange:l,...c}=e,[h=!1,u]=(0,r.T)({prop:i,defaultProp:o,onChange:l});return(0,m.jsx)(y,{scope:a,disabled:s,contentId:(0,p.M)(),open:h,onOpenToggle:n.useCallback(()=>u(e=>!e),[u]),children:(0,m.jsx)(d.WV.div,{"data-state":j(h),"data-disabled":s?"":void 0,...c,ref:t})})});x.displayName=h;var w="CollapsibleTrigger",b=n.forwardRef((e,t)=>{let{__scopeCollapsible:a,...n}=e,o=f(w,a);return(0,m.jsx)(d.WV.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":j(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...n,ref:t,onClick:(0,i.M)(e.onClick,o.onOpenToggle)})});b.displayName=w;var v="CollapsibleContent",k=n.forwardRef((e,t)=>{let{forceMount:a,...n}=e,i=f(v,e.__scopeCollapsible);return(0,m.jsx)(c.z,{present:a||i.open,children:({present:e})=>(0,m.jsx)(T,{...n,ref:t,present:e})})});k.displayName=v;var T=n.forwardRef((e,t)=>{let{__scopeCollapsible:a,present:i,children:o,...r}=e,c=f(v,a),[p,h]=n.useState(i),u=n.useRef(null),g=(0,l.e)(t,u),y=n.useRef(0),x=y.current,w=n.useRef(0),b=w.current,k=c.open||p,T=n.useRef(k),C=n.useRef();return n.useEffect(()=>{let e=requestAnimationFrame(()=>T.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.b)(()=>{let e=u.current;if(e){C.current=C.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();y.current=t.height,w.current=t.width,T.current||(e.style.transitionDuration=C.current.transitionDuration,e.style.animationName=C.current.animationName),h(i)}},[c.open,i]),(0,m.jsx)(d.WV.div,{"data-state":j(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!k,...r,ref:g,style:{"--radix-collapsible-content-height":x?`${x}px`:void 0,"--radix-collapsible-content-width":b?`${b}px`:void 0,...e.style},children:k&&o})});function j(e){return e?"open":"closed"}var C=x,A=b,S=k}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),n=t.X(0,[6673,4059,9017,1526,4689,6321,4586,2112,5418,8718,4422],()=>a(75092));module.exports=n})();