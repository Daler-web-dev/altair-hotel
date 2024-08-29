import { NextResponse } from "next/server";
import { i18n } from "@/i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request) {
    const negotiatorHeaders = {};
    request.headers.forEach((value, key) => {
        if (key.toLowerCase() === "accept-language") {
            negotiatorHeaders["accept-language"] = value;
        }
    });

    const locales = i18n.locales;
    const languages = new Negotiator({
        headers: negotiatorHeaders,
    }).languages();

    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (
        pathnameIsMissingLocale &&
        pathname !== "/robots.txt" &&
        pathname !== "/sitemap.xml"
    ) {
        const locale = getLocale(request);
        const url = new URL(request.url);

        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                url.origin
            )
        );
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|icon.ico|images|icons).*)"],
};
