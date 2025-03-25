import PageHeader from "@/components/pageHeader";

export default function PagesLayout({ children }) {
  return (
    <>
      <header>{/* <h2>Header for Pages Folder</h2> */}</header>
      <main>
        <PageHeader />
        {children}
      </main>
    </>
  );
}
