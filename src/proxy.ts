import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOST = "www.jaxonwallace.com";
const LEGACY_VERCEL_HOST = "jaxonwallace-next.vercel.app";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (host === LEGACY_VERCEL_HOST) {
    const destination = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      `https://${CANONICAL_HOST}`,
    );

    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|og-image.png).*)",
};
