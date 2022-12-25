//확장프로그램 실행시 기본으로 실행되는 로직
//포인트 자동 채굴, 플레이어에 앞으로 가기 버튼, 광고제거

if (typeof browser === "undefined") {
    var browser = chrome;
}

window.onload = function() {

}


//twitch area
/** 

const selector = "#live-page-chat > div > div > div > div > div > section > div > div.Layout-sc-nxg1ff-0.fwjUjn.chat-input > div:nth-child(2) > div.Layout-sc-nxg1ff-0.ejhEzS.chat-input__buttons-container > div.Layout-sc-nxg1ff-0.cwwMDL > div > div > div > div.Layout-sc-nxg1ff-0.Aqzax > div > div > div > button";
function twitchBonus() {
	if (window.location.href.includes("twitch.tv")) {
        const bonusBox = document.querySelector(selector);
        bonusBox != null ? bonusBox.click() : null;
    }
}

setInterval(function() {
    twitchBonus();
    console.log("working");
}, 7240);

browser.runtime.onMessage.addListener(
    function(response) {
        if (response.type="highlight") {
            const highLights = response.highLights;
            const color = response.color;
            let value=[];
            window.localStorage.getItem("highLights")===null ? null : value = JSON.parse(window.localStorage.getItem("highLights"));
            const temp = new Set([...highLights,...value]);
            window.localStorage.setItem("highLights", JSON.stringify(Array.from(temp)));
            window.localStorage.setItem("color", JSON.stringify(color));
        }
        else if (response.type="screenShot") {
            if (window.location.href.includes("steamindiegame")) {

            }
        }
    }
);

function highlighter() {
    let highLights = [""];
    let color = '';
    window.localStorage.getItem("highLights")===null ? null : highLights = JSON.parse(window.localStorage.getItem("highLights"));
    window.localStorage.getItem("color")===null ? null : color = window.localStorage.getItem("color").replaceAll('"','');
    const chats = document.getElementsByClassName("chat-line__message");
    for(let c of chats) {
        try {
            var nickname = c.getElementsByClassName("chat-author__intl-login")[0].innerHTML;
        }
        catch {
            var nickname = c.getElementsByClassName("chat-author__display-name")[0].innerHTML;
        }
        nickname = nickname.slice(2,nickname.length-1);
        for (let h of highLights) {
            if (h==nickname) {
                c.style.background=color;
            }
        }
    }
}

setInterval(function() {
    if (window.location.href.includes("twitch.tv")) {
       highlighter();
    }
},400);



*/