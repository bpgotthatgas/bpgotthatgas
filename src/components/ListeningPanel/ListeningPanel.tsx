import styles from './ListeningPanel.module.css';

// Fill these in to activate the live Apple Music embed and link.
// Embed URL format: https://embed.music.apple.com/us/playlist/<name>/<id>
export const APPLE_MUSIC_EMBED_URL =
  'https://embed.music.apple.com/us/playlist/engineered-by-bp/pl.u-V9D77WNsY6gEa';
export const APPLE_MUSIC_PLAYLIST_URL =
  'https://music.apple.com/us/playlist/engineered-by-bp/pl.u-V9D77WNsY6gEa';

export function ListeningPanel() {
  return (
    <div className={styles.wrap}>
      <div className={styles.panel}>
        {APPLE_MUSIC_EMBED_URL ? (
          <iframe
            className={styles.embed}
            title="Apple Music playlist preview"
            src={APPLE_MUSIC_EMBED_URL}
            loading="lazy"
            allow="autoplay *; encrypted-media *;"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          />
        ) : (
          <p className={styles.placeholder}>Apple Music Playlist Preview</p>
        )}
      </div>
      {APPLE_MUSIC_PLAYLIST_URL ? (
        <a
          href={APPLE_MUSIC_PLAYLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          OPEN IN APPLE MUSIC
        </a>
      ) : (
        <button type="button" className={styles.button} disabled>
          OPEN IN APPLE MUSIC
        </button>
      )}
    </div>
  );
}
