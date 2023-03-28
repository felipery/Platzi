function findFamousCats(cats) {
  let obj = {};

  cats.forEach((element) => {
    return (obj[element.name] = element.followers.reduce((a, b) => a + b));
    console.log(
      (obj[element.name] = element.followers.reduce((a, b) => a + b)),
    );
  });
  console.log(obj);
  let max = Math.max(...Object.values(obj));
  return Object.keys(obj).filter((key) => obj[key] === max);
}

console.log(
  findFamousCats([
    {
      name: 'Mimi',
      followers: [320, 120, 70],
    },
    {
      name: 'Milo',
      followers: [400, 300, 100, 200],
    },
    {
      name: 'Gizmo',
      followers: [250, 750],
    },
  ]),
);
