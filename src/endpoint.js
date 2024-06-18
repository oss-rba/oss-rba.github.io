/**
 * @api {post} /receiveLegal Receive Legal
 * @apiVersion 4.3.19
 * @apiDescription Menerima Data Legal Akta Pendirian & Pngesahan serta NPWP dari sistem AHU Online Kemenkumham ke Sisitem OSS
 * @apiName receiveLegal
 * @apiGroup Legal
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveLegal' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Authorization: Basic T1NTMDAwdjpVeDRCWFZCV1cyVmZhRkV4VXp0VVpsSmpBR3RRT2xGcXY=' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *       "AKTA": {
 *         "id_perusahaan": "",
 *         "jangka_waktu": "",
 *         "status_badan_hukum": "",
 *         "status_penanaman_modal": "",
 *         "npwp_perseroan": "",
 *         "nama_perseroan": "",
 *         "nama_singkatan": "",
 *         "jenis_perseroan": "",
 *         "status_perseroan": "",
 *         "alamat_perseroan": "",
 *         "rt_rw_perseroan": "",
 *         "kelurahan_perseroan": "",
 *         "perseroan_daerah_id": "",
 *         "kode_pos_perseroan": "",
 *         "nomor_telpon_perseroan": "",
 *         "email_perusahaan": "",
 *         "dalam_bentuk_uang": "",
 *         "dalam_bentuk_lain": "",
 *         "tahun_kbli": "",
 *         "data_kbli": [
 *           {
 *             "kbli": "",
 *             "uraian_usaha": "",
 *             "kbli5": ""
 *           }
 *         ],
 *         "modal_dasar": {
 *            "klasifikasi_saham_modal_dasar": "",
 *            "nominal_per_lbr_modal_dasar": 0,
 *            "jum_lbr_saham_modal_dasar": 0,
 *            "total_modal_dasar": 0
 *         },
 *          "modal_ditempatkan": {
 *            "klasifikasi_saham_modal_ditempatkan": "",
 *            "nominal_per_lbr_modal_ditempatkan": "",
 *            "jum_lbr_saham_modal_ditempatkan": "",
 *            "total_modal_ditempatkan": ""
 *          },
 *         "pemegang_saham": [
 *           {
 *             "jenis_pemegang_saham": "",
 *             "flag_asing": "",
 *             "klasifikasi_saham_pemegang": "",
 *             "jum_lbr_saham_pemegang": "",
 *             "total_modal_pemegang": "",
 *             "jabatan_pemegang_saham": "",
 *             "nama_pemegang_saham": "",
 *             "jns_identitas_pemegang_saham": "",
 *             "no_identitas_pemegang_saham": "",
 *             "valid_identitas_pemegang_saham": "",
 *             "pengendali_pemegang_saham": "",
 *             "npwp_pemegang_saham": "",
 *             "alamat_pemegang_saham": "",
 *             "fax_pemegang_saham": "",
 *             "email_pemegang_saham": "",
 *              "klasifikasi_saham_pemegang": "",
 *              "nominal_per_lbr_pemegang": 0
 *           }
 *         ],
 *         "penanggung_jwb": [
 *           {
 *             "flag_asing": "",
 *             "nama_penanggung_jwb": "",
 *             "jabatan_penanggung_jwb": " ",
 *             "kebangsaan_penanggung_jwb": "",
 *             "jenis_nik_penanggung_jwb": "",
 *             "nik_penanggung_jwb": "",
 *             "negara_asal_penanggung_jwb": "",
 *             "no_paspor_penanggung_jwb": "",
 *             "npwp_penanggung_jwb": "",
 *             "alamat_penanggung_jwb": "",
 *             "jalan_penanggung_jwb": "",
 *             "blok_penanggung_jwb": "",
 *             "no_penanggung_jwb": "",
 *             "rt_rw_penanggung_jwb": "",
 *             "kelurahan_penanggung_jwb": "",
 *             "daerah_id_penanggung_jwb": "",
 *             "kode_pos_penanggung_jwb": "",
 *             "no_telp_penanggung_jwb": "",
 *             "no_hp_penanggung_jwb": "",
 *             "no_fax_penanggung_jwb": "",
 *             "email_penanggung_jwb": ""
 *           }
 *         ],
 *         "no_pengesahan": "",
 *         "tgl_pengesahan": "",
 *         "no_akta_lama": "",
 *         "tgl_akta_lama": "",
 *         "no_pengesahan_lama": "",
 *         "tgl_pengesahan_lama": "",
 *         "legalitas": [
 *           {
 *             "jenis_akta": "",
 *             "no_akta": "",
 *             "tgl_akta": "",
 *             "alamat_notaris": "",
 *             "nama_notaris": "",
 *             "telepon_notaris": ""
 *           }
 *         ],
 *          "merger": [
 *              {
 *                "tanggal_efektif": "",
 *                "id_pt_surviving": "",
 *                "nama_pt_surviving": "",
 *                "npwp_pt_surviving": "",
 *                "id_pt_merger": "",
 *                "nama_pt_merger": "",
 *                "npwp_pt_merger": ""
 *              }
 *          ]
 *       }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object}	    AKTA	                        AKTA
 * @apiBody {string(11)}    	AKTA.id_perusahaan	            ID Perusahaan Dari Sistem AHU
 * @apiBody {string(20)}    	AKTA.jangka_waktu	            Jangka Waktu (format date : YYYY-MM- DD)
 * @apiBody {string(2)}    	AKTA.status_badan_hukum	        Status Badan Hukum (* Lihat Lampiran 12)
 * @apiBody {string(2)}    	AKTA.status_penanaman_modal	    Status Penanaman Modal (* Lihat Lampiran 1)
 * @apiBody {string(15)}    	AKTA.npwp_perseroan	    NPWP Perseroan
 * @apiBody {string(255)}    	AKTA.nama_perseroan	    Nama Perseroan
 * @apiBody {string(255)}    	AKTA.nama_singkatan	    Nama Singkatan Perseroan
 * @apiBody {string(2)}    	AKTA.jenis_perseroan	    Jenis Perseroan (* Lihat Lampiran 2)
 * @apiBody {string(10)}    	AKTA.status_perseroan	    Jenis Perusahaan Terbuka atau Tertutup
 * @apiBody {string(255)}    	AKTA.alamat_perseroan	    alamat_perseroan
 * @apiBody {string(7)}    	AKTA.rt_rw_perseroan	    rt_rw_perseroan
 * @apiBody {string(50)}    	AKTA.kelurahan_perseroan	    kelurahan_perseroan
 * @apiBody {string(10)}    	AKTA.perseroan_daerah_id	    ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(5)}    	AKTA.kode_pos_perseroan	    kode_pos_perseroan
 * @apiBody {string(20)}    	AKTA.nomor_telpon_perseroan	    nomor_telpon_perseroan
 * @apiBody {string(100)}    	AKTA.email_perusahaan	    email_perusahaan
 * @apiBody {string(20)}    	AKTA.dalam_bentuk_uang	    Modal Dalam Bentuk Uang (Valuta : IDR)
 * @apiBody {string(50000)}    	AKTA.dalam_bentuk_lain	    Modal Dalam Bentuk Lainnya
 * @apiBody {string(5){5}} AKTA.tahun_kbli Tahun KBLI
 * @apiBody {Object[]}    	AKTA.data_kbli	                        data_kbli
 * @apiBody {string(1024)}    	AKTA.data_kbli.kbli	                    Maksud & Tujuan KBLI
 * @apiBody {string(1024)}   	AKTA.data_kbli.uraian_usaha	            uraian_usaha
 * @apiBody {string(5){5}} AKTA.data_kbli.kbli5 Kode KBLI
 * @apiBody {Object[]} AKTA.modal_dasar Berulang (N) Rows
 * @apiBody {string(50){50}} AKTA.modal_dasar.klasifikasi_saham_modal_dasar Klasifikasi Saham Modal Dasar
 * @apiBody {number(18){18}} AKTA.modal_dasar.nominal_per_lbr_modal_dasar Nominal Perlembar Saham Dasar
 * @apiBody {number(18){18}} AKTA.modal_dasar.jum_lbr_saham_modal_dasar Lembar Saham Dasar
 * @apiBody {number(18){18}} AKTA.modal_dasar.total_modal_dasar Total Modal Dasar
 * @apiBody {Object[]} AKTA.modal_ditempatkan Berulang (N) Rows
 * @apiBody {string(50){50}} AKTA.modal_ditempatkan.klasifikasi_saham_modal_ditempatkan Klasifikasi Saham Modal Ditempatkan
 * @apiBody {number(18){18}} AKTA.modal_ditempatkan.nominal_per_lbr_modal_ditempatkan Nominal Perlembar Saham Ditempatkan
 * @apiBody {number(18){18}} AKTA.modal_ditempatkan.jum_lbr_saham_modal_ditempatkan Lembar Saham Ditempatkan
 * @apiBody {number(18){18}} AKTA.modal_ditempatkan.total_modal_ditempatkan Total Modal Ditempatkan
 * @apiBody {Object[]}    	AKTA.pemegang_saham	                    Detail pemegang saham
 * @apiBody {string(2)}    	AKTA.pemegang_saham.jenis_pemegang_saham	    Jenis Pemegang Saham (* Lihat Lampiran 13)
 * @apiBody {string(1)}    	AKTA.pemegang_saham.flag_asing	                Asal Pemegang Saham dari Dalam Negeri/Luar Negeri (Value : Y = asing; N = Bukan Asing)
 * @apiBody {string(20)}    	AKTA.pemegang_saham.klasifikasi_saham_pemegang	    klasifikasi_saham_pemegang
 * @apiBody {string(50)}    	AKTA.pemegang_saham.jum_lbr_saham_pemegang	    jum_lbr_saham_pemegang
 * @apiBody {number(20)}    	AKTA.pemegang_saham.total_modal_pemegang	    Total Modal Pemegang Saham (Valuta : IDR)
 * @apiBody {string(50)}    	AKTA.pemegang_saham.jabatan_pemegang_saham	    jabatan_pemegang_saham
 * @apiBody {string(500)}    	AKTA.pemegang_saham.nama_pemegang_saham	    nama_pemegang_saham
 * @apiBody {string(2)}    	AKTA.pemegang_saham.jns_identitas_pemegang_saham	    Jenis Identitas Pemegang Saham (* Lihat Lampiran 4)
 * @apiBody {string(100)}    	AKTA.pemegang_saham.no_identitas_pemegang_saham	    no_identitas_pemegang_saham
 * @apiBody {string(10)}    	AKTA.pemegang_saham.valid_identitas_pemegang_saham	    Valid / Masa Berlaku Pemegang Saham(Format Date : YYYY-MM-DD)
 * @apiBody {string(50)}    	AKTA.pemegang_saham.pengendali_pemegang_saham	    Nama Pengendali Pemegang Saham
 * @apiBody {string(15)}    	AKTA.pemegang_saham.npwp_pemegang_saham	    npwp_pemegang_saham
 * @apiBody {string(1024)}    	AKTA.pemegang_saham.alamat_pemegang_saham	    alamat_pemegang_saham
 * @apiBody {string(25)}    	AKTA.pemegang_saham.fax_pemegang_saham	    fax_pemegang_saham
 * @apiBody {string(100)}    	AKTA.pemegang_saham.email_pemegang_saham	    email_pemegang_saham
 * @apiBody {string(50){50}} AKTA.pemegang_saham.klasifikasi_saham_pemegang Klasifikasi Saham Pemegang
 * @apiBody {string(18){18}} AKTA.pemegang_saham.nominal_per_lbr_pemegang Nominal Perlembar Saham Pemegang
 * @apiBody {Object[]}    	AKTA.penanggung_jwb	                            Detail penanggung jawab
 * @apiBody {string(1)}    	AKTA.penanggung_jwb.flag_asing	    Asal Penanggung Jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing; N = Bukan Asing)
 * @apiBody {string(500)}    	AKTA.penanggung_jwb.nama_penanggung_jwb	    nama_penanggung_jwb
 * @apiBody {string(250)}    	AKTA.penanggung_jwb.jabatan_penanggung_jwb	    jabatan_penanggung_jwb
 * @apiBody {string(2)}    	AKTA.penanggung_jwb.kebangsaan_penanggung_jwb	    Kebangsaan Penanggung Jawab (* Lihat Lampiran 6)
 * @apiBody {string(2)}    	AKTA.penanggung_jwb.jenis_nik_penanggung_jwb	    Jenis Identitas Penganggung Jawab (* Lihat Lampiran 4)
 * @apiBody {string(20)}    	AKTA.penanggung_jwb.nik_penanggung_jwb	    Nomor Identitas Penanggung Jawab
 * @apiBody {string(2)}    	AKTA.penanggung_jwb.negara_asal_penanggung_jwb	    Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/se rvice/location )
 * @apiBody {string(25)}    	AKTA.penanggung_jwb.no_paspor_penanggung_jwb	    no_paspor_penanggung_jwb
 * @apiBody {string(15)}    	AKTA.penanggung_jwb.npwp_penanggung_jwb	    npwp_penanggung_jwb
 * @apiBody {string(1024)}    	AKTA.penanggung_jwb.alamat_penanggung_jwb	    alamat_penanggung_jwb
 * @apiBody {string(50)}    	AKTA.penanggung_jwb.jalan_penanggung_jwb	    jalan_penanggung_jwb
 * @apiBody {string(10)}    	AKTA.penanggung_jwb.blok_penanggung_jwb	    blok_penanggung_jwb
 * @apiBody {string(10)}    	AKTA.penanggung_jwb.no_penanggung_jwb	    no_penanggung_jwb
 * @apiBody {string(255)}    	AKTA.penanggung_jwb.rt_rw_penanggung_jwb	    rt_rw_penanggung_jwb
 * @apiBody {string(255)}    	AKTA.penanggung_jwb.kelurahan_penanggung_jwb	    kelurahan_penanggung_jwb
 * @apiBody {string(10)}    	AKTA.penanggung_jwb.daerah_id_penanggung_jwb	    ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(5)}    	AKTA.penanggung_jwb.kode_pos_penanggung_jwb	    kode_pos_penanggung_jwb
 * @apiBody {string(50)}    	AKTA.penanggung_jwb.no_telp_penanggung_jwb	    no_telp_penanggung_jwb
 * @apiBody {string(50)}    	AKTA.penanggung_jwb.no_hp_penanggung_jwb	    no_hp_penanggung_jwb
 * @apiBody {string(50)}    	AKTA.penanggung_jwb.no_fax_penanggung_jwb	    no_fax_penanggung_jwb
 * @apiBody {string(100)}    	AKTA.penanggung_jwb.email_penanggung_jwb	    email_penanggung_jwb
 * @apiBody {string(100)}    	AKTA.no_pengesahan	    Nomor Pengesahan Akta Dari Kumham
 * @apiBody {string(10)}    	AKTA.tgl_pengesahan	    Tanggal Pengesahan Akta Dari Kumham(format date : YYYY-MM-DD)
 * @apiBody {string(100)}    	AKTA.no_akta_lama	    Nomor Akta Lama Sebelum Perubahan
 * @apiBody {string(10)}    	AKTA.tgl_akta_lama	    Tanggal Akta Lama Sebelum Perubahan(format date : YYYY-MM-DD)
 * @apiBody {string(100)}    	AKTA.no_pengesahan_lama	    Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham
 * @apiBody {string(10)}    	AKTA.tgl_pengesahan_lama	    Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM-DD)
 * @apiBody {Object[]}    	AKTA.legalitas	    Data legalitas
 * @apiBody {string(2)}    	AKTA.legalitas.jenis_akta	    Jenis Akta Perusahaan (* Lihat Lampiran 7)
 * @apiBody {string(100)}    	AKTA.legalitas.no_akta	    Nomor Akta Perusahaan
 * @apiBody {string(10)}    	AKTA.legalitas.tgl_akta	    Tanggal Akta Perusahaan (format date : YYYY-MM-DD)
 * @apiBody {string(100)}    	AKTA.legalitas.alamat_notaris	    alamat_notaris
 * @apiBody {string(255)}    	AKTA.legalitas.nama_notaris	    nama_notaris
 * @apiBody {string(100)}    	AKTA.legalitas.telepon_notaris	    telepon_notaris
 * @apiBody {Object[]} [AKTA.merger] Berulang (N) Rows
 * @apiBody {string(10){10}} [AKTA.merger.tanggal_efektif] Tanggal Efektif Merger (format date: YYYY-MM-DD)
 * @apiBody {string(100){100}} [AKTA.merger.id_pt_surviving] ID PT Yang Menerima Penggabungan
 * @apiBody {string(255){255}} [AKTA.merger.nama_pt_surviving] Nama PT Yang Menerima Penggabungan
 * @apiBody {string(16){16}} [AKTA.merger.npwp_pt_surviving] NPWP PT Yang Menerima Penggabungan
 * @apiBody {string(100){100}} [AKTA.merger.id_pt_merger] ID PT Merger
 * @apiBody {string(255){255}} [AKTA.merger.nama_pt_merger] Nama PT Merger
 * @apiBody {string(16){16}} [AKTA.merger.npwp_pt_merger] NPWP PT Merger

 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
        "AKTA" : {
          "id_perusahaan" : "",
          "status_badan_hukum" : "",
          "status_penanaman_modal" : "",
          "tahun_kbli" : "",
          "data_kbli" : [
            {
              "kbli" : "",
              "uraian_usaha" : "",
              "kbli5" : ""
            }
          ],
          "npwp_perseroan" : "",
          "nama_perseroan" : "",
          "nama_singkat" : "",
          "status_perseroan" : "",
          "jenis_perseroan" : "",
          "alamat_perseroan" : "",
          "rt_rw_perseroan" : "",
          "kelurahan_perseroan" : "",
          "perseroan_daerah_id" : "",
          "kode_pos_perseroan" : "",
          "nomor_telpon_perseroan" : "",
          "dalam_bentuk_uang" : "",
          "dalam_bentuk_lain" : "",
          "pemegang_saham" : [
            {
              "jenis_pemegang_saham" : "",
              "flag_asing" : "Y",
              "klasifikasi_saham_pemegang" : "",
              "nominal_per_lbr_pemegang" : "",
              "total_modal_pemegang" : 0,
              "jabatan_pemegang_saham" : "",
              "nama_pemegang_saham" : "",
              "jns_identitas_pemegang_saham" : "",
              "no_identitas_pemegang_saham" : "",
              "valid_identitas_pemegang_saham" : "",
              "pengendali_pemegang_saham" : "",
              "npwp_pemegang_saham" : "",
              "alamat_pemegang_saham" : "",
              "fax_pemegang_saham" : "",
              "email_pemegang_saham" : ""
            }
          ],
          "modal_dasar" : [
            {
              "klasifikasi_saham_modal_dasar" : "",
              "nominal_per_lbr_modal_dasar" : 0,
              "jum_lbr_saham_modal_dasar" : 0,
              "total_modal_dasar" : 0
            }
          ],
          "modal_ditempatkan" : [
            {
              "klasifikasi_saham_modal_ditempatkan" : "",
              "nominal_per_lbr_modal_ditempatkan" : 0,
              "jum_lbr_saham_modal_ditempatkan" : 0,
              "total_modal_ditempatkan" : 0
            }
          ],
          "penanggung_jwb" : [
            {
              "flag_asing" : "",
              "identitas_penanggung_jwb" : "",
              "nama_penanggung_jwb" : "",
              "jabatan_penanggung_jwb" : "",
              "kebangsaan_penanggung_jwb" : "",
              "jenis_nik_penanggung_jwb" : "",
              "nik_penanggung_jwb" : "",
              "negara_asal_penanggung_jwb" : "",
              "no_paspor_penanggung_jwb" : "",
              "npwp_penanggung_jwb" : "",
              "alamat_penanggung_jwb" : "",
              "jalan_penanggung_jwb" : "",
              "blok_penanggung_jwb" : "",
              "no_penanggung_jwb" : "",
              "rt_rw_penanggung_jwb" : "/",
              "kelurahan_penanggung_jwb" : "",
              "daerah_id_penanggung_jwb" : null,
              "kode_pos_penanggung_jwb" : "",
              "no_telp_penanggung_jwb" : "",
              "no_hp_penanggung_jwb" : "",
              "no_fax_penanggung_jwb" : "",
              "email_penanggung_jwb" : ""
            }
          ],
          "no_pengesahan" : "",
          "tgl_pengesahan" : "",
          "no_akta_lama" : "",
          "tgl_akta_lama" : "",
          "no_pengesahan_lama" : "",
          "tgl_pengesahan_lama" : "",
          "legalitas" : [
            {
              "jenis_akta" : "",
              "no_akta" : "",
              "tgl_akta" : "",
              "alamat_notaris" : "",
              "nama_notaris" : "",
              "telepon_notaris" : ""
            }
          ],
          "merger" : [ ],
          "nama_perusahaan" : "",
          "email_perusahaan" : ""
        }
      }
 * 
 * @apiSuccess (200) {Object} responreceiveLegal Response receive legal
 * @apiSuccess (200) {String(3)} responreceiveLegal.kode Kode Respon (*Lihat Lampiran 9)
 * @apiSuccess (200) {String(255)} responreceiveLegal.keterangan Keterangan Respon
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responreceiveLegal": {
 *     		 "kode": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responreceiveLegal": {
 *     		 "kode": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 */

/**
 * @api {post} /receiveNIB Receive NIB
 * @apiVersion 4.3.19
 * @apiDescription Mengirimkan Data NIB & Checklist Izin dari Sistem OSS ke Sistem K/L/D
 * @apiName receiveNIB
 * @apiGroup NIB
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveNIB' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Authorization: Basic T1NTMDAwdjpVeDRCWFZCV1cyVmZhRkV4VXp0VVpsSmpBR3RRT2xGcXY=' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *       "dataNIB": {
 *         "nib": "",
 *         "tgl_pengajuan_nib": "",
 *         "tgl_terbit_nib": "",
 *         "tgl_perubahan_nib": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "jenis_pelaku_usaha": "",
 *         "no_npp": "",
 *         "no_va": "",
 *         "no_wlkp": "",
 *         "flag_perusahaan": "",
 *         "flag_ekspor": "",
 *         "flag_impor": "",
 *         "jenis_api": "",
 *         "gabung_negara": "",
 *         "negara_pma_dominan": "",
 *         "total_pma": "",
 *         "nilai_pma_dominan": "",
 *         "nilai_pmdn": "",
 *         "persen_pma": "",
 *         "persen_pmdn": "",
 *         "kd_kawasan": "",
 *         "jenis_kawasan": "",
 *         "versi_pia": "",
 *         "jangka_waktu": "",
 *         "status_badan_hukum": "",
 *         "status_penanaman_modal": "",
 *         "npwp_perseroan": "",
 *         "nama_perseroan": "",
 *         "nama_singkatan": "",
 *         "jenis_perseroan": "",
 *         "status_perseroan": "",
 *         "alamat_perseroan": "",
 *         "rt_rw_perseroan": "",
 *         "kelurahan_perseroan": "",
 *         "perseroan_daerah_id": "",
 *         "kode_pos_perseroan": "",
 *         "nomor_telpon_perseroan": "",
 *         "email_perusahaan": "",
 *         "dalam_bentuk_uang": "",
 *         "dalam_bentuk_lain": "",
 *         "total_modal_dasar": "",
 *         "total_modal_ditempatkan": "",
 *         "flag_umk": "",
 *         "flag_perubahan_data_teknis": "",
 *         "skala_usaha": "",
 *         "jenis_perubahan_terakhir": "",
 *         "pemegang_saham": [
 *           {
 *             "jenis_pemegang_saham": "",
 *             "flag_asing": "",
 *             "total_modal_pemegang": "",
 *             "jabatan_pemegang_saham": "",
 *             "nama_pemegang_saham": "",
 *             "jns_identitas_pemegang_saham": "",
 *             "no_identitas_pemegang_saham": "",
 *             "valid_identitas_pemegang_saham": "",
 *             "negara_asal_pemegang_saham": "",
 *             "pengendali_pemegang_saham": "",
 *             "npwp_pemegang_saham": "",
 *             "alamat_pemegang_saham": "",
 *             "fax_pemegang_saham": "",
 *             "email_pemegang_saham": "",
 *             "flag_pajak_pemegang_saham": "",
 *             "ket_pajak_pemegang_saham": ""
 *           }
 *         ],
 *         "penanggung_jwb": [
 *           {
 *             "flag_asing": "",
 *             "jns_identitas_penanggung_jwb": "",
 *             "no_identitas_penanggung_jwb": "",
 *             "nama_penanggung_jwb": "",
 *             "jabatan_penanggung_jwb": " ",
 *             "kebangsaan_penanggung_jwb": "",
 *             "negara_asal_penanggung_jwb": "",
 *             "npwp_penanggung_jwb": "",
 *             "alamat_penanggung_jwb": "",
 *             "jalan_penanggung_jwb": "",
 *             "blok_penanggung_jwb": "",
 *             "no_penanggung_jwb": "",
 *             "rt_rw_penanggung_jwb": "",
 *             "kelurahan_penanggung_jwb": "",
 *             "daerah_id_penanggung_jwb": "",
 *             "kode_pos_penanggung_jwb": "",
 *             "no_telp_penanggung_jwb": "",
 *             "no_hp_penanggung_jwb": "",
 *             "no_fax_penanggung_jwb": "",
 *             "email_penanggung_jwb": "",
 *             "flag_pajak_penanggung_jwb": "",
 *             "ket_pajak_penanggung_jwb": ""
 *           }
 *         ],
 *         "no_pengesahan": "",
 *         "tgl_pengesahan": "",
 *         "no_akta_lama": "",
 *         "tgl_akta_lama": "",
 *         "no_pengesahan_lama": "",
 *         "tgl_pengesahan_lama": "",
 *         "legalitas": [
 *           {
 *             "jenis_legal": "",
 *             "no_legal": "",
 *             "tgl_legal": "",
 *             "alamat_notaris": "",
 *             "nama_notaris": "",
 *             "telepon_notaris": ""
 *           }
 *         ],
 *         "data_rptka": {
 *           "jenis_rptka": "",
 *           "no_rptka": "",
 *           "rptka_awal": "",
 *           "rptka_akhir": "",
 *           "rptka_gaji": "",
 *           "jumlah_tka_rptka": "",
 *           "jangka_penggunaan_waktu": "",
 *           "jangka_waktu_permohonan_rptka": "",
 *           "rptka_jabatan": [
 *             {
 *               "id_jabatan": "",
 *               "jabatan": "",
 *               "jumlah": "",
 *               "tgl_mulai": "",
 *               "tgl_selesai": "",
 *               "keterangan": "",
 *               "rptka_tki_pendamping": [
 *                 {
 *                   "id_jabatan": "",
 *                   "id_pendamping": "",
 *                   "nama": "",
 *                   "nik": "",
 *                   "jabatan": "",
 *                   "hp": "",
 *                   "email": "",
 *                   "foto": "",
 *                   "pendidikan_min": "",
 *                   "sertifikat": "",
 *                   "pengalaman_kerja": "",
 *                   "keterangan": ""
 *                 }
 *               ]
 *             }
 *           ],
 *           "rptka_negara": [
 *             {
 *               "id_negara": "",
 *               "jumlah": ""
 *             }
 *           ],
 *           "rptka_lokasi": [
 *             {
 *               "lokasi_id": "",
 *               "jumlah": ""
 *             }
 *           ]
 *         },
 *         "data_proyek": [
 *           {
 *             "id_proyek": "",
 *             "nomor_proyek": "",
 *             "uraian_usaha": "",
 *             "jumlah_tki_l": "",
 *             "jumlah_tki_p": "",
 *             "jumlah_tka_l": "",
 *             "jumlah_tka_p": "",
 *             "kbli": "",
 *             "sektor": "",
 *             "memiliki_menguasai": "",
 *             "jenis_lokasi": "",
 *             "status_tanah": "",
 *             "luas_tanah": "",
 *             "satuan_luas_tanah": "",
 *             "pembelian_pematang_tanah": "",
 *             "bangunan_gedung": "",
 *             "mesin_peralatan": "",
 *             "mesin_peralatan_usd": "",
 *             "investasi_lain": "",
 *             "sub_jumlah": "",
 *             "modal_kerja": "",
 *             "jumlah_investasi": "",
 *             "tanggal_kurs": "",
 *             "nilai_kurs": "",
 *             "kd_kawasan": "",
 *             "jawab_lokasi_b": "",
 *             "jawab_lokasi_c": "",
 *             "jawab_lokasi_d": "",
 *             "jawab_lokasi_e": "",
 *             "jawab_lokasi_f": "",
 *             "jawab_lokasi_g": "",
 *             "flag_perluasan": "",
 *             "flag_cabang": "",
 *             "npwp_cabang": "",
 *             "nama_cabang": "",
 *             "jenis_identitas_pj": "",
 *             "no_identitas_pj": "",
 *             "nama_pj": "",
 *             "status_proyek": "",
 *             "jenis_proyek": "",
 *             "nama_kegiatan": "",
 *             "flag_merger": "",
 *             "npwp_perseroan_merger": "",
 *             "nama_perseroan_merger": "",
 *             "skala_usaha": "",
 *             "skala_resiko": "",
 *             "deskripsi_kegiatan": "",
 *             "satu_lini": "",
 *             "data_lokasi_proyek": [
 *               {
 *                 "id_proyek_lokasi": "",
 *                 "proyek_daerah_id": "",
 *                 "kd_kawasan": "",
 *                 "alamat_usaha": "",
 *                 "id_kegiatan": "",
 *                 "response_kegiatan": "",
 *                 "jenis_kawasan": "",
 *                 "jenis_lokasi": "",
 *                 "status_lokasi": "",
 *                 "data_lokasi_proyek": [
 *                   {
 *                     "serial": "",
 *                     "lat_lng": ""
 *                   }
 *                 ],
 *                 "data_posisi_proyek": [
 *                   {
 *                     "id_proyek_posisi": "",
 *                     "id_proyek_lokasi": "",
 *                     "posisi_lokasi": ""
 *                   }
 *                 ]
 *               }
 *             ],
 *             "data_proyek_produk": [
 *               {
 *                 "id_produk": "",
 *                 "id_proyek": "",
 *                 "kbli": "",
 *                 "id_bidang_usaha": "",
 *                 "jenis_produksi": "",
 *                 "kapasitas": "",
 *                 "satuan": "",
 *                 "merk_dagang": "",
 *                 "pemegang_haki": "",
 *                 "pemegang_paten": "",
 *                 "pi_nomor": "",
 *                 "pi_tanggal": "",
 *                 "pi_npwp": "",
 *                 "id_kbli_ta": "",
 *                 "tkdn": "",
 *                 "flag_memiliki_halal": "",
 *                 "nomor_sertifikat_halal": "",
 *                 "masa_berlaku_sertifikat_halal": "",
 *                 "flag_memiliki_sni": "",
 *                 "nomor_sni": "",
 *                 "masa_berlaku_sni": "",
 *                 "flag_self_declare": "",
 *                 "tipe_cakupan": ""
 *               }
 *             ]
 *           }
 *         ],
 *         "data_dni": [
 *           {
 *             "kd_dni": ""
 *           }
 *         ],
 *         "data_checklist": [
 *           {
 *             "id_produk": "",
 *             "id_proyek": "",
 *             "id_izin": "",
 *             "jenis_izin": "",
 *             "kd_izin": "",
 *             "kd_daerah": "",
 *             "nama_izin": "",
 *             "instansi": "",
 *             "id_bidang_spesifik": "",
 *             "bidang_spesifik": "",
 *             "id_kewenangan": "",
 *             "parameter_kewenangan": "",
 *             "kewenangan": "",
 *             "flag_checklist": "",
 *             "flag_transaksional": "",
 *             "kbli_konversi": "",
 *             "flag_perpanjangan": "",
 *             "no_izin": "",
 *             "tgl_izin": "",
 *             "file_izin": "",
 *             "kd_dokumen": "",
 *             "nm_dokumen": "",
 *             "data_persyaratan": [
 *               {
 *                 "id_syarat": "",
 *                 "no_dokumen": "",
 *                 "tgl_dokumen": "",
 *                 "file_dokumen": "",
 *                 "keterangan": ""
 *               }
 *             ],
 *             "data_produk_halal" : {
 *    						"id_pengajuan_sertifikat_halal" : "",
 *					    	"uraian_jenis_produk" : "",
 *					    	"kode_klasifikasi_produk" : "",
 *					    	"flag_self_declare" : "",
 *					     	"list_produk" : [
 *					        	{
 *				      				"id_cakupan_produk" : "",
 *				      				"uraian_produk" : "",
 *				      				"kbli" : "",
 *				      				"id_proyek" : "",
 *				      				"id_produk" : "",
 *					      			"id_pengajuan_sertifikat_halal_detail" : ""
 *				        		}
 *				    		]
 *			  		}
 *           }
 *         ],
 *         "jenis_id_user_proses": "",
 *         "no_id_user_proses": "",
 *         "nama_user_proses": "",
 *         "email_user_proses": "",
 *         "hp_user_proses": "",
 *         "alamat_user_proses": "",
 *         "jns_kelamin_user_proses": "",
 *         "tempat_lahir_user_proses": "",
 *         "tgl_lahir_user_proses": "",
 *         "daerah_id_user_proses": "",
 *         "rt_rw_user_proses": "",
 *         "agama_user_proses": "",
 *         "status_perkawinan_user_proses": "",
 *         "pekerjaan_user_proses": "",
 *         "status_nib": "",
 *         "tipe_dokumen ": ""
 *       }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} Token SHA1(USERNAME+PASSWORD+NIB+DATE(Ymd))
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "Token": "OSS000qw13242628gssssss812345654709820180514"
 *     }
 * @apiBody {Object}	    dataNIB	                            Data NIB
 * @apiBody {string(13)}    	dataNIB.nib	                    Nomor Induk Berusaha
 * @apiBody {string(10)}    	dataNIB.tgl_pengajuan_nib	    Tanggal Pengajuan NIB (format date : YYYY-MM-DD)
 * @apiBody {string(10)}    	dataNIB.tgl_terbit_nib	    Tanggal Penerbitan NIB (format date : YYYY-MM-DD)
 * @apiBody {string(10)}    	dataNIB.tgl_perubahan_nib	    Tanggal Perubahan NIB (format date : YYYY-MM-DD)
 * @apiBody {string(25)}    	dataNIB.oss_id	    Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha
 * @apiBody {string(25)}    	dataNIB.id_izin	    Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {string(12)}    	dataNIB.kd_izin	    Kode Izin Sistem K/L/D (* Lihat Lampiran 8)
 * @apiBody {string(10)}    	dataNIB.kd_daerah	    Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )
 * @apiBody {string(2)}    	dataNIB.kewenangan	    Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)
 * @apiBody {string(2)}    	dataNIB.jenis_pelaku_usaha	    Jenis Pelaku Usaha (* Lihat Lampiran 18)
 * @apiBody {string(20)}    	dataNIB.no_npp	    Nomor Pendaftaraan Perusahaan Untuk BPJS Ketenagakerjaan
 * @apiBody {string(20)}    	dataNIB.no_va	    Nomor Pendaftaraan Perusahaan Untuk BPJS Kesehatan
 * @apiBody {string(23)}    	dataNIB.no_wlkp	    Nomor Wajib Lapor Ketenagakerjaan Perusahaan
 * @apiBody {string(1)}    	dataNIB.flag_perusahaan	    Flag (Y = Untuk Perusahaan Baru; N = Untuk Perusahaan Lama / Exist)
 * @apiBody {string(1)}    	dataNIB.flag_ekspor	    Y : Melakukan Aktifikas Ekspor, N : Tidak Melakukan Aktifitas Ekspor
 * @apiBody {string(1)}    	dataNIB.flag_impor	    Y : Melakukan Aktifikas Impor, N : Tidak Melakukan Aktifitas Impor
 * @apiBody {string(2)}    	dataNIB.jenis_api	    Jenis Angka Pengenal Impor (API) (* Lihat Lampiran 3)
 * @apiBody {string(1)}    	dataNIB.gabung_negara	    PMA Merupakan Gabungan Negara Atau Tidak (* Y:Gabungan Negara, N: Bukan Gabungan Negara)
 * @apiBody {string(2)}    	dataNIB.negara_pma_dominan	    Negara Asing Yang Memiliki Modal Mayoritas
 * @apiBody {number(20.2)}    	dataNIB.total_pma	    Total Modal PMA
 * @apiBody {number(20.2)}    	dataNIB.nilai_pma_dominan	    Nilai Modal PMA Dominan
 * @apiBody {number(20.2)}    	dataNIB.nilai_pmdn	    Nilai Modal PMDN
 * @apiBody {number(9.2)}    	dataNIB.persen_pma	    Persentase Modal PMA
 * @apiBody {number(9.2)}    	dataNIB.persen_pmdn	    Persentase Modal PMDN
 * @apiBody {number(5)}    	dataNIB.kd_kawasan	    Kode Kawasan (* Lihat Lampiran 30)
 * @apiBody {string(2)}    	dataNIB.jenis_kawasan	    Jenis Kawasan (* Lihat Lampiran 21)
 * @apiBody {string(5)}    	dataNIB.versi_pia	    Versi PIA OSS
 * @apiBody {string(10)}    	dataNIB.jangka_waktu	    Jangka Waktu (format date : YYYY- MM-DD)
 * @apiBody {string(2)}    	dataNIB.status_badan_hukum	    Status Badan Hukum (* Lihat Lampiran 12)
 * @apiBody {string(2)}    	dataNIB.status_penanaman_modal	    Status Penanaman Modal (* Lihat Lampiran 1)
 * @apiBody {string(15)}    	dataNIB.npwp_perseroan	    NPWP Perseroan
 * @apiBody {string(255)}    	dataNIB.nama_perseroan	    Nama Perseroan
 * @apiBody {string(255)}    	dataNIB.nama_singkatan	    Nama Singkatan Perseroan
 * @apiBody {string(2)}    	dataNIB.jenis_perseroan	    Jenis Perseroan (* Lihat Lampiran 2)
 * @apiBody {string(1)}    	dataNIB.status_perseroan	    Status Perseroan (*Y: Terbuka, N:Tertutup)
 * @apiBody {string(255)}    	dataNIB.alamat_perseroan	    alamat_perseroan
 * @apiBody {string(7)}    	dataNIB.rt_rw_perseroan	    rt_rw_perseroan
 * @apiBody {string(50)}    	dataNIB.kelurahan_perseroan	    kelurahan_perseroan
 * @apiBody {string(10)}    	dataNIB.perseroan_daerah_id	    ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(5)}    	dataNIB.kode_pos_perseroan	    kode_pos_perseroan
 * @apiBody {string(20)}    	dataNIB.nomor_telpon_perseroan	    nomor_telpon_perseroan
 * @apiBody {string(100)}    	dataNIB.email_perusahaan	    email_perusahaan
 * @apiBody {number(20)}    	dataNIB.dalam_bentuk_uang	    Modal Dalam Bentuk Uang (Valuta : IDR)
 * @apiBody {string(50000)}    	dataNIB.dalam_bentuk_lain	    Modal Dalam Bentuk Lainnya
 * @apiBody {number(20)}    	dataNIB.total_modal_dasar	    Total Modal Dasar (Valuta : IDR)
 * @apiBody {number(20)}    	dataNIB.total_modal_ditempatkan	    Total Modal Ditempatkan (Valuta : IDR)
 * @apiBody {string(1)}    	dataNIB.flag_umk	    Flag yang menandakan umk atau non umk
 * @apiBody {string(1){1}} dataNIB.flag_perubahan_data_teknis Flag perubahan data teknis (jika value: N/null = Bukan Perubahan Data Jenis, value: Y = Perubahan data teknis)
 * @apiBody {string(10){10}} dataNIB.skala_usaha Skala Usaha Perusahaan
 * @apiBody {string(2){2}} dataNIB.jenis_perubahan_terakhir Jenis Perubahan Terakhir Perusahaan
 * @apiBody {Object[]}    	dataNIB.pemegang_saham	    Data pemegang_saham
 * @apiBody {string(2)}    	dataNIB.pemegang_saham.jenis_pemegang_saham	    Jenis Pemegang Saham (* Lihat Lampiran 13)
 * @apiBody {string(1)}    	dataNIB.pemegang_saham.flag_asing	    Asal Pemegang Saham dari Dalam Negeri / Luar Negeri (Value : Y = asing, N= Bukan Asing)
 * @apiBody {number(20)}    	dataNIB.pemegang_saham.total_modal_pemegang	    Total Modal Pemegang Saham (Valuta : IDR)
 * @apiBody {string(50)}    	dataNIB.pemegang_saham.jabatan_pemegang_saham	    Jabatan Pemegang Saham
 * @apiBody {string(500)}    	dataNIB.pemegang_saham.nama_pemegang_saham	    Nama Pemegang Saham
 * @apiBody {string(2)}    	dataNIB.pemegang_saham.jns_identitas_pemegang_saham	    Jenis Identitas Pemegang Saham(* Lihat Lampiran 4)
 * @apiBody {string(100)}    	dataNIB.pemegang_saham.no_identitas_pemegang_saham	    no_identitas_pemegang_saham
 * @apiBody {string(10)}    	dataNIB.pemegang_saham.valid_identitas_pemegang_saham	    Valid / Masa Berlaku Pemegang Saham (Format Date : YYYY-MM- DD)
 * @apiBody {string(2)}    	dataNIB.pemegang_saham.negara_asal_pemegang_saham	    negara_asal_pemegang_saham
 * @apiBody {string(50)}    	dataNIB.pemegang_saham.pengendali_pemegang_saham	    Nama Pengendali Pemegang Saham
 * @apiBody {string(15)}    	dataNIB.pemegang_saham.npwp_pemegang_saham	    npwp_pemegang_saham
 * @apiBody {string(1024)}    	dataNIB.pemegang_saham.alamat_pemegang_saham	    alamat_pemegang_saham
 * @apiBody {string(25)}    	dataNIB.pemegang_saham.fax_pemegang_saham	    fax_pemegang_saham
 * @apiBody {string(100)}    	dataNIB.pemegang_saham.email_pemegang_saham	    email_pemegang_saham
 * @apiBody {string(2)}    	dataNIB.pemegang_saham.flag_pajak_pemegang_saham	    Flag Validasi Pajak Pemegang Saham (* Lihat Lampiran 19)
 * @apiBody {string(255)}    	dataNIB.pemegang_saham.ket_pajak_pemegang_saham	    Keterangan Validasi Pajak Pemegang Saham
 * @apiBody {Object[]}    	dataNIB.penanggung_jwb	    Data penanggung jawab
 * @apiBody {string(1)}    	dataNIB.penanggung_jwb.flag_asing	    Asal Penanggung Jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing, N= Bukan Asing)
 * @apiBody {string(2)}    	dataNIB.penanggung_jwb.jns_identitas_penanggung_jwb	    Jenis Nik Penganggung Jawab (* Lihat Lampiran 4)
 * @apiBody {string(100)}    	dataNIB.penanggung_jwb.no_identitas_penanggung_jwb	    no_identitas_penanggung_jwb
 * @apiBody {string(500)}    	dataNIB.penanggung_jwb.nama_penanggung_jwb	    nama_penanggung_jwb
 * @apiBody {string(250)}    	dataNIB.penanggung_jwb.jabatan_penanggung_jwb	    jabatan_penanggung_jwb
 * @apiBody {string(2)}    	dataNIB.penanggung_jwb.kebangsaan_penanggung_jwb	    Kebangsaan Penanggung Jawab (* Lihat Lampiran 6)
 * @apiBody {string(2)}    	dataNIB.penanggung_jwb.negara_asal_penanggung_jwb	    Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece. org/cefact/locode/s ervice/location )
 * @apiBody {string(15)}    	dataNIB.penanggung_jwb.npwp_penanggung_jwb	    npwp_penanggung_jwb
 * @apiBody {string(1024)}    	dataNIB.penanggung_jwb.alamat_penanggung_jwb	    alamat_penanggung_jwb
 * @apiBody {string(50)}    	dataNIB.penanggung_jwb.jalan_penanggung_jwb	    jalan_penanggung_jwb
 * @apiBody {string(10)}    	dataNIB.penanggung_jwb.blok_penanggung_jwb	    blok_penanggung_jwb
 * @apiBody {string(10)}    	dataNIB.penanggung_jwb.no_penanggung_jwb	    no_penanggung_jwb
 * @apiBody {string(255)}    	dataNIB.penanggung_jwb.rt_rw_penanggung_jwb	    rt_rw_penanggung_jwb
 * @apiBody {string(255)}    	dataNIB.penanggung_jwb.kelurahan_penanggung_jwb	    kelurahan_penanggung_jwb
 * @apiBody {string(10)}    	dataNIB.penanggung_jwb.daerah_id_penanggung_jwb	    ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(5)}    	dataNIB.penanggung_jwb.kode_pos_penanggung_jwb	    kode_pos_penanggung_jwb
 * @apiBody {string(50)}    	dataNIB.penanggung_jwb.no_telp_penanggung_jwb	    no_telp_penanggung_jwb
 * @apiBody {string(50)}    	dataNIB.penanggung_jwb.no_hp_penanggung_jwb	    no_hp_penanggung_jwb
 * @apiBody {string(50)}    	dataNIB.penanggung_jwb.no_fax_penanggung_jwb	    no_fax_penanggung_jwb
 * @apiBody {string(100)}    	dataNIB.penanggung_jwb.email_penanggung_jwb	    email_penanggung_jwb
 * @apiBody {string(2)}    	dataNIB.penanggung_jwb.flag_pajak_penanggung_jwb	    Flag Validasi Pajak Penanggung Jawab (* Lihat Lampiran 19)
 * @apiBody {string(255)}    	dataNIB.penanggung_jwb.ket_pajak_penanggung_jwb	    Keterangan Validasi Pajak Penanggung Jawab
 * @apiBody {string(100)}    	dataNIB.no_pengesahan	    Nomor Pengesahan Akta Dari Kumham
 * @apiBody {string(10)}    	dataNIB.tgl_pengesahan	    Tanggal Pengesahan Akta Dari Kumham (format date : YYYY-MM-DD)
 * @apiBody {string100()}    	dataNIB.no_akta_lama	    Nomor Akta Lama Sebelum Perubahan
 * @apiBody {string(10)}    	dataNIB.tgl_akta_lama	    Tanggal Akta Lama Sebelum Perubahan (format date :YYYY-MM-DD)
 * @apiBody {string(100)}    	dataNIB.no_pengesahan_lama	    Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham
 * @apiBody {string(10)}    	dataNIB.tgl_pengesahan_lama	    Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM- DD)
 * @apiBody {Object[]}    	dataNIB.legalitas	    Data legalitas
 * @apiBody {string(2)}    	dataNIB.legalitas.jenis_legal	    Jenis Legal Perusahaan (* Lihat Lampiran 7)
 * @apiBody {string(100)}    	dataNIB.legalitas.no_legal	    Nomor Legal Perusahaan
 * @apiBody {string(10)}    	dataNIB.legalitas.tgl_legal	    Tanggal Legal Perusahaan (format date : YYYY-MM- DD)
 * @apiBody {string(255)}    	dataNIB.legalitas.alamat_notaris	    alamat_notaris
 * @apiBody {string(100)}    	dataNIB.legalitas.nama_notaris	    nama_notaris
 * @apiBody {string(100)}    	dataNIB.legalitas.telepon_notaris	    telepon_notaris
 * @apiBody {Object}    	dataNIB.data_rptka	    data_rptka
 * @apiBody {string(2)}    	dataNIB.data_rptka.jenis_rptka	    Jenis Flag RPTKA *( 01 : Baru, 02:Perubahan)
 * @apiBody {string(20)}    	dataNIB.data_rptka.no_rptka	    No Bacode RPTKA
 * @apiBody {string(10)}    	dataNIB.data_rptka.rptka_awal	    Masa Berlaku Dari Tanggal(format date : YYYY-MM- DD)
 * @apiBody {string(10)}    	dataNIB.data_rptka.rptka_akhir	    Masa Berlaku Sampai Tanggal(format date : YYYY-MM- DD)
 * @apiBody {number(20.2)}    	dataNIB.data_rptka.rptka_gaji	    Gaji Tenaga Asing
 * @apiBody {number(11)}    	dataNIB.data_rptka.jumlah_tka_rptka	    Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)
 * @apiBody {string(10)}    	dataNIB.data_rptka.jangka_penggunaan_waktu	    Jangka Waktu Penggunaan Tenaga Kerja Asing (TKA) dalam Izin Rencana Penggunaan Tenaga Kerja Asing (RPTKA) (format date :YYYY-MM-DD)
 * @apiBody {number(1)}    	dataNIB.data_rptka.jangka_waktu_permohonan_rptka	    Jangka Waktu Permohonan RPTKA (dalam hitungan bulan)
 * @apiBody {Object[]}    	dataNIB.data_rptka.rptka_jabatan	    Data RPTKA jabatan
 * @apiBody {number(11)}    	dataNIB.data_rptka.rptka_jabatan.id_jabatan	    ID Jabatan Tenaga Kerja Asing berdasarkan https://jdih.kemna ker.go.id/data_puu/KEP247_MENX_2011.pdf
 * @apiBody {string(255)}    	dataNIB.data_rptka.rptka_jabatan.jabatan	    Nama Jabatan
 * @apiBody {number(11)}    	dataNIB.data_rptka.rptka_jabatan.jumlah	    Jumlah Orang Yang Memiliki Jabatan
 * @apiBody {string(10)}    	dataNIB.data_rptka.rptka_jabatan.tgl_mulai	    Tanggal Mulai Jabatan (format date: YYYY-MM-DD)
 * @apiBody {string(10)}    	dataNIB.data_rptka.rptka_jabatan.tgl_selesai	    Tanggal Selesai Jabatan (format date: YYYY-MM-DD)
 * @apiBody {string(255)}    	dataNIB.data_rptka.rptka_jabatan.keterangan	    keterangan
 * @apiBody {Object[]}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping	    rptka_tki_pendamping
 * @apiBody {number(10)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_jabatan	    Id jabatan
 * @apiBody {number(10)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_pendamping	    Id TKI Pendamping
 * @apiBody {string(100)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nama	    Nama TKI Pendamping
 * @apiBody {string(20)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nik	    Nomor NIK TKI Pendamping
 * @apiBody {string(255)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.jabatan	    Nama Jabatan TKI Pendamping
 * @apiBody {string(25)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.hp	    Nomor HP TKI Pendamping
 * @apiBody {string(100)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.email	    Email TKI Pendampiag
 * @apiBody {string(65535)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.foto	    Foto TKI Pendamping Attachment File dalam Bentukbentuk base64 dengan format (data:image/jpeg;b ase64,string() ENCODE IMAGE)
 * @apiBody {string(50)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pendidikan_min	    Tingkat Pendidikan Minimal TKI Pendamping
 * @apiBody {string(255)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.sertifikat	    Sertifikat Kompetensi TKI Pendamping
 * @apiBody {number(11)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pengalaman_kerja	    Pengalaman Kerja TKI Pendamping (dalam tahun)
 * @apiBody {string(255)}    	dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.keterangan	    keterangan
 * @apiBody {Object[]}    	dataNIB.data_rptka.rptka_negara	    rptka_negara
 * @apiBody {string(2)}    	dataNIB.data_rptka.rptka_negara.id_negara	    Negara Asal Tenaga Kerja Asing(* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece. org/cefact/locode/s ervice/location )
 * @apiBody {number(11)}    	dataNIB.data_rptka.rptka_negara.jumlah	    Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)
 * @apiBody {Object[]}    	dataNIB.data_rptka.rptka_lokasi	    Data RPTKA lokasi
 * @apiBody {string(10)}    	dataNIB.data_rptka.rptka_lokasi.lokasi_id	    ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )
 * @apiBody {number(11)}    	dataNIB.data_rptka.rptka_lokasi.jumlah	    Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)
 * @apiBody {Object[]}    	dataNIB.data_proyek	    data_proyek
 * @apiBody {string(25)}    	dataNIB.data_proyek.id_proyek	    id_proyek
 * @apiBody {string(26)}    	dataNIB.data_proyek.nomor_proyek	    Nomor Permohonan Proyek
 * @apiBody {string(255)}    	dataNIB.data_proyek.uraian_usaha	    Uraian Usaha Proyek
 * @apiBody {number(10)}    	dataNIB.data_proyek.jumlah_tki_l	    Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki
 * @apiBody {number(10)}    	dataNIB.data_proyek.jumlah_tki_p	    Jumlah Tenaga Kerja Indonesia (TKI) Perempuan
 * @apiBody {number(10)}    	dataNIB.data_proyek.jumlah_tka_l	    Jumlah Tenaga Kerja Asing (TKA) Laki -Laki
 * @apiBody {number(10)}    	dataNIB.data_proyek.jumlah_tka_p	    Jumlah Tenaga Kerja Asing (TKA) Perempuan
 * @apiBody {number(7)}    	dataNIB.data_proyek.kbli	    Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)
 * @apiBody {string(3)}    	dataNIB.data_proyek.sektor	    Sektor Usaha Berdasarkan KBLI (* Lihat Lampiran 20)
 * @apiBody {string(1)}    	dataNIB.data_proyek.memiliki_menguasai	    Sudah Memiliki atar Menguasai Lahan (Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)
 * @apiBody {string(2)}    	dataNIB.data_proyek.jenis_lokasi	    Lokasi Berada dalam Lintas Administratif (Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)
 * @apiBody {string(2)}    	dataNIB.data_proyek.status_tanah	    Status Kepemilikan Tanah (* Lihat Lampiran 5)
 * @apiBody {number(10)}    	dataNIB.data_proyek.luas_tanah	    Luas Bidang tanah
 * @apiBody {string(2)}    	dataNIB.data_proyek.satuan_luas_tanah	    Satuan Luas Tanah (*Lihat Lampiran 17)
 * @apiBody {number(19)}    	dataNIB.data_proyek.pembelian_pematang_tanah	    Nilai Pembelian Pematang Tanah (Valuta:IDR)
 * @apiBody {number(19)}    	dataNIB.data_proyek.bangunan_gedung	    Nilai Bangunan Gedung (Valuta:IDR)
 * @apiBody {number(19)}    	dataNIB.data_proyek.mesin_peralatan	    Nilai Mesin Peralatan (Valuta:IDR)
 * @apiBody {number(19)}    	dataNIB.data_proyek.mesin_peralatan_usd	    Nilai Mesin Peralatan dalam USD
 * @apiBody {number(19)}    	dataNIB.data_proyek.investasi_lain	    Investasi Lainnya
 * @apiBody {number(19)}    	dataNIB.data_proyek.sub_jumlah	    Jumlah Asset (Valuta:IDR)
 * @apiBody {number(19)}    	dataNIB.data_proyek.modal_kerja	    Nilai Modal Kerja (Valuta:IDR)
 * @apiBody {number(19)}    	dataNIB.data_proyek.jumlah_investasi	    Nilai Jumlah Investasi (Valuta:IDR)
 * @apiBody {string(10)}    	dataNIB.data_proyek.tanggal_kurs	    Tanggal Kurs (format date : YYYY-MM-DD)
 * @apiBody {number(19)}    	dataNIB.data_proyek.nilai_kurs	    Nilai Kurs
 * @apiBody {number(11)}    	dataNIB.data_proyek.kd_kawasan	    Kode Kawasan (* Lihat Lampiran 30)
 * @apiBody {string(1)}    	dataNIB.data_proyek.jawab_lokasi_b	    kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point B
 * @apiBody {string(1)}    	dataNIB.data_proyek.jawab_lokasi_c	    kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point C
 * @apiBody {string(1)}    	dataNIB.data_proyek.jawab_lokasi_d	    kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point D
 * @apiBody {string(1)}    	dataNIB.data_proyek.jawab_lokasi_e	    kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point E
 * @apiBody {string(1)}    	dataNIB.data_proyek.jawab_lokasi_f	    kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point F
 * @apiBody {string(1)}    	dataNIB.data_proyek.jawab_lokasi_g	    kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal33 Ayat 1 Point G
 * @apiBody {string(1)}    	dataNIB.data_proyek.flag_perluasan	    Proyek Merupakan Perluasan/Pengemb angan Usaha Atau Bukan (Value : Y = Proses Perluasan/Pengemb angan Usaha, N = Bukan Proses Perluasan/Pengemb angan Usaha)
 * @apiBody {string(1)}    	dataNIB.data_proyek.flag_cabang	    Proyek Sebagai Kantor Cabang Atau Bukan (Value : Y = Sebagai Kantor Cabang, N = Bukan Sebagai Kantor Cabang)
 * @apiBody {string(15)}    	dataNIB.data_proyek.npwp_cabang	    NPWP Kantor Cabang
 * @apiBody {string(255)}    	dataNIB.data_proyek.nama_cabang	    Nama Kantor Cabang / Proyek
 * @apiBody {string(2)}    	dataNIB.data_proyek.jenis_identitas_pj	    Jenis Identitas Penanggung Jawab Proyek (* Lihat Lampiran 4)
 * @apiBody {string(16)}    	dataNIB.data_proyek.no_identitas_pj	    No Identitas Penanggung Jawab Proyek
 * @apiBody {string(100)}    	dataNIB.data_proyek.nama_pj	    Nama Penanggung Jawab Proyek
 * @apiBody {string(2)}    	dataNIB.data_proyek.status_proyek	    Status Proyek(* Lihat Lampiran 22)
 * @apiBody {string(2)}    	dataNIB.data_proyek.jenis_proyek	    Jenis Proyek (* Lihat Lampiran 26)
 * @apiBody {string(255)}    	dataNIB.data_proyek.nama_kegiatan	    Nama Proyek / Kegiatan Proyek, Untuk Perseorangan Digunakan Untuk Mencatat Nama Dagangannya Misal (UD. Percobaan Jaya)
 * @apiBody {string(1)}    	dataNIB.data_proyek.flag_merger	    Flag Proyek Hasil Merger atau Bukan (Y : Hasil Merger, N: Bukan Hasil Merger)
 * @apiBody {string(15)}    	dataNIB.data_proyek.npwp_perseroan_merger	    NPWP Perusahaan Merging
 * @apiBody {string(255)}    	dataNIB.data_proyek.nama_perseroan_merger	    Nama Perusahaan Merging
 * @apiBody {string(10)}    	dataNIB.data_proyek.skala_usaha	    Skala Usaha Perusahaan
 * @apiBody {string(5)}    	dataNIB.data_proyek.skala_resiko	    Skala Resiko Perusahaan
 * @apiBody {string(255)}    	dataNIB.data_proyek.deskripsi_kegiatan	    Deskripsi kegiatan
 * @apiBody {string(1)}      dataNIB.data_proyek.satu_lini         Keterangan Proyek Satu Lini(Y : Proyek Satu Lini , N : Bukan Proyek Satu Lini)
 * @apiBody {Object[]}    	dataNIB.data_proyek.data_lokasi_proyek	    data_lokasi_proyek
 * @apiBody {string(25)}    	dataNIB.data_proyek.data_lokasi_proyek.id_proyek_lokasi	    id_proyek_lokasi
 * @apiBody {string(10)}    	dataNIB.data_proyek.data_lokasi_proyek.proyek_daerah_id	    Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(3)}    	dataNIB.data_proyek.data_lokasi_proyek.kd_kawasan	    Kode Kawasan (* Lihat Lampiran di https://oss.go.id/ oss/#home/portal/lstKawasan)
 * @apiBody {string(65535)}    	dataNIB.data_proyek.data_lokasi_proyek.alamat_usaha	    Alamat Kegiatan Proyek / Usaha
 * @apiBody {string(6)}    	dataNIB.data_proyek.data_lokasi_proyek.id_kegiatan	    Id Kegiatan Usaha Berdasarkan RDTR Digital
 * @apiBody {string(255)}    	dataNIB.data_proyek.data_lokasi_proyek.response_kegiatan	    Response Kegiatan Usaha Berdasarkan Validasi Kegiatan RDTR Digital
 * @apiBody {string(2)}    	dataNIB.data_proyek.data_lokasi_proyek.jenis_kawasan	    Jenis Kawasan (* Lihat Lampiran 16)
 * @apiBody {string(2)}    	dataNIB.data_proyek.data_lokasi_proyek.jenis_lokasi	    Jenis Lokasi Lintas Administratif atau Tidak (01 : Lintas Administratif, 02 : Tidak Lintas Administratif)
 * @apiBody {string(2)}    	dataNIB.data_proyek.data_lokasi_proyek.status_lokasi	    Status Lokasi(* Lihat Lampiran 25)
 * @apiBody {Object[]}    	dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek	    data_lokasi_proyek
 * @apiBody {string(11)}    	dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.serial	    Serial Koordinat
 * @apiBody {string(255)}    	dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.lat_lng	    Koordinat Latitude & Longitude
 * @apiBody {Object[]}    	dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek	    data_posisi_proyek
 * @apiBody {string(25)}    	dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_posisi	    id_proyek_posisi
 * @apiBody {string(25)}    	dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_lokasi	    id_proyek_lokasi
 * @apiBody {string(2)}    	dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.posisi_lokasi	    posisi_lokasi
 * @apiBody {Object[]}    	dataNIB.data_proyek.data_proyek_produk	    data_proyek_produk
 * @apiBody {string(25)}    	dataNIB.data_proyek.data_proyek_produk.id_produk	    ID / Kode Produk
 * @apiBody {string(25)}    	dataNIB.data_proyek.data_proyek_produk.id_proyek	    ID / Kode Proyek
 * @apiBody {number(7)}    	dataNIB.data_proyek.data_proyek_produk.kbli	    Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)
 * @apiBody {number(10)}    	dataNIB.data_proyek.data_proyek_produk.id_bidang_usaha	    ID Bidang Usaha Berdasarkan Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)
 * @apiBody {string(1024)}    	dataNIB.data_proyek.data_proyek_produk.jenis_produksi	    Rencana Produksi Yang Dihasilkan
 * @apiBody {number(20.2)}    	dataNIB.data_proyek.data_proyek_produk.kapasitas	    Kapasitas produksi suatu produk
 * @apiBody {string(100)}    	dataNIB.data_proyek.data_proyek_produk.satuan	    Satuan Dari Kapasitas Produksi
 * @apiBody {string(100)}    	dataNIB.data_proyek.data_proyek_produk.merk_dagang	    Merk Dagang
 * @apiBody {string(100)}    	dataNIB.data_proyek.data_proyek_produk.pemegang_haki	    Pemegang Hak Cipta
 * @apiBody {string(100)}    	dataNIB.data_proyek.data_proyek_produk.pemegang_paten	    Pemegang Hak Paten
 * @apiBody {string(20)}    	dataNIB.data_proyek.data_proyek_produk.pi_nomor	    Nomor Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)
 * @apiBody {string(10)}    	dataNIB.data_proyek.data_proyek_produk.pi_tanggal	    Tanggal Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC) format date : YYYY- MM-DD
 * @apiBody {string(16)}    	dataNIB.data_proyek.data_proyek_produk.pi_npwp	    NPWP Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)
 * @apiBody {string(9)}    	dataNIB.data_proyek.data_proyek_produk.id_kbli_ta	    Penanda bahwa cakupan produk untuk kebutuhan tax allowance
 * @apiBody {number(3.2)}    	dataNIB.data_proyek.data_proyek_produk.tkdn	    Tingkat Kandungan Dalam Negeri
 * @apiBody {string(1){1}} dataNIB.data_proyek.data_proyek_produk.flag_memiliki_halal Flag Memilki Halal
 * @apiBody {string(255){255}} dataNIB.data_proyek.data_proyek_produk.nomor_sertifikat_halal Nomor Sertifikat Halal
 * @apiBody {string(10){10}} dataNIB.data_proyek.data_proyek_produk.masa_berlaku_sertifikat_halal Masa Berlaku Sertifikat Halal
 * @apiBody {string(1){1}} dataNIB.data_proyek.data_proyek_produk.flag_memiliki_sni Flag Produk Memilki SNI
 * @apiBody {string(255){255}} dataNIB.data_proyek.data_proyek_produk.nomor_sertifikat_sni Nomor Sertifikat Standar Nasional Indonesia (SNI)
 * @apiBody {string(10){10}} dataNIB.data_proyek.data_proyek_produk.masa_berlaku_sertifikat_sni Masa Berlaku Sertifikat SNI
 * @apiBody {string(1){1}} dataNIB.data_proyek.data_proyek_produk.flag_self_declare Flag Self Declare
 * @apiBody {string(2){2}} dataNIB.data_proyek.data_proyek_produk.tipe_cakupan Tipe Cakupan
 * @apiBody {Object[]}    	dataNIB.data_dni	    data_dni Berulang (N) Rows
 * @apiBody {string(10)}    	dataNIB.data_dni.kd_dni	    Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)
 * @apiBody {Object[]}    	dataNIB.data_checklist	    data_checklist
 * @apiBody {string(25)}    	dataNIB.data_checklist.id_produk	    id_produk
 * @apiBody {string(25)}    	dataNIB.data_checklist.id_proyek	    id_proyek
 * @apiBody {string(25)}    	dataNIB.data_checklist.id_izin	    Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {string(3)}    	dataNIB.data_checklist.jenis_izin	    Jenis Perizinan (* Lihat Lampiran 27)
 * @apiBody {string(13)}    	dataNIB.data_checklist.kd_izin	    Kode Izin Sistem K/L/D (* service getDataReferensi kode :8)
 * @apiBody {string(10)}    	dataNIB.data_checklist.kd_daerah	    Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri -  Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(255)}    	dataNIB.data_checklist.nama_izin	    nama_izin
 * @apiBody {string(100)}    	dataNIB.data_checklist.instansi	    Nama instansi
 * @apiBody {number(19)}    	dataNIB.data_checklist.id_bidang_spesifik	    ID Bidang Spesifik
 * @apiBody {string(65535)}    	dataNIB.data_checklist.bidang_spesifik	    Uraian Bidang Spesifik
 * @apiBody {number(19)}    	dataNIB.data_checklist.id_kewenangan	    ID Kewenangan
 * @apiBody {string(255)}    	dataNIB.data_checklist.parameter_kewenangan	    Parameter Kewenangan Izin
 * @apiBody {string(2)}    	dataNIB.data_checklist.kewenangan	    Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)
 * @apiBody {string(1)}    	dataNIB.data_checklist.flag_checklist	    Flag Checklist Komitmen (* Lihat Lampiran 28)
 * @apiBody {string(1)}    	dataNIB.data_checklist.flag_transaksional	    Flag : Y/N, Flag Izin Komersial/Operasio nal Diajukan Transaksional (Bisa Mengajukan Berulang)
 * @apiBody {string(1)}    	dataNIB.data_checklist.flag_perpanjangan	    Flag : Y/N, Flag Bahwa Izin Usaha ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS
 * @apiBody {number(5){5}} dataNIB.data_checklist.kbli_konversi Kode KBLI
 * @apiBody {string(150)}    	dataNIB.data_checklist.no_izin	    Nomor Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan
 * @apiBody {string(10)}    	dataNIB.data_checklist.tgl_izin	    Tanggal Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan (* Format:YYYY-MM- DD)
 * @apiBody {string(65535)}    	dataNIB.data_checklist.file_izin	    Attachment File Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan Dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)
 * @apiBody {string(15)}    	dataNIB.data_checklist.kd_dokumen	    Kode izin lingkungan (hanya untuk izin lingkungan)
 * @apiBody {string(255)}    	dataNIB.data_checklist.nm_dokumen	    Nama dokumen lingkungan (Hanya untuk izin lingkungan)
 * @apiBody {number(5)}    	dataNIB.data_checklist.kbli_konversi	    KBLI 2020 hasil konversi dari KBLI 2017 (jika ada)
 * @apiBody {Object[]}    	dataNIB.data_checklist.data_persyaratan	    data_persyaratan
 * @apiBody {string(25)}    	dataNIB.data_checklist.data_persyaratan.id_syarat	    Id / Kode Persyaratan
 * @apiBody {string(50)}    	dataNIB.data_checklist.data_persyaratan.no_dokumen	    Nomor Dokumen Persyaratan
 * @apiBody {string(8)}    	dataNIB.data_checklist.data_persyaratan.tgl_dokumen	    Tanggal Dokumen Persyaratan (format date : YYYY-MM- DD)
 * @apiBody {string(65535)}    	dataNIB.data_checklist.data_persyaratan.file_dokumen	    Attachment File Izin dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)
 * @apiBody {string(255)}    	dataNIB.data_checklist.data_persyaratan.keterangan	    Keterangan Dokumen Persyaratan
 * @apiBody {Object[]} [dataNIB.data_checklist.data_produk_halal] Berulang (N) Rows
 * @apiBody {string(30){30}} [dataNIB.data_checklist.data_produk_halal.id_pengajuan_sertifikat_halal]
 * @apiBody {string(225){225}} [dataNIB.data_checklist.data_produk_halal.uraian_jenis_produk]
 * @apiBody {string(10){10}} [dataNIB.data_checklist.data_produk_halal.kode_klasifikasi_produk]
 * @apiBody {string(1){1}} [dataNIB.data_checklist.data_produk_halal.flag_self_declare]
 * @apiBody {Object[]} [dataNIB.data_checklist.data_produk_halal.list_produk] Berulang (N) Rows
 * @apiBody {number(9){9}} [dataNIB.data_checklist.data_produk_halal.list_produk.id_cakupan_produk]
 * @apiBody {string(65535){65535}} [dataNIB.data_checklist.data_produk_halal.list_produk.uraian_produk]
 * @apiBody {number(5){5}} [dataNIB.data_checklist.data_produk_halal.list_produk.kbli]
 * @apiBody {string(30){30}} [dataNIB.data_checklist.data_produk_halal.list_produk.id_proyek]
 * @apiBody {string(30){30}} [dataNIB.data_checklist.data_produk_halal.list_produk.id_produk]
 * @apiBody {string(30){30}} [dataNIB.data_checklist.data_produk_halal.list_produk.id_pengajuan_sertifikat_halal]
 * @apiBody {string(2)}    	dataNIB.jenis_id_user_proses	    Kode Jenis Identitas (* Lihat Lampiran 4)
 * @apiBody {string(25)}    	dataNIB.no_id_user_proses	    No Identitas Pemroses NIB
 * @apiBody {string(100)}    	dataNIB.nama_user_proses	    Nama User Pemroses NIB
 * @apiBody {string(50)}    	dataNIB.email_user_proses	    Email User Pemroses NIB
 * @apiBody {string(25)}    	dataNIB.hp_user_proses	    No HP Pemroses NIB
 * @apiBody {string(255)}    	dataNIB.alamat_user_proses	    Alamat Pemroses NIB
 * @apiBody {string(1)}    	dataNIB.jns_kelamin_user_proses	    Jenis Kelamin Pemroses NIB (L : Laki-Laki, P : Perempuan)
 * @apiBody {string(100)}    	dataNIB.tempat_lahir_user_proses	    Tempat Lahir Pemroses NIB
 * @apiBody {string(10)}    	dataNIB.tgl_lahir_user_proses	    Tanggal Lahir User Pemroses (format date : YYYY-MM- DD)
 * @apiBody {string(10)}    	dataNIB.daerah_id_user_proses	    ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(10)}    	dataNIB.rt_rw_user_proses	    RT RW Pemroses NIB
 * @apiBody {string(50)}    	dataNIB.agama_user_proses	    Agama Pemroses NIB
 * @apiBody {string(50)}    	dataNIB.status_perkawinan_user_proses	    Status Perkawinan Pemroses NIB
 * @apiBody {string(50)}    	dataNIB.pekerjaan_user_proses	    Pekerjaan Pemroses NIB
 * @apiBody {string(2)}    	dataNIB.status_nib	    Status Penerbitan NIB (* Lihat Lampiran 14)
 * @apiBody {string(1)}    	dataNIB.tipe_dokumen 	    Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan) 

 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *       {
 *       "dataNIB": {
 *         "nib": "",
 *         "tgl_pengajuan_nib": "",
 *         "tgl_terbit_nib": "",
 *         "tgl_perubahan_nib": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "jenis_pelaku_usaha": "",
 *         "no_npp": "",
 *         "no_va": "",
 *         "no_wlkp": "",
 *         "flag_perusahaan": "",
 *         "flag_ekspor": "",
 *         "flag_impor": "",
 *         "jenis_api": "",
 *         "gabung_negara": "",
 *         "negara_pma_dominan": "",
 *         "total_pma": "",
 *         "nilai_pma_dominan": "",
 *         "nilai_pmdn": "",
 *         "persen_pma": "",
 *         "persen_pmdn": "",
 *         "kd_kawasan": "",
 *         "jenis_kawasan": "",
 *         "versi_pia": "",
 *         "jangka_waktu": "",
 *         "status_badan_hukum": "",
 *         "status_penanaman_modal": "",
 *         "npwp_perseroan": "",
 *         "nama_perseroan": "",
 *         "nama_singkatan": "",
 *         "jenis_perseroan": "",
 *         "status_perseroan": "",
 *         "alamat_perseroan": "",
 *         "rt_rw_perseroan": "",
 *         "kelurahan_perseroan": "",
 *         "perseroan_daerah_id": "",
 *         "kode_pos_perseroan": "",
 *         "nomor_telpon_perseroan": "",
 *         "email_perusahaan": "",
 *         "dalam_bentuk_uang": "",
 *         "dalam_bentuk_lain": "",
 *         "total_modal_dasar": "",
 *         "total_modal_ditempatkan": "",
 *         "flag_umk": "",
 *         "flag_perubahan_data_teknis": "",
 *         "skala_usaha": "",
 *         "jenis_perubahan_terakhir": "",
 *         "pemegang_saham": [
 *           {
 *             "jenis_pemegang_saham": "",
 *             "flag_asing": "",
 *             "total_modal_pemegang": "",
 *             "jabatan_pemegang_saham": "",
 *             "nama_pemegang_saham": "",
 *             "jns_identitas_pemegang_saham": "",
 *             "no_identitas_pemegang_saham": "",
 *             "valid_identitas_pemegang_saham": "",
 *             "negara_asal_pemegang_saham": "",
 *             "pengendali_pemegang_saham": "",
 *             "npwp_pemegang_saham": "",
 *             "alamat_pemegang_saham": "",
 *             "fax_pemegang_saham": "",
 *             "email_pemegang_saham": "",
 *             "flag_pajak_pemegang_saham": "",
 *             "ket_pajak_pemegang_saham": ""
 *           }
 *         ],
 *         "penanggung_jwb": [
 *           {
 *             "flag_asing": "",
 *             "jns_identitas_penanggung_jwb": "",
 *             "no_identitas_penanggung_jwb": "",
 *             "nama_penanggung_jwb": "",
 *             "jabatan_penanggung_jwb": " ",
 *             "kebangsaan_penanggung_jwb": "",
 *             "negara_asal_penanggung_jwb": "",
 *             "npwp_penanggung_jwb": "",
 *             "alamat_penanggung_jwb": "",
 *             "jalan_penanggung_jwb": "",
 *             "blok_penanggung_jwb": "",
 *             "no_penanggung_jwb": "",
 *             "rt_rw_penanggung_jwb": "",
 *             "kelurahan_penanggung_jwb": "",
 *             "daerah_id_penanggung_jwb": "",
 *             "kode_pos_penanggung_jwb": "",
 *             "no_telp_penanggung_jwb": "",
 *             "no_hp_penanggung_jwb": "",
 *             "no_fax_penanggung_jwb": "",
 *             "email_penanggung_jwb": "",
 *             "flag_pajak_penanggung_jwb": "",
 *             "ket_pajak_penanggung_jwb": ""
 *           }
 *         ],
 *         "no_pengesahan": "",
 *         "tgl_pengesahan": "",
 *         "no_akta_lama": "",
 *         "tgl_akta_lama": "",
 *         "no_pengesahan_lama": "",
 *         "tgl_pengesahan_lama": "",
 *         "legalitas": [
 *           {
 *             "jenis_legal": "",
 *             "no_legal": "",
 *             "tgl_legal": "",
 *             "alamat_notaris": "",
 *             "nama_notaris": "",
 *             "telepon_notaris": ""
 *           }
 *         ],
 *         "data_rptka": {
 *           "jenis_rptka": "",
 *           "no_rptka": "",
 *           "rptka_awal": "",
 *           "rptka_akhir": "",
 *           "rptka_gaji": "",
 *           "jumlah_tka_rptka": "",
 *           "jangka_penggunaan_waktu": "",
 *           "jangka_waktu_permohonan_rptka": "",
 *           "rptka_jabatan": [
 *             {
 *               "id_jabatan": "",
 *               "jabatan": "",
 *               "jumlah": "",
 *               "tgl_mulai": "",
 *               "tgl_selesai": "",
 *               "keterangan": "",
 *               "rptka_tki_pendamping": [
 *                 {
 *                   "id_jabatan": "",
 *                   "id_pendamping": "",
 *                   "nama": "",
 *                   "nik": "",
 *                   "jabatan": "",
 *                   "hp": "",
 *                   "email": "",
 *                   "foto": "",
 *                   "pendidikan_min": "",
 *                   "sertifikat": "",
 *                   "pengalaman_kerja": "",
 *                   "keterangan": ""
 *                 }
 *               ]
 *             }
 *           ],
 *           "rptka_negara": [
 *             {
 *               "id_negara": "",
 *               "jumlah": ""
 *             }
 *           ],
 *           "rptka_lokasi": [
 *             {
 *               "lokasi_id": "",
 *               "jumlah": ""
 *             }
 *           ]
 *         },
 *         "data_proyek": [
 *           {
 *             "id_proyek": "",
 *             "nomor_proyek": "",
 *             "uraian_usaha": "",
 *             "jumlah_tki_l": "",
 *             "jumlah_tki_p": "",
 *             "jumlah_tka_l": "",
 *             "jumlah_tka_p": "",
 *             "kbli": "",
 *             "sektor": "",
 *             "memiliki_menguasai": "",
 *             "jenis_lokasi": "",
 *             "status_tanah": "",
 *             "luas_tanah": "",
 *             "satuan_luas_tanah": "",
 *             "pembelian_pematang_tanah": "",
 *             "bangunan_gedung": "",
 *             "mesin_peralatan": "",
 *             "mesin_peralatan_usd": "",
 *             "investasi_lain": "",
 *             "sub_jumlah": "",
 *             "modal_kerja": "",
 *             "jumlah_investasi": "",
 *             "tanggal_kurs": "",
 *             "nilai_kurs": "",
 *             "kd_kawasan": "",
 *             "jawab_lokasi_b": "",
 *             "jawab_lokasi_c": "",
 *             "jawab_lokasi_d": "",
 *             "jawab_lokasi_e": "",
 *             "jawab_lokasi_f": "",
 *             "jawab_lokasi_g": "",
 *             "flag_perluasan": "",
 *             "flag_cabang": "",
 *             "npwp_cabang": "",
 *             "nama_cabang": "",
 *             "jenis_identitas_pj": "",
 *             "no_identitas_pj": "",
 *             "nama_pj": "",
 *             "status_proyek": "",
 *             "jenis_proyek": "",
 *             "nama_kegiatan": "",
 *             "flag_merger": "",
 *             "npwp_perseroan_merger": "",
 *             "nama_perseroan_merger": "",
 *             "skala_usaha": "",
 *             "skala_resiko": "",
 *             "deskripsi_kegiatan": "",
 *             "satu_lini": "",
 *             "data_lokasi_proyek": [
 *               {
 *                 "id_proyek_lokasi": "",
 *                 "proyek_daerah_id": "",
 *                 "kd_kawasan": "",
 *                 "alamat_usaha": "",
 *                 "id_kegiatan": "",
 *                 "response_kegiatan": "",
 *                 "jenis_kawasan": "",
 *                 "jenis_lokasi": "",
 *                 "status_lokasi": "",
 *                 "data_lokasi_proyek": [
 *                   {
 *                     "serial": "",
 *                     "lat_lng": ""
 *                   }
 *                 ],
 *                 "data_posisi_proyek": [
 *                   {
 *                     "id_proyek_posisi": "",
 *                     "id_proyek_lokasi": "",
 *                     "posisi_lokasi": ""
 *                   }
 *                 ]
 *               }
 *             ],
 *             "data_proyek_produk": [
 *               {
 *                 "id_produk": "",
 *                 "id_proyek": "",
 *                 "kbli": "",
 *                 "id_bidang_usaha": "",
 *                 "jenis_produksi": "",
 *                 "kapasitas": "",
 *                 "satuan": "",
 *                 "merk_dagang": "",
 *                 "pemegang_haki": "",
 *                 "pemegang_paten": "",
 *                 "pi_nomor": "",
 *                 "pi_tanggal": "",
 *                 "pi_npwp": "",
 *                 "id_kbli_ta": "",
 *                 "tkdn": "",
 *                 "flag_memiliki_halal": "",
 *                 "nomor_sertifikat_halal": "",
 *                 "masa_berlaku_sertifikat_halal": "",
 *                 "flag_memiliki_sni": "",
 *                 "nomor_sni": "",
 *                 "masa_berlaku_sni": "",
 *                 "flag_self_declare": "",
 *                 "tipe_cakupan": ""
 *               }
 *             ]
 *           }
 *         ],
 *         "data_dni": [
 *           {
 *             "kd_dni": ""
 *           }
 *         ],
 *         "data_checklist": [
 *           {
 *             "id_produk": "",
 *             "id_proyek": "",
 *             "id_izin": "",
 *             "jenis_izin": "",
 *             "kd_izin": "",
 *             "kd_daerah": "",
 *             "nama_izin": "",
 *             "instansi": "",
 *             "id_bidang_spesifik": "",
 *             "bidang_spesifik": "",
 *             "id_kewenangan": "",
 *             "parameter_kewenangan": "",
 *             "kewenangan": "",
 *             "flag_checklist": "",
 *             "flag_transaksional": "",
 *             "flag_perpanjangan": "",
 *             "kbli_konversi": "",
 *             "no_izin": "",
 *             "tgl_izin": "",
 *             "file_izin": "",
 *             "kd_dokumen": "",
 *             "nm_dokumen": "",
 *             "data_persyaratan": [
 *               {
 *                 "id_syarat": "",
 *                 "no_dokumen": "",
 *                 "tgl_dokumen": "",
 *                 "file_dokumen": "",
 *                 "keterangan": ""
 *               }
 *             ],
 *             "data_produk_halal" : {
 *    						"id_pengajuan_sertifikat_halal" : "",
 *					    	"uraian_jenis_produk" : "",
 *					    	"kode_klasifikasi_produk" : "",
 *					    	"flag_self_declare" : "",
 *					     	"list_produk" : [
 *					        	{
 *				      				"id_cakupan_produk" : "",
 *				      				"uraian_produk" : "",
 *				      				"kbli" : "",
 *				      				"id_proyek" : "",
 *				      				"id_produk" : "",
 *					      			"id_pengajuan_sertifikat_halal_detail" : ""
 *				        		}
 *				    		]
 *			  		}
 *           }
 *         ],
 *         "jenis_id_user_proses": "",
 *         "no_id_user_proses": "",
 *         "nama_user_proses": "",
 *         "email_user_proses": "",
 *         "hp_user_proses": "",
 *         "alamat_user_proses": "",
 *         "jns_kelamin_user_proses": "",
 *         "tempat_lahir_user_proses": "",
 *         "tgl_lahir_user_proses": "",
 *         "daerah_id_user_proses": "",
 *         "rt_rw_user_proses": "",
 *         "agama_user_proses": "",
 *         "status_perkawinan_user_proses": "",
 *         "pekerjaan_user_proses": "",
 *         "status_nib": "",
 *         "tipe_dokumen ": ""
 *       }
 *     }
 * 
 * @apiSuccess (200) {Object} responreceiveNIB Response receive NIB
 * @apiSuccess (200) {String(1)} responreceiveNIB.status Status (1: TRUE; 2: FALSE)
 * @apiSuccess (200) {String(255)} responreceiveNIB.keterangan Keterangan Respon
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responreceiveNIB": {
 *     		 "status": "1",
 *     		 "keterangan": "Berhasil menyimpan data"
 *     	 }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responreceiveNIB": {
 *     		 "status": "2",
 *     		 "keterangan": "Gagal menyimpan data"
 *     	 }
 *     }
 */

/**
 * @api {post} /receiveLicense Receive License
 * @apiVersion 4.3.19
 * @apiDescription Pengiriman Data Izin Final dari Sistem K/L/D ke Sistem OSS
 * @apiName receiveLicense
 * @apiGroup License
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveLicense' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *         "IZINFINAL": {
 *             "nib": "812020773XXXX",
 *             "id_proyek": "R-20211214114021393XXXX",
 *             "oss_id": "P02-20191216211238301XXXX",
 *             "id_izin": "I-20211118160441053XXXX",
 *             "kd_izin": "033000000XXX",
 *             "kd_daerah": "3201000000",
 *             "nomor_izin": "",
 *             "tgl_terbit_izin": "YYYY-MM-DD",
 *             "tgl_berlaku_izin": "YYYY-MM-DD",
 *             "nama_ttd": "",
 *             "nip_ttd": "",
 *             "jabatan_ttd": "",
 *             "status_izin": "45",
 *             "file_izin": "",
 *             "keterangan": "",
 *             "file_lampiran": "",
 *             "nomenklatur_nomor_izin": "",
 *             "bln_berlaku_izin": 6,
 *             "thn_berlaku_izin": 1,
 *             "jenis_perizinan": "02",
 *             "data_teknis": {
 *                "id_komitmen": ""
 *                "luas_bangunan_disetujui": "",
 *                "jumlah_lantai_disetujui": "",
 *                "tinggi_bangunan_disetujui": "",
 *                "luas_basement_disetujui": "",
 *                "jumlah_lantai_basement_disetujui": ""
 *             }
 *         }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": "{{user_key}}"
 *     }
 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *       "IZINFINAL": {
 *         "nib": "812020773XXXX",
 *         "id_proyek": "R-20211214114021393XXXX",
 *         "oss_id": "P02-20191216211238301XXXX",
 *         "id_izin": "I-20211118160441053XXXX",
 *         "kd_izin": "033000000XXX",
 *         "kd_daerah": "3201000000",
 *         "nomor_izin": "",
 *         "tgl_terbit_izin": "YYYY-MM-DD",
 *         "tgl_berlaku_izin": "YYYY-MM-DD",
 *         "nama_ttd": "",
 *         "nip_ttd": "",
 *         "jabatan_ttd": "",
 *         "status_izin": "45",
 *         "file_izin": "",
 *         "keterangan": "",
 *         "file_lampiran": "",
 *         "nomenklatur_nomor_izin": "",
 *         "bln_berlaku_izin": 6,
 *         "thn_berlaku_izin": 1,
 *         "jenis_perizinan": "02",
 *         "data_teknis": {
 *            "id_komitmen": ""
 *            "luas_bangunan_disetujui": "",
 *            "jumlah_lantai_disetujui": "",
 *            "tinggi_bangunan_disetujui": "",
 *            "luas_basement_disetujui": "",
 *            "jumlah_lantai_basement_disetujui": ""
 *         }
 *       }
 *     }
 * @apiBody {Object}	    IZINFINAL	                                IZINFINAL
 * @apiBody {String(13){13}}    	IZINFINAL.nib	                            Nomor Induk Berusaha
 * @apiBody {String(25){25}}    	IZINFINAL.id_proyek	                        Id Proyek
 * @apiBody {String(25){25}}    	IZINFINAL.oss_id	                        Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha
 * @apiBody {String(25){25}}    	IZINFINAL.id_izin	                        Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {String(12){12}}    	IZINFINAL.kd_izin	                        Kode Izin Sistem K/L/D (* Lihat Lampiran 8)
 * @apiBody {String(10){10}}    	IZINFINAL.kd_daerah	                        Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {String(50){50}}    	IZINFINAL.nomor_izin	                    Nomor Izin Final
 * @apiBody {String(10){10}}    	IZINFINAL.tgl_terbit_izin	                Tanggal Izin Final (format date : YYYY-MM-DD)
 * @apiBody {String(10){10}}    	IZINFINAL.tgl_berlaku_izin	                Tanggal Berlaku Izin Final (format date : YYYY-MM-DD)
 * @apiBody {String(50){50}}    	IZINFINAL.nama_ttd	                        Nama Penandatangan Izin
 * @apiBody {String(25){25}}    	IZINFINAL.nip_ttd	                        Nip Penandatangan Izin
 * @apiBody {String(150){150}}    	IZINFINAL.jabatan_ttd	                    Jabatan Penandatangan Izin
 * @apiBody {String(2){2}}    	IZINFINAL.status_izin	                    Status Izin di Sistem OSS (* Lihat Lampiran 10)
 * @apiBody {String(65535){65535}}    	[IZINFINAL.file_izin]	                        Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB) 
 * @apiBody {String(65535){65535}}    	[IZINFINAL.keterangan]	                    Keterangan Status Izin
 * @apiBody {String(65535){65535}}    	[IZINFINAL.file_lampiran]	                    Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB) 
 * @apiBody {String(255){255}}    	[IZINFINAL.nomenklatur_nomor_izin]	        Nomenklatur nomor izin
 * @apiBody {Number(5){5}}    	[IZINFINAL.bln_berlaku_izin]	                angka waktu berlaku izin dalam bulan
 * @apiBody {Number(5){5}}    	[IZINFINAL.thn_berlaku_izin]	                angka waktu berlaku izin dalam tahun
 * @apiBody {String(3){3}} [IZINFINAL.jenis_perizinan] Jenis Izin (* Lihat Lampiran 27)
 * @apiBody {Object} [IZINFINAL.data_teknis] data teknis
 * @apiBody {String(25){25}} [IZINFINAL.data_teknis.id_komitmen] ID komitmen data teknis
 * @apiBody {String(25){25}} [IZINFINAL.data_teknis.luas_bangunan_disetujui] luas bangungan yang disetujui
 * @apiBody {String(2){2}} [IZINFINAL.data_teknis.jumlah_lantai_disetujui] jumlah lantai yang disetujui
 * @apiBody {String(5){5}} [IZINFINAL.data_teknis.tinggi_bangunan_disetujui] tinggi bangunan disetujui yang disetujui
 * @apiBody {String(25){25}} [IZINFINAL.data_teknis.luas_basement_disetujui] luas basement yang disetujui
 * @apiBody {String(25){25}} [IZINFINAL.data_teknis.jumlah_lantai_basement_disetujui] jumlah basement yang disetujui

 * @apiSuccess (200) {Object} responreceiveLicense                  Response receive license
 * @apiSuccess (200) {Number(3)} responreceiveLicense.kode             Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiSuccess (200) {String(255)} responreceiveLicense.keterangan       Keterangan Respon
 * @apiSuccess (200) {String(30)} responreceiveLicense.nomor_izin       Nomor Izin yang diterbitkan OSS
 * @apiSuccess (200) {String(3){3}} [responreceiveLicense.jenis_perizinan] Jenis Izin <b>(* Lihat Lampiran 27)</b>
 * @apiSuccess (200) {String(65535){65535}} [IZINFINAL.file_lampiran]	Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB) 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responreceiveLicense": {
 *            "kode": 200,
 *            "keterangan": "",
 *            "nomor_izin": "",
 *            "jenis_perizinan": "",
 *            "file_lampiran": "",
 *     	 }
 *     }
 * @apiError (400) {Object} responreceiveLicense Response receive license.
 * @apiError (400) {Number(3){3}} responreceiveLicense.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (400) {String(255)} responreceiveLicense.keterangan Keterangan Respon (Data Parameter Salah)
 * @apiError (401) {Object} responreceiveLicense Response receive license.
 * @apiError (401) {Number(3){3}} responreceiveLicense.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (401) {String(255)} responreceiveLicense.keterangan Keterangan Respon (User Akses Tidak Valid)
 * @apiError (403) {Object} responreceiveLicense Response receive license.
 * @apiError (403) {Number(3){3}} responreceiveLicense.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (403) {String(255)} responreceiveLicense.keterangan Keterangan Respon (Ilegal Inquiry / Akses.)
 * @apiError (404) {Object} responreceiveLicense Response receive license.
 * @apiError (404) {Number(3){3}} responreceiveLicense.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (404) {String(255)} responreceiveLicense.keterangan Keterangan Respon (Data / Service Tidak Ditemukan.)
 * @apiError (405) {Object} responreceiveLicense Response receive license.
 * @apiError (405) {Number(3){3}} responreceiveLicense.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (405) {String(255)} responreceiveLicense.keterangan Keterangan Respon (Akses Service Ditolak)
 * @apiError (500) {Object} responreceiveLicense Response receive license.
 * @apiError (500) {Number(3){3}} responreceiveLicense.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (500) {String(255)} responreceiveLicense.keterangan Keterangan Respon (Proses Payload Data Di Sistem OSS Gagal)
 * @apiError (504) {Object} responreceiveLicense Response receive license.
 * @apiError (504) {Number(3){3}} responreceiveLicense.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (504) {String(255)} responreceiveLicense.keterangan Keterangan Respon (Proses Payload Data Di Sistem OSS Timeout)
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responreceiveLicense": {
 *     		 "kode": 500,
 *     		 "keterangan": "",
 *     	 }
 *     }
 */

/**
 * @api {post} /receiveLicenseStatus Receive License Status
 * @apiVersion 4.3.19
 * @apiDescription Pengiriman Data Status Izin dari Sistem K/L/D ke Sistem OSS
 * @apiGroup License
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveLicenseStatus' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *       "IZINSTATUS": {
 *         "nib": "",
 *         "id_produk": "",
 *         "id_proyek": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_instansi": "",
 *         "kd_status": "",
 *         "tgl_status": "",
 *         "nip_status": "",
 *         "nama_status": "",
 *         "keterangan": "",
 *         "file_lampiran": "abc.pdf",
 *         "persetujuan_form": false,
 *         "data_pnbp": {
 *           "kd_akun": "",
 *           "kd_penerimaan": "",
 *           "kd_billing": "",
 *           "tgl_billing": "",
 *           "tgl_expire": "",
 *           "nominal": "",
 *           "url_dokumen": ""
 *         }
 *       }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object} IZINSTATUS IZINSTATUS
 * @apiBody {String(13)} IZINSTATUS.nib Nomor Induk Berusaha
 * @apiBody {String(25)} IZINSTATUS.id_produk Id Produk
 * @apiBody {String(25)} IZINSTATUS.id_proyek Id Proyek
 * @apiBody {String(25)} IZINSTATUS.oss_id  Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Pengajuan Perizinan
 * @apiBody {String(25)} IZINSTATUS.id_izin Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {String(12)} IZINSTATUS.kd_izin Kode Izin Sistem K/L/D (* Lihat Lampiran 8)
 * @apiBody {String(3)} IZINSTATUS.kd_instansi  Kode Instansi
 * @apiBody {String(2)} IZINSTATUS.kd_status  Kode Status Perizinan (* Lihat Lampiran 10)
 * @apiBody {String(18)} IZINSTATUS.tgl_status  Tanggal Proses Status Izin (format date: YYYY-MM-DD HH:II:SS)
 * @apiBody {String(50)} IZINSTATUS.nip_status  Nip Status Izin
 * @apiBody {String(50)} IZINSTATUS.nama_status Nama Status Izin
 * @apiBody {String(65535)} IZINSTATUS.keterangan keterangan
 * @apiBody {boolean} [IZINSTATUS.persetujuan_form] Form Persetujuan
 * @apiBody {String(65535)} [IZINSTATUS.file_lampiran] File Lampiran
 * @apiBody {Object} [IZINSTATUS.data_pnbp] data_pnbp
 * @apiBody {String(20)} [IZINSTATUS.data_pnbp.kd_akun] Kode Akun simponi
 * @apiBody {String(20)} [IZINSTATUS.data_pnbp.kd_penerimaan] Kode Penerimaan
 * @apiBody {String(50)} [IZINSTATUS.data_pnbp.kd_billing] Kode Billing
 * @apiBody {Date(10)} [IZINSTATUS.data_pnbp.tgl_billing] Tgl terbit billing
 * @apiBody {Date(10)} [IZINSTATUS.data_pnbp.tgl_expire]  Tgl berlaku billing
 * @apiBody {number(20.0)} [IZINSTATUS.data_pnbp.nominal] Nominal PNBP
 * @apiBody {String(255)} [IZINSTATUS.data_pnbp.url_dokumen]  URL Dokumen SPS


 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *       "IZINSTATUS": {
 *         "nib": "",
 *         "id_produk": "",
 *         "id_proyek": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_instansi": "",
 *         "kd_status": "",
 *         "tgl_status": "",
 *         "nip_status": "",
 *         "nama_status": "",
 *         "keterangan": "",
 *         "file_lampiran": "abc.pdf",
 *         "persetujuan_form": false,
 *         "data_pnbp": {
 *           "kd_akun": "",
 *           "kd_penerimaan": "",
 *           "kd_billing": "",
 *           "tgl_billing": "",
 *           "tgl_expire": "",
 *           "nominal": "",
 *           "url_dokumen": ""
 *         }
 *       }
 *     }
 * 
 * @apiSuccess (200) {Object} responreceiveLicenseStatus Response receive License Status
 * @apiSuccess (200) {String(3)} responreceiveLicenseStatus.kode Kode Respon 
 * @apiSuccess (200) {String(255)} responreceiveLicenseStatus.keterangan Keterangan Respon
 * @apiSuccess (200) {Object} responreceiveLicenseStatus.dataNIB object kosong
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *         "responreceiveLicenseStatus": {
 *           "kode": 200,
 *           "keterangan": "Sukses",
 *           "dataNIB": {}
 *         }
 *      }

 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *      {
 *         "responreceiveLicenseStatus": {
 *           "kode": 400,
 *           "keterangan": "Data izin tidak ditemukan",
 *           "dataNIB": {}
 *         }
 *      }
 */

/**
 * @api {post} /checkLicenseStatus Check License Status
 * @apiVersion 4.3.19
 * @apiDescription Pengecekan Data Status Izin dari Sistem K/L/D ke Sistem OSS
 * @apiName checkLicenseStatus
 * @apiGroup License
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/checkLicenseStatus' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *         "CHECKLICENSESTATUS": {
 *             "id_izin": ""
 *         }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object}	    CHECKLICENSESTATUS	            CHECKLICENSESTATUS
 * @apiBody {string(13)}    	CHECKLICENSESTATUS.id_izin	    id_izin

 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *       "CHECKLICENSESTATUS": {
 *         "id_izin": ""
 *       }
 *     }
 * 
 * @apiSuccess (200) {Object}	    responcheckLicenseStatus	                responcheckLicenseStatus
 * @apiSuccess (200) {string(3)}    	responcheckLicenseStatus.kode	            Kode Respon (*Lihat Lampiran 9)
 * @apiSuccess (200) {string(255)}    	responcheckLicenseStatus.keterangan	    Keterangan Respon
 * @apiSuccess (200) {Object}    	responcheckLicenseStatus.dataIZIN	        dataIZIN
 * @apiSuccess (200) {string(13)}    	responcheckLicenseStatus.dataIZIN.nib	    Nomor Induk Berusaha
 * @apiSuccess (200) {string(25)}    	responcheckLicenseStatus.dataIZIN.id_proyek	    ID proyek
 * @apiSuccess (200) {string(25)}    	responcheckLicenseStatus.dataIZIN.id_izin	        Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiSuccess (200) {string(2)}    	responcheckLicenseStatus.dataIZIN.kd_status	    Kode Status Perizinan (* Lihat Lampiran 10)
 * @apiSuccess (200) {string(255)}    	responcheckLicenseStatus.dataIZIN.uraian_status	    Uraian status
 * @apiSuccess (200) {text} responcheckLicenseStatus.dataIZIN.file_lampiran File Lampiran

 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "responcheckStatusLicense": {
 *         "kode": 200,
 *         "keterangan": "Sukses",
 *         "dataIZIN": {
 *           "nib": "123455",
 *           "id_proyek": "123456",
 *           "id_izin": "I-12334",
 *           "kd_status": "58",
 *           "uraian_status": "Izin terbit/SS terverifikasi"
 *           "file_lampiran": ""
 *         }
 *       }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responsecheckStatusLicense": {
 *     		 "kode": 500,
 *     		 "keterangan": "Terjadi kesalahan sistem, hubungi tim teknis OSS",
 *         "dataIZIN": {
 *           "id_izin": ""
 *         }
 *     	 }
 *     }
 */

/**
 * @api {post} /inqueryLicense Inquery License
 * @apiVersion 4.3.19
 * @apiDescription Inquery Data Izin di Sistem OSS
 * @apiName inqueryLicense
 * @apiGroup License
 * @apiExample {curl} Curl Request Example:
 * curl --location 'https://server.digitaltelkom.dev/oss-sandbox/kl/rba/inqueryLicense' \
 * --header 'user_key: {{user_key}}' \
 * --header 'Content-Type: application/json' \
 * --data '{
 *    "INQUERYLICENSE": {
 *        "id_izin": "{{id_izin}}",
 *        "data_persyaratan": TRUE
 *    }
 * }'
 * @apiHeader {string} Content-Type Content Type Request.
 * @apiHeader {string} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "Content-Type": "application/json",
 *      "user_key": "{{user_key}}"
 *    }
 * @apiParamExample {json} RequestBody-Example :
 * HTTP/1.1 200 OK
 * {
 *  "INQUERYLICENSE": {
 *    "id_izin": "{{id_izin}}",
 *    "data_persyaratan": TRUE
 *  }
 * }
 * @apiBody {Object} INQUERYLICENSE Payload Inquery License
 * @apiBody {string(30){30}} INQUERYLICENSE.id_izin Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {string} [INQUERYLICENSE.data_persyaratan] Dapat digunakan menggunakan untuk memanggil url file syarat yang di upload oleh Pelaku Usaha
 * 
 * @apiSuccess (200) {Object} dataLicense Data License
 * @apiSuccess (200) {boolean} dataLicense.success Status Response
 * @apiSuccess (200) {number(3){3}} dataLicense.code Status Response Code <b>(* Lihat Lampiran 9)</b>
 * @apiSuccess (200) {string(100){100}} dataLicense.message Response Message
 * @apiSuccess (200) {Object} dataLicense.data Response Data
 * @apiSuccess (200) {string(25){25}} dataLicense.data.oss_id Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha
 * @apiSuccess (200) {string(25){25}} dataLicense.data.id_izin Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiSuccess (200) {string(12){12}} dataLicense.data.kd_izin Kode Izin Sistem K/L/D <b>(* Lihat Lampiran 8)</b>
 * @apiSuccess (200) {string(10){10}} dataLicense.data.kd_daerah Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )
 * @apiSuccess (200) {string(2){2}} dataLicense.data.kewenangan Kewenangan <br>00: Kewenangan Pusat <br>01: Kewenangan Provinsi <br>02: Kewenangan Kab/Kota
 * @apiSuccess (200) {Object[]} dataLicense.data.data_proyek Data Proyek
 * @apiSuccess (200) {string(25){25}} dataLicense.data.data_proyek.id_proyek Id Proyek
 * @apiSuccess (200) {string(26){26}} dataLicense.data.data_proyek.nomor_proyek Nomor Permohonan Proyek
 * @apiSuccess (200) {string(255){255}} dataLicense.data.data_proyek.uraian_usaha Uraian Usaha Proyek
 * @apiSuccess (200) {number(10){10}} dataLicense.data.data_proyek.jumlah_tki_l Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki
 * @apiSuccess (200) {number(10){10}} dataLicense.data.data_proyek.jumlah_tki_p Jumlah Tenaga Kerja Indonesia (TKI) Perempuan
 * @apiSuccess (200) {number(10){10}} dataLicense.data.data_proyek.jumlah_tka_l Jumlah Tenaga Kerja Asing (TKA) Laki -Laki
 * @apiSuccess (200) {number(10){10}} dataLicense.data.data_proyek.jumlah_tka_p Jumlah Tenaga Kerja Asing (TKA) Perempuan
 * @apiSuccess (200) {number(5){5}} dataLicense.data.data_proyek.kbli Kode KBLI <b>(* Menggunakan Kode KBLI Tahun 2020)</b>
 * @apiSuccess (200) {string(3){3}} dataLicense.data.data_proyek.sektor Sektor Usaha Berdasarkan KBLI <b>(* Lihat Lampiran 20)</b>
 * @apiSuccess (200) {string(1){1}} dataLicense.data.data_proyek.memiliki_menguasai Sudah Memiliki atar Menguasai Lahan <br>(Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)
 * @apiSuccess (200) {string(2){2}} dataLicense.data.data_proyek.jenis_lokasi Lokasi Berada dalam Lintas Administratif <br>(Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)
 * @apiSuccess (200) {string(2){2}} dataLicense.data.data_proyek.status_tanah Status Kepemilikan Tanah <b>(* Lihat Lampiran 5)</b>
 * @apiSuccess (200) {number(10){10}} dataLicense.data.data_proyek.luas_tanah Luas Bidang tanah
 * @apiSuccess (200) {string(2){2}} dataLicense.data.data_proyek.satuan_luas_tanah Satuan Luas Tanah <b>(*Lihat Lampiran 17)</b>
 * @apiSuccess (200) {Object[]} dataLicense.data.data_checklist Data Checklist
 * @apiSuccess (200) {string(25){25}} dataLicense.data.data_checklist.id_produk ID Produk
 * @apiSuccess (200) {string(25){25}} dataLicense.data.data_checklist.id_proyek ID Proyek
 * @apiSuccess (200) {string(25){25}} dataLicense.data.data_checklist.id_izin Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiSuccess (200) {string(3){3}} dataLicense.data.data_checklist.jenis_izin	Jenis Perizinan (* Lihat Lampiran 27)		
 * @apiSuccess (200) {string(13){13}} dataLicense.data.data_checklist.kd_izin	Kode Izin Sistem K/L/D (* service getDataReferensi kode : 8)		
 * @apiSuccess (200) {string(10){10}} dataLicense.data.data_checklist.kd_daerah	Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)		
 * @apiSuccess (200) {string(255){255}} dataLicense.data.data_checklist.nama_izin	Nama Izin		
 * @apiSuccess (200) {string(100){100}} dataLicense.data.data_checklist.instansi	Nama Instansi		
 * @apiSuccess (200) {number(19){19}} dataLicense.data.data_checklist.id_bidang_spesifik	ID Bidang Spesifik	
 * @apiSuccess (200) {number(19){19}} dataLicense.data.data_checklist.id_kewenangan	ID Kewenangan		
 * @apiSuccess (200) {string(255){255}} dataLicense.data.data_checklist.parameter_kewenangan	Parameter Kewenangan Izin	
 * @apiSuccess (200) {string(2){2}} dataLicense.data.data_checklist.kewenangan	00: Kewenangan Pusat; <br>01: Kewenangan Provinsi; <br>02: Kewenangan Kab/Kota	
 * @apiSuccess (200) {string(1){1}} dataLicense.data.data_checklist.flag_checklist	Flag Checklist Komitmen (* Lihat Lampiran 28)			
 * @apiSuccess (200) {string(1){1}} dataLicense.data.data_checklist.flag_transaksional	Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)		
 * @apiSuccess (200) {string(1){1}} dataLicense.data.data_checklist.flag_perpanjangan	Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Zin Usaha Yang Terbit Sebelum OSS		
 * @apiSuccess (200) {string(150){150}} dataLicense.data.data_checklist.no_izin	Nomor Izin	
 * @apiSuccess (200) {string(10){10}} dataLicense.data.data_checklist.tgl_izin	Tanggal Izin (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {Object[]} [dataLicense.data.data_checklist.data_persyaratan] Data Persyaratan
 * @apiSuccess (200) {string(25){25}} [dataLicense.data.data_checklist.data_persyaratan.id_syarat] Nomor syarat OSS
 * @apiSuccess (200) {string(10){10}} [dataLicense.data.data_checklist.data_persyaratan.no_dokumen]  ID dokumen
 * @apiSuccess (200) {string(10){10}} [dataLicense.data.data_checklist.data_persyaratan.tgl_dokumen] Tanggal Dokumen (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(65535)} [dataLicense.data.data_checklist.data_persyaratan.file_dokumen] URL file dokumen 
 * @apiSuccess (200) {string(255){255}} [dataLicense.data.data_checklist.data_persyaratan.keterangan] Keterangan dokumen
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "dataLicense": {
 *       "success": true,
 *       "code": 200,
 *       "message": "Berhasil mendapatkan data izin",
 *       "data": {
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "data_proyek": [
 *           {
 *             "id_proyek": "",
 *             "nomor_proyek": "",
 *             "uraian_usaha": "",
 *             "jumlah_tki_l": 0,
 *             "jumlah_tki_p": 0,
 *             "jumlah_tka_l": 0,
 *             "jumlah_tka_p": 0,
 *             "kbli": "",
 *             "sektor": "",
 *             "memiliki_menguasai": "",
 *             "jenis_lokasi": "",
 *             "status_tanah": "",
 *             "luas_tanah": "",
 *             "satuan_luas_tanah": ""
 *           }
 *         ],
 *         "data_checklist": [
 *           {
 *             "id_produk": "",
 *             "id_proyek": "",
 *             "id_izin": "",
 *             "jenis_izin": "",
 *             "kd_izin": "",
 *             "kd_daerah": "",
 *             "nama_izin": "",
 *             "instansi": "",
 *             "id_bidang_spesifik": "",
 *             "bidang_spesifik": "",
 *             "id_kewenangan": "",
 *             "parameter_kewenangan": "",
 *             "kewenangan": "",
 *             "flag_checklist": "",
 *             "flag_transaksional": "",
 *             "flag_perpanjangan": "",
 *             "no_izin": "",
 *             "tgl_izin": "",
 *             "data_persyaratan": [
 *               {
 *                 "id_syarat": "",
 *                 "no_dokumen": "",
 *                 "tgl_dokumen": "",
 *                 "file_dokumen": "",
 *                 "keterangan": ""
 *               }
 *             ]
 *           }
 *         ]
 *       },
 *       "meta": null
 *     }
 *   }
 * @apiError (400) {Object} dataLicense Response receive license.
 * @apiError (400) {Number(3){3}} dataLicense.code Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (400) {String(255)} dataLicense.message Keterangan Respon (Data Parameter Salah)
 * @apiError (400) {boolean} dataLicense.success Status Response
 * @apiError (400) {Object} dataLicense.data Data Response
 * @apiError (400) {Object} dataLicense.meta Informasi Tambahan Response
 * @apiError (401) {Object} dataLicense Response receive license.
 * @apiError (401) {Number(3){3}} dataLicense.code Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (401) {String(255)} dataLicense.message Keterangan Respon (User Akses Tidak Valid)
 * @apiError (403) {Object} dataLicense Response receive license.
 * @apiError (403) {Number(3){3}} dataLicense.code Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (403) {String(255)} dataLicense.message Keterangan Respon (Ilegal Inquiry / Akses.)
 * @apiError (404) {Object} dataLicense Response receive license.
 * @apiError (404) {Number(3){3}} dataLicense.code Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (404) {String(255)} dataLicense.message Keterangan Respon (Data / Service Tidak Ditemukan.)
 * @apiError (405) {Object} dataLicense Response receive license.
 * @apiError (405) {Number(3){3}} dataLicense.code Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (405) {String(255)} dataLicense.message Keterangan Respon (Akses Service Ditolak)
 * @apiError (500) {Object} dataLicense Response receive license.
 * @apiError (500) {Number(3){3}} dataLicense.code Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (500) {String(255)} dataLicense.message Keterangan Respon (Proses Payload Data Di Sistem OSS Gagal)
 * @apiError (504) {Object} dataLicense Response receive license.
 * @apiError (504) {Number(3){3}} dataLicense.code Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (504) {String(255)} dataLicense.message Keterangan Respon (Proses Payload Data Di Sistem OSS Timeout)
 * @apiErrorExample Error-Response:
 *     {
 *     	 "dataLicense": {
 *     		 "code": 400,
 *     		 "message": "Parameter tidak ditemukan",
 *         "success": false,
 *         "data": null,
 *         "meta": [
 *            {
 *              "message": "INQUERYLICENSE.id_izin is not allowed to be empty",
 *              "field": "id_izin"
 *            }
 *         ]
 *     	 }
 *     }
 */

/**
 * @api {post} /inqueryNIB Inquery NIB
 * @apiVersion 4.3.19
 * @apiDescription Inquery Data Nomor Induk Berusaha (NIB) di Sistem OSS
 * @apiName inqueryNIB
 * @apiGroup NIB
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryNIB' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *         "INQUERYNIB": {
 *             "nib": "{{nib}}"
 *         }
 *     }'
 * 
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryNIB' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *         "INQUERYNIB": {
 *             "nib": "{{nib}}",
 *             "oss_id": "{{oss_id}}"
 *         }
 *     }'
 * 
 *    curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryNIB' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *         "INQUERYNIB": {
 *             "npwp": "{{npwp}}"
 *         }
 *     }'

 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object}	    INQUERYNIB	        INQUERYNIB
 * @apiBody {string(13){13}}    	INQUERYNIB.nib	    Nomor Induk Berusaha
 * @apiBody {string(25){25}} [INQUERYNIB.oss_id] OSS Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha
 * @apiBody {string(16){16}} [INQUERYNIB.npwp] NPWP Perusahaan

 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "INQUERYNIB": {
 *     		 "nib": "{{nib}}"
 *     	 }
 *     }
 * 
 *    {
 *     	 "INQUERYNIB": {
 *     		 "nib": "{{nib}}",
 *             "oss_id": "{{oss_id}}"
 *     	 }
 *     }
 * 
 *    {
 *     	 "INQUERYNIB": {
 *     		 "npwp": "{{npwp}}"
 *     	 }
 *     }
 * 
 * @apiSuccess (200) {Object}	    responinqueryNIB	Data responinqueryNIB		
 * @apiSuccess (200) {string(3)}    	responinqueryNIB.kode	Kode respon		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.keterangan	    keterangan		
 * @apiSuccess (200) {Object}    	responinqueryNIB.dataNIB	    dataNIB		
 * @apiSuccess (200) {string(13)}    	responinqueryNIB.dataNIB.nib	Nomor Induk Berusaha		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.tgl_pengajuan_nib	Tanggal Pengajuan NIB (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.tgl_terbit_nib	Tanggal Penerbitan NIB (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.tgl_perubahan_nib	Tanggal Perubahan NIB (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.oss_id	Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.jenis_pelaku_usaha	Jenis Pelaku Usaha (* Lihat Lampiran 18)		
 * @apiSuccess (200) {string(20)}    	responinqueryNIB.dataNIB.no_npp	Nomor Pendaftaraan Perusahaan Untuk BPJS Ketenagakerjaan		
 * @apiSuccess (200) {string(20)}    	responinqueryNIB.dataNIB.no_va	Nomor Pendaftaraan Perusahaan Untuk BPJS Kesehatan		
 * @apiSuccess (200) {string(23)}    	responinqueryNIB.dataNIB.no_wlkp	Nomor Wajib Lapor Ketenagakerjaan Perusahaan		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.flag_perusahaan	Flag :Y = Untuk Perusahaan Baru,N= Untuk Perusahaan Lama / Exist		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.flag_ekspor	Y : Melakukan Aktifikas Ekspor, N : Tidak Melakukan Aktifitas Ekspor		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.flag_impor	Y : Melakukan Aktifikas Impor, N : Tidak Melakukan Aktifitas Impor		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.jenis_api	Jenis Angka Pengenal Impor (API) (* Lihat Lampiran 3)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.gabung_negara	PMA Merupakan Gabungan Negara Atau Tidak (* Y:Gabungan Negara, N: Bukan Gabungan Negara)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.negara_pma_dominan	Negara Asing Yang Memiliki Modal Mayoritas		
 * @apiSuccess (200) {number(20.2)}    	responinqueryNIB.dataNIB.total_pma	Total Modal PMA		
 * @apiSuccess (200) {number(20.2)}    	responinqueryNIB.dataNIB.nilai_pma_dominan	Nilai Modal PMA Dominan		
 * @apiSuccess (200) {number(20.2)}    	responinqueryNIB.dataNIB.nilai_pmdn	Nilai Modal PMDN		
 * @apiSuccess (200) {number(9.2)}    	responinqueryNIB.dataNIB.persen_pma	Persentase Modal PMA		
 * @apiSuccess (200) {number(9.2)}    	responinqueryNIB.dataNIB.persen_pmdn	Persentase Modal PMDN		
 * @apiSuccess (200) {number(5)}    	responinqueryNIB.dataNIB.kd_kawasan	Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/po rtal/lstKawasan)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.jenis_kawasan	Jenis Kawasan (* Lihat Lampiran 21)		
 * @apiSuccess (200) {string(5)}    	responinqueryNIB.dataNIB.versi_pia	Versi PIA OSS		
 * @apiSuccess (200) {string(2){2}} responinqueryNIB.dataNIB.skala_usaha Skala Usaha Perusahaan
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.jangka_waktu	Jangka Waktu (format date : YYYY- MM-DD)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.status_badan_hukum	Status Badan Hukum (* Lihat Lampiran 12)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.status_penanaman_modal	Status Penanaman Modal (* Lihat Lampiran 1)		
 * @apiSuccess (200) {string(15)}    	responinqueryNIB.dataNIB.npwp_perseroan	NPWP Perseroan		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.nama_perseroan	Nama Perseroan		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.nama_singkatan	Nama Singkatan Perseroan		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.jenis_perseroan	Jenis Perseroan (* Lihat Lampiran 2)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.status_perseroan	Status Perseroan (*Y: Terbuka, N:Tertutup)		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.alamat_perseroan	Alamat Perseroan		
 * @apiSuccess (200) {string(7)}    	responinqueryNIB.dataNIB.rt_rw_perseroan	Rt Rw Perseroan		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.kelurahan_perseroan	Kelurahan Perseroan		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.perseroan_daerah_id	ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)		
 * @apiSuccess (200) {string(5)}    	responinqueryNIB.dataNIB.kode_pos_perseroan	Kode Pos Perseroan		
 * @apiSuccess (200) {string(20)}    	responinqueryNIB.dataNIB.nomor_telpon_perseroan	Nomor Telepon Perseroan		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.email_perusahaan	Email Perusahaan		
 * @apiSuccess (200) {string(20.2)}    	responinqueryNIB.dataNIB.dalam_bentuk_uang	Modal Dalam Bentuk Uang (Valuta : IDR)		
 * @apiSuccess (200) {string(50000)}    	responinqueryNIB.dataNIB.dalam_bentuk_lain	Modal Dalam Bentuk Lainnya		
 * @apiSuccess (200) {string(20.2)}    	responinqueryNIB.dataNIB.total_modal_dasar	Total Modal Dasar (Valuta : IDR)		
 * @apiSuccess (200) {string(20.2)}    	responinqueryNIB.dataNIB.total_modal_ditempatkan	Total Modal Ditempatkan (Valuta : IDR)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.flag_umk	Flag yg menunjukkan umk atau non umk		
 * @apiSuccess (200) {string(2){2}} responinqueryNIB.dataNIB.jenis_perubahan_terakhir Jenis Perubahan Terakhir Perusahaan
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.pemegang_saham	    pemegang_saham		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.pemegang_saham.jenis_pemegang_saham	Jenis Pemegang Saham (* Lihat Lampiran 13)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.pemegang_saham.flag_asing	Asal Pemegang Saham dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)		
 * @apiSuccess (200) {number(20.0)}    	responinqueryNIB.dataNIB.pemegang_saham.total_modal_pemegang	Total Modal Pemegang Saham (Valuta : IDR)		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.pemegang_saham.jabatan_pemegang_saham	Jabatan Pemegang Saham		
 * @apiSuccess (200) {string(500)}    	responinqueryNIB.dataNIB.pemegang_saham.nama_pemegang_saham	Nama Pemegang Saham		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.pemegang_saham.jns_identitas_pemegang_saham	Jenis Identitas Pemegang Saham (* Lihat Lampiran 4)		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.pemegang_saham.no_identitas_pemegang_saham	Nomor Identitas Pemegang Saham		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.pemegang_saham.valid_identitas_pemegang_saham	Valid / Masa Berlaku Pemegang Saham (Format Date : YYYY-MM- DD)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.pemegang_saham.negara_asal_pemegang_saham	Negara asal pemegang saham		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.pemegang_saham.pengendali_pemegang_saham	Nama Pengendali Pemegang Saham		
 * @apiSuccess (200) {string(15)}    	responinqueryNIB.dataNIB.pemegang_saham.npwp_pemegang_saham	NPWP Pemegang Saham		
 * @apiSuccess (200) {string(1024)}    	responinqueryNIB.dataNIB.pemegang_saham.alamat_pemegang_saham	Alamat Pemegang Saham		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.pemegang_saham.fax_pemegang_saham	Fax Pemegang Saham		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.pemegang_saham.email_pemegang_saham	Email Pemegang Saham		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.pemegang_saham.flag_pajak_pemegang_saham	Flag Validasi Pajak Pemegang Saham (* Lihat Lampiran 19)		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.pemegang_saham.ket_pajak_pemegang_saham	    ket_pajak_pemegang_saham		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.penanggung_jwb	    penanggung_jwb		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.penanggung_jwb.flag_asing	Asal penanggung jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.penanggung_jwb.jns_identitas_penanggung_jwb	Jenis idetitas penanggung jawab		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.penanggung_jwb.no_identitas_penanggung_jwb	    no_identitas_penanggung_jwb		
 * @apiSuccess (200) {string(500)}    	responinqueryNIB.dataNIB.penanggung_jwb.nama_penanggung_jwb	    nama_penanggung_jwb		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.penanggung_jwb.jabatan_penanggung_jwb	    jabatan_penanggung_jwb		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.penanggung_jwb.kebangsaan_penanggung_jwb	    kebangsaan_penanggung_jwb		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.penanggung_jwb.negara_asal_penanggung_jwb	    negara_asal_penanggung_jwb		
 * @apiSuccess (200) {string(15)}    	responinqueryNIB.dataNIB.penanggung_jwb.npwp_penanggung_jwb	    npwp_penanggung_jwb		
 * @apiSuccess (200) {string(1024)}    	responinqueryNIB.dataNIB.penanggung_jwb.alamat_penanggung_jwb	    alamat_penanggung_jwb		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.penanggung_jwb.jalan_penanggung_jwb	    jalan_penanggung_jwb		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.penanggung_jwb.blok_penanggung_jwb	Alamat Blok Penanggung Jawab		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.penanggung_jwb.no_penanggung_jwb	Alamat Nomor Penanggung Jawab		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.penanggung_jwb.rt_rw_penanggung_jwb	RT RW Penanggung Jawab		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.penanggung_jwb.kelurahan_penanggung_jwb	Kelurahan Penanggung Jawab		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.penanggung_jwb.daerah_id_penanggung_jwb	ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)		
 * @apiSuccess (200) {string(5)}    	responinqueryNIB.dataNIB.penanggung_jwb.kode_pos_penanggung_jwb	Kode Pos Penanggung Jawab		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.penanggung_jwb.no_telp_penanggung_jwb	Nomor Telepon Penanggung Jawab		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.penanggung_jwb.no_hp_penanggung_jwb	Nomor Handphone Penanggung Jawab		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.penanggung_jwb.no_fax_penanggung_jwb	Nomor Fax Penanggung Jawab		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.penanggung_jwb.email_penanggung_jwb	Email Penanggung Jawab		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.penanggung_jwb.flag_pajak_penanggung_jwb	Flag Validasi Pajak Penanggung Jawab (* Lihat Lampiran 19)		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.penanggung_jwb.ket_pajak_penanggung_jwb	Keterangan Validasi Pajak Penanggung Jawab		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.no_pengesahan	Nomor Pengesahan Akta Dari Kumham		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.tgl_pengesahan	Tanggal Pengesahan Akta Dari Kumham (format date : YYYY- MM-DD)		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.no_akta_lama	Nomor Akta Lama Sebelum Perubahan		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.tgl_akta_lama	Tanggal Akta Lama Sebelum Perubahan (format date : YYYY- MM-DD)		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.no_pengesahan_lama	Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.tgl_pengesahan_lama	Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.legalitas	    legalitas		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.legalitas.jenis_legal	Jenis Legal Perusahaan (* Lihat Lampiran 7)		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.legalitas.no_legal	Nomor Legal Perusahaan		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.legalitas.tgl_legal	Tanggal Legal Perusahaan (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.legalitas.alamat_notaris	Alamat Notaris		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.legalitas.nama_notaris	Nama Notaris		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.legalitas.telepon_notaris	Telepon Notaris		
 * @apiSuccess (200) {Object}    	responinqueryNIB.dataNIB.data_rptka	    data_rptka		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_rptka.jenis_rptka	Jenis Flag RPTKA *( 01 : Baru, 02: Perubahan)		
 * @apiSuccess (200) {string(20)}    	responinqueryNIB.dataNIB.data_rptka.no_rptka	No Bacode RPTKA		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_rptka.rptka_awal	Masa Berlaku Dari Tanggal(format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_rptka.rptka_akhir	Masa Berlaku Sampai Tanggal(format date : YYYY-MM- DD)		
 * @apiSuccess (200) {number(20.2)}    	responinqueryNIB.dataNIB.data_rptka.rptka_gaji	Gaji Tenaga Asing		
 * @apiSuccess (200) {number(11)}    	responinqueryNIB.dataNIB.data_rptka.jumlah_tka_rptka	Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_rptka.jangka_penggunaan_waktu	Jangka Waktu Penggunaan Tenaga Kerja Asing (TKA) dalam Izin Rencana Penggunaan Tenaga Kerja Asing (RPTKA) (format date : YYYY- MM-DD)		
 * @apiSuccess (200) {number(1)}    	responinqueryNIB.dataNIB.data_rptka.jangka_waktu_permohonan_rptka	Jangka Waktu Permohonan RPTKA		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan	    rptka_jabatan		
 * @apiSuccess (200) {number(11)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.id_jabatan	ID Jabatan Tenaga Kerja Asing berdasarkan https://jdih.kemnaker.go.id/data_puu/KEP247_MENX_2011.pd f		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.jabatan	Nama Jabatan		
 * @apiSuccess (200) {number(11)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.jumlah	Jumlah Orang Yang Memiliki Jabatan		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.tgl_mulai	Tanggal Mulai Jabatan format date		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.tgl_selesai	Tanggal Selesai Jabatan format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.keterangan	Keterangan		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping	    rptka_tki_pendamping		
 * @apiSuccess (200) {number(10)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_jabatan	Id Jabatan		
 * @apiSuccess (200) {number(10)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_pendamping	Id TKI Pendamping		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nama	Nama TKI Pendamping		
 * @apiSuccess (200) {string(20)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nik	Nomor NIK TKI Pendamping		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.jabatan	Nama Jabatan TKI Pendamping		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.hp	Nomor HP TKI Pendamping		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.email	Email TKI Pendampiag		
 * @apiSuccess (200) {string(65535)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.foto	Foto TKI Pendamping Attachment File dalam Bentukbentuk base64 dengan format (data:image/jpeg;base64,string() ENCODE IMAGE)		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pendidikan_min	Tingkat Pendidikan Minimal TKI Pendamping		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.sertifikat	Sertifikat Kompetensi TKI Pendamping		
 * @apiSuccess (200) {number(11)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pengalaman_kerja	Pengalaman Kerja TKI Pendamping (dalam tahun)		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.keterangan	Keterangan		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_rptka.rptka_negara	    rptka_negara		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_rptka.rptka_negara.id_negara	Negara Asal Tenaga Kerja Asing(* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/loco de/service/location )		
 * @apiSuccess (200) {number(11)}    	responinqueryNIB.dataNIB.data_rptka.rptka_negara.jumlah	Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_rptka.rptka_lokasi	    rptka_lokasi		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_rptka.rptka_lokasi.lokasi_id	ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)		
 * @apiSuccess (200) {number(11)}    	responinqueryNIB.dataNIB.data_rptka.rptka_lokasi.jumlah	Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_proyek	    data_proyek		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_proyek.id_proyek	ID / Kode Proyek		
 * @apiSuccess (200) {string(26)}    	responinqueryNIB.dataNIB.data_proyek.nomor_proyek	Nomor Permohonan Proyek		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_proyek.uraian_usaha	Uraian Usaha Proyek		
 * @apiSuccess (200) {number(10)}    	responinqueryNIB.dataNIB.data_proyek.jumlah_tki_l	Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki		
 * @apiSuccess (200) {number(10)}    	responinqueryNIB.dataNIB.data_proyek.jumlah_tki_p	Jumlah Tenaga Kerja Indonesia (TKI) Perempuan		
 * @apiSuccess (200) {number(10)}    	responinqueryNIB.dataNIB.data_proyek.jumlah_tka_l	Jumlah Tenaga Kerja Asing (TKA) Laki -Laki		
 * @apiSuccess (200) {number(10)}    	responinqueryNIB.dataNIB.data_proyek.jumlah_tka_p	Jumlah Tenaga Kerja Asing (TKA) Perempuan		
 * @apiSuccess (200) {number(7)}    	responinqueryNIB.dataNIB.data_proyek.kbli	Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)		
 * @apiSuccess (200) {string(3)}    	responinqueryNIB.dataNIB.data_proyek.sektor	Sektor Usaha Berdasarkan KBLI (* Lihat Lampiran 20)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_proyek.memiliki_menguasai	Sudah Memiliki atar Menguasai Lahan (Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.jenis_lokasi	Lokasi Berada dalam Lintas Administratif (Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.status_tanah	Status Kepemilikan Tanah (* Lihat Lampiran 5)		
 * @apiSuccess (200) {number(10)}    	responinqueryNIB.dataNIB.data_proyek.luas_tanah	Luas Bidang tanah		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.satuan_luas_tanah	Satuan Luas Tanah (*Lihat Lampiran 17)		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_proyek.pembelian_pematang_tanah	Nilai Pembelian Pematang Tanah (Valuta:IDR)		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_proyek.bangunan_gedung	Nilai Bangunan Gedung (Valuta:IDR)		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_proyek.mesin_peralatan	Nilai Mesin Peralatan (Valuta:IDR)		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_proyek.mesin_peralatan_usd	Nilai Mesin Peralatan dalam USD		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_proyek.investasi_lain	Investasi Lainnya		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_proyek.sub_jumlah	Jumlah Asset (Valuta:IDR)		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_proyek.modal_kerja	Nilai Modal Kerja (Valuta:IDR)		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_proyek.jumlah_investasi	Nilai Jumlah Investasi (Valuta:IDR)		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_proyek.tanggal_kurs	Tanggal Kurs (format date : YYYY- MM-DD)		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_proyek.nilai_kurs	Nilai Kurs		
 * @apiSuccess (200) {number(11)}    	responinqueryNIB.dataNIB.data_proyek.kd_kawasan	Kode Kawasan (* Lihat Lampiran 30)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_b	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point B		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_c	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point C		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_d	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point D		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_e	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point E		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_f	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point F		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_proyek.jawab_lokasi_g	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point G		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_proyek.flag_perluasan	Proyek Merupakan Perluasan/Pengembangan Usaha Atau Bukan (Value : Y = Proses Perluasan/Pengembangan Usaha, N = Bukan Proses Perluasan/Pengembangan Usaha)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_proyek.flag_cabang	Proyek Sebagai Kantor Cabang Atau Bukan (Value : Y = Sebagai Kantor Cabang, N = Bukan Sebagai Kantor Cabang)		
 * @apiSuccess (200) {string(15)}    	responinqueryNIB.dataNIB.data_proyek.npwp_cabang	NPWP Kantor Cabang		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_proyek.nama_cabang	Nama Kantor Cabang / Proyek		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.jenis_identitas_pj	Jenis Identitas Penanggung Jawab Proyek (* Lihat Lampiran 4)		
 * @apiSuccess (200) {string(16)}    	responinqueryNIB.dataNIB.data_proyek.no_identitas_pj	No Identitas Penanggung Jawab Proyek		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.data_proyek.nama_pj	Nama Penanggung Jawab Proyek		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.status_proyek	Status Proyek(* Lihat Lampiran 22)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.jenis_proyek	Jenis Proyek(* Lihat Lampiran 26)		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_proyek.nama_kegiatan	Nama Proyek/ Kegiatan Proyek, Untuk Perseorangan Digunakan Untuk Mencatat Nama Dagangannya Misal (UD. Perciban Jaya)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_proyek.flag_merger	Flag Proyek Hasil Merger atau Bukan (Y: Hasil Merger, N: Bukan Hasil Merger)		
 * @apiSuccess (200) {string(15)}    	responinqueryNIB.dataNIB.data_proyek.npwp_perseroan_merger	NPWP Perusahaan Merger		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_proyek.nama_perseroan_merger	Nama Perusahaan Merger		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.skala_usaha	Skala usaha		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.data_proyek.skala_resiko	Skala resiko		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_proyek.deskripsi_kegiatan	Deskripsi kegiatan	
 * @apiSuccess (200) {string(1)}      responinqueryNIB.dataNIB.data_proyek.satu_lini    Keterangan Proyek Satu Lini(Y : Proyek Satu Lini , N : Bukan Proyek Satu Lini)
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek	    data_lokasi_proyek		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.id_proyek_lokasi	ID / Kode Lokasi Proyek		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.proyek_daerah_id	Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019: https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)		
 * @apiSuccess (200) {string(3)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.kd_kawasan	Kode Kawasan (* Lihat Lampiran 30)		
 * @apiSuccess (200) {string(65535)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.alamat_usaha	Alamat Kegiatan Proyek / Usaha		
 * @apiSuccess (200) {string(6)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.id_kegiatan	Id Kegiatan Usaha Berdasarkan RDTR Digital		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.response_kegiatan	Response Kegiatan Usaha Berdasarkan Validasi Kegiatan RDTR Digital		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.jenis_kawasan	Jenis Kawasan (* Lihat Lampiran 16)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.jenis_lokasi	Jenis Lokasi Lintas Administratif atau Tidak (01 : Lintas Administratif, 02 : Tidak Lintas Administratif)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.status_lokasi	Status Lokasi(* Lihat Lampiran 25)		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek	    data_lokasi_proyek		
 * @apiSuccess (200) {number(11)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.serial	Serial Koordinat		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.lat_lng	Koordinat Latitude & Longitude		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek	    data_posisi_proyek		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_posisi	ID / Kode Posisi Proyek		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_lokasi	ID / Kode Lokasi Proyek		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.posisi_lokasi	Posisi Lokasi (* Lihat Lampiran 24)		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk	    data_proyek_produk		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_produk	ID / Kode Produk		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_proyek	ID / Kode Proyek		
 * @apiSuccess (200) {number(7)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.kbli	Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)		
 * @apiSuccess (200) {number(10)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_bidang_usaha	ID Bidang Usaha Berdasarkan Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)		
 * @apiSuccess (200) {string(1024)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.jenis_produksi	Rencana Produksi Yang Dihasilkan		
 * @apiSuccess (200) {number(20.2)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.kapasitas	Kapasitas produksi suatu produk		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.satuan	Satuan Dari Kapasitas Produksi		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.merk_dagang	Merk Dagang		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pemegang_haki	Pemegang Hak Cipta		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pemegang_paten	Pemegang Hak Paten		
 * @apiSuccess (200) {string(20)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_nomor	Nomor Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_tanggal	Tanggal Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC) format date : YYYY- MM-DD		
 * @apiSuccess (200) {string(16)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.pi_npwp	NPWP Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)		
 * @apiSuccess (200) {string(9)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.id_kbli_ta	Penanda Bahwa Cakupan Produk Untuk Kebutuhan Tax Allowance		
 * @apiSuccess (200) {number(3.2)}    	responinqueryNIB.dataNIB.data_proyek.data_proyek_produk.tkdn	Tingkat Kandungan Dalam Negeri		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_dni	    data_dni		
 * @apiSuccess (200) {number(10)}    	responinqueryNIB.dataNIB.data_dni.kd_dni	Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)		
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_checklist	    data_checklist		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_checklist.id_produk	ID Produk		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_checklist.id_proyek	ID / Kode Proyek		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_checklist.id_izin	Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin		
 * @apiSuccess (200) {string(3)}    	responinqueryNIB.dataNIB.data_checklist.jenis_izin	Jenis Perizinan (* Lihat Lampiran 27)		
 * @apiSuccess (200) {string(13)}    	responinqueryNIB.dataNIB.data_checklist.kd_izin	Kode Izin Sistem K/L/D (* service getDataReferensi kode : 8)		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_checklist.kd_daerah	Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_checklist.nama_izin	Nama Izin		
 * @apiSuccess (200) {string(150)}    	responinqueryNIB.dataNIB.data_checklist.no_izin	Nomor Izin		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.data_checklist.tgl_izin	Tanggal Izin (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.data_checklist.instansi	Nama Instansi		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_checklist.id_bidang_spesifik	ID Bidang Spesifik		
 * @apiSuccess (200) {string(65535)}    	responinqueryNIB.dataNIB.data_checklist.bidang_spesifik	Uraian Bidang Spesifik		
 * @apiSuccess (200) {number(19)}    	responinqueryNIB.dataNIB.data_checklist.id_kewenangan	ID Kewenangan		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_checklist.parameter_kewenangan	Parameter Kewenangan Izin		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_checklist.kewenangan	00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota		
 * @apiSuccess (200) {string(65535)}    	responinqueryNIB.dataNIB.data_checklist.file_izin	Attachment File Izin Hasil Pemenuhan Komitmen dari K/L/D dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)		
 * @apiSuccess (200) {string(65535)}    	responinqueryNIB.dataNIB.data_checklist.file_izin_oss	Attachment File Izin yang diterbitkan ole Lembaga OSS dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_checklist.flag_checklist	Flag Checklist Komitmen (* Lihat Lampiran 28)		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.data_checklist.status_checklist	Status Penerbitan Izin / Checklist (* Lihat Lampiran 10)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_checklist.flag_transaksional	Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.data_checklist.flag_perpanjangan	Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Zin Usaha Yang Terbit Sebelum OSS		
 * @apiSuccess (200) {string(15)}    	responinqueryNIB.dataNIB.data_checklist.kd_dokumen	Kode dokumen izin lingkungan		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_checklist.nm_dokumen	Nama dokumen izin lingkungan		
 * @apiSuccess (200) {Object} [responinqueryNIB.dataNIB.data_checklist.data_teknis] Data Teknis
 * @apiSuccess (200) {string(25){25}} [responinqueryNIB.dataNIB.data_checklist.data_teknis.id_komitmen] ID Komitmen
 * @apiSuccess (200) {string(255){255}} [responinqueryNIB.dataNIB.data_checklist.data_teknis.nama_bangunan] Nama Bangunan
 * @apiSuccess (200) {string(25){25}} [responinqueryNIB.dataNIB.data_checklist.data_teknis.luas_bangunan] Luas Bangunan
 * @apiSuccess (200) {string(9){9}} [responinqueryNIB.dataNIB.data_checklist.data_teknis.jumlah_lantai] Jumlah Lantai
 * @apiSuccess (200) {string(5){5}} [responinqueryNIB.dataNIB.data_checklist.data_teknis.tinggi_bangunan] Tinggi Bangunan
 * @apiSuccess (200) {string(25){25}} [responinqueryNIB.dataNIB.data_checklist.data_teknis.luas_basement] Luas Basement
 * @apiSuccess (200) {string(2){2}} [responinqueryNIB.dataNIB.data_checklist.data_teknis.jumlah_lantai_basement] Jumlah Lantai Basement
 * @apiSuccess (200) {string(150){150}} [responinqueryNIB.dataNIB.data_checklist.data_teknis.perancang_dokumen_teknis] Perancang Dokumen Teknis
 * @apiSuccess (200) {Object[]}    	responinqueryNIB.dataNIB.data_checklist.data_persyaratan	    data_persyaratan		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.data_checklist.data_persyaratan.id_syarat	Id / Kode Persyaratan		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.data_checklist.data_persyaratan.no_dokumen	Nomor Dokumen Persyaratan		
 * @apiSuccess (200) {string(8)}    	responinqueryNIB.dataNIB.data_checklist.data_persyaratan.tgl_dokumen	Tanggal Dokumen Persyaratan (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(65535)}    	responinqueryNIB.dataNIB.data_checklist.data_persyaratan.file_dokumen	Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB)		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.data_checklist.data_persyaratan.keterangan	Keterangan Dokumen Persyaratan		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.jenis_id_user_proses	Kode Jenis Identitas (* Lihat Lampiran 4)		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.no_id_user_proses	No Identitas Pemroses NIB		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.nama_user_proses	Nama User Pemroses NIB		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.email_user_proses	Email User Pemroses NIB		
 * @apiSuccess (200) {string(25)}    	responinqueryNIB.dataNIB.hp_user_proses	No HP Pemroses NIB		
 * @apiSuccess (200) {string(255)}    	responinqueryNIB.dataNIB.alamat_user_proses	Alamat Pemroses NIB		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.jns_kelamin_user_proses	Jenis Kelamin Pemroses NIB (L : Laki-Laki, P : Perempuan)		
 * @apiSuccess (200) {string(100)}    	responinqueryNIB.dataNIB.tempat_lahir_user_proses	Tempat Lahir Pemroses NIB		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.tgl_lahir_user_proses	Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.daerah_id_user_proses	ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)		
 * @apiSuccess (200) {string(10)}    	responinqueryNIB.dataNIB.rt_rw_user_proses	RT RW Pemroses NIB		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.agama_user_proses	Agama Pemroses NIB		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.status_perkawinan_user_proses	Status Perkawinan Pemroses NIB		
 * @apiSuccess (200) {string(50)}    	responinqueryNIB.dataNIB.pekerjaan_user_proses	Pekerjaan Pemroses NIB		
 * @apiSuccess (200) {string(2)}    	responinqueryNIB.dataNIB.status_nib	Status Penerbitan NIB (* Lihat Lampiran 14)		
 * @apiSuccess (200) {string(1)}    	responinqueryNIB.dataNIB.tipe_dokumen 	Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)		
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
*       "responinqueryNIB": {
*         "kode": 200,
*         "keterangan": "",
*         "dataNIB": {
*           "nib": "",
*           "tgl_pengajuan_nib": "",
*           "tgl_terbit_nib": "",
*           "tgl_perubahan_nib": "",
*           "oss_id": "",
*           "jenis_pelaku_usaha": "",
*           "no_npp": "",
*           "no_va": "",
*           "no_wlkp": "",
*           "flag_perusahaan": "",
*           "flag_ekspor": "",
*           "flag_impor": "",
*           "jenis_api": "",
*           "gabung_negara": "",
*           "negara_pma_dominan": "",
*           "total_pma": "",
*           "nilai_pma_dominan": "",
*           "nilai_pmdn": "",
*           "persen_pma": "",
*           "persen_pmdn": "",
*           "kd_kawasan": "",
*           "jenis_kawasan": "",
*           "versi_pia": "",
*           "skala_usaha": "",
*           "jangka_waktu": "",
*           "status_badan_hukum": "",
*           "status_penanaman_modal": "",
*           "npwp_perseroan": "",
*           "nama_perseroan": "",
*           "nama_singkatan": "",
*           "jenis_perseroan": "",
*           "status_perseroan": "",
*           "alamat_perseroan": "",
*           "rt_rw_perseroan": "",
*           "kelurahan_perseroan": "",
*           "perseroan_daerah_id": "",
*           "kode_pos_perseroan": "",
*           "nomor_telpon_perseroan": "",
*           "email_perusahaan": "",
*           "dalam_bentuk_uang": "",
*           "dalam_bentuk_lain": "",
*           "total_modal_dasar": "",
*           "total_modal_ditempatkan": "",
*           "flag_umk": "",
*           "jenis_perubahan_terakhir": "",
*           "pemegang_saham": [
*             {
*               "jenis_pemegang_saham": "",
*               "flag_asing": "",
*               "total_modal_pemegang": "",
*               "jabatan_pemegang_saham": "",
*               "nama_pemegang_saham": "",
*               "jns_identitas_pemegang_saham": "",
*               "no_identitas_pemegang_saham": "",
*               "valid_identitas_pemegang_saham": "",
*               "negara_asal_pemegang_saham": "",
*               "pengendali_pemegang_saham": "",
*               "npwp_pemegang_saham": "",
*               "alamat_pemegang_saham": "",
*               "fax_pemegang_saham": "",
*               "email_pemegang_saham": "",
*               "flag_pajak_pemegang_saham": "",
*               "ket_pajak_pemegang_saham": ""
*             }
*           ],
*           "penanggung_jwb": [
*             {
*               "flag_asing": "",
*               "jns_identitas_penanggung_jwb": "",
*               "no_identitas_penanggung_jwb": "",
*               "nama_penanggung_jwb": "",
*               "jabatan_penanggung_jwb": " ",
*               "kebangsaan_penanggung_jwb": "",
*               "negara_asal_penanggung_jwb": "",
*               "npwp_penanggung_jwb": "",
*               "alamat_penanggung_jwb": "",
*               "jalan_penanggung_jwb": "",
*               "blok_penanggung_jwb": "",
*               "no_penanggung_jwb": "",
*               "rt_rw_penanggung_jwb": "",
*               "kelurahan_penanggung_jwb": "",
*               "daerah_id_penanggung_jwb": "",
*               "kode_pos_penanggung_jwb": "",
*               "no_telp_penanggung_jwb": "",
*               "no_hp_penanggung_jwb": "",
*               "no_fax_penanggung_jwb": "",
*               "email_penanggung_jwb": "",
*               "flag_pajak_penanggung_jwb": "",
*               "ket_pajak_penanggung_jwb": ""
*             }
*           ],
*           "no_pengesahan": "",
*           "tgl_pengesahan": "",
*           "no_akta_lama": "",
*           "tgl_akta_lama": "",
*           "no_pengesahan_lama": "",
*           "tgl_pengesahan_lama": "",
*           "legalitas": [
*             {
*               "jenis_legal": "",
*               "no_legal": "",
*               "tgl_legal": "",
*               "alamat_notaris": "",
*               "nama_notaris": "",
*               "telepon_notaris": ""
*             }
*           ],
*           "data_rptka": {
*             "jenis_rptka": "",
*             "no_rptka": "",
*             "rptka_awal": "",
*             "rptka_akhir": "",
*             "rptka_gaji": "",
*             "jumlah_tka_rptka": "",
*             "jangka_penggunaan_waktu": "",
*             "jangka_waktu_permohonan_rptka": "",
*             "rptka_jabatan": [
*               {
*                 "id_jabatan": "",
*                 "jabatan": "",
*                 "jumlah": "",
*                 "tgl_mulai": "",
*                 "tgl_selesai": "",
*                 "keterangan": "",
*                 "rptka_tki_pendamping": [
*                   {
*                     "id_jabatan": "",
*                     "id_pendamping": "",
*                     "nama": "",
*                     "nik": "",
*                     "jabatan": "",
*                     "hp": "",
*                     "email": "",
*                     "foto": "",
*                     "pendidikan_min": "",
*                     "sertifikat": "",
*                     "pengalaman_kerja": "",
*                     "keterangan": ""
*                   }
*                 ]
*               }
*             ],
*             "rptka_negara": [{ "id_negara": "", "jumlah": "" }],
*             "rptka_lokasi": [{ "lokasi_id": "", "jumlah": "" }]
*           },
*           "data_proyek": [
*             {
*               "id_proyek": "",
*               "nomor_proyek": "",
*               "uraian_usaha": "",
*               "jumlah_tki_l": "",
*               "jumlah_tki_p": "",
*               "jumlah_tka_l": "",
*               "jumlah_tka_p": "",
*               "kbli": "",
*               "sektor": "",
*               "memiliki_menguasai": "",
*               "jenis_lokasi": "",
*               "status_tanah": "",
*               "luas_tanah": "",
*               "satuan_luas_tanah": "",
*               "pembelian_pematang_tanah": "",
*               "bangunan_gedung": "",
*               "mesin_peralatan": "",
*               "mesin_peralatan_usd": "",
*               "investasi_lain": "",
*               "sub_jumlah": "",
*               "modal_kerja": "",
*               "jumlah_investasi": "",
*               "tanggal_kurs": "",
*               "nilai_kurs": "",
*               "kd_kawasan": "",
*               "jawab_lokasi_b": "",
*               "jawab_lokasi_c": "",
*               "jawab_lokasi_d": "",
*               "jawab_lokasi_e": "",
*               "jawab_lokasi_f": "",
*               "jawab_lokasi_g": "",
*               "flag_perluasan": "",
*               "flag_cabang": "",
*               "npwp_cabang": "",
*               "nama_cabang": "",
*               "jenis_identitas_pj": "",
*               "no_identitas_pj": "",
*               "nama_pj": "",
*               "status_proyek": "",
*               "jenis_proyek": "",
*               "nama_kegiatan": "",
*               "flag_merger": "",
*               "npwp_perseroan_merger": "",
*               "nama_perseroan_merger": "",
*               "skala_usaha": "",
*               "skala_resiko": "",
*               "deskripsi_kegiatan": "",
*               "satu_lini": "",
*               "data_lokasi_proyek": [
*                 {
*                   "id_proyek_lokasi": "",
*                   "proyek_daerah_id": "",
*                   "kd_kawasan": "",
*                   "alamat_usaha": "",
*                   "id_kegiatan": "",
*                   "response_kegiatan": "",
*                   "jenis_kawasan": "",
*                   "jenis_lokasi": "",
*                   "status_lokasi": "",
*                   "data_lokasi_proyek": [{ "serial": "", "lat_lng": "" }],
*                   "data_posisi_proyek": [
*                     {
*                       "id_proyek_posisi": "",
*                       "id_proyek_lokasi": "",
*                       "posisi_lokasi": ""
*                     }
*                   ]
*                 }
*               ],
*               "data_proyek_produk": [
*                 {
*                   "id_produk": "",
*                   "id_proyek": "",
*                   "kbli": "",
*                   "id_bidang_usaha": "",
*                   "jenis_produksi": "",
*                   "kapasitas": "",
*                   "satuan": "",
*                   "merk_dagang": "",
*                   "pemegang_haki": "",
*                   "pemegang_paten": "",
*                   "pi_nomor": "",
*                   "pi_tanggal": "",
*                   "pi_npwp": "",
*                   "id_kbli_ta": "",
*                   "tkdn": ""
*                 }
*               ]
*             }
*           ],
*           "data_dni": [{ "kd_dni": "" }],
*           "data_checklist": [
*             {
*               "id_produk": "",
*               "id_proyek": "",
*               "id_izin": "",
*               "jenis_izin": "",
*               "kd_izin": "",
*               "kd_daerah": "",
*               "nama_izin": "",
*               "no_izin": "",
*               "tgl_izin": "",
*               "instansi": "",
*               "id_bidang_spesifik": "",
*               "bidang_spesifik": "",
*               "id_kewenangan": "",
*               "parameter_kewenangan": "",
*               "kewenangan": "",
*               "file_izin": "",
*               "file_izin_oss": "",
*               "flag_checklist": "",
*               "status_checklist": "",
*               "flag_transaksional": "",
*               "flag_perpanjangan": "",
*               "kd_dokumen": "",
*               "nm_ dokumen": "",              
*               "data_teknis" : {
*                  "id_komitmen" : "",
*                  "nama_bangunan" : "",
*                  "luas_bangunan" : "",
*                  "jumlah_lantai" : "",
*                  "tinggi_bangunan" : "",
*                  "luas_basement" : "",
*                  "jumlah_lantai_basement" : "",
*                  "perancang_dokumen_teknis" : ""
*               },
*               "data_persyaratan": [
*                 {
*                   "id_syarat": "",
*                   "no_dokumen": "",
*                   "tgl_dokumen": "",
*                   "file_dokumen": "",
*                   "keterangan": ""
*                 }
*               ]
*             }
*           ],
*           "jenis_id_user_proses": "",
*           "no_id_user_proses": "",
*           "nama_user_proses": "",
*           "email_user_proses": "",
*           "hp_user_proses": "",
*           "alamat_user_proses": "",
*           "jns_kelamin_user_proses": "",
*           "tempat_lahir_user_proses": "",
*           "tgl_lahir_user_proses": "",
*           "daerah_id_user_proses": "",
*           "rt_rw_user_proses": "",
*           "agama_user_proses": "",
*           "status_perkawinan_user_proses": "",
*           "pekerjaan_user_proses": "",
*           "status_nib": "",
*           "tipe_dokumen ": ""
*         }
*       }
*     }

 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responinqueryNIB": {
 *     		 "kode": 400,
 *     		 "keterangan": "Data NIB tidak ditemukan",
 *     		 "dataNIB": [],
 *     	 }
 *     }
 */

/**
 * @api {post} /checkNIB Check NIB
 * @apiVersion 4.3.19
 * @apiDescription Cek Data Nomor Induk Berusaha (NIB) yang Ada di Sistem OSS
 * @apiName checkNIB
 * @apiGroup NIB
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/checkNIB' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *         "CHECKNIB": {
 *             "nib": "{{nib}}"
 *         }
 *     }'

 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object}	    CHECKNIB	        CHECKNIB
 * @apiBody {string(13)}    	CHECKNIB.nib	    Nomor Induk Berusaha

 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *     	"CHECKNIB": {
 *     		"nib": ""
 *     	}
 *     }
 * 
 * @apiSuccess (200) {Object}	    responcheckNIB	                            responcheckNIB
 * @apiSuccess (200) {string(3)}    	responcheckNIB.kode	                        Kode Respon (*Lihat Lampiran 9)
 * @apiSuccess (200) {string(255)}    	responcheckNIB.keterangan	                Keterangan Respon
 * @apiSuccess (200) {Object}    	responcheckNIB.dataNIB	                    dataNIB
 * @apiSuccess (200) {string(13)}    	responcheckNIB.dataNIB.nib	                Nomor Induk Berusaha
 * @apiSuccess (200) {string(100)}    	responcheckNIB.dataNIB.nama_perusahaan	    Nama Perusahaan
 * @apiSuccess (200) {string(2)}    	responcheckNIB.dataNIB.status	            Status NIB (*Lihat Lampiran 14)
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responcheckNIB": {
 *     		 "kode": 200,
 *     		 "keterangan": "Sukses",
 *     		 "dataNIB": {
 *     			 "nib": "1234567",
 *     			 "nama_perusahaan": "Testing",
 *     			 "status": "01"
 *     		 }
 *     	 }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responcheckNIB": {
 *     		 "kode": 400,
 *     		 "keterangan": "Data NIB tidak ditemukan",
 *         "dataNIB": {
 *     			 "nib": "",
 *     			 "nama_perusahaan": "",
 *     			 "status": ""
 *     		 }
 *     	 }
 *     }
 */

/**
 * @api {post} /receiveNIBSTPW Receive NIB STPW
 * @apiVersion 4.3.19
 * @apiDescription Mengirimkan Data NIB STPW & Checklist Izin dari Sistem OSS ke Sistem K/L/D
 * @apiName receiveNIBSTPW
 * @apiGroup NIB
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveNIBSTPW' \
 *     --header 'OSS-API-KEY: {{oss-api-key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *       "dataNIBSTPW": {
 *         "nib": "",
 *         "tgl_pengajuan_nib": "",
 *         "tgl_terbit_nib": "",
 *         "tgl_perubahan_nib": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "jenis_pelaku_usaha": "",
 *         "nama_pj": "",
 *         "alamat_pj": "",
 *         "paspor_pj": "",
 *         "email_pj": "",
 *         "asal_negara_pj": "",
 *         "telp_pj": "",
 *         "nama_perusahaan_ln": "",
 *         "alamat_perusahaan_ln": "",
 *         "negara_perusahaan_ln": "",
 *         "telp_perusahaan_ln": "",
 *         "jangka_waktu": "",
 *         "file_prospektus": "",
 *         "versi_pia": "",
 *         "data_checklist": [
 *           {
 *             "id_izin": "",
 *             "jenis_izin": "",
 *             "kd_izin": "",
 *             "kd_daerah": "",
 *             "nama_izin": "",
 *             "instansi": "",
 *             "id_bidang_spesifik": "",
 *             "bidang_spesifik": "",
 *             "id_kewenangan": "",
 *             "parameter_kewenangan": "",
 *             "kewenangan": "",
 *             "flag_checklist": "",
 *             "flag_transaksional": "",
 *             "flag_perpanjangan": ""
 *           }
 *         ],
 *         "jenis_id_user_proses": "",
 *         "no_id_user_proses": "",
 *         "nama_user_proses": "",
 *         "email_user_proses": "",
 *         "hp_user_proses": "",
 *         "alamat_user_proses": "",
 *         "jns_kelamin_user_proses": "",
 *         "tempat_lahir_user_proses": "",
 *         "tgl_lahir_user_proses": "",
 *         "daerah_id_user_proses": "",
 *         "rt_rw_user_proses": "",
 *         "agama_user_proses": "",
 *         "status_perkawinan_user_proses": "",
 *         "pekerjaan_user_proses": "",
 *         "status_nib": "",
 *         "tipe_dokumen ": ""
 *       }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} Token SHA1(USERNAME+PASSWORD+NIB+DATE(Ymd))
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "Token": "OSS000qw13242628gssssss812345654709820180514"
 *     }
 * @apiBody {Object}	    dataNIBSTPW	                            dataNIBSTPW
 * @apiBody {string(13)}    	dataNIBSTPW.nib	                        Nomor Induk Berusaha
 * @apiBody {string(10)}    	dataNIBSTPW.tgl_pengajuan_nib	        Tanggal Pengajuan NIB (* Date Format YYYY-MM-DD)
 * @apiBody {string(10)}    	dataNIBSTPW.tgl_terbit_nib	            Tanggal Terbit NIB (* Date Format YYYY-MM-DD)
 * @apiBody {string(10)}    	dataNIBSTPW.tgl_perubahan_nib	        Tanggal Perubahan NIB (* Date Format YYYY-MM-DD)
 * @apiBody {string(25)}    	dataNIBSTPW.oss_id	                    Oss ID adalah ID yang di Generate Sistem OSS dan Dikirimkan ke L/L/D Bersama Permohonan Nomor Induk Berusaha (NIB)
 * @apiBody {string(25)}    	dataNIBSTPW.id_izin	                    Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {string(12)}    	dataNIBSTPW.kd_izin	                    Kode Izin Sistem K/L/D (* Lihat Lampiran 8)
 * @apiBody {string(10)}    	dataNIBSTPW.kd_daerah	                Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )
 * @apiBody {string(2)}    	dataNIBSTPW.kewenangan	                Kewenangan (00 : Kewenangan Pusat; 02 : Kewenangan Provinsi; 03 : Kewenangan Kab/Kota)
 * @apiBody {string(2)}    	dataNIBSTPW.jenis_pelaku_usaha	        Jenis Pelaku Usaha (* Lihat Lampiran 18)
 * @apiBody {string(255)}    	dataNIBSTPW.nama_pj	                    Nama Penanggung Jawab
 * @apiBody {string(255)}    	dataNIBSTPW.alamat_pj	                Alamat Penanggung Jawab
 * @apiBody {string(20)}    	dataNIBSTPW.paspor_pj	                Nomor Paspor Penanggung Jawab
 * @apiBody {string(50)}    	dataNIBSTPW.email_pj	                Email Penanggung Jawab
 * @apiBody {string(2)}    	dataNIBSTPW.asal_negara_pj	            Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/ service/location )
 * @apiBody {string(50)}    	dataNIBSTPW.telp_pj	                    Telpon Penanggung Jawab
 * @apiBody {string(255)}    	dataNIBSTPW.nama_perusahaan_ln	        Nama Prinsipal
 * @apiBody {string(255)}    	dataNIBSTPW.alamat_perusahaan_ln	    Alamat Prinsipal
 * @apiBody {string(2)}    	dataNIBSTPW.negara_perusahaan_ln	    Negara Prinsipal (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact:http://www.unece.org/cefact/locode/ service/location )
 * @apiBody {string(50)}    	dataNIBSTPW.telp_perusahaan_ln	        Telpon Prinsipal
 * @apiBody {string(10)}    	dataNIBSTPW.jangka_waktu	            Jangka Waktu (* Date Format YYYY- MM-DD)
 * @apiBody {string(65535)}    	dataNIBSTPW.file_prospektus	            Attachment File Prospektus dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)
 * @apiBody {string(5)}    	dataNIBSTPW.versi_pia	                Versi PIA OSS
 * @apiBody {Object[]}    	dataNIBSTPW.data_checklist	            data_checklist
 * @apiBody {string(25)}    	dataNIBSTPW.data_checklist.id_izin	    Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {string(3)}    	dataNIBSTPW.data_checklist.jenis_izin	Jenis Perizinan (* Lihat Lampiran 27)
 * @apiBody {string(13)}    	dataNIBSTPW.data_checklist.kd_izin	    Kode Izin Sistem K/L/D
 * @apiBody {string(10)}    	dataNIBSTPW.data_checklist.kd_daerah	Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(255)}    	dataNIBSTPW.data_checklist.nama_izin	Nama Izin
 * @apiBody {string(100)}    	dataNIBSTPW.data_checklist.instansi	    Nama Instansi
 * @apiBody {string(19)}    	dataNIBSTPW.data_checklist.id_bidang_spesifik	    ID Bidang Spesifik
 * @apiBody {string(65535)}    	dataNIBSTPW.data_checklist.bidang_spesifik	        Uraian Bidang Spesifik
 * @apiBody {number(19)}    	dataNIBSTPW.data_checklist.id_kewenangan	        id_kewenangan
 * @apiBody {string(255)}    	dataNIBSTPW.data_checklist.parameter_kewenangan	    Parameter Kewenangan Izin
 * @apiBody {string(2)}    	dataNIBSTPW.data_checklist.kewenangan	            Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)
 * @apiBody {string(1)}    	dataNIBSTPW.data_checklist.flag_checklist	        Flag Checklist Komitmen (* Lihat Lampiran 28)
 * @apiBody {string(1)}    	dataNIBSTPW.data_checklist.flag_transaksional	    Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)
 * @apiBody {string(1)}    	dataNIBSTPW.data_checklist.flag_perpanjangan	    Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS
 * @apiBody {string(2)}    	dataNIBSTPW.jenis_id_user_proses	                Kode Jenis Identitas (* Lihat Lampiran 4)
 * @apiBody {string(25)}    	dataNIBSTPW.no_id_user_proses	                    No Identitas Pemroses NIB
 * @apiBody {string(100)}    	dataNIBSTPW.nama_user_proses	                    Nama User Pemroses NIB
 * @apiBody {string(50)}    	dataNIBSTPW.email_user_proses	                    Email User Pemroses NIB
 * @apiBody {string(25)}    	dataNIBSTPW.hp_user_proses	                        No HP Pemroses NIB
 * @apiBody {string(255)}    	dataNIBSTPW.alamat_user_proses	                    Alamat Pemroses NIB
 * @apiBody {string(1)}    	dataNIBSTPW.jns_kelamin_user_proses	                Jenis Kelamin Pemroses NIB (L : Laki- Laki, P : Perempuan)
 * @apiBody {string(100)}    	dataNIBSTPW.tempat_lahir_user_proses	            Tempat Lahir Pemroses NIB
 * @apiBody {string(10)}    	dataNIBSTPW.tgl_lahir_user_proses	                Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)
 * @apiBody {string(10)}    	dataNIBSTPW.daerah_id_user_proses	                ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(10)}    	dataNIBSTPW.rt_rw_user_proses	                    RT RW Pemroses NIB
 * @apiBody {string(50)}    	dataNIBSTPW.agama_user_proses	                    Agama Pemroses NIB
 * @apiBody {string(50)}    	dataNIBSTPW.status_perkawinan_user_proses	        Status Perkawinan Pemroses NIB
 * @apiBody {string(50)}    	dataNIBSTPW.pekerjaan_user_proses	                Pekerjaan Pemroses NIB
 * @apiBody {string(2)}    	dataNIBSTPW.status_nib	                            Status Penerbitan NIB (* Lihat Lampiran 14)
 * @apiBody {string(1)}    	dataNIBSTPW.tipe_dokumen 	                        Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan) 
 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *       "dataNIBSTPW": {
 *         "nib": "",
 *         "tgl_pengajuan_nib": "",
 *         "tgl_terbit_nib": "",
 *         "tgl_perubahan_nib": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "jenis_pelaku_usaha": "",
 *         "nama_pj": "",
 *         "alamat_pj": "",
 *         "paspor_pj": "",
 *         "email_pj": "",
 *         "asal_negara_pj": "",
 *         "telp_pj": "",
 *         "nama_perusahaan_ln": "",
 *         "alamat_perusahaan_ln": "",
 *         "negara_perusahaan_ln": "",
 *         "telp_perusahaan_ln": "",
 *         "jangka_waktu": "",
 *         "file_prospektus": "",
 *         "versi_pia": "",
 *         "data_checklist": [
 *           {
 *             "id_izin": "",
 *             "jenis_izin": "",
 *             "kd_izin": "",
 *             "kd_daerah": "",
 *             "nama_izin": "",
 *             "instansi": "",
 *             "id_bidang_spesifik": "",
 *             "bidang_spesifik": "",
 *             "id_kewenangan": "",
 *             "parameter_kewenangan": "",
 *             "kewenangan": "",
 *             "flag_checklist": "",
 *             "flag_transaksional": "",
 *             "flag_perpanjangan": ""
 *           }
 *         ],
 *         "jenis_id_user_proses": "",
 *         "no_id_user_proses": "",
 *         "nama_user_proses": "",
 *         "email_user_proses": "",
 *         "hp_user_proses": "",
 *         "alamat_user_proses": "",
 *         "jns_kelamin_user_proses": "",
 *         "tempat_lahir_user_proses": "",
 *         "tgl_lahir_user_proses": "",
 *         "daerah_id_user_proses": "",
 *         "rt_rw_user_proses": "",
 *         "agama_user_proses": "",
 *         "status_perkawinan_user_proses": "",
 *         "pekerjaan_user_proses": "",
 *         "status_nib": "",
 *         "tipe_dokumen ": ""
 *       }
 *     }
 * 
 * @apiSuccess (200) {Object} responreceiveNIBSTPW              Response receive NIB SPTW
 * @apiSuccess (200) {String(1)} responreceiveNIBSTPW.status       Status Respon (1 : TRUE; 2 : FALSE)
 * @apiSuccess (200) {String(255)} responreceiveNIBSTPW.keterangan   Keterangan Respon
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responreceiveNIBSTPW": {
 *     		 "status": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responreceiveNIBSTPW": {
 *     		 "status": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 */

/**
 * @api {post} /inqueryNIBSTPW Inquery NIB STPW
 * @apiVersion 4.3.19
 * @apiDescription Inquery Data Nomor Induk Berusaha (NIB) Surat Tanda Pendaftaraan Waralaba (STPW) di Sistem OSS
 * @apiName inqueryNIBSTPW
 * @apiGroup NIB
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryNIBSTPW' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *      "INQUERYNIBSTPW": {
 *         "nib": "{{nib}}"
 *      }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object}	    INQUERYNIBSTPW	        INQUERYNIBSTPW
 * @apiBody {string(13)}    	INQUERYNIBSTPW.nib	    Nomor Induk Berusaha
 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "INQUERYNIBSTPW": {
 *     		 "nib": {{nib}}
 *     	 }
 *     }
 * 
 * @apiSuccess (200) {Object}	responinqueryNIBSTPW	responinqueryNIBSTPW		
 * @apiSuccess (200) {string(3)}    	responinqueryNIBSTPW.kode	    kode		
 * @apiSuccess (200) {string(255)}    	responinqueryNIBSTPW.keterangan	    keterangan		
 * @apiSuccess (200) {Object}    	responinqueryNIBSTPW.dataNIBSTPW	    dataNIBSTPW		
 * @apiSuccess (200) {string(13)}   	responinqueryNIBSTPW.dataNIBSTPW.nib	Nomor Induk Berusaha		
 * @apiSuccess (200) {string(10)}   	responinqueryNIBSTPW.dataNIBSTPW.tgl_pengajuan_nib	Tanggal Pengajuan NIB (* Date Format YYYY-MM-DD)		
 * @apiSuccess (200) {string(10)}   	responinqueryNIBSTPW.dataNIBSTPW.tgl_terbit_nib	Tanggal Terbit NIB (* Date Format YYYY-MM-DD)		
 * @apiSuccess (200) {string(10)}   	responinqueryNIBSTPW.dataNIBSTPW.tgl_perubahan_nib	Tanggal Perubahan NIB (* Date Format YYYY-MM-DD)		
 * @apiSuccess (200) {string(25)}   	responinqueryNIBSTPW.dataNIBSTPW.oss_id	Oss ID adalah ID yang di Generate Sistem OSS dan Dikirimkan ke L/L/D Bersama Permohonan Nomor Induk Berusaha (NIB)		
 * @apiSuccess (200) {string(25)}    	responinqueryNIBSTPW.dataNIBSTPW.id_izin	    Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiSuccess (200) {string(12)}    	responinqueryNIBSTPW.dataNIBSTPW.kd_izin	    Kode Izin Sistem K/L/D (* Lihat Lampiran 8)
 * @apiSuccess (200) {string(10)}    	responinqueryNIBSTPW.dataNIBSTPW.kd_daerah	    Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )
 * @apiSuccess (200) {string(2)}    	responinqueryNIBSTPW.dataNIBSTPW.kewenangan	    Kewenangan (00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota)
 * @apiSuccess (200) {string(2)}   	responinqueryNIBSTPW.dataNIBSTPW.jenis_pelaku_usaha	Jenis Pelaku Usaha (* Lihat Lampiran 18)		
 * @apiSuccess (200) {string(25)}   	responinqueryNIBSTPW.dataNIBSTPW.nama_pj	Nama Penanggung Jawab		
 * @apiSuccess (200) {string(255)}   	responinqueryNIBSTPW.dataNIBSTPW.alamat_pj	Alamat Penanggung Jawab		
 * @apiSuccess (200) {string(20)}   	responinqueryNIBSTPW.dataNIBSTPW.paspor_pj	Nomor Paspor Penanggung Jawab		
 * @apiSuccess (200) {string(50)}   	responinqueryNIBSTPW.dataNIBSTPW.email_pj	Email Penanggung Jawab		
 * @apiSuccess (200) {string(2)}   	responinqueryNIBSTPW.dataNIBSTPW.asal_negara_pj	Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/ service/location )		
 * @apiSuccess (200) {string(50)}   	responinqueryNIBSTPW.dataNIBSTPW.telp_pj	Telpon Penanggung Jawab		
 * @apiSuccess (200) {string(255)}   	responinqueryNIBSTPW.dataNIBSTPW.nama_perusahaan_ln	Nama Prinsipal		
 * @apiSuccess (200) {string(255)}   	responinqueryNIBSTPW.dataNIBSTPW.alamat_perusahaan_ln	Alamat Prinsipal		
 * @apiSuccess (200) {string(2)}   	responinqueryNIBSTPW.dataNIBSTPW.negara_perusahaan_ln	Negara Prinsipal (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact: http://www.unece.org/cefact/locode/ service/location )		
 * @apiSuccess (200) {string(50)}   	responinqueryNIBSTPW.dataNIBSTPW.telp_perusahaan_ln	Telpon Prinsipal		
 * @apiSuccess (200) {string(10)}   	responinqueryNIBSTPW.dataNIBSTPW.jangka_waktu	Jangka Waktu (* Date Format YYYY- MM-DD)		
 * @apiSuccess (200) {string(65535)}   	responinqueryNIBSTPW.dataNIBSTPW.file_prospektus	Attachment File Prospektus dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)		
 * @apiSuccess (200) {string(2){2}} responinqueryNIBSTPW.dataNIBSTPW.skala_usaha Skala Usaha Perusahaan
 * @apiSuccess (200) {string(2){2}} responinqueryNIBSTPW.dataNIBSTPW.jenis_perubahan_terakhir Jenis Perubahan Terakhir Perusahaan
 * @apiSuccess (200) {string(5)}   	responinqueryNIBSTPW.dataNIBSTPW.versi_pia	Versi PIA OSS		
 * @apiSuccess (200) {Object[]}    	responinqueryNIBSTPW.dataNIBSTPW.data_checklist	Data checklist		
 * @apiSuccess (200) {string(25)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.id_izin	Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin		
 * @apiSuccess (200) {string(3)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.jenis_izin	Jenis Perizinan (* Lihat Lampiran 27)		
 * @apiSuccess (200) {string(13)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.kd_izin	Kode Izin Sistem K/L/D (*https://services.oss.go.id/getListIzin)		
 * @apiSuccess (200) {string(10)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.kd_daerah	Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)		
 * @apiSuccess (200) {string(255)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.nama_izin	Nama Izin		
 * @apiSuccess (200) {string(100)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.instansi	Nama Instansi		
 * @apiSuccess (200) {number(19)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.id_bidang_spesifik	ID Bidang Spesifik		
 * @apiSuccess (200) {string(65535)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.bidang_spesifik	Uraian Bidang Spesifik		
 * @apiSuccess (200) {number(19)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.id_kewenangan	ID Kewenangan		
 * @apiSuccess (200) {string(255)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.parameter_kewenangan	Parameter Kewenangan Izin		
 * @apiSuccess (200) {string(2)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.kewenangan	00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota		
 * @apiSuccess (200) {string(65535)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.file_izin	Attachment File Izin Hasil Pemenuhan Komitmen dari K/L/D dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)		
 * @apiSuccess (200) {string(65535)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.file_izin_oss	Attachment File Izin yang diterbitkan ole Lembaga OSS dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)		
 * @apiSuccess (200) {string(1)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.flag_checklist	Flag Checklist Komitmen (* Lihat Lampiran 28)		
 * @apiSuccess (200) {string(2)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.status_checklist	Status Penerbitan Izin / Checklist (* Lihat Lampiran 10)		
 * @apiSuccess (200) {string(1)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.flag_transaksional	Flag : Y/N, Flag Izin Komersial / Operasional Diajukan Transaksional (Bisa Mengajukan Berulang)		
 * @apiSuccess (200) {string(1)}	responinqueryNIBSTPW.dataNIBSTPW.data_checklist.flag_perpanjangan	Flag : Y/N, Flag Bahwa Izin Usaha Ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS		
 * @apiSuccess (200) {string(2)}   	responinqueryNIBSTPW.dataNIBSTPW.jenis_id_user_proses	Kode Jenis Identitas (* Lihat Lampiran 4)		
 * @apiSuccess (200) {string(25)}   	responinqueryNIBSTPW.dataNIBSTPW.no_id_user_proses	No Identitas Pemroses NIB		
 * @apiSuccess (200) {string(100)}   	responinqueryNIBSTPW.dataNIBSTPW.nama_user_proses	Nama User Pemroses NIB		
 * @apiSuccess (200) {string(50)}   	responinqueryNIBSTPW.dataNIBSTPW.email_user_proses	Email User Pemroses NIB		
 * @apiSuccess (200) {string(25)}   	responinqueryNIBSTPW.dataNIBSTPW.hp_user_proses	No HP Pemroses NIB		
 * @apiSuccess (200) {string(255)}   	responinqueryNIBSTPW.dataNIBSTPW.alamat_user_proses	Alamat Pemroses NIB		
 * @apiSuccess (200) {string(1)}   	responinqueryNIBSTPW.dataNIBSTPW.jns_kelamin_user_proses	Jenis Kelamin Pemroses NIB (L : Laki- Laki, P : Perempuan)		
 * @apiSuccess (200) {string(100)}   	responinqueryNIBSTPW.dataNIBSTPW.tempat_lahir_user_proses	Tempat Lahir Pemroses NIB		
 * @apiSuccess (200) {string(10)}   	responinqueryNIBSTPW.dataNIBSTPW.tgl_lahir_user_proses	Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)		
 * @apiSuccess (200) {string(10)}   	responinqueryNIBSTPW.dataNIBSTPW.daerah_id_user_proses	ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)		
 * @apiSuccess (200) {string(10)}   	responinqueryNIBSTPW.dataNIBSTPW.rt_rw_user_proses	RT RW Pemroses NIB		
 * @apiSuccess (200) {string(50)}   	responinqueryNIBSTPW.dataNIBSTPW.agama_user_proses	Agama Pemroses NIB		
 * @apiSuccess (200) {string(50)}   	responinqueryNIBSTPW.dataNIBSTPW.status_perkawinan_user_proses	Status Perkawinan Pemroses NIB		
 * @apiSuccess (200) {string(50)}   	responinqueryNIBSTPW.dataNIBSTPW.pekerjaan_user_proses	Pekerjaan Pemroses NIB		
 * @apiSuccess (200) {string(2)}   	responinqueryNIBSTPW.dataNIBSTPW.status_nib	Status Penerbitan NIB (* Lihat Lampiran 14)		
 * @apiSuccess (200) {string(1)}   	responinqueryNIBSTPW.dataNIBSTPW.tipe_dokumen 	Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)		 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "responinqueryNIBSTPW": {
 *         "kode": 200,
 *         "keterangan": "Sukses",
 *         "dataNIBSTPW": {
 *           "nib": "",
 *           "tgl_pengajuan_nib": "",
 *           "tgl_terbit_nib": "",
 *           "tgl_perubahan_nib": "",
 *           "oss_id": "",
 *           "id_izin": "-",
 *           "kd_izin": "-",
 *           "kd_daerah": "-",
 *           "kewenangan": "-",
 *           "jenis_pelaku_usaha": "",
 *           "nama_pj": "",
 *           "alamat_pj": "",
 *           "paspor_pj": "",
 *           "email_pj": "",
 *           "asal_negara_pj": "",
 *           "telp_pj": "",
 *           "nama_perusahaan_ln": "",
 *           "alamat_perusahaan_ln": "",
 *           "negara_perusahaan_ln": "",
 *           "telp_perusahaan_ln": "",
 *           "jangka_waktu": "",
 *           "file_prospektus": "",
 *           "skala_usaha": "",
 *           "jenis_perubahan_terakhir": "",
 *           "versi_pia": "",
 *           "data_checklist": [
 *             {
 *               "id_izin": "",
 *               "jenis_izin": "",
 *               "kd_izin": "",
 *               "kd_daerah": "",
 *               "nama_izin": "",
 *               "instansi": "",
 *               "id_bidang_spesifik": "",
 *               "bidang_spesifik": "",
 *               "id_kewenangan": "",
 *               "parameter_kewenangan": "",
 *               "kewenangan": "",
 *               "file_izin": "",
 *               "file_izin_oss": "",
 *               "flag_checklist": "",
 *               "status_checklist": "",
 *               "flag_transaksional": "",
 *               "flag_perpanjangan": ""
 *             }
 *           ],
 *           "jenis_id_user_proses": "",
 *           "no_id_user_proses": "",
 *           "nama_user_proses": "",
 *           "email_user_proses": "",
 *           "hp_user_proses": "",
 *           "alamat_user_proses": "",
 *           "jns_kelamin_user_proses": "",
 *           "tempat_lahir_user_proses": "",
 *           "tgl_lahir_user_proses": "",
 *           "daerah_id_user_proses": "",
 *           "rt_rw_user_proses": "",
 *           "agama_user_proses": "",
 *           "status_perkawinan_user_proses": "",
 *           "pekerjaan_user_proses": "",
 *           "status_nib": "",
 *           "tipe_dokumen ": ""
 *         }
 *       }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responinqueryNIBSTPW": {
 *     		 "kode": 400,
 *     		 "keterangan": "Data NIB tidak ditemukan",
 *         "dataNIBSTPW": []
 *     	 }
 *     }
 */

/**
 * @api {post} /fetchNIB Fetch NIB
 * @apiVersion 4.3.19
 * @apiName fetchNIB
 * @apiGroup NIB
 * @apiExample {curl} Curl Request Example:
 *  curl --location 'https://server.digitaltelkom.dev/oss-sandbox/kl/rba/fetchNIB' \
 * --header 'user_key: {{user_key}}' \
 * --header 'Content-Type: application/json' \
 * --data '{
 *  "FETCHNIB": {
 *    "nib": "{{nib}}"
 *  }
 * }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object} FETCHNIB Param Fetch NIB
 * @apiBody {string(13){13}} FETCHNIB.nib Nomor Induk Berusaha
 * @apiParamExample {json} RequestBody-Example:
 * {
 *   "FETCHNIB": {
 *      "nib": "{{nib}}"
 *    }
 * }
 * @apiSuccess (200) {Object} responfetchNIB Respon Fetch NIB
 * @apiSuccess (200) {Number(3){3}} responfetchNIB.kode Kode Respon (* Lihat Lampiran 9)
 * @apiSuccess (200) {string(255){255}} responfetchNIB.keterangan Keterangan Respon
 * @apiSuccess (200) {Object} responfetchNIB.dataNIB Data Respon
 * @apiSuccess (200) {string(24){24}} responfetchNIB.dataNIB._id Referensi Log ID
 * @apiSuccess (200) {string(13){13}} responfetchNIB.dataNIB.nib Nomor Induk Berusaha
 * @apiSuccess (200) {string(10){10}} responfetchNIB.dataNIB.tgl_pengajuan_nib Tanggal Pengajuan NIB (format date : YYYY-MM-DD)
 * @apiSuccess (200) {string(10){10}} responfetchNIB.dataNIB.tgl_terbit_nib	Tanggal Penerbitan NIB (format date : YYYY-MM-DD)
 * @apiSuccess (200) {string(10){10}} responfetchNIB.dataNIB.tgl_perubahan_nib Tanggal Perubahan NIB (format date : YYYY-MM-DD)
 * @apiSuccess (200) {string(25){25}} responfetchNIB.dataNIB.oss_id
 * Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha
 * @apiSuccess (200) {string(2){2}} responfetchNIB.dataNIB.jenis_pelaku_usaha Jenis Pelaku Usaha (* Lihat Lampiran 18)
 * @apiSuccess (200) {string(2){2}} responfetchNIB.dataNIB.jenis_perusahaan Jenis Perusahaan (* Lihat Lampiran 2)
 * @apiSuccess (200) {string(10){10}} responfetchNIB.dataNIB.skala_usaha Skala Usaha Perusahaan
 * @apiSuccess (200) {string(2)} responfetchNIB.dataNIB.status_penanaman_modal Status Penanaman Modal (* Lihat Lampiran 1)		
 * @apiSuccess (200) {string(255){255}} responfetchNIB.dataNIB.nama_perseroan Nama Perseroan
 * @apiSuccess (200) {string(255){255}} responfetchNIB.dataNIB.alamat_perseroan Alamat Perseroan
 * @apiSuccess (200) {string(7){7}} responfetchNIB.dataNIB.rt_rw_perseroan	Rt Rw Perseroan
 * @apiSuccess (200) {string(10){10}} responfetchNIB.dataNIB.perseroan_daerah_id ID Daerah Perseroan (* Menggunakan Kodefikasi
 * yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiSuccess (200) {Object[]} responfetchNIB.dataNIB.data_proyek Data Proyek		
 * @apiSuccess (200) {string(25){25}} responfetchNIB.dataNIB.data_proyek.id_proyek ID / Kode Proyek
 * @apiSuccess (200) {string(50){50}} responfetchNIB.dataNIB.data_proyek.kd_resiko Skala resiko		
 * @apiSuccess (200) {string(26){26}} responfetchNIB.dataNIB.data_proyek.nomor_proyek	Nomor Permohonan Proyek		
 * @apiSuccess (200) {string(255){255}} responfetchNIB.dataNIB.data_proyek.uraian_usaha Uraian Usaha Proyek
 * @apiSuccess (200) {Object[]} responfetchNIB.dataNIB.data_proyek.kbli Data KBLI
 * @apiSuccess (200) {string(7){7}} responfetchNIB.dataNIB.data_proyek.kbli.kbli Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)
 * @apiSuccess (200) {string(255){255}} responfetchNIB.dataNIB.data_proyek.kbli.nama_kbli Uraian KBLI
 * @apiSuccess (200) {string(25){25}} responfetchNIB.dataNIB.data_proyek.kbli.id_izin
 * Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiSuccess (200) {string(25){25}} responfetchNIB.dataNIB.data_proyek.kbli.kd_izin Kode Izin Sistem K/L/D <b>(* service getDataReferensi kode :8)</b>
 * @apiSuccess (200) {string(25){25}} responfetchNIB.dataNIB.data_proyek.kbli.tipe_oss
 * @apiSuccess (200) {string(3){3}} responfetchNIB.dataNIB.data_proyek.kbli.jenis_perizinan Jenis Perizinan (* Lihat Lampiran 27)
 * @apiSuccess (200) {string(10){10}} responfetchNIB.dataNIB.data_proyek.tgl_masa_berlaku Tanggal Masa Berlaku Perizinan
 * @apiSuccessExample {json} Succes-Response:
 * {
 *    "responfetchNIB": {
 *        "kode": 200,
 *        "keterangan": "",
 *        "dataNIB": {
 *            "_id": "",
 *            "nib": "",
 *            "tgl_pengajuan_nib": "",
 *            "tgl_terbit_nib": "",
 *            "tgl_perubahan_nib": "",
 *            "oss_id": "",
 *            "jenis_pelaku_usaha": null,
 *            "jenis_perusahaan": "",
 *            "skala_usaha": "",
 *            "status_penanaman_modal": "",
 *            "nama_perseroan": "",
 *            "alamat_perseroan": "",
 *            "rt_rw_perseroan": "",
 *            "perseroan_daerah_id": "",
 *            "data_proyek": [
 *                {
 *                    "id_proyek": "",
 *                    "kd_resiko": null,
 *                    "uraian_usaha": "",
 *                    "kbli": [
 *                        {
 *                            "kbli": "",
 *                            "nama_kbli": "",
 *                            "id_izin": "",
 *                            "no_izin": null,
 *                            "kd_izin": "",
 *                            "tipe_oss": "",
 *                            "jenis_perizinan": "",
 *                            "tgl_masa_berlaku": null
 *                        }
 *                    ]
 *                }
 *            ]
 *        },
 *        "meta": null
 *    }
 * }
 * 
 * @apiError (400) {Object} responfetchNIB Data Response Fetch NIB
 * @apiError (400) {Number(3){3}} responfetchNIB.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (400) {String(255)} responfetchNIB.keterangan Keterangan Respon (Data Parameter Salah)
 * @apiError (400) {Object} [responfetchNIB.dataNIB] Respon Data
 * @apiError (400) {Object} [responfetchNIB.meta] Informasi Tambahan Response
 * @apiError (400) {String(50){50}} [responfetchNIB.meta.message] Pesan Informasi
 * @apiERror (400) {String(25){25}} [responfetchNIB.meta.field] Param
 * @apiError (401) {Number(3){3}} responfetchNIB.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (401) {String(255)} responfetchNIB.keterangan Keterangan Respon (User Akses Tidak Valid)
 * @apiError (403) {Number(3){3}} responfetchNIB.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (403) {String(255)} responfetchNIB.keterangan Keterangan Respon (Ilegal Inquiry / Akses.)
 * @apiError (404) {Number(3){3}} responfetchNIB.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (404) {String(255)} responfetchNIB.keterangan Keterangan Respon (Data / Service Tidak Ditemukan.)
 * @apiError (405) {Number(3){3}} responfetchNIB.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (405) {String(255)} responfetchNIB.keterangan Keterangan Respon (Akses Service Ditolak)
 * @apiError (500) {Number(3){3}} responfetchNIB.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (500) {String(255)} responfetchNIB.keterangan Keterangan Respon (Proses Payload Data Di Sistem OSS Gagal)
 * @apiError (504) {Number(3){3}} responfetchNIB.kode Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (504) {String(255)} responfetchNIB.keterangan Keterangan Respon (Proses Payload Data Di Sistem OSS Timeout)
 * @apiErrorExample Error-Response:
 * {
 *    "responfetchNIB": {
 *      "kode": 400,
 *      "keterangan": "parameter tidak ditemukan",
 *      "dataNIB": null,
 *      "meta": [
 *          {
 *               "message": "nib is required",
 *               "field": "nib"
 *          }
 *       ]
 *    }

 *}
 */

/**
 * @api {post} /inqueryProyek Inquery Proyek
 * @apiVersion 4.3.19
 * @apiDescription Get Data Proyek di Sistem OSS
 * @apiName inqueryProyek
 * @apiGroup Proyek
 * @apiExample {curl} Curl Request Example:
 * curl --location 'https://server.digitaltelkom.dev/oss-sandbox/kl/rba/inqueryProyek' \
 * --header 'user_key: {{user_key}}' \
 * --header 'Content-Type: application/json' \
 * --data '{
 *     "nib": "{{nib}}",
 *     "id_proyek": "{{id_proyek}}"
 *     "kbli": {{kbli}} // optional
 * }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {string(13){13}} nib Nomor Induk Berusaha
 * @apiBody {string(25){25}} id_proyek ID Proyek
 * @apiBody {string(5){5}} [kbli] Kode KBLI <b>(* Menggunakan Kode KBLI Tahun 2020)</b>
 * @apiParamExample {json} RequestBody-Example:
 * {
 *   "nib": "{{nib}}",
 *   "id_proyek": "{{id_proyek}}",
 *   "kbli": "{{kbli}}" //optional
 * }
 * @apiSuccess (200) {Number(3){3}} kode_status Kode Respon (* Lihat Lampiran 9)
 * @apiSuccess (200) {string(255){255}} keterangan Keterangan Respon
 * @apiSuccess (200) {Object} data Data Respon
 * @apiSuccess (200) {string(150){150}} data.nama_perusahaan Nama Perusahaan
 * @apiSuccess (200) {string(255){255}} data.alamat_perusahaan Alamat Perusahaan
 * @apiSuccess (200) {string(16){16}} data.npwp_perusahaaan NPWP Perusahaan
 * @apiSuccess (200) {string(2){2}} data.jenis_pelaku_usaha Jenis Pelaku Usaha <b>(* Lihat Lampiran 18)</b>
 * @apiSuccess (200) {string(10){10}} data.tgl_terbit_nib Tanggal Terbit NIB
 * @apiSuccess (200) {string(2){2}} data.skala_usaha Skala Usaha Perusahaan
 * @apiSuccess (200) {Object[]} data.data_proyek Data Proyek
 * @apiSuccess (200) {String(25){25}} data.data_proyek.id_proyek ID Proyek
 * @apiSuccess (200) {number(5){5}} data.data_proyek.kbli Kode KBLI <b>(* Menggunakan Kode KBLI Tahun 2020)</b>
 * @apiSuccess (200) {String(16){16}} [data.data_proyek.npwp_kantor_cabang] NPWP Kantor Cabang
 * @apiSuccess (200) {String(2){2}} data.data_proyek.skala_usaha Skala Usaha Perusahaan
 * @apiSuccess (200) {String(10){10}} data.data_proyek.tgl_pengajuan_proyek Tanggal Pengajuan Proyek (format date: YYYY-MM-DD)
 * @apiSuccess (200) {String(65535){65535}} data.data_proyek.alamat_usaha Alamat Kegiatan Proyek / Usaha
 * @apiSuccess (200) {String(10){10}} data.data_proyek.kd_daerah Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )
 * @apiSuccess (200) {Number(19){19}} data.data_proyek.sub_jumlah Jumlah Asset (Valuta:IDR)
 * @apiSuccess (200) {Number(19){19}} data.data_proyek.modal_kerja Nilai Modal Kerja (Valuta:IDR)
 * @apiSuccess (200) {Number(19){19}} data.data_proyek.jumlah_investasi Nilai Jumlah Investasi (Valuta:IDR)
 * @apiSuccess (200) {Object[]} data.data_proyek.fasilitas Data Fasilitas
 * @apiSuccess (200) {String(2){2}} data.data_proyek.fasilitas.flag_fasilitas Jenis Fasilitas IKN
 * <br>00: Non-IKN
 * <br>01: IKN - Penanaman Modal
 * <br>02: Dearah Mitra
 * <br>03: IKN - Pembuatan / Pemindahan Kantor Pusat
 * <br>04: IKN - Financial Center
 * @apiSuccess (200) {String(25){25}} data.data_proyek.fasilitas.id_permohonan_fasilitas ID Permohonan Fasilitas
 * @apiSuccess (200) {String(50){50}} data.data_proyek.fasilitas.nomor_kmk_fasilitas Nomor KMK Fasilitas
 * @apiSuccess (200) {String(10){10}} data.data_proyek.fasilitas.tgl_persetujuan_fasilitas Tanggal Persetujuan Fasilitas
 * @apiSuccess (200) {Object} data.data_proyek.data_teknis_lokasi Data Teknis Lokasi
 * @apiSuccess (200) {Number(20){20}} data.data_proyek.data_teknis_lokasi.luas_tanah_disetujui Luas Tanah Disetujui
 * @apiSuccess (200) {String(2){2}} data.data_proyek.data_teknis_lokasi.satuan_luas_tanah_disetujui Satuan Luas Tanah Disetujui <b>(*Lihat Lampiran 17)</b>
 * @apiSuccess (200) {Object} data.data_proyek.data_checklist Data Checklist
 * @apiSuccess (200) {String(25){25}} data.data_proyek.data_checklist.id_izin Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiSuccess (200) {String(25){25}} data.data_proyek.data_checklist.kd_izin Kode Izin Sistem K/L/D <b>(* service getDataReferensi kode :8)</b>
 * @apiSuccess (200) {String(255){255}} data.data_proyek.data_checklist.nama_izin Nama Izin
 * @apiSuccess (200) {String(255){255}} data.data_proyek.data_checklist.no_izin Nomor Izin
 * @apiSuccess (200) {String(255){255}} data.data_proyek.data_checklist.tgl_izin Tanggal Izin (* Format : YYYY-MM-DD)
 * @apiSuccess (200) {Object} data.data_proyek.satu_lini Data Satu Lini
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.nib_satu_lini ID NIB Satu Lini
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.id_proyek_satu_lini ID / Kode Proyek Satu Lini
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.flag_utama Y : Satu Lini Utama / N : Satu Lini Non Utama
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.kbli Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.urutan_lini Urutan Lini
 * @apiSuccess (200) {String(255){255}} data.data_proyek.satu_lini.jenis_kegiatan_usaha Jenis Kegiatan Usaha (* 01 : Utama / 02 : Pendukung)
 * @apiSuccess (200) {String(255){255}} data.data_proyek.satu_lini.upload_flowchart URL File Upload Flowchart
 * @apiSuccess (200) {String(20){20}} data.data_proyek.satu_lini.id_resiko ID Resiko yang di Generate Sistem OSS
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.id_kbli_kewenangan ID KBLI Kewenangan
 * @apiSuccess (200) {String(2){2}} data.data_proyek.satu_lini.kd_resiko Resiko KBLI
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.pembelian_pematang_tanah Harga Pembelian Pematang Tahan
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.bangunan_gedung Harga Bangunan Gedung
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.mesin_peralatan Harga Mesin Peralatan
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.mesin_peralatan_usd Harga USD Mesin Peralatan
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.investasi_lain Jumlah Investasi Lain
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.modal_kerja Jumlah Modal Kerja
 * @apiSuccess (200) {String(25){25}} data.data_proyek.satu_lini.jumlah_investasi Jumlah Investasi
 * @apiSuccessExample {json} Succes-Response:
 * {
 *   "kode_status": 200,
 *   "keterangan": "sukses",
 *   "data": {
 *     "nama_perusahaan": "",
 *     "alamat_perseroan": "",
 *     "npwp_perusahaan": "",
 *     "jenis_pelaku_usaha": "",
 *     "tgl_terbit_nib": "",
 *     "skala_usaha_final": "",
 *     "data_proyek": [
 *       {
 *         "id_proyek": "",
 *         "kbli": "",
 *         "npwp_kantor_cabang": "",
 *         "skala_usaha": "",
 *         "tgl_pengajuan_proyek": "",
 *         "alamat_usaha": "",
 *         "kd_daerah": "",
 *         "sub_jumlah": 0,
 *         "modal_kerja": 0,
 *         "jumlah_investasi": 0,
 *         "fasilitas": [
 *           {
 *             "flag_fasilitas": "",
 *             "id_permohonan_fasilitas": "",
 *             "nomor_kmk_fasilitas": "",
 *             "tgl_persetujuan_fasilitas": ""
 *           }
 *         ],
 *         "data_teknis_lokasi": {
 *           "luas_tanah_disetujui": 0,
 *           "satuan_luas_tanah_disetujui": ""
 *         },
 *         "data_checklist": [
 *           {
 *             "id_izin": "",
 *             "kd_izin": "",
 *             "nama_izin": "",
 *             "no_izin": "",
 *             "tgl_izin": ""
 *           }
 *         ],
 *         "satu_lini": [
 *           {
 *             "nib_satu_lini": null,
 *             "id_proyek_satu_lini": null,
 *             "flag_utama": null,
 *             "kbli": null,
 *             "urutan_lini": null,
 *             "jenis_kegiatan_usaha": null,
 *             "upload_flowchart": null,
 *             "id_resiko": null,
 *             "id_kbli_kewenangan": null,
 *             "kd_resiko": null,
 *             "pembelian_pematang_tanah": null,
 *             "bangunan_gedung": null,
 *             "mesin_peralatan": null,
 *             "mesin_peralatan_usd": null,
 *             "investasi_lain": null,
 *             "sub_jumlah": null,
 *             "modal_kerja": null,
 *             "jumlah_investasi": null
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * }
 * 
 * @apiError (400) {Number(3){3}} kode_status Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (400) {String(255)} keterangan Keterangan Respon (Data Parameter Salah)
 * @apiError (400) {Object} [data] Data Response
 * @apiError (400) {Object} meta Informasi Tambahan Response
 * @apiError (400) {String(50){50}} meta.message Pesan Informasi
 * @apiERror (400) {String(25){25}} meta.field Param
 * @apiError (401) {Number(3){3}} kode_status Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (401) {String(255)} keterangan Keterangan Respon (User Akses Tidak Valid)
 * @apiError (403) {Number(3){3}} kode_status Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (403) {String(255)} keterangan Keterangan Respon (Ilegal Inquiry / Akses.)
 * @apiError (404) {Number(3){3}} kode_status Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (404) {String(255)} keterangan Keterangan Respon (Data / Service Tidak Ditemukan.)
 * @apiError (405) {Number(3){3}} kode_status Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (405) {String(255)} keterangan Keterangan Respon (Akses Service Ditolak)
 * @apiError (500) {Number(3){3}} kode_status Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (500) {String(255)} keterangan Keterangan Respon (Proses Payload Data Di Sistem OSS Gagal)
 * @apiError (504) {Number(3){3}} kode_status Kode Respon <b>(* Lihat Lampiran 9)</b>
 * @apiError (504) {String(255)} keterangan Keterangan Respon (Proses Payload Data Di Sistem OSS Timeout)
 * @apiErrorExample Error-Response:
 * {
 *   "kode_status": 400,
 *   "keterangan": "parameter tidak ditemukan",
 *   "data": null,
 *   "meta": [
 *       {
 *           "message": "nib is required",
 *           "field": "nib"
 *       },
 *       {
 *           "message": "id_proyek is required",
 *           "field": "id_proyek"
 *       }
 *   ]
 *}
 */

/**
 * @api {post} /getDataReferensi Get Data Referensi
 * @apiVersion 4.3.19
 * @apiDescription Get Data Referensi di Sistem OSS
 * @apiName getDataReferensi
 * @apiGroup Referensi
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/getDataReferensi' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *      "GETDATAREFERENSI": {
 *      "kode": "1234"
 *      }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object}	    GETDATAREFERENSI	    GETDATAREFERENSI
 * @apiBody {string(3)}    	GETDATAREFERENSI.kode	Kode Referensi (* Lihat Lampiran 29)

 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "GETDATAREFERENSI": {
 *     		 "kode": ""
 *     	 }
 *     }
 * 
 * @apiSuccess (200) {Object}	    respongetDataReferensi	                respongetDataReferensi
 * @apiSuccess (200) {string(3)}    	respongetDataReferensi.kode	            Kode Respon (*Lihat Lampiran 9)
 * @apiSuccess (200) {string(255)}    	respongetDataReferensi.keterangan	    Keterangan Respon
 * @apiSuccess (200) {Object[]}    	respongetDataReferensi.dataReferensi	Data referensi    
 * @apiSuccess (200) {string(25)}    	respongetDataReferensi.dataReferensi.kode_referensi	    Kode Data Referensi
 * @apiSuccess (200) {string(65535)}    	respongetDataReferensi.dataReferensi.uraian_referensi	    Uraian Data Referensi
 * @apiSuccess (200) {string(255)}    	respongetDataReferensi.dataReferensi.keterangan_referensi	    Keterangan Data Referensi
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "respongetDataReferensi": {
 *         "kode": "",
 *         "keterangan": "",
 *         "dataReferensi": [
 *           {
 *             "kode_referensi": "",
 *             "uraian_referensi": "",
 *             "keterangan_referensi": ""
 *           }
 *         ]
 *       }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "respongetDataReferensi": {
 *     		 "kode": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 */

/**
 * @api {post} /receiveFileDS Receive File DS
 * @apiVersion 4.3.19
 * @apiDescription Mengirimkan Data File Izin Yang diterbitkan oleh OSS dan Sudah Di Tanda Tangani Secara Elektronik dari Sistem OSS ke Sistem K/L/D
 * @apiName receiveFileDS
 * @apiGroup File DS
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveFileDS' \
 *     --header 'Token: {token}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *         "receiveFileDS":
 *          {
 *             "id_izin": "",
 *             "nib": "",
 *             "file_izin": ""
 *         }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} Token SHA1(USERNAME+PASSWORD+NIB+DATE(Ymd))
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "Token": "OSS000qw13242628gssssss812345654709820180514"
 *     }
 * @apiBody {Object}	    receiveFileDS	            AKTA
 * @apiBody {string(3)}    	receiveFileDS.id_izin	    ID izin
 * @apiBody {string(13)}    	receiveFileDS.nib	        Nomor Induk Berusaha
 * @apiBody {string(65535)}    	receiveFileDS.file_izin	    URL File Izin
 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "receiveFileDS": {
 *     		 "id_izin": "",
 *     		 "nib": "",
 *     		 "file_izin": ""
 *     	 }
 *     }
 * @apiSuccess (200) {Object} responreceiveFileDS               Response receive File DS
 * @apiSuccess (200) {String(1)} responreceiveFileDS.status        Kode status (1: TRUE; 2: FALSE) 
 * @apiSuccess (200) {String(255)} responreceiveFileDS.keterangan    Keterangan Respon
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responreceiveFileDS": {
 *     		 "status": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responreceiveFileDS": {
 *     		 "status": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 */

/**
 * @api {post} /receiveNIBKKPR Receive NIB KKPR
 * @apiVersion 4.3.19
 * @apiDescription Menerima Data Legal Akta Pendirian & Pngesahan serta NPWP dari sistem AHU Online Kemenkumham ke Sisitem OSS
 * @apiName receiveNIBKKPR
 * @apiGroup NIB
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveNIBKKPR' \
 *     --header 'Token: {{token}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *       "dataNIB": {
 *         "tgl_terkirim_oss": "",
 *         "nib": "",
 *         "tgl_pengajuan_nib": "",
 *         "tgl_terbit_nib": "",
 *         "tgl_perubahan_nib": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "jenis_pelaku_usaha": "",
 *         "no_npp": "",
 *         "no_va": "",
 *         "no_wlkp": "",
 *         "flag_perusahaan": "",
 *         "flag_ekspor": "",
 *         "flag_impor": "",
 *         "jenis_api": "",
 *         "gabung_negara": "",
 *         "negara_pma_dominan": "",
 *         "total_pma": "",
 *         "nilai_pma_dominan": "",
 *         "nilai_pmdn": "",
 *         "persen_pma": "",
 *         "persen_pmdn": "",
 *         "kd_kawasan": "",
 *         "jenis_kawasan": "",
 *         "versi_pia": "",
 *         "jangka_waktu": "",
 *         "status_badan_hukum": "",
 *         "status_penanaman_modal": "",
 *         "npwp_perseroan": "",
 *         "nama_perseroan": "",
 *         "nama_singkatan": "",
 *         "jenis_perseroan": "",
 *         "status_perseroan": "",
 *         "alamat_perseroan": "",
 *         "rt_rw_perseroan": "",
 *         "kelurahan_perseroan": "",
 *         "perseroan_daerah_id": "",
 *         "kode_pos_perseroan": "",
 *         "nomor_telpon_perseroan": "",
 *         "email_perusahaan": "",
 *         "dalam_bentuk_uang": "",
 *         "dalam_bentuk_lain": "",
 *         "total_modal_dasar": "",
 *         "total_modal_ditempatkan": "",
 *         "flag_umk": "",
 *         "flag_perubahan_data_teknis": "",
 *         "skala_usaha": "",
 *         "jenis_perubahan_terakhir": "",
 *         "pemegang_saham": [
 *           {
 *             "jenis_pemegang_saham": "",
 *             "flag_asing": "",
 *             "total_modal_pemegang": "",
 *             "jabatan_pemegang_saham": "",
 *             "nama_pemegang_saham": "",
 *             "jns_identitas_pemegang_saham": "",
 *             "no_identitas_pemegang_saham": "",
 *             "valid_identitas_pemegang_saham": "",
 *             "negara_asal_pemegang_saham": "",
 *             "pengendali_pemegang_saham": "",
 *             "npwp_pemegang_saham": "",
 *             "alamat_pemegang_saham": "",
 *             "fax_pemegang_saham": "",
 *             "email_pemegang_saham": "",
 *             "flag_pajak_pemegang_saham": "",
 *             "ket_pajak_pemegang_saham": ""
 *           }
 *         ],
 *         "penanggung_jwb": [
 *           {
 *             "flag_asing": "",
 *             "jns_identitas_penanggung_jwb": "",
 *             "no_identitas_penanggung_jwb": "",
 *             "nama_penanggung_jwb": "",
 *             "jabatan_penanggung_jwb": " ",
 *             "kebangsaan_penanggung_jwb": "",
 *             "negara_asal_penanggung_jwb": "",
 *             "npwp_penanggung_jwb": "",
 *             "alamat_penanggung_jwb": "",
 *             "jalan_penanggung_jwb": "",
 *             "blok_penanggung_jwb": "",
 *             "no_penanggung_jwb": "",
 *             "rt_rw_penanggung_jwb": "",
 *             "kelurahan_penanggung_jwb": "",
 *             "daerah_id_penanggung_jwb": "",
 *             "kode_pos_penanggung_jwb": "",
 *             "no_telp_penanggung_jwb": "",
 *             "no_hp_penanggung_jwb": "",
 *             "no_fax_penanggung_jwb": "",
 *             "email_penanggung_jwb": "",
 *             "flag_pajak_penanggung_jwb": "",
 *             "ket_pajak_penanggung_jwb": ""
 *           }
 *         ],
 *         "no_pengesahan": "",
 *         "tgl_pengesahan": "",
 *         "no_akta_lama": "",
 *         "tgl_akta_lama": "",
 *         "no_pengesahan_lama": "",
 *         "tgl_pengesahan_lama": "",
 *         "legalitas": [
 *           {
 *             "jenis_legal": "",
 *             "no_legal": "",
 *             "tgl_legal": "",
 *             "alamat_notaris": "",
 *             "nama_notaris": "",
 *             "telepon_notaris": ""
 *           }
 *         ],
 *         "data_rptka": {
 *           "jenis_rptka": "",
 *           "no_rptka": "",
 *           "rptka_awal": "",
 *           "rptka_akhir": "",
 *           "rptka_gaji": "",
 *           "jumlah_tka_rptka": "",
 *           "jangka_penggunaan_waktu": "",
 *           "jangka_waktu_permohonan_rptka": "",
 *           "rptka_jabatan": [
 *             {
 *               "id_jabatan": "",
 *               "jabatan": "",
 *               "jumlah": "",
 *               "tgl_mulai": "",
 *               "tgl_selesai": "",
 *               "keterangan": "",
 *               "rptka_tki_pendamping": [
 *                 {
 *                   "id_jabatan": "",
 *                   "id_pendamping": "",
 *                   "nama": "",
 *                   "nik": "",
 *                   "jabatan": "",
 *                   "hp": "",
 *                   "email": "",
 *                   "foto": "",
 *                   "pendidikan_min": "",
 *                   "sertifikat": "",
 *                   "pengalaman_kerja": "",
 *                   "keterangan": ""
 *                 }
 *               ]
 *             }
 *           ],
 *           "rptka_negara": [
 *             {
 *               "id_negara": "",
 *               "jumlah": ""
 *             }
 *           ],
 *           "rptka_lokasi": [
 *             {
 *               "lokasi_id": "",
 *               "jumlah": ""
 *             }
 *           ]
 *         },
 *         "data_proyek": [
 *           {
 *             "id_proyek": "",
 *             "nomor_proyek": "",
 *             "uraian_usaha": "",
 *             "jumlah_tki_l": "",
 *             "jumlah_tki_p": "",
 *             "jumlah_tka_l": "",
 *             "jumlah_tka_p": "",
 *             "kbli": "",
 *             "sektor": "",
 *             "memiliki_menguasai": "",
 *             "jenis_lokasi": "",
 *             "status_tanah": "",
 *             "luas_tanah": "",
 *             "satuan_luas_tanah": "",
 *             "pembelian_pematang_tanah": "",
 *             "bangunan_gedung": "",
 *             "mesin_peralatan": "",
 *             "mesin_peralatan_usd": "",
 *             "investasi_lain": "",
 *             "sub_jumlah": "",
 *             "modal_kerja": "",
 *             "jumlah_investasi": "",
 *             "tanggal_kurs": "",
 *             "nilai_kurs": "",
 *             "kd_kawasan": "",
 *             "jawab_lokasi_b": "",
 *             "jawab_lokasi_c": "",
 *             "jawab_lokasi_d": "",
 *             "jawab_lokasi_e": "",
 *             "jawab_lokasi_f": "",
 *             "jawab_lokasi_g": "",
 *             "flag_perluasan": "",
 *             "flag_cabang": "",
 *             "npwp_cabang": "",
 *             "nama_cabang": "",
 *             "jenis_identitas_pj": "",
 *             "no_identitas_pj": "",
 *             "nama_pj": "",
 *             "status_proyek": "",
 *             "jenis_proyek": "",
 *             "nama_kegiatan": "",
 *             "flag_merger": "",
 *             "npwp_perseroan_merger": "",
 *             "nama_perseroan_merger": "",
 *             "jumlah_lantai_bangunan": "",
 *             "luas_lantai_bangunan": "",
 *             "flag_psn": "",
 *             "pasal_181_a": "",
 *             "file_pasal_181_a": "",
 *             "pasal_181_b": "",
 *             "file_pasal_181_b": "",
 *             "pasal_181_c": "",
 *             "pasal_181_d": "",
 *             "pasal_181_3": "",
 *             "flag_obyek_vital_nasional": "",
 *             "nama_perairan": "",
 *             "kedalaman": "",
 *             "file_rencana_teknis": "",
 *             "flag_multi_kbli": "",
 *             "id_proyek_utama": "",
 *             "jumlah_multi_kbli": 0,
 *             "data_lokasi_proyek": [
 *               {
 *                 "id_proyek_lokasi": "",
 *                 "proyek_daerah_id": "",
 *                 "kd_kawasan": "",
 *                 "alamat_usaha": "",
 *                 "id_kegiatan": "",
 *                 "response_kegiatan": "",
 *                 "jenis_kawasan": "",
 *                 "jenis_lokasi": "",
 *                 "status_lokasi": "",
 *                 "data_lokasi_proyek_shp": "",
 *                 "data_lokasi_proyek": [
 *                   {
 *                     "serial": "",
 *                     "lat_lng": ""
 *                   }
 *                 ],
 *                 "data_posisi_proyek": [
 *                   {
 *                     "id_proyek_posisi": "",
 *                     "id_proyek_lokasi": "",
 *                     "posisi_lokasi": ""
 *                   }
 *                 ],
 *                 "data_investasi": {
 *                    "jenis_akumulasi": "",
 *                    "modal_kerja": 0,
 *                    "jumlah_investasi": 0
 *                 }
 *               }
 *             ],
 *             "data_proyek_produk": [
 *               {
 *                 "id_produk": "",
 *                 "id_proyek": "",
 *                 "kbli": "",
 *                 "id_bidang_usaha": "",
 *                 "jenis_produksi": "",
 *                 "kapasitas": "",
 *                 "satuan": "",
 *                 "merk_dagang": "",
 *                 "pemegang_haki": "",
 *                 "pemegang_paten": "",
 *                 "pi_nomor": "",
 *                 "pi_tanggal": "",
 *                 "pi_npwp": "",
 *                 "id_kbli_ta": "",
 *                 "tkdn": ""
 *               }
 *             ]
 *           }
 *         ],
 *         "data_dni": [
 *           {
 *             "kd_dni": ""
 *           }
 *         ],
 *         "data_checklist": [
 *           {
 *             "id_produk": "",
 *             "id_proyek": "",
 *             "id_izin": "",
 *             "jenis _izin": "",
 *             "kd_izin": "",
 *             "kd_daerah": "",
 *             "nama_izin": "",
 *             "instansi": "",
 *             "id_bidang_spesifik": "",
 *             "bidang_spesifik": "",
 *             "id_kewenangan": "",
 *             "parameter_kewenangan": "",
 *             "kewenangan": "",
 *             "flag_checklist": "",
 *             "flag_transaksional": "",
 *             "flag_perpanjangan": "",
 *             "no_izin": "",
 *             "tgl_izin": "",
 *             "file_izin": "",
 *             "data_persyaratan": [
 *               {
 *                 "id_syarat": "",
 *                 "no_dokumen": "",
 *                 "tgl_dokumen": "",
 *                 "file_dokumen": "",
 *                 "keterangan": ""
 *               }
 *             ]
 *           }
 *         ],
 *         "jenis_id_user_proses": "",
 *         "no_id_user_proses": "",
 *         "nama_user_proses": "",
 *         "email_user_proses": "",
 *         "hp_user_proses": "",
 *         "alamat_user_proses": "",
 *         "jns_kelamin_user_proses": "",
 *         "tempat_lahir_user_proses": "",
 *         "tgl_lahir_user_proses": "",
 *         "daerah_id_user_proses": "",
 *         "rt_rw_user_proses": "",
 *         "agama_user_proses": "",
 *         "status_perkawinan_user_proses": "",
 *         "pekerjaan_user_proses": "",
 *         "status_nib": "",
 *         "tipe_dokumen ": ""
 *       }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} Token SHA1(USERNAME+PASSWORD+NIB+DATE(Ymd))
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "Token": "OSS000qw13242628gssssss812345654709820180514"
 *     }
 * @apiBody {Object}	dataNIB	dataNIB
 * @apiBody {string(19){19}} dataNIB.tgl_terkirim_oss Tanggal Pengiriman NIB
 * @apiBody {string(13){13}} dataNIB.nib	Nomor Induk Berusaha
 * @apiBody {string(10){10}} dataNIB.tgl_pengajuan_nib	Tanggal Pengajuan NIB (format date : YYYY-MM-DD)
 * @apiBody {string(10){10}} dataNIB.tgl_terbit_nib	Tanggal Penerbitan NIB (format date : YYYY-MM-DD)
 * @apiBody {string(10){10}} dataNIB.tgl_perubahan_nib	Tanggal Perubahan NIB (format date : YYYY-MM-DD)
 * @apiBody {string(25){25}} dataNIB.oss_id	Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha
 * @apiBody {string(25){25}} dataNIB.id_izin	Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {string(12){12}} dataNIB.kd_izin	Kode Izin Sistem K/L/D (* Lihat Lampiran 8)
 * @apiBody {string(10){10}} dataNIB.kd_daerah	Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(2){2}} dataNIB.kewenangan	00: Kewenangan Pusat;  01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota
 * @apiBody {string(2){2}} dataNIB.jenis_pelaku_usaha	Jenis Pelaku Usaha (* Lihat Lampiran 18)
 * @apiBody {string(20){20}} dataNIB.no_npp	Nomor Pendaftaraan Perusahaan Untuk BPJS Ketenagakerjaan
 * @apiBody {string(20){20}} dataNIB.no_va	Nomor Pendaftaraan Perusahaan Untuk BPJS Kesehatan
 * @apiBody {string(23){23}} dataNIB.no_wlkp	Nomor Wajib Lapor Ketenagakerjaan Perusahaan
 * @apiBody {string(1){1}} dataNIB.flag_perusahaan	Flag :Y = Untuk Perusahaan Baru,N = Untuk Perusahaan Lama / Exist
 * @apiBody {string(1){1}} dataNIB.flag_ekspor	Y : Melakukan Aktifikas Ekspor, N : Tidak Melakukan Aktifitas Ekspor
 * @apiBody {string(1){1}} dataNIB.flag_impor	Y : Melakukan Aktifikas Impor, N : Tidak Melakukan Aktifitas Impor
 * @apiBody {string(2){2}} dataNIB.jenis_api	Jenis Angka Pengenal Impor (API) (* Lihat Lampiran 3)
 * @apiBody {string(1){1}} dataNIB.gabung_negara	PMA Merupakan Gabungan Negara Atau Tidak (* Y:Gabungan Negara, N: Bukan Gabungan Negara)
 * @apiBody {string(2){2}} dataNIB.negara_pma_dominan	Negara Asing Yang Memiliki Modal Mayoritas
 * @apiBody {number(20.2){20}} dataNIB.total_pma	Total Modal PMA
 * @apiBody {number(20.2){20}} dataNIB.nilai_pma_dominan	Nilai Modal PMA Dominan
 * @apiBody {number(20.2){20}} dataNIB.nilai_pmdn	Nilai Modal PMDN
 * @apiBody {number(9.2){9}} dataNIB.persen_pma	Persentase Modal PMA
 * @apiBody {number(9.2){9}} dataNIB.persen_pmdn	Persentase Modal PMDN
 * @apiBody {number(5){5}} dataNIB.kd_kawasan	Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/portal/lstKawasan)
 * @apiBody {string(2){2}} dataNIB.jenis_kawasan	Jenis Kawasan (* Lihat Lampiran 21)
 * @apiBody {string(5){5}} dataNIB.versi_pia	Versi PIA OSS
 * @apiBody {string(10){10}} dataNIB.jangka_waktu	Jangka Waktu (format date : YYYY-MM-DD)
 * @apiBody {string(2){2}} dataNIB.status_badan_hukum	Status Badan Hukum (* Lihat Lampiran 12)
 * @apiBody {string(2){2}} dataNIB.status_penanaman_modal	Status Penanaman Modal (* Lihat Lampiran 1)
 * @apiBody {string(15){15}} dataNIB.npwp_perseroan	NPWP Perseroan
 * @apiBody {string(255){255}} dataNIB.nama_perseroan	Nama Perseroan
 * @apiBody {string(255){255}} dataNIB.nama_singkatan	Nama Singkatan Perseroan
 * @apiBody {string(2){2}} dataNIB.jenis_perseroan	Jenis Perseroan (* Lihat Lampiran 2)
 * @apiBody {string(1){1}} dataNIB.status_perseroan	Status Perseroan (*Y: Terbuka, N:Tertutup)
 * @apiBody {string(255){255}} dataNIB.alamat_perseroan	Alamat Perseroan
 * @apiBody {string(7){7}} dataNIB.rt_rw_perseroan	Rt Rw Perseroan
 * @apiBody {string(50){50}} dataNIB.kelurahan_perseroan	Kelurahan Perseroan
 * @apiBody {string(10){10}} dataNIB.perseroan_daerah_id	ID Daerah Perseroan (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(5){5}} dataNIB.kode_pos_perseroan	Kode Pos Perseroan
 * @apiBody {string(20){20}} dataNIB.nomor_telpon_perseroan	Nomor Telepon Perseroan
 * @apiBody {string(100){100}} dataNIB.email_perusahaan	Email Perusahaan
 * @apiBody {number(20.0){20}} dataNIB.dalam_bentuk_uang	Modal Dalam Bentuk Uang (Valuta : IDR)
 * @apiBody {string(50000){50000}} dataNIB.dalam_bentuk_lain	Modal Dalam Bentuk Lainnya
 * @apiBody {number(20.0){20}} dataNIB.total_modal_dasar	Total Modal Dasar (Valuta : IDR)
 * @apiBody {number(20.0){20}} dataNIB.total_modal_ditempatkan	Total Modal Ditempatkan (Valuta : IDR)
 * @apiBody {string(1){1}} dataNIB.flag_umk	    flag_umk
 * @apiBody {string(10){10}} dataNIB.skala_usaha Skala Usaha Perusahaan
 * @apiBody {string(2){2}} dataNIB.jenis_perubahan_terakhir Jenis Perubahan Terakhir Perusahaan
 * @apiBody {string(1){1}} dataNIB.flag_perubahan_data_teknis Flag perubahan data teknis (jika value: N/null = Bukan Perubahan Data Jenis, value: Y = Perubahan data teknis)
 * @apiBody {Object[]} dataNIB.pemegang_saham	Data pemegang saham
 * @apiBody {string(2){2}} dataNIB.pemegang_saham.jenis_pemegang_saham	Jenis Pemegang Saham (* Lihat Lampiran 13)
 * @apiBody {string(1){1}} dataNIB.pemegang_saham.flag_asing	Asal Pemegang Saham dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)
 * @apiBody {string(20.0){20}} dataNIB.pemegang_saham.total_modal_pemegang	Total Modal Pemegang Saham (Valuta : IDR)
 * @apiBody {string(50){50}} dataNIB.pemegang_saham.jabatan_pemegang_saham	Jabatan Pemegang Saham
 * @apiBody {string(500){500}} dataNIB.pemegang_saham.nama_pemegang_saham	Nama Pemegang Saham
 * @apiBody {string(2){2}} dataNIB.pemegang_saham.jns_identitas_pemegang_saham	Jenis Identitas Pemegang Saham (* Lihat Lampiran 4)
 * @apiBody {string(100){100}} dataNIB.pemegang_saham.no_identitas_pemegang_saham	Nomor Identitas Pemegang Saham
 * @apiBody {string(10){10}} dataNIB.pemegang_saham.valid_identitas_pemegang_saham	Valid / Masa Berlaku Pemegang Saham (Format Date : YYYY-MM-DD)
 * @apiBody {string(2){2}} dataNIB.pemegang_saham.negara_asal_pemegang_saham	Negara Asal Pemegang Saham
 * @apiBody {string(50){50}} dataNIB.pemegang_saham.pengendali_pemegang_saham	Nama Pengendali Pemegang Saham
 * @apiBody {string(15){15}} dataNIB.pemegang_saham.npwp_pemegang_saham	NPWP Pemegang Saham
 * @apiBody {string(1024){1024}} dataNIB.pemegang_saham.alamat_pemegang_saham	Alamat Pemegang Saham
 * @apiBody {string(25){25}} dataNIB.pemegang_saham.fax_pemegang_saham	Fax Pemegang Saham
 * @apiBody {string(100){100}} dataNIB.pemegang_saham.email_pemegang_saham	Email Pemegang Saham
 * @apiBody {string(2){2}} dataNIB.pemegang_saham.flag_pajak_pemegang_saham	Flag Validasi Pajak Pemegang Saham (* Lihat Lampiran 19)
 * @apiBody {string(255){255}} dataNIB.pemegang_saham.ket_pajak_pemegang_saham	Keterangan Validasi Pajak Pemegang Saham
 * @apiBody {Object[]} dataNIB.penanggung_jwb	    penanggung_jwb
 * @apiBody {string(1){1}} dataNIB.penanggung_jwb.flag_asing	Asal Penanggung Jawab dari Dalam Negeri / Luar Negeri (Value : Y = asing, N = Bukan Asing)
 * @apiBody {string(2){2}} dataNIB.penanggung_jwb.jns_identitas_penanggung_jwb	Jenis Nik Penganggung Jawab (* Lihat Lampiran 4)
 * @apiBody {string(100){100}} dataNIB.penanggung_jwb.no_identitas_penanggung_jwb	Nomor Identitas Penanggung Jawab
 * @apiBody {string(500){500}} dataNIB.penanggung_jwb.nama_penanggung_jwb	Nama Penganggung Jawab
 * @apiBody {string(250){250}} dataNIB.penanggung_jwb.jabatan_penanggung_jwb	Jabatan Penanggung Jawab
 * @apiBody {string(2){2}} dataNIB.penanggung_jwb.kebangsaan_penanggung_jwb	Kebangsaan Penanggung Jawab (* Lihat Lampiran 6)
 * @apiBody {string(2){2}} dataNIB.penanggung_jwb.negara_asal_penanggung_jwb	Negara Asal Penanggung Jawab (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unec e.org/cefact/loco de/service/locati on )
 * @apiBody {string(15){15}} dataNIB.penanggung_jwb.npwp_penanggung_jwb	NPWP Penanggung Jawab
 * @apiBody {string(1024){1024}} dataNIB.penanggung_jwb.alamat_penanggung_jwb	Alamat Penanggung Jawab
 * @apiBody {string(50){50}} dataNIB.penanggung_jwb.jalan_penanggung_jwb	Alamat Jalan Penanggung Jawab
 * @apiBody {string(10){10}} dataNIB.penanggung_jwb.blok_penanggung_jwb	Alamat Blok Penanggung Jawab
 * @apiBody {string(10){10}} dataNIB.penanggung_jwb.no_penanggung_jwb	Alamat Nomor Penanggung Jawab
 * @apiBody {string(255){255}} dataNIB.penanggung_jwb.rt_rw_penanggung_jwb	RT RW Penanggung Jawab
 * @apiBody {string(255){255}} dataNIB.penanggung_jwb.kelurahan_penanggung_jwb	Kelurahan Penanggung Jawab
 * @apiBody {string(10){10}} dataNIB.penanggung_jwb.daerah_id_penanggung_jwb	ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(5){5}} dataNIB.penanggung_jwb.kode_pos_penanggung_jwb	Kode Pos Penanggung Jawab
 * @apiBody {string(50){50}} dataNIB.penanggung_jwb.no_telp_penanggung_jwb	Nomor Telepon Penanggung Jawab
 * @apiBody {string(50){50}} dataNIB.penanggung_jwb.no_hp_penanggung_jwb	Nomor Handphone Penanggung Jawab
 * @apiBody {string(50){50}} dataNIB.penanggung_jwb.no_fax_penanggung_jwb	Nomor Fax Penanggung Jawab
 * @apiBody {string(100){100}} dataNIB.penanggung_jwb.email_penanggung_jwb	Email Penanggung Jawab
 * @apiBody {string(2){2}} dataNIB.penanggung_jwb.flag_pajak_penanggung_jwb	Flag Validasi Pajak Penanggung Jawab (* Lihat Lampiran 19)
 * @apiBody {string(255){255}} dataNIB.penanggung_jwb.ket_pajak_penanggung_jwb	Keterangan Validasi Pajak Penanggung Jawab
 * @apiBody {string(100){100}} dataNIB.no_pengesahan	Nomor Pengesahan Akta Dari Kumham
 * @apiBody {string(10){10}} dataNIB.tgl_pengesahan	Tanggal Pengesahan Akta Dari Kumham (format date : YYYY-MM-DD)
 * @apiBody {string(100){100}} dataNIB.no_akta_lama	Nomor Akta Lama Sebelum Perubahan
 * @apiBody {string(10){10}} dataNIB.tgl_akta_lama	Tanggal Akta Lama Sebelum Perubahan (format date : YYYY-MM-DD)
 * @apiBody {string(100){100}} dataNIB.no_pengesahan_lama	Nomor Pengesahan Akta Lama Sebelum Perubahan Dari Kumham
 * @apiBody {string(10){10}} dataNIB.tgl_pengesahan_lama	Tanggal Pengesahan Akta Lama Sebelum Perubahan Dari Kumham (format date : YYYY-MM- DD)
 * @apiBody {Object[]} dataNIB.legalitas	    legalitas
 * @apiBody {string(2){2}} dataNIB.legalitas.jenis_legal	Jenis Legal Perusahaan (* Lihat Lampiran 7)
 * @apiBody {string(100){100}} dataNIB.legalitas.no_legal	Nomor Legal Perusahaan
 * @apiBody {string(10){10}} dataNIB.legalitas.tgl_legal	Tanggal Legal Perusahaan (format date : YYYY-MM-DD)
 * @apiBody {string(255){255}} dataNIB.legalitas.alamat_notaris	Alamat Notaris
 * @apiBody {string(100){100}} dataNIB.legalitas.nama_notaris	Nama Notaris
 * @apiBody {string(100){100}} dataNIB.legalitas.telepon_notaris	Telepon Notaris
 * @apiBody {Object} dataNIB.data_rptka	    data_rptka
 * @apiBody {string(2){2}} dataNIB.data_rptka.jenis_rptka	Jenis Flag RPTKA ( 01 : Baru, 02: Perubahan)
 * @apiBody {string(20){20}} dataNIB.data_rptka.no_rptka	No Bacode RPTKA
 * @apiBody {string(10){10}} dataNIB.data_rptka.rptka_awal	Masa Berlaku Dari Tanggal(format date : YYYY-MM- DD)
 * @apiBody {string(10){10}} dataNIB.data_rptka.rptka_akhir	Masa Berlaku Sampai Tanggal(format date : YYYY-MM- DD)
 * @apiBody {number(20.2){20}} dataNIB.data_rptka.rptka_gaji	Gaji Tenaga Asing
 * @apiBody {number(11){11}} dataNIB.data_rptka.jumlah_tka_rptka	Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)
 * @apiBody {string(10){10}} dataNIB.data_rptka.jangka_penggunaan_waktu	Jangka Waktu Penggunaan Tenaga Kerja Asing (TKA) dalam Izin Rencana Penggunaan Tenaga Kerja Asing (RPTKA) (format date : YYYY-MM-DD)
 * @apiBody {number(1){1}} dataNIB.data_rptka.jangka_waktu_permohonan_rptka	Jangka Waktu Permohonan RPTKA (dalam hitungan bulan)
 * @apiBody {Object[]}	dataNIB.data_rptka.rptka_jabatan	    rptka_jabatan
 * @apiBody {number(11){11}} dataNIB.data_rptka.rptka_jabatan.id_jabatan	ID Jabatan Tenaga Kerja Asing berdasarkan https://jdih.kemnaker.go.id/data_puu/KEP247_MENX_2011.pdf
 * @apiBody {string(255){255}} dataNIB.data_rptka.rptka_jabatan.jabatan	Nama Jabatan
 * @apiBody {string(11){11}} dataNIB.data_rptka.rptka_jabatan.jumlah	Jumlah Orang Yang Memiliki Jabatan
 * @apiBody {string(10){10}} dataNIB.data_rptka.rptka_jabatan.tgl_mulai	Tanggal Mulai Jabatan (format date : YYYY-MM- DD)
 * @apiBody {string(10){10}} dataNIB.data_rptka.rptka_jabatan.tgl_selesai	Tanggal Selesai Jabatan (format date : YYYY-MM- DD)
 * @apiBody {string(255)} dataNIB.data_rptka.rptka_jabatan.keterangan	Keterangan
 * @apiBody {Object[]} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping	    rptka_tki_pendamping
 * @apiBody {number(10){10}} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_jabatan	Id Jabatan
 * @apiBody {number(10){10}} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.id_pendamping	Id TKI Pendamping
 * @apiBody {string(100){100}} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nama	Nama TKI Pendamping
 * @apiBody {string(20){20}} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.nik	Nomor NIK TKI Pendamping
 * @apiBody {string(255){255}} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.jabatan	Nama Jabatan TKI Pendamping
 * @apiBody {string(25){25}} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.hp	Nomor HP TKI Pendamping
 * @apiBody {string(100){100}} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.email	Email TKI Pendampiag
 * @apiBody {string(65535)} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.foto	Foto TKI Pendamping Attachment File dalam Bentukbentuk base64 dengan format (data:image/jpeg;base64,string() ENCODE IMAGE)
 * @apiBody {string(50)} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pendidikan_min	Tingkat Pendidikan Minimal TKI Pendamping
 * @apiBody {string(255){255}} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.sertifikat	Sertifikat Kompetensi TKI Pendamping
 * @apiBody {number(11){11}} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.pengalaman_kerja	Pengalaman Kerja TKI Pendamping (dalam tahun)
 * @apiBody {string(255){255}} dataNIB.data_rptka.rptka_jabatan.rptka_tki_pendamping.keterangan	Keterangan
 * @apiBody {Object[]}	dataNIB.data_rptka.rptka_negara	    rptka_negara
 * @apiBody {string(2){2}} dataNIB.data_rptka.rptka_negara.id_negara	Negara Asal Tenaga Kerja Asing(* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unec e.org/cefact/loco de/service/locati on )
 * @apiBody {number(11){11}} dataNIB.data_rptka.rptka_negara.jumlah	Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)
 * @apiBody {Object[]}	dataNIB.data_rptka.rptka_lokasi	    rptka_lokasi
 * @apiBody {string(10){10}} dataNIB.data_rptka.rptka_lokasi.lokasi_id	ID Daerah Penanggung Jawab (* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {number(11){11}} dataNIB.data_rptka.rptka_lokasi.jumlah	Jumlah Tenaga Kerja Asing (TKA) dalam Rencana Penggunaan Tenaga Kerja Asing (RPTKA)
 * @apiBody {Object[]} dataNIB.data_proyek	    data_proyek
 * @apiBody {string(25){25}} dataNIB.data_proyek.id_proyek	ID / Kode Proyek
 * @apiBody {string(26){26}} dataNIB.data_proyek.nomor_proyek	Nomor Permohonan Proyek
 * @apiBody {string(255){255}} dataNIB.data_proyek.uraian_usaha	Uraian Usaha Proyek
 * @apiBody {number(10){10}} dataNIB.data_proyek.jumlah_tki_l	Jumlah Tenaga Kerja Indonesia (TKI) Laki -Laki
 * @apiBody {number(10){10}} dataNIB.data_proyek.jumlah_tki_p	Jumlah Tenaga Kerja Indonesia (TKI) Perempuan
 * @apiBody {number(10){10}} dataNIB.data_proyek.jumlah_tka_l	Jumlah Tenaga Kerja Asing (TKA) Laki -Laki
 * @apiBody {number(10){10}} dataNIB.data_proyek.jumlah_tka_p	Jumlah Tenaga Kerja Asing (TKA) Perempuan
 * @apiBody {number(7){7}} dataNIB.data_proyek.kbli	Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)
 * @apiBody {string(3){3}} dataNIB.data_proyek.sektor	Sektor Usaha Berdasarkan KBLI (* Lihat Lampiran 20)
 * @apiBody {string(1){1}} dataNIB.data_proyek.memiliki_menguasai	Sudah Memiliki atar Menguasai Lahan (Value : Y = Sudah Memiliki atau Menguasai Lahan, N = Belum Memiliki atau Menguasai Lahan)
 * @apiBody {string(2){2}} dataNIB.data_proyek.jenis_lokasi	Lokasi Berada dalam Lintas Administratif (Value : Y = Berada Dalam Lintas Administrasi, N = Bukan Berada Dalam Lintas Administrasi)
 * @apiBody {string(2){2}} dataNIB.data_proyek.status_tanah	Status Kepemilikan Tanah (* Lihat Lampiran 5)
 * @apiBody {number(10){10}} dataNIB.data_proyek.luas_tanah	Luas Bidang tanah
 * @apiBody {string(2){2}} dataNIB.data_proyek.satuan_luas_tanah	Satuan Luas Tanah (*Lihat Lampiran 17)
 * @apiBody {number(19){19}} dataNIB.data_proyek.pembelian_pematang_tanah	Nilai Pembelian Pematang Tanah (Valuta:IDR)
 * @apiBody {number(19){19}} dataNIB.data_proyek.bangunan_gedung	Nilai Bangunan Gedung (Valuta:IDR)
 * @apiBody {number(19){19}} dataNIB.data_proyek.mesin_peralatan	Nilai Mesin Peralatan (Valuta:IDR)
 * @apiBody {number(19){19}} dataNIB.data_proyek.mesin_peralatan_usd	Nilai Mesin Peralatan dalam USD
 * @apiBody {number(19){19}} dataNIB.data_proyek.investasi_lain	Investasi Lainnya
 * @apiBody {number(19){19}} dataNIB.data_proyek.sub_jumlah	Jumlah Asset (Valuta:IDR)
 * @apiBody {number(19){19}} dataNIB.data_proyek.modal_kerja	Nilai Modal Kerja (Valuta:IDR)
 * @apiBody {number(19){19}} dataNIB.data_proyek.jumlah_investasi	Nilai Jumlah Investasi (Valuta:IDR)
 * @apiBody {string(10){10}} dataNIB.data_proyek.tanggal_kurs	Tanggal Kurs (format date : YYYY-MM-DD)
 * @apiBody {number(19){19}} dataNIB.data_proyek.nilai_kurs	Nilai Kurs
 * @apiBody {number(11){11}} dataNIB.data_proyek.kd_kawasan	Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/portal/lstKawasan)
 * @apiBody {string(1){1}} dataNIB.data_proyek.jawab_lokasi_b	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point B
 * @apiBody {string(1){1}} dataNIB.data_proyek.jawab_lokasi_c	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point C
 * @apiBody {string(1){1}} dataNIB.data_proyek.jawab_lokasi_d	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point D
 * @apiBody {string(1){1}} dataNIB.data_proyek.jawab_lokasi_e	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point E
 * @apiBody {string(1){1}} dataNIB.data_proyek.jawab_lokasi_f	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point F
 * @apiBody {string(1){1}} dataNIB.data_proyek.jawab_lokasi_g	kuisioner Lokasi Berdasarkan PP 24 Tahun 2018 Pasal 33 Ayat 1 Point G
 * @apiBody {string(1){1}} dataNIB.data_proyek.flag_perluasan	Proyek Merupakan Perluasan/Penge mbangan Usaha Atau Bukan (Value : Y = Proses Perluasan/Penge mbangan Usaha, N = Bukan Proses Perluasan/Penge mbangan Usaha)
 * @apiBody {string(1){1}} dataNIB.data_proyek.flag_cabang	Proyek Sebagai Kantor Cabang Atau Bukan (Value : Y = Sebagai Kantor Cabang, N = Bukan Sebagai Kantor Cabang)
 * @apiBody {string(15){15}} dataNIB.data_proyek.npwp_cabang	NPWP Kantor Cabang
 * @apiBody {string(255){255}} dataNIB.data_proyek.nama_cabang	Nama Kantor Cabang / Proyek
 * @apiBody {string(2){2}} dataNIB.data_proyek.jenis_identitas_pj	Jenis Identitas Penanggung Jawab Proyek (* Lihat Lampiran 4)
 * @apiBody {string(16){16}} dataNIB.data_proyek.no_identitas_pj	No Identitas Penanggung Jawab Proyek
 * @apiBody {string(100){100}} dataNIB.data_proyek.nama_pj	Nama Penanggung Jawab Proyek
 * @apiBody {string(2){2}} dataNIB.data_proyek.status_proyek	Status Proyek(* Lihat Lampiran 22)
 * @apiBody {string(2){2}} dataNIB.data_proyek.jenis_proyek	Jenis Proyek (* Lihat Lampiran 26)
 * @apiBody {string(255){255}} dataNIB.data_proyek.nama_kegiatan	Nama Proyek / Kegiatan Proyek, Untuk Perseorangan Digunakan Untuk Mencatat Nama Dagangannya Misal (UD. Percobaan Jaya)
 * @apiBody {string(1){1}} dataNIB.data_proyek.flag_merger	Flag Proyek Hasil Merger atau Bukan (Y : Hasil Merger, N: Bukan Hasil Merger)
 * @apiBody {string(15){15}} dataNIB.data_proyek.npwp_perseroan_merger	NPWP Perusahaan Merging
 * @apiBody {string(255){255}} dataNIB.data_proyek.nama_perseroan_merger	Nama Perusahaan Merging
 * @apiBody {number(10){10}} dataNIB.data_proyek.jumlah_lantai_bangunan	Jumlah Lantai Bangunan
 * @apiBody {number(10){10}} dataNIB.data_proyek.luas_lantai_bangunan	Luas Lantai Bangunan
 * @apiBody {string(1){1}} dataNIB.data_proyek.flag_psn	Flag Proyek Strategis Nasional (Y/N)
 * @apiBody {string(1){1}} dataNIB.data_proyek.pasal_181_a	Questionaire terkait PP 5/2021 pasal 181 poin 1.a
 * @apiBody {string(1){1}} dataNIB.data_proyek.file_pasal_181_a	File Izin Lokasi KEK/KI
 * @apiBody {string(1){1}} dataNIB.data_proyek.pasal_181_b	Questionaire terkait PP 5/2021 pasal 181 poin 1.b
 * @apiBody {string(1){1}} dataNIB.data_proyek.file_pasal_181_b	File Izin Lokasi yang sudah dimiliki
 * @apiBody {string(1){1}} dataNIB.data_proyek.pasal_181_c	Questionaire terkait PP 5/2021 pasal 181 poin 1.c
 * @apiBody {string(1){1}} dataNIB.data_proyek.pasal_181_d	Questionaire terkait PP 5/2021 pasal 181 poin 1.d
 * @apiBody {string(1){1}} dataNIB.data_proyek.pasal_181_3	Questionaire terkait PP 5/2021 pasal 181 poin 3
 * @apiBody {string(1){1}} dataNIB.data_proyek.flag_obyek_vital_nasional	Flag Obyek Vital Nasional
 * @apiBody {string(255){255}} dataNIB.data_proyek.nama_perairan	Nama Lokasi Perairan
 * @apiBody {number(10){10}} dataNIB.data_proyek.kedalaman	Kedalaman Perairan
 * @apiBody {string(65535){65535}} dataNIB.data_proyek.file_rencana_teknis	    file_rencana_teknis
 * @apiBody {string(1){1}} dataNIB.data_proyek.flag_multi_kbli Flag Multi KBLI
 * @apiBody {string(23){23}} dataNIB.data_proyek.id_proyek_utama Id Proyek Utama
 * @apiBody {number(11){11}} dataNIB.data_proyek.jumlah_multi_kbli Jumlah Mutli KBLI
 * @apiBody {Object[]}	dataNIB.data_proyek.data_lokasi_proyek data_lokasi_proyek
 * @apiBody {string(25){25}} dataNIB.data_proyek.data_lokasi_proyek.id_proyek_lokasi	ID / Kode Lokasi Proyek
 * @apiBody {string(10){10}} dataNIB.data_proyek.data_lokasi_proyek.proyek_daerah_id	Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(3){3}} dataNIB.data_proyek.data_lokasi_proyek.kd_kawasan	Kode Kawasan (* Lihat Lampiran di https://oss.go.id/oss/#home/portal/lstKawasan)
 * @apiBody {string(65535){65535}} dataNIB.data_proyek.data_lokasi_proyek.alamat_usaha	Alamat Kegiatan Proyek / Usaha
 * @apiBody {string(6){6}} dataNIB.data_proyek.data_lokasi_proyek.id_kegiatan	Id Kegiatan Usaha Berdasarkan RDTR Digital
 * @apiBody {string(255){255}} dataNIB.data_proyek.data_lokasi_proyek.response_kegiatan	Response Kegiatan Usaha Berdasarkan Validasi Kegiatan RDTR Digital
 * @apiBody {string(2){2}} dataNIB.data_proyek.data_lokasi_proyek.jenis_kawasan	Jenis Kawasan (* Lihat Lampiran 16)
 * @apiBody {string(2){2}} dataNIB.data_proyek.data_lokasi_proyek.jenis_lokasi	Jenis Lokasi Lintas Administratif atau Tidak (01 : Lintas Administratif, 02 : Tidak Lintas Administratif)
 * @apiBody {string(2){2}} dataNIB.data_proyek.data_lokasi_proyek.status_lokasi	Status Lokasi(* Lihat Lampiran 25)
 * @apiBody {string(2){2}} dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek_shp	    data_lokasi_proyek_shp
 * @apiBody {Object[]} dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek	    data_lokasi_proyek
 * @apiBody {number(11){11}} dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.serial	Serial Koordinat
 * @apiBody {string(255){255}} dataNIB.data_proyek.data_lokasi_proyek.data_lokasi_proyek.lat_lng	Koordinat Latitude & Longitude
 * @apiBody {Object[]} dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek	    data_posisi_proyek
 * @apiBody {string(25){25}} dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_posisi	ID / Kode Posisi Proyek
 * @apiBody {string(25){25}} dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.id_proyek_lokasi	ID / Kode Lokasi Proyek
 * @apiBody {string(2){2}} dataNIB.data_proyek.data_lokasi_proyek.data_posisi_proyek.posisi_lokasi	Posisi Lokasi (* Lihat Lampiran 24)
 * @apiBody {Object} dataNIB.data_proyek.data_lokasi_proyek.data_investasi Data Investasi
 * @apiBody {string(2){2}} dataNIB.data_proyek.data_lokasi_proyek.data_investasi.jenis_akumulasi Jenis Akumulasi
 * @apiBody {number(11){11}} dataNIB.data_proyek.data_lokasi_proyek.data_investasi.modal_kerja Modal Kerja berdasarkan Lokasi
 * @apiBody {number(11){11}} dataNIB.data_proyek.data_lokasi_proyek.data_investasi.jumlah_investasi Jumlah Investasi berdasarkan Lokasi
 * @apiBody {Object[]}	dataNIB.data_proyek.data_proyek_produk	    data_proyek_produk
 * @apiBody {string(25){25}} dataNIB.data_proyek.data_proyek_produk.id_produk	ID / Kode Produk
 * @apiBody {string(25){25}} dataNIB.data_proyek.data_proyek_produk.id_proyek	ID / Kode Proyek
 * @apiBody {number(7){7}} dataNIB.data_proyek.data_proyek_produk.kbli	Kode KBLI (* Menggunakan Kode KBLI Tahun 2020)
 * @apiBody {number(10){10}} dataNIB.data_proyek.data_proyek_produk.id_bidang_usaha	ID Bidang Usaha Berdasarkan Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)
 * @apiBody {string(1024){1024}} dataNIB.data_proyek.data_proyek_produk.jenis_produksi	Rencana Produksi Yang Dihasilkan
 * @apiBody {number(20.2){20}} dataNIB.data_proyek.data_proyek_produk.kapasitas	Kapasitas produksi suatu produk
 * @apiBody {string(100){100}} dataNIB.data_proyek.data_proyek_produk.satuan	Satuan Dari Kapasitas Produksi
 * @apiBody {string(100){100}} dataNIB.data_proyek.data_proyek_produk.merk_dagang	Merk Dagang
 * @apiBody {string(100){100}} dataNIB.data_proyek.data_proyek_produk.pemegang_haki	Pemegang Hak Cipta
 * @apiBody {string(100){100}} dataNIB.data_proyek.data_proyek_produk.pemegang_paten	Pemegang Hak Paten
 * @apiBody {string(20){20}} dataNIB.data_proyek.data_proyek_produk.pi_nomor	Nomor Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)
 * @apiBody {string(10){10}} dataNIB.data_proyek.data_proyek_produk.pi_tanggal	Tanggal Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC) format date : YYYY-MM- DD
 * @apiBody {string(16){16}} dataNIB.data_proyek.data_proyek_produk.pi_npwp	NPWP Pendaftaran Penanaman Modal Untuk Case Grand Father Clause (GFC)
 * @apiBody {string(9){9}} dataNIB.data_proyek.data_proyek_produk.id_kbli_ta	Penanda bahwa cakupan produk untuk kebutuhan tax allowance
 * @apiBody {number(3.2){3}} dataNIB.data_proyek.data_proyek_produk.tkdn	Tingkat Kandungan Dalam Negeri
 * @apiBody {Object[]} dataNIB.data_dni	    data_dni
 * @apiBody {number(10){10}} dataNIB.data_dni.kd_dni	Kodefikasi Data Negatif Investasi (DNI) (* Lihat Lampiran 15)
 * @apiBody {Object[]} dataNIB.data_checklist	    data_checklist
 * @apiBody {string(25){25}} dataNIB.data_checklist.id_produk	ID Produk
 * @apiBody {string(25){25}} dataNIB.data_checklist.id_proyek	ID / Kode Proyek
 * @apiBody {string(25){25}} dataNIB.data_checklist.id_izin	Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {string(3){3}} dataNIB.data_checklist.jenis_izin	Jenis Perizinan (* Lihat Lampiran 27)
 * @apiBody {string(13){13}} dataNIB.data_checklist.kd_izin	Kode Izin Sistem K/L/D (* https://services.oss.go.id/getListIzi n)
 * @apiBody {string(10){10}} dataNIB.data_checklist.kd_daerah	Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(255){255}} dataNIB.data_checklist.nama_izin	Nama Izin
 * @apiBody {string(100){100}} dataNIB.data_checklist.instansi	Nama Instansi
 * @apiBody {number(19){19}} dataNIB.data_checklist.id_bidang_spesifik	ID Bidang Spesifik
 * @apiBody {string(65535){65535}} dataNIB.data_checklist.bidang_spesifik	Uraian Bidang Spesifik
 * @apiBody {number(19){19}} dataNIB.data_checklist.id_kewenangan	ID Kewenangan
 * @apiBody {string(255){255}} dataNIB.data_checklist.parameter_kewenangan	Parameter Kewenangan Izin
 * @apiBody {string(2){2}} dataNIB.data_checklist.kewenangan	00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota
 * @apiBody {string(1){1}} dataNIB.data_checklist.flag_checklist	Flag Checklist Komitmen (* Lihat Lampiran 28)
 * @apiBody {string(1){1}} dataNIB.data_checklist.flag_transaksional	Flag : Y/N, Flag Izin Komersial/Operas ional Diajukan Transaksional (Bisa Mengajukan Berulang)
 * @apiBody {string(1){1}} dataNIB.data_checklist.flag_perpanjangan	Flag : Y/N, Flag Bahwa Izin Usaha ini Adalah Hasil Perpanjangan Dari Izin Usaha Yang Terbit Sebelum OSS
 * @apiBody {string(150){150}} dataNIB.data_checklist.no_izin	Nomor Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan
 * @apiBody {string(10){10}} dataNIB.data_checklist.tgl_izin	Tanggal Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan (* Format:YYYY- MM-DD)
 * @apiBody {string(65535){65535}} dataNIB.data_checklist.file_izin	Attachment File Izin Yang Terbit dan Masih Berlaku Sebelum OSS Diterapkan Dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)
 * @apiBody {Object[]}	dataNIB.data_checklist.data_persyaratan	    data_persyaratan
 * @apiBody {string(25){25}} dataNIB.data_checklist.data_persyaratan.id_syarat	Id / Kode Persyaratan
 * @apiBody {string(50){50}} dataNIB.data_checklist.data_persyaratan.no_dokumen	Nomor Dokumen Persyaratan
 * @apiBody {string(8){8}} dataNIB.data_checklist.data_persyaratan.tgl_dokumen	Tanggal Dokumen Persyaratan (format date : YYYY-MM-DD)
 * @apiBody {string(65535){65535}} dataNIB.data_checklist.data_persyaratan.file_dokumen	Attachment File Izin dalam Bentuk File PDF/Image Berupa Link (* Ukuran File Maks: 2MB)
 * @apiBody {string(255){255}} dataNIB.data_checklist.data_persyaratan.keterangan	Keterangan Dokumen Persyaratan
 * @apiBody {string(2){2}} dataNIB.jenis_id_user_proses	Kode Jenis Identitas (* Lihat Lampiran 4)
 * @apiBody {string(25){25}} dataNIB.no_id_user_proses	No Identitas Pemroses NIB
 * @apiBody {string(100){100}} dataNIB.nama_user_proses	Nama User Pemroses NIB
 * @apiBody {string(50){50}} dataNIB.email_user_proses	Email User Pemroses NIB
 * @apiBody {string(25){25}} dataNIB.hp_user_proses	No HP Pemroses NIB
 * @apiBody {string(255){255}} dataNIB.alamat_user_proses	Alamat Pemroses NIB
 * @apiBody {string(1){1}} dataNIB.jns_kelamin_user_proses	Jenis Kelamin Pemroses NIB (L : Laki-Laki, P : Perempuan)
 * @apiBody {string(100){100}} dataNIB.tempat_lahir_user_proses	Tempat Lahir Pemroses NIB
 * @apiBody {string(10){10}} dataNIB.tgl_lahir_user_proses	Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)
 * @apiBody {string(10){10}} dataNIB.daerah_id_user_proses	ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(10){10}} dataNIB.rt_rw_user_proses	RT RW Pemroses NIB
 * @apiBody {string(50){50}} dataNIB.agama_user_proses	Agama Pemroses NIB
 * @apiBody {string(50){50}} dataNIB.status_perkawinan_user_proses	Status Perkawinan Pemroses NIB
 * @apiBody {string(50){50}} dataNIB.pekerjaan_user_proses	Pekerjaan Pemroses NIB
 * @apiBody {string(2){2}} dataNIB.status_nib	Status Penerbitan NIB (* Lihat Lampiran 14)
 * @apiBody {string(1){1}} dataNIB.tipe_dokumen 	Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)
 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *       "dataNIB": {
 *         "tgl_terkirim_oss": "",
 *         "nib": "",
 *         "tgl_pengajuan_nib": "",
 *         "tgl_terbit_nib": "",
 *         "tgl_perubahan_nib": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "jenis_pelaku_usaha": "",
 *         "no_npp": "",
 *         "no_va": "",
 *         "no_wlkp": "",
 *         "flag_perusahaan": "",
 *         "flag_ekspor": "",
 *         "flag_impor": "",
 *         "jenis_api": "",
 *         "gabung_negara": "",
 *         "negara_pma_dominan": "",
 *         "total_pma": "",
 *         "nilai_pma_dominan": "",
 *         "nilai_pmdn": "",
 *         "persen_pma": "",
 *         "persen_pmdn": "",
 *         "kd_kawasan": "",
 *         "jenis_kawasan": "",
 *         "versi_pia": "",
 *         "jangka_waktu": "",
 *         "status_badan_hukum": "",
 *         "status_penanaman_modal": "",
 *         "npwp_perseroan": "",
 *         "nama_perseroan": "",
 *         "nama_singkatan": "",
 *         "jenis_perseroan": "",
 *         "status_perseroan": "",
 *         "alamat_perseroan": "",
 *         "rt_rw_perseroan": "",
 *         "kelurahan_perseroan": "",
 *         "perseroan_daerah_id": "",
 *         "kode_pos_perseroan": "",
 *         "nomor_telpon_perseroan": "",
 *         "email_perusahaan": "",
 *         "dalam_bentuk_uang": "",
 *         "dalam_bentuk_lain": "",
 *         "total_modal_dasar": "",
 *         "total_modal_ditempatkan": "",
 *         "flag_umk": "",
 *         "skala_usaha": "",
 *         "jenis_perubahan_terakhir": "",
 *         "flag_perubahan_data_teknis": "",
 *         "pemegang_saham": [
 *           {
 *             "jenis_pemegang_saham": "",
 *             "flag_asing": "",
 *             "total_modal_pemegang": "",
 *             "jabatan_pemegang_saham": "",
 *             "nama_pemegang_saham": "",
 *             "jns_identitas_pemegang_saham": "",
 *             "no_identitas_pemegang_saham": "",
 *             "valid_identitas_pemegang_saham": "",
 *             "negara_asal_pemegang_saham": "",
 *             "pengendali_pemegang_saham": "",
 *             "npwp_pemegang_saham": "",
 *             "alamat_pemegang_saham": "",
 *             "fax_pemegang_saham": "",
 *             "email_pemegang_saham": "",
 *             "flag_pajak_pemegang_saham": "",
 *             "ket_pajak_pemegang_saham": ""
 *           }
 *         ],
 *         "penanggung_jwb": [
 *           {
 *             "flag_asing": "",
 *             "jns_identitas_penanggung_jwb": "",
 *             "no_identitas_penanggung_jwb": "",
 *             "nama_penanggung_jwb": "",
 *             "jabatan_penanggung_jwb": " ",
 *             "kebangsaan_penanggung_jwb": "",
 *             "negara_asal_penanggung_jwb": "",
 *             "npwp_penanggung_jwb": "",
 *             "alamat_penanggung_jwb": "",
 *             "jalan_penanggung_jwb": "",
 *             "blok_penanggung_jwb": "",
 *             "no_penanggung_jwb": "",
 *             "rt_rw_penanggung_jwb": "",
 *             "kelurahan_penanggung_jwb": "",
 *             "daerah_id_penanggung_jwb": "",
 *             "kode_pos_penanggung_jwb": "",
 *             "no_telp_penanggung_jwb": "",
 *             "no_hp_penanggung_jwb": "",
 *             "no_fax_penanggung_jwb": "",
 *             "email_penanggung_jwb": "",
 *             "flag_pajak_penanggung_jwb": "",
 *             "ket_pajak_penanggung_jwb": ""
 *           }
 *         ],
 *         "no_pengesahan": "",
 *         "tgl_pengesahan": "",
 *         "no_akta_lama": "",
 *         "tgl_akta_lama": "",
 *         "no_pengesahan_lama": "",
 *         "tgl_pengesahan_lama": "",
 *         "legalitas": [
 *           {
 *             "jenis_legal": "",
 *             "no_legal": "",
 *             "tgl_legal": "",
 *             "alamat_notaris": "",
 *             "nama_notaris": "",
 *             "telepon_notaris": ""
 *           }
 *         ],
 *         "data_rptka": {
 *           "jenis_rptka": "",
 *           "no_rptka": "",
 *           "rptka_awal": "",
 *           "rptka_akhir": "",
 *           "rptka_gaji": "",
 *           "jumlah_tka_rptka": "",
 *           "jangka_penggunaan_waktu": "",
 *           "jangka_waktu_permohonan_rptka": "",
 *           "rptka_jabatan": [
 *             {
 *               "id_jabatan": "",
 *               "jabatan": "",
 *               "jumlah": "",
 *               "tgl_mulai": "",
 *               "tgl_selesai": "",
 *               "keterangan": "",
 *               "rptka_tki_pendamping": [
 *                 {
 *                   "id_jabatan": "",
 *                   "id_pendamping": "",
 *                   "nama": "",
 *                   "nik": "",
 *                   "jabatan": "",
 *                   "hp": "",
 *                   "email": "",
 *                   "foto": "",
 *                   "pendidikan_min": "",
 *                   "sertifikat": "",
 *                   "pengalaman_kerja": "",
 *                   "keterangan": ""
 *                 }
 *               ]
 *             }
 *           ],
 *           "rptka_negara": [{ "id_negara": "", "jumlah": "" }],
 *           "rptka_lokasi": [{ "lokasi_id": "", "jumlah": "" }]
 *         },
 *         "data_proyek": [
 *           {
 *             "id_proyek": "",
 *             "nomor_proyek": "",
 *             "uraian_usaha": "",
 *             "jumlah_tki_l": "",
 *             "jumlah_tki_p": "",
 *             "jumlah_tka_l": "",
 *             "jumlah_tka_p": "",
 *             "kbli": "",
 *             "sektor": "",
 *             "memiliki_menguasai": "",
 *             "jenis_lokasi": "",
 *             "status_tanah": "",
 *             "luas_tanah": "",
 *             "satuan_luas_tanah": "",
 *             "pembelian_pematang_tanah": "",
 *             "bangunan_gedung": "",
 *             "mesin_peralatan": "",
 *             "mesin_peralatan_usd": "",
 *             "investasi_lain": "",
 *             "sub_jumlah": "",
 *             "modal_kerja": "",
 *             "jumlah_investasi": "",
 *             "tanggal_kurs": "",
 *             "nilai_kurs": "",
 *             "kd_kawasan": "",
 *             "jawab_lokasi_b": "",
 *             "jawab_lokasi_c": "",
 *             "jawab_lokasi_d": "",
 *             "jawab_lokasi_e": "",
 *             "jawab_lokasi_f": "",
 *             "jawab_lokasi_g": "",
 *             "flag_perluasan": "",
 *             "flag_cabang": "",
 *             "npwp_cabang": "",
 *             "nama_cabang": "",
 *             "jenis_identitas_pj": "",
 *             "no_identitas_pj": "",
 *             "nama_pj": "",
 *             "status_proyek": "",
 *             "jenis_proyek": "",
 *             "nama_kegiatan": "",
 *             "flag_merger": "",
 *             "npwp_perseroan_merger": "",
 *             "nama_perseroan_merger": "",
 *             "jumlah_lantai_bangunan": "",
 *             "luas_lantai_bangunan": "",
 *             "flag_psn": "",
 *             "pasal_181_a": "",
 *             "file_pasal_181_a": "",
 *             "pasal_181_b": "",
 *             "file_pasal_181_b": "",
 *             "pasal_181_c": "",
 *             "pasal_181_d": "",
 *             "pasal_181_3": "",
 *             "flag_obyek_vital_nasional": "",
 *             "nama_perairan": "",
 *             "kedalaman": "",
 *             "file_rencana_teknis": "",
 *             "flag_multi_kbli": "",
 *             "id_proyek_utama": "",
 *             "jumlah_multi_kbli": 0,
 *             "data_lokasi_proyek": [
 *               {
 *                 "id_proyek_lokasi": "",
 *                 "proyek_daerah_id": "",
 *                 "kd_kawasan": "",
 *                 "alamat_usaha": "",
 *                 "id_kegiatan": "",
 *                 "response_kegiatan": "",
 *                 "jenis_kawasan": "",
 *                 "jenis_lokasi": "",
 *                 "status_lokasi": "",
 *                 "data_lokasi_proyek_shp": "",
 *                 "data_lokasi_proyek": [{ "serial": "", "lat_lng": "" }],
 *                 "data_posisi_proyek": [
 *                   {
 *                     "id_proyek_posisi": "",
 *                     "id_proyek_lokasi": "",
 *                     "posisi_lokasi": ""
 *                   }
 *                 ],
 *                 "data_investasi": {
 *                    "jenis_akumulasi": "",
 *                    "modal_kerja": 0,
 *                    "jumlah_investasi": 0
 *                 }
 *               }
 *             ],
 *             "data_proyek_produk": [
 *               {
 *                 "id_produk": "",
 *                 "id_proyek": "",
 *                 "kbli": "",
 *                 "id_bidang_usaha": "",
 *                 "jenis_produksi": "",
 *                 "kapasitas": "",
 *                 "satuan": "",
 *                 "merk_dagang": "",
 *                 "pemegang_haki": "",
 *                 "pemegang_paten": "",
 *                 "pi_nomor": "",
 *                 "pi_tanggal": "",
 *                 "pi_npwp": "",
 *                 "id_kbli_ta": "",
 *                 "tkdn": ""
 *               }
 *             ]
 *           }
 *         ],
 *         "data_dni": [{ "kd_dni": "" }],
 *         "data_checklist": [
 *           {
 *             "id_produk": "",
 *             "id_proyek": "",
 *             "id_izin": "",
 *             "jenis _izin": "",
 *             "kd_izin": "",
 *             "kd_daerah": "",
 *             "nama_izin": "",
 *             "instansi": "",
 *             "id_bidang_spesifik": "",
 *             "bidang_spesifik": "",
 *             "id_kewenangan": "",
 *             "parameter_kewenangan": "",
 *             "kewenangan": "",
 *             "flag_checklist": "",
 *             "flag_transaksional": "",
 *             "flag_perpanjangan": "",
 *             "no_izin": "",
 *             "tgl_izin": "",
 *             "file_izin": "",
 *             "data_persyaratan": [
 *               {
 *                 "id_syarat": "",
 *                 "no_dokumen": "",
 *                 "tgl_dokumen": "",
 *                 "file_dokumen": "",
 *                 "keterangan": ""
 *               }
 *             ]
 *           }
 *         ],
 *         "jenis_id_user_proses": "",
 *         "no_id_user_proses": "",
 *         "nama_user_proses": "",
 *         "email_user_proses": "",
 *         "hp_user_proses": "",
 *         "alamat_user_proses": "",
 *         "jns_kelamin_user_proses": "",
 *         "tempat_lahir_user_proses": "",
 *         "tgl_lahir_user_proses": "",
 *         "daerah_id_user_proses": "",
 *         "rt_rw_user_proses": "",
 *         "agama_user_proses": "",
 *         "status_perkawinan_user_proses": "",
 *         "pekerjaan_user_proses": "",
 *         "status_nib": "",
 *         "tipe_dokumen ": ""
 *       }
 *     }
 * 
 * @apiSuccess (200) {Object} responreceiveNIBKKPR            Response receive NIB KKPR
 * @apiSuccess (200) {String(1)} responreceiveNIBKKPR.status     Status respon (1: TRUE; 2: FALSE) 
 * @apiSuccess (200) {String(255)} responreceiveNIBKKPR.keterangan Keterangan Respon
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responreceiveNIBKKPR": {
 *     		 "status": "1",
 *     		 "keterangan": "Berhasil menyimpan data"
 *     	 }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responreceiveNIBKKPR": {
 *     		 "status": "2",
 *     		 "keterangan": "Gagal menyimpan data"
 *     	 }
 *     }
 */

/**
 * @api {post} /receiveLicenseKKPR Receive License KKPR
 * @apiVersion 4.3.19
 * @apiDescription Pengiriman Data Persetujuan PKKPR dari Sistem K/L/D ke Sistem OSS
 * @apiName receiveLicenseKKPR
 * @apiGroup License
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveLicenseKKPR' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *       "IZINFINALKKPR": {
 *         "id_proyek": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_status": "",
 *         "tgl_status": "",
 *         "nip_status": "",
 *         "nama_status": "",
 *         "keterangan": "",
 *         "data_teknis": {
 *           "luas": "",
 *           "jenis_peruntukan": "",
 *           "koefisien_dasar_bangunan": "",
 *           "koefisien_lantai_bangunan": "",
 *           "indikasi_program_pemanfaatan_ruang": "",
 *           "persyaratan_pelaksanaan_kegiatan": "",
 *           "garis_sempadan_bangunan": "",
 *           "jarak_bebas_bangunan": "",
 *           "koefisien_dasar_hijau": "",
 *           "jaringan_utilitas_kota": "",
 *           "persetujuan": "",
 *           "url_peta": "",
 *           "url_keterangan_peta": "",
 *           "ketentuan_umum": "",
 *           "koordinat_batas_bidang": "",
 *           "nomor_pertek": "",
 *           "nomor_perda_rtr": "",
 *           "nama_perairan": "",
 *           "kedalaman": ""
 *         }
 *       }
 *     }'

 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object}	    IZINFINALKKPR	IZINFINALKKPR
 * @apiBody {string(25)}    	IZINFINALKKPR.id_proyek	    ID / Kode Proyek
 * @apiBody {string(25)}    	IZINFINALKKPR.oss_id	    Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Pengajuan Perizinan
 * @apiBody {string(25)}    	IZINFINALKKPR.id_izin	    Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {string(12)}    	IZINFINALKKPR.kd_izin	    Kode Izin Sistem K/L/D (* Lihat Lampiran 8)
 * @apiBody {string(2)}    	IZINFINALKKPR.kd_status	    Kode Status Perizinan (* Lihat Lampiran 10)
 * @apiBody {string(18)}    	IZINFINALKKPR.tgl_status	    Tanggal Proses Status Izin (format date: YYYY-MM-DD HH:II:SS)
 * @apiBody {string(50)}    	IZINFINALKKPR.nip_status	    Nip pemroses Status Izin
 * @apiBody {string(50)}    	IZINFINALKKPR.nama_status	    Nama pemroses Status Izin
 * @apiBody {string(65535)}    	IZINFINALKKPR.keterangan	    Keterangan
 * @apiBody {Object}    	IZINFINALKKPR.data_teknis	    data_teknis
 * @apiBody {string(20)}    	IZINFINALKKPR.data_teknis.luas	    Luas tanah/perairan yang disetujui
 * @apiBody {string(10)}    	IZINFINALKKPR.data_teknis.jenis_peruntukan	    Jenis peruntukan pemanfaatan ruang
 * @apiBody {number(20.2)}    	IZINFINALKKPR.data_teknis.koefisien_dasar_bangunan	    Koefisien dasar bangunan maksimum
 * @apiBody {number(20.2)}    	IZINFINALKKPR.data_teknis.koefisien_lantai_bangunan	    Koefisien lantai bangunan maksimum
 * @apiBody {string(255)}    	IZINFINALKKPR.data_teknis.indikasi_program_pemanfaatan_ruang	    Indikasi program pemanfaatan ruang
 * @apiBody {string(255)}    	IZINFINALKKPR.data_teknis.persyaratan_pelaksanaan_kegiatan	    Persyaratan Pelaksanaan kegiatan Pemanfaatan Ruang
 * @apiBody {number(20.2)}    	IZINFINALKKPR.data_teknis.garis_sempadan_bangunan	    Garis Sempadan Bangunan minimum
 * @apiBody {number(20.2)}    	IZINFINALKKPR.data_teknis.jarak_bebas_bangunan	    Jarak Bebas Bangunan minimum
 * @apiBody {number(20.2)}    	IZINFINALKKPR.data_teknis.koefisien_dasar_hijau	    Koefisien Dasar Hijau minimum
 * @apiBody {number(20.2)}    	IZINFINALKKPR.data_teknis.jaringan_utilitas_kota	    Jaringan utilitas kota
 * @apiBody {string(20)}    	IZINFINALKKPR.data_teknis.persetujuan	    PKKPR dinyatakan disetujui seluruhnya/disetujui sebagian/ditolak seluruhnya dengan pertimbangan
 * @apiBody {string(65535)}    	IZINFINALKKPR.data_teknis.url_peta	    url_peta
 * @apiBody {string(65535)}    	IZINFINALKKPR.data_teknis.url_keterangan_peta	    Keterangan Letak Peta (Berisi peta yang menunjukkan letak bidang pada skala yang lebih kecil)
 * @apiBody {string(255)}    	IZINFINALKKPR.data_teknis.ketentuan_umum	    Arahan / Ketentuan Umum Peraturan Zonasi (Berisi informasi terkait APZ/KUPZ pada kawasan/zona dalam delineasi lokasi usulan kegiatan pemanfaatan ruang)
 * @apiBody {string(65535)}    	IZINFINALKKPR.data_teknis.koordinat_batas_bidang	    Koordinat batas bidang rencana lokasi kegiatan
 * @apiBody {string(50)}    	IZINFINALKKPR.data_teknis.nomor_pertek	    Nomor Pertimbangan Teknis
 * @apiBody {string(255)}    	IZINFINALKKPR.data_teknis.nomor_perda_rtr	    nomor_perda_rtr
 * @apiBody {string(255)}    	IZINFINALKKPR.data_teknis.nama_perairan	    nama_perairan
 * @apiBody {number(20.2)}    	IZINFINALKKPR.data_teknis.kedalaman	    Kedalaman perairan lokasi kegiatan
 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *       "IZINFINALKKPR": {
 *         "id_proyek": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_status": "",
 *         "tgl_status": "",
 *         "nip_status": "",
 *         "nama_status": "",
 *         "keterangan": "",
 *         "data_teknis": {
 *           "luas": "",
 *           "jenis_peruntukan": "",
 *           "koefisien_dasar_bangunan": "",
 *           "koefisien_lantai_bangunan": "",
 *           "indikasi_program_pemanfaatan_ruang": "",
 *           "persyaratan_pelaksanaan_kegiatan": "",
 *           "garis_sempadan_bangunan": "",
 *           "jarak_bebas_bangunan": "",
 *           "koefisien_dasar_hijau": "",
 *           "jaringan_utilitas_kota": "",
 *           "persetujuan": "",
 *           "url_peta": "",
 *           "url_keterangan_peta": "",
 *           "ketentuan_umum": "",
 *           "koordinat_batas_bidang": "",
 *           "nomor_pertek": "",
 *           "nomor_perda_rtr": "",
 *           "nama_perairan": "",
 *           "kedalaman": ""
 *         }
 *       }
 *     }
 * @apiSuccess (200) {Object} responreceiveLicenseKKPR              Response License KKPR
 * @apiSuccess (200) {String(3)} responreceiveLicenseKKPR.kode         Kode Respon 
 * @apiSuccess (200) {String(255)} responreceiveLicenseKKPR.keterangan   Keterangan Respon
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responreceiveLicenseKKPR ": {
 *     		 "kode": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responreceiveLicenseKKPR ": {
 *     		 "kode": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 */

/**
 * @api {post} /receiveNIBPSE Receive NIB PSE
 * @apiVersion 4.3.19
 * @apiDescription Mengirimkan Data NIB PSE Asing dari Sistem OSS ke Sistem K/L/D
 * @apiName receiveNIBPSE
 * @apiGroup NIB
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveNIBPSE' \
 *     --header 'Token: {{token}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *       "dataNIBPSE": {
 *         "nib": "",
 *         "tgl_pengajuan_nib": "",
 *         "tgl_terbit_nib": "",
 *         "tgl_perubahan_nib": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "versi_pia": "",
 *         "nama_prinsipal": "",
 *         "alamat_prinsipal": "",
 *         "id_negara_prinsipal": "",
 *         "nomor_telepon_prinsipal": "",
 *         "email_prinsipal": "",
 *         "no_akta_pendirian": "",
 *         "tgl_akta_pendirian": "",
 *         "file_akta_prinsipal": "",
 *         "file_akta_domisili": "",
 *         "penanggung_jwb": [
 *           {
 *             "no_identitas_penanggung_jwb": "",
 *             "nama_penanggung_jwb": "",
 *             "negara_asal_penanggung_jwb": "",
 *             "alamat_penanggung_jwb": "",
 *             "daerah_id_penanggung_jwb": "",
 *             "no_telp_penanggung_jwb": "",
 *             "email_penanggung_jwb": ""
 *           }
 *         ],
 *         "data_proyek": [
 *           {
 *             "id_proyek": "",
 *             "nama_sistem_elektronik": "",
 *             "sektor_sistem": "",
 *             "url_sistem": "",
 *             "domain": "",
 *             "deskripsi_model_bisnis": "",
 *             "deskripsi_singkat_fungsi_sistem": "",
 *             "uraian_fungsi_sistem": "",
 *             "deskripsi_singkat_proses_bisnis_sistem": "",
 *             "uraian_proses_bisnis_sistem": "",
 *             "jumlah_pengguna_indonesia": "",
 *             "nilai_transaksi_indonesia": ""
 *           }
 *         ],
 *         "data_checklist": [
 *           {
 *             "id_proyek": "",
 *             "id_izin": "",
 *             "kd_izin": "",
 *             "kd_daerah": "",
 *             "nama_izin": "",
 *             "instansi": "",
 *             "kewenangan": "",
 *             "flag_checklist": ""
 *           }
 *         ],
 *         "jenis_id_user_proses": "",
 *         "no_id_user_proses": "",
 *         "nama_user_proses": "",
 *         "email_user_proses": "",
 *         "hp_user_proses": "",
 *         "alamat_user_proses": "",
 *         "jns_kelamin_user_proses": "",
 *         "tempat_lahir_user_proses": "",
 *         "tgl_lahir_user_proses": "",
 *         "daerah_id_user_proses": "",
 *         "rt_rw_user_proses": "",
 *         "agama_user_proses": "",
 *         "status_perkawinan_user_proses": "",
 *         "pekerjaan_user_proses": "",
 *         "status_nib": "",
 *         "tipe_dokumen": ""
 *       }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} Token SHA1(USERNAME+PASSWORD+NIB+DATE(Ymd))
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "Token": "OSS000qw13242628gssssss812345654709820180514"
 *     }
 * @apiBody {Object}	dataNIBPSE	dataNIBPSE			
 * @apiBody {string(13)}    	dataNIBPSE.nib	Nomor Induk Berusaha			
 * @apiBody {string(10)}    	dataNIBPSE.tgl_pengajuan_nib	Tanggal Pengajuan NIB (* Date Format YYYY-MM-DD)			
 * @apiBody {string(10)}    	dataNIBPSE.tgl_terbit_nib	Tanggal Terbit NIB (* Date Format YYYY-MM-DD)			
 * @apiBody {string(10)}    	dataNIBPSE.tgl_perubahan_nib	Tanggal Perubahan NIB (* Date Format YYYY-MM-DD)			
 * @apiBody {string(25)}    	dataNIBPSE.oss_id	Oss ID adalah ID yang di Generate Sistem OSS dan Dikirimkan ke L/L/D Bersama Permohonan Nomor Induk Berusaha (NIB)			
 * @apiBody {string(25)}    	dataNIBPSE.id_izin	Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS			
 * @apiBody {string(12)}    	dataNIBPSE.kd_izin	Kode Izin Sistem K/L/D			
 * @apiBody {string(10)}    	dataNIBPSE.kd_daerah	Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )			
 * @apiBody {string(2)}    	dataNIBPSE.kewenangan	00 : Kewenangan Pusat; 02 : Kewenangan Provinsi; 03 : Kewenangan Kab/Kota			
 * @apiBody {string(10)}    	dataNIBPSE.versi_pia	Versi PIA			
 * @apiBody {string(255)}    	dataNIBPSE.nama_prinsipal	Nama Prinsipal			
 * @apiBody {string(255)}    	dataNIBPSE.alamat_prinsipal	Alamat Prinsipal			
 * @apiBody {string(20)}    	dataNIBPSE.id_negara_prinsipal	ID Negara Prinsipal (* Sumber Kodefikasi Negara Mengikuti Standar Unedifact : http://www.unece.org/cefact/locode/ service/location )			
 * @apiBody {string(50)}    	dataNIBPSE.nomor_telepon_prinsipal	Nomor telepon prinsipal			
 * @apiBody {string(2)}    	dataNIBPSE.email_prinsipal	Email prinsipal			
 * @apiBody {string(50)}    	dataNIBPSE.no_akta_pendirian	Nomor Akta Pendirian			
 * @apiBody {string(255)}    	dataNIBPSE.tgl_akta_pendirian	Tanggal Akta Pendirian			
 * @apiBody {string(255)}    	dataNIBPSE.file_akta_prinsipal	File Akta Prinsipal			
 * @apiBody {string(2)}    	dataNIBPSE.file_akta_domisili	File Akta Domisili			
 * @apiBody {Object[]}    	dataNIBPSE.penanggung_jwb	    penanggung_jwb			
 * @apiBody {string(2)}    	dataNIBPSE.penanggung_jwb.no_identitas_penanggung_jwb	Nomor Identitas Penanggung Jawab			
 * @apiBody {string(100)}    	dataNIBPSE.penanggung_jwb.nama_penanggung_jwb	Nama Penanggung Jawab			
 * @apiBody {string(2)}    	dataNIBPSE.penanggung_jwb.negara_asal_penanggung_jwb	Negara Asal Penanggung Jawab			
 * @apiBody {string(255)}    	dataNIBPSE.penanggung_jwb.alamat_penanggung_jwb	Alamat Penanggung Jawab			
 * @apiBody {string(10)}    	dataNIBPSE.penanggung_jwb.daerah_id_penanggung_jwb	Daerah ID Penanggung Jawab			
 * @apiBody {string(20)}    	dataNIBPSE.penanggung_jwb.no_telp_penanggung_jwb	No Telepon Penanggung Jawab			
 * @apiBody {string(100)}    	dataNIBPSE.penanggung_jwb.email_penanggung_jwb	Email Penanggung Jawab			
 * @apiBody {Object[]}    	dataNIBPSE.data_proyek	    data_proyek			
 * @apiBody {string(30)}    	dataNIBPSE.data_proyek.id_proyek	ID Proyek			
 * @apiBody {string(100)}    	dataNIBPSE.data_proyek.nama_sistem_elektronik	Nama Sistem Elektronik			
 * @apiBody {string(3)}    	dataNIBPSE.data_proyek.sektor_sistem	Sektor			
 * @apiBody {string(255)}    	dataNIBPSE.data_proyek.url_sistem	URL system			
 * @apiBody {string(100)}    	dataNIBPSE.data_proyek.domain	Domain system			
 * @apiBody {string(255)}    	dataNIBPSE.data_proyek.deskripsi_model_bisnis	Deskripsi model bisnis			
 * @apiBody {string(255)}    	dataNIBPSE.data_proyek.deskripsi_singkat_fungsi_sistem	Deskripsi singkat fungsi system			
 * @apiBody {string(255)}    	dataNIBPSE.data_proyek.uraian_fungsi_sistem	Uraian fungsi system			
 * @apiBody {string(255)}    	dataNIBPSE.data_proyek.deskripsi_singkat_proses_bisnis_sistem	Deskripsi singkat proses bisnis system			
 * @apiBody {string(255)}    	dataNIBPSE.data_proyek.uraian_proses_bisnis_sistem	Uraian proses bisnis system			
 * @apiBody {string(30)}    	dataNIBPSE.data_proyek.jumlah_pengguna_indonesia	Jumlah pengguna Indonesia			
 * @apiBody {string(30)}    	dataNIBPSE.data_proyek.nilai_transaksi_indonesia	Nilai transaksi indonesia			
 * @apiBody {Object[]}    	dataNIBPSE.data_checklist	    data_checklist			
 * @apiBody {string(25)}    	dataNIBPSE.data_checklist.id_proyek	ID Proyek OSS			
 * @apiBody {string(25)}    	dataNIBPSE.data_checklist.id_izin	Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS			
 * @apiBody {string(13)}    	dataNIBPSE.data_checklist.kd_izin	Kode Izin Sistem K/L/D			
 * @apiBody {string(10)}    	dataNIBPSE.data_checklist.kd_daerah	Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)			
 * @apiBody {string(255)}    	dataNIBPSE.data_checklist.nama_izin	Nama Izin			
 * @apiBody {string(100)}    	dataNIBPSE.data_checklist.instansi	Nama Instansi			
 * @apiBody {string(2)}    	dataNIBPSE.data_checklist.kewenangan	00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota			
 * @apiBody {string(1)}    	dataNIBPSE.data_checklist.flag_checklist	Flag Checklist 			
 * @apiBody {string(2)}    	dataNIBPSE.jenis_id_user_proses	Kode Jenis Identitas (* Lihat Lampiran 4)			
 * @apiBody {string(25)}    	dataNIBPSE.no_id_user_proses	No Identitas Pemroses NIB			
 * @apiBody {string(100)}    	dataNIBPSE.nama_user_proses	Nama User Pemroses NIB			
 * @apiBody {string(50)}    	dataNIBPSE.email_user_proses	Email User Pemroses NIB			
 * @apiBody {string(25)}    	dataNIBPSE.hp_user_proses	No HP Pemroses NIB			
 * @apiBody {string(255)}    	dataNIBPSE.alamat_user_proses	Alamat Pemroses NIB			
 * @apiBody {string(1)}    	dataNIBPSE.jns_kelamin_user_proses	Jenis Kelamin Pemroses NIB (L : Laki- Laki, P : Perempuan)			
 * @apiBody {string(100)}    	dataNIBPSE.tempat_lahir_user_proses	Tempat Lahir Pemroses NIB			
 * @apiBody {string(10)}    	dataNIBPSE.tgl_lahir_user_proses	Tanggal Lahir User Pemroses (format date : YYYY-MM-DD)			
 * @apiBody {string(10)}    	dataNIBPSE.daerah_id_user_proses	ID Daerah User Pemroses(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf )			
 * @apiBody {string(10)}    	dataNIBPSE.rt_rw_user_proses	RT RW Pemroses NIB			
 * @apiBody {string(50)}    	dataNIBPSE.agama_user_proses	Agama Pemroses NIB			
 * @apiBody {string(50)}    	dataNIBPSE.status_perkawinan_user_proses	Status Perkawinan Pemroses NIB			
 * @apiBody {string(50)}    	dataNIBPSE.pekerjaan_user_proses	Pekerjaan Pemroses NIB			
 * @apiBody {string(2)}    	dataNIBPSE.status_nib	Status Penerbitan NIB (* Lihat Lampiran 14)			
 * @apiBody {string(1)}    	dataNIBPSE.tipe_dokumen	Tipe Dokumen (9:Original, 5:Update, 3:Pencabutan, 4:Pembatalan)			
 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *       "dataNIBPSE": {
 *         "nib": "",
 *         "tgl_pengajuan_nib": "",
 *         "tgl_terbit_nib": "",
 *         "tgl_perubahan_nib": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "versi_pia": "",
 *         "nama_prinsipal": "",
 *         "alamat_prinsipal": "",
 *         "id_negara_prinsipal": "",
 *         "nomor_telepon_prinsipal": "",
 *         "email_prinsipal": "",
 *         "no_akta_pendirian": "",
 *         "tgl_akta_pendirian": "",
 *         "file_akta_prinsipal": "",
 *         "file_akta_domisili": "",
 *         "penanggung_jwb": [
 *           {
 *             "no_identitas_penanggung_jwb": "",
 *             "nama_penanggung_jwb": "",
 *             "negara_asal_penanggung_jwb": "",
 *             "alamat_penanggung_jwb": "",
 *             "daerah_id_penanggung_jwb": "",
 *             "no_telp_penanggung_jwb": "",
 *             "email_penanggung_jwb": ""
 *           }
 *         ],
 *         "data_proyek": [
 *           {
 *             "id_proyek": "",
 *             "nama_sistem_elektronik": "",
 *             "sektor_sistem": "",
 *             "url_sistem": "",
 *             "domain": "",
 *             "deskripsi_model_bisnis": "",
 *             "deskripsi_singkat_fungsi_sistem": "",
 *             "uraian_fungsi_sistem": "",
 *             "deskripsi_singkat_proses_bisnis_sistem": "",
 *             "uraian_proses_bisnis_sistem": "",
 *             "jumlah_pengguna_indonesia": "",
 *             "nilai_transaksi_indonesia": ""
 *           }
 *         ],
 *         "data_checklist": [
 *           {
 *             "id_proyek": "",
 *             "id_izin": "",
 *             "kd_izin": "",
 *             "kd_daerah": "",
 *             "nama_izin": "",
 *             "instansi": "",
 *             "kewenangan": "",
 *             "flag_checklist": ""
 *           }
 *         ],
 *         "jenis_id_user_proses": "",
 *         "no_id_user_proses": "",
 *         "nama_user_proses": "",
 *         "email_user_proses": "",
 *         "hp_user_proses": "",
 *         "alamat_user_proses": "",
 *         "jns_kelamin_user_proses": "",
 *         "tempat_lahir_user_proses": "",
 *         "tgl_lahir_user_proses": "",
 *         "daerah_id_user_proses": "",
 *         "rt_rw_user_proses": "",
 *         "agama_user_proses": "",
 *         "status_perkawinan_user_proses": "",
 *         "pekerjaan_user_proses": "",
 *         "status_nib": "",
 *         "tipe_dokumen": ""
 *       }
 *     }
 * @apiSuccess (200) {Object} responreceiveNIBPSE               Response receive NIB PSE
 * @apiSuccess (200) {String(1)} responreceiveNIBPSE.status        Status Respon (1 : TRUE; 2 : FALSE)
 * @apiSuccess (200) {String(255)} responreceiveNIBPSE.keterangan    Keterangan Respon
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responreceiveNIBPSE": {
 *     		 "status": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responreceiveNIBPSE": {
 *     		 "status": "",
 *     		 "keterangan": ""
 *     	 }
 *     }
 */

/**
 * @api {post} /inqueryFileDS Inquery File DS
 * @apiVersion 4.3.19
 * @apiDescription Service digunakan oleh sistem K/L/D untuk mendapatkan informasi url file hasil merge dokumen Izin, Sertifikat Standar, atau PB-UMKU berdasarkan id izin
 * @apiName inqueryFileDS
 * @apiGroup File DS
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/inqueryFileDS' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *      "INQUERYFILEDS": {
 *      "id_permohonan_izin": "I-202106062348085310001"
 *      }
 *     }'

 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object}	    INQUERYFILEDS	                        INQUERYFILEDS
 * @apiBody {string(25)}    	INQUERYFILEDS.id_permohonan_izin	    Merupakan ID pengajuan, yaitu permohonan perizinan yang digenerate oleh sistem OSS
 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "INQUERYFILEDS": {
 *     		 "id_permohonan_izin": ""
 *     	 }
 *     }
 * @apiSuccess (200) {Object} responInqueryFileDS               Response Inquery File DS
 * @apiSuccess (200) {String(5)} responInqueryFileDS.status        Status Respon
 * @apiSuccess (200) {String(255)} responInqueryFileDS.keterangan    Keterangan Respon
 * @apiSuccess (200) {String(255)} responInqueryFileDS.url_file_ds   Url file hasil merge dokumen Izin, Sertifikat Standar, atau PB-UMKU
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responInqueryFileDS": {
 *     		 "status": "200",
 *     		 "keterangan": "sukses",
 *     		 "url_file_ds": "https://server-oss-go-id/dev/v1//file/download/U202107081515591165814"
 *     	 }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responInqueryFileDS": {
 *     		 "status": "400",
 *     		 "keterangan": "data izin atau file DS tidak ditemukan"
 *     	 }
 *     }
 */

/**
 * @api {post} /updateLicense Update License
 * @apiVersion 4.3.19
 * @apiDescription Pengiriman Data Izin Final dari Sistem K/L/D ke Sistem OSS
 * @apiName updateLicense
 * @apiGroup License
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/updateLicense' \
 *     --header 'user_key: {{user_key}}' \
 *     --header 'Content-Type: application/json' \
 *     --data-raw '{
 *       "IZINFINAL": {
 *         "nib": "",
 *         "id_proyek": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "nomor_izin": "",
 *         "tgl_terbit_izin": "",
 *         "tgl_berlaku_izin": "",
 *         "nama_ttd": "",
 *         "nip_ttd": "",
 *         "jabatan_ttd": "",
 *         "status_izin": "",
 *         "file_izin": "",
 *         "keterangan": "",
 *         "file_lampiran": "",
 *         "nomenklatur_nomor_izin": "",
 *         "bln_berlaku_izin": "",
 *         "thn_berlaku_izin": ""
 *       }
 *     }'
 
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object}    	IZINFINAL	        IZINFINAL
 * @apiBody {string(13)}    	IZINFINAL.nib	    Nomor Induk Berusaha
 * @apiBody {string(25)}    	IZINFINAL.id_proyek	    ID / Kode Proyek
 * @apiBody {string(25)}    	IZINFINAL.oss_id	    Oss Id adalah ID yang di Generate Sistem OSS dan Dikirimkan ke K/L/D Bersama Permohonan Nomor Induk Berusaha
 * @apiBody {string(25)}    	IZINFINAL.id_izin	    Merupakan ID Pengajuan Permohonan Perizinan yang di Generate Sistem OSS, Untuk Pengiriman Status Izin
 * @apiBody {string(12)}    	IZINFINAL.kd_izin	    Kode Izin Sistem K/L/D (* Lihat Lampiran 8)
 * @apiBody {string(10)}    	IZINFINAL.kd_daerah	    Daerah/Lokasi Investasi(* Menggunakan Kodefikasi yang diterbitkan oleh Kemendagri - Permendagri No 72 Tahun 2019 : https://www.kemendagri.go.id/files/2020/PMDN 72 TH 2019+lampiran.pdf)
 * @apiBody {string(2)}    	IZINFINAL.kewenangan	    00: Kewenangan Pusat; 01: Kewenangan Provinsi; 02: Kewenangan Kab/Kota
 * @apiBody {string(50)}    	IZINFINAL.nomor_izin	    Nomor Izin Final
 * @apiBody {string(10)}    	IZINFINAL.tgl_terbit_izin	    Tanggal Izin Final (format date : YYYY-MM-DD)
 * @apiBody {string(10)}    	IZINFINAL.tgl_berlaku_izin	    Tanggal Berlaku Izin Final (format date : YYYY-MM-DD)
 * @apiBody {string(50)}    	IZINFINAL.nama_ttd	    Nama Penandatangan Izin
 * @apiBody {string(25)}    	IZINFINAL.nip_ttd	    Nip Penandatangan Izin
 * @apiBody {string(150)}    	IZINFINAL.jabatan_ttd	    Jabatan Penandatangan Izin
 * @apiBody {string(2)}    	IZINFINAL.status_izin	    Status Izin di Sistem OSS (* Lihat Lampiran 10)
 * @apiBody {string(65535)}    	IZINFINAL.file_izin	    Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB) 
 * @apiBody {string(65535)}    	IZINFINAL.keterangan	    Keterangan Status Izin
 * @apiBody {string(65535)}    	IZINFINAL.file_lampiran	    Attachment File Izin dalam Bentuk File PDF Berupa Link (* Ukuran File Maks: 2MB) 
 * @apiBody {string(255)}    	IZINFINAL.nomenklatur_nomor_izin	    Nomenklatur nomor izin
 * @apiBody {string(5)}    	IZINFINAL.bln_berlaku_izin	    Jangka waktu berlaku izin dalam bulan
 * @apiBody {string(5)}    	IZINFINAL.thn_berlaku_izin	    Jangka waktu berlaku izin dalam tahun
 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *       "IZINFINAL": {
 *         "nib": "",
 *         "id_proyek": "",
 *         "oss_id": "",
 *         "id_izin": "",
 *         "kd_izin": "",
 *         "kd_daerah": "",
 *         "kewenangan": "",
 *         "nomor_izin": "",
 *         "tgl_terbit_izin": "",
 *         "tgl_berlaku_izin": "",
 *         "nama_ttd": "",
 *         "nip_ttd": "",
 *         "jabatan_ttd": "",
 *         "status_izin": "",
 *         "file_izin": "",
 *         "keterangan": "",
 *         "file_lampiran": "",
 *         "nomenklatur_nomor_izin": "",
 *         "bln_berlaku_izin": "",
 *         "thn_berlaku_izin": ""
 *       }
 *     }
 * @apiSuccess (200) {Object} responupdateLicense                               Response update license
 * @apiSuccess (200) {String(3)} responupdateLicense.kode                          Kode Respon 
 * @apiSuccess (200) {String(255)} responupdateLicense.keterangan                    Keterangan Respon
 * @apiSuccess (200) {String(255)} responupdateLicense.keterangan_reset_izin_ds      Keterangan reset izin DS
 * @apiSuccess (200) {String(20)} responupdateLicense.nomor_izin                    Keterangan nomor izin
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     	 "responupdateLicense": {
 *     		 "kode": 200,
 *     		 "keterangan": "Sukses",
 *     		 "keterangan_reset_izin_ds": "Berhasil Reset DS",
 *     		 "nomor_izin": "11111111"
 *     	 }
 *     }
 * @apiError (400) 400 Data Parameter Salah.
 * @apiError (401) 401 User Akses Tidak Valid.
 * @apiError (403) 403 Ilegal Inquiry / Akses.
 * @apiError (404) 404  Service Tidak Ditemukan.
 * @apiError (405) 405 Akses Service Ditolak.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiError (504) 504 Proses Payload Data Di Sistem OSS Timeout.
 * @apiErrorExample Error-Response:
 *     {
 *     	 "responupdateLicense": {
 *     		 "kode": 400,
 *     		 "keterangan": "OSS ID tidak ditemukan",
 *         "keterangan_reset_izin_ds": "Gagal Reset DS",
 *         "nomor_izin": ""
 *     	 }
 *     }
 */

/**
 * @api {post} /receiveCertificate Receive Certificate
 * @apiVersion 4.3.19
 * @apiDescription Receive Certificate di Sistem OSS
 * @apiName receiveCertificate
 * @apiGroup Certificate
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request POST 'https://server.digitaltelkom.dev/oss-sandbox/receiveCertificate' \
 *     --header 'user_key: sJS23n1usBDj23192312312i3nsSo2sn' \
 *     --header 'Content-Type: application/json' \
 *     --header 'Cookie: 8dd21093c6d03524cf9bc1ea99ad0576=9fe0048f4a04f91724dbe52f7c2cb5b7; 37dda41a6b8fc67de27a64fec9698b47=2354519a64edc01027a66707592dc003' \
 *     --data-raw '{
 *         "DATACERTIFICATE":{
 *             "id_permohonan_izin":"I-202112171709158243106",
 *             "nomor_sertifikat":"1021238123713282",
 *             "tanggal_terbit":"2022-09-03",
 *             "masa_berlaku":"2",
 *             "satuan_waktu":"06",
 *             "jenis_sertifikat":"02",
 *             "url_sertifikat":"https://google.com"
 *         }
 *     }'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiBody {Object}	 receiveCertificate	                        receiveCertificate
 * @apiBody {string}    receiveCertificate.id_permohonan_izin	    id_permohonan_izin
 * @apiBody {string}    receiveCertificate.nomor_sertifikat	    nomor_sertifikat
 * @apiBody {string}    receiveCertificate.url_sertifikat	        url_sertifikat
 * @apiBody {string}    receiveCertificate.tanggal_terbit	        tanggal_terbit
 * @apiBody {string}    receiveCertificate.masa_berlaku	        masa_berlaku
 * @apiBody {string}    receiveCertificate.jenis_sertifikat	    jenis_sertifikat
 * @apiBody {string}    receiveCertificate.satuan_waktu	                satuan_waktu
 * @apiParamExample {json} RequestBody-Example:
 *     HTTP/1.1 200 OK
 *     {
 *         "receiveCertificate": {
 *             "id_permohonan_izin": "I-20222131239123321",
 *             "nomor_sertifikat":"1220320222131239123321",
 *             "url_sertifikat":"https://bpjph.pu.id/sertifikat/1220320222131239123321",
 *             "tanggal_terbit":"2022-12-14",
 *             "masa_berlaku":"2",
 *             "jenis_sertifikat":"02",
 *             "satuan_waktu":"06"
 *         }
 *      }
 * 
 * @apiSuccess (200) {Object}	    responReceiveCertificate	                                        responReceiveCertificate
 * @apiSuccess (200) {string}    	responReceiveCertificate.kode	                                    kode
 * @apiSuccess (200) {string}    	responReceiveCertificate.keterangan	                                keterangan
 * @apiSuccess (200) {string}    	responReceiveCertificate.dataCertificate	                        dataCertificate
 * @apiSuccess (200) {string}    	responReceiveCertificate.dataCertificate.id_permohonan_izin	        id_permohonan_izin
 * @apiSuccess (200) {string}    	responReceiveCertificate.dataCertificate.nomor_sertifikat	        nomor_sertifikat
 * @apiSuccess (200) {string}    	responReceiveCertificate.dataCertificate.tanggal_terbit	            tanggal_terbit
 * @apiSuccess (200) {string}    	responReceiveCertificate.dataCertificate.masa_berlaku	            masa_berlaku
 * @apiSuccess (200) {string}    	responReceiveCertificate.dataCertificate.satuan_waktu	            satuan_waktu
 * @apiSuccess (200) {string}    	responReceiveCertificate.dataCertificate.jenis_sertifikat	        jenis_sertifikat
 * @apiSuccess (200) {string}    	responReceiveCertificate.dataCertificate.url_sertifikat	            url_sertifikat
 * @apiSuccess (200) {string}    	responReceiveCertificate.dataCertificate.id_sertifikat	            id_sertifikat
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "responReceiveCertificate": {
 *             "kode": 200,
 *             "keterangan": "Data sertifikat berhasil ditambahkan",
 *             "dataCertificate": {
 *                 "id_permohonan_izin": "I-202112171709158243106",
 *                 "nomor_sertifikat": "1021238123713282",
 *                 "tanggal_terbit": "2022-09-03",
 *                 "masa_berlaku": "2",
 *                 "satuan_waktu": "06",
 *                 "jenis_sertifikat": "02",
 *                 "url_sertifikat": "https://google.com",
 *                 "id_sertifikat": "SHI-202209042313439514283"
 *             }
 *         }
 *     }
 * @apiError (400) 400 Parameter tidak ditemukan.
 * @apiError (404) 404 Method Tidak Ditemukan.
 * @apiError (500) 500 Proses Payload Data Di Sistem OSS Gagal.
 * @apiErrorExample Error-Response:
 *     {
 *         "responReceiveCertificate": {
 *             "kode": "",
 *             "keterangan": "",
 *             "dataCertificate": {}
 *         }
 *     }
 */

/**
 * @api {get} /inqueryCertificate/{id_permohonan_izin} Inquiry Certificate
 * @apiVersion 4.3.19
 * @apiDescription Inquery Certificate di Sistem OSS
 * @apiName inqueryCertificate
 * @apiGroup Certificate
 * @apiExample {curl} Curl Request Example:
 *     curl --location --request GET 'https://server.digitaltelkom.dev/oss-sandbox/inqueryCertificate/I-202112171709158243106' \
 *     --header 'user_key: sJS23n1usBDj23192312312i3nsSo2sn' \
 *     --header 'Cookie: 8dd21093c6d03524cf9bc1ea99ad0576=9fe0048f4a04f91724dbe52f7c2cb5b7; 37dda41a6b8fc67de27a64fec9698b47=2354519a64edc01027a66707592dc003'
 * @apiHeader {String} Content-Type Content Type Request.
 * @apiHeader {String} user_key Users unique access-key.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Content-Type": "application/json",
 *       "user_key": {{user_key}}
 *     }
 * @apiSuccess (200) {Object}	    responInqueryCertificate	                                        responInqueryCertificate
 * @apiSuccess (200) {string}    	responInqueryCertificate.kode	                                    kode
 * @apiSuccess (200) {string}    	responInqueryCertificate.keterangan	                                keterangan
 * @apiSuccess (200) {string}    	responInqueryCertificate.dataCertificate	                        dataCertificate
 * @apiSuccess (200) {string}    	responInqueryCertificate.dataCertificate.id_sertifikat	            id_sertifikat
 * @apiSuccess (200) {string}    	responInqueryCertificate.dataCertificate.id_permohonan_izin	        id_permohonan_izin
 * @apiSuccess (200) {string}    	responInqueryCertificate.dataCertificate.nomor_sertifikat	        nomor_sertifikat
 * @apiSuccess (200) {string}    	responInqueryCertificate.dataCertificate.tanggal_terbit	            tanggal_terbit
 * @apiSuccess (200) {string}    	responInqueryCertificate.dataCertificate.masa_berlaku	            masa_berlaku
 * @apiSuccess (200) {string}    	responInqueryCertificate.dataCertificate.jenis_sertifikat	        jenis_sertifikat
 * @apiSuccess (200) {string}    	responInqueryCertificate.dataCertificate.url_sertifikat	            url_sertifikat
 * @apiSuccess (200) {string}    	responInqueryCertificate.dataCertificate.keterangan	                keterangan
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "responInqueryCertificate": {
 *             "kode": 200,
 *             "keterangan": "Data sertifikat berhasil ditemukan",
 *             "dataCertificate": {
 *                 "id_sertifikat": "SHI-202209042313439514283",
 *                 "id_permohonan_izin": "I-202112171709158243106",
 *                 "nomor_sertifikat": "1021238123713282",
 *                 "tanggal_terbit": "2022-09-02T17:00:00.000Z",
 *                 "masa_berlaku": "2 Tahun",
 *                 "jenis_sertifikat": "حَلاَلً (Hallal) BPJPH",
 *                 "url_sertifikat": "https://google.com",
 *                 "keterangan": null
 *             }
 *         }
 *     }
 * @apiError (400) 400 Data tidak ditemukan.
 * @apiError (404) 404 Method Tidak Ditemukan.
 * @apiErrorExample Error-Response:
 *     {
 *         "responInqueryCertificate": {
 *             "kode": "",
 *             "keterangan": "",
 *             "dataCertificate": {}
 *         }
 *     }
 */
