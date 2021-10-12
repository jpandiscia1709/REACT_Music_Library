import React from 'react';


const MusicTable= (props) => {
console.log(props);

    return (
      
      <div>
      {props.musicTable.map(function(songTable) {
        
        // const { id, artist, title, album, release_date } = song
        return ( 
          <table>{songTable}

          {/* <tr key={id}>
          <td>{id}</td>
          <td>{artist}</td>
          <td>{title}</td>
          <td>{album}</td>
          <td>{release_date}</td>
          </tr> */}

          </table>
        ) 
       
      })}
      </div>
      );



  // renderTableHeader() {
  //   let header = Object.keys(this.state.songs[0])
  //   return header.map((key, index) => {
  //     return <th key={index}>{key.toUpperCase()}</th>
  //   })
  // }
}

export default MusicTable;