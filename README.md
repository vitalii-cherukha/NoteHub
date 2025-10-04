# 📝 NoteHub

**NoteHub** is a pet project built with **Next.js + TypeScript** for managing notes.  
It includes authentication, private routes, tags, search, and modal routing.  

---

## 🔗 Live & Repo

- 🌍 Live: [note-hub-phi.vercel.app](https://note-hub-phi.vercel.app/)  
- 📂 Repository: [github.com/vitalii-cherukha/NoteHub](https://github.com/vitalii-cherukha/NoteHub)

---

## ✨ Features

- 🔐 Auth (Sign In / Sign Up)  
- 📓 Notes CRUD (create, edit, delete)  
- 🗂️ Private routes (Notes, Profile)  
- 🔍 Search & tags filtering  
- 🪟 Modal routing for note details  
- 📑 Pagination  
- 📦 REST API + TanStack Query  
- 🎨 CSS Modules + global styles  

---

## 🛠️ Tech Stack

- ⚛️ Next.js + React  
- 🟦 TypeScript  
- 🎨 CSS Modules  
- 🔄 TanStack Query  
- 🌐 REST API  
- 🧩 React Context + custom store  
- ✅ ESLint + Prettier  

---

## 📂 Project Structure

```plaintext
📁 NoteHub/
├─ 📁 app/                # Next.js routes
│  ├─ 🔑 (auth routes)/   # Sign In / Sign Up
│  ├─ 🔒 (private routes)/# Notes / Profile
│  ├─ 🪟 @modal/          # Modal routing
│  ├─ 📄 layout.tsx       # Root layout
│  ├─ 📄 page.tsx         # Home page
│  ├─ 📄 loading.tsx      # Loading UI
│  ├─ 📄 not-found.tsx    # 404 page
│  └─ 📁 api/             # API routes
│
├─ 📁 components/         # Reusable UI
│  ├─ 🔑 AuthProvider
│  ├─ 📑 NotesPage
│  ├─ 📝 NoteForm / NoteList / NoteDetails
│  ├─ 🪟 Modal
│  ├─ 🔍 SearchBox
│  ├─ 🗂️ SidebarNotes / TagsMenu
│  ├─ 📊 Pagination
│  └─ 🌐 TanStackProvider
│
├─ 📁 lib/                # Core logic
│  ├─ 🌐 api
│  ├─ 📦 store
│  └─ 🏷️ tagList.ts
│
├─ 📁 public/             # Static files
│  ├─ 📄 file.svg
│  ├─ 🌍 globe.svg
│  └─ ⚡ next.svg / vercel.svg / window.svg
│
├─ 📁 types/              # TS types
│  ├─ 📝 note.ts
│  └─ 👤 user.ts
│
📄 globals.css
📄 layout.module.css
📄 api.ts
📄 middleware.ts
📄 next.config.ts
📄 tsconfig.json
📄 package.json
📄 .gitignore / .prettierrc.json / eslint.config.mjs
```
🚀 Getting Started
1️⃣ Clone repo

Копіювати код
git clone https://github.com/vitalii-cherukha/NoteHub.git
cd NoteHub
2️⃣ Install dependencies

Копіювати код
npm install
3️⃣ Create .env in root with:

env
Копіювати код
```
NEXT_PUBLIC_API_URL=http://localhost:3000/
```
4️⃣ Run dev server

Копіювати код
```
npm run dev
```
5️⃣ Open http://localhost:3000 🎉

🔮 Future Plans
🌙 Dark / Light mode

🤝 Note sharing between users

🖋️ Rich text editor

🧪 Unit tests (Jest + RTL)

🔄 GraphQL API migration

👤 Author
Developed with ❤️ by Vitalii Cherukha
📌 Pet project to practice Next.js, TypeScript & modern React ecosystem
