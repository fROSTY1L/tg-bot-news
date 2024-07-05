import { NewsCardWrap, NewsWrap } from '../Styles/NewsContent.style';
import { Card, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface ArticleSource {
  id: string | null;
  name: string;
}

interface Article {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const NewsContent = () => {
  const [newsData, setNewsData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(5); // Начальное количество видимых карточек

  const topicState = useSelector((state: RootState) => state.topic.value);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${topicState}&apiKey=5abc57ec64b740c59ac23c8cdad22dd2&page=${page}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: NewsApiResponse = await response.json();
        setNewsData(prevData => [...prevData, ...data.articles]);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [topicState, page]);

  const loadMoreNews = () => {
    setVisibleCount(prevCount => prevCount + 5); // Загружаем ещё 5 карточек
    if (visibleCount >= newsData.length) {
      setPage(prevPage => prevPage + 1); // Если видимые карточки закончились, загружаем следующую страницу
    }
  };

  return (
    <NewsWrap>
      <NewsCardWrap>
        {newsData.slice(0, visibleCount).map((article, index) => (
          <Card key={index} title={article.title} bordered={false} style={{ width: '90vw' }}>
            <a href={article.url}>Читать</a>
          </Card>
        ))}
      </NewsCardWrap>
      {loading && <p>Загрузка...</p>}
      {!loading && (
        <Button onClick={loadMoreNews} type="primary" style={{ margin: '20px 0' }}>
          Загрузить ещё
        </Button>
      )}
    </NewsWrap>
  );
};

export default NewsContent;
