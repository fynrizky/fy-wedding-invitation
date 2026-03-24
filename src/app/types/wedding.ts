export interface Wedding {
  slug: string;
  bride: {
    name: string;
    parent: string;
    // image: string;
  };
  groom: {
    name: string;
    parent: string;
    // image: string;
  };
  event: {
    akadDate: Date;
    akadLocation: string;
    receptionDate: Date;
    receptionLocation: string;
  };
  createdAt: Date;
  expiredAt: Date;
  packageType: string;
  // gallery: string[];
  // musicUrl: string;
  // theme: string;
  isPublished: boolean;
}