import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HomeScreenCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="DailyVerse" source="dailyVerse" />
        <TextInput label="QuickLinks" source="quickLinks" />
        <TextInput label="WelcomeMessage" source="welcomeMessage" />
      </SimpleForm>
    </Create>
  );
};
