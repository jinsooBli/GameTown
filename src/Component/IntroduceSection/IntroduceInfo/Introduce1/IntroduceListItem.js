function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function IntroduceListItem({ item }) {

  const { img, title, rating, date, content } = item;

  return (
        <div>
          <h1>{title}</h1>
          <p>{formatDate(date)}</p>
          <p>{content}</p>
        </div>
  );
}

export default IntroduceListItem;