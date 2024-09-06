import Layout from '../components/Layouts/Layout';
import HomeLayout from '../components/Layouts/HomeLayout';

export default function Home() {
    return (
        <Layout>
            <p>Welcome to the Home Page</p>
        </Layout>
        
    );
  }

//there's layout, then there's llayouts per page
Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            <HomeLayout></HomeLayout>
        </Layout>
        
    )
}
