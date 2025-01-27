const { PinataClient } = require('@pinata/sdk');
const fs = require('fs');
const path = require('path');

// Remplace par tes propres clés API
const pinata = new PinataClient({
    pinataApiKey: '4c653df04e5b28a67fd2',
    pinataApiSecret: 'bb284f5278c3bd9b029a0ef756bbc8945bab336b04141d2e1b0c5c5765ab9d01',
});

(async () => {
    try {
        const filePath = path.join(__dirname, 'index.html');
        const readableStreamForFile = fs.createReadStream(filePath);

        const result = await pinata.pinFileToIPFS(readableStreamForFile);
        console.log('Fichier uploadé avec succès :', result);
    } catch (err) {
        console.error('Erreur pendant l\'upload :', err);
    }
})();