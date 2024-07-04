
import { NewsCardWrap, NewsWrap } from '../Styles/NewsContent.style';
import { Card } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Meta from 'antd/es/card/Meta';


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
    const [newsData, setNewsData] = useState<NewsApiResponse | null>(null);

    const topicState = useSelector((state: RootState) => state.topic.value)
    useEffect(() => {
    const fetchData = async () => {
      const url = 'https://newsapi.org/v2/top-headlines?country='+ topicState +'&apiKey=5abc57ec64b740c59ac23c8cdad22dd2';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: NewsApiResponse = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, [topicState]);
  return (
    <NewsWrap>
        {newsData && (
        <NewsCardWrap>
          {newsData.articles.map((article) => (
            <Card
            hoverable
            style={{ width: '80vw', marginBottom: '10px' }}
            cover={<img alt={article.title} src={article.urlToImage} />}
          >
            <Meta title={article.title} description={article.description} />
          </Card>
          ))}
        </NewsCardWrap>
      )}
    </NewsWrap>

  )
}

export default NewsContent
