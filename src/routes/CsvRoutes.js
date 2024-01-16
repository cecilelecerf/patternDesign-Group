const CsvAdapter = require('../adapters/CsvAdapter');
const multer = require("multer");
const upload = multer({ dest: '../adapters/uploads/' }); // Spécifiez le répertoire de téléchargement

module.exports = (app) => {
    /**
     * @swagger
     * /upload-csv:
     *   post:
     *     summary: Importer des véhicules à partir d'un fichier CSV
     *     tags: [Cars]
     *     requestBody:
     *       required: true
     *       content:
     *         multipart/form-data:
     *           schema:
     *             type: object
     *             properties:
     *               file:
     *                 type: string
     *                 format: binary
     *     responses:
     *       200:
     *         description: Véhicules importés avec succès
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: Message de succès
     *       500:
     *         description: Erreur serveur
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: Message d'erreur
     */
    app.route("/upload-csv").post(upload.single('file'), async (req, res) => {
        try {
            const fileName = req.file.path;
            const adapter = new CsvAdapter(fileName);
            await adapter.importCsvToVehicles();
        } catch (error) {
            res.status(500).json({ message: 'Erreur serveur', error: error.message });
        }
    });
};
