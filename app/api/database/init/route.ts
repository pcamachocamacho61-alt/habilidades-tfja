import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COLLECTIONS = [
"users",
"route_progress",
"evaluation_attempts",
"badges",
"notes",
"alerts",
"reset_requests",
"audit_logs",
] as const;

export async function POST() {
try {
const database = await getDatabase();

const existingCollections = await database
  .listCollections({}, { nameOnly: true })
  .toArray();

const existingNames = new Set(
  existingCollections.map((collection) => collection.name)
);

const createdCollections: string[] = [];

for (const collectionName of COLLECTIONS) {
  if (!existingNames.has(collectionName)) {
    await database.createCollection(collectionName);
    createdCollections.push(collectionName);
  }
}

await database.collection("users").createIndex(
  { email: 1 },
  {
    unique: true,
    name: "unique_user_email",
  }
);

await database.collection("route_progress").createIndex(
  { userEmail: 1, routeId: 1 },
  {
    unique: true,
    name: "unique_user_route_progress",
  }
);

await database.collection("evaluation_attempts").createIndex(
  { userEmail: 1, routeId: 1, evaluationId: 1, attemptNumber: 1 },
  {
    unique: true,
    name: "unique_evaluation_attempt",
  }
);

await database.collection("badges").createIndex(
  { userEmail: 1, routeId: 1 },
  {
    unique: true,
    name: "unique_user_route_badge",
  }
);

await database.collection("notes").createIndex(
  { userEmail: 1 },
  {
    unique: true,
    name: "unique_user_note",
  }
);

await database.collection("alerts").createIndex(
  { userEmail: 1, status: 1, createdAt: -1 },
  {
    name: "alerts_by_user_status_date",
  }
);

await database.collection("reset_requests").createIndex(
  { userEmail: 1, routeId: 1, status: 1 },
  {
    name: "reset_requests_by_user_route_status",
  }
);

await database.collection("audit_logs").createIndex(
  { createdAt: -1 },
  {
    name: "audit_logs_by_date",
  }
);

return NextResponse.json({
  ok: true,
  message: "Base de datos inicializada correctamente.",
  database: database.databaseName,
  createdCollections,
  collections: COLLECTIONS,
});

} catch (error) {
console.error("Error al inicializar MongoDB:", error);

return NextResponse.json(
  {
    ok: false,
    message: "No fue posible inicializar la base de datos.",
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