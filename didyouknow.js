//my first project
//DID You Know
var didYouKnow = ["<div class ='box'>the most commonly used letter in the alphabet is E.</div>","<div class = 'box'>cats spend 66%  of their life asleep.</div>",
"<div class='box'>an average person will spend 25 years asleep.</div>","<div class='box'>M&M's chocolate stands for the initials for its inventors Mars and Murrie.</div>",
"<div class='box'>snakes can't bite in rivers or swamps (they would drown otherwise).</div>","<div class='box'>the safest car color is white.</div>",
"<div class='box'>The Great Wall of China is approximately 6,430 Km long (3,995 miles).</div>",
"<div class='box'>months that start on a Sunday will always have a Friday the 13th.</div>","<div class='box'>the diameter of Earth is 12,756 km (7,926 miles).</div>",
"<div class='box'>if your DNA was stretched out it would reach to the moon 6,000 times.</div>","<div class='box'>apples are more effective at waking you up in the morning than coffee.</div>",
"<div class='box'>dreamt is the only word that ends in mt.</div>","<div class='box'>it took Leonardo Da Vinci 10 years to paint Mona Lisa.</div>",
"<div class='box'>Bill Gates began programming computers at the age of 13.</div>","<div class='box'>paper money was first used in China.</div>",
"<div class='box'>carrots contain 0% fat,<br/>a banana contains 75% water.</div>","<div class='box'>Mount Everest is 8.9km (5.5 miles) high.</div>",
"<div class='box'>the Eiffel Tower is over 300m (984 ft) tall.</div>","<div class='box'>tennis was originally played with bare hands.</div>",
"<div class='box'>11% of people are left handed.</div>","<div class='box'>the average human brain contains around 78% water.</div>",
"<div class='box'>your foot and your forearm are the same length.</div>","<div class='box'>Rio de Janeiro translates to river of January.</div>",
"<div class='box'>avocados have the most calories of any other fruit.</div>","<div class='box'>the only continent with no active volcanoes is Australia.</div>",
"<div class='box'>there are 31,557,600 seconds in a year.</div>","<div class='box'>honey is the only natural food which never spoils.</div>",
"<div class='box'>an office desk has 400 times more bacteria than a toilet.</div>","<div class='box'>Porsche also builds tractors.</div>",
"<div class='box'>people who work at night tend to weigh more.</div>","<div class='box'>85% of plant life is found in the ocean</div>","<div class='box'>the 3 most common word languages in the world are Mandarin Chinese, Spanish and English</div>",
"<div class='box'>a lobsters blood is colorless but when exposed to oxygen it turns blue</div>","<div class='box'>Perth is Australia's windiest city</div>",
"<div class='box'>Switzerland eats the most chocolate equating to 10 kilos per person per year</div>","<div class='box'>money is the number one thing that couples argue about</div>",
"<div class='box'>when lightning strikes it can reach up to 30,000 degrees celsius (54,000 degrees fahrenheit)</div>","<div class='box'>the longest street in the world is Yonge street in Toronto Canada measuring 1,896 km (1,178 miles)</div>",
"<div class='box'>the Internet was originally called ARPANet (Advanced Research Projects Agency Network) designed by the US department of defense</div>",
"<div class='box'>1 nautical knot equates to 1.852 Kph (1.150 mph)</div>","<div class='box'>it's possible to lead a cow up stairs but not down</div>",
"<div class='box'>your tongue is the fastest healing part of your body</div>","<div class='box'>hummingbirds are the only bird that can fly backwards</div>","<div class='box'>the most commonly forgotten item for travelers is their toothbrush</div>",
"<div class='box'>the Taj Mahal in India is made entirely out of marble</div>","<div class='box'>the word typewriter is the longest word that can be typed using only the top row of a keyboard</div>",
"<div class='box'>Germany borders 9 other countries</div>","<div class='box'>you burn more calories sleeping than watching television</div>",
"<div class='box'>there are 70 million sheep in New Zealand (with 4 million people)</div>","<div class='box'>the D.C. in Washington D.C. stands for District of Columbia</div>"];

function randomNumber(){

return Math.floor(Math.random()*didYouKnow.length);

}

function results(){

var results = didYouKnow[randomNumber()];

var myResults = document.querySelector('.dyk');
myResults.innerHTML = results;
}

results();
