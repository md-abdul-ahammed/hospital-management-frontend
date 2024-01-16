import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const hybridRoutes = ["/", "/login", "/register"];
const patientAccessibleRoutes = [
  "/dashboard",
  "/book-appointment",
  "/my-appointments",
  "/my-profile",
  "/payment",
  "/payment-history",
];
// const roleRedirects = [
//   {
//     role: "admin",
//     route: "admins/dashboard",
//   },
//   {
//     role: "patient",
//     route: "dashboard",
//   },
//   {
//     role: "doctor",
//     route: "doctors/dashboard",
//   },
// ];

const rolesRedirect: Record<string, unknown> = {
  doctor: `http://localhost:3000/doctors/dashboard`,
  patient: `http://localhost:3000/dashboard`,
  admin: `http://localhost:3000/admins/dashboard`,
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const { pathname } = request.nextUrl;
  const role = token?.role as string;

  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (
    (role === "admin" && pathname.startsWith("/admins")) ||
    (role === "doctor" && pathname.startsWith("/doctors")) ||
    (role === "patient" && patientAccessibleRoutes.includes(pathname))
  ) {
    return NextResponse.next();
  }

  // if (role && pathname === "/") {
  //   console.log(role);
  //   const destination = roleRedirects.find(
  //     (roleRedirect) => role === roleRedirect.role
  //   );

  //   return NextResponse.redirect(`http://localhost:3000/${destination?.route}`);
  // }

  if (pathname === "/" && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  // return NextResponse.redirect(`${process.env.FRONTEND_URL}`);
  return NextResponse.redirect(`http://localhost:3000/`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    //hybrid-route
    "/",
    "/login",
    "/register",
    //patient route
    "/dashboard",
    "/book-appointment/:page*",
    "/my-appointments/:page*",
    "/my-profile",
    "/payment/:page*",
    "/payment-history",
    //doctor route
    "/doctors/:page*",
    // admin route
    "/admins/:page*",
  ],
};
