import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HomeScreenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="DailyVerse" source="dailyVerse" />
        <TextInput label="QuickLinks" source="quickLinks" />
        <TextInput label="WelcomeMessage" source="welcomeMessage" />
      </SimpleForm>
    </Edit>
  );
};
