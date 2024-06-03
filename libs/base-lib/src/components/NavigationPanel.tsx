import React, { useState } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@libs/eds-lib';

interface Route {
  name: string;
  component: JSX.Element;
  path: string;
}

interface NavigationPanelProps {
  routes: Route[];
}

function NavigationPanel(props: NavigationPanelProps) {
  const [element, setElement] = useState<JSX.Element | null>(null);

  const Navigator = ({ route, className, content }: { route: string, className: string, content: JSX.Element }) => {
    const onSelect = () => {
      setElement(content);
    };
    return <div className={className} onClick={onSelect}>{route}</div>;
  };

  console.log(element)

    return (
        <>
         <NavigationMenu>
            <NavigationMenuList>
            {props.routes.map((route) => (
                <NavigationMenuItem key={route.path}>
                    <NavigationMenuTrigger>{route.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <NavigationMenuLink href={route.path} >{route.name}</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                ))}
            </NavigationMenuList>
            </NavigationMenu>
            {Navigator}
        </>
    )
}

export default NavigationPanel;

{/* <DropdownMenu>
    <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {routes.map((k, i) => {
            return (<DropdownMenuItem route={routes[i]?.name} content={routes[i]?.component}></DropdownMenuItem>)
        })}
    </DropdownMenuContent>
</DropdownMenu> */}