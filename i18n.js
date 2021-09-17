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

"index-start": {
    "en": "Start!",
    "ko": "클릭해서 시작하기!",
    "ru": "начать!",
    "cn": "开始!",
    "ja": "診断する"
},
	
"index": {
    "en": "Index",
    "ko": "홈페이지",
    "ru": "показатель",
    "cn": "主页",
    "ja": "ホーム"
},
	
"quiz": {
    "en": "Quiz",
    "ko": "테스트",
    "ru": "викторина",
    "cn": "测试",
    "ja": "診断"
},

// titles
"title-results": {
    "en": "RightValues Results",
    "ko": "RightValues 결과",
    "ru": "RightValues Результаты",
    "cn": "RightValues 结果",
    "ja": "RightValues 診断結果"
},
	
"title-instructions": {
    "en": "RightValues Instructions",
    "ko": "RightValues 훈령",
    "ru": "RightValues инструкции",
    "cn": "RightValues 指示",
    "ja": "RightValues 説明"
},
	
"title-quiz": {
    "en": "RightValues Quiz",
    "ko": "RightValues 테스트",
    "ru": "RightValues викторина",
    "cn": "RightValues 测试",
    "ja": "RightValues 診断"
},

//index.html 

"index-about": {
    "en": "RightValues is a quiz for the people on the right of the spectrum, based upon and serves as the alternative to the <a href='https://leftvalues.github.io/'>LeftValues</a> quiz. \
     If you are not a rightist, this quiz is obviously not suited for you, and you should look for the LeftValues instead. You will be presented with a statement, and then you will answer with your opinion on the statement, from <b>Strongly Agree</b> to <b>Strongly Disagree</b>, with each answer slightly affecting your scores. \
     At the end of the quiz, your answers will be compared to the maximum possible for each value, thus giving you a percentage. Answer honestly!<br /><br /> There are <b><u>69</u></b> questions in the test. <br><br> \
     Similar to 8values, this quiz will attempt to match you with a specific rightist ideology, which is shown in the 'Closest Match' section. \
     Please remember that you are not intended to get a 100% score in any of the categories. The point of the quiz is to challenge your views. \
     If you have any suggestions or constructive criticism please open an issue in the Github, linked in the upper right corner of this page. <br> <br> ", 
    
     "ru": "RightValues это тест для людей правых взглядов, основанный на <a href='https://leftvalues.github.io/'>LeftValues</a>. Это викторина, которая пытается определить вашу позицию в спектре правых, как альтернатива LeftValues. Если вы не правый, эта викторина, очевидно, вам не подходит, и вам следует вместо этого пройти LeftValues. \
     Вам будет представлен тест, а затем вы ответите своим мнением по поводу утверждения, от <b>полностью согласен</b> до <b>полностью не согласен</b>, причем каждый ответ немного влияет на ваши результаты. В конце викторины ваши ответы будут сравниваться с максимально возможным для каждой идеологии, что даст вам процентное значение. Отвечайте честно! <br><br>\
     Подобно 8values, эта викторина будет пытаться сопоставить вас с определенной правой идеологией. В настоящее время существует 36 идеологий, и их будет еще больше. Предложения очень приветствуются. \
     Если у вас есть предложения или конструктивная критика, пожалуйста, откройте вопрос в Github, ссылка на который находится в правом верхнем углу этой страницы. напишите переводчику в телеграм, если у вас есть претензии к переводу. @ladomir37",
	
     "ja": "RightValuesとは、 <a href='https://leftvalues.github.io/'>LeftValues</a>から着想を得た、右派／右翼向け政治診断です。右のなかでも、あなたがどのような価値観をもっているのか診断します。\
     左寄りの方は正しい結果が得られませんので、LeftValuesをご利用ください。この診断では、表示される各文に対してどう考えるか、<b>「つよく同意する」</b>から<b>「まったく同意しない」</b>の範囲より答えていただきます。\
     選択に応じてスコアがつけられ、最後まで回答すると、それぞれの価値観について取り得る最大スコアを100％とした確率が表示されます。正直にお答えください！現在、<b><u>69</u></b>問あります。<br /><br /> \
     また、<a href='https://8values-ja.github.io/index.html'>8values</a>や<a href='https://leftvalues.github.io/'>LeftValues</a>と同様に、RightValuesでもあなたの回答に最も近い思想を判定します。\
     この診断では、いずれの軸についても100％をとる必要はありません。ご自身の価値観を把握し、問い直すためにご活用ください。\
     RightValuesの改善に役立つご批判やご提案がございましたら、このページの右上隅にリンクされているGithubからご連絡ください。 (Translated by: Choux)",
	
     "ko": "RightValues는 <a href='https://leftvalues.github.io/' target='_blank' rel='noopener noreferrer'>LeftValues</a>의 대안으로 우익 스펙트럼 상에서 당신의 위치를 파악하기 위해 LeftValues를 바탕으로 만들어진 우익 설문입니다. 만약 당신이 우파가 아니라면, 이 설문은 분명 당신에게 적합하지 않습니다. \
     대신 LeftValues를 찾으세요. 각 문항을 살펴보고 <b>적극 동의</b>부터 <b>동의</b>, <b>중립/모르겠다</b>, <b>비동의</b>, <b>적극 비동의</b>까지의 답변중 하나를 선택하면, 각각의 답변이 당신의 점수에 조금씩 영향을 주게 될 것입니다. 설문 마지막에 당신의 답변에 기초한 점수가 각각의 가치(values)에 대해 가질 수 있는 최대값에 대한 백분율로 표시됩니다. 최대한 정직하게 대답하세요!<br /><br /> \
     질문은 총 <b><u>69</u></b> 문항이 있습니다. 8Values, LeftValues와 비슷하게, 이 설문은 특정한 우파 이념과 당신을 짝지으려 할 것입니다. 현재 36개의 가능한 이념이 있고, 미래에는 더 많은 이념들이 있을 수 있습니다. 이는 진행중인 작업이며, 의도한대로 작동하지 않을 수도 있습니다. 제안은 언제나 환영합니다. \
     어떠한 범주에서든 100% 의 점수를 얻을 수 없다는 것을 인지해주세요. 이 설문의 목적은 당신 자신의 관점에 직면하는 것에 있습니다. 제안이나 건설적인 비판이 있는 경우 이 페이지의 오른쪽 상단에 링크된 Github에서 문제를 여십시오. (Translated by: Mizeery)",
	
     "cn": "RightValues是基于<a href='https://leftvalues.github.io/'>LeftValues</a>， 针对右派人士的一项测验，旨在确定您在右派人士上的定位。 如果您是左派人士，那么此测验显然不适合您，您应该寻找LeftValues。\
     系统将为您提供一个陈述，然后对陈述做出回答，从“ <b>非常同意</b>”到“<b>非常不同意</b>”, 每个答案都会稍微影响您的分数。 测验结束时，您的答案将与每个值的最大可能值进行比较，从而得出一个百分比。<br /><br /> 有<b><u>69</u></b>道题在此测试中。\
     类似于8values，该测验将尝试使您符合特定的右派意识形态。当前有36种意识形态，还有更多的意识形态欢迎你的建议。请记住，您无意在任何类别中获得100％的分数。测验的目的是挑战您的观点。如果您有任何建议或建设性的批评，请在GitHub上讨论或创建Issues。\
     此测试仅用于学术研究（如社科），测验中的任何内容不代表翻译者的政治立场。除Google Analytics外，我们不会收集任何个人信息，也不会保存答案或结果。如果你不相信这一点，本项目的开源代码对所有人开放查阅，欢迎查看。"
},
	
"index-license": {
     "en": "8values is licensed under the MIT License, which permits 'without restriction' the rights to 'use, copy, modify, merge, publish, distribute, sublicense, and/or sell \
     copies of the Software'. LeftValues is licensed under the same MIT License. RightValues is thus able to legally modify the original 8values without infringing on any copyright. RightValues is based on LeftValues and 8Values.",

     "ru": "8values находится под лицензией MIT License, которая разрешает «без ограничений» права на «использование, копирование, изменение, объединение, публикацию, распространение, сублицензирование и / или продажу \
     копий Программного обеспечения ». LeftValues находится под лицензией MIT License, которая разрешает« без ограничений »права на« использование, копирование, изменение, объединение, публикацию, распространение, сублицензию и / или продажу \
     копии программного обеспечения ». RightValues, таким образом, может на законных основаниях изменять исходные 8values без нарушения каких-либо авторских прав. RightValues основывается на LeftValues и 8Values.",
	
     "ja": "8valuesはMIT Licenseに基づいてライセンスされており、「無制限('without restriction')」に、「ソフトウェアの複製を使用、複写、変更、結合、掲載、頒布、サブライセンス、および/または販売する ('use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software')」権利が認められています。\
   LeftValuesも同MIT Licenseを適用しています。従って、RightValuesは著作権を侵害することなく、適法的に8valuesへ変更を加えています。RightValuesはLeftValuesおよび8valuesを基に制作されました。",
	
     "cn": "8values 是采用 MIT 许可证授权的，该许可证“无限制地”授予“使用、复制、修改、合并、发布、分发、再授权和 / 或出售软件的副本”的权利。\
     因此，LeftValues 能够在不侵犯任何版权的情况下合法地修改原始的 8values。同理，RightValues也能在不侵犯任何版权的情况下合法地修改 LeftValues，翻译者Songyon也能在不侵犯任何版权的情况下合法地翻译RightValues。",

     "ko": "RightValues는 '사용, 복사, 수정, 병합, 게시, 배포, 하위 라이선스 및/또는 판매할 수 있는' 권한을 '제한 없이' 허용하는 MIT 라이선스에 따라 라이선스가 부여됩니다. \
     소프트웨어의 복사본'입니다. LeftValues는 '사용, 복사, 수정, 병합, 게시, 배포, 하위 라이선스 및/또는 판매 권한을 '제한 없이' 허용하는 MIT 라이선스에 따라 라이선스가 부여됩니다. \
     따라서 RightValues는 저작권을 침해하지 않고 원본 8값을 법적으로 수정할 수 있습니다. RightValues는 LeftValues 및 8Values를 기반으로 합니다."
},

"index-valueswhat": {
     "en": "What are the values?",
     "ja": "診断結果について",
     "ko": "가치(values)는 무엇입니까?",
     "ru": "За что отвечают значения?",
     "cn": "这些意识形态都有哪些?"
},

"index-valuesdesc": {
     "en": "There are currently seven axes, each of which has two opposing values. They are:",
     "ru": "В настоящее время существует шесть осей, каждая из которых имеет два противоположных мнения:",
     "ko": "현재 6개의 축이 있습니다. 각각의 축은 아래와 같은 상반되는 두 개의 가치를 갖게 됩니다.:",
     "ja": "本診断は、次に示す7本の「主軸」を用いて行われます。各主軸は、対極となる価値観同士を各端に配置してあります。",
     "cn": "当前一共有七个坐标轴，其各自代表了一对相反的意识形态。它们是："
},
	
"index-valuesimg": {
     "en": "<img src='img/values-en.png' class='index'> ",
     "ja": "<img src='img/values-ja.png' class='index'> ",
     "ko": "<img src='img/values-ko.png' class='index'> ",
     "ru": "<img src='img/values-ru.png' class='index'> ",
     "cn": "<img src='img/values-cn.png' class='index'> "
},
	
"tab-about": {
    "en": "About",
    "ko": "에 대한",
    "ru": "О",
    "cn": "关于",
    "ja": "詳細"
},
	
"tab-values": {
    "en": "Values",
    "ko": "가치",
    "ru": "Ценности",
    "cn": "价值观",
    "ja": "7本の軸"
},
	
"license-link": {
    "en": "License",
    "ko": "특허",
    "ru": "Лицензия",
    "cn": "许可",
    "ja": "ライセンス"
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
    "ja": "説明"
},
  
"inst-p": {
    "en": "You will be presented with a series of statements. For each one, click the button with your opinion on it. There is a langauge picker in the top right if you wish to use this site in another language.",
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
    "ja": "あなたの回答にもっとも近い思想を100%、もっとも遠いものを0％として、相対的な距離を示しています。"
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
    "ja": "いずれの軸についても、100％をとる必要はありません。ご自身の価値観を把握し、問い直すためにご活用ください。その上で、改善に役立つご批判やご提案がございましたら、 <a href='https://forms.gle/Puc4sjaSQqvwNu6q8'>こちらのGoogle Form</a>または<a href='https://github.com/rightvaluestest/rightvaluestest.github.io'>GitHub</a>よりご連絡ください。"
},
  
"result-a-label": {
    "en": ["Progressive","Reformist","Reformist","Neutral","Conservative","Traditionalist","Reactionary"],
    "ko": ["진보적","개혁적","개혁적","중도적","보수적","전통적","반동적"],
    "ru": ["Прогрессивный","Реформистский","Реформистский","Нейтральный","Консервативный","Традиционный","Реакционный"],
    "cn": ["进步派","改革派","改革派","中立","保守派","传统派","反动派"],
    "ja": ["進歩主義","革新派","革新派","中立","保守派","伝統主義","復古主義"]
},
  
"result-b-label": { //Reversed
    "en": ["Planned Economy","Interventionist","Regulationist","Neutral","Limited Regulation","Free Markets","Laissez-Faire"],
    "ko": ["계획경제","간섭주의","규제주의","중도적","제한적 규제","자유시장","자유방임주의"],
    "ru": ["Плановая экономика","Интервенционизм","Регуляционизм","Нейтральный","Ограниченное регулирование","Свободный рынок","Невмешательство"],
    "cn": ["计划经济","干预经济","管制经济","中立","有限管制","自由市场","自由放任"],
    "ja": ["計画経済","介入主義","介入派","中立","最小限の介入","自由市場主義","レッセフェール"]
},
  
"result-c-label": { //Reversed
    "en": ["Totalitarian","Authoritarian","Statist","Neutral","Democratic","Libertarian","Anarchist"],
    "ko": ["전체주의", "권위주의", "국가주의", "중도적", "민주주의", "자유지상주의", "아나키즘"],
    "ru": ["Тоталитарный","Авторитарный","Государственный","Нейтральный","Демократический","Либертарианский","Анархистский"],
    "cn": ["极权主义","保皇派","国家主义","中立","民主派","自由主义","无政府主义"],
    "ja": ["全体主義","権威主義","国家重視","中立","民主主義","自由至上主義","無政府主義"]
},
  
"result-d-label": { 
    "en": ["Isolationism","Pacifism","Non-Aggressive","Neutral","Diplomatic Interventionism","Universalism","Imperialism"],
    "ko": ["상대주의","배타주의","평화주의","중도적","외교적 개입주의","국제주의","제국주의"],
    "ru": ["Крайне Интернациональный","Очень Интернациональный","Интернациональный","Нейтральный","Национальный","Очень Национальный","Крайне Национальный"],
    "cn": ["极端国际主义","非常国际主义","国际主义","中立","民族主义","非常民族主义","极端民族主义"],
    "ja": ["孤立主義","平和主義","非暴力主義","中立","外交介入主義","普遍主義","帝国主義"]
},
  
"result-e-label": {
    "en": ["Theocrat","Theocrat","Religious Influence","Neutral","Anti-Clericalism","Seperation","Secularism"],
    "ko": ["신정주의","종교적 권위주의","종교적 영향","중도적","반교권주의","세속국가","반종교주의"],
    "ru": ["Теократия","Религиозный Авторитаризм","Религиозное влияние","Нейтралитет","Антиклерикализм","Светское государство","Атеизм"],
    "cn": ["君权神授","宗教威权主义","宗教影响政治","中立","反教权主义","政教分离","世俗主义"],
    "ja": ["神権政治","宗教的権威主義","教会国家寄り","中立","反聖職権","政教分離","世俗主義"]
},
  
"result-f-label": {
    "en": ["Extreme Accelerationism","Accelerationism","Productivism","Neutral","Bioconservatism","Decelerationism","Extreme Decelerationism"],
    "ko": ["트랜스휴머니즘","가속주의","친기술주의","중도적","인문주의","감속주의","원시주의"],
    "ru": ["Трансгуманизм", "Акселерационизм","Про-Технология","Нейтралитет","Гуманизм","Замедление","Примитивизм"],
    "cn": ["超人类主义","加速主义","倾向科技","中立","人本主义","减速主义","原始主义"],
    "ja": ["進歩主義","科学発展重視","科学賛成派","中立","慎重派","科学減速主義","原始主義"]
},
  
"result-g-label": {
    "en": ["Monoculturalism","Nativism","Assimilationism","Neutral","Polyculturalism","Multiculturalism","Multiculturalism"],
    "ko": ["단일문화주의","원주민주의","동화주의","중도적","다문화주의","다문화주의","다문화주의"],
    "ru": ["Монокультурность", "нативизм", "ассимиляционизм", "Нейтральный", "поликультурность", "мультикультурализм", "мультикультурализм"],
    "cn": ["单一文化主义","本土主义","同化主义","中立","多元文化主义","多元文化主义","多元文化主义"],
    "ja": ["単一文化主義","単一民族重視","同化主義","中立","多文化重視","多文化主義","多文化主義"]
},
  
"result-back": {
    "en": "Back",
    "ko": "뒤로",
    "ru": "Назад",
    "cn": "返回",
    "ja": "戻る"
},
	
"copy-url": {
    "en": "Copy Results URL",
    "ko": "URL 복사",
    "ru": "Копировать URL",
    "cn": "复制网址",
    "ja": "URLをコピー"
},
	
"url-copied": {
    "en": "URL Copied!",
    "ko": "URL 복사됨",
    "ru": "URL скопирован",
    "cn": "网址已被复制",
    "ja": "URLをコピーしました"
},
	
//Images
"img-reform": {
    "en": "<img id='img-reform' src='value_images/reform.png' height='128pt'/>",
    "ko": "<img id='img-reform' src='value_images/ko/reform.png' height='128pt'/>",
    "ru": "<img id='img-reform' src='value_images/reform.png' height='128pt'/>",
    "cn": "<img id='img-reform' src='value_images/cn/reform.png' height='128pt'/>",
    "ja": "<img id='img-reform' src='value_images/reform.png' height='128pt'/>"
},
	
"img-preserve": {
    "en": "<img id='img-preserve' src='value_images/preserve.png' height='128pt'/>",
    "ko": "<img id='img-preserve' src='value_images/ko/preserve.png' height='128pt'/>",
    "ru": "<img id='img-preserve' src='value_images/preserve.png' height='128pt'/>",
    "cn": "<img id='img-preserve' src='value_images/cn/preserve.png' height='128pt'/>",
    "ja": "<img id='img-preserve' src='value_images/preserve.png' height='128pt'/>"
},
	
"img-stateown": {
    "en": "<img id='img-stateown' src='value_images/stateown.png' height='128pt'/>",
    "ko": "<img id='img-stateown' src='value_images/ko/stateown.png' height='128pt'/>",
    "ru": "<img id='img-stateown' src='value_images/stateown.png' height='128pt'/>",
    "cn": "<img id='img-stateown' src='value_images/cn/stateown.png' height='128pt'/>",
    "ja": "<img id='img-stateown' src='value_images/stateown.png' height='128pt'/>"
},
	
"img-market": {
    "en": "<img id='img-market' src='value_images/market.png' height='128pt'/>",
    "ko": "<img id='img-market' src='value_images/ko/market.png' height='128pt'/>",
    "ru": "<img id='img-market' src='value_images/market.png' height='128pt'/>",
    "cn": "<img id='img-market' src='value_images/cn/market.png' height='128pt'/>",
    "ja": "<img id='img-market' src='value_images/market.png' height='128pt'/>"
},
	
"img-central": {
    "en": "<img id='img-central' src='value_images/central.png' height='128pt'/>",
    "ko": "<img id='img-central' src='value_images/ko/central.png' height='128pt'/>",
    "ru": "<img id='img-central' src='value_images/central.png' height='128pt'/>",
    "cn": "<img id='img-central' src='value_images/cn/central.png' height='128pt'/>",
    "ja": "<img id='img-central' src='value_images/central.png' height='128pt'/>"
},
	
"img-decentral": {
    "en": "<img id='img-decentral' src='value_images/decentral.png' height='128pt'/>",
    "ko": "<img id='img-decentral' src='value_images/ko/decentral.png' height='128pt'/>",
    "ru": "<img id='img-decentral' src='value_images/decentral.png' height='128pt'/>",
    "cn": "<img id='img-decentral' src='value_images/cn/decentral.png' height='128pt'/>",
    "ja": "<img id='img-decentral' src='value_images/decentral.png' height='128pt'/>"
},
	
"img-world": {
    "en": "<img id='img-world' src='value_images/world.png' height='128pt'/>",
    "ko": "<img id='img-world' src='value_images/ko/world.png' height='128pt'/>",
    "ru": "<img id='img-world' src='value_images/world.png' height='128pt'/>",
    "cn": "<img id='img-world' src='value_images/cn/world.png' height='128pt'/>",
    "ja": "<img id='img-world' src='value_images/world.png' height='128pt'/>"
},
	
"img-nation": {
    "en": "<img id='img-nation' src='value_images/nation.png' height='128pt'/>",
    "ko": "<img id='img-nation' src='value_images/ko/nation.png' height='128pt'/>",
    "ru": "<img id='img-nation' src='value_images/nation.png' height='128pt'/>",
    "cn": "<img id='img-nation' src='value_images/cn/nation.png' height='128pt'/>",
    "ja": "<img id='img-nation' src='value_images/nation.png' height='128pt'/>"
},
	
"img-religious": {
    "en": "<img id='img-religious' src='value_images/religious.png' height='128pt'/>",
    "ko": "<img id='img-religious' src='value_images/ko/religious.png' height='128pt'/>",
    "ru": "<img id='img-religious' src='value_images/religious.png' height='128pt'/>",
    "cn": "<img id='img-religious' src='value_images/cn/religious.png' height='128pt'/>",
    "ja": "<img id='img-religious' src='value_images/religious.png' height='128pt'/>"
},
	
"img-secular": {
    "en": "<img id='img-secular' src='value_images/secular.png' height='128pt'/>",
    "ko": "<img id='img-secular' src='value_images/ko/secular.png' height='128pt'/>",
    "ru": "<img id='img-secular' src='value_images/secular.png' height='128pt'/>",
    "cn": "<img id='img-secular' src='value_images/cn/secular.png' height='128pt'/>",
    "ja": "<img id='img-secular' src='value_images/secular.png' height='128pt'/>"
},
	
"img-economy": {
    "en": "<img id='img-economy' src='value_images/economy.png' height='128pt'/>",
    "ko": "<img id='img-economy' src='value_images/ko/economy.png' height='128pt'/>",
    "ru": "<img id='img-economy' src='value_images/economy.png' height='128pt'/>",
    "cn": "<img id='img-economy' src='value_images/cn/economy.png' height='128pt'/>",
    "ja": "<img id='img-economy' src='value_images/economy.png' height='128pt'/>"
},
	
"img-nature": {
    "en": "<img id='img-nature' src='value_images/nature.png' height='128pt'/>",
    "ko": "<img id='img-nature' src='value_images/ko/nature.png' height='128pt'/>",
    "ru": "<img id='img-nature' src='value_images/nature.png' height='128pt'/>",
    "cn": "<img id='img-nature' src='value_images/cn/nature.png' height='128pt'/>",
    "ja": "<img id='img-nature' src='value_images/nature.png' height='128pt'/>"
},
	
"img-race": {
    "en": "<img id='img-race' src='value_images/race.png' height='128pt'/>",
    "ko": "<img id='img-race' src='value_images/ko/race.png' height='128pt'/>",
    "ru": "<img id='img-race' src='value_images/race.png' height='128pt'/>",
    "cn": "<img id='img-race' src='value_images/cn/race.png' height='128pt'/>",
    "ja": "<img id='img-race' src='value_images/race.png' height='128pt'/>"
},
	
"img-equality": {
    "en": "<img id='img-equality' src='value_images/equality.png' height='128pt'/>",
    "ko": "<img id='img-equality' src='value_images/ko/equality.png' height='128pt'/>",
    "ru": "<img id='img-equality' src='value_images/equality.png' height='128pt'/>",
    "cn": "<img id='img-equality' src='value_images/cn/equality.png' height='128pt'/>",
    "ja": "<img id='img-equality' src='value_images/equality.png' height='128pt'/>"
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
