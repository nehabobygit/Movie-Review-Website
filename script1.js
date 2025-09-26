$(document).ready(function() {
    
    const movies = [
        //movie data array
        {
            id: 1,
            title: "Dune",
            poster: "resources/dune.jpeg",
            heroBg: "resources/dune_hs.jpg",
            description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes a prophetic figure who must avenge the fall of his noble house.",
            reviews: [
                { rating: 5, comment: "An epic masterpiece! The visuals and sound design are incredible." },
                { rating: 4, comment: "Great movie, but the story was a bit slow in parts." }
            ]
        },
        {
            id: 2,
            title: "Inception",
            poster: "resources/inception.jpg",
            heroBg: "resources/inception_hs.jpg",
            description: "A thief who enters the dreams of others to steal secrets from their subconscious minds is given a final chance at redemption by pulling off the ultimate heist.",
            reviews: [
                { rating: 5, comment: "Mind-bending and thrilling from start to finish. Nolan's best work!" },
                { rating: 5, comment: "I've watched it multiple times and still find new details." }
            ]
        },
        {
            id: 3,
            title: "Harry Potter and the Half-Blood Prince",
            poster: "resources/hbp.jpeg",
            heroBg: "resources/hbp_ss.jpg", 
            description: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old textbook marked 'This book is the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past.",
            reviews: [
                { rating: 4, comment: "A darker, more mature entry in the series. Great character development." },
                { rating: 4, comment: "Visually stunning and key to understanding Voldemort's history." }
            ]
        },
        {
            id: 4,
            title: "Avengers: Endgame",
            poster: "resources/avengers_endgame.jpg", 
            heroBg: "resources/avengers_endgame.webp", 
            description: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers - Thor, Black Widow, Captain America, and Bruce Banner - must figure out a way to bring back their vanquished allies for an epic showdown with Thanos.",
            reviews: [
                { rating: 5, comment: "The perfect culmination of a decade of storytelling. A cinematic event!" },
                { rating: 5, comment: "A roller coaster of emotions. Worth every minute of the three-hour runtime." }
            ]
        },
        {
            id: 5,
            title: "The Lord of the Rings: The Fellowship of the Ring",
            poster: "resources/LOR_FOR.jpg", 
            heroBg: "resources/LOR_FOR_hs.jpg",
            description: "A young hobbit, Frodo, is entrusted with a powerful ring and must embark on a perilous journey to destroy it in the fires of Mount Doom.",
            reviews: [
                { rating: 5, comment: "An epic beginning to an incredible trilogy. The world-building is unmatched." }
            ]
        },
        {
            id: 6,
            title: "The Dark Knight",
            poster: "resources/the_dark_knight.jpg", 
            heroBg: "resources/dark_knight_hs.jpg",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            reviews: [
                { rating: 5, comment: "Heath Ledger's Joker is legendary. A dark, intense superhero film." }
            ]
        },
        {
            id: 7,
            title: "Forrest Gump",
            poster: "resources/forest_gump.jpg", 
            heroBg: "resources/forest_gump_hs.jpg",
            description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with a low IQ.",
            reviews: [
                { rating: 4, comment: "A beautiful, heartwarming story with a great performance by Tom Hanks." }
            ]
        },
        {
            id: 8,
            title: "Fight Club",
            poster: "resources/fight_club.jpg", 
            heroBg: "resources/fight_club_hs.jpg",
            description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            reviews: [
                { rating: 5, comment: "A shocking and thought-provoking film with a twist you won't see coming." }
            ]
        },
        {
            id: 9,
            title: "Interstellar",
            poster: "resources/interstellar.jpg", 
            heroBg: "resources/interstellar_hs.jpg",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            reviews: [
                { rating: 5, comment: "Visually stunning and intellectually ambitious. A modern sci-fi classic." }
            ]
        },
        {
            id: 10,
            title: "The Hobbit: An Unexpected Journey",
            poster: "resources/hobbit.jpg", 
            heroBg: "resources/hobbit_hs.avif",
            description: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home from the dragon Smaug.",
            reviews: [
                { rating: 4, comment: "A fun and visually stunning adventure, a great start to the trilogy." },
                { rating: 3, comment: "It's a bit long, but the world feels so immersive." }
            ]
        },
        {
            id: 11,
            title: "Joker",
            poster: "resources/joker.jpg", 
            heroBg: "resources/joker_hs.webp",
            description: "A mentally troubled stand-up comedian embarks on a downward spiral that leads him to the streets of Gotham as the criminal mastermind Joker.",
            reviews: [
                { rating: 4, comment: "A powerful character study and a chilling performance from Joaquin Phoenix." }
            ]
        },
        {
            id: 12,
            title: "Mad Max: Fury Road",
            poster: "resources/mad_max.jpg", 
            heroBg: "resources/mad_max_hs.jpg",
            description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the help of a drifter and a group of female prisoners.",
            reviews: [
                { rating: 5, comment: "Non-stop action and jaw-dropping visuals. A masterpiece of the action genre." }
            ]
        },
        {
            id: 13,
            title: "The Mummy",
            poster: "resources/the_mummy.jpg", 
            heroBg: "resources/the_mummy_hs.jpg",
            description: "An ancient princess is awakened from her crypt beneath the desert, bringing with her a malevolence grown over millennia and terrors that defy human comprehension.",
            reviews: [
                { rating: 2, comment: "An action-packed blockbuster, but the story was very weak." },
                { rating: 3, comment: "Tom Cruise was good, but it felt more like an action film than a horror movie." }
            ]
        },
        {
            id: 14,
            title: "Fast & Furious 9 (F9)",
            poster: "resources/f9.jpg",
            heroBg: "resources/f9_hs.jpg",
            description: "Dom Toretto and his crew join forces to stop the most skilled assassin and high-performance driver they've ever encountered: Dom's forsaken brother.",
            reviews: [
                { rating: 3, comment: "Pure action and fun, but the plot is getting a little too wild." },
                { rating: 4, comment: "Great car chases! Exactly what I expect from this franchise." }
            ]
        },
        {
            id: 15,
            title: "John Wick: Chapter 2",
            poster: "resources/jw2.jpg",
            heroBg: "resources/jw_hs.jpg",
            description: "After returning to the criminal underworld to repay a debt, legendary hitman John Wick discovers that a large bounty has been placed on his life.",
            reviews: [
                { rating: 5, comment: "Keanu Reeves is incredible. The action choreography is top-notch." },
                { rating: 4, comment: "A solid sequel. I loved seeing more of the secret world of assassins." }
            ]
        }
    ];

    // Reference both background elements
    const $dynamicBg = $('#dynamic-bg'); 
    const $heroBanner = $('#hero-banner'); 
    const $heroTitle = $('#hero-title');
    const defaultHeroTitle = "Review a Movie";
    
    // Slideshow variables
    let currentSlideIndex = 0;
    let slideshowInterval;
    const slideshowImages = movies.slice(0, 15); 
    
    // Initialize slideshow
    function initializeSlideshow() {
        const $slideshow = $('#hero-slideshow');
        const $indicators = $('.slide-indicators');
        
        // Clear existing content
        $slideshow.empty();
        $indicators.empty();
        
        // Create slide images
        slideshowImages.forEach((movie, index) => {
            const slideElement = `
                <div class="slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img src="${movie.heroBg}" alt="${movie.title}" class="slide-image">
                </div>
            `;
            $slideshow.append(slideElement);
            
            // Create indicators
            const indicator = `<div class="indicator ${index === 0 ? 'active' : ''}" data-slide="${index}"></div>`;
            $indicators.append(indicator);
        });
        
        // Debug: Check if slides were created
        console.log('Slideshow initialized with', slideshowImages.length, 'slides');
        console.log('Active slide:', $('.slide.active').length);
        
        startSlideshow();
    }
    
    // Start automatic slideshow
    function startSlideshow() {
        slideshowInterval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    // Stop slideshow
    function stopSlideshow() {
        clearInterval(slideshowInterval);
    }
    
    // Go to next slide
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slideshowImages.length;
        updateSlide();
    }
    
    // Go to previous slide
    function prevSlide() {
        currentSlideIndex = currentSlideIndex === 0 ? slideshowImages.length - 1 : currentSlideIndex - 1;
        updateSlide();
    }
    
    // Update active slide
    function updateSlide() {
        $('.slide').removeClass('active');
        $('.indicator').removeClass('active');
        
        $(`.slide[data-index="${currentSlideIndex}"]`).addClass('active');
        $(`.indicator[data-slide="${currentSlideIndex}"]`).addClass('active');
    }
    
        
    // Indicator clicks
    $(document).on('click', '.indicator', function() {
        stopSlideshow();
        currentSlideIndex = parseInt($(this).data('slide'));
        updateSlide();
        startSlideshow();
    });
    
    // Pause slideshow on hover
    $('#hero-banner').on('mouseenter', function() {
        stopSlideshow();
    }).on('mouseleave', function() {
        startSlideshow();
    });

    // Set a default background image on load for the full-page background
    $dynamicBg.css('background-image', `url('${movies[0].heroBg}')`);
    
    // Initialize slideshow
    initializeSlideshow();

    function renderMovies(movieList) {
        $("#movie-list").empty();
        movieList.forEach(movie => {
            const movieCard = `
                <div class="col-md-4 mb-4">
                    <div class="card movie-card shadow-sm border-0"
                         data-id="${movie.id}" 
                         data-bg-url="${movie.heroBg}">
                        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}" style="height:340px;object-fit:cover;">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text text-truncate">${movie.description}</p>
                        </div>
                    </div>
                </div>
            `;
            $("#movie-list").append(movieCard);
        });
        // Fade-in effect for cards
        setTimeout(() => {
            $(".movie-card").css("opacity", "1");
        }, 100);
    }

    function displayMovieReviews(movie) {
        $("#user-reviews").empty();
        if (movie.reviews.length === 0) {
            $("#user-reviews").append('<p style="color: #f0f4f8;">No reviews yet. Be the first to add one! 📝</p>');
        } else {
            movie.reviews.forEach(review => {
                const reviewElement = `
                    <div class="card mb-2">
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 text-muted">${'⭐'.repeat(review.rating)}</h6>
                            <p class="card-text">${review.comment}</p>
                        </div>
                    </div>
                `;
                $("#user-reviews").append(reviewElement);
            });
        }
    }

    // 1. Initial rendering of all movies
    renderMovies(movies);

   // Store the default background image
    const defaultBg = movies[0].heroBg;

    // Mouse Enter (Hover ON)
    $(document).on('mouseenter', '.movie-card', function() {
    const bgUrl = $(this).data('bg-url');
    if (bgUrl) {
        $dynamicBg.css('background-image', `url('${bgUrl}')`); // Use bgUrl, not movie.heroBg
    }
    });

    // Mouse Leave (Hover OFF)
    $(document).on('mouseleave', '.movie-card', function() {
        $dynamicBg.css('filter', 'brightness(0.3) blur(5px)');
    });
    
    //Click on movie card (Detail View) with poster display
    $(document).on("click", ".movie-card", function() {
        const movieId = $(this).data("id");
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            $("#movie-list").hide();
            $("#movie-detail-section").show();
            $("#movie-title").text(movie.title);
            $("#movie-description").text(movie.description);
            
            // Set the movie poster in the detail view
            $("#movie-poster-detail").attr("src", movie.poster).attr("alt", movie.title);
            
            displayMovieReviews(movie);
            $("#review-form").data("movie-id", movieId);
            
            // Stop slideshow when viewing movie details
            stopSlideshow();
            
            // Set background for detail view (stays fixed)
            $dynamicBg.css('background-image', `url('${movie.heroBg}')`); 
            $dynamicBg.css('filter', 'brightness(0.8) blur(1px)');
        }
    });

    // Back button - KEPT AS IS
    $("#back-to-list").on("click", function() {
        $("#movie-detail-section").hide();
        $("#movie-list").show();
        
        // Restart slideshow when returning to main view
        startSlideshow();
        
        // Reset filter and background when returning to list
        $dynamicBg.css('filter', 'brightness(0.6) blur(3px)'); 
        $dynamicBg.css('background-image', 'none'); 
    });

    // Submit review - KEPT AS IS
    $("#review-form").on("submit", function(e) {
        e.preventDefault();
        const movieId = $(this).data("movie-id");
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            const newReview = {
                rating: $("#review-rating").val(),
                comment: $("#review-comment").val()
            };
            movie.reviews.push(newReview);
            displayMovieReviews(movie);
            $("#review-form")[0].reset();
        }
    });

    $("#movie-search-nav").on("keyup", function() {
        const searchText = $(this).val().toLowerCase();
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchText)
        );
        renderMovies(filteredMovies); 
    });
    
    // Handle login form submission
    $('#login-form').on('submit', function(e) {
        e.preventDefault();
        const name = $('#login-name').val();
        const email = $('#login-email').val();
        // You can add your login logic here
        $('#loginModal').modal('hide');
        alert(`Welcome, ${name}!`);
    });
});