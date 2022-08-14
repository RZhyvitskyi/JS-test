// 1. (Main theme: Programming Basics)

const logNumbers = (min, max) => {
  for (let number = min; number <= max; number++) {
    if (number % 15 == 0) {
      console.log('Jackpot!');
    } else if (number % 5 == 0) {
      console.log('This is divisible by 5');
    } else if (number % 3 == 0) {
      console.log('This is divisible by 3');
    } else {
      console.log(number);
    }
  }
};

logNumbers(1, 100);

// 2. (Main theme: DOM manipulation)
main = document.getElementById('main');
btn = document.createElement('button');
imgWrapper = document.createElement('div');

btn.innerHTML = 'Show img';

main.appendChild(btn);
main.appendChild(imgWrapper);

btn.addEventListener('click', async () => {
  img = document.createElement('img');

  const apiKey = 'T6hvvqbjUzckfDTQKRzmaA68TzxoR63K';
  apiRequest = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
  );
  data = await apiRequest.json();

  img.src = data.data[0].images.downsized.url;

  imgWrapper.appendChild(img);
});

// 3. (Main theme: Async API calls)
userList = document.createElement('ul');
main.appendChild(userList);

(async () => {
  url = 'https://reqres.in/api/users';
  apiRequest = await fetch(url);
  usersData = await apiRequest.json();

  usersData.data.forEach((user, index) => {
    if (index < 3) {
      userItem = document.createElement('li');
      userItem.innerHTML = user.first_name;
      userList.appendChild(userItem);
    }
  });
})();

// 4. Working with classes

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  logProduct() {
    console.log(`${this.name} is ${this.price}kr`);
  }
}

const table = new Product('table', 1200);
table.logProduct();
