const {
	Task
} = require('../models');

// Connect to MongoDB
require('../utils/database');

async function seed(){

	const tasks = [
      {
        name: 'Learn Laravel',
        description: 'Watch Laracasts and learn PHP syntax'
      },
      {
        name: 'Study ES6',
        description: 'Learn the new ES6 Javascript syntax'
      },
      {
        name: 'Workout',
        description: 'Go outside and get fit'
      }
    ];

	for(let task of tasks){
		task = await new Task(task);
		task.save();
	}

	return await Task.find({});
}


// Run the seeder
seed().then((result) => {
	console.log(`${result.length} Tasks created!`);
	console.log('Press Ctrl + C to exit.')	
});
