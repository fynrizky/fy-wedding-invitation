import { notFound } from "next/navigation";
import { getWeddingBySlug } from "@/lib/firestore";
import RegularTemplate from "@/components/templates/regular/RegTemplate";
import PremiumTemplate from "@/components/templates/premium/PremTemplate";
import { Wedding } from "../types/wedding";
// Define the type for the wedding data
type PackageType = "regular" | "premium";
// Define the type for the page props
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function WeddingPage({ params }: PageProps) {
  // Extract the slug from the params
  const { slug } = await params;
  // If the slug is not provided, return a 404 page
  if (!slug) {
    notFound();
  }
  // Fetch the wedding data based on the slug
  const wedding = await getWeddingBySlug(slug);
  // Check if the wedding exists and is published
  if (!wedding || !wedding.isPublished) {
    notFound();
  }

  // //Check if the wedding has expired
  // const expiredAt = wedding.expiredAt;
  // if (expiredAt.toLocaleDateString() && wedding.expiredAt < now) {
  //   notFound();
  // }

   
  // Check if the package type is valid
  if (!["regular","premium"].includes(wedding.packageType)) {
    notFound();
  }
  const template: Record<PackageType, React.FC<{ wedding: Wedding }>> = {
    regular: RegularTemplate,
    premium: PremiumTemplate,
  };

  const TemplateComponent = template[wedding.packageType as PackageType] ?? RegularTemplate;

  return <TemplateComponent wedding={wedding}/>;
  // return (
  //   <div style={{position:'relative', display:"flex", height:"100vh", justifyContent: "center", alignItems: "center" }}>
  //     <div style={{position:'absolute', textAlign:'center'}}>
  //       <h1>
  //         {wedding.groom?.name}, Anak Dari ({wedding.groom?.parent}) <div style={{ textAlign: 'center'}}>&</div>{wedding.bride?.name}, Anak Dari ({wedding.bride?.parent})
  //       </h1>
  //     </div>
  //   </div>
  // );
}
