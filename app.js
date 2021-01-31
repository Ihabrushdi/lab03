var userName = prompt('what is your name');
// console.log(userName);
document.write(userName)
var age = prompt('how old are you ?')

if(age >= 20){
    alert("welcome to my site")
}else if(age <20){
    alert(' sorry this site will not be for you')
}

var course = prompt('what would you like to study? math or science')

// T && T >> T
// F && T >> F
// T && F >> F
// F && F >> F

// T || T >> T
// F || T >> T
// T || F >> T
// F || F >> F
// !F >> T
// !T >> F

//course = arabic
// T && T >> T
// course = math

//coursc=arbic
// T ||
while(course !== 'math' && course !== "science"){
    course= prompt('please enter math or science');
}

var imageNum = prompt('how many images do you want to print?')



for(var i = 0 ; i < imageNum ; i++){
    document.write('<img src="https://images.squarespace-cdn.com/content/v1/5c482366365f02e0856d74fb/1548934959896-WDXHOAXTAEYUWE1V48BZ/ke17ZwdGBToddI8pDm48kPsEd3s5KpJXPK6v-WGIuYkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2duqt_ZdffZIUTHzcYwzXL2mdMDW7br8IO8JsTHMeOZvZOpYghpI-Ha_TwZsqqmJXng/Training+courses+shutterstock_409034983.jpg?format=1500w" />')
}