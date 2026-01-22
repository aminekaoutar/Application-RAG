# Projet : Application RAG Web
**Créateur : Amine Kaoutar**

Cette application permet à un utilisateur de soumettre un lien vers un site web, d’extraire les données, de créer des embeddings avec FAISS, et de fournir des réponses via RAG (LangChain, ChatGroq, Tavily, ChatMemory).

## Fonctionnement simplifié
1. Soumission du lien par l’utilisateur.
2. Extraction du contenu du site.
3. Indexation via FAISS.
4. RAG interroge l’index et retourne les réponses.

## Architecture Docker
- Frontend/API
- Crawler
- Vector Store/Embedding
- RAG Service
- Optionnel : Redis/RabbitMQ pour tâches asynchrones
