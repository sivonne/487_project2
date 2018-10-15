// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "main":    "",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        levels:{
        "level1":  {"title": "Homer", "descShort":"HOMER", "descLong":"Homer is a wild child through and through. He loves food, drink, basically anything that can go in his stomach. He's a bit hard to understand, but after a while of getting to know him you realize he's pretty simple- he loves his family, feeds his stomach, and thinks Flanders is stupid.", image: "../img/homer.gif", rangeStart: 0, rangeEnd: 7 },
        "level2":  {"title": "Fry", "descShort":"FRY", "descLong":"Fry is a bit of a dummy. He locked himself in a cryogenic tank. That says it all. But he does have a huge heart for Leela, and a fierce craving for pizza, even after a thousand years after being a delivery boy.", image: "../img/fry.jpg", rangeStart: 8, rangeEnd: 14},


        "level3":  {"title": "Apple", "descShort":"APPLE", "descLong":"Apples are classic, classy, and sophisticated. Apples know what&#8217;s up. You can&#8217;t mess with an apple. You try to mess with an apple and you&#8217;ll regret it. You try to mess with an apple and you get taken TO SCHOOL. Apples just have it together and know what&#8217;s up.", image: "result-apple.jpg", rangeStart: 15, rangeEnd: 21},
        "level4":  {"title": "Strawberry", "descShort":"STRAWBERRY",  "descLong":"Strawberries are tiny berry bosses. When the strawberries come in, it&#8217;s serious. SERIOUS FUN. Is there anything more fun and flirty than a strawberry? Everyone loves them. But not everyone can have them, especially when they&#8217;re not in season. You&#8217;re IN DEMAND.", image: "result-strawberry.jpg", rangeStart: 22, rangeEnd: 28},
        "level5":  {"title": "Cherry", "descShort":"CHERRY",  "descLong":"Wow. Just wow. Cherries are really cool. In the fruit world, cherries are very intimidating. Cherries are the impossibly cool and good looking fruit of the produce world. Effortlessly chic, good personality, not trying too hard, but BLAM, really making a statement. Not everyone can be a cherry. Not everyone SHOULD be a cherry. But you, my friend, you&#8217;re one of the cherries.", image: "result-cherries.jpg", rangeStart: 29, rangeEnd: 35},
        "level6":  {"title": "Oranges", "descShort":"ORANGES",  "descLong":"Oranges are smart as hell. And don&#39;t tell the other fruits, but they&#39;re a little bit perfect. Technically nothing is perfect, but you kind of are. DON&#39;T TELL ANYONE THOUGH BECAUSE IT&#39;S NOT FAIR. As an orange, you&#39;re ready for life&#39;s challenges and there&#39;s nothing that can stop you. But again, please, THIS IS OUR LITTLE SECRET.", image: "result-oranges.jpg", rangeStart: 36, rangeEnd: 42} // no comma here// no comma here
        }
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What's your favorite food?",
            "a": [
              {"option": "Donuts", "correct": true, "value":"4", "image": "../img/donut.jpeg"},
              {"option": "Pizza", "correct": true, "value":"0", "image": "../img/beer.jpg"},
              {"option": "Ice cream", "correct": true, "value":"5", "image": "quiz-thumbimg-dance3.jpg"},
              {"option": "Coffee", "correct": true, "value":"3", "image": "quiz-thumbimg-dance4.jpg"},
              {"option": "Oil", "correct": true, "value":"1", "image": "quiz-thumbimg-dance5.jpg"},
              {"option": "Beer", "correct": true, "value":"2", "image": "quiz-thumbimg-dance6.jpg"} // no comma here
            ],
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is your mantra? ",
            "a": [
                {"option": "Heels", "correct": true, "value":"4", "image": "quiz-thumbimg-dance1.jpg"},
                {"option": "Work boots", "correct": true, "value":"0", "image": "quiz-thumbimg-dance2.jpg"},
                {"option": "Golf shoes", "correct": true, "value":"5", "image": "quiz-thumbimg-dance3.jpg"},
                {"option": "Flip-flops", "correct": true, "value":"3", "image": "quiz-thumbimg-dance4.jpg"},
				{"option": "Slippers", "correct": true, "value":"1", "image": "quiz-thumbimg-dance5.jpg"},
				{"option": "Clown shoes", "correct": true, "value":"2", "image": "quiz-thumbimg-dance6.jpg"} // no comma here
            ],
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What decade were you born in?",
            "a": [
                {"option": "Cheetos",           "correct": true, "value":"1", "image": "quiz-thumbimg-island1.jpg"},
                {"option": "Sun screen",                  "correct": true, "value":"2", "image": "quiz-thumbimg-island2.jpg"},
                {"option": "Water",  "correct": true, "value":"3", "image": "quiz-thumbimg-island3.jpg"},
                {"option": "Gun",          "correct": true, "value":"5", "image": "quiz-thumbimg-island4.jpg"},
				{"option": "Books",  "correct": true, "value":"4", "image": "quiz-thumbimg-island5.jpg"},
				{"option": "Pet",          "correct": true, "value":"0", "image": "quiz-thumbimg-island6.jpg"}// no comma here
            ],

        },
        { // Question 4
            "q": "WHICH ANIMAL'S LOOK ARE YOU FEELING?",
            "a": [
                {"option": "Luxury apartment",    "correct": true, "value":"4", "image": "quiz-thumbimg-animal1.jpg"},
                {"option": "Beach house",     "correct": true, "value":"3", "image": "quiz-thumbimg-animal2.jpg"},
                {"option": "Log cabin in woods",      "correct": true, "value":"0", "image": "quiz-thumbimg-animal3.jpg"},
				{"option": "Tent",      "correct": true, "value":"5", "image": "quiz-thumbimg-animal4.jpg"},
                {"option": "Ranch",   "correct": true, "value":"2", "image": "quiz-thumbimg-animal5.jpg"},
				{"option": "Studio",   "correct": true, "value":"1", "image": "quiz-thumbimg-animal6.jpg"} // no comma here
            ],
        },
        { // Question 5
            "q": "PICK A VEGETABLE",
            "a": [
                {"option": "Veg 1",    "correct": true, "value":"4", "image": "quiz-thumbimg-veg1.jpg"},
				{"option": "Veg 2",    "correct": true, "value":"5", "image": "quiz-thumbimg-veg2.jpg"},
				{"option": "Veg 3",    "correct": true, "value":"0", "image": "quiz-thumbimg-veg3.jpg"},
				{"option": "Veg 4",    "correct": true, "value":"1", "image": "quiz-thumbimg-veg4.jpg"},
				{"option": "Veg 5",    "correct": true, "value":"2", "image": "quiz-thumbimg-veg5.jpg"},
                {"option": "Veg 6",     "correct": true, "value":"3", "image": "quiz-thumbimg-veg6.jpg"} // no comma here
            ],

        },
		{ // Question 6
            "q": "PICK A PLANET",
            "a": [
                {"option": "New Year’s Eve",    "correct": true, "value":"0", "image": "quiz-thumbimg-planet1.jpg"},
				{"option": "Fourth of July",    "correct": true, "value":"4", "image": "quiz-thumbimg-planet2.jpg"},
				{"option": "Halloween",    "correct": true, "value":"3", "image": "quiz-thumbimg-planet3.jpg"},
				{"option": "Thanksgiving",    "correct": true, "value":"1", "image": "quiz-thumbimg-planet4.jpg"},
				{"option": "Valentine’s Day",    "correct": true, "value":"5", "image": "quiz-thumbimg-planet5.jpg"},
                {"option": "Labor Day",     "correct": true, "value":"2", "image": "quiz-thumbimg-planet6.jpg"} // no comma here
            ],

        },
		{ // Question 7
            "q": "WHAT ARE YOU MOST LIKELY DOING AT A PARTY?",
            "a": [
                {"option": "New York City",    "correct": true, "value":"5", "image": "quiz-thumbimg-party1.jpg"},
				{"option": "Seattle",    "correct": true, "value":"0", "image": "quiz-thumbimg-party2.jpg"},
				{"option": "San Francisco",    "correct": true, "value":"2", "image": "quiz-thumbimg-party3.jpg"},
				{"option": "Washington, D.C.",    "correct": true, "value":"1", "image": "quiz-thumbimg-party4.jpg"},
				{"option": "Austin",    "correct": true, "value":"3", "image": "quiz-thumbimg-party5.jpg"},
                {"option": "Nashville",     "correct": true, "value":"4", "image": "quiz-thumbimg-party6.jpg"} // no comma here
            ],

        } // no comma here// no comma here

    ]
};
