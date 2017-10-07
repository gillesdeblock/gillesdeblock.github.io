// Temporary method for hardcoded data

let item1 = {
    id: 1,
    title: "VeggieHero",
    linkUrl: "https://veggie-hero.herokuapp.com/",
    screenshotUrl: "veggiehero.png",
    description: "As an assignment for the course Projects III, together with a colleague I created this webapplication to motivate people for becoming veganistic. The application was developed in a MEAN environment (MongdoDB, ExpressJS, AngularJS en NodeJS)."
};
let item2 = {
    id: 2,
    title: "Friendzy",
    linkUrl: "https://friendzy-webapps-2016.herokuapp.com/",
    screenshotUrl: 'friendzy.png',
    description: "This application was an assignment for the course Webapplications III. We had to develop something for the first time using the MEAN stack (MongdoDB, ExpressJS, AngularJS en NodeJS). It\'s inspired by the many social platforms out there (e.g. Facebook), but this was a much more simplified version, made for learning purposes."
};
let item3 = {
    id: 3,
    title: "Portfolio (Older Version)",
    linkUrl: "http://users.hogent.be/gilles_de_block/",
    screenshotUrl: 'old-portfolio.png',
    description: "For a course named iTalent we had to develop a portfolio for ourselves. For this project I used pure Javascript, CSS3 and HTML5. I also made use of Bootstrap for design purposes."
};
let item4 = {
    id: 4,
    title: "Todo App",
    linkUrl: "",
    screenshotUrl: 'todo-app.png',
    description: "A basic Todo application I made in my free time. It was made while learning the basics of ReactJS."
}

const initialState = {
    workList: [item1, item2, item3, item4]
};

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            state = {
                workList: [...state.workList, action.payload]
            };
            break;
    }
    return state;
};

export default portfolioReducer;