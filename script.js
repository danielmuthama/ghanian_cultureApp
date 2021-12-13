function nameGenerator() {
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let male= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let dob = Number(document.getElementById("day").value);
    let mob = Number(document.getElementById("month").value);
    let yob = Number(document.getElementById("year").value);
    let sex = document.getElementsByName("gender");


    function validatingdob() {

        if (month === 2 && yob % 4 === 0) {
            if (day < 1 || day > 28) {
                alert("This isn't a leap year enter a valid date between 1 and 28");
            } else if (day < 1 && day > 29) {
                alert("This is a leap year enter a valid date between 1 and 29");
            } else {
                return true;
            }
        } else if (day < 1 || day > 31) {
            alert("Enter a valid date between 1 and 31");
        } else {
            return true;
        }
    }
    

    function validatingmob() {
        if (mob < 1 || mob > 12) {
            alert('Enter a valid month between 1 and 12');
        } else {
            return true;
        }
    }
    function validatingyob() {
        if (yob < 0001 || yob > 2021 && yob.length != 4) {
            alert("Enter a four digit number between 0001 and 2021");
        } else {
            return true;
        }
    }

    function gender() {
        for (let gender of sex) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }
    let validateddob =validatingdob();
    let validatedmob =validatingmob();
    let validatedyob =validatingyob();
    let checkedgender = gender();

    let dofWeekNumber = Math.floor((((Number(yob.slice(0, 2)) / 4) - 2 * Number(yob.slice(0, 2)) - 1) +
    ((5 * Number(yob.slice(2, 4)) / 4)) + ((26 * (mob + 1) / 10)) + dob) % 7);

    if (checkedgender == "male" && validateddob && validatedmob && validatedyob) {
       
        switch (dofWeekNumber) {
            case 1:
                document.getElementById("name").innerHTML = " " + male[0];
                document.getElementById("day").innerHTML = " " + day[0];
                return false;
            case 2:
                document.getElementById("ame").innerHTML = " " + male[1];
                document.getElementById("day").innerHTML = " " + day[1];
                return false;
            case 3:
                document.getElementById("name").innerHTML = " " + male[2];
                document.getElementById("day").innerHTML = " " + day[2];
                return false;
            case 4:
                document.getElementById("name").innerHTML = " " + male[3];
                document.getElementById("day").innerHTML = " " + day[3];
                return false;
            case 5:
                document.getElementById("name").innerHTML = " " + male[4];
                document.getElementById("day").innerHTML = " " + day[4];
                return false;
            case 6:
                document.getElementById("name").innerHTML = " " + male[5];
                document.getElementById("day").innerHTML = " " + day[5];
                return false;
            case 7:
                document.getElementById("name").innerHTML = " " + male[6];
                document.getElementById("day").innerHTML = " " + day[6];
                return false;
        }
    } else if (checkedgender == "female" && validateddob && validatedmob && validatedyob) {
        switch (dayOfWeekNumber) {
            case 1:
                document.getElementById("name").innerHTML = " " + female[0];
                document.getElementById("day").innerHTML = " " + day[0];
                return false;
            case 2:
                document.getElementById("name").innerHTML = " " + female[1];
                document.getElementById("day").innerHTML = " " + day[1];
                return false;
            case 3:
                document.getElementById("name").innerHTML = " " + female[2];
                document.getElementById("day").innerHTML = " " + day[2];
                return false;
            case 4:
                document.getElementById("name").innerHTML = " " + female[3];
                document.getElementById("day").innerHTML = " " + day[3];
                return false;
            case 5:
                document.getElementById("name").innerHTML = " " + female[4];
                document.getElementById("day").innerHTML = " " + day[4];
                return false;
            case 6:
                document.getElementById("name").innerHTML = " " + female[5];
                document.getElementById("day").innerHTML = " " + day[5];
                return false;
            case 7:
                document.getElementById("name").innerHTML = " " + female[6];
                document.getElementById("day").innerHTML = " " + day[6];
                return false;
        }
    }
}
    