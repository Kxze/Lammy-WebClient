import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { Header, Icon, Image, ImageProps, Table } from 'semantic-ui-react';
import { setNowPlaying, setSongInfo } from "../actions/Player";
import { SongActionItem } from "./SongActionItem";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNowPlayingSong: (song: any) => {
    dispatch(setSongInfo(song));
    dispatch(setNowPlaying(song.id));
  }
});

const TableCell: React.SFC = ({ children }) => (
  <Table.Cell style={{ paddingTop: "5px", paddingBottom: "5px" }}>{children}</Table.Cell>
)

const TableImage: React.SFC<ImageProps> = ({ src }) => (
  <Image className="albumArtTable" rounded={true} size="mini" src={src} />
);

const TableSong = connect<any, any, any>(undefined, mapDispatchToProps)(({ children, cover, song, setNowPlayingSong }) => (
  <Header as="h4" image={true} onClick={() => setNowPlayingSong(song)}>
    <TableImage src={cover || ""} />
    <Header.Content><SongActionItem song={song} /></Header.Content>
    <Header.Content style={{ marginTop: "6px" }}>{children}</Header.Content>
  </Header>
));

const mapStateToProps = (state: any) => ({
  songs: state.library.songs
})

export const SongTable = connect(mapStateToProps)(({ songs }) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Artist</Table.HeaderCell>
        <Table.HeaderCell>Album</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
      </Table.Row>
      {songs.map((song: any) => (
        <Table.Row key={song.id}>
          <TableCell>
            <TableSong cover={song.cover} song={song}>{song.name}</TableSong>
          </TableCell>
          <TableCell>{song.artists[0].name}</TableCell>
          <TableCell>{song.albums[0].name}</TableCell>
          <TableCell><Icon name="thumbs up" /></TableCell>
        </Table.Row>
      ))}
    </Table.Header>
  </Table>
))
