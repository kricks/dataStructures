function reverse(str) {
    return str.split("").reverse().join("");

    // let reverse = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //   reverse += str[i];
    // }
    // return reverse;

    // let reverse = '';
    // for (let value of str) {
    //   reverse = value + reverse;
    // }
    // return reverse;

    // return str.split("").reduce((previous, current) => current + previous);
}

reverse("hello my name is katie");