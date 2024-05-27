import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import WorkspaceScreen from './components/WorkspaceScreen';
import SiteConceptScreen from './components/SiteConceptScreen';
import CustomerNetworkScreen from './components/CustomerNetworkScreen';
import ApprovalDashboardScreen from './components/ApprovalDashboardScreen';
import OffersScreen from './components/OffersScreen';
import { applicationConfig } from './enums/siteModelerEnums';
import { AppShell } from '@libs/app-framework-lib'

const appName = applicationConfig.APP_NAME;

const routes = [
  { name: "Workspace", component: <WorkspaceScreen />, path: "/Workspace" },
  { name: "Site Concept", component: <SiteConceptScreen />, path: "/SiteConcept" },
  { name: "Customer Network", component: <CustomerNetworkScreen />, path: "/CustomerNetwork" },
  { name: "Approval Dashboard", component: <ApprovalDashboardScreen />, path: "/ApprovalDashboard" },
  { name: "Offers", component: <OffersScreen />, path: "/Offers" },
]

const user = {
  firstName: "Tamlyn Springer",
  header: "Telenor",
  subHeader: "Customer"
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppShell appName={appName} user={user} routes={routes} />
  </React.StrictMode>,
)
