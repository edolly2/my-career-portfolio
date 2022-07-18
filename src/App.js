import './App.css';

import BlogPage from './_pages/BlogPage';
import BottomNav from './_components/BottomNav';
import { Button } from 'antd';
import ContactPage from './_pages/ContactPage';
import PageTitle from './_components/PageTitle';
import styled from 'styled-components';

const AppContent = styled.div`
  height: 100%;
  margin-bottom: 40px;
`;

const Page = styled.div`
  max-height: calc(100vh - 20px);
  min-height: calc(100vh - 20px);
  width: 100%;
`;
function App() {
  return (
    <AppContent className='App'>
      <Page className='homePage'>
        <PageTitle title='Home Page' />
        <Button type='primary'>Button</Button>
      </Page>
      <Page className='aboutPage'>
        <PageTitle title='About Page' />
      </Page>
      <Page className='portfolioPage'>
        <PageTitle title='Portfolio Page' />
      </Page>
      <Page className='blogPage'>
        <PageTitle title='Blog Page' />
        <BlogPage />
      </Page>
      <Page className='contactPage'>
        <PageTitle title='Contact Page' />
        <ContactPage />
      </Page>
      <BottomNav />
    </AppContent>
  );
}

export default App;
