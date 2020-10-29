var data = [];
var dataLogin = {};

init = async () => {
    const nav = getAll(".nav-link:not([use='logout'])");
    nav.forEach(element => {
        element.addEventListener("click", () => showPage(element.getAttribute("content")));
    });
    // nav.map((element)=>{
        
    // })
    // for (let i = 0; i < nav.length; i++) {
    //     const element = nav[i];
    //     element.addEventListener("click", () => showPage(element.getAttribute("content")));        
    // }
    get(".btn-masuk").addEventListener("click", () => prosesLogin());
    get(".btn-daftar").addEventListener("click", () => showPage("daftar"));
    get(".btn-login").addEventListener("click", () => showPage("masuk"));
    get(".btn-simpan").addEventListener("click", () => prosesDaftar());
    get(".nav-link[use='logout']").addEventListener("click", () => logout());
    get(".btn-search").addEventListener("click", async () => renderData(await getList(), get(".input-search").value));
    await getList();
    renderData();
    // searchData("");
}
var getAll = (selector) => document.querySelectorAll(selector);
var get = (selector) => document.querySelector(selector);
var showPage = (content) => {
    get(".nav-link.active").classList.remove("active");
    get(".nav-link[content='"+content+"']").classList.add("active");
    get(".main-content.active").classList.remove("active");
    get(".main-content[key='"+content+"']").classList.add("active");
}
// var showData2 = (dataList) => {
//     let tbody = get(".tbl-user tbody");
//     count   = 1;
//     tr = dataList.map(x => {
//         return `
//             <tr>
//                 <td>${count}</td>
//                 <td>${x.title}</td>
//             </tr>
//         `
//     })
// }
var renderData = (start="", end="", searchValue = "") => {
    let tbody = get(".tbl-user tbody");
    tbody.innerHTML = "";
    let no          = 1;
    let tr          ="";
    if(start == "" && end == ""){
        tr = dataList.filter( x => x.userId.toString().indexOf(searchValue) >= 0 || x.title.toString().indexOf(searchValue) >= 0).map(element=>{
                return `
                    <tr>
                        <td>${no++}</td>
                        <td>${element.title}</td>
                        <td>${element.userId}</td>
                    </tr>
                `;
            });
    }else{
        tr = dataList.filter( x => (x.userId.toString().indexOf(searchValue) >= 0 || x.title.toString().indexOf(searchValue) >= 0)&&x.id>=start&&x.id<=end).map(element=>{
            return `
                <tr>
                    <td>${no++}</td>
                    <td>${element.title}</td>
                    <td>${element.userId}</td>
                </tr>
            `;
        });
    }
    // console.log(tr);
    tbody.innerHTML += tr.join("");
    renderPagination(dataList.length, 10);
}
var getList = () => {
    return fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(response => dataList = response)
}
renderPagination = (data, page) => {
    console.log(data);
    let ul          = get(".pagination");
    ul.innerHTML    = "";
    ul.innerHTML    += `<li class="page-link active" page="1">First Page</li>`;
    let rowData     = 10;
    let limitPage   = 5;
    let kiriKanan   = Math.floor(limitPage/2);
    let start       = page - kiriKanan;
    let end         = page + kiriKanan;
    if(page<=kiriKanan){
        start       = 1;
        end         = limitPage;
    }else if(page>=data.length-kiriKanan){
        start       = data.length - limitPage;
        end         = data.length;
    }
    for (let i = start; i <= end; i++) {
        ul.innerHTML += `<li class="page-link active" page="${i}">${i}</li>`
    }
    ul.innerHTML    += `<li class="page-link active" page="${page}">Last Page</li>`;
}
var showData = async (key, start="", end="") => {
    let tbl = get(".tbl-user");
    tbl.children[1].innerHTML = await "";
    let total = key.length;
    let pageSize = 5;
    let paginationLimit = 5;
    if(pageSize>key.length){
        pageSize = key.length
    }
    let page    = Math.ceil(total/pageSize);
    let setPage = {}
    if(start =="" && end == ""){
        start = 0
        end = pageSize
        setPage = {
            start   : 0,
            end     : pageSize
        }
    }else{
        setPage.start = start
        setPage.end = end
    }
    let pagination = get(".pagination")
    x=0;
    pagination.innerHTML ="";
    let pageNum = {
        start : 0,
        end : pageSize
    }
    let d = Math.floor(paginationLimit/2);
    pagination.innerHTML = "";
    pagination.innerHTML += `<li class="page-item page-link" start="0" end="${pageSize}">First</li>`
    pageStart = Math.ceil((setPage.start/pageSize)-d);
    pageEnd = Math.ceil((setPage.start/pageSize)+d);
    if(pageStart<0){
        pageStart=0;
        pageEnd=paginationLimit-1;
    }
    if((end/pageSize)>(page-d)){
        pageStart=page-paginationLimit;
        pageEnd=page-1;
    }
    for (let i = pageStart; i <= pageEnd; i++) {
        pagination.innerHTML += 
        `
        <li class="page-item page-link" start="${i*pageSize}" end="${(i*pageSize)+pageSize}">${i+1}</li>
        `;
        if(setPage.start == 0){
            setPage.start = parseInt(setPage.start);
            setPage.end   = parseInt(setPage.end); 
        }else{
            setPage.start = parseInt(setPage.start) + pageSize;
            setPage.end   = parseInt(setPage.end) + pageSize;
        }
        if(pageEnd==total){
            break;
        }
         
    }
    pagination.innerHTML += `<li class="page-item page-link" start="${total-pageSize}" end="${total}">Last</li>`
    let hli = Array.from(getAll(".page-item"));
    hli.forEach(x => {
        let start = x.getAttribute("start");
        let end = x.getAttribute("end");
        x.addEventListener("click", () => showData(key, start, end))
    });
    let userAll = await getUserAll();
    let y= 0;
    let dataLoop = key.slice(start, end);
    dataLoop.forEach(element => {
        let getOne = userAll.filter(x => x.id == element.userId)
        tbl.children[1].innerHTML += 
        `
            <tr>
                <td>${y+1}</td>
                <td>${element.title}</td>
                <td nowrap="nowrap">${getOne[0].name}</td>
            </tr>
        `;
        if(dataLogin.length){
            tbl.children[0].children[0].lastElementChild.style.display= "none"
            tbl.children[1].children[y].lastElementChild.style.display= "none"
        }
        y++
    });
    
}
// var activePage = () => {
//     let activePage = get(".page-link.active").innerHTML;
//     let showPage
// }
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
var getUserAll = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
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
    showData2(hasil)
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