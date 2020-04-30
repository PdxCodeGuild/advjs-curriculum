describe("add", function() {
  it("should add two numbers together", function() {
    expect(add(3,4)).toEqual(7);
    expect(add(0,0)).toEqual(0);
    expect(add(-2,5)).toEqual(3);
  });
})

describe("sub", function() {
  it("should subtract the second number from the first", function() {
    expect(sub(3,4)).toEqual(-1);
    expect(sub(0,0)).toEqual(0);
    expect(sub(10,7)).toEqual(3);
  });
})

describe("mul", function() {
  it("should multiply 2 numbers", function() {
    expect(mul(3,4)).toEqual(12);
    expect(mul(0,2)).toEqual(0);
    expect(mul(1,3)).toEqual(3);
  });
})

describe("identity", function() {
  it("should return its argument", function() {
    expect(identity(3)).toEqual(3);
    expect(identity([1])).toEqual([1]);
  });
})

describe("identityf", function() {
  it("should take an argument and return a function that returns that argument", function() {
    const three = identityf(3);
    expect(three()).toEqual(3);
    const five = identityf(5)
    expect(five()).toEqual(5);
  });
})

describe("addf", function() {
  it("should add from two invocations", function() {
    const addThree = addf(3);
    expect(addThree(4)).toEqual(7);

    expect(addf(10)(20)).toEqual(30);
  });
})

describe("liftf", function() {
  it("should take a binary function and make it callable with two invocations", function() {
    const addf_version2 = liftf(add);
    expect(addf_version2(4)(3)).toEqual(7);

    expect(liftf(mul)(5)(6)).toEqual(30);
  });
})

describe("curry", function() {
  it("should take a binary function and an argument, and return a function that can take a second argument", function() {
    const addThree = curry(add, 3);
    expect(addThree(4)).toEqual(7);

    expect(curry(mul, 5)(6)).toEqual(30);
  });
})

/*

Notice there are multiple ways to define the same thing. 

For example, lets say we want a function "inc" that increments its argument (adds 1 to its argument).

inc(5) // 6
inc(inc(5)) // 7 

We could define inc multiple ways:

inc = addf(1)

inc = liftf(add)(1)

inc = curry(add, 1)

*/

describe("twice", function() {
  it("should take a binary function and return a unary function that passes its argument to the binary function twice", function() {
    const double = twice(add);
    expect(double(11)).toEqual(22);

    const square = twice(mul);
    expect(square(3)).toEqual(9);
  });
})

describe("reverse", function() {
  it("should reverse the arguments of a binary function", function() {
    const bus = reverse(sub);
    expect(bus(3,2)).toEqual(-1);
  });
})

describe("composeu", function() {
  it("should take two unary functions and return a unary function that calls them both", function() {
    const double = twice(add);
    const square = twice(mul);

    expect(composeu(double, square)(5)).toEqual(100);
    expect(composeu(square, double)(5)).toEqual(50);
  });
})

describe("composeb", function() {
  it("should take two binary functions and return a function that calls them both", function() {
    expect(composeb(add, mul)(2,3,7)).toEqual(35); // (2+3)*7 = 35
    expect(composeb(mul, add)(2,3,7)).toEqual(13); // (2*3)+7 = 13
  });
})

describe("limit", function() {
  it("should restrict a binary function to be called a limited number of times", function() {
    const add_limited = limit(add, 1);
    expect(add_limited(3,4)).toEqual(7);
    expect(add_limited(3,4)).toEqual(undefined);
  });
})

describe("from", function() {
  it("should return a generator that will produce a series of values", function() {
    const index = from(0);
    expect(index()).toEqual(0);
    expect(index()).toEqual(1);
    expect(index()).toEqual(2);

    const start_from_1 = from(1);
    expect(start_from_1()).toEqual(1);
    expect(start_from_1()).toEqual(2);
    expect(start_from_1()).toEqual(3);
  });
})

describe("to", function() {
  it("should take a generator and an end value, and return a generator that will produce numbers up to that limit", function() {
    const index = to(from(1), 3);
    expect(index()).toEqual(1);
    expect(index()).toEqual(2);
    expect(index()).toEqual(undefined);
  });
})

describe("fromTo", function() {
  it("should return a generator that will produce values in a range", function() {
    const index = fromTo(0,3)
    expect(index()).toEqual(0);
    expect(index()).toEqual(1);
    expect(index()).toEqual(2);
    expect(index()).toEqual(undefined);
  });
})

describe("element", function() {
  it("should take an array and a generator and return a generator that will produce elements from the array", function() {
    const ele = element(['a', 'b', 'c', 'd'], fromTo(1,3));
    expect(ele()).toEqual('b');
    expect(ele()).toEqual('c');
    expect(ele()).toEqual(undefined);
  });

  it("second argument should be optional. If a generator is not provided, then each of the elements of the array will be produced", function() {
    const ele = element(['a', 'b', 'c', 'd']);
    expect(ele()).toEqual('a');
    expect(ele()).toEqual('b');
    expect(ele()).toEqual('c');
    expect(ele()).toEqual('d');
    expect(ele()).toEqual(undefined);
  });
})

describe("collect", function() {
  it("should take a generator and an array, and return a function that will collect the results in the array.", function() {
    const arr = [];
    const col = collect(fromTo(0,2), arr);

    expect(col()).toEqual(0);
    expect(col()).toEqual(1);
    expect(col()).toEqual(undefined);
    expect(arr).toEqual([0,1]);
  });
})

describe("filter", function() {
  it("should take a generator and a predicate, and return a generator that produces only the values approved by the predicate", function() {
    const fil = filter(fromTo(0,5), function isEven(x) {
      return x % 2 === 0;
    });

    expect(fil()).toEqual(0);
    expect(fil()).toEqual(2);
    expect(fil()).toEqual(4);
    expect(fil()).toEqual(undefined);
  });
})

describe("concat", function() {
  it("should take two generators and return a generator that combines the sequences", function() {
    const con = concat(fromTo(0,3), fromTo(0,2));

    expect(con()).toEqual(0);
    expect(con()).toEqual(1);
    expect(con()).toEqual(2);
    expect(con()).toEqual(0);
    expect(con()).toEqual(1);
    expect(con()).toEqual(undefined);
  });
})

describe("repeat", function() {
  it("should take a generator and call it until it returns undefined", function() {
    const array = [];

    repeat(collect(fromTo(0,4), array));

    expect(array).toEqual([0,1,2,3]);
  });
})

describe("gensymf", function() {
  it("should return a function that generates unique symbols", function() {
    const geng = gensymf('G');
    const genh = gensymf('H');

    expect(geng()).toEqual('G1');
    expect(geng()).toEqual('G2');
    expect(genh()).toEqual('H1');
    expect(genh()).toEqual('H2');
  });
})

describe("counter", function() {
  it("should return an object containing two functions that implement an up/down counter, hiding the counter", function() {
    const object = counter(10);
    const up = object.up;
    const down = object.down;

    expect(up()).toEqual(11);
    expect(down()).toEqual(10);
    expect(down()).toEqual(9);
    expect(up()).toEqual(10);
  });
})

describe("revocable", function() {
  it("should take a binary function, and return an object containing an invoke function that can invoke the binary function, and a revoke function that disables the invoke function", function() {
    const rev = revocable(add);
    const add_rev = rev.invoke;

    expect(add_rev(3,4)).toEqual(7);
    
    rev.revoke()

    expect(add_rev(3,4)).toEqual(undefined);
  });
})

describe("m", function() {
  it("should take a value and an optional source string and returns them in an object", function() {
    expect(JSON.stringify(m(1))).toEqual(`{"value":1,"source":"1"}`);

    expect(JSON.stringify(m(Math.PI, "pi"))).toEqual(`{"value":${Math.PI},"source":"pi"}`);
  });
})

describe("addm", function() {
  it("should take two m objects and return an m object", function() {
    expect(JSON.stringify(addm(m(3), m(4)))).toEqual(`{"value":7,"source":"(3+4)"}`);

    expect(JSON.stringify(addm(m(1), m(Math.PI, "pi")))).toEqual(`{"value":${1+Math.PI},"source":"(1+pi)"}`);
  });
})

describe("liftm", function() {
  it("should take a binary function and a string and return a function that acts on m objects", function() { 
    const addm = liftm(add, "+"); // we can define addm in terms of liftm

    expect(JSON.stringify(addm(m(3), m(4)))).toEqual(`{"value":7,"source":"(3+4)"}`);

    const mulm = liftm(mul, "*");

    expect(JSON.stringify(mulm(m(3), m(4)))).toEqual(`{"value":12,"source":"(3*4)"}`);
  });
})

describe("exp", function() {
  it("should evaluate simple array expressions", function() { 
    const sae = [mul, 5, 11];
    expect(exp(sae)).toEqual(55);

    expect(exp([add, 1, 2])).toEqual(3);
  });

  it("should evaluate nested array expressions", function() {
    function square(x) {return x*x}

    const nae = [
      Math.sqrt,
      [
        add,
        [square, 3],
        [square, 4]
      ]
    ];

    expect(exp(nae)).toEqual(5)
  })
}) 


describe("addg", function() {
  it("should add from many invocations, until it sees an empty invocation", function() { 
    expect(addg()).toEqual(undefined);
    expect(addg(2)()).toEqual(2);
    expect(addg(2)(7)()).toEqual(9);
    expect(addg(3)(0)(4)()).toEqual(7);
    expect(addg(1)(2)(4)(8)()).toEqual(15);
  });
})

describe("liftg", function() {
  it("should take a binary function and apply it to many invocations", function() { 
    expect(liftg(mul)()).toEqual(undefined);
    expect(liftg(mul)(2)()).toEqual(2);
    expect(liftg(mul)(2)(7)()).toEqual(14);
    expect(liftg(mul)(3)(0)(4)()).toEqual(0);
    expect(liftg(mul)(1)(2)(4)(8)()).toEqual(64);
  });
})

describe("arrayg", function() {
  it("should build an array from many invocations", function() { 
    expect(arrayg()).toEqual([]);
    expect(arrayg(3)()).toEqual([3]);
    expect(arrayg(3)(4)(5)()).toEqual([3,4,5]);
  });
})

describe("continuize", function() {
  it("should take a unary function, and return a function that takes a callback and an argument", function() { 
    const sqrtc = continuize(Math.sqrt);
    sqrtc(function(x) {
      expect(x).toEqual(9)
    }, 81);
  });
})

