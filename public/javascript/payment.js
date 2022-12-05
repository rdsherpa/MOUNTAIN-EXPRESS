const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const creditNumber = document.getElementById("credit-number")
const form = document.querySelector("#payment-form")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        creditNumber: creditNumber.value
    };

//sending the payment data to the backend
    fetch("/api/users/payment", {
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
})