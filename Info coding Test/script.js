var data = [
    {
        "id": 101,
        "name": "Jeff",
        "salaray": "100000",
        "managerId": null
    },
    {
        "id": 154,
        "name": "Suzanne",
        "salaray": "61000",
        "managerId": "109"
    },
    {
        "id": 109,
        "name": "Dave",
        "salaray": "85000",
        "managerId": "101"
    },
    {
        "id": 110,
        "name": "Andy",
        "salaray": "65000",
        "managerId": "109"
    },
    {
        "id": 199,
        "name": "Dan",
        "salaray": "60000",
        "managerId": "109"
    },
    {
        "id": 213,
        "name": "Cory",
        "salaray": "65000",
        "managerId": "101"
    },
    {
        "id": 132,
        "name": "Jason",
        "salaray": "60000",
        "managerId": "109"
    },
    {
        "id": 133,
        "name": "Rick",
        "salaray": "56000",
        "managerId": "109"
    }
]

function compare(a, b) {
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();
  
    let comparison = 0;
    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  }

data = data.sort(compare);
  

// creating managers

var myList = document.getElementById("manager");

for (var i = 0; i < data.length; i++) {
    if (data[i].id === 109 || data[i].id === 213) {
        var listItem = document.createElement("li");

        var innerSpan = document.createElement("span");

        // creating class attribute
        var innerAttClass = document.createAttribute("class");
        innerAttClass.value = "caret";
        innerSpan.setAttributeNode(innerAttClass);

        //creating id attribute
        var liAttId = document.createAttribute("id");
        liAttId.value = data[i].id;
        listItem.setAttributeNode(liAttId);

        //creating inner value
        var spanValue = document.createTextNode(data[i].name);
        innerSpan.appendChild(spanValue);

        listItem.appendChild(innerSpan);
        myList.appendChild(listItem);
    }
}



//creating employess under manager

var ulNode1 = document.getElementById("109");
var unorderList = document.createElement("ul");

// creating class attribute
var ulClassAtt = document.createAttribute("class");
ulClassAtt.value = "nested";
unorderList.setAttributeNode(ulClassAtt);
ulNode1.appendChild(unorderList);

// getting salary node
var salaryNode = document.getElementById("salary");
var amount = 0;

for (var i = 0; i < data.length; i++) {
    if (data[i].managerId === "109") {
        var listItem = document.createElement("li");
        var listText = document.createTextNode(data[i].name);
        listItem.appendChild(listText);
        unorderList.appendChild(listItem);
    }
    amount = amount + parseInt(data[i].salaray);
};

// appending salary
var salaryText = document.createTextNode(`$${amount}`);
salaryNode.appendChild(salaryText);

// adding click events
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}
