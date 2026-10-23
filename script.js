function login()
{
    let username=document.getElementById("uname").value
    console.log(username);
     let password=document.getElementById("psw").value
     console.log(password);
     let error=document.getElementById("hii")
     if(username=="")
     {
                alert("fill the all inputs")
                Hii.textContent="not valide  "

     }
     localStorage.setItem("uname",username);
     if(password=="")
     {
        alert("fill the all inputs")
     }
    localStorage.setItem("psw",password);
    window.location.href="main.html"

}

function calculateBMI() {
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);

    const bmiValue = document.getElementById("bmiValue");
    const category = document.getElementById("category");
    const message = document.getElementById("message");
    const gauge = document.getElementById("gauge");

    if (!weight || !height || weight <= 0 || height <= 0) {
        category.textContent = "Invalid details";
        message.textContent = "Please enter a valid weight and height.";
        return;
    }

    const bmi = weight / Math.pow(height / 100, 2);

    bmiValue.textContent = bmi.toFixed(1);

    let color;
    let result;
    let advice;

    if (bmi < 18.5) {
        color = "#60a5fa";
        result = "Underweight";
        advice = "Consider discussing your nutritional needs with a healthcare professional.";
    } else if (bmi < 25) {
        color = "#22c55e";
        result = "Normal weight";
        advice = "Maintain balanced nutrition, regular activity and sufficient sleep.";
    } else if (bmi < 30) {
        color = "#fbbf24";
        result = "Overweight";
        advice = "Consider sustainable lifestyle habits and professional guidance if needed.";
    } else {
        color = "#f87171";
        result = "Obesity range";
        advice = "Consider discussing your overall health with a healthcare professional.";
    }

    category.textContent = result;
    category.style.color = color;
    message.textContent = advice;

    const degrees = Math.min((bmi / 40) * 360, 360);

    gauge.style.background = `conic-gradient(
        ${color} 0deg,
        ${color} ${degrees}deg,
        #e5e7eb ${degrees}deg,
        #e5e7eb 360deg
    )`;
}

function resetBMI() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmiValue").textContent = "--";
    document.getElementById("category").textContent = "Enter your details";
    document.getElementById("category").style.color = "";
    document.getElementById("message").textContent = "Your result will appear here.";
    document.getElementById("gauge").style.background =
        "conic-gradient(#22c55e 0deg, #e5e7eb 0deg)";
}


function logout()
{
    localStorage.clear()
    window.location.href="Bmilogin.html"
}
