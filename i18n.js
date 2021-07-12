function getCookie (name) {
    let value = '; ' + document.cookie
    let parts = value.split('; ' + name + '=')
    if (parts.length === 2) return parts.pop().split(';').shift()
}
function setCookie (cname, cvalue, exhours) {
    let d = new Date()
    d.setTime(Date.now() + (exhours * 60 * 60 * 1000))
    let expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}
function setBodyClassUserLang(userLang) {
  document.getElementsByTagName('body')[0].classList.add(`__i18n-${userLang}`)
}

const langElements = document.querySelectorAll('[data-i18n]')
const userLang = getCookie("lang") || navigator.language || navigator.userLanguage
setBodyClassUserLang(userLang)

const languages = [
  {
        "name": "english",
        "code": "en"
    },
	{
        "name": "ру́сский",
        "code": "ru"
    },
	{
        "name": "简体中文",
        "code": "cn"
    },
    {
        "name": "한국어",
        "code": "ko"
    },
  {
        "name": "日本語",
        "code": "ja"
    }
]
const i18n = {
    getString(name, arguments=null) {
        if (userLang in i18n[name]) {
             if (arguments) {
                 return i18n[name][userLang](...arguments)
             }
             return i18n[name][userLang]
        }
        if (arguments) {
            return i18n[name]["en"](...arguments)
        }
        return i18n[name]["en"]  
    },
    "lang": userLang,
    
	// quiz.html
"quiz-loading": {
    "en": "Loading…",
    "ko": "로딩중...",
    "ru": "Загрузка...",
    "cn": "载入中...",
    "ja": "Učitavanje..."
},
  
"quiz-strongly-agree": {
    "en": "Strongly Agree",
    "ko": "매우 동의",
    "ru": "Полностью согласен",
    "cn": "强烈同意",
    "ja": "Stimme voll zu"
},
  
"quiz-agree": {
    "en": "Agree",
    "ko": "동의",
    "ru": "Скорее согласен",
    "cn": "同意",
    "ja": "Concordo"
},
  
"quiz-neutral": {
    "en": "Neutral/Unsure",
    "ko": "중립/잘 모름",
    "ru": "Не знаю/Не уверен",
    "cn": "中立/不确定",
    "ja": "Nemam Mišljenje/Ne znam"
},
  
"quiz-disagree": {
    "en": "Disagree",
    "ko": "동의하지 않음",
    "ru": "Скорее не согласен",
    "cn": "反对",
    "ja": "Donekle Se Ne Slažem",
},
  
"quiz-strongly-disagree": {
    "en": "Strongly Disagree",
    "de": "Stimme überhaupt nicht zu",
    "ko": "결코 동의하지 않음",
    "ru": "Полностью не согласен",
    "cn": "强烈反对",
    "ja": "Uopšte Se Ne Slažem"
},
  
"quiz-back": {
    "en": "back",
    "de": "Zurück",
    "ko": "뒤로",
    "ru": "Назад",
    "cn": "返回",
    "ja": "Nazad"
},
  
"quiz-question-of": {
    en(qn, questions) {return `Question ${qn + 1} of ${questions.length}`},
    ko(qn, questions) {return `${questions.length}개 질문 중 ${qn +1} 번째`},
    ru(qn, questions) {return `Вопрос ${qn + 1} из ${questions.length}`},
    cn(qn, questions) {return `第 ${qn + 1} 题，共 ${questions.length} 题`},
		ja(qn, questions) {return `Pitanje ${qn + 1} od ${questions.length}`}
},
  
    // instructions.html
"inst-h2": {
    "en": "Instructions",
    "ko": "소개",
    "ru": "Инструкция",
    "cn": "说明",
    "ja": "Uputstva"
},
  
"inst-p": {
    "en": "You will be presented with a series of statements. For each one, click the button with your opinion on it.",
    "ko": "당신은 일련의 질문들을 받게 될 것입니다. 해당되는 답변을 클릭하세요.",
    "ru": "Вам будет предложен ряд утверждений. Для каждого нажмите на кнопку с вашим мнением о нём.",
    "cn": "你将会看到一系列观点。请点击对应按钮选择你对于每个观点的看法。",
    "ja": "Biće vam predstavljen niz izjava. Za svaku, kliknite dugme na kojem je vaše mišljenje."
},
  
"inst-gotit": {
    "en": "Got it!",
    "ko": "알겠습니다",
    "ru": "Понял!",
    "cn": "知道了！",
    "ja": "Razumijem!"
},
  
"inst-nvm": {
    "en": "Wait, nevermind!",
    "ko": "그만둘래요.",
    "ru": "Вернуться",
    "cn": "等等，还是算了！",
    "ja": "Čekaj, nema veze!"
},
  
    // results.html
"result-h1": {
    "en": "Results",
    "de": "Ergebnisse",
    "ko": "결과",
    "ru": "Результаты",
    "cn": "结果",
    "ja": "Rezultati"
},
  
"result-url": {
    "en": "<br>You can send these results by copying and pasting the URL at the top of the page or using the image below.",
    "de": "<br>Sie können diese Ergebnisse senden, indem Sie die URL oben auf der Seite kopieren und einfügen oder das folgende Bild verwenden.",
    "ko": "<br>당신은 상단의 URL을 복사하거나 아래 이미지를 이용해 설문 결과를 공유할 수 있습니다.",
    "ru": "<br>Вы можете отправить эти результаты, скопировав и вставив URL в верхней части страницы или используя изображение ниже.",
    "cn": "<br>你可以通过复制粘贴页面顶端的URL或是使用下方的图片来分享结果。",
    "ja": "<br>Možete da pošaljete ove rezultate kopirajući URL na vrhu stranice ili koristeći sliku ispod."
},
  
"result-h2-match": {
    "en": "Closest Match: <span class='weight-300' id='ideology-label'> </span>",
    "de": "Höchste Übereinstimmung: <span class='weight-300' id='ideology-label'> </span>",
    "ko": `가장 일치하는 성향: <span class="weight-300" id="ideology-label"> </span>`,
    "ru": "Ближайшее совпадение: <span class='weight-300' id='ideology-label'> </span>",
    "cn": "最接近的匹配: <span class='weight-300' id='ideology-label'> </span>",
    "ja": "Najbliže podudaranje: <span class='weight-300' id='ideology-label'> </span>"
},
  
"result-h2-next-matches": {
    "en": "Next closest matches",
    "de": "Nächst höchste Überstimmungen",
    "ko": "다음으로 일치하는 성향",
    "ru": "Следующие ближайшие совпадения",
    "cn": "次接近匹配",
    "ja": "Sledeća najbliža podudaranja"
},
  
"next-matches-percent": {
    "en": "With your closest match as 100% and farthest as 0%, here is how closely you matched the other ideologies.",
    "de": "Hier sind die Ideologien mit denen du am meisten übereinstimmst, wo volle Übereinstimmung 100% ist und keine 0%.",
    "ko": "당신과 가장 일치하는 성향을 100%로, 가장 일치하지 않는 성향을 0%로 둘 때, 아래 사상들은 당신의 성향에 가까운 다른 다른 사상들 입니다.",
    "ru": "С вашим самым близким соответствием в 100% и самым дальним на 0%, вот как близко вы подходите к другим идеологиям.",
    "cn": "这是你与其他意识形态之间的匹配程度，以100%表示完全符合，0%表示完全不符合。",
    "ja": "Sa vašom najbližom na 100% i najdaljom na 0%, evo koliko su vam bliske ostale ideologije."
},
  
"result-h2-score": {
    "en": "I don't like my scores!",
    "ko": "제 결과가 마음에 들지 않습니다.",
    "ru": "Мне не нравятся мои результаты!",
    "cn": "我不喜欢我的分数！",
    "ja": "Ne sviđaju mi se moji rezultati!"
},

"result-issues": {
    "en": "Please remember that you are not intended to get a 100% score in any of the categories. The point of the quiz is to challenge your views. If you have any suggestions or constructive criticism please fill out this <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>short form</a> or open an issue on the <a href='https://github.com/LeftValues/leftvalues.github.io'>GitHub Page</a>.",
    "ko": `어떠한 범주에서든 100%의 점수를 얻을 수 없다는 것을 기억하십시오. 이 설문의 목적은 당신 자신의 관점에 직면하는 것에 있습니다. 의견이나 건설적인 비판은 <a href="https://forms.gle/6WZYMb5GXkkDLhxr5">이 양식</a>이나 <a href="https://github.com/LeftValues/leftvalues.github.io">GitHub Page</a>의 이슈를 통해 개진할 수 있습니다.`,
    "ru": "Пожалуйста, помните, что вы не намерены получить 100%-ый результат ни в одной из осей. Смысл викторины заключается в том, чтобы оспорить ваши взгляды. Если у вас какие-либо предложения или конструктивная критика, то, пожалуйста, заполните эту <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>короткую форму</a> или откройте вкладку ''issue'' на <a href='https://github.com/LeftValues/leftvalues.github.io'>странице GitHub</a>.",
    "cn": "这个测试的目的在于表达你的观点，切记不要在任何一类（意识形态）中去有意取得满分。如果你有任何意见或建议，请填写<a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>这份表格</a>或是在<a href='https://github.com/LeftValues/leftvalues.github.io'>该项目的GitHub Page</a>上开个issue。",
    "ja": "Imajte na umu da cilj nije da dobijete 100% na bilo kojoj kategoriji. Smisao kviza je da izazove vaše mišljenje. Ako imate bilo kakve prijedloge ili konstruktivnu kritiku molimo vas da ispunite ovaj <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>kratki formular</a> ili otvorite pitanje na <a href='https://github.com/LeftValues/leftvalues.github.io'>GitHub stranici</a>."
},
  
"result-a-label": {
    "en": ["Extremely Revolutionary","Very Revolutionary","Revolutionary","Neutral","Reformist","Very Reformist","Extremely Reformist"],
    "ko": ["극단적 혁명주의","강경한 혁명주의","혁명주의","중립","개혁주의","강경한 개혁주의","극단적 개혁주의"],
    "ru": ["Крайне Революционный","Очень Революционный","Революционный","Нейтральный","Реформистский","Очень Реформистский","Крайне Реформистский"],
    "cn": ["极端革命派","非常革命派","革命派","中立","改良派","非常改良派","极端改良派"],
    "ja": ["Izuzetno Revolucionarni","Vrlo Revolucionarni","Revolucionarni","Neutralni","Reformistički","Vrlo Reformistički","Izuzetno Reformistički"]
},
  
"result-b-label": {
    "en": ["Extremely Scientific","Very Scientific","Scientific","Neutral","Utopian","Very Utopian","Extremely Utopian"],
    "ko": ["극단적 과학주의","강경한 과학주의","과학주의","중립","공상주의","강경한 공상주의","극단적 공상주의"],
    "ru": ["Крайне Научный","Очень Научный","Научный","Нейтральный","Утопичный","Очень Утопичный","Крайне Утопичный"],
    "cn": ["极端科学社会主义","非常科学社会主义","科学社会主义","中立","空想社会主义","非常空想社会主义","极端空想社会主义"],
    "ja": ["Izuzetno Naučni","Vrlo Naučni","Naučni","Neutralni","Utopijski","Vrlo Utopijski","Izuzetno Utopijski"]
},
  
"result-c-label": {
    "en": ["Extremely Centralist","Very Centralist","Centralist","Neutral","Decentralist","Very Decentralist","Extremely Decentralist"],
    "de": ["Extrem Zentralisiert", "Sehr Zentralisiert", "Zentralisiert", "Neutral", "Dezentralisiert", "Sehr Dezentralisiert", "Extrem Dezentralisiert"],
    "ko": ["극단적 중앙집권주의", "강경한 중앙집권주의", "중앙집권주의", "중립", "분권주의", "강경한 분권주의", "극단적 분권주의"],
    "ru": ["Крайне Централизованный","Очень Централизованный","Централизованный","Нейтральный","Децентрализованный","Очень Децентрализованный","Крайне Децентрализованный"],
    "cn": ["极端集权","非常集权","集权","中立","分权","非常分权","极端分权"],
    "ja": ["Izuzetno Centralistički","Vrlo Centralistički","Centralistički","Neutralni","Decentralistički","Vrlo Decentralistički","Izuzetno Decentralistički"]
},
  
"result-d-label": {
    "en": ["Extremely Internationalist","Very Internationalist","Internationalist","Neutral","Nationalist","Very Nationalist","Extremely Nationalist"],
    "de": ["Extrem Internationalistisch", "Sehr Internationalistisch", "Internationalistisch", "Neutral", "Nationalistisch", "Sehr Nationalistisch", "Extrem Nationalistisch"],
    "ko": ["극단적 세계주의","강경한 세계주의","세계주의","중립","국가주의","강경한 국가주의","극단적 국가주의"],
    "ru": ["Крайне Интернациональный","Очень Интернациональный","Интернациональный","Нейтральный","Национальный","Очень Национальный","Крайне Национальный"],
    "cn": ["极端国际主义","非常国际主义","国际主义","中立","民族主义","非常民族主义","极端民族主义"],
    "ja": ["Izuzetno Internacionalistički","Vrlo Internacionalistički","Internacionalistički","Neutralni","Nacionalistički","Vrlo Nacionalistički","Izuzetno Nacionalistički"]
},
  
"result-e-label": {
    "en": ["Extremely Partisan","Very Partisan","Partisan","Neutral","Unionist","Very Unionist","Extremely Unionist"],
    "de": ["Extrem Parteiisch", "Sehr Parteiisch", "Parteiisch", "Neutral", "Gewerkschaftlich", "Sehr Gewerkschaftlich", "Extrem Gewerkschaftlich"],
    "ko": ["극단적 정당주의", "강경한 정당주의", "정당주의", "중립", "조합주의", "강경한 조합주의", "극단적 조합주의"],
    "ru": ["Крайне Партийный","Очень Партийный","Партийный","Нейтральный","Профсоюзный","Очень Профсоюзный","Крайне Профсоюзный"],
    "cn": ["极端倾向党派","非常倾向党派","倾向党派","中立","倾向工会","非常倾向工会","极端倾向工会"],
    "ja": ["Izuzetno Partijski","Vrlo Partijski","Partijski","Neutralni","Sindikatski","Vrlo Sindikatski","Izuzetno Sindikatski"]
},
  
"result-f-label": {
    "en": ["Extremely Productivist","Very Productivist","Productivist","Neutral","Ecological","Very Ecological","Extremely Ecological"],
    "de": ["Extrem Produktivist", "Sehr Produktivist", "Produktivist", "Neutral", "Ökologisch", "Sehr Ökologisch", "Extrem Ökologisch"],
    "ko": ["극단적 생산주의", "강경한 생산주의", "생산주의", "중립", "생태주의", "강경한 생태주의", "극단적 생태주의"],
    "ru": ["Крайне Производственный","Очень Производственный","Производственный","Нейтральный","Экологический","Очень Экологический","Крайне Экологический"],
    "cn": ["极端生产主义","非常生产主义","生产主义","中立","生态主义","非常生态主义","极端生态主义"],
    "ja": ["Izuzetno Proizvođački","Vrlo Proizvođački","Proizvođački","Neutralni","Ekološki","Vrlo Ekološki","Izuzetno Ekološki"]
},
  
"result-g-label": {
    "en": ["Extremely Conservative","Very Conservative","Conservative","Neutral","Progressive","Very Progressive","Extremely Progressive"],
    "de": ["Extrem Konservativ", "Sehr Konservativ", "Konservativ", "Neutral", "Progressiv", "Sehr Progressiv", "Extrem Progressiv"],
    "ko": ["극단적 보수주의", "강경한 보수주의", "보수주의", "중립", "진보주의", "강경한 진보주의", "극단적 진보주의"],
    "ru": ["Крайне Консервативный", "Очень Консервативный", "Консервативный", "Нейтральный", "Прогрессивный", "Очень Прогрессивный", "Крайне Прогрессивный"],
    "cn": ["极端保守主义","非常保守主义","保守主义","中立","进步主义","非常进步主义","极端进步主义"],
    "ja": ["Izuzetno Konzervativni","Vrlo Konzervativni","Konzervativni","Neutralni","Progresivni","Vrlo Progresivni","Izuzetno Progresivni"]
},
  
"result-back": {
    "en": "Back",
    "de": "Zurück",
    "ko": "뒤로",
    "ru": "Назад",
    "cn": "返回",
    "ja": "Nazad"
},
}

langElements.forEach((element) =>  {
    let value = element.getAttribute("data-i18n")
    if (value in i18n && userLang in i18n[value]) {
        element.innerHTML = i18n[value][userLang]
    }
})

let langPicker = document.getElementById("langPicker")
languages.forEach(language => {
    let option = document.createElement("option");
    option.text = language.name
    option.value = language.code
    langPicker.add(option); 
})
if (langPicker) {
    for (let option of langPicker.options) {
        if(option.value == userLang) {
            langPicker.value = userLang
        }
    }
        
    langPicker.onchange = function() {
        let language = langPicker.options[langPicker.selectedIndex].value
        setCookie("lang", language, 5)
        location.reload()
    }   
}
