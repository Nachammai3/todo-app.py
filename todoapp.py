# todo_app.py
# A simple command-line To-Do List application

import os

FILENAME = "tasks.txt"

def load_tasks():
    if not os.path.exists(FILENAME):
        return []
    with open(FILENAME, "r") as f:
        return [line.strip() for line in f.readlines()]

def save_tasks(tasks):
    with open(FILENAME, "w") as f:
        f.write("\n".join(tasks))

def show_tasks(tasks):
    if not tasks:
        print("\nNo tasks yet! 🎉")
    else:
        print("\nYour To-Do List:")
        for i, task in enumerate(tasks, start=1):
            print(f"{i}. {task}")

def main():
    tasks = load_tasks()
    
    while True:
        print("\n--- TO-DO APP ---")
        print("1. View tasks")
        print("2. Add a task")
        print("3. Remove a task")
        print("4. Exit")

        choice = input("Enter your choice (1-4): ").strip()

        if choice == "1":
            show_tasks(tasks)

        elif choice == "2":
            task = input("Enter a new task: ").strip()
            if task:
                tasks.append(task)
                save_tasks(tasks)
                print(f"✅ Added: {task}")

        elif choice == "3":
            show_tasks(tasks)
            if tasks:
                try:
                    num = int(input("Enter task number to remove: "))
                    if 1 <= num <= len(tasks):
                        removed = tasks.pop(num - 1)
                        save_tasks(tasks)
                        print(f"❌ Removed: {removed}")
                    else:
                        print("Invalid task number.")
                except ValueError:
                    print("Please enter a valid number.")

        elif choice == "4":
            print("👋 Goodbye!")
            break
        else:
            print("Invalid choice. Please enter 1-4.")

if __name__ == "__main__":
    main()
