function generateName() {
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let yearOfBirth = document.getElementById("year").value;
    let month = (document.getElementById("month").value);
    let day = (document.getElementById("day").value);
    let genders = document.getElementsByName("gender");

    function validateMonth() {
        if (month < 1 || month > 12) {
            alert('Please enter a valid month("1-12")');
        } else {
            return true;
        }
    }

    let monthOkay = validateMonth();

    function validateYear() {
        if (Number(yearOfBirth) < 0001 || Number(yearOfBirth) > 2021 && yearOfBirth.length != 4) {
            alert("Please enter a valid year(\"0001 - 2021\")");
        } else {
            return true;
        }
    }
    let yearOkay = validateYear();

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

    let dayOkay = ValidateDay();


    function getGender() {
        for (let gender of genders) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }
    let userGender = getGender();

    var century = yearOfBirth.slice(0, 2);
    var year = yearOfBirth.slice(2, 5);
     
        

    var CC = parseInt(century);
    var YY = parseInt(year);
    var MM = parseInt(month);
    var DD = parseInt(day);

    var dayOfWeekNumber = Math.floor(((((CC/4) - 2 * CC - 1) + ((5 * YY) / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
    
    console.log(dayOfWeekNumber);
    if (userGender == "male" && monthOkay && dayOkay && yearOkay) {
        switch (dayOfWeekNumber) {
            case 1:
                document.getElementById("input-name").innerHTML = " " + maleNames[0];
                document.getElementById("input-day").innerHTML = " " + dayNames[0];
                return false;
            case 2:
                document.getElementById("input-name").innerHTML = " " + maleNames[1];
                document.getElementById("input-day").innerHTML = " " + dayNames[1];
                return false;
            case 3:
                document.getElementById("input-name").innerHTML = " " + maleNames[2];
                document.getElementById("input-day").innerHTML = " " + dayNames[2];
                return false;
            case 4:
                document.getElementById("input-name").innerHTML = " " + maleNames[3];
                document.getElementById("input-day").innerHTML = " " + dayNames[3];
                return false;
            case 5:
                document.getElementById("input-name").innerHTML = " " + maleNames[4];
                document.getElementById("input-day").innerHTML = " " + dayNames[4];
                return false;
            case 6:
                document.getElementById("input-name").innerHTML = " " + maleNames[5];
                document.getElementById("input-day").innerHTML = " " + dayNames[5];
                return false;
            case 7:
                document.getElementById("input-name").innerHTML = " " + maleNames[6];
                document.getElementById("input-day").innerHTML = " " + dayNames[6];
                return false;
            default:
                alert("An expected error has occurred");
        }
    } else if (userGender == "female" && monthOkay && dayOkay && yearOkay) {
        switch (dayOfWeekNumber) {
            case 1:
                document.getElementById("input-name").innerHTML = " " + femaleNames[0];
                document.getElementById("input-day").innerHTML = " " + dayNames[0];
                return false;
            case 2:
                document.getElementById("input-name").innerHTML = " " + femaleNames[1];
                document.getElementById("input-day").innerHTML = " " + dayNames[1];
                return false;
            case 3:
                document.getElementById("input-name").innerHTML = " " + femaleNames[2];
                document.getElementById("input-day").innerHTML = " " + dayNames[2];
                return false;
            case 4:
                document.getElementById("input-name").innerHTML = " " + femaleNames[3];
                document.getElementById("input-day").innerHTML = " " + dayNames[3];
                return false;
            case 5:
                document.getElementById("input-name").innerHTML = " " + femaleNames[4];
                document.getElementById("input-day").innerHTML = " " + dayNames[4];
                return false;
            case 6:
                document.getElementById("input-name").innerHTML = " " + femaleNames[5];
                document.getElementById("input-day").innerHTML = " " + dayNames[5];
                return false;
            case 7:
                document.getElementById("input-name").innerHTML = " " + femaleNames[6];
                document.getElementById("input-day").innerHTML = " " + dayNames[6];
                return false;
            default:
                alert("An expected error has occurred!");
        }
    } else {
        alert("Please try again");
    }
}
