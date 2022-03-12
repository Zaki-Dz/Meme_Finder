const results = document.querySelector('.results')

const search = document.querySelector('.search')

search.addEventListener('keyup', e => {
	let text = e.target.value
	text = text.toLowerCase()
	text = text.trim()

	if (text != '') {
		fetch('https://api.imgflip.com/get_memes')
			.then(res => res.json())
			.then(data => {
				results.innerHTML = data.data.memes
					.map(el => {
						let name = el.name.toLowerCase()
						if (name.indexOf(text) > -1) {
							return `<div class=result>
                        <a href=${el.url} target='_blank' download><img src=${el.url}></a>
                        <h1>${name}</h1>
                      </div>`
						}
					})
					.join('')
			})
	} else {
		results.innerHTML = ''
	}
})

const body = document.querySelector('body')
const header = document.querySelector('header')
const toggleTheme = document.querySelector('.theme')
let ind = false

toggleTheme.addEventListener('click', () => {
	header.classList.toggle('dark-header')
	body.classList.toggle('dark')
})
