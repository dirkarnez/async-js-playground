    Promise.all([
    (()=> 
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()))(), 
      (()=> fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json()))()])
      .then((values) => {
        console.log(values[0]);
        console.log(values[1]);
      });
