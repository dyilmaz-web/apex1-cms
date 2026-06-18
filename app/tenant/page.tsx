export default async function TenantPage({ params }: { params: { tenant: string } }) {
  const { tenant } = await params;
  return <h1>Welcome to the portal for: {tenant}</h1>;
}
