function booked() {

    var name = document.getElementById("booking_name");
    var start = document.getElementById("start_time");
    var end = document.getElementById("end_time");
    var b = document.getElementById("total_seats").value;
    var seats = parseInt(b);

    if (name.value == "") {
        alert("Enter a name");
    }
    else if (start.value == "") {
        alert("Enter a Start Date");
    } else if (end.value == "") {
        alert("Enter a End Date");
    } else if (seats.value == "") {
        alert("Enter seat number");
    } else {
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("confirmed");

        // console.log(btn);

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        modal.style.display = "block";

        var summary = document.getElementById("booking_summary");
        var a = document.getElementById("book_cost").textContent;
        var cost = parseInt(a);
        console.log(cost);
        console.log(seats);
        total = seats * cost;
        summary.innerHTML = "Your booking has been confirmed. Continue to payment. Total Bill: $" + total * 1000;
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

}