function fullName(first: string, last: string): string {
  return first + " " + last;
}
console.log(fullName("Zaki", "Moha"));



// 2 

function registerUser(
  username: string,
  isAdmin?: boolean,
  language: string = "en"
): void {
  console.log("Username:", username);
  console.log("Is Admin:", isAdmin);
  console.log("Language:", language);
}

registerUser("zaki");
registerUser("ali", true);
registerUser("fatima", false, "ar");



// 3

function average(...scores: number[]): number {
  let total = 0;

  for (let score of scores) {
    total += score;
  }

  return scores.length === 0 ? 0 : total / scores.length;
}

console.log(average(80, 90, 100));      
console.log(average(70, 75, 85, 95));   
console.log(average(60, 70, 80, 90, 100)); 