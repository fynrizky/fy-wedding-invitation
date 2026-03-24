export function normalizeWedding(data: any, id?: string) {
  const convert = (val: any) => val?.toDate?.() ?? val ?? null;

  return {
    ...data,
    slug: id ?? data.slug,

    createdAt: convert(data.createdAt),
    expiredAt: convert(data.expiredAt),

    event: {
      ...data.event,
      akadDate: convert(data.event?.akadDate),
      receptionDate: convert(data.event?.receptionDate),
    },
  };
}