import {
    NextResponse
} from "next/server";

import {
    i18n
} from "@/i18n.config";

import {
    match as matchLocale
} from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request) {
    try {
        const negotiatorHeaders = {};
        request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

        const locales = i18n.locales;
        const languages = new Negotiator({
            headers: negotiatorHeaders,
        }).languages();

        const locale = matchLocale(languages, locales, i18n.defaultLocale);
        return locale;
    } catch (error) {
        console.error('Error getting locale:', error);
        return i18n.defaultLocale; // Возвращаем локаль по умолчанию в случае ошибки
    }
}

export function middleware(request) {
    try {
        const pathname = request.nextUrl.pathname;

        const pathnameIsMissingLocale = i18n.locales.every(
            (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
        );

        if (pathnameIsMissingLocale && pathname !== "/robots.txt" && pathname !== "/sitemap.xml") {
            const locale = getLocale(request);
            return NextResponse.redirect(
                new URL(
                    `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                    request.url
                )
            );
        }
    } catch (error) {
        console.error('Middleware error:', error);
        return NextResponse.next(); // Возвращаем следующий ответ, чтобы сервер не падал
    }
}


export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!api|_next/static|_next/image|icon.ico|images|icons).*)'
        // Optional: only run on root (/) URL
        // '/'
    ],
};
