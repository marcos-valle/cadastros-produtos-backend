import postgres from "postgres";
import "dotenv/config";

const {PGHOST, PGUSER, PGPASSWORD, PGDATABASE, ENDPOINT_ID} = process.env
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`

export const sql = postgres(URL, { ssl: 'require'})
