import styles from './Tile.module.scss';

const Tile = ({ data }) => {
  return (
    <div className={styles.gridContainer}>
      {data.map((item) => (
        <div className={styles.tile} key={item.id}>
          {/* render tile content */}
        </div>
      ))}
    </div>
  );
};

export default Tile;
