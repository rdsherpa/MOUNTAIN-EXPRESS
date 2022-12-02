const newFormHandler = async (event) => {
    event.preventDefault();
  
    const pickUp = document.querySelector('#pickUp').value.trim();
    const destination = document.querySelector('#dropOff').value.trim();
    const nb_passengers = document.querySelector('#passengerNum').value.trim();

   
  
    if (pickUp && destination && nb_passengers) {
      const response = await fetch(`/api/trips/one-way`, {
        method: 'POST',
        body: JSON.stringify({ pickUp, destination, nb_passengers }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/'); //this will be the final path after user submits
      } else {
        alert('Failed to create a new trip');
      }
    }
  };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document
    .querySelector('.oneWayForm')
    .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);

