import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const HomeScreenShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DailyVerse" source="dailyVerse" />
        <TextField label="ID" source="id" />
        <TextField label="QuickLinks" source="quickLinks" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WelcomeMessage" source="welcomeMessage" />
      </SimpleShowLayout>
    </Show>
  );
};
