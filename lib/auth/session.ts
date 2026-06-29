"use client";

import type { Role } from "@/types";

const accessTokenKey = "akaraconnect_access_token";
const refreshTokenKey = "akaraconnect_refresh_token";
const rolesKey = "akaraconnect_roles";

export type ClientSession = {
  accessToken: string;
  refreshToken?: string;
  roles: Role[];
};

export function saveSession(session: ClientSession) {
  window.localStorage.setItem(accessTokenKey, session.accessToken);
  if (session.refreshToken) window.localStorage.setItem(refreshTokenKey, session.refreshToken);
  window.localStorage.setItem(rolesKey, JSON.stringify(session.roles));
  document.cookie = `akaraconnect_session=1; path=/; SameSite=Lax`;
}

export function getSession(): ClientSession | null {
  const accessToken = window.localStorage.getItem(accessTokenKey);
  if (!accessToken) return null;
  const refreshToken = window.localStorage.getItem(refreshTokenKey) ?? undefined;
  const roles = JSON.parse(window.localStorage.getItem(rolesKey) ?? "[]") as Role[];
  return { accessToken, refreshToken, roles };
}

export function clearSession() {
  window.localStorage.removeItem(accessTokenKey);
  window.localStorage.removeItem(refreshTokenKey);
  window.localStorage.removeItem(rolesKey);
  document.cookie = "akaraconnect_session=; path=/; max-age=0; SameSite=Lax";
}

export function hasRole(session: ClientSession | null, allowed: Role[]) {
  return Boolean(session?.roles.some((role) => allowed.includes(role)));
}
