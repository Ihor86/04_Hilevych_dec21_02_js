// 1.- є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати його, створивши для кожного елементу масиву <div class='member'>.

function simpsonIterator(listPerson) {
    for (const person of listPerson) {
        let divPerson = document.createElement(`div`);
        divPerson.classList.add(`member`);

        let h2 = document.createElement(`h2`);
        h2.innerText = `${person.name} ${person.surname}`;

        let h3 = document.createElement(`h3`);
        h3.innerText = `Age: ${person.age}`;

        let h4 = document.createElement(`h4`);
        h4.innerText = `${person.info}`;

        let imgPhoto = document.createElement(`img`);
        imgPhoto.src = `${person.photo}`;
        divPerson.append(h2, h3, h4, imgPhoto);
        document.body.appendChild(divPerson);

    }
}

simpsonIterator(simpsons);

// 2/ взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//     Для кожної властивості елементу створити окремий блок, та помістити його у div.member
//
console.log(`Task 2`);

function simpsonIterator2(listPerson) {
    for (const person of listPerson) {
        let divPerson = document.createElement(`div`);
        divPerson.classList.add(`member`);

        let divName = document.createElement(`div`);
        divName.innerText = `Name: ${person.name}`;

        let divSurname = document.createElement(`div`);
        divSurname.innerText = `Surname: ${person.surname}`;

        let divAge = document.createElement(`div`);
        divAge.innerText = `Age: ${person.age}`;

        let divInfo = document.createElement(`div`);
        divInfo.innerText = person.info;

        let divPhoto = document.createElement(`div`);
        let imgPhoto = document.createElement(`img`);
        imgPhoto.src = person.photo;
        imgPhoto.alt = person.name;
        divPhoto.appendChild(imgPhoto);

        divPerson.append(divName, divSurname, divAge, divInfo, divPhoto);
        document.body.appendChild(divPerson);
    }
}


simpsonIterator2(simpsons);

// - 3. Є масив
console.log(`Task 3`);

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

function coursesIterator(coursesList) {
    let divCourses = document.createElement(`div`);
    document.body.appendChild(divCourses);
    for (const element of coursesList) {
        let divCourse = document.createElement(`div`);
        divCourses.appendChild(divCourse);

        let divTitle = document.createElement(`div`);
        let h2 = document.createElement(`h2`);
        console.log(h2);
        h2.innerText = element.title;
        console.log(h2);
        divTitle.appendChild(h2);

        let divMonthDuration = document.createElement(`div`);
        let h3 = document.createElement(`h3`);
        h3.innerText = `Month duration: ${element.monthDuration}`;
        divMonthDuration.appendChild(h3);

        let divHourDuration = document.createElement(`div`);
        let h3_2 = document.createElement(`h3`);
        h3_2.innerText = `Hour duration: ${element.hourDuration}`;
        divHourDuration.appendChild(h3_2);

        let divModules = document.createElement(`div`);
        let ulModules = document.createElement(`ul`);

        for (const modulItem of element.modules) {
            let liModule = document.createElement(`li`);
            liModule.innerText = modulItem;
            ulModules.appendChild(liModule);
        }
        divModules.appendChild(ulModules);
        divCourse.append(divTitle, divMonthDuration, divHourDuration, divModules);
    }
}

coursesIterator(coursesArray);

