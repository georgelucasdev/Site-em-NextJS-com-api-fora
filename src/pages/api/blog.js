import credencial from '../../services/teste.json'
import { GoogleSpreadsheet } from 'google-spreadsheet'


export default async function (req, res) {
    const doc = new GoogleSpreadsheet(credencial.google_sheet_id);

    await doc.useServiceAccountAuth({
        client_email: credencial.client_email,
        private_key: credencial.private_key,
    })
    await doc.loadInfo();
    console.log(doc.title);

    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();


    res.send({
        titulo: [

        ]
    })
}