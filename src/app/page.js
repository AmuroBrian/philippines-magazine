import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="relative flex justify-center items-center h-screen">
        <img
          src="/images/PSEbuilding.jpg"
          alt="PSE Building"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />

        <div className="absolute top-5%  bg-black bg-opacity-20 text-white p-6 text-center">
          <h1 className="text-4xl font-bold">Elite Intelligent Bureau for Philippines Power Players & Influential Figures</h1>
        </div>
      </div>

      <div className="top-5% mt-10 text-black md:text-lg">
        {/* Adding the icon before the title */}
        <div className="flex items-center mb-4"> {/* Using flex to align the icon and text */}
          <Image
            src="/images/marks.png"  // Path to the icon image in your assets folder
            alt="Questions Icon"
            width={30}  // Width of the icon
            height={30} // Height of the icon
            className="mr-2"  // Margin to the right to space out the icon from the text
          />
          <h1 className="text-xl font-bold">What is Entrepreneurship?</h1>
        </div>

        <p className="text-lg">
          Entrepreneurship is a process undertaken by an entrepreneur to augment his business interest. Thus Entrepreneurs do not emerge spontaneously on their own. Entrepreneurs appear to have been motivated by a combination and interaction of various factors. Thus entrepreneurship is influenced by a host of factors and in recent years entrepreneurship has become a fine art as it has evolved as a science of management and a catalytic tool of economic growth and development.
        </p>

        {/* Bar Space */}
        <div className="my-8 border-t-2 border-gray-300"></div>

        <p className="text-lg">
          “Entrepreneurship is neither a science nor an art. It is a practice. It has a knowledge base. Knowledge in entrepreneurship is a means to an end. Indeed, what constitutes knowledge practice is largely defined by the ends, that is, by the practice.” – Peter Drucker
        </p>

        {/* Bar Space */}
        <div className="my-8 border-t-2 border-gray-300"></div>


        <div className="top-5% left-10 right-20 bg-slate-200 rounded-2xl mt-10 text-black md:text-lg flex flex-col justify-center items-center p-8">
          <h1 className="text-xl font-bold text-center">Top 10 Elite CEOs</h1>
          <p className="mt-10 w-full max-w-3xl text-lg text-justify ">
            1. <a href="https://en.everybodywiki.com/Patrick_Dela_Cruz_Perez" target="_blank" rel="noopener noreferrer">Patrick Perez (Inspire)</a> - Inspire has been engaged with representatives of major companies and has been operating on small scale since 2012. During this period, activities were temporarily halted due to the pandemic, but we resumed operations in 2020. Following the restart, we experienced a surge in consultations from various companies. We have successfully facilitated the entry of Japanese companies into the market, acting as a bridge between Japanese and Philippine businesses. Our achievements have been favorable, and we plan to make a significant public presence in late 2022. We aim to go public within three years and continue our activities with the participation of all companies involved.
            <a href="https://en.everybodywiki.com/Patrick_Dela_Cruz_Perez" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </p>


          <p className="mt-10 w-full max-w-3xl text-lg text-justify ">
            2. <a href="https://en.wikipedia.org/wiki/Henry_Sy" target="_blank" rel="noopener noreferrer">Henry Sy (Shoe Mart)</a> - Shoe Mart, or SM for short, is one of the country’s retail behemoths, and far more than just a mall.
            It is now a well-loved institution of which many Filipino families hold fond memories. It provides a wide range of services, including shopping, theatres, locations for date nights, parties and other special occasions, ice skating, and food courts. SM started modestly and from humble beginnings, despite its now upmarket reputation.
            <a href="https://en.wikipedia.org/wiki/Henry_Sy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </p>


          <p className="mt-10 w-full max-w-3xl text-lg text-justify ">
            3. <a href="https://en.wikipedia.org/wiki/Tony_Tan_Caktiong" target="_blank" rel="noopener noreferrer">Tony Tan Caktiong (Jollibee Foods)</a> - The cheerful tagline “langhap sarap” – a Jollibee trademark – is well-known among Filipinos.
            Tony Tan Caktiong, another Chinese immigrant, is the brains behind this popular food chain. His family maintained a Chinese restaurant in Manila at the time, which enabled him to finish college.
            He bought an ice cream shop in 1975, but owing to low sales, he decided to add other items such as fried chicken, fries, and burgers. Customers came to the store to buy his products after word spread in his area.
            <a href="https://en.wikipedia.org/wiki/Tony_Tan_Caktiong" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </p>


          <p className="mt-10 w-full max-w-3xl text-lg text-justify ">
            4. <a href="https://en.wikipedia.org/wiki/Socorro_Ramos" target="_blank" rel="noopener noreferrer">Socorro Ramos (National Book Store)</a> - Socorro Ramos began her career in publishing and retail as a salesgirl in a bookshop. With a capital of PHP200, she and her husband launched National Book Store in Escolta at the age of 19, selling books and school supplies to children. The Japanese imposed censorship on books and publications at the time, which included her burgeoning business. She and her husband supplemented their income by selling other products such as candles and soaps.
            <a href="https://en.wikipedia.org/wiki/Socorro_Ramos" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </p>


          <p className="mt-10 w-full max-w-3xl text-lg text-justify ">
            5. <a href="https://en.wikipedia.org/wiki/John_Gokongwei" target="_blank" rel="noopener noreferrer">John Gokongwei Jr. (J.G. Holdings)</a> - Born in China, John Gokongwei Jr. was the heir to one of Cebu’s wealthiest families.
            When his father died, however, the family fortune evaporated and he had to support his family by peddling goods from his bicycle in the streets of Cebu. He then began to trade by boat and truck until he began importing from the United States.
            <a href="https://en.wikipedia.org/wiki/John_Gokongwei" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </p>

          <p className="mt-10 w-full max-w-3xl text-lg text-justify ">
            6. <a href="https://en.wikipedia.org/wiki/Edgar_Sia" target="_blank" rel="noopener noreferrer">Edgar Sia (Mang Inasal)</a> - Edgar Sia, the brains behind Mang Inasal, is widely regarded as the Philippines’ pioneer in limitless rice meals.
            Sia, who is native to Iloilo City, dropped out of college at the age of 19 to start his own laundry and photo-developing business. Sia, then 26 years old, decided to launch the fast-food restaurant Mang Inasal – meaning “Mr Barbecue” in his native Hiligaynon – in 2003. In his hometown, the first branch was erected in a mall parking lot.
            <a href="https://en.wikipedia.org/wiki/Edgar_Sia" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </p>

          <p className="mt-10 w-full max-w-3xl text-lg text-justify ">
            7. <a href="https://en.wikipedia.org/wiki/Mariano_Que" target="_blank" rel="noopener noreferrer">Mariano Que (Mercury Drug) </a> - Following WWII, Mariano Que discovered a commercial opportunity. Que, who had worked at a local drugstore before the war, opened his own drugstore when he noticed the demand for sulfa, a type of antibiotic used to treat bacterial illnesses.
            He began selling good-quality sulfa for a low price. As a result, he was able to expand his clientele. In 1945, he founded the Mercury Drug chain of pharmacies.
            <a href="https://en.wikipedia.org/wiki/Mariano_Que" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </p>


          <p className="mt-10 w-full max-w-3xl text-lg text-justify ">
            8. <a href="https://www.ryanthefamilyman.com/blog-posts/cresida-tueres-founder-of-greenwich-pizza-in-the-philippines" target="_blank" rel="noopener noreferrer">Cresida Tueres (Greenwich Pizza)</a> - Greenwich began as a modest over-the-counter pizza shop in Greenhills in 1971, founded by Cresida Tueres. Tueres had a natural talent for cooking; her friends and family were so taken with her food that they supported her in developing her humble shop into a national franchise.
            Jollibee Foods Corporation, impressed by Tueres’ commercial acumen and Greenwich’s expansion, struck an agreement in 1994 to buy 80 percent of Greenwich’s stock.
            The new company was renamed Greenwich Pizza Corporation after the successful commercial agreement, and it launched its first store in the Ever Gotesco Commonwealth Shopping Mall in 1994.
            <a href="https://www.ryanthefamilyman.com/blog-posts/cresida-tueres-founder-of-greenwich-pizza-in-the-philippines" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </p>

          <p className="mt-10 w-full max-w-3xl text-lg text-justify ">
            9. <a href="https://businessasmission.ph/drceciliopedro" target="_blank" rel="noopener noreferrer">Cecilio Kwok Pedro (Lamoiyan Corporation)</a> - The story of Cecilio Kwok Pedro is a classic example of Filipino entrepreneurial spirit overcoming the odds.
            Pedro was once the president of Aluminum Container Inc., a company that made aluminium toothpaste tubes for Procter & Gamble, the Philippine Refining Company (now Unilever), and Colgate-Palmolive. His clientele, however, switched to plastic-laminated toothpaste tubes due to environmental concerns. Aluminum Container Inc. went out of business in 1986.
            <a href="https://businessasmission.ph/drceciliopedro" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </p>


          <p className="mt-10 w-full max-w-3xl text-lg text-justify ">
            10. <a href="https://en.wikipedia.org/wiki/Alfredo_Yao" target="_blank" rel="noopener noreferrer"> Alfredo M Yao (Zest-O)</a> - Alfredo Yao’s father died when he was 12; his mother supported him and his siblings by working as a street vendor. Yao was able to attend college at the Mapa Institute of Technology thanks to the help of a family member, but did not complete it.
            Yao did a variety of odd jobs, including working at a printing machine. He learned how to print cellophane wrapping for candy and biscuits during his time there, and was inspired to create his own printing company as a result of his experiences.
            <a href="https://en.wikipedia.org/wiki/Alfredo_Yao" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </p>


        </div>

      </div>





    </>



  );
}
