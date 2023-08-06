//array which stores the user input
let data = [];

// query selectors from the HTML, references existing HTML
const formEl = document.querySelector('form');
const inputEl = document.querySelector('#todo');
const containerEl = document.querySelector('.container');

// --------iterates of the data array, outputs on the browser
function renderTask() {

	//emptying the html container before rebuilding or typing new input
	// containerEl.innerHTML = "";

	//forEach function taking in todo which is the user input
	//todo is an arbitrary name for an argument, or array at index i
	data.forEach(function (todo, index) {
		//creating a paragraph element where user data can be outputted
		const pEl = document.createElement('p');

		//creating a delete button
		const deleteButton = document.createElement('button');
		//name of the button is x
		deleteButton.textContent = "x";

		//storing the user input inside the pEl
		pEl.textContent = todo;

		//gives the user input an index numeber like 0, 1, 2, 3 a unique identifier
		deleteButton.setAttribute('id', index);

		//adds the button to the paragraph
		pEl.append(deleteButton);

		//takes the paragraph and outputs in inside the div of container line 7 
		containerEl.append(pEl);

	})
};

//must call the function in order for it to work
renderTask();

// ---------function which handles the user input inside into of an array
// also re renders the data
function handleSubmit(event) {
	//used in events, mostly in forms
	//gives user control, overwrites default function
	event.preventDefault();

	//storing what user typed, insie of userInput for easier further reference
	const userInput = inputEl.value;

	//user input get pushed in the back of the data array
	data.push(userInput);

	//user experience
	//inside the browser makes user typing area clear after input submission
	inputEl.value = "";

	//we call this function so we can actually see the changes
	renderTask();
};

// -----------handleDelete function
function handleDelete(event) {
	event.preventDefault();
	// only cares about events triggered by buttons inside the container, and not just text
	if (event.target.matches('button')) {
		// storing the id of the button in the variable. parsInt sting to a num enabler
		const indexOfTaskToDelete = parseInt(event.target.id);

		//filtering data functuon 
		const filteredData = data.filter(function (todo, index) {

			//stopping the deselected things coming into array
			if (index === indexOfTaskToDelete) {
				return false;
			} else {
				return true;
			}
		});

		data = filteredData;
		renderTask();
	}
}

//enabling the funcionality of the button or hitting enter
formEl.addEventListener('submit', handleSubmit);

//attach handleDelete to container div
containerEl.addEventListener('click', handleDelete);
