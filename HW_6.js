//1

/*
Ваша задача - создать систему обработки заказов с использованием callback-функций.
Каждый заказ имеет свой уникальный номер, сумму и состояние (выполнен или не выполнен).
Вам нужно реализовать функции для добавления нового заказа, изменения состояния заказа и вывода информации о заказах.

// Объект для хранения заказов
const orders = {};

function addOrder(orderNumber, amount, callback) {
  Если заказа нет - добавить в список заказов с полем completed = false и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказ существует
}

function completeOrder(orderNumber, callback) {
   Если заказ существует - добавить в список заказов с полем completed = true и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказа нет
}

function listOrders(callback) {
  Пройтись по объекту заказов и вывести информацию в виде:
  Заказ #1 - Сумма: 50, выполнен
  Заказ #2 - Сумма: 30, не выполнен

  Сначала отформатируйте каждый заказ в таком виде, затем вызовите колбэк с отформатированным ордер-листом
}

// Использование системы обработки заказов
addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));
*/


const orders = {};

function addOrder(orderNumber, amount, callback) {
    if (orders[orderNumber]) {
        callback('Заказ существует');
    } else {
        orders[orderNumber] = {
            price: amount,
            completed: false
        };
        callback('Заказ успешно принят');
    }
}

function completeOrder(orderNumber, callback) {
    const order = orders[orderNumber];
    if (order) {
        order.completed = true;
        callback('Результат успешно выполнен');
    } else {
        callback('Заказа нет');
    }
}

function listOrders(callback) {
    for (const orderNumber in orders) {
        if (orders.hasOwnProperty(orderNumber)) {
            const order = orders[orderNumber];
            const status = order.completed ? 'выполнен' : 'не выполнен';
            callback(`Заказ #${orderNumber} - Сумма: ${order.price}, ${status}`);
        }
    }
}

addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));
//2
/*
Ваша задача - создать систему для загрузки данных о пользователях из удаленного сервера с использованием промисов.
У вас есть URL сервера, который предоставляет данные о пользователях в формате JSON.
Вам нужно реализовать функцию для загрузки данных и обработать результат.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';

function loadUserData() {
  return new Promise((resolve, reject) => {
    fetch(....)
      .then(response => {
       ....
      })
      .then(data => {
        ....
      })
      .catch(error => {
       .....
      });
  });
}

// Использование промиса для загрузки данных
loadUserData()
  .then(users => {
    console.log('Данные о пользователях получены:', users);
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });
 */

const userDataURL = 'https://jsonplaceholder.typicode.com/users';

function loadsUserData() {
    return new Promise((resolve, reject) => {
        fetch(userDataURL)
            .then(response => {
                return response.json()
            })
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error)
            });
    });
}

loadsUserData()
    .then(users => {
        console.log('Данные о пользователях получены:', users);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

//3
// Переписать loadUserData с помощью async/await

const usersURL = 'https://jsonplacecvcxholder.typicode.com/users';

async function fetchUsers() {
    try {
        const response = await fetch(usersURL)
        return await response.json()
    } catch (error) {
        throw error
    }
}

fetchUsers()
    .then(users => {
        console.log('Данные о пользователях получены:', users);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });
//4
/*

Ваша задача - создать систему для одновременной загрузки данных о пользователях и их постах с использованием Promise.all.
 У вас есть два URL: один для данных о пользователях, а другой для их постов в формате JSON.
 Вам нужно реализовать функцию для одновременной загрузки обоих наборов данных и обработки результатов.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

function loadUserData() {}
function loadPostsData() {}

Promise.all([loadUserData(), loadPostsData()]) // здесь надо вывести данные в случае успеха и в случае ошибки

Затем то же самое с Promise.race()
*/
const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

async function loadUserData() {
    try {
        const response = await fetch(usersDataURL)
        return await response.json()
    } catch (e) {
        throw console.log(e)
    }
}
async function loadPostsData() {
    try {
        const response = await fetch(postsDataURL)
        return await response.json()
    } catch (e) {
        throw console.log(e)
    }
}

Promise.all([loadUserData(), loadPostsData()])
    .then(([userData, postsData]) => {
        console.log('Данные о пользователях:', userData);
        console.log('Данные о постах:', postsData);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });
Promise.race([loadUserData(), loadPostsData()])
    .then(([userData, postsData]) => {
        console.log('Данные о пользователях:', userData);
        console.log('Данные о постах:', postsData);
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

//5
/*
Вы - анонимусы, и вам необходимо провести DDos-атаку на https://jsonplaceholder.typicode.com
Раз в полсекунды отправляйте рандомный запрос на сервер (либо /users, либо /posts)
*/

const fetchWayURL = 'https://jsonplaceholder.typicode.com'
const posts = "/posts"
const users = "/users"

function DDosFetch(url) {
    return async function (path) {
        try {
            const respons = await fetch(url + path)
            return await respons.json()
        } catch (error) {
            throw error
        }
    }
}

setInterval(() => {
    const usersWay = DDosFetch(fetchWayURL);
    console.log(usersWay(users))
}, 500)


setTimeout(() => {
    setInterval(() => {
        const postWay = DDosFetch(fetchWayURL);
        console.log(postWay(posts));
    }, 500);
}, 250);
//6
/*
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

setTimeout(() => {
  console.log('3');
  Promise.resolve().then(() => console.log('4'));
}, 0);

Promise.resolve().then(() => {
  console.log('5');
  setTimeout(() => console.log('6'), 0);
});

Promise.resolve().then(() => {
  console.log('7');
});

console.log('8');

Напишите порядок вывода чисел в консоль с ОБЪЯСНЕНИЯМИ ПРИЧИНЫ
*/
// Первый в очередь попадает console.log('1') тут же выполняеться и отдаётся. отому что это синхронная задача
// Вторым в Call Stack заходит setTimeout(() => {console.log('2');}, 0); эта задачапереходит в WEB API
// и выполняеться в фоне тем самым когда таймер закончиться он перейдет в очередь Callback Queue и будет ждать
// очередь в Call Stack
// Третьйм в Call StacksetTimeout(() => {console.log('3');Promise.resolve().then(() => console.log('4'));}, 0);
//из него он попадёт в WEB API и будет в фоне подгружаться и того в Callback Queue это вторая функция
// в очереди на выполнение
// Четвёртый встанет в очередь после синхронного кода остался он у нас под номером 8 тоесть он выполниться
// после него и только потом результ этого вывода будет пять и setTimeout(() => console.log('6'), 0) уйдёт
//в фон и будет обрабатываться пока не попадёт в очередь Callback Queue тобишь это третий таймаут в очереди
// Пятая выполниться после четвёртой и в результате когда не останеться синхронного кода и микро задач
// начнуться из очереди Callback Queue подтягиваться таимауты сначала будет под цифрой два за ней под цифрой
// три и резулятатом промис и так как приоритет у промиса выше и он выполняеться после синхронного кода
// выведеться 4 потом уже последний таймаут под номером 6
// как итог выведеться( 1, 8, 5, 7, 2, 3, 4, 6 )
