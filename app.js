function getRandomUser() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
  
        const userInfo = `
          <img src="${user.picture.large}" alt="User Image">
          <p><strong>Nombre:</strong> ${user.name.first} ${user.name.last}</p>
          <p><strong>Ubicación:</strong> ${user.location.city}, ${user.location.country}</p>
        `;
  
        document.getElementById('user-info').innerHTML = userInfo;
      })
      .catch(error => console.error('Error al obtener datos aleatorios:', error));
  }
  
  
  getRandomUser();

