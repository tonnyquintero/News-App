import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import PageLayout from '../components/PageLayout'

export default function Home({ articles }) {
      


      // const router = useRouter()

  return (
    <PageLayout title='NewsApp - Home'>
      <div className={styles.container}>

        {articles.length === 0 && <p>No tenemos artículos</p>}
        {articles.length > 0 && articles.map((articles, index) => (
          <div key={index}>
            <h2>{articles.title}</h2>
            <img src={articles.urlToImage} alt={`Image for the article ${articles.title}`} />
            <p>{articles.description}</p>
          </div>
        ))}

        {/* <button onClick={() => router.push('/article/2')}>
          Navegar de forma programatica
        </button> */}
      </div>
    </PageLayout>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-07-22&sortBy=publishedAt&apiKey=855a5d081c924dbaa1258563591e46fb')
  const { articles } = await response.json()
    return {
      props: {
        articles
      }
    }
  }