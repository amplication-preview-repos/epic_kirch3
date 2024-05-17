import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PrayerSectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DailyPrayerTheme" source="dailyPrayerTheme" />
        <TextField label="ID" source="id" />
        <TextField label="PrayerCommitment" source="prayerCommitment" />
        <TextField label="PrayerEvent" source="prayerEvent" />
        <TextField label="PrayerGroup" source="prayerGroup" />
        <TextField label="PrayerRequest" source="prayerRequest" />
        <TextField label="Testimony" source="testimony" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
