const a = () => {
  let name = "Tien";

  const b = () => {
    let age = "19";

    const d = () => {
      console.log({
        name: name,
        age: age,
      });
    };
    return d;
  };
  return b;
};

a()()();
