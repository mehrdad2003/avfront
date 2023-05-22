import { Helmet } from "react-helmet";
import PageLayout from "../components/PageLayout";


const ContactsPage = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>تماس </title>
      </Helmet>
      <div className="relative z-10 pt-40 lg:pt-72 px-5 md:px-10 lg:px-20 pb-40 md:pb-60 xl:pb-96 c-min-h-screen mx-auto max-w-sreen-lg xl:max-w-screen-xl">
        <h1 className="mb-5 block mx-auto max-w-lg text-3xl lg:text-5xl text-center font-bold">
         تماس 
        </h1>

        <p className="text-center text-sm mb-10">
         لطفا نظرات وپیشنهادات خود را برای من ارسال کنید
        </p>

        <div className="lg:flex justify-center">
          <section className="text-center mb-5 lg:mr-6">
            <h2 className="font-semibold mb-1">ایمیل</h2>
            <a href="mailto:mehrdadzare2003@gmail.com" target="_blank" rel="noreferrer">
              mehrdadzare2003@gmail.com
            </a>
          </section>

         
          <section className="text-center mb-5 lg:mr-6">
            <h2 className="font-semibold mb-1">وبسایت</h2>
            <a
              href="https://google.com"
              title="Edvinas Pranka | Senior Developer"
              target="_blank"
              rel="noreferrer"
            >
              mehrdadzare.com
            </a>
          </section>

        </div>
      </div>
     
    </PageLayout>
  );
};

export default ContactsPage;
