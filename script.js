let questions =[

    {   question: 'Choose a color:',
        options:[
            {text:'Green',imageSrc:'img/01_greenColor.png'},
            {text: 'Yellow',imageSrc:'img/02_yellowColor.png'},
            {text:'Purple',imageSrc:'img/03_purpleColor.png'},
            {text: 'Red',imageSrc:'img/04_redColor.png'},
            {text: 'Blue',imageSrc:'img/05_blueColor.png'},
            {text: 'Black',imageSrc:'img/06_blackColor.png'},
            {text: 'Pink',imageSrc:'img/07_pinkColor.png'},
            {text: 'Grey',imageSrc:'img/08_greyColor.png'},
            {text: 'Brown',imageSrc:'img/09_brownColor.png'},
            {text: 'Navy',imageSrc:'img/010_navyColor.png'},
            {text: 'Sepia',imageSrc:'img/011_sepiaColor.png'}]
    },

    {   question: 'Choose a desert:',
        options:[
            {text:'Vanilla',imageSrc:'img/01_vanillaCake.png'},
            {text:'Caramelo Chocolat',imageSrc:'img/02_caramelChocolat.png'},
            {text:'Vanilla Blackberry',imageSrc:'img/03_vanillaBlackberry.png'},
            {text:'Red Velvet',imageSrc:'img/04_redVelvet.png'},
            {text:'IceCream',imageSrc:'img/05_icecream.png'},
            {text:'Black Florest',imageSrc:'img/06_blackFlorest.png'},
            {text:'Strawberry',imageSrc:'img/07_strawberry.png'},
            {text:'Apple and Cinnamon',imageSrc:'img/08_appleCinnamon.png'},
            {text:'Pumpkin Spice',imageSrc:'img/09_pumpkinSpice.png'},
            {text:'Cookies',imageSrc:'img/010_cookies.png'},
            {text:'Fruit',imageSrc:'img/011_fruit.png'}]
    },

    {   question:'Choose a place to live:',
        options:[
            {text:'On farm', imageSrc:'img/01_farm.png'},
            {text:'Hometown', imageSrc:'img/02_hometown.png'},
            {text:'A big house with my family', imageSrc:'img/03_bigHouse.png'},
            {text:'A maison', imageSrc:'img/04_maison.png'},
            {text:'Several different places for a short time', imageSrc:'img/05_severalPlaces.png'},
            {text:'A futurist city', imageSrc:'img/06_futuristCity.png'},
            {text:'I do not care where, I live as long as I can be with the one', imageSrc:'img/07_lover.png'},
            {text:'A cozy cabin', imageSrc:'img/08_cozyCabin.png'},
            {text:'The woods', imageSrc:'img/09_woods.png'},
            {text:'New York', imageSrc:'img/010_NY.png'},
            {text:'In another time', imageSrc:'img/011_anotherTime.png'}]
        },

    {   question:'How old are you?',
        options:[
            {text:'Younger than 10', imageSrc:'img/01_younger.png'},
            {text:'13-15', imageSrc:'img/02_thirteenFifteen.png'},
            {text:'15-16', imageSrc:'img/03_fifteenSixteen.png'},
            {text:'17-22', imageSrc:'img/04_seventeenTwentytwo.png'},
            {text:'22-24', imageSrc:'img/05_twentytwoTwentyfour.png'},
            {text:'25-27', imageSrc:'img/06_twentyfiveTwentyseven.png'},
            {text:'27-30', imageSrc:'img/07_twentysevenThirty.png'},
            {text:'30-35', imageSrc:'img/08_thirtyThirtyfive.png'},
            {text:'30 or older', imageSrc:'img/09_older.png'},
            {text:'That is a secret', imageSrc:'img/010_secret.png'},
            {text:'An old soul in a young body', imageSrc:'img/011_soul.png'}]
    },

    {   question:'Choose a drink:',
        options:[
            {text:'Lemonade', imageSrc:'img/01_lemonade.png'},
            {text:'Aperol Spritz', imageSrc:'img/02_aperolSpritz.png'},
            {text:'Lavande Lemonade with Gin', imageSrc:'img/03_lavandeLemonade.png'},
            {text:'Mulled Wine', imageSrc:'img/04_mulledWine.png'},
            {text:'Margarita', imageSrc:'img/05_margarita.png'},
            {text:'Old Fashioned', imageSrc:'img/06_oldFashioned.png'},
            {text:'Cosmopolitan', imageSrc:'img/07_cosmopolitan.png'},
            {text:'Tea', imageSrc:'img/08_tea.png'},
            {text:'Champagne', imageSrc:'img/09_champagne.png'},
            {text:'Dry Martini', imageSrc:'img/010_dryMartini.png'},
            {text:'Whisky', imageSrc:'img/011_whisky.png'}
        ]
    }
];

let currentQuestion = 0;
let userAnswers = [];

function nextQuestion(){
    if(userAnswers.length < questions.length){
        let currentQuestionIndex = userAnswers.length;
        let currentQuestion = questions[currentQuestionIndex];

        let questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML =`<h2><strong>${currentQuestionIndex + 1 }- ${currentQuestion.question}</strong></h2>`

        let optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        currentQuestion.options.forEach(option => {
            let optionButton = document.createElement('button');
            optionButton.className = 'option-button';

            let optionImage = document.createElement('img');
            optionImage.src = option.imageSrc;

            optionImage.style.width = '100%';
            optionImage.style.height = '80%';
            optionButton.appendChild(optionImage);
            optionButton.addEventListener('click', () => selectOption(option));
            optionsDiv.appendChild(optionButton);
        });
        questionDiv.appendChild(optionsDiv);

        document.querySelector('.quiz').appendChild(questionDiv);
    }else {

        let resultAlbum = getPersonality();

        if (resultAlbum) {
            let resultElement = document.createElement('div');
            resultElement.className = 'result';

            switch(resultAlbum){
                case 'Taylor Swift':
                    document.body.style.background = 'rgb(185,210,181)';
                    addAlbumElement(resultAlbum, 'img/1_taylor_swift.png', `You have an aura of innocence and youthful dreams.You're still trying to discover your place in the world while facing the challenges of first love and friendship.`,document.createElement('div'));
                    break;
                case 'Fearless(TV)':
                    document.body.style.background = 'rgb(242,193,122)';
                    addAlbumElement(resultAlbum,'img/2_fearless.png',`You're a romantic, courageous and nostalgic person, who values emotions, experiences and the pursuit of true love. `, document.createElement('div'));
                    break;
                case 'Speak Now(TV)':
                    document.body.style.background = 'rgb(209,178,210)';
                    addAlbumElement(resultAlbum,'img/3_speak_now.png',`You're not afraid to express your feelings and go your own way, even if it means challenging social conventions.`,document.createElement('div'));
                    break;
                case 'Red(TV)':
                    document.body.style.background = 'rgb(130,53,73)';
                    addAlbumElement(resultAlbum,'img/4_red.png',`You are currently experiencing the emotional ups and downs of relationships, intensely experiencing love and loss, and learning to deal with pain and longing as you move on.`,document.createElement('div'));
                    break;
                case '1989(TV)':
                    document.body.style.background = 'rgb(181,233,246)';
                    addAlbumElement(resultAlbum,'img/5_1989.png',`You're in one of the best phases of your life, because you feel more mature and optimistic about life and you want to live life with confidence and determination.
                    `,document.createElement('div'));
                    break;
                case 'Reputation':
                    document.body.style.background ='rgb(132,126,128)';
                    addAlbumElement(resultAlbum,'img/6_reputation.png',`"You forgive, you forget but you never let it go". You're not afraid to stand up for yourself or the things you believe in, this way you find the way to be stronger than ever. `,document.createElement('div'));
                    break;
                case 'Lover':
                    document.body.style.background = 'rgb(249,178,208)';
                    addAlbumElement(resultAlbum,'img/7_lover.png',`You're romantic and like to celebrate love in all its forms, valuing the people around you but also yourself. `,document.createElement('div'));
                    break;
                case 'Folklore':
                    document.body.style.background ='rgb(207,202,198)';
                    addAlbumElement(resultAlbum,'img/8_folklore.png',`You're an introspective person who finds comfort in the artistic fields as a way of expressing yourself, where the line between reality and fantasy is blurred.`,document.createElement('div'));
                    break;
                case 'Evermore':
                    document.body.style.background = 'rgb(200,174,149)';
                    addAlbumElement(resultAlbum,'img/9_Evermore.png',`You are an incredible poet and storyteller who explores the complexities of human emotion, especially those that affect you personally..`,document.createElement('div'));
                    break;
                case 'Midnigths':
                    document.body.style.background = 'rgb(67,73,97)';
                    addAlbumElement(resultAlbum,'img/10_midnigths.png',`"Karma is my boyfriend. Karma is a God!".You find beauty and meaning in midnight memories, when past and present merge into a tapestry of emotions and experiences.`,document.createElement('div'));
                    break;
                case 'THE TORTURED POETS DEPARTMENT':
                    document.body.style.background = 'rgb(237,225,208)';
                    addAlbumElement(resultAlbum,'img/11_ttpd.png',`You identify with the artistic pain and melancholy of tortured poets, as you consider yourself highly sensitive and emotional, often plunging into your emotional depths in search of inspiration or understanding.`,document.createElement('div'));
                    break;

                default:
                    document.body.style.background = 'white';
            }
        }
    }
}


function addAlbumElement(albumName, imageName, description, resultElement){

    let albumHeading = document.createElement('h2');
    albumHeading.innerHTML = `<strong>You are Taylor Swift's  ${albumName} album</strong></h2>`;

    let albumImage = document.createElement('img');
    albumImage.src = imageName;

    let albumParagraph = document.createElement('p');
    albumParagraph.textContent = description;

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    let shareButtonWhatsapp = document.createElement('button');
    shareButtonWhatsapp.className ='share-button';
    shareButtonWhatsapp.addEventListener('click', () => shareResult(albumName, 'whatsapp'));

    let whatsappIcon = document.createElement('i');
    whatsappIcon.className = 'fab fa-whatsapp';
    shareButtonWhatsapp.appendChild(whatsappIcon);

    let shareButtonCopy = document.createElement('button');
    shareButtonCopy.className ='copy-button';
    shareButtonCopy.addEventListener('click', () => shareResult(albumName, 'copy'));

    let copyIcon = document.createElement('i');
    copyIcon.className = 'fas fa-link';
    shareButtonCopy.appendChild(copyIcon);

    buttonContainer.appendChild(shareButtonWhatsapp);
    buttonContainer.appendChild(shareButtonCopy);

    resultElement.appendChild(albumHeading);
    resultElement.appendChild(albumImage);
    resultElement.appendChild(albumParagraph);
    resultElement.appendChild(buttonContainer);

    document.querySelector('.quiz').appendChild(resultElement);
}

function selectOption(option){
    userAnswers.push(option);
    document.querySelector('.quiz').innerHTML = '';
    nextQuestion();
}

function getPersonality(){
    let albumMapping ={
        'Green':'Taylor Swift',
        'Vanilla':'Taylor Swift',
        'On farm':'Taylor Swift',
        'Younger than 10':'Taylor Swift',
        'Lemonade':'Taylor Swift',

        'Yellow':'Fearless(TV)',
        'Caramelo Chocolat':'Fearless(TV)',
        'Hometown':'Fearless(TV)',
        '13-15':'Fearless(TV)',
        'Aperol Spritz':'Fearless(TV)',

        'Purple':'Speak Now(TV)',
        'Vanilla Blackberry':'Speak Now(TV)',
        'A big house with my family':'Speak Now(TV)',
        '15-16':'Speak Now(TV)',
        'Lavande Lemonade with Gin':'Speak Now(TV)',

        'Red':'Red(TV)',
        'Red Velvet':'Red(TV)',
        '17-22':'Red(TV)',
        'A maison':'Red(TV)',
        'Mulled Wine':'Red(TV)',

        'Blue':'1989(TV)',
        'IceCream':'1989(TV)',
        'Several different places for a short time':'1989(TV)',
        '22-24':'1989(TV)',
        'Margarita':'1989(TV)',

        'Black':'Reputation',
        'Black Florest':'Reputation',
        'A futurist city':'Reputation',
        '25-27':'Reputation',
        'Old Fashioned':'Reputation',

        'Pink':'Lover',
        'Strawberry':'Lover',
        'I do not care where, I live as long as I can be with the one':'Lover',
        '27-30':'Lover',
        'Cosmopolitan':'Lover',

        'Grey':'Folklore',
        'Apple and Cinnamon':'Folklore',
        'A cozy cabin':'Folklore',
        '30-35':'Folklore',
        'Tea':'Folklore',

        'Brown':'Evermore',
        'Pumpkin Spice':'Evermore',
        'The woods':'Evermore',
        '30 or older':'Evermore',
        'Champagne':'Evermore',

        'Navy':'Midnigths',
        'Cookies':'Midnigths',
        'New York':'Midnigths',
        'That is a secret':'Midnigths',
        'Dry Martini':'Midnigths',

        'Sepia':'THE TORTURED POETS DEPARTMENT',
        'Fruit':'THE TORTURED POETS DEPARTMENT',
        'In another time':'THE TORTURED POETS DEPARTMENT',
        'An old soul in a young body':'THE TORTURED POETS DEPARTMENT',
        'Whisky':'THE TORTURED POETS DEPARTMENT',
    };

    let albumCounts = {};
    let uniqueAnswers = {};

    userAnswers.forEach(answer => {
        let album = albumMapping[answer.text];

        if(!album){
            console.log("Answer not found in albumMapping:", answer.text);
            return;
        } if(!uniqueAnswers[album]) {
            uniqueAnswers[album] = true;
            albumCounts[album] = (albumCounts[album] || 0) + 1;
        }
    });

    let resultAlbum = '';
    let maxCount = 0;

    for(let album in albumCounts){
        if(albumCounts[album] > maxCount){
            maxCount = albumCounts [album];
            resultAlbum = album;
        }
    }
    return resultAlbum;

}

function shareResult(albumName, action){
    let shareText = encodeURIComponent(`I've just discovered that I'm Taylor Swift's ${albumName} album.`);

    if(action ==='whatsapp'){
        let shareURL = `https://api.whatsapp.com/send?text=${shareText}`;
        window.open(shareURL, '_blank');
    }else if (action === 'copy'){
        navigator.clipboard.writeText(decodeURIComponent(shareText))
        .then (() =>{
            alert('Copied');
        })
        .catch(err =>{
            console.error('[ERROR]', err);
        });
    }else{
        console.error('Invalid action!')
    }
}

function start(){
    document.querySelector('.home').style.display='none';
    let quizSection = document.createElement('section');
    quizSection.className = 'quiz';
    document.body.appendChild(quizSection);
    nextQuestion()
}
