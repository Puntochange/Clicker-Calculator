const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');

const page = document.querySelector('.page');
const themeBtn = document.querySelector('.theme-button');

const clicksWrapper = document.querySelector('.click');

let clicks = 0;

function plus() {
	clicksWrapper.innerHTML = ++clicks;
}

function minus() {
	if (clicks >= 1) clicksWrapper.innerHTML = --clicks;
}

function multiply() {
	clicksWrapper.innerHTML = clicks *= 2
}

function divide() {
	clicksWrapper.innerHTML = clicks /= 2
}

themeBtn.onclick = function () {
	page.classList.toggle('light-theme');
	if (page.classList.contains('light-theme')) {
		themeBtn.innerHTML = `
		<svg width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 2H17V7H15V2Z" fill="white"/>
		<path d="M21.687 8.90007L25.193 5.39307L26.607 6.80807L23.101 10.3141L21.687 8.90007Z" fill="white"/>
		<path d="M25 15H30V17H25V15Z" fill="white"/>
		<path d="M21.687 23.1L23.101 21.686L26.607 25.192L25.193 26.607L21.687 23.1Z" fill="white"/>
		<path d="M15 25H17V30H15V25Z" fill="white"/>
		<path d="M5.39404 25.192L8.90004 21.686L10.314 23.101L6.80804 26.607L5.39404 25.192Z" fill="white"/>
		<path d="M2 15H7V17H2V15Z" fill="white"/>
		<path d="M5.39404 6.80807L6.80804 5.39307L10.314 8.90007L8.90004 10.3141L5.39404 6.80807Z" fill="white"/>
		<path d="M16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9109 12.6075 10.4567 13.7039C10.0026 14.8003 9.88378 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7574 20.2426C12.5965 21.0818 13.6656 21.6532 14.8295 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3925 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C22 14.4087 21.3679 12.8826 20.2426 11.7574C19.1174 10.6321 17.5913 10 16 10Z" fill="white"/>
		</svg>		
		`
	}
	else themeBtn.innerHTML = `
		<svg width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 2H17V7H15V2Z" fill="black"/>
		<path d="M21.687 8.90007L25.193 5.39307L26.607 6.80807L23.101 10.3141L21.687 8.90007Z" fill="black"/>
		<path d="M25 15H30V17H25V15Z" fill="black"/>
		<path d="M21.687 23.1L23.101 21.686L26.607 25.192L25.193 26.607L21.687 23.1Z" fill="black"/>
		<path d="M15 25H17V30H15V25Z" fill="black"/>
		<path d="M5.39404 25.192L8.90004 21.686L10.314 23.101L6.80804 26.607L5.39404 25.192Z" fill="black"/>
		<path d="M2 15H7V17H2V15Z" fill="black"/>
		<path d="M5.39404 6.80807L6.80804 5.39307L10.314 8.90007L8.90004 10.3141L5.39404 6.80807Z" fill="black"/>
		<path d="M16 12C16.7911 12 17.5645 12.2346 18.2223 12.6741C18.8801 13.1136 19.3928 13.7384 19.6955 14.4693C19.9983 15.2002 20.0775 16.0044 19.9231 16.7804C19.7688 17.5563 19.3878 18.269 18.8284 18.8284C18.269 19.3878 17.5563 19.7688 16.7804 19.9231C16.0044 20.0775 15.2002 19.9983 14.4693 19.6955C13.7384 19.3928 13.1136 18.8801 12.6741 18.2223C12.2346 17.5645 12 16.7911 12 16C12.0013 14.9395 12.4232 13.9229 13.173 13.173C13.9229 12.4232 14.9395 12.0013 16 12V12ZM16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9109 12.6075 10.4567 13.7039C10.0026 14.8003 9.88378 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7574 20.2426C12.5965 21.0818 13.6656 21.6532 14.8295 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3925 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C22 14.4087 21.3679 12.8826 20.2426 11.7574C19.1174 10.6321 17.5913 10 16 10Z" fill="black"/>
		</svg>
	`
}

plusBtn.onclick = plus;
minusBtn.onclick = minus;
multiplyBtn.onclick = multiply;
divideBtn.onclick = divide;