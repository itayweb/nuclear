import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

class Playlist extends React.Component {
  render() {
  	let {
  		playlist
  	} = this.props;

    return (
      <div className={styles.playlist_outside_container}>
        <div className={styles.playlist_container}>
          <div>
            <img
              className={styles.playlist_thumbnail}
              src={playlist.tracks[0].thumbnail}
            />
          </div>
          <div className={styles.playlist_info}>
            <h1>{playlist.name}</h1>
            <h3>{playlist.tracks.length} songs</h3>
          </div>
          <div className={styles.playlist_chevron}>
            <FontAwesome name="angle-right" size='2x'/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Playlist;
