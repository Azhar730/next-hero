import { NextResponse } from "next/server"

const user = false;
const coo = 'next-superhero'

export const middleware = (request) => {
    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.redirect(new URL('/contact', request.url))
    // }
    const cookies = request.cookies.get('token')
    if (!cookies || cookies.value !== coo) {
        return NextResponse.redirect(new URL('/login', request.url))
    }return NextResponse.next()
    // if (!user) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard','/service']
}