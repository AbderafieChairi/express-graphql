import Task from '../../models/Task.js';
import User from '../../models/User.js';
export default {
    createUser: async (args) => {
        const user = new User({
            name: args.userInput.name,
            email: args.userInput.email,
            password: args.userInput.password
        })
        console.log(user)
        try {
            const user_1 = await user.save();
            return { _id: user_1.id };
        } catch (err) {
            throw err;
        }
    },
    users: async () => {
        const users = await User.find();
        const usersWithTasks = await Promise.all(users.map(async (user) => {
          const tasks = await Task.find({ userId: user.id });
          return { ...user.toObject(), tasks };
        }));
        return usersWithTasks;
      },
}

