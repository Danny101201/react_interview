/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import express from 'express'
import path from 'path'
import fs from 'fs'

const app = express()
// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

app.get('/', async (req, res) => {
  const filePath = path.resolve(__dirname, "./dist", "index.html")
  try {
    let data = fs.readFileSync(filePath, 'utf8');
    // change the following lines accordingly
    const { color } = req.query
    if (!color) {
      data = data
        .replace(/__TITLE__/g, "Create React App")
        .replace(/__THUMB__/g, "")
        .replace(/__DESCRIPTION__/g, "Web site created using create-react-app")
    } else {
      data = data
        .replace(/__TITLE__/g, `This is ${color} color React App`)
        .replace(/__THUMB__/g, "")
        .replace(/__DESCRIPTION__/g, `This is ${color} color description`)
    }

    res.send(data)
  } catch (error) {
    res.sendStatus(500)
  }
})

app.use(express.static(path.resolve(__dirname, "./dist")))
export const webApi = onRequest(app)