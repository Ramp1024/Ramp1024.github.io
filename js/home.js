function feedback() {

    var name = document.getElementById("feedback_name").value;
    var feed = document.getElementById("feedback_tab").value;
    // console.log(name);
    if (name || feed == "") {
        alert("Provide all information");
    } else {
        alert("Thanks for submitting your feedback, Mr. " + name);
    }
}

function onboard() {
    location.href = 'plan.html';
}