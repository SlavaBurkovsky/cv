const i18Obj = {
    'en': {
        'about-me': 'About me',
        'about-me-content-1': 'My name is Viacheslav, I am 29, I am junior QA engineer. I’d describe myself as a goal-oriented and hardworking person with good organizational skills and strategic thinking. Also, I’m competitive and like to excel at everything I do. And last but not least, I’m very flexible and adaptable to new situations. Regardless of the situation I have the ability to adapt and work under any circumstances. At this moment I do not have enough work experience, but my active life position and purposefulness makes me the kind of person you want to get to know and cooperate in future.',
        'about-me-content-2': 'I graduated from the Francisk Skorina Gomel State University with a degree in "world economist". For almost 2 years I worked in a bank as a specialist in providing retail banking services, for a year and a half I worked as a senior inspector in the Internal Affairs Department and at the moment I have been working as a manager at Yandex for more than 2 years  ',
        'about-me-content-3': 'I decided to change my specialty when I found out my friend working as a tester. I was interested to try something unknown, my new job quickly took over, now I plan to develop in this direction.',
        'about-me-content-4': 'When I work at every task, I learn something new, I am not afraid to ask for help and advice. It is important for me to complete the task quickly and effectively. It is important for me not only to gain experience, but also to take my place in a team where I can be useful, with which I can move into the future, contributing to the common deal.',
        'courses': 'Education and courses',
        'courses-first': 'Francisk Skorina Gomel State University - world economy',
        'courses-second': 'Geekbrains - software testing',
        'courses-third': 'TestPro - planning and organizing the testing process, documentation, reporting of test results',
        'courses-f': 'Beonmax - C and Java',
        'My cerificates': 'My cerificates',
        'code-example': 'Code example',
        'contacts': 'Contacts',
        'personal-information': 'Personal information',
        'location': 'Location: Belarus - Gomel/Minsk, Poland - Warsaw/Wroclaw',
        'moving': 'Moving: possible',
        'birthday': 'Date of birth: 18.01.1994',
        'employment': 'Employment: full time',
        'skills': 'Skills',
        'languages': 'Languages',
        'russian': 'Russian - Native',
        'engilsh': 'English - B1 (in progress)',
        'german': 'German - A1',
    },
    'ru': {
        'about-me': 'Обо мне',
        'about-me-content-1': 'Меня зовут Вячеслав, мне 29 лет, я начинающий тестировщик. Я бы описал себя как целеустремленного и трудолюбивого человека с хорошими организаторскими способностями и стратегическим мышлением. Кроме того, я конкурентоспособен и люблю преуспевать во всем, что я делаю. И последнее, но не менее важное: я очень гибкий и легко приспосабливаюсь к новым ситуациям. Независимо от ситуации, у меня есть способность адаптироваться и работать при любых обстоятельствах. В настоящий момент у меня нет опыта работы в сфере тестирования, так как я пришёл в неё недавно, однако активная жизненная позиция и целеустремлённость делают меня тем человеком, с которым вам захочется познакомиться и сотрудничать в дальнейшем.',
        'about-me-content-2': 'Я закончил университет им. Франциска Скорины по специальности "мировой экономист". Почти 2 года я работал в банке специалистом по оказанию розничных банковских услуг, полтора года работал старшим инспектором в Отделе внутренних дел и на данный момент работаю менеджером в Яндекс больше 2 лет.',
        'about-me-content-3': 'Сменить специальность меня вдохновил мой друг-тестировщик, за чьей работой я наблюдал. Мне стало интересно опробовать для себя нечто ранее незнакомое, и новая работа быстро меня захватила, теперь я планирую развиваться в этой сфере.',
        'about-me-content-4': 'Работая над каждым таском, я учусь чему-то новому, не стесняясь спрашивать помощи и советов. Для меня главное качественно и оперативно выполнить задание. На предстоящей должности для меня важно не только набраться опыта, но и занять своё место в команде, где я смогу пригодиться, с которой я смогу двигаться в будущее, внося свой вклад в общее дело.',
        'courses': 'Образование и курсы',
        'courses-first': 'Университет им. Франциска Скорины - мировая экономика',
        'courses-second': 'Geekbrains - тестирование ПО',
        'courses-third': 'TestPro - планирование и организация процесса тестирования, документирование, отчетность о результатах тестирования',
        'courses-f': 'Beonmax - C и Java',
        'my-certificates': 'Мои сертификаты',
        'code-example': 'Пример кода',
        'contacts': 'Контакты',
        'personal-information': 'Личная информация',
        'location': 'Город проживания: Беларусь - Гомель/Минск, Польша - Варшава/Вроцлав',
        'moving': 'Переезд: возможен',
        'birthday': 'Дата рождения: 18.01.1994',
        'employment': 'Занятость: полная',
        'skills': 'Навыки',
        'languages': 'Языки',
        'russian': 'Русский - Родной',
        'engilsh': 'Английский - B1(в процессе обучения)',
        'german': 'Немецкий - А1',
    }
}

const enLang = document.querySelector('.eng')
const ruLang = document.querySelector('.rus')

enLang.addEventListener('click', () => getTranslate('en'));
ruLang.addEventListener('click', () => getTranslate('ru'));

function getTranslate(lang = 'ru') {
    const textForTranslate = document.querySelectorAll('[data-i18n]');
    textForTranslate.forEach((elem) => {
        elem.textContent = i18Obj[lang][elem.dataset.i18n]
    })
}

const switchContainer = document.querySelector('.switch-container');

const languages = document.querySelectorAll('.language');
function change(event) {
    if (event.target.classList.contains('language')) {

        languages.forEach((btn) => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
}

switchContainer.addEventListener('click', change);

