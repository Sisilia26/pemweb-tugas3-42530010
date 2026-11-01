const db = require('../config/database');

const Produk = {
    // Mengambil semua produk
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM produk ORDER BY id DESC');
        return rows;
    },

    // Menambah produk baru
    create: async (data) => {
        const { nama_produk, kategori, harga, stok } = data;
        const [result] = await db.query(
            'INSERT INTO produk (nama_produk, kategori, harga, stok) VALUES (?, ?, ?, ?)',
            [nama_produk, kategori, harga, stok]
        );
        return result;
    },

    // [BARU] Mengambil produk berdasarkan ID untuk form edit
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM produk WHERE id = ?', [id]);
        return rows[0];
    },

    // [BARU] Memperbarui data produk
    update: async (id, data) => {
        const { nama_produk, kategori, harga, stok } = data;
        const [result] = await db.query(
            'UPDATE produk SET nama_produk = ?, kategori = ?, harga = ?, stok = ? WHERE id = ?',
            [nama_produk, kategori, harga, stok, id]
        );
        return result;
    },

    // [BARU] Menghapus data produk
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM produk WHERE id = ?', [id]);
        return result;
    }
};

module.exports = Produk;