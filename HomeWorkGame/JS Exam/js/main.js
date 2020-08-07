const container = document.querySelector('.container');
const endPointToGet = 'https://randomuser.me/api/?results=10';
const endPointToRemove = 'https://httpstat.us/200';
let listItems;

function loadUsers() {
	document.body.classList.toggle('_loading');

	fetch(endPointToGet)
		.then(res => res.json())
		.then(({ results }) => {
			console.log(results);
			renderElements(results);
			assignListener();
		})
		.finally(() => document.body.classList.toggle('_loading'));
}

function assignListener() {
	const usersList = document.querySelector('.l-users');

	usersList.addEventListener('click', e => {
		if (e.target.tagName.toLowerCase() === 'button') {
			removeListItem(e.target);
		}
	});
}

function removeListItem(element) {
	const id = element.dataset.id;

	document.body.classList.toggle('_loading');

	fetch(endPointToRemove, {
		method: 'POST',
		body: JSON.stringify({ id })
	})
	.then(res => {
		console.log(res);

		if (!res.ok) {
			return alert(res.statusText);
		}
		
		if (listItems.length === 1) {
			listItems[0].parentNode.remove();

		} else {
			element.parentNode.parentNode.remove();
		}
	})
	.finally(() => document.body.classList.toggle('_loading'))
}

function renderElements(users) {
	const ul = document.createElement('ul');
	ul.classList.add('l-users');

	for (let user of users) {
		const li = document.createElement('li');
		const { name, email, picture, gender, login } = user;
		const isMale = gender === 'male';

		li.classList.add('l-users__item');
		li.innerHTML = `
			<div class="l-users__inner">
				<button
					type="button"
					class="l-users__item-btn-remove"
					data-id="${login.uuid}"
				>
					X
				</button>
				<div class="l-users__item-bg${isMale ? ' _male' : ''}"></div>
				<div class="l-users__item-info">
					<img src="${picture.large}" alt="${name.first} ${name.last}">
					<p class="l-users__item-name">
						${name.first} ${name.last}
					</p>
				</div>
				<div class="l-users__item-email">
					${email}
				</div>
			</div>
		`;

		ul.appendChild(li);
	}

	container.appendChild(ul);
	listItems = document.getElementsByClassName('l-users__item');
}

loadUsers();