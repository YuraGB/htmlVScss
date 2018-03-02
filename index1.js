
[...document.querySelectorAll('.sliderSection')].forEach( e => {
	let numb = 0;
	
	e.addEventListener('click', (ev) => {
		let target = ev.target;
		if (ev.target.className === 'control_next') {
			ev.preventDefault ();
			let border = ev.target.getBoundingClientRect ().right;
			while (target.nextSibling !== null && target.nextSibling.className !== 'slider') {
				target = target.nextSibling;
			}
			if (target.nextSibling.getBoundingClientRect ().right > border) {
				target.nextSibling.style.transform = 'translateX(' + (numb ? numb - 18 + 'vw)' : '-5vw)');
				return numb -= 15;
			}
		}
		
		if (ev.target.className === 'control_prev') {
			ev.preventDefault ();
			let border = ev.target.getBoundingClientRect().left;
			while (target.nextSibling !== null &&  target.nextSibling.className !== 'slider'){
				target = target.nextSibling;
			}
			
			if (target.nextSibling.getBoundingClientRect().left < border) {
				target.nextSibling.style.transform = 'translateX(' + numb + 'vw)';
				return	numb += 10;
			}
		}
	})
});

[...document.querySelectorAll('.rating-stars')].forEach( e => {
	const size = e.getBoundingClientRect();
	e.addEventListener('click', (ev) => {
		
		console.log('dsf')
		e.querySelector('.rating-stars-slider').style.width = ev.clientX - size.left + 'px'
	})
});
