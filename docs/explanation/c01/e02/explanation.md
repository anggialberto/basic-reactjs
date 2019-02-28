# Instalasi ReactJS
![Header](./yarn-npm-explanation.jpeg)


Seperti yang kita ketahui Node.js mempunyai dua package manager yang digunakan untuk instalasi pustaka-pustaka
yang dibutuhkan untuk membuat sesuatu aplikasi. Pada kasus ini kita membutuhkan pustaka reactjs. Cara instalasi pustaka
reactjs sebagai berikut:

### 1. NPM
Bila kita ingin menginstall dalam area global bisa menggunakan perintah sebagai berikut:

`npm install -g create-react-app`

Namun, bila ingin menginstallnya hanya pada environment pembuatan aplikasi tersebut (local):

`npm install create-react-app`

### 2. Yarn
Pada package manager yarn tidak terlalu berbeda jauh dalam penginstallan area global, perintahnya sebagai berikut:

`yarn global add create-react-app`

Lalu untuk local-nya sebagai berikut:

`yarn add create-react-app`

Seletah proses instalasi package create-react-app selesai, kita bisa langsung membuat aplikasi react pertama kita.
Dengan cara perintah `create-react-app [nama_aplikasi]` pada command line.

Jika proses create-react-app tersebut sudah selesai. Masuk kedalam folder [nama_aplikasi], kemudian jalankan
`npm start` atau `yarn start` untuk mencompile aplikasi. Jika proses sudah berjalan, maka pada terminal
akan tampil tulisan **"You can now view [nama_aplikasi] in the browser."** dibawah tulisan tersebut terdapat
alamat local address untuk mengakses halaman reactjs kita.
