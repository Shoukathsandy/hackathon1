var div = document.createElement("div");
div.className = "box";

var label = document.createElement("label");
label.setAttribute("for", "text");
label.className = "l1";
label.innerHTML = "Enter the Name";

var br = document.createElement("br");

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "text");
input.setAttribute("placeholder", "Enter Name");
// input.setAttribute("required","true");

var br1 = document.createElement("br");

var button = document.createElement("button");
button.className = "b1";
button.addEventListener("click", foo);
button.innerHTML = "Search";

var button1 = document.createElement("button");
button1.className = "b1";
button1.addEventListener("click", foo1);
button1.innerHTML = "Clear";

div.append(label, br, input, br1, button, button1);
document.body.append(div);

async function foo() {
    try {
        var out = document.getElementById("text").value;
        var res = await fetch(`https://api.nationalize.io/?name=${out}`);
        var res1 = await res.json();
        // console.log(res1);
        for (var i = 0; i < 2; i++) {


            var cre = document.createElement("div");
            cre.className = "inner";

            var p = document.createElement("h1");
            p.setAttribute("id", "content");
            p.innerHTML = `country_id:${res1.country[i].country_id}  probability:${res1.country[i].probability}`;
            p.style.color = "red";
            p.style.fontSize = "bold";

            cre.append(p);
            document.body.append(cre);
        }
    } catch (error) {
        alert("this name is not available");
    }

}
function foo1() {
    var res = document.getElementById("text").value = "";
    return res;

}
// function    foo2{
//     var clr=document.getElementById("text").value="history.go(0)";
//     return clr;
// }
