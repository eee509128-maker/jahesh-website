import{j as e,r as d,a,i as n,R as g,b as u,P as m,c as y,d as h}from"../chunks/chunk-_4i898Gl.js";import{U as f}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const l="jahesh",b=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],x="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",v=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],P=o=>e.jsx("body",{className:"w-element",children:e.jsx(f,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دستیار هوشمند انگل‌شناسی (بندپایان)</title>
    <style>
        :root {
            --primary-color: #00897b;
            --primary-hover: #00695c;
            --bg-color: #f4f7f6;
            --chat-bg: #ffffff;
            --user-msg-bg: #e0f2f1;
            --bot-msg-bg: #f1f8e9;
            --text-color: #333;
            --border-radius: 12px;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Tahoma', 'Segoe UI', sans-serif;
        }

        body {
            background-color: var(--bg-color);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-color);
        }

        .container {
            width: 100%;
            max-width: 900px;
            height: 95vh;
            background-color: var(--chat-bg);
            border-radius: var(--border-radius);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        /* Header Styles */
        header {
            background-color: var(--primary-color);
            color: white;
            padding: 20px;
            text-align: center;
            border-bottom: 4px solid var(--primary-hover);
            flex-shrink: 0;
        }

        header h1 {
            font-size: 1.5rem;
            margin-bottom: 5px;
        }

        header p {
            font-size: 0.9rem;
            opacity: 0.9;
        }

        /* Chat Area Styles */
        #chat-container {
            flex-grow: 1;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 15px;
            background-color: #fafafa;
        }

        .message {
            max-width: 80%;
            padding: 15px;
            border-radius: var(--border-radius);
            line-height: 1.6;
            position: relative;
            animation: fadeIn 0.3s ease;
            word-wrap: break-word;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .user-message {
            align-self: flex-start; /* Right side in RTL */
            background-color: var(--user-msg-bg);
            border-right: 5px solid var(--primary-color);
            border-bottom-right-radius: 0;
        }

        .bot-message {
            align-self: flex-end; /* Left side in RTL */
            background-color: var(--bot-msg-bg);
            border-left: 5px solid #7cb342;
            border-bottom-left-radius: 0;
        }

        .sender-name {
            font-size: 0.75rem;
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
            opacity: 0.7;
        }

        /* Input Area Styles */
        .input-area {
            background-color: white;
            padding: 20px;
            border-top: 1px solid #ddd;
            display: flex;
            gap: 10px;
            align-items: center;
        }

        textarea {
            flex-grow: 1;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            resize: none;
            height: 50px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        textarea:focus {
            outline: none;
            border-color: var(--primary-color);
        }

        button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: background-color 0.3s, transform 0.1s;
        }

        button:hover {
            background-color: var(--primary-hover);
        }

        button:active {
            transform: scale(0.98);
        }

        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }

        /* Loading Indicator */
        .typing-indicator {
            align-self: flex-end;
            background-color: #eee;
            padding: 10px 15px;
            border-radius: var(--border-radius);
            display: none;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
        }

        .dot {
            width: 8px;
            height: 8px;
            background-color: #999;
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out both;
        }

        .dot:nth-child(1) { animation-delay: -0.32s; }
        .dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }

        /* Markdown-like simple styling for bot responses */
        .bot-message strong {
            color: #2e7d32;
        }
        .bot-message ul {
            margin-right: 20px;
            margin-top: 5px;
            margin-bottom: 5px;
        }
        .bot-message p {
            margin-bottom: 8px;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #aaa;
        }
    </style>



<div class="container">
    <header>
        <h1>انگل‌شناسی بندپایان</h1>
        <p>دستیار تخصصی هوش مصنوعی برای سوالات دانشگاهی</p>
    </header>

    <div id="chat-container">
        <!-- Messages will appear here -->
        <div class="message bot-message">
            <span class="sender-name">دستیار تخصصی</span>
            سلام. من هوش مصنوعی تخصصی در زمینه انگل‌شناسی و بندپایان هستم. هر سوال تخصصی، دانشگاهی یا پژوهشی که در مورد طبقه‌بندی، مورفولوژی، چرخه زندگی یا بیماری‌زایی بندپایان دارید بپرسید.
        </div>
    </div>

    <div class="typing-indicator" id="typing-indicator">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>

    <div class="input-area">
        <textarea id="user-input" placeholder="سوال تخصصی خود را بنویسید..." onkeydown="handleEnter(event)"></textarea>
        <button id="send-btn" onclick="sendMessage()">ارسال</button>
    </div>
</div>

<script>
    // API Configuration
    const API_KEY = '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';
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
    const MODEL = 'llama-3.3-70b-versatile'; // Using a high-precision model

    // System Prompt: The brain of the specialist
    const SYSTEM_PROMPT = \`
        You are a highly distinguished professor and expert in Medical Parasitology, specifically focusing on Arthropods (Entomology & Acarology).
        
        Your role is to answer university-level and research-level questions ONLY related to:
        - Morphology and Anatomy of Arthropods (Insects, Arachnids, Crustaceans)
        - Taxonomy and Classification
        - Life cycles and Biology
        - Pathogenesis and Diseases transmitted by vectors
        - Control strategies and Disinfection
        
        Constraints:
        1. Be extremely precise, scientific, and academic. Use medical and zoological terminology.
        2. If the question is outside the field of Parasitology/Arthropods, politely refuse to answer.
        3. Structure your answers clearly (bullet points, headers) if explaining complex topics.
        4. Always prioritize accuracy. If there is a debate in science, mention it.
        5. Language: Persian (Farsi). Ensure the terminology is correct in Persian.
        6. Provide deep details suitable for university exams or thesis presentations.
    \`;

    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const typingIndicator = document.getElementById('typing-indicator');

    let conversationHistory = [
        { role: "system", content: SYSTEM_PROMPT }
    ];

    function handleEnter(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    async function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        // UI Update: User Message
        addMessageToUI(text, 'user');
        userInput.value = '';
        userInput.style.height = '50px'; // Reset height
        
        // API Logic
        conversationHistory.push({ role: "user", content: text });

        // Show loading
        showLoading(true);
        sendBtn.disabled = true;

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': \`Bearer \${API_KEY}\`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: MODEL,
                    messages: conversationHistory,
                    temperature: 0.3, // Low temperature for high precision and factual accuracy
                    max_tokens: 2048
                })
            });

            if (!response.ok) {
                throw new Error(\`API Error: \${response.status}\`);
            }

            const data = await response.json();
            const botReply = data.choices[0].message.content;

            // UI Update: Bot Message
            addMessageToUI(botReply, 'bot');
            
            // Update History
            conversationHistory.push({ role: "assistant", content: botReply });

        } catch (error) {
            console.error(error);
            addMessageToUI("متاسفانه خطایی در ارتباط با سرور هوش مصنوعی رخ داد. لطفاً اتصال اینترنت را بررسی کنید.", 'bot');
        } finally {
            showLoading(false);
            sendBtn.disabled = false;
            userInput.focus();
        }
    }

    function addMessageToUI(text, sender) {
        const div = document.createElement('div');
        div.className = \`message \${sender}-message\`;
        
        const senderName = document.createElement('span');
        senderName.className = 'sender-name';
        senderName.innerText = sender === 'user' ? 'شما' : 'متخصص انگل‌شناسی';
        
        // Simple formatting for new lines and bold text
        let formattedText = text
            .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>') // Bold **text**
            .replace(/\\n/g, '<br>'); // New lines

        div.innerHTML = senderName.outerHTML + formattedText;
        chatContainer.appendChild(div);
        scrollToBottom();
    }

    function showLoading(isLoading) {
        typingIndicator.style.display = isLoading ? 'flex' : 'none';
        if(isLoading) chatContainer.appendChild(typingIndicator); // Move to bottom
        scrollToBottom();
    }

    function scrollToBottom() {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Auto-resize textarea
    userInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
        if(this.value === '') this.style.height = '50px';
    });
<\/script>



`,className:"w-html-embed"})}),k=o=>{const{origin:t,pathname:s,search:r}=new URL(o);return`${t}${s}${r}`},T=d.memo(({pageKey:o,system:t})=>e.jsx(P,{system:t},o),(o,t)=>o.pageKey===t.pageKey),S=({data:o})=>{const{system:t,resources:s,url:r,pageMeta:i}=o,c=k(r),p=d.useMemo(()=>({imageLoader:n,assetBaseUrl:a,resources:s,breakpoints:b,onError:console.error}),[s]);return e.jsxs(g.Provider,{value:p,children:[e.jsx(u.Provider,{value:r,children:e.jsx(T,{pageKey:c,system:t})}),e.jsx(m,{url:r,pageMeta:i,siteName:l,imageLoader:n,assetBaseUrl:a}),e.jsx(y,{children:i.title})]})},I=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),E=({})=>{const o={"@context":"https://schema.org","@type":"WebSite",name:l};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),e.jsx("link",{rel:"icon",href:n({src:`${a}${x}`})}),v.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${a}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:E},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-48/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:I}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-48/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{U as configValuesSerialized};
