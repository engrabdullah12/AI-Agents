# 🧠 AI Agents Collection

This repository contains a collection of **AI-powered agents** designed to automate tasks, enhance productivity, and showcase real-world applications of modern LLMs and APIs.

## 🚀 Included Agents

### 1. 📲 Whatsapp AI Agent
A conversational AI chatbot that can be integrated with **WhatsApp** to answer questions, generate content, or respond to users using LLMs.

- **Use Case:** Customer support, personal assistant, chatbot integration
- **Tech Stack:** Node.js, WhatsApp API (e.g. Twilio), OpenAI/Gemini
- **Features:**
  - Real-time chat handling
  - LLM-powered responses
  - Scalable design

> 📁 Folder: `whatsapp-ai-agent/`

---

### 2. ✅ Organize ToDo List Agent
An AI agent that takes in unstructured task descriptions and organizes them into a structured, prioritized **ToDo list**.

- **Use Case:** Productivity, task automation
- **Tech Stack:** Node.js / Python + LLM API (e.g. Gemini or OpenAI)
- **Features:**
  - Converts plain text into categorized tasks
  - Adds deadlines, priorities, and categories using NLP
  - Can be extended with a frontend or mobile app

> 📁 Folder: `organize-todo-agent/`

---

### 3. 🔍 Supabase RAG Agent
A **Retrieval-Augmented Generation (RAG)** agent that connects to **Supabase** using `pgvector` and enables querying custom knowledge bases with LLMs.

- **Use Case:** Internal documentation assistant, custom Q&A bot
- **Tech Stack:** Node.js, Supabase, Gemini Embeddings, pgvector
- **Features:**
  - Store and retrieve document embeddings
  - Vector similarity search
  - Gemini-powered answers using context from your own data

> 📁 Folder: `supabase-rag-agent/`

---

## 🛠️ How to Run

Each agent is self-contained in its own folder. You can run them individually:

```bash
# Example: Running the Supabase RAG Agent
cd supabase-rag-agent
npm install
npm run start
