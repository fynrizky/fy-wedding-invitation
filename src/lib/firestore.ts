import { adminDb } from "./firebase-admin";
import { Wedding } from "../app/types/wedding";

export async function getWeddingBySlug(slug: string): Promise<Wedding | null> {
  const snapshot = await adminDb.collection("weddings").doc(slug).get();

  if (!snapshot.exists) return null;

  const data = snapshot.data();
  if (!data) return null;

  return {
    slug: snapshot.id,
    bride: {
      name: data.bride.name,
      parent: data.bride.parent,
    },
    groom: {
      name: data.groom.name,
      parent: data.groom.parent,
    },

    event: {
      akadDate: data.event?.akadDate?.toDate?.() ?? null,
      akadLocation: data.event?.akadLocation,
      receptionDate: data.event?.receptionDate?.toDate?.() ?? null,
      receptionLocation: data.event?.receptionLocation,
    },

    createdAt: data.createdAt.toDate(),
    expiredAt: data.expiredAt.toDate(),

    packageType: data.packageType,
    isPublished: data.isPublished,
  };
  
}

export async function getAllWeddings() {
  const snapshot = await adminDb.collection("weddings").get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}