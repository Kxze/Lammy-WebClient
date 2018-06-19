import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Segment } from 'semantic-ui-react';
import { AlbumTable } from "../components/AlbumTable";
import { ArtistTable } from '../components/ArtistTable';
import { MenuBar } from "../components/MenuBar";
import { SearchBar } from "../components/SearchBar";
import { SongTable } from "../components/SongTable";

const mapStateToProps = (state: any) => ({
  menuItem: state.menus.menuBar,
  isLoading: state.menus.isLoading,
})

export const Library = connect(mapStateToProps)(({ menuItem, isLoading }) => (
  <Container>
    <SearchBar />
    <MenuBar />
    <Segment basic={true} loading={isLoading}>
      {menuItem === "songs" && <SongTable />}
      {menuItem === "artists" && <ArtistTable />}
      {menuItem === "albums" && <AlbumTable />}
    </Segment>
  </Container>
))
