export interface AppProps {
    appName: string; 
    user: { 
      firstName: string;
        header: string; 
        subHeader: string; 
      }; 
    routes: { 
      name: string; 
      component: JSX.Element; 
      path: string; 
    }[]; 
  }