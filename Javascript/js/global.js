var data = [];
var dataLogin = {};
var mainContent = document.querySelector("html");

function daftar(){
    mainContent.innerHTML = `
    <head>
        <meta charset="UTF-8">

        <title>Tugas 2</title>

        <link href="assets/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
        <link href="assets/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">

        <link href="assets/select2/select2.min.css" rel="stylesheet" media="all">
        <link href="assets/datepicker/daterangepicker.css" rel="stylesheet" media="all">

        <link href="assets/css/main.css" rel="stylesheet" media="all">
    </head>

    <body>
        <div class=" main-bg font-robo">
            <div class="wrapper wrapper--w680">
                <div class="card card-1">
                    <div class="bg-heading"></div>
                    <div class="card-body">
                        <h2 class="title">PENDAFTARAN</h2>
                        <form method="POST">
                            <div class="input-group">
                                <input class="input--style-1" type="text" placeholder="NAMA" name="name" id="nama">
                            </div>
                            <div class="input-group">
                                <input class="input--style-1" type="email" placeholder="E-MAIL" name="email" id="email">
                            </div>
                            <div class="input-group">
                                <input class="input--style-1 pass" type="password" placeholder="PASSWORD" name="password">
                            </div>
                            <div class="row row-space">
                                <div class="col-2">
                                    <div class="input-group">
                                        <input class="input--style-1 js-datepicker" type="date" value="BIRTHDAY" name="birthday" id="birthday">
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="input-group">
                                        <div class="rs-select2 js-select-simple select--no-search">
                                            <select name="gender" id="gender" class="input--style-1" style="width: 100%;border: none;padding: 14px;">
                                                <option disabled="disabled" selected="selected">JENIS KELAMIN</option>
                                                <option>Laki-laki</option>
                                                <option>Perempuan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-t-20" style="display:flex;align-items: center;">
                                <a class="btn btn--radius btn--green" href="#" onclick="prosesDaftar()" style="margin-right: 20px;">Lanjutkan</a>
                                <a href="#" onclick="login()">Sudah Punya Akun? Klik Untuk Login</a>
                            </div>
                        </form>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </body>
    `;
}
function login(){
    mainContent.innerHTML = `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" isi="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <title>Login Page</title>
        <style>
            body {
                margin-top:-16px;
                }

            .header {
                height: 150px;
                width: 100%;
                background-image: url(https://i.pinimg.com/originals/11/c0/d3/11c0d343176a014fe218a94786077c66.jpg);
                background-size: cover;
            }

            .header ul {
                list-style-type:none;
                padding-top: 100px;
                padding-left: 5%;
            }

            .header li {
                float: left;
                margin: auto;
                padding:5px 10px;
            }

            .isi {
                background-color: #f1f2f6;
                width: 100%;
                float: left;
                min-height: 444px;
                padding-bottom: 30px;
                padding-top: 30px;
            }

            .isi-info {
                background-color: #f1f2f6;
                float: left;
                width: 40%;
                margin-left: 120px;
                padding-top: 100px;
            }
            
            .isi-login {
                background-color: white;
                float: right;
                width: 26%;
                margin-right: 10%;
                border-radius: 5px;
                padding: 20px;
            }

            .lupa-sandi {
                border-top: 10px;
                border-bottom: 10px;
                margin-left: 90px;
                color:#24b0e3;
            }

            .header a:hover {
                color: #007aff;
            }

            .header a {
                color: #787b81;
            }

            h1 {
                color: #e48825;
            }

            h3 {
                color: #787b81;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <!--Buat header di atas-->
            <ul>
                <li><a href="#" onclick="beranda()">Beranda</a></li>
                <li><a href="#" onclick="tentang()">Tentang</a></li>
                <li><a href="#" onclick="hubungi()">Hubungi Kami</a></li>
                <li><a href="#" onclick="login()">Masuk</a></li>
                <li><a href="#" onclick="daftar()">Daftar</a></li>
            </ul>
        </div>
        <div class="isi">
            <div class="isi-info">
                <!--Buat disamping kiri-->
                <h1>BTPNS ShiftED Batch 2</h1>
                <h3>Memberikan makna lebih dalam hidup setiap rakyat Indonesia.</h3>
            </div>
            <div class="isi-login" id="isi-login">
            `;
            console.log(dataLogin);
            var isiLogin = document.querySelector("#isi-login");
            if(dataLogin.login){
                isiLogin.innerHTML += `
                    <table width="100%">
                        <tr>
                            <td width="40%">Nama</td>
                            <td>:</td>
                            <td>${dataLogin.nama}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>${dataLogin.email}</td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>:</td>
                            <td>${dataLogin.pass}</td>
                        </tr>
                        <tr>
                            <td>Tanggal Lahir</td>
                            <td>:</td>
                            <td>${dataLogin.birthday}</td>
                        </tr>
                        <tr>
                            <td>Jenis Kelamin</td>
                            <td>:</td>
                            <td>${dataLogin.gender}</td>
                        </tr>
                        <tr>
                            <td style="color: white;">tambahan space</td>
                        </tr>
                        <tr>
                            <td colspan="3" align="center"><button onclick="hapusData()" class="btn btn-warning">Hapus</button> <button onclick="showUpdate()" class="btn btn-success">Update</button> <button onclick="logout()" class="btn btn-danger">Logout</button></td>
                        </tr>
                    </table>
                `;
            }else{
                isiLogin.innerHTML+=`
                    <!--buat disamping kanan-->
                    <table>
                        <tr>
                            <td style="color: white;">tambahan buat space</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                                    </div>
                                    <input type="text" id="login-email" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default2">Kata Sandi</span>
                                    </div>
                                    <input type="password" id="login-password" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="form-group">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                        Remember me
                                    </label>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary btn-lg btn-block" onclick="prosesLogin()"><font color="white">Masuk</font></button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" class="btn btn-warning btn-lg btn-block" onclick="daftar()">Buat Akun Baru</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="color: white;">tambahan space</td>
                        </tr>
                    </table>
            `;
        }
        mainContent.innerHTML +=`
        </div>
    </body>
    `;
}
function beranda(){
    var jumbtron = document.querySelector("#jumbotron");
    mainContent.innerHTML = `
    <head>
        <meta charset="UTF-8">
        <title>Beranda</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/css/beranda.css">
    </head>
    <body>
        <section id="main_content">
            <div class="header">
                <!--Buat header di atas-->
                <ul>
                    <li><a href="#" onclick="beranda()">Beranda</a></li>
                    <li><a href="#" onclick="tentang()">Tentang</a></li>
                    <li><a href="#" onclick="hubungi()">Hubungi Kami</a></li>
                    <li><a href="#" onclick="login()">Masuk</a></li>
                    <li><a href="#" onclick="daftar()">Daftar</a></li>
                </ul>
            </div>
            <div class="jumbotron mb-0" id="jumbotron">
                <h1 class="display-4 text-orange">Hello, We Are BTPNS ShiftED Batch 2!</h1>
                <p class="lead">Bersama, Kita Ciptakan Peluang Untuk Tumbuh dan Ciptakan Hidup Yang Lebih Berarti!</p>
                <hr class="my-4">
                <a class="btn btn-orange text-white btn-lg" href="#more" role="button"><i class="fas fa-info-circle"></i> Learn more</a>
            </div>
            <div class="row m-0" id="more">
                <div class="col goals">
                    <h2>Tujuan Kami</h2>
                    <hr>
                    <blockquote>
                        "Bersama Mencapai Impian"
                    </blockquote>
                </div>
                <div class="col goals">
                    <h2>Apa Yang Menjadi Perhatian Kami</h2>
                    <hr>
                    <ul>
                        <li><i class="fas fa-check-circle text-success"></i>Professionals</li>
                        <li><i class="fas fa-check-circle text-success"></i>Integrity</li>
                        <li><i class="fas fa-check-circle text-success"></i>Mutual Respect</li>
                        <li><i class="fas fa-check-circle text-success"></i>Team Work</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="10000">
                        <img src="assets/img/01.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item" data-interval="2000">
                        <img src="assets/img/02.jpeg" class="d-block w-100" alt="...">
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
        <footer class="bg-dark">
            All Rights Reserved
        </footer>
    </body>
    `;
}
function tentang(){
    mainContent.innerHTML = `
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>About</title>
    </head>
    <body>
        <div class="header">
            <!--Buat header di atas-->
            <ul>
                <li><a href="#" onclick="beranda()">Beranda</a></li>
                <li><a href="#" onclick="tentang()">Tentang</a></li>
                <li><a href="#" onclick="hubungi()">Hubungi Kami</a></li>
                <li><a href="#" onclick="login()">Masuk</a></li>
                <li><a href="#" onclick="daftar()">Daftar</a></li>
            </ul>
        </div>
        
        <div class="box">
        <img src="assets/img/syariah.jpg" alt="" class="box-img">
        <h1>BTPN SYARIAH</h1>
        <h3>Visi :</h3>
        <p>Menjadi bank syariah terbaik untuk keuangan inklusif, mengubah hidup berjuta rakyat Indonesia</p>
        <h3>Misi :</h3>
        <p>Bersama, kita ciptakan kesempatan tumbuh dan hidup yang lebih berarti</p>
    </div>
    </body>
    `
}
function hubungi(){
    mainContent.innerHTML = `
    <head>
        <meta charset="UTF-8">
        <title>Kontak</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <style>
            body {
                background-color: gold;
                margin-top: 56px;
            }
            .container  {
                background-color: #eaeaea;
                padding-top: 14px;
            }
            h2 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg bg-dark fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a href="" class="navbar-brand">BTPNS Shifted 2</a>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#" onclick="beranda()">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="tentang()">Tentang</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="hubungi()">Hubungi Kami</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="login()">Masuk</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Daftar</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <h2>Hubungi Kami</h2>
                    <form action="">
                        <div class="form-group">
                            <label for="nama">Nama</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" class="form-control">
                            <small id="emailHelp" class="form-text text-muted">Kami tidak akan pernah membagikan email anda kepada orang lain.</small>
                        </div>
                        <div class="form-group">
                            <label for="nohp">Nomor HP</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="pesan">Pesan</label>
                            <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Kirim Pesan</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
    `;
}
function prosesLogin(){
    var loginEmail = document.querySelector("#login-email").value;
    var loginPassword = document.querySelector("#login-password").value;
    console.log(data);
    dataLogin = data.filter(atr => atr.email == loginEmail && atr.pass == loginPassword)
    console.log(dataLogin);
    // if(Object.keys(dataLogin).length === 0){
    //     alert("Maaf Username Atau Password Salah!")
    // }
}
function prosesDaftar(){
    var nama = document.querySelector("#nama").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector(".pass").value;
    var birthday = document.querySelector("#birthday").value;
    var gender = document.querySelector("#gender").value;
    var dataObj = {
        "nama" : nama,
        "email" : email,
        "pass" : pass,
        "birthday" : birthday,
        "gender" : gender
    }
    if(data.push(dataObj)){
        alert("Berhasil Registrasi");
    }else{
        alert("Registrasi Gagal!");
    }
}
function logout(){
    dataLogin = {};
    login();
}
function showUpdate(){
    var kontainer = document.querySelector("#isi-login");
    kontainer.innerHTML += `
    <table>
        <tr>
            <td style="color: white;">tambahan buat space</td>
        </tr>
        <tr>
            <td>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Nama</span>
                    </div>
                    <input type="text" id="updateNama" class="form-control"  value="${dataLogin.nama}" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                    </div>
                    <input type="text" id="updateEmail" class="form-control"  value="${dataLogin.email}" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                    </div>
                    <input type="password" id="updatePassword" class="form-control"  value="${dataLogin.pass}" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Tanggal Lahir</span>
                    </div>
                    <input type="date" id="updateBirthday" class="form-control"  value="${dataLogin.birthday}" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Jenis Kelamin</span>
                    </div>
                    <select id="updateGender" class="form-control">
                        <option disabled="disabled" selected="selected">Jenis Kelamin</option>
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                    </select>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <button type="button" class="btn btn-warning btn-lg btn-block" onclick="prosesUpdate()">Update Data</button>
            </td>
        </tr>
        <tr>
            <td style="color: white;">tambahan space</td>
        </tr>
    </table>
    `;
    document.querySelector("#updateGender").value = dataLogin.gender;
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