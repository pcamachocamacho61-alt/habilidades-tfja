"use client";

export type DemoUser = {
  name: string;
  email: string;
  initials: string;
  role: "user" | "admin";
};

export const DEMO_USER_KEY = "habilidades-tfja:demo-user";
export const SESSION_CHANGED_EVENT = "habilidades-tfja:session-changed";

export function readStoredDemoUser(): DemoUser | null {
  try {
    const storedUser = window.localStorage.getItem(DEMO_USER_KEY);

    if (!storedUser) {
      return null;
    }

    const parsedUser = JSON.parse(storedUser) as Partial<DemoUser>;

    if (!parsedUser.name || !parsedUser.email || !parsedUser.initials) {
      return null;
    }

    return {
      name: parsedUser.name,
      email: parsedUser.email.toLowerCase(),
      initials: parsedUser.initials,
      role: parsedUser.role === "admin" ? "admin" : "user",
    };
  } catch {
    return null;
  }
}

export async function registerDemoUser(user: DemoUser): Promise<void> {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const result = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    throw new Error(
      result?.message ?? "No fue posible registrar el usuario en MongoDB."
    );
  }
}
