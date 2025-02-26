import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";


const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto px-4 pt-56 pb-16 flex-grow">
        <div className="max-w-3xl mx-auto text-lg space-y-6">
          <p><strong>Liability for content</strong></p>
          <p>The contents of our pages have been created with the greatest care. However, we cannot assume any liability for the accuracy, completeness and topicality of the content. As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general legislation remain unaffected by this. However, liability in this respect is only possible from the time of knowledge of a specific infringement. As soon as we become aware of such infringements, we will remove the content immediately.</p>

          <p><strong>Copyright</strong></p>
          <p>The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.</p>

                    <p><strong>General privacy policy</strong></p>
          <p>The use of our website is generally possible without providing personal data. Insofar as personal data (e.g. name, address or e-mail addresses) is collected on our website, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your express consent. By using our website, you agree to the collection, processing and use of data in accordance with the following description. Our website can generally be visited without registration. Data such as pages called up or the name of the file called up, date and time are stored on the server for statistical purposes without this data being directly related to your person. Personal data, in particular name, address or e-mail address, are collected on a voluntary basis as far as possible. No data will be passed on to third parties without your consent.</p>

                    <p><strong>Privacy policy for Google Analytics</strong></p>
          <p>Our website uses Google Analytics, a web analytics service provided by Google Inc, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. To deactivate Google Analytics, Google provides a browser plug-in at http://tools.google.com/dlpage/gaoptout?hl=de. Google Analytics uses cookies. These are small text files that make it possible to store specific user-related information on the user's device. These enable Google to analyze the use of our website. The information collected by the cookie about the use of our pages (including your IP address) is usually transmitted to a Google server in the USA and stored there. We would like to point out that on this website Google Analytics has been extended by the code "gat._anonymizeIp();" in order to ensure an anonymized collection of IP addresses (so-called IP masking). If anonymization is active, Google shortens IP addresses within member states of the European Union or in other contracting states of the Agreement on the European Economic Area, which is why no conclusions can be drawn about your identity. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there. Google complies with the data protection provisions of the "Privacy Shield" agreement and is registered with the "Privacy Shield" program of the US Department of Commerce and uses the information collected to evaluate the use of our websites, to compile reports for us in this regard and to provide us with other related services. You can find out more <u><a href="https://marketingplatform.google.com/about/">here</a></u>.</p>

                    <p><strong>Privacy policy for Google AdSens</strong></p>
          <p>Our website uses Google AdSense, a service for integrating advertisements from Google Inc, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google AdSense uses "cookies", which are text files placed on your computer, to help the website analyze how users use the site. Google AdSense also uses so-called web beacons (invisible graphics). These web beacons can be used to analyze information such as visitor traffic on these pages. The information generated by cookies and web beacons about the use of this website (including your IP address) and the delivery of advertising formats is transmitted to a Google server in the USA and stored there. This information may be passed on by Google to contractual partners of Google. However, Google will not merge your IP address with other data stored by you. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.</p>

                    <p><strong>Privacy policy for Facebook</strong></p>
          <p>ur website uses functions from Facebook Inc, 1601 S. California Ave, Palo Alto, CA 94304, USA. When you visit our pages with Facebook plug-ins, a connection is established between your browser and the Facebook servers. Data is already transmitted to Facebook in the process. If you have a Facebook account, this data can be linked to it. If you do not wish this data to be linked to your Facebook account, please log out of Facebook before visiting our site. Interactions, in particular the use of a comment function or clicking on a "Like" or "Share" button, are also passed on to Facebook. You can find out more <u><a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">here</a></u>.</p>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
