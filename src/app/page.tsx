import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24 bg-slate-500">
      <h1>Builder Gen1 Playground</h1>
      <h2>Demos</h2>
      <ul>
        <li className="border-b-2 p-6">
          <Link href="/builder-gen1" className="underline">
            /builder-gen1
          </Link>
          <p>
            Integrated with Builder.io to demonstrate and ideal e-commerce
            experience. The core page and product information is a client
            component fully rendered server side. Loading skeletons for
            recommended products and customer reviews are also server side
            rendered and then the actual data is fetched clientside. All three
            core components are registered with Builder and fully editable using
            the Builder visual editor.
          </p>
        </li>
      </ul>
    </main>
  );
}
