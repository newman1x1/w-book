// Book data array - replace with your actual book data
const booksData = [
    {
        title: "The Search",
        author: "Eric Heuvel, Ruud van der Rol, Lorraine T. Miller (Translator), Lies Schippers (Translator)",
        description: "A graphic novel following a grandmother's revelation about her Holocaust experiences to her granddaughter, blending personal history with WWII education through compelling illustrations.",
        coverImage: "images/1.jpg",
        rating: "3.96",
        dateRead: "January 1,2007",
        goodreadsLink: "https://www.goodreads.com/book/show/6871847-the-search"
    },
    
    {
        title: "Double Indemnity",
        author: "James M. Cain",
        description: "A seminal work of noir fiction following insurance salesman Walter Huff as he gets entangled in a plot of murder and insurance fraud after meeting the seductive Phyllis Nirdlinger, exploring themes of greed and moral corruption.",
        coverImage: "images/3.jpg",
        rating: "4.06",
        dateRead: "January 1,1936",
        goodreadsLink: "https://www.goodreads.com/book/show/56616.Double_Indemnity"
    },
    {
        title: "The Memoirs of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        description: "A collection of eleven Sherlock Holmes short stories featuring iconic cases like 'The Final Problem' where Holmes confronts Moriarty, showcasing Doyle's mastery of detective fiction and Victorian-era mysteries.",
        coverImage: "images/4.jpg",
        rating: "4.30",
        dateRead: "December 1,1893",
        goodreadsLink: "https://www.goodreads.com/book/show/194373.The_Memoirs_of_Sherlock_Holmes"
    },
    {
        title: "Geronimo Stilton - The Hunt For The Golden Book",
        author: "Geronimo Stilton",
        description: "Geronimo Stilton's laptop, containing his anniversary book, is stolen just before his celebratory party. He and his friends must race against time to recover the laptop and publish the book before the deadline. The book also includes a bonus mini-mystery where Geronimo investigates a reported lake monster on Mouse Island.",
        coverImage: "images/5.jpg",
        rating: "4.32",
        dateRead: "January 1,2010",
        goodreadsLink: "https://www.goodreads.com/book/show/25451214-geronimo-stilton---the-hunt-for-the-golden-book"
    },
    {
        title: "The Merry Adventures of Robin Hood",
        author: "Howard Pyle",
        description: "A classic collection of stories chronicling the legendary outlaw's exploits in Sherwood Forest, featuring his recruitment of the Merry Men, battles with the Sheriff of Nottingham, and redistribution of wealth to the poor.",
        coverImage: "images/6.jpg",
        rating: "4.07",
        dateRead: "January 1,1883",
        goodreadsLink: "https://www.goodreads.com/book/show/93007.The_Merry_Adventures_of_Robin_Hood"
    },
    {
        title: "Strange Case of Dr Jekyll and Mr Hyde",
        author: "Robert Louis Stevenson",
        description: "A Gothic novella exploring the duality of human nature through the story of a London lawyer investigating strange occurrences between his friend Dr. Henry Jekyll and the sinister Edward Hyde, delving into themes of identity and morality.",
        coverImage: "images/7.jpg",
        rating: "3.83",
        dateRead: "January 1,1886",
        goodreadsLink: "https://www.goodreads.com/book/show/51496.Dr_Jekyll_and_Mr_Hyde"
    },
    
    {
        title: "World Famous Military Operations",
        author: "Vikas Khatri",
        description: "World Famous Military Operations as the name suggests captures various enthralling and awe-inspiring military operations that have taken place down the ages.",
        coverImage: "images/10.jpg",
        rating: "3.20",
        dateRead: "September 24,2011",
        goodreadsLink: "https://www.goodreads.com/book/show/16143596-world-famous-military-operations"
    },
    {
        title: "World FAMOUS ADVENTURES",
        author: "Vikas Khatri",
        description: "This is a book about men ordinary men who, by their daredevilry, became heroes overnight. The word 'IMPOSSIBLE' was not in their dictionary.",
        coverImage: "images/11.jpg",
        rating: "4.00",
        dateRead: "September 12,2011",
        goodreadsLink: "https://www.goodreads.com/book/show/27869306-world-famous-adventures"
    },
    {
        title: "World FAMOUS Mythologies",
        author: "Nemi Sharan Mittal",
        description: "I Think title is sufficient to describe the book.",
        coverImage: "images/12.jpg",
        rating: "2.80",
        dateRead: "September 15,2010",
        goodreadsLink: "https://www.goodreads.com/book/show/9181715-world-famous-mythologies"
    },
    {
        title: "The Ambler Warning / True Believer / Tyrannosaur Canyon / Quite Honestly",
        author: "Reader's Digest Association, Robert Ludlum, Nicholas Sparks, Douglas Preston, John Mortimer",
        description: "A reader's Digest Select Editions Hardcover book, containing 4 stories in 1 from top authors. A great read!",
        coverImage: "images/13.jpg",
        rating: "4.19",
        dateRead: "January 1,2006",
        goodreadsLink: "https://www.goodreads.com/book/show/8152987-the-ambler-warning-true-believer-tyrannosaur-canyon-quite-honestly"
    },
    {
        title: "The Lurking Fear",
        author: "H.P. Lovecraft",
        description: "A horror tale following a reporter's investigation into mysterious deaths in the Catskill Mountains, uncovering a degenerate family lineage and a monstrous entity that embodies themes of ancestral corruption and cosmic dread.",
        coverImage: "images/14.jpg",
        rating: "3.65",
        dateRead: "January 1,1923",
        goodreadsLink: "https://www.goodreads.com/book/show/8292118-the-lurking-fear"
    },
    {
        title: "The Horla",
        author: "Guy de Maupassant, Charlotte Mandell (Translator)",
        description: "A psychological horror novella chronicling a man's descent into madness as he becomes convinced of an invisible supernatural entity's presence, blurring the lines between mental illness and cosmic horror.",
        coverImage: "images/15.jpg",
        rating: "3.88",
        dateRead: "January 1,1886",
        goodreadsLink: "https://www.goodreads.com/book/show/77999.The_Horla"
    },
    {
        title: "The Call of Cthulhu",
        author: "H.P. Lovecraft",
        description: "A foundational cosmic horror story following investigations into a malevolent cosmic entity and its cult, revealing humanity's insignificance in a universe filled with ancient, incomprehensible beings.",
        coverImage: "images/16.jpg",
        rating: "4.03",
        dateRead: "February 1,1928",
        goodreadsLink: "https://www.goodreads.com/book/show/15730101-the-call_of_cthulhu"
    },
    {
        title: "Revolution 2020: Love, Corruption, Ambition",
        author: "Chetan Bhagat",
        description: "In a small Indian town, childhood friends Gopal and Raghav, both intelligent but with opposing ideals – one seeking wealth, the other revolution find themselves competing for the love of Aarti. As they navigate a corrupt and unfair society, their contrasting choices lead them down different paths, posing the question of who will ultimately succeed in love and life.",
        coverImage: "images/17.jpg",
        rating: "3.11",
        dateRead: "January 1,2011",
        goodreadsLink: "https://www.goodreads.com/book/show/12615008-revolution-2020"
    },
    {
        title: "Dakuan Da Munda",
        author: "Mintu Gurusaria",
        description: "The AutobioGraphy of Mintu Gurusaria",
        coverImage: "images/18.jpg",
        rating: "4.30",
        dateRead: "January 1,2015",
        goodreadsLink: "https://www.goodreads.com/book/show/41519867-dakuan-da-munda"
    },
    {
        title: "The Postman Always Rings Twice",
        author: "James M. Cain",
        description: "A noir classic about a drifter's passionate affair with a married woman that escalates into a murder plot, exploring themes of obsessive desire, moral decay, and the inevitability of consequences.",
        coverImage: "images/19.jpg",
        rating: "3.77",
        dateRead: "January 1,1934",
        goodreadsLink: "https://www.goodreads.com/book/show/25807.The_Postman_Always_Rings_Twice"
    },
    {
        title: "The Sign of the Four",
        author: "Arthur Conan Doyle",
        description: "A Sherlock Holmes mystery involving a stolen treasure, a secret pact among convicts, and a complex investigation that explores themes of colonial legacy, greed, and the limits of justice.",
        coverImage: "images/20.jpg",
        rating: "3.89",
        dateRead: "February 1,1890",
        goodreadsLink: "https://www.goodreads.com/book/show/608474.The_Sign_of_Four"
    },
    {
        title: "Love Stories That Touched My Heart",
        author: "Ravinder Singh (editor)",
        description: "Love Stories That Touched My Heart is an anthology of moving love stories selected from a nationwide contest by Penguin India. Chosen and edited by Ravinder Singh, these tales aim to capture the profound and indescribable feeling of love, reminding readers that true love exists.",
        coverImage: "images/21.jpg",
        rating: "3.57",
        dateRead: "December 10,2012",
        goodreadsLink: "https://www.goodreads.com/book/show/16282937-love-stories-that-touched-my-heart"
    },
    {
        title: "A Study in Scarlet",
        author: "Arthur Conan Doyle",
        description: "The first Sherlock Holmes novel introducing Holmes and Dr. Watson as they solve a murder rooted in Utah's Mormon history, establishing the detective's deductive methods and the duo's iconic partnership.",
        coverImage: "images/22.jpg",
        rating: "4.14",
        dateRead: "December 27,1887",
        goodreadsLink: "https://www.goodreads.com/book/show/102868.A_Study_in_Scarlet"
    },
    
    {
        title: "The Impossible Planet",
        author: "Philip K. Dick",
        description: "A philosophical science fiction story following space explorers investigating a seemingly sentient alien planet that challenges their perception of reality, exploring themes of cosmic insignificance and existential paradox.",
        coverImage: "images/25.jpg",
        rating: "3.91",
        dateRead: "October 1,1953",
        goodreadsLink: "https://www.goodreads.com/book/show/22774013-the-impossible-planet"
    },
    {
        title: "The Crystal Crypt",
        author: "Philip K. Dick",
        description: "A tense science fiction tale about the last survivors fleeing a Martian city's destruction, featuring psychological warfare and a shocking twist that explores themes of identity, deception, and xenophobia.",
        coverImage: "images/26.jpg",
        rating: "3.53",
        dateRead: "January 1,1954",
        goodreadsLink: "https://www.goodreads.com/book/show/6456323-the-crystal-crypt"
    },
    {
        title: "The Tell-Tale Heart",
        author: "Edgar Allan Poe",
        description: "A psychological horror short story about an unnamed narrator's descent into madness after committing murder, driven by obsession with a victim's eye and tormented by imagined heartbeat sounds that explore themes of guilt and paranoia.",
        coverImage: "images/27.jpg",
        rating: "4.24",
        dateRead: "January 1,1843",
        goodreadsLink: "https://www.goodreads.com/book/show/899492.The_Tell_Tale_Heart"
    },
    {
        title: "The Thirty-Nine Steps",
        author: "John Buchan",
        description: "A pioneering spy thriller following Richard Hannay's race to uncover a German conspiracy before World War I, establishing tropes of the man-on-the-run narrative while exploring themes of trust and pre-war paranoia.",
        coverImage: "images/28.jpg",
        rating: "3.60",
        dateRead: "January 1,1915",
        goodreadsLink: "https://www.goodreads.com/book/show/153492.The_39_Steps"
    },
    {
        title: "At First Sight",
        author: "Nicholas Sparks",
        description: "A romance novel exploring the complexities of love and trust as a newlywed couple faces unexpected challenges during pregnancy, blending emotional depth with Sparks' signature themes of fate and relationship trials.",
        coverImage: "images/29.jpg",
        rating: "3.86",
        dateRead: "September 5,2006",
        goodreadsLink: "https://www.goodreads.com/book/show/15924.At_First_Sight"
    },
    {
        title: "A Journey to the Centre of the Earth",
        author: "Jules Verne",
        description: "A pioneering science fiction adventure following Professor Lidenbrock, his nephew Axel, and guide Hans as they descend into an Icelandic volcano, discovering prehistoric wonders and confronting the limits of scientific exploration.",
        coverImage: "images/30.jpg",
        rating: "3.85",
        dateRead: "November 25,1864",
        goodreadsLink: "https://www.goodreads.com/book/show/8200488-a-journey-to-the-centre-of-the-earth"
    },
    {
        title: "Twenty Thousand Leagues Under the Sea",
        author: "Jules Verne",
        description: "A seminal science fiction adventure following Professor Aronnax, harpooner Ned Land, and Captain Nemo's submarine voyage aboard the Nautilus, exploring marine wonders while grappling with themes of scientific ambition, freedom, and humanity's relationship with nature.",
        coverImage: "images/31.jpg",
        rating: "3.89",
        dateRead: "January 1,1869",
        goodreadsLink: "https://www.goodreads.com/book/show/834333.20000_Leagues_Under_the_Sea"
    },
    {
        title: "The Most Dangerous Game",
        author: "Richard Connell",
        description: "A suspenseful thriller about big-game hunter Sanger Rainsford becoming prey on a remote island, confronting General Zaroff's twisted philosophy of hunting humans while exploring themes of survival, morality, and primal instincts.",
        coverImage: "images/32.jpg",
        rating: "3.95",
        dateRead: "January 19,1924",
        goodreadsLink: "https://www.goodreads.com/book/show/157076.The_Most_Dangerous_Game"
    },
    {
        title: "The Girl in Room 105",
        author: "Chetan Bhagat",
        description: "A contemporary thriller following Keshav Rajpurohit's investigation into his ex-girlfriend's murder, blending romance, suspense, and social commentary on modern Indian society, education, and relationships.",
        coverImage: "images/33.jpg",
        rating: "3.57",
        dateRead: "October 1,2018",
        goodreadsLink: "https://www.goodreads.com/book/show/41639186-the-girl-in-room-105"
    },
    {
        title: "The Girl Who Knew Too Much",
        author: "Vikrant Khanna",
        description: "Akshara, devastated by her mother's death, meets Harry in a park. He shares a story about a miraculous reunion, hoping to ease her pain. But Harry's true nature and the story's authenticity raise questions, leading Akshara to doubt everything.",
        coverImage: "images/34.jpg",
        rating: "3.18",
        dateRead: "April 17,2017", 
        goodreadsLink: "https://www.goodreads.com/book/show/35069386-the-girl-who-knew-too-much"
      },
      {
        title: "Gulliver's Travels",
        author: "Jonathan Swift",
        description: "A satirical novel that follows Lemuel Gulliver on his fantastical voyages to various lands, critiquing societal norms, politics, and human nature through witty allegories and parodies.",
        coverImage: "images/35.jpg",
        rating: "3.59",
        dateRead: "January 1,1726",
        goodreadsLink: "https://www.goodreads.com/book/show/7733.Gulliver_s_Travels"
      },
      {
        title: "Thriller",
        author: "James Patterson (Editor)",
        description: "A collection of short stories from various thriller authors, offering a diverse range of genres within the thriller category, including suspense, action, and horror.",
        coverImage: "images/36.jpg",
        rating: "3.48",
        dateRead: "January 1,2006",
        goodreadsLink: "https://www.goodreads.com/book/show/33672.Thriller"
      }, 
    
      {
        title: "Room Number 5",
        author: "Alora Kate",
        description: "One night filled with booze, drugs, handcuffs, a chair, and a little bit of sex was all it took to turn Mike’s life upside down … One Night.",
        coverImage: "images/38.jpg",
        rating: "3.67",
        dateRead: "October 2,2016",
        goodreadsLink: "https://www.goodreads.com/book/show/32686329-room-number-5"
      },
      {
        title: "One Arranged Murder",
        author: "Chetan Bhagat",
        description: "Amateur detectives Keshav and Saurabh, best friends and business partners, investigate a murder case that hits close to home, all while their friendship is strained by Keshav's teasing of Saurabh's fiancée, Prerna, and their blossoming arranged marriage romance. This thriller explores love, friendship, and crime as the two navigate the investigation and their personal conflicts.",
        coverImage: "images/39.jpg",
        rating: "3.65",
        dateRead: "January 1,2020",
        goodreadsLink: "https://www.goodreads.com/book/show/55024736-one-arranged-murder"
      },
      
      {
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        description: "A collection of Sherlock Holmes stories.",
        coverImage: "images/41.jpg",
        rating: "4.30",
        dateRead: "October 14,1892",
        goodreadsLink: "https://www.goodreads.com/book/show/3590.The_Adventures_of_Sherlock_Holmes"
      },
      {
        title: "The Godfather",
        author: "Mario Puzo",
        description: "The novel details the story of a fictional Mafia family based in New York City (and Long Beach, New York), headed by Vito Corleone. The novel covers the years 1945 to 1955, and also provides the back story of Vito Corleone from early childhood to adulthood.",
        coverImage: "images/42.jpg",
        rating: "4.39",
        dateRead: "March 10,1969",
        goodreadsLink: "https://www.goodreads.com/book/show/22034.The_Godfather"
      },
      {
        title: "The Sicilian",
        author: "Mario Puzo",
        description: "The year is 1950. Michael Corleone is nearing the end of his exile in Sicily. The Godfather has commanded Michael to bring a young Sicilian bandit named Salvatore Giuliano back with him to America. But Giuliano is a man entwined in a bloody web of violence and vendettas. In Sicily, Giuliano is a modern day Robin Hood who has defied corruption--and defied the Cosa Nostra. Now, in the land of mist-shrouded mountains and ancient ruins, Michael Corleone's fate is entwined with the dangerous legend of Salvatore Giuliano: warrior, lover, and the ultimate Siciliano.",
        coverImage: "images/43.jpg",
        rating: "4.03",
        dateRead: "November 1,1984",
        goodreadsLink: "https://www.goodreads.com/book/show/22026.The_Sicilian"
      },
      {
        title: "400 Days",
        author: "Chetan Bhagat",
        description: "The story revolves around the case of a missing child, with Keshav and Saurabh investigating amidst relationship complexities and societal issues.",
        coverImage: "images/44.jpg",
        rating: "3.84",
        dateRead: "January 1,2021",
        goodreadsLink: "https://www.goodreads.com/book/show/59060924-400-days"
      },
      {
        title: "Grave of the Fireflies",
        author: "Akiyuki Nosaka",
        description: "A semi-autobiographical novel based on the author's experiences before, during, and after the firebombing of Kobe in 1945, portraying the tragic story of two siblings struggling to survive in war-torn Japan.",
        coverImage: "images/45.jpg",
        rating: "4.05",
        dateRead: "October 1,1967",
        goodreadsLink: "https://www.goodreads.com/book/show/20261970-grave-of-the-fireflies"
      },
      {
        title: "How to Kill Your Family",
        author: "Bella Mackie",
        description: "Grace Bernard seeks revenge on her millionaire father's family after he refuses to help her dying mother. She systematically murders each family member in a darkly comedic and gruesome fashion. However, after successfully carrying out her plan, Grace finds herself imprisoned for a murder she did not commit.",
        coverImage: "images/46.jpg",
        rating: "3.53",
        dateRead: "June 10,2021",
        goodreadsLink: "https://www.goodreads.com/book/show/50224049-how-to-kill-your-family"
      },
      {
        title: "What If? Vol.1 #29 'What If the Avengers Defeated Everybody?'",
        author: "Steven Grant",
        description: "The Scarlet Centurion deceives the Avengers into believing that removing superpowers is necessary for peace. They then capture all super-powered individuals, heroes and villains, and the Centurion depowers them. Realizing their error, the Avengers, led by Thor, must fight to undo the Centurion's plan and restore powers to everyone.",
        coverImage: "images/47.jpg",
        rating: "3.25",
        dateRead: "January 1,1981",
        goodreadsLink: "https://www.goodreads.com/book/show/147017090-what-if-vol-1-29-what-if-the-avengers-defeated-everybody"
      },
      {
        title: "Tell Me a Story",
        author: "Ravinder Singh (Editor)",
        description: "A collection of heartwarming stories about events and incidents that have affected or changed the lives of the writers in ways that they cannot forget. Happy or sad, inspiring or shocking, these are stories of moments that have left an indelible mark on their lives.",
        coverImage: "images/48.jpg",
        rating: "3.55",
        dateRead: "July 23,2015",
        goodreadsLink: "https://www.goodreads.com/book/show/26185437-tell-me-a-story"
      },
      {
        title: "Thirteen Reasons Why",
        author: "Jay Asher",
        description: "After receiving cassette tapes from Hannah Baker, a classmate who recently committed suicide, Clay Jensen learns he is one of the thirteen reasons behind her decision. Listening to Hannah's tapes, Clay follows her story through their town, uncovering the painful events that led to her death and profoundly changing his own life.",
        coverImage: "images/49.jpg",
        rating: "3.84",
        dateRead: "October 18,2007",
        goodreadsLink: "https://www.goodreads.com/book/show/29844228-thirteen-reasons-why"
      },
      {
        title: "2 States",
        author: "Chetan Bhagat",
        description: "A story about Krish and Ananya. They are from two different states of India, deeply in love and want to get married. Of course, their parents don't agrees. To convert their love story into a love marriage, the couple have a tough battle in front of them. For it is easy to fight and rebel, but it is much harder to convince. Will they make it?",
        coverImage: "images/50.jpg",
        rating: "3.43",
        dateRead: "October 8,2009",
        goodreadsLink: "https://www.goodreads.com/book/show/6969361-2-states"
      }, 
      {
        title: "Our Impossible Love",
        author: "Durjoy Datta",
        description: "Aisha, a bit of a late bloomer, has to figure out what it means to be a woman and to be desired. Danish feels time is running out for him and he's going to end up as a nobody, as opposed to his overachieving, determined younger brother.",
        coverImage: "images/51.jpg",
        rating: "3.31",
        dateRead: "January 15,2016",
        goodreadsLink: "https://www.goodreads.com/book/show/28355669-our-impossible-love"
      },
      {
        title: "Half Girlfriend",
        author: "Chetan Bhagat",
        description: "A story about a Bihari boy who falls in love with a Delhi girl, but she only wants to be his half-girlfriend.",
        coverImage: "images/52.jpg",
        rating: "3.13",
        dateRead: "September 30,2014",
        goodreadsLink: "https://www.goodreads.com/book/show/22874559-half-girlfriend"
      },
      
      {
        title: "Take Me Home: The Inspiring Stories of 20 Entrepreneurs from Small Town India with Big-Time Dreams",
        author: "Rashmi Bansal",
        description: "'Take Me Home' tells the inspiring stories of 20 entrepreneurs from small towns across India who have built successful global businesses while remaining rooted in their communities. These stories demonstrate that location is no barrier to professional success, emphasizing the importance of vision, mission, and determination to achieve entrepreneurial dreams anywhere.",
        coverImage: "images/54.jpg",
        rating: "3.89",
        dateRead: "January 27,2014",
        goodreadsLink: "https://www.goodreads.com/book/show/20575023-take-me-home"
      },                 
];

// Update the displayBook function to use book cover as background
function displayBook(index) {
    const bookDisplay = document.getElementById('bookDisplay');
    const book = booksData[index];

    // Create book element
    const bookElement = document.createElement('div');
    bookElement.className = 'book-item current-book';
    bookElement.id = 'currentBook';

    // Set the book cover as background
    bookElement.style.backgroundImage = `url(${book.coverImage})`;

    // Create HTML structure for book
    bookElement.innerHTML = `
        <div class="book-cover">
            <img src="${book.coverImage}" alt="${book.title} cover">
        </div>
        <div class="book-details">
            <h2 class="book-title">${book.title}</h2>
            <div class="book-author">by ${book.author}</div>
            <div class="book-description">${book.description}</div>
            <div class="book-meta">
                ${book.rating ? `<div class="book-rating"><i class="fas fa-star"></i> ${book.rating}</div>` : ''}
                ${book.dateRead ? `<div class="book-date"><i class="fas fa-calendar"></i> ${book.dateRead}</div>` : ''}
            </div>
            <a href="${book.goodreadsLink}" target="_blank" class="book-goodreads">
                View on Goodreads <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;

    // Clear and append to display area
    bookDisplay.innerHTML = '';
    bookDisplay.appendChild(bookElement);

    // Update page indicator
    updatePageIndicator();
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');
    const errorMessage = document.getElementById('errorMessage');
    const booksContainer = document.getElementById('booksContainer');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Current book index
    let currentBookIndex = 0;
    let touchStartY = 0;

    // Password handling
    const correctPassword = "Books@123";

    // Initialize error message
    errorMessage.classList.remove('show');

    function handlePasswordSubmit() {
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === correctPassword) {
            // Hide error message if it was showing
            errorMessage.classList.remove('show');
            welcomeOverlay.classList.add('fade-out');
            
            // Hide overlay and show books after animation
            setTimeout(function() {
                welcomeOverlay.style.display = 'none';
                booksContainer.classList.remove('hidden');
                booksContainer.classList.add('visible');

                // Display first book
                if (booksData.length > 0) {
                    displayBook(currentBookIndex);
                }
            }, 500);
        } else {
            // Show error message with animation
            errorMessage.classList.add('show');
            passwordInput.value = '';
            
            // Hide error message after 2 seconds
            setTimeout(() => {
                errorMessage.classList.remove('show');
            }, 2000);
        }
    }

    // Event listeners for password
    submitPassword.addEventListener('click', handlePasswordSubmit);
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handlePasswordSubmit();
        }
    });

    // Function to handle book navigation based on direction
    function handleBookNavigation(direction) {
        if (direction === 'next' && currentBookIndex < booksData.length - 1) {
            currentBookIndex++;
            displayBook(currentBookIndex);
        } else if (direction === 'prev' && currentBookIndex > 0) {
            currentBookIndex--;
            displayBook(currentBookIndex);
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            handleBookNavigation('next');
        } else if (event.key === 'ArrowLeft') {
            handleBookNavigation('prev');
        }
    });

    // Touch navigation for mobile
    booksContainer.addEventListener('touchstart', function(event) {
        touchStartY = event.touches[0].clientY;
    });

    booksContainer.addEventListener('touchend', function(event) {
        const touchEndY = event.changedTouches[0].clientY;
        const touchDiff = touchStartY - touchEndY;

        // Minimum swipe distance threshold
        if (Math.abs(touchDiff) > 50) {
            if (touchDiff > 0) {
                handleBookNavigation('next');
            } else {
                handleBookNavigation('prev');
            }
        }
    });

    // Navigation buttons event listeners
    prevButton.addEventListener('click', function() {
        handleBookNavigation('prev');
    });

    nextButton.addEventListener('click', function() {
        handleBookNavigation('next');
    });
});

// Update page indicator function
function updatePageIndicator() {
    const pageIndicator = document.getElementById('pageIndicator');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    if (pageIndicator && booksData.length > 0) {
        const currentIndex = getCurrentBookIndex();
        pageIndicator.textContent = `${currentIndex + 1} / ${booksData.length}`;
    }

    // Enable/disable navigation buttons
    if (prevButton && nextButton) {
        const currentIndex = getCurrentBookIndex();
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === booksData.length - 1;
    }
}

// Helper function to get current book index
function getCurrentBookIndex() {
    const currentBook = document.getElementById('currentBook');
    if (!currentBook) return 0;

    const bookTitle = currentBook.querySelector('.book-title').textContent;
    return booksData.findIndex(book => book.title === bookTitle);
}