// ===============================
// Task Entry System (Prompt-Based)
// ===============================

// Array to store all tasks
const tasks = [];

/**
 * Prompt user for a valid task status
 * Only allows: todo, doing, done 
 */
function getValidStatus(taskNumber) {
  let status;

  while (true) {
    status = prompt(
      `Enter task ${taskNumber} status (todo, doing, done):`   
    )?.toLowerCase();

    if (status === "todo" || status === "doing" || status === "done") {
      return status;
    }

    alert("Invalid status. Please enter 'todo', 'doing', or 'done'."); 
  }
}

/**
 * Prompt user for task details and return a task object
 */
function createTask(taskNumber) {
  const title = prompt(`Enter task ${taskNumber} title:`);

  const description = prompt(
    `Enter task ${taskNumber} description:`
  );

  const status = getValidStatus(taskNumber);

  return {
    title,
    description,
    status
  };
}

// ===============================
// Collect Task Data
// ===============================

tasks.push(createTask(1));
tasks.push(createTask(2));

// ===============================
// Log Completed Tasks
// ===============================

const completedTasks = tasks.filter(task => task.status === "done");

if (completedTasks.length > 0) {
  console.log("Completed Tasks:"); 
  completedTasks.forEach((task, index) => {
    console.log(
      `${index + 1}. ${task.title} - ${task.description}`
    );
  });
} else {
  console.log("No tasks completed, let's get to work!"); 
}
