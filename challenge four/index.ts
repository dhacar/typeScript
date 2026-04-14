
interface User {
  username: string;
  password: string;
}

function loginform (user: User): void  {
  console.log(`Logging in ${user.username}`);
}


loginform({
  username: "zaki",
  password: "123456"
});



//2
interface User {
  username: string;
  password: string;
  email?: string; 
}

function login(user: User): void {
  console.log(`Logging in ${user.username}`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  }
}


login({
  username: "zaki",
  password: "123456",
  email: "zaki@email.com"
});


login({
  username: "ali",
  password: "abcdef"
});

//3

interface User {
  readonly id: number;
  username: string;
  password: string;
}

const user: User = {
  id: 1,
  username: "zaki",
  password: "123456"
};

console.log(user.id); 