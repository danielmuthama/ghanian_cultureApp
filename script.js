function nameGenerator() {
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let male= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let dob = Number(document.getElementById("day").value);
    let mob = Number(document.getElementById("month").value);
    let yob = Number(document.getElementById("year").value);
    let cob = Number(document.getElementById("century").value);
    let gender = document.getElementsByName("gender");

    function ValidateDay() {
        if (month === 2 && Number(yearOfBirth) % 4 === 0) {
            if (day < 1 || day > 28) {
                alert("please enter a valid date(\"1-28\")");
            } else if (day < 1 && day > 29) {
                alert("please enter a valid date(\"1-29\")");
            } else {
                return true;
            }
        } else if (day < 1 || day > 31) {
            alert("Please enter valid date(\"1-31\")");
        } else {
            return true;
        }
    }
    

    function validatingmob() {
        if (mob < 1 || mob > 12) {
            alert('Please enter a valid month("1-12")');
        } else {
            return true;
        }
    }