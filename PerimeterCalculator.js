function calculatePerimeter() {

    var choice = prompt(
        "Welcome to Perimeter Calculator!\n" +
        "Please Enter Your Choice:\n" +
        "1. Perimeter of Rectangle\n" +
        "2. Perimeter of Triangle\n" +
        "3. Perimeter of Circle\n" +
        "4. Perimeter of Square"
    );

    var perimeter;

    if (choice == 1) {

        var length = Number(prompt("Enter the length of Rectangle"));
        var breadth = Number(prompt("Enter the breadth of Rectangle"));

        perimeter = 2 * (length + breadth);

        alert("The Perimeter of Rectangle is " + perimeter);

    }
    else if (choice == 2) {

        var side1 = Number(prompt("Enter the first side"));
        var side2 = Number(prompt("Enter the second side"));
        var side3 = Number(prompt("Enter the third side"));

        perimeter = side1 + side2 + side3;

        alert("The Perimeter of Triangle is " + perimeter);

    }
    else if (choice == 3) {

        var radius = Number(prompt("Enter the radius of Circle"));

        perimeter = 2 * Math.PI * radius;

        alert("The Perimeter of Circle is " + perimeter.toFixed(2));

    }
    else if (choice == 4) {

        var side = Number(prompt("Enter the side of Square"));

        perimeter = 4 * side;

        alert("The Perimeter of Square is " + perimeter);

    }
    else {

        alert("Invalid Choice! Please select 1, 2, 3 or 4.");

        return;
    }

    document.getElementById("result").innerHTML =
        "Perimeter = " + perimeter.toFixed(2);
}