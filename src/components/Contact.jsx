const Contact = () => {
  return (
    <section id="contact" className="fade-in scroll-mt-24 py-16 bg-chic-bg dark:bg-chic-darkBg transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 xl:px-0 xl:max-w-5xl">
        <div className="space-y-2 pt-1 pb-4 sm:pt-2 sm:pb-6 md:space-y-5 md:pt-2">
          <h1 className="text-2xl font-extrabold leading-8 tracking-tight text-chic-text dark:text-chic-darkText sm:text-3xl sm:leading-9 md:text-4xl md:leading-11 lg:text-5xl lg:leading-13">
            <span className="text-chic-accent">Contact</span>
          </h1>
        </div>
        
        <div className="mt-8 space-y-4">
          <p className="text-lg sm:text-xl text-chic-muted dark:text-chic-darkMuted">
            Got a question or an idea? Let's connect! Email me at
            <a 
              className="ml-2 font-medium text-chic-text dark:text-chic-darkText underline underline-offset-4 hover:text-chic-accent dark:hover:text-chic-accent transition-colors decoration-1" 
              href="mailto:gotamesalina6@gmail.com" 
              aria-label="Send an email"
            >
              gotamesalina6@gmail.com
            </a>
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-8 text-chic-muted dark:text-chic-darkMuted">
            <p>
              <span className="font-medium text-chic-text dark:text-chic-darkText">Phone:</span> 
              <a href="tel:+9779761876679" className="ml-2 hover:text-chic-accent dark:hover:text-chic-accent transition-colors">
                +977 9761876679
              </a>
            </p>
            <p>
              <span className="font-medium text-chic-text dark:text-chic-darkText">Location:</span> 
              <span className="ml-2">Ghorahi, Dang, Nepal</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
