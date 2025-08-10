# Git Merge Conflict Simulation

**Purpose**  
This README walks you through a simple end-to-end simulation of a Git merge conflict using a single file (`hello.txt`) on macOS. It shows how to create the conflict (two branches changing the same file differently), how Git reports the conflict, and how to resolve it.

> ✅ After each command block there is a screenshot placeholder. Replace those placeholders with screenshots when you capture them.

---

## Prerequisites

- macOS with Terminal access
- Git installed (`git --version`)
- A text editor (TextEdit, VS Code, nano, etc.)

---

## Step 0 — Create a working directory (optional)

```bash
mkdir ~/git-merge-demo
cd ~/git-merge-demo
````

![alt text](<Screenshots/git 1.png>)

---

## Step 1 — Initialize a new Git repository and create the initial commit

```bash
git init -b main  # For older git: git init && git checkout -b main

git config user.name "Demo User"
git config user.email "demo@example.com"

echo "Hello from initial commit" > hello.txt

git add hello.txt
git commit -m "Initial commit with hello.txt"
```

![alt text](<Screenshots/git 2.png>)


---

## Step 2 — Create a second branch (`GitWork`)

```bash
git branch GitWork
```

![alt text](<Screenshots/git 3.png>)


---

## Step 3 — Make a change in `main` and commit

```bash
git checkout main

echo "Hello from main branch" > hello.txt

git add hello.txt
git commit -m "Update in main branch"
```

![alt text](<Screenshots/git 4.png>)


---

## Step 4 — Make a different change in the `GitWork` branch and commit

```bash
git checkout GitWork

echo "Hello from GitWork branch" > hello.txt

git add hello.txt
git commit -m "Update in GitWork branch"
```

![alt text](<Screenshots/git 5.png>)


---

## Step 5 — Merge `GitWork` into `main` (this will produce a conflict)

```bash
git checkout main
git merge GitWork
```

Expected output:

```
CONFLICT (content): Merge conflict in hello.txt
Automatic merge failed; fix conflicts and then commit the result.
```

![alt text](<Screenshots/git 6.png>)


---

## Step 6 — Inspect the conflict markers inside `hello.txt`

```bash
cat hello.txt
```

You will see:

```
<<<<<<< HEAD
Hello from main branch
=======
Hello from GitWork branch
>>>>>>> GitWork
```

![alt text](<Screenshots/git 7.png>)


---

## Step 7 — Resolve the conflict

Edit `hello.txt` to your desired final state. Example:

```bash
echo "Hello from both main and GitWork branch" > hello.txt

git add hello.txt
git commit -m "Merge GitWork into main - conflict resolved"
```

![alt text](<Screenshots/git 8.png>)


---

## Step 8 — Verify the merge and repository state

```bash
git status
git log --oneline --graph --all
```

![alt text](<Screenshots/git 9.png>)


