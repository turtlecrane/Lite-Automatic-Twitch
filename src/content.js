//확장프로그램 실행시 기본으로 실행되는 로직
//포인트 자동 채굴, 플레이어에 앞으로 가기 버튼, 광고제거

if (typeof browser === "undefined") {
    var browser = chrome;
}

//포인트 자동 클릭
function clickPoints() {
	try {
        // Get all clickable buttons inside 'community-points-summary'
		let elems = document.querySelector('.community-points-summary').querySelectorAll('button');
		
		// Click each button, except for the first, which is the points spending menu
		elems.forEach(function(currentElem, index, arr) {
			if (index != 0) {

                console.log('트위치 자동 채굴 : 클릭됨!');
				currentElem.click();
			}
		});
    }
    catch(err) {}
}
setTimeout(function() {
	console.log('트위치 자동 채굴 : 초기화됨.');
	const ATTEMPT_NUM = 10;

	(function loopie(i) {
		setTimeout(function() {

			console.log('트위치 자동 채굴 : Attempt ' + (11 - i) + '/' + ATTEMPT_NUM);

			if (document.contains(document.getElementsByClassName('community-points-summary')[0])) {
                console.log('트위치 자동 채굴 : 성공');

				// Pre-check
				clickPoints();
				// React to creation of an element with the clicking points script
				document.getElementsByClassName('community-points-summary').arrive('button', clickPoints);

				i=1; // equivalent of break

			}
			if (--i) loopie(i);   //  decrement i and call myLoop again if i > 0
		}, 10000)
	})(ATTEMPT_NUM);

}, 10000);


//광고제거