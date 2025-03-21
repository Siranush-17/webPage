let currentPage = 1;

function loadGoods() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `data_${currentPage}.json`, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
           console.log(xhr.status);
           console.log(xhr.responseText);
           const datas = JSON.parse(xhr.responseText);
           const container = document.getElementById('userContainer');
           datas.forEach(data => {
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `

            <img src = ${data.src} ></img>
            <h3>${data.name}</h3>
            <p>${data.price}</p>
            `;
            container.appendChild(userDiv)
            
           });

           currentPage++;
           
        } else {
            console.error('Սխալ հարցում:', xhr.status);
        }
    };

    xhr.send();
}

window.onload = function() {
    loadGoods();
}


document.querySelector('.hamburger').addEventListener('click', function () {
    const navBar = document.querySelector('.navBar');
    navBar.classList.toggle('active'); // Ավելացնում կամ հեռացնում է `active` դասը
  });

  function loadMenu() {
    const xhr = new XMLHttpRequest(); 
    xhr.open('GET', `menu.json`, true); 

    xhr.onload = function() {
        if (xhr.status === 200) {
            const datas = JSON.parse(xhr.responseText);
            const container = document.getElementById('rightNav');

            const menuList = document.createElement('ul');
            menuList.classList.add('childNav');

            datas.forEach(data => {
                const menuItem = document.createElement('li');
                menuItem.innerHTML = `<a class="link" href="${data.href}">${data.title}</a>`;
                menuList.appendChild(menuItem); 
            });

            container.prepend(menuList); 
        } else {
            console.error('Սխալ հարցում:', xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error('Սերվերի կամ ցանցի խնդիր');
    };

    xhr.send(); 
}

loadMenu();
