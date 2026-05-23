// app/services/[id]/page.jsx
import MacaroniXServices from "@/components/MacaroniXServices";

export default async function ServicePage({ params }) {
  const { id } = await params;
  return <MacaroniXServices defaultService={id} />;
}