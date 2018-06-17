import * as React from "react";
import { Icon, Image, Table } from 'semantic-ui-react';

const TableCell: React.SFC = ({ children }) => (
  <Table.Cell style={{ paddingTop: "5px", paddingBottom: "5px" }}>{children}</Table.Cell>
)

export const SongTable = () => (
  <Table celled={true}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Artist</Table.HeaderCell>
        <Table.HeaderCell>Album</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <TableCell><Image style={{ height: "5%" }} inline={true} src="https://lastfm-img2.akamaized.net/i/u/770x0/16f0eebdf62e2cbf6ea26541eacca0d5.jpg" /> Heartbreak High</TableCell>
        <TableCell>Charli XCX</TableCell>
        <TableCell>XCX Unreleased</TableCell>
        <TableCell><Icon name="thumbs up" /></TableCell>
      </Table.Row>
      <Table.Row>
        <TableCell><Image style={{ height: "5%" }} inline={true} src="https://lastfm-img2.akamaized.net/i/u/770x0/16f0eebdf62e2cbf6ea26541eacca0d5.jpg" /> Heartbreak High</TableCell>
        <TableCell>Charli XCX</TableCell>
        <TableCell>XCX Unreleased</TableCell>
        <TableCell><Icon name="thumbs up" /></TableCell>
      </Table.Row>
    </Table.Header>
  </Table>
)