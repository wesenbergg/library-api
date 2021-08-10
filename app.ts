import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

// app.use("/api/route", router)

// app.use(errorHandler)

export default app
