import PageHeader from "@/components/pageHeader";

export default function PagesLayout({ children }) {
  return (
    <>
      <header>{/* <h2>Header for Pages Folder</h2> */}</header>
      <PageHeader />
      <main style={{ marginTop: "100px" }}>{children}</main>
    </>
  );
}
