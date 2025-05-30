# ⚽ Champions League API

**PT-BR 🇧🇷**  
Uma API RESTful feita com **Node.js** e **Express** para gerenciar dados de jogadores e clubes de futebol — ideal para aplicações relacionadas à UEFA Champions League ou estatísticas de futebol em geral.

**EN 🇺🇸**  
A RESTful API built using **Node.js** and **Express** to manage football players and clubs data — ideal for applications related to the UEFA Champions League or football stats in general.

---

## 🚀 Funcionalidades | Features

- ✅ Buscar todos os jogadores ou um jogador específico por ID  
  ✅ Retrieve all players or a specific player by ID
- ➕ Adicionar novos jogadores  
  ➕ Add new players
- 🛠️ Atualizar dados de jogadores  
  🛠️ Update player details
- ❌ Remover jogadores  
  ❌ Delete players
- 📋 Listar todos os clubes  
  📋 List all clubs

---

## 📦 Tecnologias | Tech Stack

- **Node.js**
- **Express.js**
- **CORS**
- **Rotas organizadas por módulos**  
  Modular route structure

---

## 📂 Endpoints da API | API Endpoints

### 🎮 Jogadores | Players

| Método | Rota                | Descrição                       | Method | Route               | Description           |
|--------|---------------------|----------------------------------|--------|---------------------|-----------------------|
| GET    | `/api/players`      | Buscar todos os jogadores        | GET    | `/api/players`      | Get all players       |
| GET    | `/api/players/:id`  | Buscar jogador por ID            | GET    | `/api/players/:id`  | Get player by ID      |
| POST   | `/api/players`      | Adicionar um novo jogador        | POST   | `/api/players`      | Add a new player      |
| PATCH  | `/api/players/:id`  | Atualizar dados de um jogador    | PATCH  | `/api/players/:id`  | Update a player       |
| DELETE | `/api/players/:id`  | Remover um jogador               | DELETE | `/api/players/:id`  | Delete a player       |

### 🏟️ Clubes | Clubs

| Método | Rota         | Descrição               | Method | Route        | Description        |
|--------|--------------|--------------------------|--------|--------------|--------------------|
| GET    | `/api/clubs` | Listar todos os clubes   | GET    | `/api/clubs` | Get all clubs      |

---

## 🛠️ Como rodar o projeto | How to Run

```bash
# Clone o repositório | Clone the repository
git clone https://github.com/NathanAlencarDev/champions-league-api.git

# Acesse a pasta | Navigate into the project folder
cd champions-league-api

# Instale as dependências | Install dependencies
npm install

# Inicie o servidor | Start the API server
npm run dev
