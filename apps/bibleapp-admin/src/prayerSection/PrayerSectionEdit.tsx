import * as React from "react";
import { Edit, SimpleForm, EditProps } from "react-admin";

export const PrayerSectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};
