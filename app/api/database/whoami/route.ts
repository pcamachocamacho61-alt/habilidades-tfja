import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
try {
const database = await getDatabase();

const status = await database.command({
  connectionStatus: 1,
  showPrivileges: true,
});

return NextResponse.json({
  ok: true,
  database: database.databaseName,
  authenticatedUsers:
    status.authInfo?.authenticatedUsers ?? [],
  authenticatedUserRoles:
    status.authInfo?.authenticatedUserRoles ?? [],
  authenticatedUserPrivileges:
    status.authInfo?.authenticatedUserPrivileges ?? [],
});

} catch (error) {
return NextResponse.json(
{
ok: false,
message: "No fue posible consultar los permisos.",
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