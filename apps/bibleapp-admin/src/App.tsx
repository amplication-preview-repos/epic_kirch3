import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BibleSectionList } from "./bibleSection/BibleSectionList";
import { BibleSectionCreate } from "./bibleSection/BibleSectionCreate";
import { BibleSectionEdit } from "./bibleSection/BibleSectionEdit";
import { BibleSectionShow } from "./bibleSection/BibleSectionShow";
import { HomeScreenList } from "./homeScreen/HomeScreenList";
import { HomeScreenCreate } from "./homeScreen/HomeScreenCreate";
import { HomeScreenEdit } from "./homeScreen/HomeScreenEdit";
import { HomeScreenShow } from "./homeScreen/HomeScreenShow";
import { PrayerSectionList } from "./prayerSection/PrayerSectionList";
import { PrayerSectionCreate } from "./prayerSection/PrayerSectionCreate";
import { PrayerSectionEdit } from "./prayerSection/PrayerSectionEdit";
import { PrayerSectionShow } from "./prayerSection/PrayerSectionShow";
import { WorshipSectionList } from "./worshipSection/WorshipSectionList";
import { WorshipSectionCreate } from "./worshipSection/WorshipSectionCreate";
import { WorshipSectionEdit } from "./worshipSection/WorshipSectionEdit";
import { WorshipSectionShow } from "./worshipSection/WorshipSectionShow";
import { FamilySectionList } from "./familySection/FamilySectionList";
import { FamilySectionCreate } from "./familySection/FamilySectionCreate";
import { FamilySectionEdit } from "./familySection/FamilySectionEdit";
import { FamilySectionShow } from "./familySection/FamilySectionShow";
import { EvangelismSectionList } from "./evangelismSection/EvangelismSectionList";
import { EvangelismSectionCreate } from "./evangelismSection/EvangelismSectionCreate";
import { EvangelismSectionEdit } from "./evangelismSection/EvangelismSectionEdit";
import { EvangelismSectionShow } from "./evangelismSection/EvangelismSectionShow";
import { HelpSupportSectionList } from "./helpSupportSection/HelpSupportSectionList";
import { HelpSupportSectionCreate } from "./helpSupportSection/HelpSupportSectionCreate";
import { HelpSupportSectionEdit } from "./helpSupportSection/HelpSupportSectionEdit";
import { HelpSupportSectionShow } from "./helpSupportSection/HelpSupportSectionShow";
import { GivingSectionList } from "./givingSection/GivingSectionList";
import { GivingSectionCreate } from "./givingSection/GivingSectionCreate";
import { GivingSectionEdit } from "./givingSection/GivingSectionEdit";
import { GivingSectionShow } from "./givingSection/GivingSectionShow";
import { ProfileSectionList } from "./profileSection/ProfileSectionList";
import { ProfileSectionCreate } from "./profileSection/ProfileSectionCreate";
import { ProfileSectionEdit } from "./profileSection/ProfileSectionEdit";
import { ProfileSectionShow } from "./profileSection/ProfileSectionShow";
import { CommunitySectionList } from "./communitySection/CommunitySectionList";
import { CommunitySectionCreate } from "./communitySection/CommunitySectionCreate";
import { CommunitySectionEdit } from "./communitySection/CommunitySectionEdit";
import { CommunitySectionShow } from "./communitySection/CommunitySectionShow";
import { GrowthSectionList } from "./growthSection/GrowthSectionList";
import { GrowthSectionCreate } from "./growthSection/GrowthSectionCreate";
import { GrowthSectionEdit } from "./growthSection/GrowthSectionEdit";
import { GrowthSectionShow } from "./growthSection/GrowthSectionShow";
import { ServiceSectionList } from "./serviceSection/ServiceSectionList";
import { ServiceSectionCreate } from "./serviceSection/ServiceSectionCreate";
import { ServiceSectionEdit } from "./serviceSection/ServiceSectionEdit";
import { ServiceSectionShow } from "./serviceSection/ServiceSectionShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"Bibleapp"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="BibleSection"
            list={BibleSectionList}
            edit={BibleSectionEdit}
            create={BibleSectionCreate}
            show={BibleSectionShow}
          />
          <Resource
            name="HomeScreen"
            list={HomeScreenList}
            edit={HomeScreenEdit}
            create={HomeScreenCreate}
            show={HomeScreenShow}
          />
          <Resource
            name="PrayerSection"
            list={PrayerSectionList}
            edit={PrayerSectionEdit}
            create={PrayerSectionCreate}
            show={PrayerSectionShow}
          />
          <Resource
            name="WorshipSection"
            list={WorshipSectionList}
            edit={WorshipSectionEdit}
            create={WorshipSectionCreate}
            show={WorshipSectionShow}
          />
          <Resource
            name="FamilySection"
            list={FamilySectionList}
            edit={FamilySectionEdit}
            create={FamilySectionCreate}
            show={FamilySectionShow}
          />
          <Resource
            name="EvangelismSection"
            list={EvangelismSectionList}
            edit={EvangelismSectionEdit}
            create={EvangelismSectionCreate}
            show={EvangelismSectionShow}
          />
          <Resource
            name="HelpSupportSection"
            list={HelpSupportSectionList}
            edit={HelpSupportSectionEdit}
            create={HelpSupportSectionCreate}
            show={HelpSupportSectionShow}
          />
          <Resource
            name="GivingSection"
            list={GivingSectionList}
            edit={GivingSectionEdit}
            create={GivingSectionCreate}
            show={GivingSectionShow}
          />
          <Resource
            name="ProfileSection"
            list={ProfileSectionList}
            edit={ProfileSectionEdit}
            create={ProfileSectionCreate}
            show={ProfileSectionShow}
          />
          <Resource
            name="CommunitySection"
            list={CommunitySectionList}
            edit={CommunitySectionEdit}
            create={CommunitySectionCreate}
            show={CommunitySectionShow}
          />
          <Resource
            name="GrowthSection"
            list={GrowthSectionList}
            edit={GrowthSectionEdit}
            create={GrowthSectionCreate}
            show={GrowthSectionShow}
          />
          <Resource
            name="ServiceSection"
            list={ServiceSectionList}
            edit={ServiceSectionEdit}
            create={ServiceSectionCreate}
            show={ServiceSectionShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
