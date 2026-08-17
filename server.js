import supabase from "./supabase.js";
import "dotenv/config"
import express from "express"

const app = express()

app.listen(process.env.PORT, ()=> console.log(`Listening on Port ${process.env.PORT}`))


