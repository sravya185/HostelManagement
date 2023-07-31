let button = document.getElementById("button");
let table = document.getElementById("table");
button.addEventListener("click", function getdata() {
    let data = document.getElementById("ddd").value;
    if (data == "Select Hostel") {
        alert("Sorry..Please select hostel name");
    }
    else {
        let row1 = `<center>
    <tr><th>Hostel Name</th><th>Room No</th><th>No of Beds</th><th>No of Beds Filled</th><th>No of Beds Remained</th></tr>
    <tr><td>${data}</td><td>1</td><td>4</td><td>3</td><td>1</td></tr>
    <tr><td>${data}</td><td>2</td><td>4</td><td>3</td><td>1</td></tr>
    <tr><td>${data}</td><td>3</td><td>4</td><td>2</td><td>2</td></tr>
    <tr><td>${data}</td><td>4</td><td>4</td><td>3</td><td>1</td></tr>
    <tr><td>${data}</td><td>5</td><td>4</td><td>3</td><td>1</td></tr>
    <tr><td>${data}</td><td>6</td><td>4</td><td>4</td><td>0</td></tr>
    <tr><td>${data}</td><td>7</td><td>4</td><td>2</td><td>2</td></tr>
    <tr><td>${data}</td><td>8</td><td>4</td><td>3</td><td>1</td></tr>
    <tr><td>${data}</td><td>9</td><td>4</td><td>1</td><td>3</td></tr>
    <tr><td>${data}</td><td>10</td><td>4</td><td>3</td><td>1</td></tr>
    <tr><td>${data}</td><td>11</td><td>4</td><td>3</td><td>1</td></tr>
    <tr><td>${data}</td><td>12</td><td>4</td><td>3</td><td>1</td></tr>
    <tr><td>${data}</td><td>13</td><td>4</td><td>2</td><td>2</td></tr>
    <tr><td>${data}</td><td>14</td><td>4</td><td>3</td><td>1</td></tr>
    <tr><td>${data}</td><td>15</td><td>4</td><td>2</td><td>2</td></tr></center>`

        table.innerHTML = row1
    }
})
