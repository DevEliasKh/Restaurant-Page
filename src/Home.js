const content = document.querySelector('#content');
const main = document.createElement('main');

function makesection() {
	for (let i = 0; i < 4; i++) {
		const section = document.createElement('section');
		main.appendChild(section);
	}

	content.appendChild(main);
}

export function makeHome() {
	makesection();
	const section = document.querySelectorAll('section');

	const img1 = document.createElement('img');
	section[0].appendChild(img1);
	section[0].classList.add('sectionOne');
	document
		.querySelector('.sectionOne img')
		.setAttribute(
			'src',
			'https://cdn01.eavartravel.com/2019/12/52089862-0aae-4828-a355-d2139ec76365.jpg'
		);
	section[1].innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, autem
      expedita? Pariatur enim, nihil maiores consectetur nam animi autem voluptas
      ducimus dolor et sapiente. Soluta officiis modi qui quisquam praesentium.`;
	section[2].innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, autem
      expedita? Pariatur enim, nihil maiores consectetur nam animi autem voluptas
      ducimus dolor et sapiente. Soluta officiis modi qui quisquam praesentium.`;
	const img2 = document.createElement('img');
	section[3].appendChild(img2);
	section[3].classList.add('sectionFour');
	document
		.querySelector('.sectionFour img')
		.setAttribute(
			'src',
			'https://cdn01.eavartravel.com/2019/12/2cf2337b-bcb7-4c90-b4ad-ae15fb09c0ee.jpg'
		);
}
