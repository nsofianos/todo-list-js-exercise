function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  }
  return task;
}

const task1 = newTask("Clean Cat Litter", "take all doodoo out the litter box"); // task 0
const task2 = newTask("Do Laundry", 'waawaa'); // task 1
const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logTaskState(); // Clean Cat Litter has been completed
