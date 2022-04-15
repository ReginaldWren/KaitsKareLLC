import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyleUrl from "./styles/global.css";
import boostrapStyles from  'bootstrap/dist/css/bootstrap.min.css';
import { getUser } from "./session.server";
import logo from "../public/assets/logo.ico";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStyleUrl }, {rel: "stylesheet", href: boostrapStyles}];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Kaits Kare",
  viewport: "width=device-width,initial-scale=1",
  description: "Licensed in Home Daycare Service in Ballston Spa NY",
  keywords: "daycare, licensed, childcare, toddlers, infants, schoolage, newyork"
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="navbar navbar-dark bg-dark">
          <img src={logo} className="header-logo"></img>
          <ul className='nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact Us</Link>
          </li>
        </ul>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
