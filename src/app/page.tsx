import './globals.css';
//import ApolloClientProvider from '/Users/prakritiprasad/student_search/student_search/src/app/components/ApolloClientProvider.tsx';
//console.log(ApolloClientProvider);
import SearchInterface from '/Users/prakritiprasad/student_search/student_search/src/app/components/Search-bar.tsx';
function MyApp({ Component, pageProps }) {
  return (
    //<ApolloClientProvider>
    //</ApolloClientProvider>
    <div className="bg-[url('/imgs/home.webp')] bg-cover bg-center min-h-screen">
      <SearchInterface />
    </div>

  );
}

export default MyApp;
