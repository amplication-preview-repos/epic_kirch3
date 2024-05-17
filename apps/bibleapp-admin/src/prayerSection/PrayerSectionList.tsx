import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PrayerSectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PrayerSections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="DailyPrayerTheme" source="dailyPrayerTheme" />
        <TextField label="ID" source="id" />
        <TextField label="PrayerCommitment" source="prayerCommitment" />
        <TextField label="PrayerEvent" source="prayerEvent" />
        <TextField label="PrayerGroup" source="prayerGroup" />
        <TextField label="PrayerRequest" source="prayerRequest" />
        <TextField label="Testimony" source="testimony" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
