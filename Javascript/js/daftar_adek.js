var data=[];
function tampilData(){
    // var nama = document.querySelector("#nama").value;
    // var email = document.querySelector("#email").value;
    // var pass = document.querySelector(".pass").value;
    // var birthday = document.querySelector("#birthday").value;
    // var gender = document.querySelector("#gender").value;
    var showTable = document.querySelector("#showTable");
    showTable.innerHTML = "";
    showTable.innerHTML += `
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Password</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Aksi</th>
        </tr>
    `;
    for (let index = 0; index < data.length; index++) {
        showTable.innerHTML += `
            <tr>
                <td width="20px">${index + 1}</td>
                <td>${data[index].nama}</td>
                <td>${data[index].email}</td>
                <td>${data[index].pass}</td>
                <td>${data[index].birthday}</td>
                <td>${data[index].gender}</td>
                <td>
                <a onclick="update(${index})" href="#">update</a>
                <a onclick="hapus(${index})" href="#">hapus</a>
                </td>
            </tr>
        `   
    }
}

function hapus(x){
    data.splice(x, 1);
    tampilData();
}

function addData(){
    var nama = document.querySelector("#nama").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector(".pass").value;
    var birthday = document.querySelector("#birthday").value;
    var gender = document.querySelector("#gender").value;
    var showTable = document.querySelector("#show_table");
    var dataObj = {
        "nama" : nama,
        "email" : email,
        "pass" : pass,
        "birthday" : birthday,
        "gender" : gender
    }
    data.push(dataObj);
    tampilData();
}

function update(x){
    var nama = document.querySelector("#nama").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector(".pass").value;
    var birthday = document.querySelector("#birthday").value;
    var gender = document.querySelector("#gender").value;
    data[x].nama = nama;
    data[x].email = email;
    data[x].pass = pass;
    data[x].birthday = birthday;
    data[x].gender = gender;
    tampilData();
}