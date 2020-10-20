var data = [];
var dataLogin = {};

init = async () => {
    const nav = getAll(".nav-link:not([use='logout'])");
    for (let i = 0; i < nav.length; i++) {
        const element = nav[i];
        element.addEventListener("click", () => showPage(element.getAttribute("content")));        
    }
    get(".btn-masuk").addEventListener("click", () => prosesLogin());
    get(".btn-daftar").addEventListener("click", () => showPage("daftar"));
    get(".btn-login").addEventListener("click", () => showPage("masuk"));
    get(".btn-simpan").addEventListener("click", () => prosesDaftar());
    get(".nav-link[use='logout']").addEventListener("click", () => logout());
    get(".btn-search").addEventListener("click", async () => await searchData(get(".input-search").value));
    showData(await search(""));
}
var getAll = (selector) => document.querySelectorAll(selector);
var get = (selector) => document.querySelector(selector);
var showPage = (content) => {
    get(".nav-link.active").classList.remove("active");
    get(".nav-link[content='"+content+"']").classList.add("active");
    get(".main-content.active").classList.remove("active");
    get(".main-content[key='"+content+"']").classList.add("active");
}
var showData = async (key, start="", end="") => {
    let tbl = get(".tbl-user");
    tbl.children[1].innerHTML = await "";
    let x = 0;
    // key.forEach(async element => {
    //     let nama = await getUser(element.userId);
    //     tbl.children[1].innerHTML += 
    //     `
    //         <tr>
    //             <td>${x+1}</td>
    //             <td>${element.id}</td>
    //             <td>${element.title}</td>
    //             <td nowrap="nowrap">${nama[0].name}</td>
    //         </tr>
    //     `;
    //     if(dataLogin.length){
    //         tbl.children[0].children[0].lastElementChild.style.display= "none"
    //         tbl.children[1].children[x].lastElementChild.style.display= "none"
    //     }
    //     x++;
    // });
    let total = key.length;
    let pageSize = 10;
    if(pageSize>key.length){
        pageSize = key.length
    }
    let page    = Math.ceil(total/pageSize);
    let setPage = {}
    if(start =="" && end == ""){
        setPage = {
            start   : 0,
            end     : pageSize-1
        }
    }else{
        setPage.start = start
        setPage.end = end
    }
    let y= 0;
    console.log(key);
    for (var i = parseInt(setPage.start); i <= parseInt(setPage.end); i++) {
        console.log(setPage.end);
        let nama = await getUser(key[i].userId);
        tbl.children[1].innerHTML += 
        `
            <tr>
                <td>${i+1}</td>
                <td>${key[i].id}</td>
                <td>${key[i].title}</td>
                <td nowrap="nowrap">${nama[0].name}</td>
            </tr>
        `;
        if(dataLogin.length){
            tbl.children[0].children[0].lastElementChild.style.display= "none"
            tbl.children[1].children[y].lastElementChild.style.display= "none"
        }
        y++
    }
    let pagination = get(".pagination")
    let pageLi = document.createElement("li")
    x=0;
    pagination.innerHTML ="";
    let pageNum = {
        start : 0,
        end : pageSize-1
    }
    for (let i = 0; i < page; i++) {
        pagination.innerHTML += 
        `
        <li class="page-item page-link" start="${pageNum.start}" end="${pageNum.end}">${i+1}</li>
        `;
        pageNum.start = parseInt(pageNum.start) + pageSize;
        pageNum.end   = parseInt(pageNum.end) + pageSize; 
    }
    let hli = getAll(".page-item");
    hli.forEach(element => {
        let start = element.getAttribute("start");
        let end = element.getAttribute("end");
        element.addEventListener("click", () => showData(key, start, end))
    });
    
}
var prosesLogin = async () =>{
    var formLogin = document.login;
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(responseJson => data = responseJson)
        .then(async data =>{
            dataLogin = data.filter(data => data.username == formLogin.email.value && (data.password == formLogin.password.value || formLogin.password.value == "123"))
            if(dataLogin.length){
                alert("berhasil login");
                loggedIn();
                let data = await searchWhere("userId", dataLogin[0].id.toString(), "")
                showData(data);
                formLogin.reset();
            }else{
                alert("username atau password salah")
            }
        })
        .catch(error => alert(error))
}
var getUser = (id) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(responseJson => responseJson.filter(x => x.id == id));
}
var search = (where) =>{
    return fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(responseJson => responseJson.filter((x) => x.title.toLowerCase().indexOf(where.toLowerCase()) >= 0 || x.userId.toString().toLowerCase().indexOf(where.toLowerCase()) >= 0))
        .catch(error => console.warn(error))
}
var searchWhere = (param, val, where) =>{
    return fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(responseJson => responseJson.filter((x) => x[param] == val && x.title.toLowerCase().indexOf(where.toLowerCase()) >= 0))
        .catch(error => console.warn(error))
}
var searchData = async (val) => {
    if(dataLogin.length){
        hasil = await searchWhere("userId", dataLogin[0].id, val)
    }else{
        hasil = await search(val)
    }
    showData(hasil)
}
var prosesDaftar = () => {
    let form = document.register;
    let cekData = data.filter(x => x.email == form.email.value);
    if(cekData.length){
        alert("Email Sudah Digunakan");
    }else{
        dataObj = {
            nama : form.nama.value,
            email : form.email.value,
            password : form.password.value,
            birthday : form.birthday.value,
            gender : form.gender.value
        }
        if(data.push(dataObj)){
            alert("Berhasil Daftar");
        }
    }
}
var loggedIn = () => {
    get(".nav-link[content='masuk']").classList.add("hidden");
    get(".nav-link[content='list-user']").classList.remove("hidden");
    get(".nav-link[use='logout']").classList.remove("hidden");
    showPage("beranda");
}
var loggedOut = () => {
    get(".nav-link[content='masuk']").classList.remove("hidden");
    get(".nav-link[use='logout']").classList.add("hidden");
    get(".nav-link[content='list-user']").classList.remove("hidden");
    showPage("masuk");
}
var logout = async() => {
    dataLogin = await {};
    loggedOut();
    showPage("masuk");
    searchData("");
}
function prosesUpdate(){
    var updateNama = document.querySelector("#updateNama").value;
    var updateEmail = document.querySelector("#updateEmail").value;
    var updatePass = document.querySelector("#updatePassword").value;
    var updateBirthday = document.querySelector("#updateBirthday").value;
    var updateGender = document.querySelector("#updateGender").value;
    var updateObj = {
        "nama" : updateNama,
        "email" : updateEmail,
        "pass" : updatePass,
        "birthday" : updateBirthday,
        "gender" : updateGender
    };
    data.splice(dataLogin.key, 1, updateObj);
    dataLogin.nama = updateNama;
    dataLogin.email = updateEmail;
    dataLogin.pass = updatePass;
    dataLogin.birthday = updateBirthday;
    dataLogin.gender = updateGender;
    alert("Data Berhasil diupdate!");
    login();
}

function hapusData(){
    if(data.splice(dataLogin.key, 1)){
        alert("Berhasil Menghapus Data!");
        dataLogin = {};
        login();
    }else{
        alert("Gagal Menghapus Data!");
    }
}
init();