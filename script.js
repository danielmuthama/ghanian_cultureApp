function nameGenerator() {
    let male= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    

    let dob = Number(document.getElementById("d").value);
    let mob = Number(document.getElementById("m").value);
    let yob = (document.getElementById("y").value);
    let button = (document.getElementById("submit").disabled = true);
    let sex = document.getElementsByName("gender");
    
    function buttonDisable() {
        if (button = true) {
            alert ("Refresh the PAGE")
        }
    }

 

    function validatingdob() {
        if (mob === 2 && Number(yob) % 4 === 0) {
            if (dob < 1 || dob > 28) {
                alert("This isn't a leap year enter a valid date between 1 and 28");
            } else if (dob < 1 && dob > 29) {
                alert("This is a leap year enter a valid date between 1 and 29");
            } else {
                return true;
            }
        } else if (dob < 1 || dob > 31) {
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
        if (Number(yob) < 0001 || Number(yob) > 2021 || yob.length != 4) {
            alert("Enter a four digit number between 0001 and 2021");
        } else {
            return true
        }
    }

    function gender() {
        for (let gender of sex) {
            if (gender.checked) {
                return gender.value;
            } else {
        }
    }
    alert("please put the Gender male or female")
}

/*function calculatingcob(c,d) {  
    let c = yob%100;
    let d = Math.floor(yob+100) + 1;
    if (c.length == 2 && yob > 1 && yob < 2021 ) {
        return c; 
    } else if(d.length == 2 && yob > 1 && yob < 2021 ){
        return d;
        }         

    } */

    let validateddob =validatingdob();
    let validatedmob =validatingmob();
    let validatedyob =validatingyob();
    let checkedgender = gender();
    //let cob = calculatingcob();


    
    function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }
    let dayOfWeekNumber = randomNumber(1, 7)
   
    if (checkedgender == "male" && validateddob && validatedmob && validatedyob) {
       
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
                alert("an expectional error has occurredd");
        }
    } else if (checkedgender == "female" && validateddob && validatedmob && validatedyob) {
       
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
                    alert("an expectional error has occurred");
                    buttonDisable();
            }
        } else {
            alert("please start again!");
        }
    }
    