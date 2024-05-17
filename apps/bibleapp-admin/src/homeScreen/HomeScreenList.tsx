import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HomeScreenList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HomeScreens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="DailyVerse" source="dailyVerse" />
        <TextField label="ID" source="id" />
        <TextField label="QuickLinks" source="quickLinks" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WelcomeMessage" source="welcomeMessage" />
      </Datagrid>
    </List>
  );
};
