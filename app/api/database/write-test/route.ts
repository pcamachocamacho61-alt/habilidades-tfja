import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
try {
const database = await getDatabase();
const collection = database.collection("_connection_test");

const result = await collection.insertOne({
  message: "Prueba de escritura",
  createdAt: new Date(),
});

await collection.deleteOne({
  _id: result.insertedId,
});

return NextResponse.json({
  ok: true,
  message: "El usuario tiene permisos de escritura en habilidades.",
});

} catch (error) {
return NextResponse.json(
{
ok: false,
message: "El usuario no pudo escribir en habilidades.",
error:
error instanceof Error
? error.message
: "Error desconocido.",
},
{
status: 500,
}
);
}
}