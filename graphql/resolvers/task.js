import Task from "../../models/Task.js";
export default {
    createTask: async (args) => {
        const task = new Task({
            title: args.taskInput.title,
            description: args.taskInput.description,
            completed: args.taskInput.completed,
            limitDate: args.taskInput.limitDate,
            userId: args.taskInput.userId
        })
        console.log(task)
        try {
            const task_1 = await task.save();
            return { ...task_1._doc, _id: task_1.id };
        } catch (err) {
            throw err;
        }
    },
    tasks: () => Task.find(),
    task: (args) => Task.findById(args.id)
}