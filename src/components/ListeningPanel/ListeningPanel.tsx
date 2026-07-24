import styles from './ListeningPanel.module.css';

// Spotify playlist — powers both the embedded player below and the footer link.
const SPOTIFY_PLAYLIST_ID = '0zkKfrJ3PpZa2bJGkSas2x';
export const SPOTIFY_PLAYLIST_URL = `https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`;
const SPOTIFY_EMBED_URL = `https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator`;

export function ListeningPanel() {
  return (
    <div className={styles.wrap}>
      <div className={styles.cassetteOuter}>
        <div className={styles.cassette}>
          <div className={styles.label}>
            <span className={styles.labelText}>
              <span className={styles.recDot} aria-hidden="true" />
              ON ROTATION
            </span>
          </div>
          <div className={styles.panel}>
            {SPOTIFY_EMBED_URL ? (
              <iframe
                className={styles.embed}
                title="Spotify playlist preview"
                src={SPOTIFY_EMBED_URL}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            ) : (
              <p className={styles.placeholder}>Spotify Playlist Preview</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
