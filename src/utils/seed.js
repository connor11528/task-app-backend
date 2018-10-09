const {
	Task
} = require('../models');

// Connect to MongoDB
require('../utils/database');

async function clearDatabase(){
	try {
		console.log('Deleting tasks...');
		return await Task.deleteMany({});
	} catch(error){
		console.log('Error deleting tasks');
		return false;
	}
}

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
		const newTask = await new Task(task);
		try {
			newTask.save();
		} catch (err){
			console.log('Error saving task');
		}
		
	}

	return await Task.find({});
}

// clearDatabase();

// Run the seeder
seed().then((result) => {
	console.log(`${result.length} Tasks created!`);
	console.log('Press Ctrl + C to exit.')	
});


