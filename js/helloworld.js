var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
function greeter(whoToGreet) {
    return "Hello " + whoToGreet.fullName + ".";
}
function showLuckyNumber(student) {
    return "Lucky number is " + student.luckyNumber;
}
function showTeams(student) {
    var teamList = "";
    for (var t = 0; t < student.teams.length; t++) {
        teamList += "<br/> " + student.teams[t] + ";";
    }
    return teamList;
}
var me = new Student();
me.fullName = "Melissa Capps";
me.isPresent = true;
me.luckyNumber = 7;
me.teams = ["Southampton", "Hampshire", "Bristol"];
document.body.innerHTML =
    document.body.innerHTML =
        "<h1>" + greeter(me) + "</h1>" +
            ("<h2>" + showLuckyNumber(me) + "</h2>") +
            ("<p>" + showTeams(me) + "</p>");
