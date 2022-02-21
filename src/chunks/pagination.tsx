import styles from './pagination.module.scss';

function Pagination() {
  return (
    <div className={styles['pagination']}>
      <div className="pagination-list">
        <a className="list-item">
          <span className="item-icon">{'<-'}</span>
        </a>
        <a className="list-item">
          <span className="item-icon">{'->'}</span>
        </a>
      </div>
    </div>
  );
}

export default Pagination;
export {
  Pagination,
};
