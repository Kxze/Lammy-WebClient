import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { Icon, Menu } from 'semantic-ui-react'
import { setMenu } from "../actions/Menus";

const mapStateToProps = (state: any) => ({
  menuItem: state.menus.menu,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeMenuItem: (menuItem: string) => {
    dispatch(setMenu(menuItem));
  }
})

export const AppMenu = connect(mapStateToProps, mapDispatchToProps)(({ menuItem, changeMenuItem }) => {
  function onSelectChange(event: any, { name }: any) {
    changeMenuItem(name);
  }

  return (
    <Menu vertical={true} style={{ width: "100%" }}>
      <Menu.Item name="home" as={Link} to="/" active={menuItem === "home"} onClick={onSelectChange}>
        <Icon name="home" />Home
      </Menu.Item>

      <Menu.Item name="library" as={Link} to="/library" active={menuItem === "library"} onClick={onSelectChange}>
        <Icon name="book" />Library
      </Menu.Item>

      <Menu.Item name="upload" as={Link} to="/upload" active={menuItem === "upload"} onClick={onSelectChange}>
        <Icon name="cloud upload" />Upload
      </Menu.Item>

      <Menu.Item name="settings" as={Link} to="/settings" active={menuItem === "settings"} onClick={onSelectChange}>
        <Icon name="settings" />Settings
      </Menu.Item>
    </Menu>
  )
});
