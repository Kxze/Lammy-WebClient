import * as React from "react";
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { Menu } from "semantic-ui-react";
import { getLibraryData } from "../actions/Library";
import { setLibraryMenu } from "../actions/Menus";

const mapStateToProps = (state: any) => ({
  menuItem: state.menus.menuBar,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeMenuItem: (menuItem: string) => {
    dispatch(getLibraryData(menuItem));
    dispatch(setLibraryMenu(menuItem));
  }
})

export const MenuBar = connect(mapStateToProps, mapDispatchToProps)(({ menuItem, changeMenuItem }) => {

  function onSelectChange(event: any, { name }: any) {
    event.preventDefault();
    changeMenuItem(name);
  }
  
  return (
    <Menu pointing={true}>
      <Menu.Item name="playlists" active={menuItem === "playlists"} onClick={onSelectChange}>Playlists</Menu.Item>
      <Menu.Item name="stations" active={menuItem === "stations"} onClick={onSelectChange}>Stations</Menu.Item>
      <Menu.Item name="artists" active={menuItem === "artists"} onClick={onSelectChange}>Artists</Menu.Item>
      <Menu.Item name="albums" active={menuItem === "albums"} onClick={onSelectChange}>Albums</Menu.Item>
      <Menu.Item name="songs" active={menuItem === "songs"} onClick={onSelectChange}>Songs</Menu.Item>
      <Menu.Item name="genres" active={menuItem === "genres"} onClick={onSelectChange}>Genres</Menu.Item>
    </Menu>
  )

})
