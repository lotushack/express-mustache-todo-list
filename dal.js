//var for array
const list = require('./list.js');
let complete = require('./complete.js');

//function for listing tasks
function getTasks(){
  return list
}

// function getTask(taskId){
//   return list.find(function(task){
//     return list
//
//   });
// }

function addTask(task){

  list.push(task)
  console.log('Successfully added new task', task);
  return list;
}


// function getPendingTasks(){
//
//   return list.filter(function(task){
//     console.log('Waiting to complete task')
//     return !task.complete;
//   });
// }

// function getCompTasks(taskId){
//   return list.filter(function(task){
//     return task.complete;
//     console.log('Task Complete', taskId)
//   });
// }

function removeTask(arr){
  const newTodo = list.filter(function(person, idx, arr){
    return newTodo !== complete
    complete.push(arr)
  })
  console.log('complete')
}

module.exports = {
  addTask: addTask,
  // getTask: getTask,
  // getPendingTasks: getPendingTasks,
  // getCompTasks: getCompTasks,
  removeTask: removeTask
}
