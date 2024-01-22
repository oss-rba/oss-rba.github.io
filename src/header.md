## <span id="api-example-for-a-submenu-entry">Document History</span>

| Version | Date       | Changed by     | Notes                                                                                                                                                                                                                     |
|---------|------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.0.0   | 17/07/2018 | Tim Teknis OSS | Menambahkan Element Data di Methode receiveLegal,inqueryNIB & receiveNIB                                                                                                                                                  |
| 3.0.1   | 22/01/2019 | Tim Teknis OSS | Tambah elemen Mandatory Perseorangan (P) dan Non Perseorangan (NP), Update respon receiveNIB, menambah tipe_dokumen pada json receiveNIB, update lampiran                                                                 |
| 3.0.2   | 22/02/2019 | Tim Teknis OSS | Menambahkan Element Data RPTKA di Methode inqueryNIB & receiveNIB                                                                                                                                                         |
| 4.0.0   | 01/04/2019 | Tim Teknis OSS | Menambahkan Element Data di Methode receiveLegal,inqueryNIB & receiveNIB & checkKomitmen                                                                                                                                  |
| 4.1.0   | 06/03/2020 | Tim Teknis OSS | Menambahkan Element Data di Methode receiveNIB, inqueryNIB,receiveNIBIUMK,inqueryNIBUMK,recei veNIBSTPW,inqueryNIBSTPW, getDataReferensi & update data lampiran                                                           |
| 4.2.0   | 18/11/2020 | Tim Teknis OSS | Menambahkan element data receiveLicense, penambahan services receiveFileDS dan update data lampiran                                                                                                                       |
| 4.3.0   | 19/04/2021 | Tim Teknis OSS | Menambahkan id_produk pada service receiveNIB,inqueryNIB,receiveLicenseStatus,recei veLicense untuk mengakomodir sertifikasi produk. Menambah method service receiveNIBKKPR dan receiveLicenseKKPR untuk persetujuan KKPR |
| 4.3.1   | 25/08/2021 | Tim Teknis OSS | Penambahan elemen data flag_umk,skala_resiko,skala_usaha pada inqueryNIB dan receiveNIB                                                                                                                                   |
| 4.3.2   | 03/12/2021 | Tim Teknis OSS | Penambahan service receiveNIBPSE Perubahan tipe data no npp ke alphanumeric Perubahan length bidang spesifik                                                                                                              |
| 4.3.3   | 27/12/2021 | Tim Teknis OSS | Penambahan service inqueryFileDS yang digunakan untuk K/L/D mendapatkan informasi url file hasil merge dokumen Izin/Sertifikat Standar/PB-UMKU                                                                            |
| 4.3.4   | 2/2/2022   | Tim Teknis OSS | Penambahan elemen data KBLI 2020 hasil konversi dari KBLI 2021 di service receiveNIB. Update typo keterangan KBLI 2017 (seharusnya KBLI 2020) pada service receiveNIB, inqueryNIB, dan receiveNIBKKPR.                    |
| 4.3.5   | 20/6/2022  | Tim Teknis OSS | Penambahan service updateLicense yang digunakan oleh K/L/D untuk melakukan update atau perubahan lampiran teknis PB atau PB-UMKU                                                                                          |
| 4.3.5   | 20/6/2022  | Tim Teknis OSS | Perbaikan PIA sebelumnya untuk service inqueryFileDS pada bagian Method Header                                                                                                                                            |
| 4.3.6   | 04/08/2022 | Tim Teknis OSS | Penambahan API checkLicenseStatus                                                                                                                                                                                         |
| 4.3.7   | 30/08/2022 | Tim Teknis OSS | Perubahan Length jabatan_ttd semula 50 menjadi 150 pada payload API Update License dan Receive License                                                                                                                                                    |
| 4.3.8   | 05/09/2022 | Tim Teknis OSS | Penambahan API receiveCertivicate dan inquiryCertivicate                                                                                                                                                    |
| 4.3.9   | 23/09/2022 | Tim Teknis OSS | Penambahan Kode Status Izin 09. “Dokumen permohonan dan persyaratan izin sudah diisi dan dilengkapi”                                                                                                                                                  |
| 4.3.10  | 10/10/2022 | Tim Teknis OSS | Penambahan Kode status Izin 12. “Pemenuhan Komitmen”                                                                                                                                                   |
| 4.3.11  | 28/10/2022 | Tim Teknis OSS | Penambahan Kode status Izin. <br>32 Menunggu verifikasi bukti bayar PNBP <br>33 Persetujuan Pembayaran <br>34 Perbaikan Konfirmasi Pembayaran <br>93 Penolakan Persyaratan                                                                                                                                                 |
| 4.3.12  | 16/03/2023 | Tim Teknis OSS | Perubahan dan Penambahan Jenis Perusahaan. <br>Perubahan Keterangan Badan Usaha Pemerintah (04) semula Badan Usaha yang didirikan dan dikelola oleh pemerintah seperti BUMD, BUMDES, dan sejenisnya menjadi Badan Usaha yang didirikan dan dikelola oleh Pemerintah. Penambahan : <br>28 BUM Desa <br>29 BUM Desa Bersama                                                                                                                                                 |
| 4.3.13 | 10/05/2023 | Tim Teknis OSS | Penambahan flag_perubahan_data_teknis di Methode receiveNIB |
| 4.3.14 | 24/05/2023 | Tim Teknis OSS | Perubahan Payload/Response inqueryNIB |
| 4.3.15 | 06/07/2023 | Tim Teknis OSS | Penambahan email_preferensi receiveNIBPSE |
| 4.3.16 | 12/09/2023 | Tim Teknis OSS | 1. Penghapusan payload di receiveLicense <br> &nbsp;&nbsp;&nbsp;&nbsp; - data_pnbp <br> &nbsp;&nbsp;&nbsp;&nbsp;- id_produk <br> 2. Penambahan payload di receiveLicense <br> &nbsp;&nbsp;&nbsp;&nbsp; - jenis_perizinan <br> &nbsp;&nbsp;&nbsp;&nbsp; - data_teknis IMB <br> 3. Pembaruan terkait <i>request, data type</i> dan <i>response</i> pada receiveLicenseStatus <br> 4. Perubahan Payload CheckLicenseStatus <br> &nbsp;&nbsp;&nbsp;&nbsp;<i>IZINSTATUS -> CHECKLICENSESTATUS</i> <br> 5. Penghapusan API Tidak Valid (checkNIBError, checkNIBUpdate, rekonNIB) |
| 4.3.17 | 05/10/2023 | Tim Teknis OSS | 1. Penambahan payload di inqueryNIBSTPW <br> &nbsp;&nbsp;&nbsp;&nbsp; a. skala_usaha <br> &nbsp;&nbsp;&nbsp;&nbsp; b. jenis_perubahan_terkahir <br> 2. Penghapusan payload checkNIB <br> &nbsp;&nbsp;&nbsp;&nbsp; a. npwp_perusahaan <br> 3. Penambahan payload di inqueryNIBSTPW <br> &nbsp;&nbsp;&nbsp;&nbsp; a. skala_usaha <br> &nbsp;&nbsp;&nbsp;&nbsp; b. jenis_perubahan_terakhir <br> 4. Penambahan Paramater di recieveNIBKKPR <br> &nbsp;&nbsp;&nbsp;&nbsp; a. tgl_terkirim_oss <br> &nbsp;&nbsp;&nbsp;&nbsp; b. skala_usaha <br> &nbsp;&nbsp;&nbsp;&nbsp; c. jenis_perubahan_terakhir <br> &nbsp;&nbsp;&nbsp;&nbsp; d. flag_perubahan_data_teknis <br> 5. Penghapusan parameter di UpdateLicense <br> &nbsp;&nbsp;&nbsp;&nbsp; a. id_produk <br> &nbsp;&nbsp;&nbsp;&nbsp; b. Data PNBP <br> &nbsp;&nbsp;&nbsp;&nbsp; c. kd_akun <br> &nbsp;&nbsp;&nbsp;&nbsp; d. kd_penerimaan <br> &nbsp;&nbsp;&nbsp;&nbsp; e. nominal <br> 6. Penambahan parameter receiveLegal <br> &nbsp;&nbsp;&nbsp;&nbsp; a. tahun_kbli <br> &nbsp;&nbsp;&nbsp;&nbsp; b. kbli5 (Detil Data KBLI) <br> &nbsp;&nbsp;&nbsp;&nbsp; c. Parameter Data Modal Dasar <br> &nbsp;&nbsp;&nbsp;&nbsp; d. Parameter Data Modal Ditempatkan <br> &nbsp;&nbsp;&nbsp;&nbsp; e. klasifikasi_saham_pemegang (Data Pemegang Saham) <br> &nbsp;&nbsp;&nbsp;&nbsp; f. nominal_lbr_per_pemegang (Data Pemegang Saham) <br> &nbsp;&nbsp;&nbsp;&nbsp; g. Parameter Data Merger <br> 7. Pengahpusan parameter receiveLegal <br> &nbsp;&nbsp;&nbsp;&nbsp; a. total_modal_dasar <br> &nbsp;&nbsp;&nbsp;&nbsp; b. total_modal <br> 8. Perubahan Nama parameter receiveLegal <br> &nbsp;&nbsp;&nbsp;&nbsp; a. jenis_identitas_penanggung_jwb > jenis_nik_penanggung_jwb <br> &nbsp;&nbsp;&nbsp;&nbsp; b. no_identitas_penanggung_jwb > nik_penanggung_jwb <br> 9. Perubahan Contoh Format JSON Parameter receiveLegal <br> 10. Penambahan input parameter inqueryNIB <br> &nbsp;&nbsp;&nbsp;&nbsp; a. oss_id <br> &nbsp;&nbsp;&nbsp;&nbsp; b. npwp <br> 11. Penambahan return parameter inqueryNIB <br> &nbsp;&nbsp;&nbsp;&nbsp; a. skala_usaha <br> &nbsp;&nbsp;&nbsp;&nbsp; b. jenis_perubahan_terakhir <br> &nbsp;&nbsp;&nbsp;&nbsp; c. flag_asing <br> &nbsp;&nbsp;&nbsp;&nbsp; d. jns_identitas_penanggung_jwb <br> &nbsp;&nbsp;&nbsp;&nbsp; e. no_identitas_penanggung_jwb <br> &nbsp;&nbsp;&nbsp;&nbsp; f. nama_penanggung_jwb <br> &nbsp;&nbsp;&nbsp;&nbsp; g. jabatan_penanggung_jwb <br> &nbsp;&nbsp;&nbsp;&nbsp; h. kebangsaan_penanggung_jwb <br> &nbsp;&nbsp;&nbsp;&nbsp; i. negara_asal_penanggung_jwb <br> &nbsp;&nbsp;&nbsp;&nbsp; j. npwp_penanggung_jwb <br> &nbsp;&nbsp;&nbsp;&nbsp; k. alamat_penanggung_jwb <br> &nbsp;&nbsp;&nbsp;&nbsp; l. jalan_penanggung_jwb |
| 4.3.18 | 18/10/2023 | Tim Teknis OSS | 1. Penambahan Kode Status Izin 05 <br> &nbsp;&nbsp;&nbsp;&nbsp; "Penapisan dokumen lingkungan" <br> 2. Penambahan Kode Status Izin 45 <br> &nbsp;&nbsp;&nbsp;&nbsp; “Persetujuan status persyaratan oleh dinas teknis” <br> 3. Penambahan Data Kode Referensi 32 <br> &nbsp;&nbsp;&nbsp;&nbsp; “Kode Kawasan” <br> 4. Penyesuaian Data Kode Kawasan menjadi “Untuk Referensi Kode Kawasan Bisa didapatkan melalui method getDataReferensi dengan memasukkan kode 32” |
| 4.3.19 | 28/11/2023 | Tim Teknis OSS | 1. Penambahan input parameter fetchNIB : npwp_perusahaan<br>2. Penghapusan respon parameteter fetchNIB : Data Legal<br>3. Penambahan Data Skala Usaha<br>&nbsp;&nbsp;&nbsp;&nbsp;a. 01 - Usaha Mikro<br>&nbsp;&nbsp;&nbsp;&nbsp;b. 02 - Usaha Kecil<br>&nbsp;&nbsp;&nbsp;&nbsp;c. 03 - Usaha Menengah<br>&nbsp;&nbsp;&nbsp;&nbsp;d. 04 - Usaha Besar<br>4. Penghapusan Kode Status Izin<br>&nbsp;&nbsp;&nbsp;&nbsp;a. 91 - Pencabutan Perizinan Berusaha<br>&nbsp;&nbsp;&nbsp;&nbsp;b. 92 - Pembatalan Perizinan Berusaha |
| 4.3.20 | 22/01/2024 | Tim Teknis OSS | 1. Penambahan respon file_lampiran pada checkLicenseStatus |

## <span id="api-example-for-a-submenu-entry">Background</span>

##### Pedoman Integrasi Aplikasi (PIA) merupakan salah satu referensi dalam pembentukan program Application Programming Interface (API) antara Portal OSS dan aplikasi K/L. Didalam pedoman ini dijelaskan hal-hal yang perlu diketahui dalam mengintegrasikan modul-modul pada OSS Application Programming Interface (API), khususnya menyangkut struktur elemen data yang perlu dipersiapkan disisi K/L yang akan dikirimkan ke API Services OSS.

##### Dokumen Pedoman Integrasi Aplikasi (PIA) ini dibuat dengan tujuan :

* Mempermudah masing-masing pihak yang terkait dengan sistem OSS melakukan integrasi sistem yang standart & terstruktur 
* Sebagai pedoman untuk pengiriman data transaksi secara realtime 
* Mengurangi potensi human-error akibat adanya entry data maupun double entry data secara manual 
* Penyajian data yang lebih cepat, tepat dan akurat di sistem aplikasi OSS maupun yang terkait dengan OSS


##### Secara umum dokumen PIA ini memuat:

* Bisnis Proses Integrasi
* Teknis Integrasi OSS
* Contoh Elemen Data
* Contoh Jsonfile

## <span id="api-example-for-a-submenu-entry">Global Design</span>
![Global Design](https://confluence-connect.gliffy.net/embed/image/4ebc210d-ba30-4825-978b-4f438a753e21.png?utm_medium=live&utm_source=slack)

### <span id="api-example-for-a-submenu-entry">Legend</span>

![Global Design Legend](https://confluence-connect.gliffy.net/embed/image/5b986768-3f02-4c4e-97e9-1bcaeccc7b45.png?utm_medium=live&utm_source=slack)


### <span id="api-example-for-a-submenu-entry">Keterangan</span>

##### Integrasi Aplikasi / pertukaran data antara sistem OSS dengan sistem K/L/D dilakukan secara host to host, menggunakan protokol komunikasi dan format data yang disepakati yaitu protokol HTTP (APPLICATION PROGRAMMING INTERFACE) dengan format Dokumen JSON. Untuk Flow datanya sendiri Seperti diterangkan pada gambar di atas.

1. **Kemenkumham** dengan sistem AHU Online mengirimkan data pengesahan akta pendirian perusahaan berikut data NPWP yang akan di terima oleh sistem OSS.
2. **Online Single Submission** setelah menerima data dari AHU Online berupa data pengesahan akta pendirian perusahaan berikut data NPWP akan digunakan untuk membuat data Nomor Induk Berusaha (NIB) yang ke kemudian data NIB ini dikirimkan ke sistem K/L/D untuk digunakan sebagai data dasar pemerosesan izin di sistem K/L/D.
3. **K/LD** dengan sistem nya akan menerima data Nomor Induk Berusaha (NIB) yang dikirimkan oleh sistem OSS dan selanjutnya digunakan untuk memproses izin final yang kemudian izin final itu dikirimkan ke sistem OSS dan disimpan di OSS untuk bisa disharing ke K/L/D lain yang membutuhkan.
4. **K/LD** dengan sistem nya selain mengirimkan data izin final juga mengirimkan status permohonan izin final ke sistem OSS yang digunakan untuk proses tracking data perizinan di K/L/D.
5. **Online Single Submission** sistem OSS akan menyediakan services untuk inquery data Nomor Induk Berusaha (NIB) dengan parameter Nomor Induk Berusaha (NIB) yang diinvoke/dipanggil oleh sistem K/L/D.
6. **Online Single Submission** sistem OSS akan menyediakan services untuk mengenerate security key yang akan digunakan sistem K/L/D untuk invoke / memanggil services yang disediakan oleh sistem OSS.
7. **Online Single Submission** sistem OSS akan menyediakan services untuk merekonsiliasi data NIB yang ada di sistem OSS untuk di rekon dengan data id perusahaan sistem AHU Online Kemenkumham.
8. **Online Single Submission** sistem OSS akan menyediakan services untuk mengecek data Nomor Induk Berusaha (NIB) valid atau tidak.
9. **Online Single Submission** sistem OSS akan menyediakan services untuk mengecek data Nomor Induk Berusaha (NIB) yang gagal terkirim / error ke Sistem K/L/D.
10. **Online Single Submission** sistem OSS akan menyediakan services untuk mengecek data Nomor Induk Berusaha (NIB) yang update data checklist/komitmen ke Sistem K/L/D.
11. **Online Single Submission** sistem OSS akan menyediakan services untuk merekonsiliasi data NIB yang ada di sistem OSS untuk di rekon dengan data di sistem K/L/D.
12. **K/LD** dengan sistem nya akan melakukan validasi / pengecekan data nomor dan tanggal dokumen pemenuhan checklist komitmen tersebut valid atau tidak.
13. **Online Single Submission** menerbitkan data Nomor Induk Berusaha (NIB) untuk Usaha Mikro Kecil (UMK) yang ke kemudian data NIB ini dikirimkan ke sistem K/L/D untuk digunakan sebagai data dasar pemerosesan izin di sistem K/L/D.
14. **Online Single Submission** sistem OSS akan menyediakan services untuk inquery data Nomor Induk Berusaha (NIB) untuk Usaha Mikro Kecil (UMK) dengan parameter Nomor Induk Berusaha (NIB) yang diinvoke/dipanggil oleh sistem K/L/D.
15. **Online Single Submission** menerbitkan data Nomor Induk Berusaha (NIB) untuk Surat Tanda Pendaftaran Waralaba (STPW) yang ke kemudian data NIB ini dikirimkan ke sistem K/L/D untuk digunakan sebagai data dasar pemerosesan izin di sistem K/L/D.
16. **Online Single Submission** sistem OSS akan menyediakan services untuk inquery data Nomor Induk Berusaha (NIB) untuk Surat Tanda Pendaftaran Waralaba (STPW) dengan parameter Nomor Induk Berusaha (NIB) yang diinvoke/dipanggil oleh sistem K/L/D.
17. **Online Single Submission** sistem OSS akan menyediakan services untuk menampilkan data - data referensi yang ada di daftar lampiran yang diinvoke/dipanggil oleh sistem K/L/D.
18. **K/LD** dengan sistem nya akan menerima data file izin yang sudah di tanda tangani secara elektronik (Digital Signature) yang dikirimkan oleh sistem OSS.


### <span id="api-example-for-a-submenu-entry">PROCESS SPECIFICATION</span>
#### <span id="api-example-for-a-submenu-entry">Protokol Application Program Interface</span>
##### Pertukaran data (host to host) yang digunakan antara system internal di K/L/D dengan system Online Single Submission(OSS) adalah dengan mengunakan format data JSON, dan REST API sebagai protocol komunikasinya.
##### Untuk END POINT/ alamat URL untuk rest api oss adalah 

##### Production : <span style="color: blue;">https://api-prd.oss.go.id/v1/kl/rba/[nama_method]</span>
##### Staging : <span style="color: blue;">https://api-stg.oss.go.id/stg/v1/kl/rba/[nama_method]</span>

##### Berikut ini daftar Method dalam services Online Single Submission (OSS).
| NO | Fungsi                                                                                                                      | Method                | Locate                      |
|:--:|-----------------------------------------------------------------------------------------------------------------------------|-----------------------|-----------------------------|
|  1 | Pengiriman Data Akta Pendirian & Pengesahan serta NPWP dari AHU Online Kemenkumham ke Sistem OSS                            | receiveLegal          | Server (OSS) Client (K/L/D) |
|  2 | Services yang disediakan oleh Sistem K/L/D untuk menerima data NIB dari Sistem OSS                                          | receiveNIB            | Server (K/L/D) Client (OSS) |
|  3 | Pengiriman Data Izin Final dari Sistem K/L/D ke Sistem OSS                                                                  | receiveLicense        | Server (OSS) Client (K/L/D) |
|  4 | Pengiriman Data Status Izin dari Sistem K/L/D ke Sistem OSS                                                                 | receiveLicenseSta tus | Server (OSS) Client (K/L/D) |
|  5 | Inquery Data Nomor Induk Berusaha (NIB) di Sistem OSS                                                                       | inqueryNIB            | Server (OSS) Client (K/L/D) |
|  6 | Pengiriman Security Key Untuk Digunakan Sebagai key Untuk Menginvoke/Memanggil Service di Sistem OSS                        | sendSecurityKey       | Server (OSS) Client (K/L/D) |
|  7 | Rekonsiliasi Data Nomor Induk Berusaha (NIB) di Sistem OSS dengan Sistem AHU Online Kemenkumham                             | rekonAHUNIB           | Server (OSS) Client (K/L/D) |
|  8 | Cek Data Nomor Induk Berusaha (NIB) di Sistem OSS                                                                           | checkNIB              | Server (OSS) Client (K/L/D) |
|  9 | Cek Data Nomor Induk Berusaha (NIB) yang Error / Gagal Terkirim di Sistem OSS ke Sistem K/L/D                               | checkNIBError         | Server (OSS) Client (K/L/D) |
| 10 | Cek Data Nomor Induk Berusaha (NIB) yang Update data checklist/komitmen di Sistem OSS ke Sistem K/L/D                       | checkNIBUpdate        | Server (OSS) Client (K/L/D) |
| 11 | Rekonsiliasi Data Nomor Induk Berusaha (NIB) di Sistem OSS dengan Sistem K/L/D                                              | rekonNIB              | Server (OSS) Client (K/L/D) |
| 12 | Cek Data nomor dokumen pemenuhan checklist/komitmen di Sistem OSS ke Sistem K/L/D                                           | checkKomitmen         | Server (K/L/D) Client (OSS) |
| 13 | Services yang disediakan oleh Sistem K/L/D untuk menerima data NIB Surat Tanda Pendaftaraan Waralaba (STPW) dari Sistem OSS | receiveNIBSTPW        | Server (K/L/D) Client (OSS) |
| 14 | Inquery Data Nomor Induk Berusaha (NIB) Surat Tanda Pendaftaraan Waralaba (STPW) di Sistem OSS                              | inqueryNIBSTPW        | Server (OSS) Client (K/L/D) |
| 15 | Get Data Referensi di Sistem OSS                                                                                            | getDataReferensi      | Server (OSS) Client (K/L/D) |
| 16 | Services yang disediakan oleh Sistem K/L/D untuk menerima data file izin yang sudah di digital signature dari Sistem OSS    | receiveFileDS         | Server (K/L/D) Client (OSS) |
| 17 | Pengiriman Data pengajuan KKPR dari Sistem OSS ke K/L                                                                       | receiveNIBKKPR        | Server (K/L) Client (OSS)   |
| 18 | Pengiriman Data NIB PSE Asing dari Sistem OSS ke K/L                                                                        | receiveNIBPSE         | Server (K/L) Client (OSS)   |
| 19 | Pengecekan Data Status Izin dari Sistem K/L/D ke Sistem OSS                                                                 | checkLisenseStatus    | Server (OSS) Client (K/L/D) |
| 20 | Penerimaan Data Sertifikat dari Sistem K/L/D ke Sistem OSS                                                                  | receiveCertificate    | Server (OSS) Client (K/L/D) |
| 21 | Inquery Data Sertifikat Izin dari Sistem K/L/D ke Sistem OSS                                                                | inqueryCertificate    | Server (OSS) Client (K/L/D) |
