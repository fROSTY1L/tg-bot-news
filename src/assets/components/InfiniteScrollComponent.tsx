import { NewsCardWrap, NewsWrap } from '../Styles/NewsContent.style';
import { Card, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface SentimentStats {
    positive: number;
    neutral: number;
    negative: number;
  }
  
interface ArticleResult {
    article_id: string;
    title: string | any;
    link: string;
    keywords: string[];
    creator: string[];
    video_url: string | null;
    description: string;
    content: string;
    pubDate: string;
    image_url: string;
    source_id: string;
    source_priority: number;
    source_url: string;
    source_icon: string | null;
    language: string;
    country: string[];
    category: string[];
    ai_tag: string[];
    ai_region: string | null;
    ai_org: string | null;
    sentiment: string;
    sentiment_stats: SentimentStats;
}

interface NewsData {
    status: string;
    totalResults: number;
    results: ArticleResult[];
}

  
  const NewsContent = () => {
    const [newsData, setNewsData] = useState<ArticleResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // 
  
    const apiKey = 'pub_47976326dd12d3f1ba15d6f77385b33750726';
    const topicState = useSelector((state: RootState) => state.topic.value);
  
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&country=${topicState}&language=ru`;
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: NewsData = await response.json();
            setNewsData(data.results); 
            setHasMore(data.results.length > 0); 
            setLoading(false);
          } catch (error) {
            console.error('Ошибка при получении данных:', error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, [topicState]);
    
      const loadMoreNews = async () => {
        if (!hasMore) return; 
      
        setLoading(true);
        const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${topicState}&language=ru`;
      
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: NewsData = await response.json();
          const newArticles = data.results.filter(article => 
            !newsData.some(existingArticle => existingArticle.article_id === article.article_id)
          ); 
      
          if (newArticles.length === 0) {
            setHasMore(false);
          } else {
            setNewsData(prevData => [...prevData, ...newArticles]); 
          }
        } catch (error) {
          console.error('Ошибка при получении данных:', error);
        } finally {
          setLoading(false);
        }
      };
      
    
  
    return (
      <NewsWrap>
        
          {newsData.map((article, index) => (
            <NewsCardWrap>
              <Card key={index} title={article.title} bordered={false}>
                <a href={article.link}>Читать</a>
              </Card>
            </NewsCardWrap>
          ))}
        
        {loading && <p>Загрузка...</p>}
        {!loading && hasMore && (
          <Button onClick={loadMoreNews} type="primary" style={{width: '90vw'}}>
            Загрузить ещё
          </Button>
        )}
      </NewsWrap>
    );
  };
  
  export default NewsContent;
  