(()=> {
  type UserID =  string | number | boolean;
  let userId: UserID;

  type Sizes = "L" | "M" | "Z" | 2 | true;
  let shirtSize: Sizes,  UserID;



  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === "string") {
      console.log("tipado string",userId)
    }else{
      console.log("tipado number", userId)
    }
  }

greeting(111, 2)




})()


