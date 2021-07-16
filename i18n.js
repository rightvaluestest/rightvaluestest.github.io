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
        "name": "English",
        "code": "en"
    },
	{
        "name": "Pу́сский",
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

// titles
"title-results": {
    "en": "RightValues Results",
    "ko": "RightValues 결과",
    "ru": "RightValues Результаты",
    "cn": "RightValues 结果",
    "ja": "RightValues 診断結果"
},
	
// quiz.html
"quiz-loading": {
    "en": "Loading…",
    "ko": "로딩중...",
    "ru": "Загрузка...",
    "cn": "载入中...",
    "ja": "読み込み中..."
},
  
"quiz-strongly-agree": {
    "en": "Strongly Agree",
    "ko": "매우 동의",
    "ru": "Полностью согласен",
    "cn": "强烈同意",
    "ja": "つよく同意する"
},
  
"quiz-agree": {
    "en": "Agree",
    "ko": "동의",
    "ru": "Скорее согласен",
    "cn": "同意",
    "ja": "同意する"
},
  
"quiz-neutral": {
    "en": "Neutral/Unsure",
    "ko": "중립/잘 모름",
    "ru": "Не знаю/Не уверен",
    "cn": "中立/不确定",
    "ja": "どちらでもない／わからない"
},
  
"quiz-disagree": {
    "en": "Disagree",
    "ko": "동의하지 않음",
    "ru": "Скорее не согласен",
    "cn": "反对",
    "ja": "同意しない",
},
  
"quiz-strongly-disagree": {
    "en": "Strongly Disagree",
    "ko": "결코 동의하지 않음",
    "ru": "Полностью не согласен",
    "cn": "强烈反对",
    "ja": "まったく同意しない"
},
  
"quiz-back": {
    "en": "Back",
    "ko": "뒤로",
    "ru": "Назад",
    "cn": "返回",
    "ja": "戻る"
},
  
"quiz-question-of": {
    en(qn, questions) {return `Question ${qn + 1} of ${questions.length}`},
    ko(qn, questions) {return `${questions.length}개 질문 중 ${qn +1} 번째`},
    ru(qn, questions) {return `Вопрос ${qn + 1} из ${questions.length}`},
    cn(qn, questions) {return `第 ${qn + 1} 题，共 ${questions.length} 题`},
    ja(qn, questions) {return `問 ${qn + 1} ，全 ${questions.length} 問`}
},
  
 // instructions.html
"inst-h2": {
    "en": "Instructions",
    "ko": "소개",
    "ru": "Инструкция",
    "cn": "说明",
    "ja": "診断の受け方"
},
  
"inst-p": {
    "en": "You will be presented with a series of statements. For each one, click the button with your opinion on it.",
    "ko": "당신은 일련의 질문들을 받게 될 것입니다. 해당되는 답변을 클릭하세요.",
    "ru": "Вам будет предложен ряд утверждений. Для каждого нажмите на кнопку с вашим мнением о нём.",
    "cn": "你将会看到一系列观点。请点击对应按钮选择你对于每个观点的看法。",
    "ja": "これから、様々な思想や考えをあらわす短い文が表示されます。それぞれについて、あなたの立場にもっとも近い選択肢をクリックしてください。"
},
  
"inst-gotit": {
    "en": "Got it!",
    "ko": "알겠습니다",
    "ru": "Понял!",
    "cn": "知道了！",
    "ja": "わかりました"
},
  
"inst-nvm": {
    "en": "Wait, nevermind!",
    "ko": "그만둘래요.",
    "ru": "Вернуться",
    "cn": "等等，还是算了！",
    "ja": "やっぱりやめる"
},
  
// results.html
"result-h1": {
    "en": "Results",
    "ko": "결과",
    "ru": "Результаты",
    "cn": "结果",
    "ja": "診断結果"
},
  
"result-url": {
    "en": "<br>You can send these results by copying and pasting the URL at the top of the page or using the image below.",
    "ko": "<br>당신은 상단의 URL을 복사하거나 아래 이미지를 이용해 설문 결과를 공유할 수 있습니다.",
    "ru": "<br>Вы можете отправить эти результаты, скопировав и вставив URL в верхней части страницы или используя изображение ниже.",
    "cn": "<br>你可以通过复制粘贴页面顶端的URL或是使用下方的图片来分享结果。",
    "ja": "<br>URLをコピー、またはページ下部の画像を保存することで診断結果をシェアできます。"
},
  
"result-h2-match": {
    "en": "Closest Match: <span class='weight-300' id='ideology-label'> </span>",
    "ko": `가장 일치하는 성향: <span class="weight-300" id="ideology-label"> </span>`,
    "ru": "Ближайшее совпадение: <span class='weight-300' id='ideology-label'> </span>",
    "cn": "最接近的匹配: <span class='weight-300' id='ideology-label'> </span>",
    "ja": "あなたにもっとも近い思想 <span class='weight-300' id='ideology-label'> </span>"
},
  
"result-h2-next-matches": {
    "en": "Next closest matches",
    "ko": "다음으로 일치하는 성향",
    "ru": "Следующие ближайшие совпадения",
    "cn": "次接近匹配",
    "ja": "その他の近い思想"
},
  
"next-matches-percent": {
    "en": "With your closest match as 100% and farthest as 0%, here is how closely you matched the other ideologies.",
    "ko": "당신과 가장 일치하는 성향을 100%로, 가장 일치하지 않는 성향을 0%로 둘 때, 아래 사상들은 당신의 성향에 가까운 다른 다른 사상들 입니다.",
    "ru": "С вашим самым близким соответствием в 100% и самым дальним на 0%, вот как близко вы подходите к другим идеологиям.",
    "cn": "这是你与其他意识形态之间的匹配程度，以100%表示完全符合，0%表示完全不符合。",
    "ja": "もっとも近い思想を100%、もっとも遠いものを0％として、あなたの思想との距離を示しています。"
},
  
"result-h2-score": {
    "en": "I don't like my scores!",
    "ko": "제 결과가 마음에 들지 않습니다.",
    "ru": "Мне не нравятся мои результаты!",
    "cn": "我不喜欢我的分数！",
    "ja": "結果が気に入らん！"
},

"result-issues": {
    "en": "Please remember that you are not intended to get a 100% score in any of the categories. The point of the quiz is to challenge your views. If you have any suggestions or constructive criticism please fill out this <a href='https://forms.gle/Puc4sjaSQqvwNu6q8'>short form</a> or open an issue on the <a href='https://github.com/rightvaluestest/rightvaluestest.github.io'>GitHub Page</a>.",
    "ko": `어떠한 범주에서든 100%의 점수를 얻을 수 없다는 것을 기억하십시오. 이 설문의 목적은 당신 자신의 관점에 직면하는 것에 있습니다. 의견이나 건설적인 비판은 <a href="https://forms.gle/6WZYMb5GXkkDLhxr5">이 양식</a>이나 <a href="https://github.com/LeftValues/leftvalues.github.io">GitHub Page</a>의 이슈를 통해 개진할 수 있습니다.`,
    "ru": "Пожалуйста, помните, что вы не намерены получить 100%-ый результат ни в одной из осей. Смысл викторины заключается в том, чтобы оспорить ваши взгляды. Если у вас какие-либо предложения или конструктивная критика, то, пожалуйста, заполните эту <a href='https://forms.gle/Puc4sjaSQqvwNu6q8'>короткую форму</a> или откройте вкладку ''issue'' на <a href='https://github.com/rightvaluestest/rightvaluestest.github.io''>странице GitHub</a>.",
    "cn": "这个测试的目的在于表达你的观点，切记不要在任何一类（意识形态）中去有意取得满分。如果你有任何意见或建议，请填写<a href='https://forms.gle/Puc4sjaSQqvwNu6q8'>这份表格</a>或是在<a href='https://github.com/rightvaluestest/rightvaluestest.github.io''>该项目的GitHub Page</a>上开个issue。",
    "ja": "いずれの軸についても、100％をとる必要はありません。ご自身の価値観を把握し、問い直すためにご活用ください。その上で、改善に役立つご批判やご提案がございましたら、 <a href='https://forms.gle/Puc4sjaSQqvwNu6q8'>こちら</a>よりご連絡ください。"
},
  
"result-a-label": {
    "en": ["Progressive","Reformist","Reformist","Neutral","Conservative","Traditionalist","Reactionary"],
    "ko": ["진보적","개혁적","개혁적","중도적","보수적","전통적","반동적"],
    "ru": ["Прогрессивный","Реформистский","Реформистский","Нейтральный","Консервативный","Традиционный","Реакционный"],
    "cn": ["进步派","改革派","改革派","中立","保守派","传统派","反动派"],
    "ja": ["進歩主義","革新派","革新派","中立","保守派","伝統主義","復古主義"]
},
  
"result-b-label": { //Reversed
    "en": ["Laissez-Faire","Free Markets","Limited Regulation","Neutral","Regulationist","Interventionist","Planned Economy"],
    "ko": ["자유방임주의","자유시장","제한적 규제","중도적","규제주의","간섭주의","계획경제"],
    "ru": ["Невмешательство","Свободный рынок","Ограниченное регулирование","Нейтральный","Регуляционизм","Интервенционизм","Плановая экономика"],
    "cn": ["自由放任","自由市场","有限管制","中立","管制经济","干预经济","计划经济"],
    "ja": ["レッセフェール","自由市場主義","最小限の介入","中立","介入派","介入主義","計画経済"]
},
  
"result-c-label": { //Reversed
    "en": ["Anarchist","Libertarian","Democratic","Neutral","Statist","Authoritarian","Totalitarian"],
    "ko": ["아나키즘", "자유지상주의", "민주주의", "중도적", "국가주의", "권위주의", "전체주의"],
    "ru": ["Анархистский","Либертарианский","Демократический","Нейтральный","Государственный","Авторитарный","Тоталитарный"],
    "cn": ["无政府主义","自由主义","民主派","中立","国家主义","保皇派","极权主义"],
    "ja": ["無政府主義","自由至上主義","民主主義","中立","国家重視","権威主義","全体主義"]
},
  
"result-d-label": { 
    "en": ["Isolationism","Pacifism","Non-Aggressive","Neutral","Diplomatic Interventionism","Universalism","Imperialism"],
    "ko": ["상대주의","배타주의","평화주의","중도적","외교적 개입주의","국제주의","제국주의"],
    "ru": ["Крайне Интернациональный","Очень Интернациональный","Интернациональный","Нейтральный","Национальный","Очень Национальный","Крайне Национальный"],
    "cn": ["极端国际主义","非常国际主义","国际主义","中立","民族主义","非常民族主义","极端民族主义"],
    "ja": ["相対主義","特殊主義","平和重視","中立","介入主義寄り","普遍主義","帝国主義"]
},
  
"result-e-label": {
    "en": ["Theocrat","Theocrat","Religious Influence","Neutral","Anti-Clericalism","Seperation","Secularism"],
    "ko": ["신정주의","종교적 권위주의","종교적 영향","중도적","반교권주의","세속국가","반종교주의"],
    "ru": ["Теократия","Религиозный Авторитаризм","Религиозное влияние","Нейтралитет","Антиклерикализм","Светское государство","Атеизм"],
    "cn": ["君权神授","宗教威权主义","宗教影响政治","中立","反教权主义","政教分离","世俗国家"],
    "ja": ["神権政治","宗教的権威主義","教会国家寄り","中立","反聖職権","政教分離","世俗国家"]
},
  
"result-f-label": {
    "en": ["Extreme Accelerationism","Accelerationism","Productivism","Neutral","Bioconservatism","Decelerationism","Extreme Decelerationism"],
    "ko": ["트랜스휴머니즘","가속주의","친기술주의","중도적","인문주의","감속주의","원시주의"],
    "ru": ["Трансгуманизм", "Акселерационизм","Про-Технология","Нейтралитет","Гуманизм","Замедление","Примитивизм"],
    "cn": ["超人类主义","加速主义","倾向科技","中立","人本主义","减速主义","原始主义"],
    "ja": ["超人間主義","科学発展重視","科学賛成派","中立","慎重派","科学減速主義","原始主義"]
},
  
"result-g-label": {
    "en": ["Monoculturalism","Nativism","Assimilationism","Neutral","Polyculturalism","Multiculturalism","Multiculturalism"],
    "ko": ["단일문화주의","원주민주의","동화주의","중도적","다문화주의","다문화주의","다문화주의"],
    "ru": ["Монокультурность", "нативизм", "ассимиляционизм", "Нейтральный", "поликультурность", "мультикультурализм", "мультикультурализм"],
    "cn": ["单一文化主义","本土主义","同化主义","中立","多元文化主义","多元文化主义","多元文化主义"],
    "ja": ["単一文化主義","反移民","同化主義","中立","多文化主義","多文化主義","多文化主義"]
},
  
"result-back": {
    "en": "Back",
    "ko": "뒤로",
    "ru": "Назад",
    "cn": "返回",
    "ja": "戻る"
},
	
//Images?	

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
