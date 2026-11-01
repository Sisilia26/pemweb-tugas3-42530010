const Produk = require('../models/produk.model');

// Menampilkan daftar produk
exports.getDaftarProduk = async (req, res) => {
    try {
        const produkList = await Produk.getAll();
        res.render('pages/produk-list', {
            pageTitle: 'Daftar Produk',
            produkList: produkList
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

// Menampilkan form tambah produk
exports.getFormTambah = (req, res) => {
    res.render('pages/produk-add', {
        pageTitle: 'Tambah Produk Baru'
    });
};

// Memproses data form tambah produk
exports.postTambahProduk = async (req, res) => {
    try {
        await Produk.create(req.body);
        res.redirect('/produk');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menyimpan data produk');
    }
};

// [BARU] Menampilkan form edit produk beserta datanya
exports.getFormEdit = async (req, res) => {
    try {
        const produk = await Produk.getById(req.params.id);
        if (!produk) {
            return res.status(404).send('Produk tidak ditemukan');
        }
        res.render('pages/produk-edit', {
            pageTitle: 'Edit Produk',
            produk: produk
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

// [BARU] Memproses update data produk
exports.postEditProduk = async (req, res) => {
    try {
        await Produk.update(req.params.id, req.body);
        res.redirect('/produk');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal memperbarui data produk');
    }
};

// [BARU] Menghapus produk
exports.postHapusProduk = async (req, res) => {
    try {
        await Produk.delete(req.params.id);
        res.redirect('/produk');
    } catch (error) {
        console.error(error);
        res.status(500).send('Gagal menghapus data produk');
    }
};