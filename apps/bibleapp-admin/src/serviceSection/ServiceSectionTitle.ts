import { ServiceSection as TServiceSection } from "../api/serviceSection/ServiceSection";

export const SERVICESECTION_TITLE_FIELD = "id";

export const ServiceSectionTitle = (record: TServiceSection): string => {
  return record.id?.toString() || String(record.id);
};
