const bookingForm = document.getElementById("booking");
const to = document.getElementById("from");
const trip = document.getElementById("trip");
const where = document.getElementById("to");
const userDate = document.getElementById("userDate");
const userDateTime = document.getElementById("userDateTime");
const passengers = document.getElementById("passengers");

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      to: to.value,
      trip: trip.value,
      where: where.value,
      userDate: userDate.value,
      userDateTime: userDateTime.value,
      passengers: passengers.value,
    };
  
    fetch("/booking", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  console.log("hello");