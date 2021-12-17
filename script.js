function generateName() {
    let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let yob = document.getElementById("year").value;
    let month = Number(document.getElementById("month").value);
    let day = Number(document.getElementById("day").value);
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
        if (Number(yob) < 0001 || Number(yob) > 2021 && yob.length != 4) {
            alert("Please enter a valid year(\"0001 - 2021\")");
        } else {
            return true;
        }
    }
    let yearOkay = validateYear();

    function ValidateDay() {
        if (month === 2 && Number(yob) % 4 === 0) {
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

    let dayOfWeekNumber = Math.floor((((Number(yob.slice(0, 2)) / 4) - 2 * Number(yob.slice(0, 2)) - 1) +
        ((5 * Number(yob.slice(2, 4)) / 4)) + ((26 * (month + 1) / 10)) + day) % 7);

    if (userGender == "male" && monthOkay && dayOkay && yearOkay) {
        switch (dayOfWeekNumber) {
            case 1:
                document.getElementById("input-name").innerHTML = " " + male[0];
                document.getElementById("input-day").innerHTML = " " + day[0];
                return false;
            case 2:
                document.getElementById("input-name").innerHTML = " " + male[1];
                document.getElementById("input-day").innerHTML = " " + day[1];
                return false;
            case 3:
                document.getElementById("input-name").innerHTML = " " + male[2];
                document.getElementById("input-day").innerHTML = " " + day[2];
                return false;
            case 4:
                document.getElementById("input-name").innerHTML = " " + male[3];
                document.getElementById("input-day").innerHTML = " " + day[3];
                return false;
            case 5:
                document.getElementById("input-name").innerHTML = " " + male[4];
                document.getElementById("input-day").innerHTML = " " + day[4];
                return false;
            case 6:
                document.getElementById("input-name").innerHTML = " " + male[5];
                document.getElementById("input-day").innerHTML = " " + day[5];
                return false;
            case 7:
                document.getElementById("input-name").innerHTML = " " + male[6];
                document.getElementById("input-day").innerHTML = " " + day[6];
                return false;
            default:
                alert("An expected error has occurred");
        }
    } else if (userGender == "female" && monthOkay && dayOkay && yearOkay) {
        switch (dayOfWeekNumber) {
            case 1:
                document.getElementById("input-name").innerHTML = " " + female[0];
                document.getElementById("input-day").innerHTML = " " + day[0];
                return false;
            case 2:
                document.getElementById("input-name").innerHTML = " " + female[1];
                document.getElementById("input-day").innerHTML = " " + day[1];
                return false;
            case 3:
                document.getElementById("input-name").innerHTML = " " + female[2];
                document.getElementById("input-day").innerHTML = " " + day[2];
                return false;
            case 4:
                document.getElementById("input-name").innerHTML = " " + female[3];
                document.getElementById("input-day").innerHTML = " " + day[3];
                return false;
            case 5:
                document.getElementById("input-name").innerHTML = " " + female[4];
                document.getElementById("input-day").innerHTML = " " + day[4];
                return false;
            case 6:
                document.getElementById("input-name").innerHTML = " " + female[5];
                document.getElementById("input-day").innerHTML = " " + day[5];
                return false;
            case 7:
                document.getElementById("input-name").innerHTML = " " + female[6];
                document.getElementById("input-day").innerHTML = " " + day[6];
                return false;
            default:
                alert("An expected error has occurred!");
        }
    } else {
        alert("Please try again");
    }
}