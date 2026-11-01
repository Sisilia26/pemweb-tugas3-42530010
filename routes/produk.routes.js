const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produk.controller');

router.get('/', produkController.getDaftarProduk);
router.get('/produk', produkController.getDaftarProduk);
router.get('/produk/tambah', produkController.getFormTambah);
router.post('/produk/tambah', produkController.postTambahProduk);

// [BARU] Rute Edit dan Hapus
router.get('/produk/edit/:id', produkController.getFormEdit);
router.post('/produk/edit/:id', produkController.postEditProduk);
router.post('/produk/hapus/:id', produkController.postHapusProduk);

module.exports = router;