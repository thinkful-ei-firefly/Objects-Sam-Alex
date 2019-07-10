const decode = message => {
    const arr = message.split(" ");
  
    const answer = arr.map(word => {
      if (word[0] === "a") {
        return word[2];
      } else if (word[0] === "b") {
        return word[3];
      } else if (word[0] === "c") {
        return word[4];
      } else if (word[0] === "d") {
        return word[5];
      } else {
        return " ";
      }
    });
    return answer.join(" ");
  };