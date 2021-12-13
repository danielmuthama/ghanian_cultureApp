function nameGenerator() {
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let male= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let dob = Number(document.getElementById("day").value);
    let mob = Number(document.getElementById("month").value);
    let yob = Number(document.getElementById("year").value);
    let cob = Number(document.getElementById("century").value);
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
    function validatingcob() {
        if (cob/100 && yob.length != 2) {
            alert("Enter a valid century");
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
    let validatedcob =validatingcob();
    let checkedgender = gender();

    let dofWeekNumber = Math.floor((((Number(cob.slice(0, 2)) / 4) - 2 * Number(cob.slice(0, 2)) - 1) +
    ((5 * Number(yob.slice(2, 4)) / 4)) + ((26 * (mob + 1) / 10)) + dob) % 7);

}
