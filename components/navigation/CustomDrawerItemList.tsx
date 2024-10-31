import {
  CommonActions,
  DrawerActions,
  DrawerNavigationState,
  ParamListBase,
  useLinkBuilder,
} from '@react-navigation/native';
import * as React from 'react';

import type { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/src/types';
import { DrawerItem } from '@react-navigation/drawer';

import { Drawer as PaperDrawer } from 'react-native-paper'

type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

/**
 * Component that renders the navigation list in the drawer.
 */
export default function DrawerItemList({
  state,
  navigation,
  descriptors,
}: Props) {
  // const buildLink = useLinkBuilder();

  return state.routes.map((route, i) => {

    // if route.name begins with the charcter in ['_', '+'], return null
    if (route.name[0] === '_' || route.name[0] === '+') {
      return null;
    }

    const focused = i === state.index;

    return (
      <PaperDrawer.Item 
        style={{ marginBottom: 6 }}

        label={route.name}
        active={focused}
        key={route.key}

        onPress={() => {
          const event = navigation.emit({
            type: 'drawerItemPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) {
            navigation.dispatch({
              ...(focused
                ? DrawerActions.closeDrawer()
                : CommonActions.navigate({ name: route.name, merge: true })),
              target: state.key,
            });
          }
        }}
      />
    )
})}
  