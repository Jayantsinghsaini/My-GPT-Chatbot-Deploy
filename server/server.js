import 'dotenv/config';
import express from 'express'
import { initializeApp } from './controllers/chatController.js'
import router from './routes/chatRoutes.js'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = process.env.PORT || 3000;

app.use(express.text())
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../client')))
app.use('/', router)

initializeApp()
.then(() => {
    app.listen(port, () => {
        console.log(`app is listening at http://localhost:${port}`)
    })
})
.catch(error => console.error(error))
