import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
try {
const database = await getDatabase();

await database.command({
  ping: 1,
});

return NextResponse.json({
  ok: true,
  message: "Conexión correcta con MongoDB.",
  database: database.databaseName,
});

} catch (error) {
console.error("Error de conexión con MongoDB:", error);

return NextResponse.json(
  {
    ok: false,
    message: "No fue posible conectar con MongoDB.",
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