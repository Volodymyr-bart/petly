import { getnews } from 'fakeApi';
// import { Link } from 'react-router-dom';
import { NewsItem, NewsItemTitle, NewsList } from './News.styled';

const News = () => {
  const news = getnews();
  return (
    <>
      <h1>News</h1>
      <input type="text" placeholder="Search" />
      <NewsList>
        {news.map(item => (
          <NewsItem key={item.title}>
            <NewsItemTitle>{item.title}</NewsItemTitle>
            <p>{item.text}</p>

            <div>
              <p>{item.date}</p>
              <button>Read More</button>
              {/* <a href="" target="_blank">
                Read More
              </a> */}
            </div>
          </NewsItem>
        ))}
      </NewsList>
    </>
  );
};

export default News;
