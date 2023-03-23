function multiplicationTable(num) {
  for (var i = 1; i <= 10; i++) {
    var product = num * i;
    console.log(num + " x " + i + " = " + product);

    // console.log(`${num} * ${i} = ${product}`);
  }
}

multiplicationTable(6);

multiplicationTable(9);
multiplicationTable(8);
multiplicationTable(3);
